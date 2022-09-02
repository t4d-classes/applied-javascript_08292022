1. To start the MongoDB server and web-based client application, run the following command:

```bash
docker compose -f ./full-stack-compose.yml up -d
```

2. Create a new database named `app`.

3. Create a new collection named `cars`.

4. Add the following two car documents to the `cars` collection.

```json
{
  "make": "Ford",
  "model": "Fusion Hybrid",
  "year": 2018,
  "color": "black",
  "price": 25000
}
```

```json
{
  "make": "Tesla",
  "model": "S",
  "year": 2018,
  "color": "red",
  "price": 125000
}
```

5. To shutdown the MongoDB server and the web-based client application, run the following command:

```bash
docker compose -f ./full-stack-compose.yml down
```
