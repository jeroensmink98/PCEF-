migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4upcqnzpdkcgz89");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4upcqnzpdkcgz89",
    "created": "2023-01-04 05:57:30.184Z",
    "updated": "2023-01-04 05:57:30.184Z",
    "name": "student",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "t6y51b11",
        "name": "studnet_name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wdhmphgz",
        "name": "book",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "n4ayvwcozt8u23n",
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
})
