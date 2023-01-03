migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jg7ujtx6j55juc0")

  collection.listRule = ""
  collection.createRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jg7ujtx6j55juc0")

  collection.listRule = null
  collection.createRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
