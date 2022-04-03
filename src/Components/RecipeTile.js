import "./RecipeTile.css"
import React from 'react'

export default function RecipeTile(props) {

  return (
        <>
          {
            props.recipe.map((a)=>{
                  return(
                    <div key={a["recipe"]["label"]} className="recipetile">
                      <img className="image" src={a["recipe"]["image"]} alt="" />
                      <p className="label">{a["recipe"]["label"]}</p>
                    </div>
                  )
            })
          }
        </>
  )
}
