export const commands = {
  // All the commands of mongodb blog is listed here in heading: command format

  database: [
    {
      heading: "View All Databases",
      code: `show dbs`,
    },
    {
      heading: "Create a new or switch databases ",
      code: `use dbName`,
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
      heading: "Create a collections named 'database'",
      code: `db.createCollection('database')`,
    },
    {
      heading: "Drop a collections named 'database'",
      code: `db.database.drop()`,
    },
  ],
};
