migrate((db) => {
  const collection = new Collection({
    "id": "ulgb5qozwn0gcaz",
    "created": "2023-01-04 02:40:41.977Z",
    "updated": "2023-01-04 02:40:41.977Z",
    "name": "room",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "feybeddk",
        "name": "room_name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 1,
          "max": 128,
          "pattern": "^[a-zA-Z0-9]*$"
        }
      },
      {
        "system": false,
        "id": "mgiuetsv",
        "name": "school",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "wqyxbp04d3l9oh1",
          "cascadeDelete": false
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
  const collection = dao.findCollectionByNameOrId("ulgb5qozwn0gcaz");

  return dao.deleteCollection(collection);
})
