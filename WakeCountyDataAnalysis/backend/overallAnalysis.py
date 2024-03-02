import json
import pandas as pd
import plotly.express as px
import plotly


def inspector_analysis(df):
    # bar graph of number of inspections by inspector
    inspector = pd.DataFrame(df['INSPECTEDBY'].value_counts())
    inspector = inspector.reset_index()
    inspector = inspector.rename(columns={"INSPECTEDBY": 'TOTAL', 'count': 'Inspector Name'})
    inspector = inspector.head(20)
    inspector_fig = px.bar(inspector, x='Inspector Name', y='TOTAL', title='Number of inspections by Inspector')
    inspector_fig.update_layout(
        plot_bgcolor='rgba(0, 0, 0, 1)',  # Black background
        paper_bgcolor='rgba(0, 0, 0, 1)',  # Transparent plot area
        font_color='white'  # White text color
    )
    plot = plotly.io.to_json(inspector_fig, pretty=False)

    return plot


def total_violations(df):
    # Bar grap of total violation by violation type code
    violationCode = pd.DataFrame(df['VIOLATIONCODE'].value_counts())
    violationCode = violationCode.reset_index()
    violationCode = violationCode.rename(columns={"VIOLATIONCODE": 'TOTAL', 'count': 'Violation Code'})
    violationCode = violationCode.head(20)
    violationCode_fig = px.bar(violationCode, x='Violation Code', y='TOTAL', title='Total of Violation Types')
    violationCode_fig.update_layout(
        plot_bgcolor='rgba(0, 0, 0, 1)',  # Black background
        paper_bgcolor='rgba(0, 0, 0, 1)',  # Transparent plot area
        font_color='white'  # White text color
    )
    plot = plotly.io.to_json(violationCode_fig, pretty=False)

    return plot


def top_20_restaurants(df, restaurants):

    dfCriticalYes = df[df['CRITICAL'] == "Yes"]
    criticalDF = pd.DataFrame(dfCriticalYes['HSISID'].value_counts())
    criticalDF = criticalDF.reset_index()
    # criticalDF = criticalDF.rename(columns={"HSISID": 'TOTAL', 'count': 'HSISID'})
    criticalDF = criticalDF.head(20)
    criticalDF.set_index('HSISID', inplace=True)
    restaurantsBasicInfo = restaurants[["NAME", 'HSISID', 'ADDRESS1', 'CITY']]
    restaurantsBasicInfo.set_index('HSISID', inplace=True)
    topInspecRestDF = criticalDF.merge(restaurantsBasicInfo, left_index=True, right_index=True, how='left')
    plot = topInspecRestDF.to_json(orient='records')

    return plot

