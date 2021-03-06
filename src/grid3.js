import React, { Component } from 'react'
import PropTypes from "prop-types";
import RemoteVideoView from './RemoteVideoView';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Signaling from './Signaling';

export default class Grid3 extends Component {

    constructor(props) {
        
        super(props)
        this.signaling = null;
        var url = 'wss://' + window.location.hostname + ':4443';
        this.signaling = new Signaling(url, "WebApp");
        this.state = {
            have_video: false,
            have_audio: false,
            volume: 0,
            enabled: [false,false,false],
            clientWidth:document.body.offsetWidth,
            clientHeight:document.body.offsetHeight,
            resolutions :
            {
                width : 0,
                height: 0,
            },
        }
    }

    handleDisableAudio = (uid) => {
        console.log('ok');
        var array = this.state.enabled;
        console.log(array);
        array[uid] = false;
    this.setState({enabled:array});
    this.signaling.disable_audio(this.props.audioStream[uid]['id']);
  };

    handleEnableAudio = (uid) => {
    var array = this.state.enabled;
    console.log(array);
    array[uid] = true;
    this.setState({enabled:array});
    this.signaling.enable_audio(this.props.audioStream[uid]['id']);
  };

    render() {

        return (
            <div>
            <Grid container justify="center" spacing={16}>
                <Grid key='0' item lg={4}>
                {
                    this.props.remoteStream.length === 0 ? null :  <Button onClick={this.state.enabled[0]==false ? () => this.handleEnableAudio(0) : () => this.handleDisableAudio(0)}><RemoteVideoView stream={this.props.remoteStream[0]} upload={this.props.upload} id={'remoteview'} sound={this.state.enabled[0]} num={1}/> </Button>
                }
                </Grid>
              </Grid>
              <Grid container justify="center" spacing={16}>
                <Grid key='1' item lg={4}>
                {
                    this.props.remoteStream.length > 1 ? <Button onClick={this.state.enabled[1] == false ? () => this.handleEnableAudio(1) : () => this.handleDisableAudio(1)}><RemoteVideoView stream={this.props.remoteStream[1]} upload={this.props.upload} id={'remoteview'} sound={this.state.enabled[1]} num={2}/> </Button> : null
                }
                {
                    this.props.remoteStream.length > 2 ? <Button onClick={this.state.enabled[2]==false ? () => this.handleEnableAudio(2) : () => this.handleDisableAudio(2)}><RemoteVideoView stream={this.props.remoteStream[2]} upload={this.props.upload} id={'remoteview'} sound={this.state.enabled[2]} num={3}/> </Button> : null
                }
                </Grid>
              </Grid>
          </div>
        )
    }
}

Grid3.propTypes = {
    upload: PropTypes.any.isRequired, 
    audioStream: PropTypes.any.isRequired,
    remoteStream: PropTypes.any.isRequired,
    id: PropTypes.string.isRequired,
}
