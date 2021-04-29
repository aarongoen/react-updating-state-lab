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
        const { settings } = { ...this.state };
        const { video } = settings   
        
        this.setState({ 
        video: {
                ...video,
                resolution: "720p"
            }
        });
    }
    
    
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleClickForBitrate}> change bitrate to 12 </button>
                 <button className="resolution" onClick={this.handleClickForResolution}> change resolution to 720 </button>
            </div>
        );
    }
}

export default YouTubeDebugger;
