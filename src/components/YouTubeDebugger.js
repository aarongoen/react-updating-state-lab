// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor() {
        super();

        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }       
        }
    }

    handleClickForBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    }

    handleClickForResolution = () => {
        this.setState({ 
            ...this.state,
            settings: {
                ...this.state.settings,
                    video: {...this.state.settings.video,
                    resolution: "720p"
                    }
            }
        });
    }
    
    
    render() {
        console.log("youTubeDebuggerState; ", this.state)
        return (
            <div>
                <button className="bitrate" onClick={this.handleClickForBitrate}> change bitrate to 12 </button>
                 <button className="resolution" onClick={this.handleClickForResolution}> change resolution to 720 </button>
            </div>
        );
    }
}

export default YouTubeDebugger;
