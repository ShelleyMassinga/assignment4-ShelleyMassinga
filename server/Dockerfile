FROM node:18 AS client-builder
WORKDIR /usr/src/app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

FROM node:18-slim
WORKDIR /usr/src/app

COPY server/package*.json ./
RUN npm install --production

COPY server/ ./

COPY --from=client-builder /usr/src/app/client/build ./public/build

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:${PORT}/api/health || exit 1

ENV NODE_ENV=production

EXPOSE ${PORT}

RUN npm install pm2 -g
CMD ["pm2-runtime", "bin/www"]