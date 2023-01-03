migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jg7ujtx6j55juc0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "otmd1vxw",
    "name": "short_code",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 2,
      "max": 2,
      "pattern": "^[a-zA-Z0-9 ]*$"
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "om5hoks7",
    "name": "level_name",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jg7ujtx6j55juc0")

  // remove
  collection.schema.removeField("otmd1vxw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "om5hoks7",
    "name": "level_name",
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
})
