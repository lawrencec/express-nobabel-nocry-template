# ---- Base Node ----
FROM node:12-alpine as base

WORKDIR /src
COPY package.json package-lock.json ./

# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false
RUN npm ci
COPY . .
# ---- Test ----
FROM dependencies AS test
RUN pwd
RUN npm run lint
RUN npm run dep-tree-report-text
RUN echo "Lint successful!"
RUN npm run test
RUN echo "Tests successful!"

# ---- Release ----
FROM base AS release
ENV NODE_ENV production
RUN npm prune --production
# expose port and define CMD
EXPOSE 7080
RUN echo "Lift-off! 🎉"
CMD npm run start