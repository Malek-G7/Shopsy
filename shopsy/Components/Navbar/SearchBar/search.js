import style from "./search.module.css"
import { useState } from 'react';

export default function Search(){

    const [searchValue,setSearchValue] = useState("")

    const SearchBarHandler = (event) => {
        event.preventDefault()
        alert(searchValue)
    }

   return(
    <div className={style.container}>
        <form onSubmit = {SearchBarHandler}>
            <input type="text" name="search" placeholder="Search.." className={style.input}
             value={searchValue} onChange = {(e) => setSearchValue(e.target.value)}/>
            <button  className={style.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </form>
    </div>
   )
}

