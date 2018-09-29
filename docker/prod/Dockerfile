# BUILD STAGE

# Builds the application, producing final, minified assets.
# This is a separate stage in order to keep the final production image small as it
# does not have to add and them remove the tools required for the build
# (such as node/npm).

FROM node:10-alpine as build-stage

# Make the 'app' folder the current working directory.
WORKDIR /app

# Copy both 'package.json' and 'yarn.lock'.
COPY package.json ./
COPY yarn.lock ./

# Install project dependencies.
RUN npm install -g yarn && yarn install

# Copy project files and folders to the current working directory (i.e. 'app' folder).
COPY ../.. .

# Build app for production with minification.
RUN yarn build


# PRODUCTION STAGE

# Produces the final production image. This image is kept as small as possible
# by building the application in a separate stage, then copying just the build
# result into this image.

FROM nginx:1.13.12-alpine as production-stage

# Copy the built assets so they can be served by nginx.
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
