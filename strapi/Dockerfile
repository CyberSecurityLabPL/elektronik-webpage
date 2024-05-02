FROM node:18
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN corepack enable
# COPY ./yarn.lock ./
WORKDIR /opt/app
COPY ./ .
RUN yarn install --network-timeout 100000
EXPOSE ${PORT}
CMD ["npm", "run", "develop"]
