from flask import Flask, request, jsonify
import json
import pandas as pd
import requests
from flask_cors import CORS


app = Flask(__name__)
CORS(app, origins='http://localhost:3000')


@app.route("/getCityList")
def hello_world():

    return "hello"


# API call to get the restaurants in wake county [Table title : Restaurants in Wake County]
def getRestaurantsDf():
    print('Fetching restaurants data...')
    val = 'https://opendata.arcgis.com/datasets/124c2187da8c41c59bde04fa67eb2872_0.geojson'
    # Sending get request and saving the response as response object
    # extracting data in json 
    r = requests.get(url = val)
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
    r = requests.get(url = val)
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
    r = requests.get(url = val)
    rows = []
    data = r.json()['features']
    for d in data:
        rows.append(d['properties'])
    df = pd.DataFrame(rows)
    print('restaurants df shape:', df.shape)
    print('Done')
    return df


#-------------------------------------------------------------------------------------------------------

def getListofCities():
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
    return options


#-------------------------------------------------------------------------------------------------------


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



if __name__ == '__main__':
    app.run()


