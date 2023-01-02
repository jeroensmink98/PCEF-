migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("evwhtncuxrwv3yd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fcgaxdbz",
    "name": "teacher_name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 128,
      "pattern": "^[a-zA-Z0-9]*$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("evwhtncuxrwv3yd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fcgaxdbz",
    "name": "teacher_name",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": 128,
      "pattern": "^[a-zA-Z0-9]*$"
    }
  }))

  return dao.saveCollection(collection)
})
