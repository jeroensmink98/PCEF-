migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n4ayvwcozt8u23n")

  collection.viewRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n4ayvwcozt8u23n")

  collection.viewRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
