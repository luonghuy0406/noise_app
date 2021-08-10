import React from 'react';
import { connect } from "react-redux"
import '../scss/index.scss'

const AppContainer = (props) =>{
    return(
        <div style={{background:"#198159", height:"100%"}}>
            
        </div>
    )

}
function mapStateToProps(state, props) {
	return {
		value : state.value,
        countDown : state.countDown
	}
}

export default connect(mapStateToProps)(AppContainer)