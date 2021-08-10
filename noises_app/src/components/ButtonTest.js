import React from "react";
import {connect} from "react-redux";
import {updateAnswer} from "../actions/index";

const ButtonTest = (props) =>{
    return(
       <div>
            <div>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#setCountDownModal">
                Launch demo modal
            </button>
            {/* Modal */}
            <div className="modal fade" id="setCountDownModal" tabIndex={-1} aria-labelledby="setCountDownModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="setCountDownModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                    ...
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
                </div>
            </div>
            </div>


       </div>
    )
}
function mapStateToProps(state, props) {
	return {
		...props,
		...state
	}
}

export default connect(mapStateToProps)(ButtonTest)