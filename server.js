/* jshint esversion: 6 */
/* jscs:disable maximumLineLength */

const express = require("express");
const app = express();
const port = 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(port);

let student = [
  {
    firstname: "Lisa",
    lastname: "LaFlamme",
    age: 21,
    classes: ["Street dance", "Balett", "Tango"],
  },
  {
    firstname: "Eleonor",
    lastname: "Dammfors",
    age: 26,
    classes: ["Bachata", "Balett"],
  },
  {
    firstname: "Fredrik",
    lastname: "Forsmo",
    age: 26,
    classes: [
      "Street dance",
      "Balett",
      "Tango",
      "House",
      "Bachata",
      "Bollywood",
    ],
  },
  {
    firstname: "Miranda",
    lastname: "Hopkins",
    age: 30,
    classes: ["Bachata", "Bollywood", "Tango", "Street dance"],
  },
  {
    firstname: "Lina",
    lastname: "Dahlén",
    age: 25,
    classes: ["Bollywood", "Bachata", "Balett"],
  },
  {
    firstname: "Lisae",
    lastname: "Picard",
    age: 21,
    classes: ["Street dance", "Balett", "Tango"],
  },
  {
    firstname: "Franze",
    lastname: "Willow",
    age: 31,
    classes: ["Balett", "Bachata", "Bollywood"],
  },
  {
    firstname: "Benjamin",
    lastname: "Andersson",
    age: 29,
    classes: [
      "Street dance",
      "Balett",
      "Tango",
      "House",
      "Bachata",
      "Bollywood",
    ],
  },
  {
    firstname: "Baby",
    lastname: "Elli",
    age: 27,
    classes: ["Tango", "House", "Bachata"],
  },
  {
    firstname: "Alina",
    lastname: "Malfoy",
    age: 31,
    classes: ["Balett"],
  },
  {
    firstname: "Linda",
    lastname: "Cat",
    age: 33,
    classes: ["Street dance", "Balett", "Bollywood", "House"],
  },
  {
    firstname: "Maria",
    lastname: "Love",
    age: 40,
    classes: ["Bachata", "Tango", "Bollywood", "House"],
  },
  {
    firstname: "Lisa",
    lastname: "Lovely",
    age: 31,
    classes: ["Balett", "Bachata", "Bollywood"],
  },
  {
    firstname: "Mårten",
    lastname: "Gås",
    age: 19,
    classes: ["Tango", "House", "Bachata"],
  },
  {
    firstname: "Angela",
    lastname: "Canin",
    age: 24,
    classes: ["Bachata", "Balett", "House"],
  },
];

let teachers = [
  {
    firstname: "Kristian",
    lastname: "karlsson",
    age: 46,
    classes: ["Street dance", "Balett"],
  },
  {
    firstname: "Bosse",
    lastname: "Kodarsson",
    age: 30,
    classes: ["House", "Bachata"],
  },
  {
    firstname: "Elvira",
    lastname: "Busch",
    age: 38,
    classes: ["Tango", "Bollywood"],
  },
];

let classes = [
  {
    name: "Street dance",
    dates: [
      "2019-11-01",
      "2019-10-14",
      "2019-10-25",
      "2019-10-26",
      "2019-10-21",
      "2019-10-09",
    ],
    start: "18.00",
    length: "2",
  },
  {
    name: "Balett",
    dates: [
      "2019-12-18",
      "2019-10-18",
      "2019-12-25",
      "2019-12-27",
      "2019-11-30",
      "2019-10-09",
    ],
    start: "17.00",
    length: "3",
  },
  {
    name: "Tango",
    dates: [
      "2019-10-01",
      "2019-10-14",
      "2019-10-25",
      "2019-10-27",
      "2019-10-30",
      "2019-11-01",
    ],
    start: "16.00",
    length: "4",
  },
  {
    name: "House",
    dates: [
      "2019-10-14",
      "2019-10-22",
      "2019-10-25",
      "2019-10-27",
      "2019-10-30",
      "2019-10-09",
    ],
    start: "14:00",
    length: "3",
  },
  {
    name: "Bachata",
    dates: [
      "2019-10-22",
      "2019-10-26",
      "2019-10-14",
      "2019-10-30",
      "2019-11-01",
    ],
    start: "11:00",
    length: "2",
  },
  {
    name: "Bollywood",
    dates: [
      "2019-10-25",
      "2019-10-10",
      "2019-10-14",
      "2019-10-31",
      "2019-11-02",
    ],
    start: "9:00",
    length: "1",
  },
];

app.get("/api/student", function(req, res) {
  res.json(student);
});

app.get("/api/teachers", function(req, res) {
  res.json(teachers);
});

app.get("/api/classes", function(req, res) {
  res.json(classes);
});

console.log(`App listening on port ${port}`);
