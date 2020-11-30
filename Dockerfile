FROM node:12-alpine as builder
ARG NODE_ENV
WORKDIR /app
COPY . .
RUN yarn --frozen-lockfile
RUN yarn build
RUN rm -rf node_modules
RUN yarn install --production --frozen-lockfile

FROM alpine:3.11.0
RUN apk add --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/v3.11/main/ nodejs=12.15.0-r1 && \
  ln -snf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && echo "America/Sao_Paulo" > /etc/timezone
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
ENTRYPOINT ["node", "dist/index.js"]
