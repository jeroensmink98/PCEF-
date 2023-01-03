migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5ukw84adlzvy3d")

  // remove
  collection.schema.removeField("foeyse4f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "blvp1hfb",
    "name": "end_time",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 5,
      "pattern": "^([01]?[0-9]|2[0-3]):[0-5][0-9]$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5ukw84adlzvy3d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "foeyse4f",
    "name": "end_time",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("blvp1hfb")

  return dao.saveCollection(collection)
})
