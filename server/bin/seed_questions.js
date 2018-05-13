require('dotenv').config();
const mongoose = require('mongoose');
const questionSchema = require('../models/question');
const dbURL = process.env.DBURL;


const questions = [{
  question: "1.Anger: Your project should end up something similar to one of this arquitecural type?",
  items: ["https://upload.wikimedia.org/wikipedia/commons/4/4a/Detail_arabesque_Alhambra_Granada_Spain.jpg", "https://upload.wikimedia.org/wikipedia/commons/4/4a/Detail_arabesque_Alhambra_Granada_Spain.jpg","https://upload.wikimedia.org/wikipedia/commons/4/4a/Detail_arabesque_Alhambra_Granada_Spain.jpg","https://upload.wikimedia.org/wikipedia/commons/4/4a/Detail_arabesque_Alhambra_Granada_Spain.jpg"],
  emotion: "anger"
  },
  {
  question: "2.Fear: What sound represents better your intencional expresive?",
  items: ["./assets/Audio/3.mp3","./assets/Audio/3.mp3","./assets/Audio/3.mp3"],
  emotion: "fear",
  },
  {
   question: "3.Joy: Please, choose one or more concepts to represent better?",
   items: ["Jump", "Jump", "Jump", "Jump"],
   emotion: "joy",
  },
  {
  question: "4.Analytical: what kind of politic newspaper represente better?",
  items:["Retador","Diferencial","Lider","Clasico","Moderno"],
  emotion: "Analytical",
  },
  {
  question: "5.Confident: What art represents better your project?",
  items: ["Retador","Diferencial","Lider","Clasico","Moderno"],
  emotion: "confident",
  },
  {
  question: "6.Tentative: Who much sexy shoul be your proyect?",
  items: ["Retador","Diferencial","Lider","Clasico","Moderno"],
  emotion: "tentative",
  }   
];

mongoose
  .connect(process.env.DBURL)
  .then(() => {
    questionSchema.collection.drop()
    questionSchema.create(questions)
      .then(() => {
        mongoose.disconnect();
      })
      .catch(err => console.log(err))
  });