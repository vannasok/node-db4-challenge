const db = require('../data/dbConfig.js');

module.exports = {
   getRecipes,
   getShoppingLists,
   getInstructions,
   getRecipesById
};

function getRecipes() {
   return db('recipes');
}

function getShoppingLists(id) {
   /*
    select recipe_name, ingredient_name, quantity
    from [recipe_ingredients]as ri
    join [recipes] as r
    join [ingredients] as i
        on ri.recipe_id = r.id and ri.ingredient_id = i.id
        where r.id = 1
    */

   return db('recipe_ingredients as ri')
      .join('recipes as r', 'ri.recipe_id', 'r.id')
      .join('ingredients as i', 'ri.ingredient_id', 'i.id')
      .select('r.recipe_name', 'i.ingredient_name', 'ri.quantity')
      .where('r.id', id);
}

function getInstructions(id) {
   /*
    select r.recipe_name, s.step_number, s.instructions
    from [steps] as s
    join [recipes] as r
        on s.recipe_id = r.id
        where r.id = 1
    */

   return db('steps as st')
      .join('recipes as r', 'st.recipe_id', 'r.id')
      .select('r.recipe_name', 'st.step_number', 'st.instructions')
      .where('r.id', id);
}

//not yet finish
function getRecipesById(id) {}
