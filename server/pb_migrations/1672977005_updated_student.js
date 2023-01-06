migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eezgy3vu77qirs4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmn8ti0f",
    "name": "village",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 128,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eezgy3vu77qirs4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmn8ti0f",
    "name": "village",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 128,
      "pattern": "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
    }
  }))

  return dao.saveCollection(collection)
})
