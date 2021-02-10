import React from 'react'

export class SecondApp extends React.Component{

    constructor(props){
        super(props);
        console.log("This is Constructor")
        
        this.state={
            promenliva1: "Prva Vrednost"

        }

    }

    smeniVrednost = () => {
        this.setState=({
            promenliva1: "Vtora Vrednost"
        })
    }

    componentDidMount(){
        console.log("This is Component Did Mouth")
    }

    render(){

        console.log("This is Render Method")
        return(
            <div id="second-app">
                <h2>Class Component</h2>
                <p>{this.state.promenliva1} </p>
                <button onClick={this.smeniVrednost}>Change Value </button>

            </div>
        )

    }
}