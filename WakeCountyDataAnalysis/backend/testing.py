import json
import pandas as pd
import requests

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

def handle_post_request_get_year():
    df = getRestaurantsDf()
    # Convert the 'datetime_column' to a Pandas datetime object
    df['RESTAURANTOPENDATE'] = pd.to_datetime(df['RESTAURANTOPENDATE'])
    # Extract the year and create a new column 'year'
    df['RESTAURANTOPENDATE'] = df['RESTAURANTOPENDATE'].dt.year
    list_of_year = df['RESTAURANTOPENDATE'].unique()

    valueCount = 0
    options = []
    for year in list_of_year:
        temp = {
            "value": valueCount,
            "label": year
        }
        options.append(temp)
    return options


print(handle_post_request_get_year())