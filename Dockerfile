# Stage 1: Build the application
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
