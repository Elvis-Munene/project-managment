import React from 'react'
import { BsStar } from 'react-icons/bs'


export default function Headline() {
  return (
    <div class="bg-light text-dark p-5 text-center">
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
   <section>
   <p>JOIN 800,000+ HIGHLY PRODUCTIVE TEAMS</p>
   <div class="d-flex p-1">
   <h1>SAMSUNG</h1>
   <h1>SAMSUNG</h1>
   <h1>SAMSUNG</h1>
   <h1>SAMSUNG</h1>
   <h1>SAMSUNG</h1>
   </div>
   </section>


   <section>
   <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#1">Project & Tasks</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#2">Chat</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#3">Goals</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#4">Views</a>
  </li>
     
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">simplify work and  get more done </h5>
    <p class="card-text">Plan track, and manage any type of work with project management that flexes t your team's need.</p>
    <a href="#1" class="btn btn-danger">Get Started</a>
  </div>
 
</div>
   </section>
   

    </div>
    
    </div>
  )
}
