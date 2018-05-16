require('dotenv').config();
const mongoose = require('mongoose');
const fontSchema = require('../models/font');
const dbURL = process.env.DBURL;

const fonts = [{
    name: "ll-brown",
    publisher: "Lineto",
    year: "2011",
    designer: "Aurèle Sack",
    info: "Evidently, LL Brown owes a lot to the type designs of both Edward Johnston and Arno Drescher, who with their Johnston and Super Grotesk each created immensely influential and successful geometric typefaces nearly one hundred years ago. Yet Aurèle Sack was not aiming at a revival font. Using the historic predecessors for formal cues, he kept developing his hybrid more freely, adding a similarly purist and technical flavour as in some of his earlier typefaces, most notably the Futura variant he drew as Omega's corporate typeface a few years back.",
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
    name: "ff-unit-slab",
    publisher: "FontFont",
    year: "2010",
    designer: "Alexandra Korolkova, Christian Schwartz, Erik Spiekermann, Kris Sowersby, Olga Umpeleva, Panos Haratzopoulos",
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
    name: "bauer-bodoni",
    publisher: "URW++",
    year: "1926",
    designer: "Heinrich Jost, Giambattista Bodoni, Louis Hoell",
    info: "This revival of Bodoni’s types was made under the direction of Heinrich Jost. Punches were cut by Louis Hoell. The first two weights with italics were released in 1926–27. Bauer added a fett in 1952 and a Kursiv fett in 1955.",
    emotions: {
      anger: 0,
      fear: 0,
      joy: 0.75,
      analytical: 0,
      confident: 0,
      tentative: 1
    }
  },  

  {
    name: "harbour",
    publisher: "Alias",
    year: "1998",
    designer: "Gareth Hague",
    info: "Harbour is a clash of Latin and Germanic typestyles - two conflicting letterforms, culturally, politically and aesthetically. Latin letterforms have a geometric base, blackletter types are calligraphic. Harbour takes calligraphic forms that derive from writing with quills, but is a typeface that is clearly drawn‚ rather than written‚ to produce graphic, dynamic letterforms.",
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
      anger: 1,
      fear: 0,
      joy: 0,
      analytical: 0.75,
      confident: 0.5,
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