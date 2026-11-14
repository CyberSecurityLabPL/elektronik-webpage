# Use a more specific base image
FROM node:20-alpine

# Set NODE_ENV
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN apk add --no-cache tzdata

# Set working directory
WORKDIR /opt/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci --verbose

# Copy app source
COPY . .

RUN echo "NODE_ENV during build = $NODE_ENV"

# RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

RUN if [ "$NODE_ENV" = "production" ]; then \
      echo "Building admin..."; \
      npm run build; \
      echo "Admin build finished"; \
    fi

# Expose the port your app runs on
EXPOSE ${PORT}

# Start the app
CMD if [ "$NODE_ENV" = "development" ]; then npm run develop; else npm run start; fi
