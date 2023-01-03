migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n4ayvwcozt8u23n")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gumwpzdw",
    "name": "book_name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 128,
      "pattern": "^[a-zA-Z0-9!@#$%^&*()_+=-]*$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n4ayvwcozt8u23n")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gumwpzdw",
    "name": "book_name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 128,
      "pattern": "^[a-zA-Z0-9 ]*$"
    }
  }))

  return dao.saveCollection(collection)
})
