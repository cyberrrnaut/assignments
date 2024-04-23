/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Initialize an empty object to store the total spent for each category
  const categoryTotal = {};

  // Iterate through each transaction
  transactions.forEach((transaction) => {
    // Destructure transaction object
    const { key, val } = transaction;

    // If the category already exists, add the price to its total
    if (categoryTotal[key]) {
      categoryTotal[key] += val;
    } else {
      // If the category doesn't exist, create it and set its total to the price
      categoryTotal[category] = val;
    }
  });

  // Convert categoryTotal object to an array of objects
  const result = Object.keys(categoryTotal).map((category) => ({
    category,
    totalSpent: categoryTotal[category],
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
