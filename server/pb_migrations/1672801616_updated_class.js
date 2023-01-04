migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5ukw84adlzvy3d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "29ole6wc",
    "name": "room",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "ulgb5qozwn0gcaz",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5ukw84adlzvy3d")

  // remove
  collection.schema.removeField("29ole6wc")

  return dao.saveCollection(collection)
})
