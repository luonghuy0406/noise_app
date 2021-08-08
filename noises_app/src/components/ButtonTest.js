import React from "react";
import {connect} from "react-redux";
import {updateAnswer} from "../actions/index";

const ButtonTest = (props) =>{
    return(
        <button 
            type="button"
            onClick={() =>{props.dispatch(updateAnswer(Math.random()))}}
            >
            Test
        </button>
    )
}
function mapStateToProps(state, props) {
	return {
		...props,
		...state
	}
}

export default connect(mapStateToProps)(ButtonTest)