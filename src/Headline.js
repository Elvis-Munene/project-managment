import React from 'react'
import { BsStar } from 'react-icons/bs'


export default function Headline() {
  return (
    <div class="bg-dark text-light p-5 text-center">
    <div class="container">
   <section>
   <div class="d-flex">
      <div>
    <h1>One app to replace them all</h1>
    <p>All of your work in one place: Tasks, Docs,Chat,Goals, & more</p>
    <form >
    <div>
    <input type="email" placeholder="Enter your Email Address" />
    </div>
    </form>
  
    <div class="d-flex" >
    <button type="button" class="btn btn-primary">Get Started</button>
    <p class="p-2">FREE FOREVER <span> <p>NO CREDIT CARD</p></span></p>
    
    </div>
   
    
    </div>
   
    <img class='img-fluid w-50 h-50'    src='https://www.ucl.ac.uk/translational-research/sites/translational_research/files/styles/large_image/public/project_management_lolly_graphic_final.png?itok=lEgYs3Vp' alt='side image'/>
    </div>
    </section>
    <section class="d-flex p-1">
    <BsStar/> <BsStar/> <BsStar/> <BsStar/> <BsStar/><p>Based on 10,000+reviews on</p>
    </section>
   

    </div>
    
    </div>
  )
}
