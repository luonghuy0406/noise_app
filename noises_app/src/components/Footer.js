import React from 'react';
import { connect } from "react-redux"
import '../scss/index.scss'

const Footer = (props) =>{
    
    return(
        <div className="footer-container">
            
        </div>
    )

}
function mapStateToProps(state, props) {
	return {
		value : state.value,
        countDown : state.countDown
	}
}

export default connect(mapStateToProps)(Footer)