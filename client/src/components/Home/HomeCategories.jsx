import React from 'react'
import { categoriesData } from '../../assets/assets'
import { Link } from 'react-router-dom'

function HomeCategories() {
  return (
    <section className='py-16 '>
        <div className="max-w-7xl mx-auto">
            <div className='p-2'>
                <h2 className='text-2xl font-semibold'>Browse Categories</h2>
                <p className="text-sm text-app-text-light mt-1">Find exactly what you need using</p>
            </div>
            <div className="flex items-center overflow-x-scroll gap-2 mt-2 no-scrollbar">
                {categoriesData.map((cat,i)=>(
                    <Link key={cat.slug}
                        to={`/products?category=${cat.slug}`}
                        onClick={()=>window.scrollTo(0,0)}
                        className="flx flex-col group items-center gap-3 p-4"
                    >
                        <div className='size-18 sm:size-26 rounded-2xl overflow-hidden bg-orange-100 group-hover:ring-2 ring-orange-300/75 transition-all'>
                            <img src={cat.image} alt={cat.name} className="w-full h-full object-contain rounded-full transition-all" />
                        </div>
                        <span className="text-sm font-medium text-zinc-600 text-center leading-tight ">{cat.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    </section>
)
}

export default HomeCategories