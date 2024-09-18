# Use an official Node.js image as the base image
FROM node:18

# Install any additional packages if needed
# RUN apt-get update && apt-get install -y <package>

# Set the working directory
WORKDIR /usr/src/app

# Copy your application code to the container (optional, based on your needs)
# COPY . .

# Set the default command to run your application or tests
# CMD ["npm", "start"]
