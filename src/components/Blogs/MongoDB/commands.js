export const commands = {
  // All the commands of mongodb blog is listed here in heading: command format

  database: [
    {
      heading: "View All Databases",
      code: `show dbs`,
    },
    {
      heading: "Create a new or switch databases ",
      code: `use <database name>`,
    },
    {
      heading: "View current Database",
      code: `db`,
    },
    {
      heading: "Delete Database ",
      code: `db.dropDatabase()`,
    },
  ],
  collections: [
    {
      heading: "Show All Collections of Specific Database",
      code: `show collections`,
    },
    {
      heading: "Create a collection named 'database'",
      code: `db.createCollection('database')`,
    },
    {
      heading: "Drop a collections named 'database'",
      code: `db.collection.drop()`,
    },
  ],

  document: [
    {
      heading: "Show all Rows in a Collection",
      code: `db.collection.find()`,
    },
    {
      heading: "Show all Rows in a Collection (Prettified)",
      code: `db.collection.find().pretty()`,
    },
    {
      heading: "Find the first row matching the object",
      code: `db.collection.findOne({name: 'Sonu'})`,
    },

    {
      heading: "Insert One Document in the collection",
      code: `db.collection.insert({
  name: "Sonu Kumar",
  language: "JavaScript",
  team_id: 1,
});`,
    },

    {
      heading: "Insert Multiple Documents in the collection",
      code: `db.collection.insertMany([
  { name: "Swajeet Swarankar", language: "C++", team_id: 2 },
  { name: "Yogesh Jangre", language: "C", team_id: 3 },
  { name: "Abhishek Chauhan", language: "Java", team_id: 4 },
  { name: "Ankit Singh", language: "C", team_id: 5 },
]);`,
    },

    {
      heading: "Search Documents in MongoDB Database Collection",
      code: `db.collection.find({language:'JavaScript'})`,
    },
    {
      heading: "Limit the Output Result of Search Operation",
      code: `db.collection.find({language:'JavaScript'}).limit(2)`,
    },
    {
      heading: "Count the total number of filtered Result Overriding Limit.",
      code: `db.collection.find({language:'JavaScript'}).count()`,
    },
    {
      heading: "Find and Update an existing Document",
      code: `db.collection.update(
  { name: "Ankit Singh" },
  { name: "Ankit Kumar Singh", language: "C", team_id: 5 }
);`,
    },

    {
      heading: "Increment Operation in MongoDB",
      code: `db.collection.update(
  { name: "Sonu Kumar" },
  {
    $inc: {
      team_id: 2,
    },
  }
);`,
    },

    {
      heading: "Rename Operation in MongoDB",
      code: `db.collection.update(
  { name: "Abhishek Chauhan" },
  {
    $rename: {
      team_id: "Team_Id",
    },
  }
);`,
    },

    {
      heading: "Delete All Documents with Matching Result",
      code: `db.collection.remove({ name: "Abhishek Chauhan" });`,
    },
  ],

  inequality: [
    {
      heading: " I. Use of less than Operator",
      code: `db.collections.find({ team_id: { $lt: 3 } });`,
    },
    {
      heading: " II. Use of less than or equal to  Operator",
      code: `db.collections.find({ team_id: { $lte: 3 } });`,
    },
    {
      heading: " III. Use of greater than Operator",
      code: `db.collections.find({ team_id: { $gt: 3 } });`,
    },
    {
      heading: " IV. Use of Greater than or equal to  Operator",
      code: `db.collections.find({ team_id: { $gte: 3 } });`,
    },
  ],
};
