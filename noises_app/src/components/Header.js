import React from "react"
import { connect } from "react-redux"
import '../scss/index.scss'
import logo from '../resources/images/sound.svg'
import { timerCountDown } from "../functions"
import { updateAnswer } from "../actions"
import $ from "jquery";

const Header = (props) =>{
    return(
        <div className="nav">
            <div className="left-nav">
                <span>
                    <img src={logo} alt="" width="40" height="40"/>
                    <p>
                        NOISE
                    </p>
                </span>
            </div>
            <div className="center-nav">
                <span>
                    <span 
                        id="count-down-timer-button"
                        className="circle-button play"
                        onClick={() =>{
                            let test = timerCountDown(props.countDown)
                            if(test){
                                props.dispatch(updateAnswer(test))
                            }
                        }}
                        >
                        <i className="far fa-play-circle"></i>
                    </span>
                    <span 
                        id="count-down-timer"
                        data-bs-toggle="modal" 
                        data-bs-target="#setCountDownModal"
                        >
                        {props.countDown}
                    </span>
                </span>
                <div className="modal fade" id="setCountDownModal" tabIndex={-1} aria-labelledby="setCountDownModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div style={{textAlign:"center"}}>
                                <h5 className="modal-title">Set the time to count down</h5>
                            </div>
                            <div className="modal-body">
                                <div style={{display: "grid", gridTemplateColumns: "auto auto auto"}}>
                                    <div 
                                        className="set-time-countdown-items" 
                                        data-bs-dismiss="modal"
                                        onClick={() =>{
                                            props.dispatch(updateAnswer("00:05:00"))
                                            timerCountDown("00:05:00",true)
                                            $("#count-down-timer").text("00:05:00")
                                        }}
                                    >
                                        00:05:00
                                    </div>
                                    <div className="set-time-countdown-items" data-bs-dismiss="modal">
                                        00:15:00
                                    </div>
                                    <div className="set-time-countdown-items" data-bs-dismiss="modal">
                                        00:30:00
                                    </div>
                                    <div className="set-time-countdown-items" data-bs-dismiss="modal">
                                        00:45:00
                                    </div>
                                    <div className="set-time-countdown-items" data-bs-dismiss="modal">
                                        01:00:00
                                    </div>
                                    <div className="set-time-countdown-items" data-bs-dismiss="modal">
                                        01:30:00
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-nav">
                <span>
                    {/* <label className="mute-volume">
                        <i class="fas fa-volume-mute"></i>
                    </label> */}
                    <label className="mute-volume circle-button">
                        <i className="fas fa-volume-up"></i>
                    </label>
                    <label className="signin-btn">
                        Sign in
                    </label>
                </span>
            </div>
        </div>
    )

}
function mapStateToProps(state, props) {
	return {
		value : state.value,
        countDown : state.countDown
	}
}

export default connect(mapStateToProps)(Header)