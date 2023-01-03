migrate((db) => {
  const collection = new Collection({
    "id": "m5ukw84adlzvy3d",
    "created": "2023-01-03 03:00:55.947Z",
    "updated": "2023-01-03 03:00:55.947Z",
    "name": "class",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mjzzbgof",
        "name": "subject",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 128,
          "pattern": "^[a-zA-Z0-9]*$"
        }
      },
      {
        "system": false,
        "id": "uhwfwc5o",
        "name": "level",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "jg7ujtx6j55juc0",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "bi3j3zvn",
        "name": "teacher",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "evwhtncuxrwv3yd",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "a0etrgui",
        "name": "book",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "n4ayvwcozt8u23n",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "ucoixcz3",
        "name": "start_time",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "foeyse4f",
        "name": "end_time",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "dq3tbr98",
        "name": "class_id",
        "type": "text",
        "required": true,
        "unique": true,
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
  const collection = dao.findCollectionByNameOrId("m5ukw84adlzvy3d");

  return dao.deleteCollection(collection);
})
