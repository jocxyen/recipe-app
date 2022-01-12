
const SearchBar = ({onSubmit,onChange}) => {

    return (
        <div>
            <header className="text-3xl font-bold place-self-center pb-5 py-20 ">
                Search Recipes of
            </header>
            <form className='w-full search-form flex relative justify-center items-center' onSubmit={onSubmit}>
                <div className="relative w-3/4">
                    <input className="w-full h-11 px-5 py-2 mt-3 font-semibold ring-2 ring-gray-300 rounded-md" type="text" placeholder="Try Chicken" autoComplete="off" onChange={onChange}></input>
                    <button className="w-20 h-9 top-2 right-6 translate-x-1/4 translate-y-1/4 absolute bg-slate-300 rounded-md" type="submit">Search</button>
                </div>
                
            </form>
        </div>
    )
}

export default SearchBar
