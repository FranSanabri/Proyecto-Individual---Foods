const { Router } = require('express');



// Importar todos los routers;
const getRecipeById = require('../controllers/getRecipeById');
const getRecipeByName = require('../controllers/getRecipeByName');
const getDiets = require('../controllers/getDiets');
const createRecipe = require('../controllers/postRecipes');
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
/* router.use('/recipe', RecipeId); */
router.get('/recipes', getRecipeByName);
router.get('/recipes/:id', getRecipeById);
router.get('/diets', getDiets);
router.post('/recipes', createRecipe);

module.exports = router;
