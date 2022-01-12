import { XIcon } from "@heroicons/react/solid";
const Popup = ({ins,onClick}) => {
    const ytid = ins[0].strYoutube.slice(-11)
    const ytsrc = "https://www.youtube.com/embed/"+ytid

    
    return (
        <div className="bg-gray-100 fixed p-50 w-3/4 h-3/4 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-3xl overflow-y-auto" ins={ins} >
            
            <XIcon className='w-10 p-3 cursor-pointer' onClick={onClick}/>
            <div className="w-full h-2/4 p-5 text-center items-center justify-center relative">
                <h2 className="font-black pb-4"> 
                {ins[0].strMeal}
                </h2>
                {ins[0].strTags&&<p className="bg-gray-300 px-2 py-1 max-w-sm text-xs m-auto rounded-xl">{ins[0].strTags}</p>}
                <div className="h-2"></div>
                <img className='w-32 rounded-3xl m-auto ring-2 ring-amber-300' src={ins[0].strMealThumb}/>
                <h2 className="font-bold pb-1 pt-5"> 
                    Instructions
                </h2>
                <p className="w-3/4 m-auto">
                    {ins[0].strInstructions}
                </p>              
                <div >
                    <h5 className="font-bold pb-1 pt-5">Video Instructions</h5>
                    <div className="items-center justify-center">
                        <iframe className="m-auto" width="420" height="315" 
                        src={ytsrc}/>
                        
                    </div>
                </div>
          
                <p className="pt-2 text-cyan-700">Source: {ins[0].strSource}</p>
            </div>
        </div>
    )
}

export default Popup
