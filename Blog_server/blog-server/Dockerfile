FROM node:16.8-alpine

WORKDIR /app

COPY package* ./
COPY . .

RUN npm ci
RUN npm run build

CMD ["node", "dist/main.js"]