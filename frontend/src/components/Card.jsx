import React from 'react'

const Card = () => {
  return (
    <div className='max-w-[450px] mx-auto hover:ring-4 hover:ring-green-500' >
        <div className='gap-4 border p-4 rounded-lg shadow-lg m-4 bg-gradient-to-t from-blue-300 to-yellow-100 hover:scale-105 transition-transform duration-300' >
            <img 
            className='w-full h-[200px]  aspect-3/2 object-cover rounded-t-lg'
            src="https://fc06.deviantart.net/fs70/i/2011/320/c/2/random_art_by_morochow-d4ge829.jpg" 
            alt="image" 
            />

            <h2 className='text-lg font-bold text-center sm:text-left sm:mt-5 truncate' >Title</h2>
            <p className='line-clamp-3 sm:line-clamp-5' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quos repellat libero tempora voluptatum dolore. Cum, doloribus eius! Quo quae consequuntur earum, cumque soluta tenetur aliquam voluptate, corporis ex possimus laboriosam ea repellendus officia sunt, laborum est suscipit repudiandae. Delectus, itaque eligendi tenetur laborum sapiente aspernatur repudiandae eaque soluta et aliquid maxime id ullam repellendus quod iste! Voluptate laborum culpa hic consectetur quo, odit, voluptatum eum, sit magnam ex iusto distinctio at asperiores harum fuga ullam fugiat obcaecati neque dolorum incidunt! Similique vel natus odio debitis officia alias laborum quisquam rerum aspernatur magnam quas ratione suscipit, dolor consequatur. Doloribus, nulla? </p>
            <div className="flex justify-between mt-4">
              <span className='text-[13px] font-semibold underline'>Author Name: John Doe</span>
              <span className='text-[13px] font-semibold'>Views: 33</span>
            </div>

        </div>

      
      
    </div>
  )
}

export default Card;