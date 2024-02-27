from flask import Flask, request, jsonify
import json
import pandas as pd
import plotly.express as px
import plotly
from flask_cors import CORS
import requests
import logging

app = Flask(__name__)
CORS(app, resources={r"/restaurants/*": {"origins": "http://localhost:3000"}})


# API call to get the restaurants in wake county [Table title : Restaurants in Wake County]
def getRestaurantsDf():
    print('Fetching restaurants data...')
    val = 'https://opendata.arcgis.com/datasets/124c2187da8c41c59bde04fa67eb2872_0.geojson'
    # Sending get request and saving the response as response object
    # extracting data in json 
    r = requests.get(url=val)
    rows = []
    data = r.json()['features']
    for d in data:
        rows.append(d['properties'])
    df = pd.DataFrame(rows)
    df['CITY'] = df['CITY'].str.strip()
    df = df.apply(lambda x: x.astype(str).str.upper())
    df = df.replace("FUQUAY-VARINA", "FUQUAY VARINA")
    df['year'] = pd.DatetimeIndex(df['RESTAURANTOPENDATE']).year
    df['month'] = pd.DatetimeIndex(df['RESTAURANTOPENDATE']).month
    print('restaurants df shape:', df.shape)
    return df


# API call to get the inspection data for a specific restaurants in wake county [Table title : Food Inspection Violations]
def getOneRestaurantInspDf(id):
    print('Fetching restaurants data...')
    val = f"https://maps.wakegov.com/arcgis/rest/services/Inspections/RestaurantInspectionsOpenData/MapServer/2/query?where=HSISID='{id}'&where=1%3D1&outFields=*&outSR=4326&f=json"
    # Sending get request and saving the response as response object
    # extracting data in json 
    r = requests.get(url=val)
    rows = []
    data = r.json()['features']
    for d in data:
        rows.append(d['attributes'])
    df = pd.DataFrame(rows)
    print('restaurants df shape:', df.shape)
    return df


# API call to get the inspection data for all restaurants in wake county [Table title : Food Inspection Violations](reading 420K~ rows)
def getInspectionDf(forceFetch=False):
    print('Fetching restaurants data...')
    val = 'https://opendata.arcgis.com/datasets/9b04d0c39abd4e049cbd4656a0a04ba3_2.geojson'

    # Sending get request and saving the response as response object
    # extracting data in json 
    r = requests.get(url=val)
    rows = []
    data = r.json()['features']
    for d in data:
        rows.append(d['properties'])
    df = pd.DataFrame(rows)
    print('restaurants df shape:', df.shape)
    print('Done')
    return df


# -------------------------------------------------------------------------------------------------------
# getRestaurant page API
@app.route('/restaurants/getList', methods=['GET'])
def handle_post_request():
    df = getRestaurantsDf()
    listOfCities = df['CITY'].unique()
    valueCount = 0
    options = []
    for city in listOfCities:
        temp = {
            "value": valueCount,
            "label": city
        }
        options.append(temp)

    return jsonify(options), 200


@app.route('/restaurants/getYear', methods=['GET'])
def handle_post_request_get_year():
    df = getRestaurantsDf()
    # Convert the 'datetime_column' to a Pandas datetime object
    df['RESTAURANTOPENDATE'] = pd.to_datetime(df['RESTAURANTOPENDATE'])
    # Extract the year and create a new column 'year'
    df['RESTAURANTOPENDATE'] = df['RESTAURANTOPENDATE'].dt.year
    list_of_year = df['RESTAURANTOPENDATE'].unique()
    list_of_year = sorted(list_of_year)
    list_of_year = [str(x) for x in list_of_year]

    valueCount = 0
    options = []
    for year in list_of_year:
        temp = {
            "value": valueCount,
            "label": year
        }
        options.append(temp)
    return jsonify(options), 200


@app.route('/restaurants/getRestaurants', methods=['GET'])
def search_restaurants_output():
    try:
        # Retrieve query parameters from the request
        inp1 = request.args.get('city')
        inp2 = request.args.get('year')

        # Ensure both city and year parameters are provided
        if inp1 is None or inp2 is None:
            return "City and year parameters are required", 400

        restaurants = getRestaurantsDf()
        df_search = restaurants.loc[(restaurants['CITY'] == inp1) & (restaurants['year'] == int(inp2))]
        df_search = df_search.drop(["OBJECTID", "RESTAURANTOPENDATE", "X", "Y", "GEOCODESTATUS", "month"], axis=1)
        df_search = df_search.sort_values(by=['NAME'])

        # Convert DataFrame to JSON
        df_json = df_search.to_json(orient='records')

        return df_json, 200
    except Exception as e:
        print("Error:", e)
        return "An error occurred", 500


@app.route('/restaurants/oneRestGraphs', methods=['GET'])
def oneRestaurantOutput():

    # Retrieve query parameters from the request
    inp1 = request.args.get('hsid')
    print(inp1)

    # Ensure both city and year parameters are provided
    if inp1 is None:
        return "Failed to get HSISID", 400

    # set the dataframe with HSISID input
    df = getOneRestaurantInspDf(inp1)
    dfCriticalYes = df[df['CRITICAL'] == "Yes"]

    # category pie chart
    categoryDF = pd.DataFrame(dfCriticalYes['CATEGORY'].value_counts())
    categoryDF = categoryDF.reset_index()
    fig1 = px.pie(categoryDF, values='count', names='CATEGORY', title='Breakdown of Category of risk factor for Critical Inspections')
    fig1.update_layout(
        plot_bgcolor='rgba(0, 0, 0, 1)',  # Black background
        paper_bgcolor='rgba(0, 0, 0, 0)',  # Transparent plot area
        font_color='white'  # White text color
    )
    graph = plotly.io.to_json(fig1, pretty=False)
    #graph = fig1.to_html(full_html=False, default_height=500, default_width=700, include_plotlyjs=False)

    # number of critical inspections
    criticalDF = (pd.DataFrame(df['CRITICAL'].value_counts()))
    criticalDF_HTML = criticalDF.to_json(orient='records')

    # description of inspection findings totals
    descDF = pd.DataFrame(dfCriticalYes['SHORTDESC'].value_counts())
    descDF.index.name = 'Description'
    descDF_HTML = descDF.to_json(orient='records')

    # violation type total
    violationDF = pd.DataFrame(df['VIOLATIONTYPE'].value_counts())
    violationDF.index.name = 'Violation Type'
    violationDF = violationDF.rename(columns={"VIOLATIONTYPE": 'TOTAL'})
    violationDF = violationDF.reset_index()
    fig2 = px.bar(violationDF, x='Violation Type', y='count',
                  title='Breakdown of Category of risk factor for Critical Inspections')
    violationBar = fig2.to_html(full_html=False, default_height=500, default_width=700)

    graphs = {'graph': graph, 'critical': str(criticalDF_HTML), 'desc': str(descDF_HTML), 'violation': violationBar}
    graphs = {'graph': json.loads(graph), 'critical': '', 'desc': '', 'violation': ''}

    return json.dumps(graphs)


if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5001)
    logging.basicConfig(filename='error.log', level=logging.DEBUG)
