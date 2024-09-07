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
RUN npm ci

# Copy app source
COPY . .

# Create symlink for CKEditor
# RUN mkdir -p /opt/app/src/plugins/strapi-plugin-ckeditor && \
#     ln -s /opt/app/node_modules/@ckeditor/strapi-plugin-ckeditor /opt/app/src/plugins/strapi-plugin-ckeditor

# Expose the port your app runs on
EXPOSE ${PORT}

# Start the app
CMD ["npm", "run", "develop"]