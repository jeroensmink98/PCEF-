migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n4ayvwcozt8u23n")

  collection.listRule = ""
  collection.createRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n4ayvwcozt8u23n")

  collection.listRule = null
  collection.createRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
