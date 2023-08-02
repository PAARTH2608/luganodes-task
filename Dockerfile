# pull base image
FROM node:20.5.0-buster-slim

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH

# Install yarn globally
RUN npm i --unsafe-perm --allow-root -g yarn

# install expo-cli using yarn instead of npm
RUN yarn global add expo-cli@latest

# Create the working directory
RUN mkdir /opt/chat_net
WORKDIR /opt/chat_net

# Copy package.json and yarn.lock into the container
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn

# Copy the app files from the host to the container
COPY . .

# Set the correct working directory for the app
WORKDIR /opt/chat_net/app

ENTRYPOINT ["yarn", "run"]
CMD ["web"]
