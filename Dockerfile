# Use an Ubuntu base image
FROM ubuntu:20.04

# Install required dependencies (curl and software-properties-common)
RUN apt-get update && \
    apt-get install -y curl software-properties-common

WORKDIR /app

# Install any necessary utilities (curl and software-properties-common)
RUN apt-get update && apt-get install -y curl software-properties-common

# Install Node.js and npm from the official Node.js Docker image
RUN curl -fsSL https://deb.nodesource.com/setup_19.x | bash - && \
    apt-get install -y nodejs

# Add the deadsnakes PPA and install Python 3.11
RUN add-apt-repository -y ppa:deadsnakes/ppa && \
    apt-get update && \
    apt-get install -y python3.11 python3-pip

# Verify installations
RUN node -v && python3.11 --version

# Set the working directory in the container
WORKDIR /app

# # install next js
# RUN npm install next react react-dom

# Copy the code
COPY WakeCountyDataAnalysis /app/WakeCountyDataAnalysis


WORKDIR /app/WakeCountyDataAnalysis/frontend
RUN npm install

# WORKDIR /app/WakeCountyDataAnalysis/backend

# # # Generate the requirements.txt file
# # RUN pip freeze > requirements.txt

# # Install the Python dependencies from requirements.txt
# RUN pip install -r requirements.txt

# RUN flask run

# Expose a port that the app will listen on
EXPOSE 3000 5000

WORKDIR /app/WakeCountyDataAnalysis/frontend

# Define the command to run your application
CMD ["npm", "run", "dev"]
