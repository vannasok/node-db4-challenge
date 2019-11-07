exports.seed = function(knex) {
   return knex('ingredients').insert([
      { ingredient_name: 'tomato' }, //1
      { ingredient_name: 'ketchup' }, //2
      { ingredient_name: 'mayo' }, //3
      { ingredient_name: 'chicken' }, //4
      { ingredient_name: 'beef' }, //5
      { ingredient_name: 'eggs' }, //6
      { ingredient_name: 'spinach' }, //7
      { ingredient_name: 'chess' }, //8
      { ingredient_name: 'lettuces' }, //9
      { ingredient_name: 'mushroom' }, //10
      { ingredient_name: 'salt' }, //11
      { ingredient_name: 'pepper' }, //12
      { ingredient_name: 'bread' } //13
   ]);
};
