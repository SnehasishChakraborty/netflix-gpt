import React from 'react'
import { LANGUAGES } from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config?.lang)

  return (
    <div className='flex pt-[10%]'>
        <form className='flex w-1/2 p-2 bg-black rounded-lg m-auto' onSubmit={e=>e.preventDefault()}>
            <input className='p-4 px-8 w-3/4 bg-gray-700 text-white rounded-lg m-1' type="text" placeholder={LANGUAGES[langKey].gptSearchPlaceholder} />
            <button className='p-4 w-1/4 bg-red-500 text-white font-bold rounded-lg m-1 cursor-pointer hover:bg-red-500/80'>{LANGUAGES[langKey].searchBtn}</button>
        </form>
    </div>
  )
}

export default GptSearchBar