import React, { Component } from 'react'
import PropTypes from "prop-types";
import RemoteVideoView from './RemoteVideoView';
import Grid from '@material-ui/core/Grid';

export default class Grid8 extends Component {

    constructor(props) {
        super(props)
        this.props = {
            have_video: false,
            have_audio: false,
            volume: 0,
            clientWidth:document.body.offsetWidth,
            clientHeight:document.body.offsetHeight,
            resolutions :
      {
        width : 0,
        height: 0,
            },
        }
    }

    

    render() {

        return (
            <div>
            <Grid container justify="center" spacing={16}>
                <Grid key='0' item lg={4}>
                {
                    this.props.remoteStream.length === 0 ? null :  <Button onClick={this.state.enabled[0]==false ? () => this.handleEnableAudio(0) : () => this.handleDisableAudio(0)}><RemoteVideoView stream={this.props.remoteStream[0]} upload={this.props.upload} id={'remoteview'} sound={this.state.enabled[0]} num={1}/> </Button> 
                }
                </Grid>
              <Grid key='1' item lg={4}>
                {
                    this.props.remoteStream.length > 1 ? <Button onClick={this.state.enabled[1]==false ? () => this.handleEnableAudio(1) : () => this.handleDisableAudio(1)}><RemoteVideoView stream={this.props.remoteStream[1]} upload={this.props.upload} id={'remoteview'} sound={this.state.enabled[1]} num={2}/> </Button> : null
                }
                </Grid>
              </Grid>
          <Grid container justify="center" spacing={16}>
          <Grid key='3' item lg={4}>
                {
                    this.props.remoteStream.length > 2 ? <Button onClick={this.state.enabled[2]==false ? () => this.handleEnableAudio(2) : () => this.handleDisableAudio(2)}><RemoteVideoView stream={this.props.remoteStream[2]} upload={this.props.upload} id={'remoteview'} sound={this.state.enabled[2]} num={3}/> </Button> : null
                }
                  </Grid>
          <Grid key='0' item lg={4}>
            {
                this.props.remoteStream.length > 3 ? <Button onClick={this.state.enabled[3]==false ? () => this.handleEnableAudio(3) : () => this.handleDisableAudio(3)}><RemoteVideoView stream={this.props.remoteStream[3]} upload={this.props.upload} id={'remoteview'} sound={this.state.enabled[3]} num={4}/> </Button> : null
            }
          </Grid>
          <Grid key='1' item lg={4}>
            {
                this.props.remoteStream.length > 4 ? <Button onClick={this.state.enabled[4]==false ? () => this.handleEnableAudio(4) : () => this.handleDisableAudio(4)}><RemoteVideoView stream={this.props.remoteStream[4]} upload={this.props.upload} id={'remoteview'} sound={this.state.enabled[4]} num={5}/> </Button> : null
          }
              </Grid>
          </Grid>
          <Grid container justify="center" spacing={16}>
          <Grid key='3' item lg={4}>
                {
                    this.props.remoteStream.length > 5 ? <Button onClick={this.state.enabled[5]==false ? () => this.handleEnableAudio(5) : () => this.handleDisableAudio(5)}><RemoteVideoView stream={this.props.remoteStream[5]} upload={this.props.upload} id={'remoteview'} sound={this.state.enabled[5]} num={6}/> </Button> : null
                }
                  </Grid>
            <Grid key='0' item lg={4}>
            {
                this.props.remoteStream.length > 6 ? <Button onClick={this.state.enabled[6]==false ? () => this.handleEnableAudio(6) : () => this.handleDisableAudio(6)}><RemoteVideoView stream={this.props.remoteStream[6]} upload={this.props.upload} id={'remoteview'} sound={this.state.enabled[6]} num={7}/> </Button> : null
            }
          </Grid>
          <Grid key='0' item lg={4}>
            {
                this.props.remoteStream.length > 7 ? <Button onClick={this.state.enabled[7]==false ? () => this.handleEnableAudio(7) : () => this.handleDisableAudio(7)}><RemoteVideoView stream={this.props.remoteStream[7]} upload={this.props.upload} id={'remoteview'} sound={this.state.enabled[7]} num={8}/> </Button> : null
            }
          </Grid>
          </Grid>
          </div>
        )
    }
}

Grid8.propTypes = {
    upload: PropTypes.any.isRequired, 
    audioStream: PropTypes.any.isRequired,
    remoteStream: PropTypes.any.isRequired,
    id: PropTypes.string.isRequired,
}
