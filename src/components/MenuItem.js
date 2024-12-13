import React from 'react'

function MenuItem({image,name,price}) {
  return (
    <div className='menuItem'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1>
        <p>{price}</p>
        <button>Buy Now</button>
      
    </div>
  )
}

export default MenuItem

// this is the menulist to display games card on the service page crated by Dhruvan Gandhi