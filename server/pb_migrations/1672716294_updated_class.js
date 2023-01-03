migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5ukw84adlzvy3d")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5ukw84adlzvy3d")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
