import React, { Component } from 'react'
import PropTypes from "prop-types";
import RemoteVideoView from './RemoteVideoView';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Signaling from './Signaling';

export default class Grid1 extends Component {

    constructor(props) {
        
        super(props)
        this.signaling = null;
        var url = 'wss://' + window.location.hostname + ':4443';
        this.signaling = new Signaling(url, "WebApp");
        this.state = {
            have_video: false,
            have_audio: false,
            volume: 0,
            enabled: false,
            clientWidth:document.body.offsetWidth,
            clientHeight:document.body.offsetHeight,
            resolutions :
			{
				width : 0,
				height: 0,
            },
        }
    }

    handleDisableAudio = () => {
        console.log('ok');
    this.setState({enabled:false});
    this.signaling.disable_audio(this.props.audioStream[1]['id'])
  };

    handleEnableAudio = () => {
    this.setState({enabled:true});
    this.signaling.enable_audio(this.props.audioStream[1]['id'])
  };

    render() {

        return (
            <div>
            <Grid container justify="center" spacing={16}>
                <Grid key='0' item lg={4}>
                {
                    this.props.remoteStream.length === 0 ? null :  <Button onClick={this.state.enabled==false ? this.handleEnableAudio : this.handleDisableAudio}><RemoteVideoView stream={this.props.remoteStream[0]} upload={this.props.upload} id={'remoteview'} sound={this.state.enabled} num={1}/> </Button>
                }
                </Grid>
              </Grid>
          </div>
        )
    }
}

Grid1.propTypes = {
    upload: PropTypes.any.isRequired, 
    audioStream: PropTypes.any.isRequired,
    remoteStream: PropTypes.any.isRequired,
    id: PropTypes.string.isRequired,
}
