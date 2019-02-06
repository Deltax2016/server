import React, { Component } from 'react'
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import micro from './micro.svg';

export default class RemoteVideoView extends Component {

    constructor(props) {
        super(props)
        this.state = {
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

    componentDidMount = () => {
        let video = this.refs[this.props.id];
        video.srcObject = this.props.stream;
        video.onloadedmetadata = function (e) {
            video.play();
        };
        this.setState({
            clientWidth:document.body.offsetWidth,
            clientHeight:document.body.offsetHeight,
        });
        window.addEventListener('resize', this.onWindowResize);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.onWindowResize);
    }

    handleSend = (num) => {
        console.log('starts')
        xhr('https://localhost:8081/setUpload?num='+num.toString(), function (fName) {
        console.log("Video sended to render!");

    });
        
    // Helper function to send 
    function xhr(url,callback) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                callback(location.href + request.responseText);
            }
        };   
        request.open('GET', url);
        request.send(null);
    }
    }

    play = () => {
        let video  = this.refs[this.props.id];
        video.play();
    }

    onWindowResize = () => {
        this.setState({
            clientWidth:document.body.offsetWidth,
            clientHeight:document.body.offsetHeight,
        });
    }

    render() {
        const style = {
            top:'60px',
            bottom: '0px',
            backgroundColor: '#080808',
            position: 'relative',
            zIndex: 10,
            alignItems: 'center',
            //width: '100%', height: '100%', objectFit: 'cover', 
        }
        const btnStyle =
        {
            left: '27%',
            top: '40%',
            height: '40px',
            //backgroundColor: '#080808',
            position: 'absolute',
            zIndex: 14,
        }
        const numStyle =
        {
            height: '40px',
            width: '40px',
            left: '0px',
            //top:`calc(100% - ${45}px)`,
            bottom: '0px',
            backgroundColor: '#808080',
            position: 'absolute',
            square: true,
            zIndex: 12,
            opacity: 0.50,
        }
        return (
            <div key={this.props.id} style={style}>
                <video ref={this.props.id} id={this.props.id} autoPlay playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor:'#080808'}} />
                {
                   this.props.upload==true ? <Button style={btnStyle} onClick={() => this.handleSend(this.props.num)} variant="contained" color='inherit' >Отправить на YouTube</Button> : null
                }
                <Paper style={numStyle} variant="contained" color='default'>
                    {
                        this.props.sound==false ? <Typography variant="title" color="inherit"> {this.props.num} </Typography> : <img src={micro} style={{width: 40, height: 40}}/>
                }
                </Paper>
            </div>
        )
    }
}

RemoteVideoView.propTypes = {
    num: PropTypes.any.isRequired,
    sound: PropTypes.any.isRequired,
    upload: PropTypes.any.isRequired,
    stream: PropTypes.any.isRequired,
    id: PropTypes.string.isRequired,
}
