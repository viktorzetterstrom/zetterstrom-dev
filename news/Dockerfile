FROM node:alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install
EXPOSE 8000
COPY . .
CMD ["npm", "start"]
