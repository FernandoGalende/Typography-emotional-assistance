FROM node:8.12-alpine
WORKDIR /app
ADD . .
RUN  npm i
VOLUME [ "/app"]
CMD ["npm", "run", "start"]