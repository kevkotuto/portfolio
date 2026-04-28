import React from 'react'


export default function Logo() {
  return (
    <>
            {
                image.map((img) => {
                    <img src={img.src} alt={img.alt} className="w-62 h-62 object-cover rounded-b-[5rem]" key={img.src} />
          
                })
            }
    </>
  )
}
