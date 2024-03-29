FROM node:21 as build

WORKDIR /build/src

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

RUN mkdir -p /build/out
RUN cp -r ./.output/public/* /build/out


FROM nginx:alpine as runtime

COPY --from=build /build/out /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf

