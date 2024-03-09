

import React from 'react'
import "../style/bg1.css"

const Bg= ({ searchQuery, onSearchChange }) => {
  return (
    <div className=''>
 <div className='main' >
  <img className='back' src="/img/bg.jpg" alt="Snow"/>
  
  <div class="centered">
    <h1 id="h1" >Stunning royalty-free images & royalty-free stock</h1>
    <h1 id="p">Over 4.3 million+ high quality stock images, videos and music shared by our talented community.</h1>
    <img src="/img/search1.png" style={{width:"20px",position:"absolute",left:"3.8%",top:"70%",borderRadius:"0px 10px 10px 0px"}} alt="" />

   
    <input
        type="search"
        placeholder="Search all image on Pixabay"
        value={searchQuery}
        onChange={onSearchChange}
        className="search-input"
        id="search1"
      />

            
            <select name="videos" id="videos-select1">
            <option style={{background:"black"}} value="">All images</option>
            <option style={{background:"black"}} value="">Photos</option>
            <option style={{background:"black"}} value="">Videos</option>
            <option style={{background:"black"}} value="">Music</option>
            <option style={{background:"black"}} value="">Sound Effects</option>
            <option style={{background:"black"}} value="">Gits</option>
          </select>
  </div>
 

  <div class="bottom-left">Read more about the <a href="#" style={{color:"white"}}>Content License</a></div>
  <div class="bottom-right">Free image by <a href="#" style={{color:"white"}}> Nennieinszweidrei</a></div>
</div>
    </div>
  )
}

export default Bg