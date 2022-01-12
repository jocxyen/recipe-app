import Recipe from "./Recipe";

const Recipes = ({recipes,onClick}) => {
    return(
        <>
            {recipes.map((recipe)=>(
                <Recipe key={recipe.idMeal} recipe={recipe} onClick={onClick}/>
            ))}
        </>
    )
}

export default Recipes