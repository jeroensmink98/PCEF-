migrate((db) => {
  const collection = new Collection({
    "id": "wqyxbp04d3l9oh1",
    "created": "2023-01-03 02:06:03.009Z",
    "updated": "2023-01-03 02:06:03.009Z",
    "name": "school",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vffoxmer",
        "name": "school_name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 1,
          "max": 128,
          "pattern": "^[a-zA-Z0-9 ]*$"
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
  const collection = dao.findCollectionByNameOrId("wqyxbp04d3l9oh1");

  return dao.deleteCollection(collection);
})
