import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


const Recipe = ({recipe,onClick}) => {
    const ref = useRef();
    const ingredients=[]
    for (let i=1;i<=20;i++){
        if (recipe[`strIngredient${i}`]){
            ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`
        )}
        else{break}
    }

    return (
        <div>
        <Flippy className="bg-slate-50" 
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={ref}
        >
            <FrontSide className="mb-10 m-2 rounded-md overflow-hidden w-60 justify-center text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-xl border border-slate-300">
                <img className="object-cover w-60 rounded-lg m-auto" src={recipe.strMealThumb}/>
                <h2 className="font-bold m-2">{recipe.strMeal}</h2>
                <div className="flex justify-center space-x-3">
                    <p className="bg-gray-300 px-2 py-1 text-xs rounded-xl">{recipe.strArea}</p>
                    <p className="bg-gray-300 px-2 py-1 text-xs rounded-xl">{recipe.strCategory}</p>
                </div>
                <button className="bg-orange-400 text-md font-thin py-2 px-5 my-3 rounded-xl text-white" onClick={()=>onClick(recipe.idMeal)}>View Recipe</button>
            </FrontSide>
            <BackSide className="bg-slate-50 mb-10 m-2  rounded-md overflow-hidden w-60 justify-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-xl">
                <h2 className='font-semibold pb-1'>Ingredients</h2>
                <ul>
                    {ingredients.map((ingredient,index) => <li key={index}>{ingredient}</li>)}
                </ul>
            </BackSide>
        </Flippy>
        
        </div>
    )
}

export default Recipe