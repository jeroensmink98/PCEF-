migrate((db) => {
  const collection = new Collection({
    "id": "n4ayvwcozt8u23n",
    "created": "2023-01-03 02:00:34.024Z",
    "updated": "2023-01-03 02:00:34.024Z",
    "name": "book",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gumwpzdw",
        "name": "book_name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 128,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("n4ayvwcozt8u23n");

  return dao.deleteCollection(collection);
})
