import pandas as pd
import plotly.express as px
import requests
import json

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


def oneRestaurantOutput():
    # get the input
    inp1 = "04092017012"
    # set the dataframe with HSISID input
    df = getOneRestaurantInspDf(inp1)
    dfCriticalYes = df[df['CRITICAL'] == "Yes"]

    # category pie chart
    categoryDF = pd.DataFrame(dfCriticalYes['CATEGORY'].value_counts())
    categoryDF = categoryDF.reset_index()
    #print(categoryDF)
    fig1 = px.pie(categoryDF, values='count', names='CATEGORY',
                  title='Breakdown of Category of risk factor for Critical Inspections')
    graph = fig1.to_html(full_html=False, default_height=500, default_width=700)

    # number of critical inspections
    criticalDF = (pd.DataFrame(df['CRITICAL'].value_counts()))
    criticalDF = criticalDF.to_dict()
    criticalDF = json.dumps(criticalDF)

    # description of inspection findings totals
    descDF = pd.DataFrame(dfCriticalYes['SHORTDESC'].value_counts())
    descDF.index.name = 'Description'
    descDF_HTML = descDF.to_html()

    # violation type total
    violationDF = pd.DataFrame(df['VIOLATIONTYPE'].value_counts())
    violationDF.index.name = 'Violation Type'
    violationDF = violationDF.rename(columns={"VIOLATIONTYPE": 'TOTAL'})
    violationDF = violationDF.reset_index()
    print(violationDF)
    fig2 = px.bar(violationDF, x='Violation Type', y='count',
                  title='Breakdown of Category of risk factor for Critical Inspections')
    violationBar = fig2.to_html(full_html=False, default_height=500, default_width=700)

    graphs = {'graph': graph, 'critical': criticalDF, 'desc': descDF, 'violation': violationBar}

    return type(graphs["critical"])


print(oneRestaurantOutput())