import { useState,useEffect } from 'react'
import axios, { Axios } from 'axios'
import Recipes from './components/Recipes'
import SearchBar from './components/SearchBar'
import Popup from './components/Popup'
import NavBar from './components/NavBar'


function App() {
  const [food,setFood] = useState("")
  const [recipes,setRecipe] = useState([]) 
  const [details,showDetails] = useState()
  const [ins, setIns] = useState("")
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;

  //GET data
  async function getData(){
    if (food!==""){
    const res = await axios.get(url)
    console.log(res.data.meals)
    setRecipe(res.data.meals)
    }
  }
  useEffect(()=>getData()
  ,[])

  //Search Food
  const onChange=(e)=>{
    setFood(e.target.value.toLowerCase())
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    getData()
  }
  const onClick = async (id)=>{
    
    const detail = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const test = detail.data.meals
    setIns(test)
    console.log('fetched Instruction')
    showDetails(true)
  }

  const toClose=()=>showDetails(false)
  
  return (
    <div className="bg-slate-50 box-border w-full min-h-screen">
      <NavBar/>
      <section className=" w-full py-10 justify-center items-center text-center bg-slate-50">
        <SearchBar onChange={onChange} onSubmit={onSubmit}/>
      </section>
        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 m-11 justify-center text-center items-center space-x-3 ">
          {recipes!==[]&&<Recipes recipes={recipes} onClick={onClick}/>}
        </div>
        <div >
        {details==true&& <Popup ins={ins} onClick={toClose} className='justify-center'/> }
        </div>
     
    </div>
  )
}

export default App;
