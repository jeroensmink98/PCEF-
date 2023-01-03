migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqyxbp04d3l9oh1")

  collection.listRule = ""
  collection.createRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqyxbp04d3l9oh1")

  collection.listRule = null
  collection.createRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
