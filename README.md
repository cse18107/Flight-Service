sec 86 -> lec 5 -> 10:20

```
npx sequelize db:create
```

```
npx sequelize db:migrate
```

```
npx sequelize seed:generate --name add-airplanes
```

```
npx sequelize db:seed:undo:all
```

```
npx sequelize db:seed:all
```

```
npx sequelize model:generate --name City --attributes name:string
```

```
npx sequelize migration:generate --name update-city-airport-association
```

```
SELECT
 TABLE_NAME, COLUMN_NAME, CONSTRAINT_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME

   FROM
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE
    WHERE
    REFERENCED_TABLE_SCHEMA = 'flights'
    AND REFERENCED_TABLE_NAME = 'airport';
```
