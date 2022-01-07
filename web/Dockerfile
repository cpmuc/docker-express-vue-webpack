# develop stage
FROM node:lts-alpine as develop-stage
WORKDIR /usr/src/web
COPY package*.json ./

RUN ls

RUN yarn

RUN yarn global add @vue/cli @vue/cli-service-global 

# RUN npm rebuild node-sass

COPY . .

# build stage
FROM develop-stage as build-stage
CMD ["yarn", "run", "build"]

# production stage
# TODO
