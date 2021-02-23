import React, {useEffect, useState } from 'react'
import {Switch, Route} from 'react-router-dom'
import { Albums } from './Albums';
import { Posts } from './Posts';
import { Nav } from './Nav';
import { API_URL } from './../constants';
import { Gallery } from './Gallery';


export function App(){

  const [post,setPost] = useState([]);
  const [photos,setPhotos] = useState([]);
  const [selectedImage,setSelectedImage]=useState([])

  useEffect(()=>{
    fetch(`${API_URL}/posts`)
    .then(res=>res.json)
    .then(json=>setPost(json))
    .catch(err=>alert(err))
    //za Photos fetch
    fetch(`${API_URL}/photos`)
    .then(res=>res.json)
    .then(json=>setPhotos(json))
    .catch(err=>alert(err))

  },[])

  function openPhoto(photoUrl) {
    setSelectedImage(photoUrl)

  }
  function closePhoto() {
    setSelectedImage('')

  }

  return(
    <div id="app">
      <Nav />
      <Switch>
        <Route path="/albums" component={Albums} />
        <Route path="/posts" render={()=>{
          return <Posts postList={post} />
        } } />

        < Route path="/gallery" render={() => {
          return <Gallery 
          photoList={photos} 
          openPhoto={openPhoto}
          selectedImage={selectedImage}
          closePhoto={closePhoto}
          />
        }} />
      </Switch>
      

    </div>
  )
}