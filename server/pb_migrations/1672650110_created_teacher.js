migrate((db) => {
  const collection = new Collection({
    "id": "evwhtncuxrwv3yd",
    "created": "2023-01-02 09:01:50.409Z",
    "updated": "2023-01-02 09:01:50.409Z",
    "name": "teacher",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fcgaxdbz",
        "name": "teacher_name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": 128,
          "pattern": "^[a-zA-Z0-9]*$"
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
  const collection = dao.findCollectionByNameOrId("evwhtncuxrwv3yd");

  return dao.deleteCollection(collection);
})
