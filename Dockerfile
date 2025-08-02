FROM node:latest
WORKDIR /build
COPY package*.json .
RUN npm ci && npm cache clean --force
COPY . . 
EXPOSE 3000
CMD ["node", "index.js"]

