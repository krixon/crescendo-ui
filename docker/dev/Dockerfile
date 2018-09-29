FROM node:10-alpine

ARG HOST_USER_UID
ARG HOST_USER_GID

# Clean up the node user which (for some reason best known to the authors) the base image
# creates automatically. This user has UID=1000 which is the most common UID for the host
# user to have. To avoid permissions errors with mounted volumes, the UID and GID should
# match on the host and the container. If the host UID is 1000, we could just use the
# node user, but because the host UID might not be 1000, we instead start from scratch
# to avoid trying to create a new user with an existing UID, which would fail.
RUN echo 'Removing node user' && \
    deluser --remove-home node && \
    echo "Creating group with ID ${HOST_USER_GID} to match the host user's group" && \
    addgroup -g ${HOST_USER_GID} -S dev && \
    echo "Creating user with ID ${HOST_USER_UID} to match the host user" && \
    adduser -u ${HOST_USER_UID} -S dev -g ${HOST_USER_GID}

RUN echo 'Installing yarn' && \
    npm install -g yarn && \
    echo 'Installing Vue CLI' && \
    yarn global add @vue/cli

# Make the 'app' folder the current working directory.
WORKDIR /app

# Switch to the newly created dev user.
# This must be done after anything which required root access but before
# anything which will write files that should be accessible to the host user.
USER dev

# Run the development server.
CMD sh -c "yarn install && yarn serve"
