const { Recipe } = require("../db");

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findByPk(id);

        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        await recipe.destroy();

        return res.status(204).json({ message: "Recipe deleted successfully" });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = deleteRecipe;