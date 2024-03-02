import pandas as pd
import plotly.express as px
import plotly


def city_analysis(df):
    # Number of Resturants in city
    df['CITY'] = df['CITY'].str.strip()
    cityDF = pd.DataFrame(df['CITY'].value_counts())
    cityDF = cityDF.reset_index()
    cityDF = cityDF[cityDF['count'] >= 20]
    cityDF = cityDF.rename(columns={"CITY": 'City', "count": 'Total'})
    city_fig = px.bar(cityDF, x='City', y='Total', title='Number of restaurants in each city')
    city_fig.update_layout(
        plot_bgcolor='rgba(0, 0, 0, 1)',  # Black background
        paper_bgcolor='rgba(0, 0, 0, 1)',  # Transparent plot area
        font_color='white'  # White text color
    )
    plot = plotly.io.to_json(city_fig, pretty=False)

    return plot


def facility_analysis(df):
    # Types of Restuarent pie chart
    facilityTypeDF = pd.DataFrame(df['FACILITYTYPE'].value_counts())
    facilityTypeDF = facilityTypeDF.reset_index()
    facilityType_fig = px.pie(facilityTypeDF, values='count', names='FACILITYTYPE', title='Breakdown of food place types')
    facilityType_fig.update_layout(
        plot_bgcolor='rgba(0, 0, 0, 1)',  # Black background
        paper_bgcolor='rgba(0, 0, 0, 1)',  # Transparent plot area
        font_color='white'  # White text color
    )
    plot = plotly.io.to_json(facilityType_fig, pretty=False)

    return plot


def number_of_restaurants_analysis(df):
    numRestWTime = pd.DataFrame(df['year'].value_counts())
    numRestWTime = numRestWTime.reset_index()
    numRestWTime = numRestWTime.rename(columns={"year": 'Year', "count": 'Number Of restaurants'})
    numRestWTime = numRestWTime.sort_values(by=['Year'])
    numRestWTime_fig = px.line(numRestWTime, x='Year', y="Number Of restaurants",
                               title='Number of Restuarants with time in Wake County')
    numRestWTime_fig.update_layout(
        plot_bgcolor='rgba(0, 0, 0, 1)',  # Black background
        paper_bgcolor='rgba(0, 0, 0, 1)',  # Transparent plot area
        font_color='white'  # White text color
    )
    plot = plotly.io.to_json(numRestWTime_fig, pretty=False)

    return plot


def map_of_restaurants(df):
    # Map that displays the resturants
    mapDF = df[['HSISID', 'NAME', 'CITY', 'X', 'Y', 'GEOCODESTATUS', 'FACILITYTYPE']].copy()
    mapDF['X'] = mapDF['X'].astype(float, errors='raise')
    mapDF['Y'] = mapDF['Y'].astype(float, errors='raise')
    token = "pk.eyJ1Ijoia2FyZGluaTMwMSIsImEiOiJja3dvZG84a2UwMXVwMm5zNm55aTcwcDcyIn0.82Pz65yxgNlgN60FhaS3OQ"
    px.set_mapbox_access_token(token)
    mapDF_fig = px.scatter_mapbox(mapDF, lat=mapDF['Y'], lon=mapDF['X'], hover_name="NAME", color=mapDF["FACILITYTYPE"])
    mapDF_fig.update_layout(
        plot_bgcolor='rgba(0, 0, 0, 1)',  # Black background
        paper_bgcolor='rgba(0, 0, 0, 1)',  # Transparent plot area
        font_color='white'  # White text color
    )
    plot = plotly.io.to_json(mapDF_fig, pretty=False)

    return plot


