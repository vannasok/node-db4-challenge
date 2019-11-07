exports.seed = function(knex) {
   return knex('steps').insert([
      //recipe 1
      { recipe_id: 1, step_number: 1, instructions: 'Do this' },
      { recipe_id: 1, step_number: 2, instructions: 'Do that' },
      { recipe_id: 1, step_number: 3, instructions: 'Finish' },

      //recipe 2
      { recipe_id: 2, step_number: 1, instructions: 'Do this' },
      { recipe_id: 2, step_number: 2, instructions: 'Do that' },
      { recipe_id: 2, step_number: 3, instructions: 'Finish' },

      //recipe 3
      { recipe_id: 3, step_number: 1, instructions: 'Do this' },
      { recipe_id: 3, step_number: 2, instructions: 'Do that' },
      { recipe_id: 3, step_number: 3, instructions: 'Finish' },

      //recipe 4
      { recipe_id: 4, step_number: 1, instructions: 'Do this' },
      { recipe_id: 4, step_number: 2, instructions: 'Do that' },
      { recipe_id: 4, step_number: 3, instructions: 'Finish' },

      //recipe 5
      { recipe_id: 5, step_number: 1, instructions: 'Do this' },
      { recipe_id: 5, step_number: 2, instructions: 'Do that' },
      { recipe_id: 5, step_number: 3, instructions: 'Finish' }
   ]);
};
