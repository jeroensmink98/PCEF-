migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5ukw84adlzvy3d")

  // remove
  collection.schema.removeField("ucoixcz3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4dy08ctx",
    "name": "start_time",
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
    "id": "ucoixcz3",
    "name": "start_time",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("4dy08ctx")

  return dao.saveCollection(collection)
})
