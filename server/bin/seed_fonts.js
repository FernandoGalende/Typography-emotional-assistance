require('dotenv').config();
const mongoose = require('mongoose');
const fontSchema = require('../models/font');
const dbURL = process.env.DBURL;


const fonts = [{
    name: "ll-circular",
    publisher: "Lineto",
    year: "2005",
    designer: "Laurenz Brunner",
    info: "LL Circular is a new take on a classic genre, first explored by Paul Rennerʼs Futura (1927–28). In the process of developing the font, the purely geometric approach gave way to more complex formal conception, resulting in a geometric sans serif marrying purity with warmth. Striking a balance between functionality, conceptual rigour, skilled workmanship and measured idiosyncrasy, LL Circular is a friendly sans serif text font with unmistakeable character yet universal appeal.",
    emotions: {
      anger: 0,
      fear: 0,
      joy: 1,
      analytical: 0.75,
      confident: 0,
      tentative: 0
    }
  },
  {
    name: "haas-unica",
    publisher: "Haas",
    year: "1974-1984",
    designer: "André Gürtler, Christian Mengelt, Erich Gschwind",
    info: "For many years a digital version of Unica was available from Scangraphic (and Elsner+Flake, 4 weights plus italics) but it was pulled from the market due to a complaint by Linotype who claims the Haas rights. In 2008, Cornel Windlin did a Semibold for the the Schauspielhaus Zürich identity, used in 2009–10. Later, Louise Paradis created a revival named Unica Intermediate while doing research for the TM retrospective. Toshi Omagari created another digital version and extension released by Linotype as Neue Haas Unica (9 weights plus italics). The first style, Ultra Light Italic arrived in 2014, the others apeared on MyFonts on March 18, 2015. Meanwhile, Lineto worked with the original designers and Maurice Göldner to release LL Unica77 (7 weights plus italics) on March 7, 2015.",
    emotions: {
      anger: 0,
      fear: 0,
      joy: 0,
      analytical: 1,
      confident: 0.75,
      tentative: 0
    }
  },
  {
    name: "lyon",
    publisher: "Commercial Type",
    year: "2010",
    designer: "Kai Bernau",
    info: "Lyon Text Roman was the centerpiece of Kai Bernau's degree project at the Type + Media course at the Royal Academy of Art (KABK) in The Hague, but was extensively revised and expanded before its debut in the New York Times Magazine in 2009. Like many of the great seriffed typefaces it draws intelligently from the work of Robert Granjon, the master of the Renaissance, while having a contemporary feel. Its elegant looks are matched with an intelligent, anonymous nature, making it excellent for magazines, book and newspapers.",
    emotions: {
      anger: 0,
      fear: 0,
      joy: 0,
      analytical: 1,
      confident: 0.75,
      tentative: 0
    }
  },
  {
    name: "acta-poster",
    publisher: "DSType",
    year: "2010",
    designer: "Dino dos Santos",
    info: "First designed for chilean newspaper La Tercera in 2010, Acta family is a clean and fresh type system, while enough conservative for newspaper setting. The complete Acta Type System contains Acta, Acta Deck, Acta Headline and Acta Display both with six weights with matching italics; Acta Symbols with an amazing collection of symbols specially designed for newspapers and magazines and Acta Poster, a heavyweight version, elegant and eye catching in three styles with plenty of ligatures and alternates.",
    emotions: {
      anger: 0,
      fear: 0,
      joy: 1,
      analytical: 0,
      confident: 0,
      tentative: 0.75
    }
  },  

  {
    name: "itc-bernase-roman",
    publisher: "ITC Image Club",
    year: "1970",
    designer: "Ronné Bonder, Tom Carnase",
    info: "A film typeface that came with several alternates (C, G, H, M, R, a, y). The sample shows the digital version by Image Club Graphics, Inc. from 1992 (spacing adjusted).",
    emotions: {
      anger: 0.75,
      fear: 1,
      joy: 0,
      analytical: 0,
      confident: 0,
      tentative: 0
    }
  },
  {
    name: "impact",
    publisher: "ITC Image Club",
    year: "1970",
    designer: "Ronné Bonder, Tom Carnase",
    info: "Designed by Geoffrey Lee. Stephenson Blake’s foundry version spans 3 styles, regular (1965), Condensed, and Outline (1967). At least the regular was also cast by Amsterdam. Includes alternates for ‘r’ and ‘J’, 1977 specimen. Unlike Monotype’s/Adobe’s, URW’s digital version includes the Condensed. In 2002, Geoffrey Lee added Impact Wide with italic.",
    emotions: {
      anger: 0,
      fear: 0,
      joy: 0,
      analytical: 0.75,
      confident: 1,
      tentative: 0
    }
  },
];

mongoose
  .connect(process.env.DBURL)
  .then(() => {
    fontSchema.collection.drop()
    fontSchema.create(fonts)
      .then(() => {
        mongoose.disconnect();
      })
      .catch(err => console.log(err))
  });