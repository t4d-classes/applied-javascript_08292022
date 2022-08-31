# Exercise 7

1. Write code to add the collected car data to the car table.

2. Add a new column to the Car Table. The column header should be set to "Actions".

3. On each car data row in the new column, add a Delete button. When the Delete button is clicked, delete the car from the table.

Hint: To perform a delete in JavaScript, I recommend considering the array `filter` function.

```javascript
setCars(cars.filter(c => c.id !== idOfCarToDelete));
```

4. Ensure it works!