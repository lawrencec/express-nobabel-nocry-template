# ---- Base Node ----
FROM node:12-alpine as base

WORKDIR /src
COPY package.json package-lock.json ./
RUN pwd
RUN ls -sal .
#
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false
ENV NODE_ENV production
RUN npm ci
# copy production node_modules aside
RUN cp -R node_modules /prod_node_modules
RUN echo "Prod deps install successful! 🎉"
ENV NODE_ENV test
RUN npm ci
RUN echo "All deps install successful! 🎉"
# ---- Test ----
FROM dependencies AS test
COPY . .
RUN pwd
RUN npm run lint
RUN echo "Lint successful!"
RUN npm run test
RUN echo "Tests successful!"

# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies /prod_node_modules ./node_modules
# copy app sources
COPY . .
# expose port and define CMD
EXPOSE 7080
RUN echo "Lift-off! 🎉"
CMD npm run start