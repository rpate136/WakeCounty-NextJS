# WakeCounty-NextJS

## Description
I am building a web app to display analysis of data that wake county provides. This is a redesign of a application using Next JS framework.

I am using pandas to do the analytics and plotly to make graphs. The front end is made using NextJS and react and the backend API's are made using flask.

I am working on implementing devops principles of continuous integration / deployment by using docker, GitHub action, and AWS.

## How to run
To run the application locally, clone the repo and run the cmd in the root
```bash
docker-compose up -d
```
The docker images can be found Here: 
https://hub.docker.com/r/kardini301/wake_county_webapp   OR
```bash
docker pull kardini301/wake_county_webapp
```

## Deploying
I am currently working on efficient architecture a solution to deploying this application on AWS. My initial plan was to use the ECR server to host the docker images and ECS for running tasks to deploy them in the same EC2 instance. However, there are many networking related hurdles to solve.

## Wake county data info and old video
The Overall Inspection page on the website is reading 420K+ rows and so will take 40-50 seconds to load depending on your processor. 

Link to wake county data: 
https://data-wake.opendata.arcgis.com/search?tags=restaurants

Link to Project Explanation video (Old website made using Django):
https://www.youtube.com/watch?v=y8Us1HkYDL4&ab_channel=icelion7
