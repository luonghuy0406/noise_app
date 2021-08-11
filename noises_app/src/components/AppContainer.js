import React from 'react';
import { connect } from "react-redux"
import '../scss/index.scss'
import rainIcon from '../resources/images/rain.svg'
import Slider from '@material-ui/core/Slider';

const AppContainer = (props) =>{
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div className="app-container">
            <div>
                <div className="sound-card-container">
                    <div className="sound-card">
                        <div className="sound-card-icon icon-active">
                            <img src={rainIcon} alt="" width="100px"/>
                        </div>
                    </div>
                    <div>
                        {/* <audio/> */}
                    </div>
                    <div className="volume-control">
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="sound-card-container">
                    <div className="sound-card">
                        <div className="sound-card-icon">
                            <img src={rainIcon} alt="" width="100px"/>
                        </div>
                    </div>
                    <div>
                        {/* <audio/> */}
                    </div>
                    <div className="volume-control">
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="sound-card-container">
                    <div className="sound-card">
                        <div className="sound-card-icon">
                            <img src={rainIcon} alt="" width="100px"/>
                        </div>
                    </div>
                    <div>
                        {/* <audio/> */}
                    </div>
                    <div className="volume-control">
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="sound-card-container">
                    <div className="sound-card">
                        <div className="sound-card-icon">
                            <img src={rainIcon} alt="" width="100px"/>
                        </div>
                    </div>
                    <div>
                        {/* <audio/> */}
                    </div>
                    <div className="volume-control">
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="sound-card-container">
                    <div className="sound-card">
                        <div className="sound-card-icon">
                            <img src={rainIcon} alt="" width="100px"/>
                        </div>
                    </div>
                    <div>
                        {/* <audio/> */}
                    </div>
                    <div className="volume-control">
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="sound-card-container">
                    <div className="sound-card">
                        <div className="sound-card-icon">
                            <img src={rainIcon} alt="" width="100px"/>
                        </div>
                    </div>
                    <div>
                        {/* <audio/> */}
                    </div>
                    <div className="volume-control">
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="sound-card-container">
                    <div className="sound-card">
                        <div className="sound-card-icon">
                            <img src={rainIcon} alt="" width="100px"/>
                        </div>
                    </div>
                    <div>
                        {/* <audio/> */}
                    </div>
                    <div className="volume-control">
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="sound-card-container">
                    <div className="sound-card">
                        <div className="sound-card-icon">
                            <img src={rainIcon} alt="" width="100px"/>
                        </div>
                    </div>
                    <div>
                        {/* <audio/> */}
                    </div>
                    <div className="volume-control">
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </div>
                </div>
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

export default connect(mapStateToProps)(AppContainer)