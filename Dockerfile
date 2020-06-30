# build stage
FROM node:13.12.0-alpine as build
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile
COPY . /app
RUN yarn run build

# artifact stage
FROM nginx:1.17.9
COPY nginx.conf /etc/nginx/conf.d/default.conf 
COPY --from=build --chown=101:101 /app/build /usr/share/nginx/public
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
