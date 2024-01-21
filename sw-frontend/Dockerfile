# Use the official Node image as a parent image
FROM node:14

# Set the working directory to /sw-frontend
WORKDIR /sw-frontend

# Copy the current directory contents into the container at /sw-frontend
COPY . /sw-frontend

# Install dependencies
RUN npm install

# Make port 4200 available to the world outside this container
EXPOSE 4200

# Define the command to run your Angular application
CMD ["npm", "start"]