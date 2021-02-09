import React from 'react';
import {Domasna} from './Domasna';
import {Comments} from './Comments';
import {Car} from './Car'
import {Person} from './Person'


const user1={
  ime:"Filip",
  username:"filipdz",
  email:"filipdzukovski@yahoo.com"
}

const user2={
  ime:"Marina",
  username:"marstef",
  email:"marina_stef@hotmail.com"
}

let comments = [
  {author:"Filip", content:'This is my first Comment'},
  {author:"Marina", content:'Followed By This One'},
  {author:"Anastasija", content:'And Ending Whit This One'}
]

let registracija = [
  {grad:"Skopje", oznaka:"SK-9999-AB"},
  {grad:"Gostivar", oznaka:"GV-0000-AA"},
  {grad:"Debar",oznaka:"DB-7777-AS"}
]

let cars=[
  {brand:"Ford", model:"Fiesta", year:2000, plates: registracija[0]},
  {brand:"Opel", model:"Astra", year:2015, plates: registracija[1]},
  {brand:"Zastava", model:"101", year:1985, plates:registracija[2]}
]

let person = [
  {firstName:"Marina",
  lastName:"Stefanoska",
     addres:{street:"Boris Kidric",
     number:1,
     city:"Gostivar"},
  phone:07777777, employment:"Unemployed"},
  {firstName:"Jovan",lastName:"Petreski", addres:{street:"Josip Bros Tito",number:1,city:"Pehcevo"},phone:07222222, employment:"Unemployed"},
  {firstName:"Petko",lastName:"Mirkoski", addres:{street:"JNA",number:1,city:"Tetovo"},phone:07665566, employment:"Unemployed"}
]

datum: "02.08.2021"

export function App(){

  return(
    <div id="app">
      <h2>App</h2>
      <Person />
      <Car vozila={cars} />
      <Domasna 
        korisnik1={user1}
        korisnik2={user2}
        prikaziPrv= {false}
        prikaziKorisnik = {true}
      />
      <Comments 
       komentari = {comments}
       cifra={5}
      />

    </div>
  )
}