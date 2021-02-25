import React from 'react';
import {connect} from 'react-redux'
import {sayHello} from './../actions/SayHelloActions'

class ClassComponent extends React.Component{

    componentDidMount(){
        this.props.getGreeting();
    }

    render(){
        return(
            <div id="class-component">
                <h2>{this.props.greeting} </h2>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        greeting: state.SayHelloReducer.greeting
    }

}
const mapDispatchToProps = (dispatch) => {
    return{
        getGreeting:()=> {
            dispatch(sayHello());
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps) (ClassComponent)