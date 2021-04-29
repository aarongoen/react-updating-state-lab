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

    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: '12'
            }
        })
    }
    
    render() {
        return (
            <div className="bitrate">
                <button onClick={this.handleClick}> change bitrate to 12 </button>
            </div>
        );
    }
}

export default YouTubeDebugger;
