import React from 'react';
import {Movies} from './Movies'


let movies = [
  {
    name:"Se7en", 
    releaseDate:"22 September 1995",
    plot:"Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    genre:" Crime, Drama, Mystery",
    imdbLink:<a href="https://www.imdb.com/title/tt0114369/?ref_=nv_sr_srsg_0">Se7en</a>,
    imdbUrl:<img src="file:///C:/Users/User3326/Desktop/React/domasna02/src/components/seven.JPG"></img>
  },
  {
    name:"Alien: Covenant", 
    releaseDate:"19 May 2017",
    plot:"The crew of a colony ship, bound for a remote planet, discover an uncharted paradise with a threat beyond their imagination, and must attempt a harrowing escape.",
    genre:" Horror, Sci-Fi, Thrille",
    imdbLink:<a href="https://www.imdb.com/title/tt2316204/">Alien: Covenant</a>,
    imdbUrl:<img src="file:///C:/Users/User3326/Desktop/React/domasna02/src/components/Alien.JPG"></img>
  },
  {
    name:"Arrival", 
    releaseDate:"11 November 2016",
    plot:"A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecrafts appear around the world.",
    genre:" Drama, Sci-Fi ",
    imdbLink: <a href="https://www.imdb.com/title/tt2543164/">Arrival</a>,
    imdbUrl:<img src="file:///C:/Users/User3326/Desktop/React/domasna02/src/components/Arrival.JPG"></img>
  },
  {
    name:"The Silence of the Lambs", 
    releaseDate:"14 February 1991",
    plot:"A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    genre:" Crime, Drama, Thriller",
    imdbLink:<a href="https://www.imdb.com/title/tt0102926/?ref_=nv_sr_srsg_0">The silence of the Lambs</a>,
    imdbUrl:<img src="file:///C:/Users/User3326/Desktop/React/domasna02/src/components/The%20silence.JPG"></img>
  },
  {
    name:"The Platform", 
    releaseDate:"20 March 2020",
    plot:"A vertical prison with one cell per level. Two people per cell. Only one food platform and two minutes per day to feed. ",
    genre:" Horror, Sci-Fi, Thriller ",
    imdbLink:<a href="https://www.imdb.com/title/tt8228288/?ref_=nv_sr_srsg_0">The Platform</a>,
    imdbUrl:<img src="file:///C:/Users/User3326/Desktop/React/domasna02/src/components/The%20platform.JPG"></img>
  }
]

export function App(){
  return(
    <div id="app">
      <h2>Homework</h2>
      <Movies filmovi={movies} />
    </div>
  )
}