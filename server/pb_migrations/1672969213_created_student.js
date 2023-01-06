migrate((db) => {
  const collection = new Collection({
    "id": "eezgy3vu77qirs4",
    "created": "2023-01-06 01:40:13.154Z",
    "updated": "2023-01-06 01:40:13.154Z",
    "name": "student",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "s242dmuo",
        "name": "english_name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 128,
          "pattern": "^[\\p{L}\\p{M}\\p{N}]+$"
        }
      },
      {
        "system": false,
        "id": "1fq3xk7x",
        "name": "khmer_name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 128,
          "pattern": "^[\\p{L}\\p{M}\\p{N}]+$"
        }
      },
      {
        "system": false,
        "id": "dwtefrmb",
        "name": "sex",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 1,
          "pattern": "^[MF]$"
        }
      },
      {
        "system": false,
        "id": "zuh6oelm",
        "name": "nationality",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 128,
          "pattern": "^[\\p{L}\\p{M}\\p{N}]+$"
        }
      },
      {
        "system": false,
        "id": "zlrjxpqm",
        "name": "phone_parents",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 128,
          "pattern": "^\\d+$"
        }
      },
      {
        "system": false,
        "id": "o9ludwhn",
        "name": "date_of_entry",
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
        "id": "iyvcvjqh",
        "name": "date_of_dropout",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "kapcwdzc",
        "name": "active",
        "type": "bool",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "jzzzhkrn",
        "name": "photo",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "qxe1o1yl",
        "name": "class",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "m5ukw84adlzvy3d",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "rmn8ti0f",
        "name": "village",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 128,
          "pattern": "^[\\p{L}\\p{M}\\p{N}]+$"
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
  const collection = dao.findCollectionByNameOrId("eezgy3vu77qirs4");

  return dao.deleteCollection(collection);
})
