exports.ingredientsController = (req, res) => {
    res.json({
        ingredientsList: [{
            "id": "1",
            "item": "Bacon"
        },
        {
            "id": "2",
            "item": "Eggs"
        },
        {
            "id": "3",
            "item": "Milk"
        },
        {
            "id": "4",
            "item": "Butter"
        }]
    })
}