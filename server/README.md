# Typography Emotional Assistance app backend

This projec is the backend side of phone react app developed by Fernando Aparcio Galende.
This project was created with Node and Express.

For unit testing I install jest & enzyme to ensure quality of the project.

## Getting Started


You can serve the backend application locally in debug mode using `docker-compose up`, for this you need to have installed desktop docker app, you can download in the docker offical page.

If you have problems with `docker-compose up` after install desktop should run `docker run --detach --publish=80:80 --name=webserver nginx` and then `docker-compose up`.

If you need to build again after your first up you can use `docker-compose up --build`.

You can run the docker without `docker-compose up` using directly Dockerfile. you should run first `docker build -t phone_app_backend .` and then
`docker run -p 3000:3000 -it phone_app_backend`

If you prefer you can not use docker.
You need to run npm i located in the root directory to install dependencies and then you can serve the application locally in debug mode by running `npm run start`.

Runs the app in the development mode in [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits.<br>

You will also see any lint errors in the console.

## Authors

You can download in Fernando's [github:](https://github.com/FernandoGalende/phone-node-app)
**Fernando Aparicio Galende `fernandogalende@gmail.com`**
