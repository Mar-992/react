import React from 'react';
import {Welcome} from './Welcome';
import {Comments} from './Comments';
import {Student} from './Student';
import { FruitList } from './FruitList';
import {StudentClass} from './StudentClass';

const name = "Marina";
var student = {
    ime: 'Mare',
    prezime: 'Stefanoska',
    brNaIndeks: 7669
}

let fruits = ["apple","orange","mango"]

export function App(){
    return(
        <div id="app">
            <h2>App</h2>
            <Welcome ime={name}
            prezime={"Stefanoska"}
            age={24}
            />
            <Welcome ime={"Pero"}
            prezime={"Peroski"}
            age={21}
            />
            <Comments 
                hasComments={true}
            />
            <Student studentKM={student} />
            <FruitList listOfFruits = {fruits} />
            <StudentClass studentKM = {student} />
        </div>
    )
}