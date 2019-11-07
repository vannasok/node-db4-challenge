const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
   Recipes.getRecipes()
      .then(rec => {
         res.status(200).json(rec);
      })
      .catch(err => {
         res.status(500).json({ Error: 'Could Not Retrieve All Data.' });
      });
});

router.get('/:id/shoppingList', (req, res) => {
   const id = req.params.id;
   Recipes.getShoppingLists(id)
      .then(list => {
         if (list) {
            res.status(200).json(list);
         } else {
            res.status(400).json({
               Error: 'Could Not Find The Data With Given ID'
            });
         }
      })
      .catch(err => {
         res.status(400).json({
            Error: 'Could Not Find The ShoppingLists'
         });
      });
});

router.get('/:id/instructions', (req, res) => {
   const id = req.params.id;
   Recipes.getInstructions(id)
      .then(inst => {
         if (inst) {
            res.status(200).json(inst);
         } else {
            res.status(400).json({
               Error: 'Could Not Find The Data With Given ID'
            });
         }
      })
      .catch(err => {
         res.status(400).json({
            Error: 'Could Not Find The Instructions'
         });
      });
});

module.exports = router;
