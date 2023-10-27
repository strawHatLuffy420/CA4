# Use the official PostgreSQL image from Docker Hub
FROM postgres:13

# Set environment variables for the PostgreSQL database
ENV POSTGRES_DB=dbname
ENV POSTGRES_USER=dbuser
ENV POSTGRES_PASSWORD=dbpassword


# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Expose port 80
EXPOSE 80

# Define the command to start your Node.js application
CMD [ "node", "server.js" ]
