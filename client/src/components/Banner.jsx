import { TruckIcon, XIcon, ZapIcon } from 'lucide-react'
import React, { useState } from 'react'

function Banner() {
    const [bannerVisible,setBannerVisible] = useState(()=>{
        return sessionStorage.getItem('banner_diamissed') !=='true'
    })
    const dismissBanner = ()=>{
        setBannerVisible(false)
        sessionStorage.setItem('banner_dismissed','true')
    }
  return (
    <div>
        {bannerVisible &&(
            <div className='bg-linear-to-r from-app-green via-emerald-800 to-app-green text-white/70 text-xs sm:text-sm relative overflow-hidden flex-center gap-3 py-2'>

                <div className='flex-center gap-2'>
                    <TruckIcon className='size-4 shrink-0'/>
                    <span className='font-medium'>
                        Free delivery on orders above Rs.500
                    </span>
                </div>
                <span className='hidden sm:inline text-white/40'>|</span>
                <div className='hidden sm:flex items-center gap-2'>
                    <ZapIcon className='size-3.5 fill-yellow-400'/>
                    <span>Farm-Fresh produce Delivered daily</span>

                </div>


                <button onClick={dismissBanner} className='absolute right-2 top-1/2 -translate-y-1/2 hover:bg-white/10 rounded-full transition-colors'>
                    <XIcon className='size-3.5'/>
                </button>
            </div>
        )}
    </div>
  )
}

export default Banner