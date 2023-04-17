import React from 'react'

const Form = () => {
    return (
        <form action="" className='flex bg-gray-700 items-center justify-center h-screen flex-col w-screen gap-2'>
            <label htmlFor="" className='text-left'>Email</label>
            <input type="text" />
            <label htmlFor="">About</label>
            <textarea name="" id=""></textarea>
            <button className='w-10 h-6 bg-blue-300 rounded-sm'>Send</button>
        </form>
    )
}

export default Form