migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jg7ujtx6j55juc0")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jg7ujtx6j55juc0")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
