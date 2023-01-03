migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("evwhtncuxrwv3yd")

  // remove
  collection.schema.removeField("84qlv0o5")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("evwhtncuxrwv3yd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "84qlv0o5",
    "name": "teacher_code",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 2,
      "max": 3,
      "pattern": "^[a-zA-Z0-9]*$"
    }
  }))

  return dao.saveCollection(collection)
})
