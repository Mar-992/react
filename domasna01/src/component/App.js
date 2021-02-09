import React from 'react';
import { Student01 } from './Student01';
import { SubjectList } from './SubjectList';
import {Results } from './Results'

var student = {
    ime: 'Marina',
    prezime:'Stefanoska',
}

let subjects = ["History","Math","Art"];

let subjects1 = ["Hi","Ma","A"];
export function App(){

    return(
        <div id="app">
            <h2>List</h2>
            <Student01 
            ime={"Marina"}
            prezime={"Stefanoska"}
            />
            <SubjectList listOfSubjects={subjects1}/>

            <Results 
                hasResults={true}
                multipleResults={true}
            />

            <SubjectList listOfSubjects={subjects} />

        </div>
    )
}