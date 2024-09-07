# Use a more specific base image
FROM node:18-alpine

# Set NODE_ENV
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /opt/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app source
COPY . .

RUN ln -s opt/app/node_modules/@ckeditor /opt/app/src/plugins 

# Expose the port your app runs on
EXPOSE ${PORT}

# Start the app
CMD ["npm", "run", "develop"]