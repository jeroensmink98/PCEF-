migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("evwhtncuxrwv3yd")

  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("evwhtncuxrwv3yd")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
