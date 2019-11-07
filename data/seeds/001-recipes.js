exports.seed = function(knex) {
   return knex('recipes').insert([
      { recipe_name: 'sandwich' }, //1
      { recipe_name: 'burger' }, //2
      { recipe_name: 'pizza' }, //3
      { recipe_name: 'hotdog' }, //4
      { recipe_name: 'salad' } //5
   ]);
};
