const axios = require("axios");
const { Diet, Recipe } = require("../db");
const { API_KEY } = process.env;


const getRecipeById = async (req,res) => {
     const { id } = req.params 

    try {
       
    const getDbInfoId =
     await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });

                 let dbRecipesById =  getDbInfoId.filter(e=> { 
                    console.log(e.id);
                    console.log(id);
                    return e.id === id}); 
           if (dbRecipesById.length !== 0) {
                       
                return res.status(200).json(dbRecipesById)
            } else { 
                const getApiById = await axios.get (`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
               let apiRecipesById =  getApiById
                if (apiRecipesById.data.id) {
                    let recipeDetails =  {                    
                        image: apiRecipesById.data.image,
                        name: apiRecipesById.data.title,
                        dietTypes: apiRecipesById.data.diets,
                        summary: apiRecipesById.data.summary,
                        score: apiRecipesById.data.spoonacularScore,
                        healthScore: apiRecipesById.data.healthScore,
                        steps: apiRecipesById.data.analyzedInstructions[0]?.steps.map(e => {
                            return {
                                number: e.number,
                                step: e.step
                            }
                        })
                    }
                    return res.status(200).send(recipeDetails); 
                }
            } 
        } catch (err) {
            return res.status(404).send(err.message);
        }
    }



module.exports = getRecipeById;