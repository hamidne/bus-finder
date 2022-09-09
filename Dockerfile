FROM node:18-alpine7

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lock

COPY . .

CMD [ "yarn", "start" ]
