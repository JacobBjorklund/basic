import React from 'react'
import Image from 'next/image'

const hello = () => {
    return (
        <div className='flex justify-center items-center h-screen w-full bg-gray-700'>
            <div className='pl-40 w-1/2'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit natus, architecto vitae eveniet distinctio. Cupiditate ipsum veritatis quaerat!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nesciunt, minus quod non libero, quam voluptas asperiores tenetur impedit vel ex dolor voluptatum magni ut. Earum officiis tempore aliquid doloremque.
                    Ad eveniet obcaecati in magni autem sequi minus beatae voluptate officia quas suscipit, alias optio ipsam, inventore repellat accusamus provident facilis explicabo dolore adipisci voluptatum odit. Ducimus, reiciendis velit. Possimus?
                    Quae tempora cum quaerat voluptatibus, porro doloremque sapiente sit reiciendis sint saepe molestias officia, vel, modi optio aperiam magnam quas beatae dolorem adipisci fuga architecto. Eaque quas debitis architecto similique?
                    Consequuntur vel magnam laborum quos laboriosam dolorum pariatur cum quaerat doloribus? Quia sed rem dolores deleniti natus repellat reiciendis fugit, vel quod? Enim cum consectetur excepturi quo vitae, porro illo!.</p>
            </div>
            <div className='flex w-1/2'>
                <Image className='m-auto rounded shadow shadow-black' height={350} width={350} alt='Jesus' src={'/640px-Jesus_Christ_-_Hofmann.jpg'} />
            </div>
        </div>
    )
}

export default hello