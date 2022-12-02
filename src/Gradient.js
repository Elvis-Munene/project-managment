import React, { useEffect } from 'react'
import Granim from "granim"
export default function Gradient() {
    useEffect(() => { 
      new Granim({
      element: '#logo-canvas',
      direction:"radial",
      opacity:[1,1],
      states:{
        "default-state":{
          gradients:[
            ["#800080","#0000ff"],
            ["#800080","#0000ff"],
            ["#800080","#0000ff"],
            ["#800080","#0000ff"],
            ["#800080","#0000ff"],
            ["#0000ff","#800080"]


          ],
          transitionSpeed: 10000,
        }
      }

     })
    }, [])
  return (
    <div className='bloc-log'>
    <canvas id='logo-canvas'/>
    <div className='logo-mask'></div>
    </div>
  )
}
