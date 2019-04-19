FROM node:8.11-alpine
WORKDIR /app
ADD . .
RUN npm i -g nodemon && npm i
RUN npm run lint
EXPOSE 3000
EXPOSE 9229
VOLUME [ "/app", "/app/logs" ]
CMD ["npm", "run", "start"]