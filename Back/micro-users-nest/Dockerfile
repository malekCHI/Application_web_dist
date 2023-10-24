# Base image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy all other source code to the working directory
COPY . .

# Expose the port your application uses
EXPOSE 4000

# Start your application
CMD ["npm", "start"]