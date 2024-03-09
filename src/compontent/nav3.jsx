import React from 'react'
import '../style/nav3.css'

const Nav3 = () => {
  return (
    <div className= 'Nav3'>
        <a href='#' id='nav3'>Nature</a>
        <a href='#' id='nav3'>Wallpaper</a>
        <a href='#' id='nav3'>Background</a>
        <a href='#' id='nav3'>Sky</a>
        <a href='#' id='nav3'>Love</a>
        <a href='#' id='nav3'>Flowers</a>
        <a href='#' id='nav3'>Food</a>
        <a href='#' id='nav3'>Beach</a>
        <a href='#' id='nav3'>Flower</a>
        <a href='#' id='nav3'>Forest</a>
        <a href='#' id='nav3'>Cat</a>
        <a href='#' id='nav3'>Water</a>
        <a href='#' id='nav3'>Iphone wallpaper</a>
        <a href='#' id='nav3'>Editor's Choice</a>
        <img src="/img/settings.png" id='sett' alt="" />
        <select name="videos" style={{padding:"50"}} id="editer">
            <option style={{padding:"30%",color:"green"}} value="">Editor's Choice</option>
            <option style={{padding:"30"}} value="">Latest</option>
            <option style={{padding:"30"}} value="">Trending</option>
            
          </select>
    </div>
  )
}

export default Nav3