import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class RemoteVideoView3 extends Component {

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
            left: '0px',
            right: '0px',
            top:'60px',
            bottom: '0px',
            backgroundColor: '#323232',
            position: 'relative',
            zIndex: 1,
        }

        return (
            <div key={this.props.id} style={style}>
                <video ref={this.props.id} id={this.props.id} autoPlay playsInline
                    style={{ width: '20%', height: '20%', objectFit: 'cover' }} />
            </div>
        )
    }
}

RemoteVideoView3.propTypes = {
    stream: PropTypes.any.isRequired,
    id: PropTypes.string.isRequired,
}
