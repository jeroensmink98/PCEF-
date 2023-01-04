migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("evwhtncuxrwv3yd")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("evwhtncuxrwv3yd")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
