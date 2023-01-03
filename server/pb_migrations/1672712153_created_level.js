migrate((db) => {
  const collection = new Collection({
    "id": "jg7ujtx6j55juc0",
    "created": "2023-01-03 02:15:53.983Z",
    "updated": "2023-01-03 02:15:53.983Z",
    "name": "level",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "om5hoks7",
        "name": "level_name",
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
  const collection = dao.findCollectionByNameOrId("jg7ujtx6j55juc0");

  return dao.deleteCollection(collection);
})
