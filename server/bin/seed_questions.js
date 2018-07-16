require('dotenv').config();
const mongoose = require('mongoose');
const questionSchema = require('../models/question');



const questions = [{
  question: "How aggressive you should express from 0 to 100?",
  items: [],
  emotion: "anger"
  },
  {
  question: "How much darkness you should express from 0 to 100?",
  items: [],
  emotion: "fear",
  },
  {
   question: "How playful you should express from 0 to 100?",
   items: [],
   emotion: "joy",
  },
  {
  question: "How analytical you should express from 0 to 100?",
  items:[],
  emotion: "Analytical",
  },
  {
  question: "How much professional you should express from 0 to 100?",
  items: [],
  emotion: "confident",
  },
  {
  question: "How sensuality you should express from 0 to 100?",
  items: [],
  emotion: "tentative",
  }   
];

mongoose
.connect('mongodb://FernandoGalende:Chopera14@ds141264.mlab.com:41264/aurelio2')
.then(() => {
    questionSchema.collection.drop()
    questionSchema.create(questions)
      .then(() => {
        mongoose.disconnect();
      })
      .catch(err => console.log(err))
  });