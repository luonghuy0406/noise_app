import React from "react"
import '../scss/index.scss';

const MainControl = () =>{

    return(
        <div className="main-control" style={{padding:"6rem 0 2rem"}}>
            <div className="header-main-control">
                <div className="button-main-control">
                    <div 
                        onClick={() =>{
                            
                        }}
                    >
                        Playlist
                    </div>
                    <div 
                        onClick={() =>{
                            
                        }}
                    >
                        Favorites
                    </div>
                </div>
                <div className="button-main-control">
                <div 
                        onClick={() =>{
                            
                        }}
                    >
                        Save
                    </div>
                    <div 
                        onClick={() =>{
                            
                        }}
                    >
                        Clear
                    </div>
                    <div 
                        onClick={() =>{
                            
                        }}
                    >
                        Share
                    </div>
                </div>
            </div>
            <div className="board-main-control">
                <div className="save-config">
                        Random
                </div>
                <div className="save-config">
                        Random
                </div>
                <div className="save-config">
                        Random
                </div>
                <div className="save-config">
                        Random
                </div>
                <div className="save-config">
                        Random
                </div>
                <div className="save-config">
                        Random
                </div>
                <div className="save-config">
                        Random
                </div>
            </div>
        </div>
    )

}

export default MainControl