FROM node:8.11-alpine
WORKDIR /app
ADD . .
RUN npm i -g nodemon && npm i
EXPOSE 3000
VOLUME [ "/app"]
CMD ["npm", "run", "start"]