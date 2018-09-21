const {
  Picture,
  Upload,
  User,
  ResultPic
} = require("./server/db/associations");
const { db } = require("./server/db/indexModel");
const app = require("./server");
const port = process.env.PORT || 3000;

const { green, red } = require("chalk");

const pictures = [
  {
    name: "vincent",
    artistName: "Vincent Van Gogh",
    painting: "Starry Night",
    imageUrl:
      "https://www.vangoghgallery.com/catalog/image/0612/Starry-Night.jpg"
  },
  {
    name: "picasso",
    artistName: "Pablo Picasso",
    painting: "The Weeping Woman",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/14/Picasso_The_Weeping_Woman_Tate_identifier_T05010_10.jpg"
  },
  {
    name: "rembrandt",
    artistName: "Rembrandt Harmenszoon van Rijn",
    painting: "The Night Watch",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/The_Nightwatch_by_Rembrandt.jpg/1280px-The_Nightwatch_by_Rembrandt.jpg"
  },
  {
    name: "Monet",
    artistName: "Claude Monet",
    painting: "Water Lillies",
    imageUrl:
      "https://www.paintingmania.com/arts/claude-monet/large/water-lilies-1916-19-7_4297.jpg?version=11.11.20"
  }
];

const seed = async () => {
  await db.sync({ force: true });

  await Promise.all(pictures.map(picture => Picture.create(picture)));

  app.listen(port);
  console.log("seeding success!");
  db.close();
};

if (module === require.main) {
  seed().catch(err => {
    console.error("Oh noes! Something went wrong!");
    console.error(err);
    db.close();
  });
}

module.exports = seed;
