from flask import Flask, request, jsonify
import json
import pandas as pd
import plotly.express as px
import plotly
from flask_cors import CORS
import requests
import overallAnalysis
import restaurantAnalysis


app = Flask(__name__)
CORS(app)


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


# API call to get the inspection data for a specific restaurants in wake county [Table title : Food Inspection
# Violations]
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


# API call to get the inspection data for all restaurants in wake county [Table title : Food Inspection Violations](
# reading 420K~ rows)
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


@app.route('/restaurants/getRestaurants', methods=['GET'])
def get_restaurant():
    df = getRestaurantsDf()
    df = df[["HSISID", "NAME", "ADDRESS1", "ADDRESS2", "CITY", "POSTALCODE", "PHONENUMBER", "FACILITYTYPE", "PERMITID","RESTAURANTOPENDATE"]]
    df = df.to_json(orient='records')
    return df, 200


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

    # Get into of the Restaurant
    val = f"https://maps.wake.gov/arcgis/rest/services/Inspections/RestaurantInspectionsOpenData/MapServer/0/query?where=HSISID='{inp1}'&where=1%3D1&outFields=*&outSR=4326&f=json"
    r = requests.get(url=val)
    data = r.json()['features'][0]
    data = data['attributes']
    data = json.dumps(data)

    # set the dataframe with HSISID input
    df = getOneRestaurantInspDf(inp1)
    dfCriticalYes = df[df['CRITICAL'] == "Yes"]

    # category pie chart
    categoryDF = pd.DataFrame(dfCriticalYes['CATEGORY'].value_counts())
    categoryDF = categoryDF.reset_index()
    fig1 = px.pie(categoryDF, values='count', names='CATEGORY', title='Breakdown of Category of risk factor for '
                                                                      'Critical Inspections')
    fig1.update_layout(
        plot_bgcolor='rgba(0, 0, 0, 1)',  # Black background
        paper_bgcolor='rgba(0, 0, 0, 1)',  # Transparent plot area
        font_color='white'  # White text color
    )
    graph = plotly.io.to_json(fig1, pretty=False)

    # number of critical inspections
    criticalDF = (pd.DataFrame(df['CRITICAL'].value_counts()))
    criticalDF_HTML = criticalDF.to_json(orient='records')

    # description of inspection findings totals
    descDF = pd.DataFrame(dfCriticalYes['SHORTDESC'].value_counts())
    descDF = descDF.reset_index()
    descDF = descDF.rename(columns={'SHORTDESC': 'Description'})
    descDF_HTML = descDF.to_json(orient='records')

    # violation type total
    violationDF = pd.DataFrame(df['VIOLATIONTYPE'].value_counts())
    violationDF.index.name = 'Violation Type'
    violationDF = violationDF.rename(columns={"VIOLATIONTYPE": 'TOTAL'})
    violationDF = violationDF.reset_index()
    fig2 = px.bar(violationDF, x='Violation Type', y='count',
                  title='Breakdown of Category of risk factor for Critical Inspections')
    fig2.update_layout(
        plot_bgcolor='rgba(0, 0, 0, 1)',  # white background
        paper_bgcolor='rgba(0, 0, 0, 1)',  # Transparent plot area
        font_color='white'  # White text color
    )
    violation = plotly.io.to_json(fig2, pretty=False)

    graphs = {'graph': json.loads(graph), 'critical': json.loads(criticalDF_HTML), 'desc': json.loads(descDF_HTML),
              'violation': json.loads(violation), 'info': json.loads(data)}

    return json.dumps(graphs)


# -------------------------------------------------------------------------------------------------------
# Overall Analysis API


@app.route('/restaurants/overallAnalysisGraphs', methods=['GET'])
def overall_analysis():

    df = getInspectionDf()
    restaurants = getRestaurantsDf()

    inspector = overallAnalysis.inspector_analysis(df)
    violationCode = overallAnalysis.total_violations(df)
    top20Rest = overallAnalysis.top_20_restaurants(df, restaurants)

    graphs = {'inspector': json.loads(inspector),
              'violationCode': json.loads(violationCode),
              'top20Rest': json.loads(top20Rest)
              }

    return json.dumps(graphs), 200


@app.route('/restaurants/restaurantsAnalysisGraphs', methods=['GET'])
def restaurant_analysis():

    df = getRestaurantsDf()

    city = restaurantAnalysis.city_analysis(df)
    facility = restaurantAnalysis.facility_analysis(df)
    num_restaurants = restaurantAnalysis.number_of_restaurants_analysis(df)
    map_fig = restaurantAnalysis.map_of_restaurants(df)

    graphs = {'city': json.loads(city),
              'facility': json.loads(facility),
              'num_restaurants': json.loads(num_restaurants),
              'map_fig': json.loads(map_fig)
              }

    return json.dumps(graphs), 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)

#     /restaurants/getRestaurants
