exports.seed = function(knex) {
   return knex('recipe_ingredients').insert([
      //1 sandwich
      { recipe_id: 1, ingredient_id: 1, quantity: 2 },
      { recipe_id: 1, ingredient_id: 2, quantity: 3 },
      { recipe_id: 1, ingredient_id: 4, quantity: 2 },
      { recipe_id: 1, ingredient_id: 6, quantity: 2 },
      { recipe_id: 1, ingredient_id: 8, quantity: 2 },
      { recipe_id: 1, ingredient_id: 13, quantity: 3 },
      //2 burger
      { recipe_id: 2, ingredient_id: 1, quantity: 2 },
      { recipe_id: 2, ingredient_id: 2, quantity: 1 },
      { recipe_id: 2, ingredient_id: 3, quantity: 1 },
      { recipe_id: 2, ingredient_id: 4, quantity: 1 },
      { recipe_id: 2, ingredient_id: 8, quantity: 1 },
      { recipe_id: 2, ingredient_id: 13, quantity: 2 },
      //3 pizza
      { recipe_id: 3, ingredient_id: 2, quantity: 3 },
      { recipe_id: 3, ingredient_id: 5, quantity: 10 },
      { recipe_id: 3, ingredient_id: 8, quantity: 8 },
      { recipe_id: 3, ingredient_id: 10, quantity: 10 },
      { recipe_id: 3, ingredient_id: 13, quantity: 5 },
      //4 hotdog
      { recipe_id: 4, ingredient_id: 2, quantity: 4 },
      { recipe_id: 4, ingredient_id: 3, quantity: 3 },
      { recipe_id: 4, ingredient_id: 5, quantity: 1 },
      { recipe_id: 4, ingredient_id: 13, quantity: 1 },
      //5 salad
      { recipe_id: 5, ingredient_id: 1, quantity: 5 },
      { recipe_id: 5, ingredient_id: 3, quantity: 2 },
      { recipe_id: 5, ingredient_id: 4, quantity: 5 },
      { recipe_id: 5, ingredient_id: 7, quantity: 5 },
      { recipe_id: 5, ingredient_id: 9, quantity: 5 },
      { recipe_id: 5, ingredient_id: 10, quantity: 5 }
   ]);
};
