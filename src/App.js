import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import blue from '@material-ui/core/colors/blue';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import VideoCamIcon from '@material-ui/icons/Videocam';
import CallIcon from '@material-ui/icons/Call';
import PhoneIcon from '@material-ui/icons/CallEnd';
import VideoOnIcon from '@material-ui/icons/Videocam';
import VideoOffIcon from '@material-ui/icons/VideocamOff';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import { SVGIcon } from 'react-md';
import LocalVideoView from './LocalVideoView';
import Grid9 from './grid9';
import Grid8 from './grid8';
import Grid7 from './grid7'; 
import Grid6 from './grid6';
import Grid5 from './grid5';
import Grid4 from './grid4';
import Grid3 from './grid3';
import Grid2 from './grid2';
import Grid1 from './grid1';
import RemoteVideoView from './RemoteVideoView';
import RemoteVideoView2 from './RemoteVideoView2';
import RemoteVideoView3 from './RemoteVideoView3';
import Paper from '@material-ui/core/Paper';
import css from './layout.css'; 
import logo from './fill-3.png';
import grid1 from './grid-1.png';
import grid2 from './grid-2.svg';
import grid3 from './grid-3.svg';
import grid4 from './grid-4.svg';
import grid5 from './grid-5.svg';
import grid6 from './grid-6.svg';
import grid7 from './grid-7.svg';
import grid8 from './grid-8.svg';
import grid9 from './grid-9.svg';
//import FormData from 'form-data';
//import MediaStreamRecorder from './RecordRTC.js';
import MediaStreamRecorder from './MediaStreamRecorder';

import Signaling from './Signaling';

var newDate =new Date();

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});



var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
//var formData = require('form-data');
var http = require('http');


var USE_AUDIO = true;
var USE_VIDEO = true;
var MUTE_AUDIO_BY_DEFAULT = false;

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "trasparent",
  },
  flex: {
    flex: 1,
  },
  paper: {
    position:'absolute',
    height: 50,
    width: 50,
    alignItems: 'center',
    marginTop: 4,
  },
  bigPaper: {
    height: "100%",
    width: "100%",
    alignItems: 'center',
    color:'#080808',
    position:'absolute',
    left:'0px',
    top:'0px'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  btnTool: {
    color: 'white',
    marginRight: 20,
  },
  col: {
  width: 10,
},
localvideo:{
  marginTop: 1000,
},
drawer: {
    width: 300,
    flexShrink: 0,
    marginLeft: '1%',
    marginTop: "5%",
  },
  drawerPaper: {
    marginTop: "5%",
    marginLeft: '8px',
    width: 300,
    backgroundColor: "#080808"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    
    marginLeft: -300,
  },
  contentShift: {
    marginLeft: "1%",
  },
  appBar: {
    colorSecondary: "#080808",
    
  },
  appBarShift: {
    width: "100%",
    marginLeft:300,
    
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
//

var mediaConstraints = {
    audio: true,
    video: true
};

var mediaRecorder;
var mediaRecorder1;
var mediaRecorder2;
var mediaRecorder3;
var mediaRecorder4;
var mediaRecorder5;
var mediaRecorder6;
var mediaRecorder7;
var mediaRecorder8;
var mediaRecorder9;


//navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError);
//navigator.getUserMedia(mediaConstraints, onMediaSuccess1, onMediaError);
//navigator.getUserMedia(mediaConstraints, onMediaSuccess2, onMediaError);


var chunks = [];
var chunks1 = [];
var chunks2 = [];
var chunks3 = [];
var chunks4 = [];
var chunks5 = [];
var chunks6= [];
var chunks7 = [];
var chunks8 = [];
var chunks9 = [];
/*
function onMediaSuccess(stream,count) {
  console.log('StartRecord streamer');
  chunks[count] = [];
    mediaRecorder[count] = new MediaRecorder(stream);
    mediaRecorder[count].ondataavailable = function(e) {
      console.log("data available"+count.toString());
      chunks[count].push(e.data);
  }
    mediaRecorder[count].start(1000);
}*/

function onMediaSuccess(stream,count) {
  console.log('StartRecord streamer');
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = function(e) {
      console.log("data available 0");
      chunks.push(e.data);
  }
    mediaRecorder.start(1000);
}

function onMediaSuccess1(stream,count) {
  console.log('StartRecord 1');
    mediaRecorder1 = new MediaRecorder(stream);
    mediaRecorder1.ondataavailable = function(e) {
      console.log("data available 1");
      chunks1.push(e.data);
  }
    mediaRecorder1.start(1000);
}

function onMediaSuccess2(stream,count) {
  console.log('StartRecord 2');
    mediaRecorder2 = new MediaRecorder(stream);
    mediaRecorder2.ondataavailable = function(e) {
      console.log("data available 4");
      chunks2.push(e.data);
  }
    mediaRecorder2.start(1000);
}

function onMediaSuccess3(stream,count) {
  console.log('StartRecord 3');
    mediaRecorder3 = new MediaRecorder(stream);
    mediaRecorder3.ondataavailable = function(e) {
      console.log("data available 3");
      chunks3.push(e.data);
  }
    mediaRecorder3.start(1000);
}

function onMediaSuccess4(stream,count) {
  console.log('StartRecord 4');
    mediaRecorder4 = new MediaRecorder(stream);
    mediaRecorder4.ondataavailable = function(e) {
      console.log("data available 4");
      chunks4.push(e.data);
  }
    mediaRecorder4.start(1000);
}

function onMediaSuccess5(stream,count) {
  console.log('StartRecord 5');
    mediaRecorder5 = new MediaRecorder(stream);
    mediaRecorder5.ondataavailable = function(e) {
      console.log("data available 5");
      chunks5.push(e.data);
  }
    mediaRecorder5.start(1000);
}

function onMediaSucces6(stream,count) {
  console.log('StartRecord 6');
    mediaRecorder6 = new MediaRecorder(stream);
    mediaRecorder6.ondataavailable = function(e) {
      console.log("data available 6");
      chunks6.push(e.data);
  }
    mediaRecorder6.start(1000);
}

function onMediaSuccess7(stream,count) {
  console.log('StartRecord 7');
    mediaRecorder7 = new MediaRecorder(stream);
    mediaRecorder7.ondataavailable = function(e) {
      console.log("data available 7");
      chunks7.push(e.data);
  }
    mediaRecorder7.start(1000);
}

function onMediaSuccess8(stream,count) {
  console.log('StartRecord 8');
    mediaRecorder8 = new MediaRecorder(stream);
    mediaRecorder8.ondataavailable = function(e) {
      console.log("data available 8");
      chunks8.push(e.data);
  }
    mediaRecorder8.start(1000);
}

function onMediaSuccess8(stream,count) {
  console.log('StartRecord 9');
    mediaRecorder9 = new MediaRecorder(stream);
    mediaRecorder9.ondataavailable = function(e) {
      console.log("data available 9");
      chunks9.push(e.data);
  }
    mediaRecorder9.start(1000);
}
function onMediaError(e) {
    console.error('media error', e);
}

class App extends Component {

  constructor(props) {
    super(props);

    this.selfView = null;
    this.remoteView = null;
    this.signaling = null;

    this.state = {
      hours: null,
      minutes: null,
      peers: [],
      self_id: null,
      open: false,
      localStream: null,
      remoteStream: [],
      upload: false,
      audio_muted: false,
      video_muted: false,
      gopen: false,
      grid: 1,
      audioStream: [],
      audioBool: [],
    };
  }

componentDidMount = () => {
    var url = 'wss://' + window.location.hostname + ':4443';
    this.signaling = new Signaling(url, "WebApp");
    this.setState({ hours:newDate.getHours() , minutes: newDate.getMinutes() });
    setTimeout(this.func, 10000);
    this.signaling.on('peers',(peers, self) => {
      this.setState({peers, self_id: self});
    });

    this.signaling.on('new_call',(from, session) => {
      this.setState({ open:true });
    });


    this.signaling.on('localstream',(stream) => {
      setTimeout(this.func, 10000);
      this.setState({localStream: stream});
    });

    this.signaling.on('addstream',(stream) => {
      /*this.setState({remoteStream: stream});*/
      //var joined = this.state.myArray.concat(stream);

      var array = [];
      console.log(this.state.peers['peers']);
      for (var i = 0; i<this.state.peers['peers'].length; i++)
      {
        if (this.state.peers['peers'][i]['name']!="WebApp") 
          array.push(this.state.peers['peers'][i]);
      }
      this.setState({ audioStream: array});
      var array = this.state.remoteStream;
      array.push(stream);
      this.setState({ remoteStream: array});
      //onMediaSuccess(stream);
    });

    this.signaling.on('removestream',(stream) => {
      this.setState({remoteStream: []});
    });

    this.signaling.on('call_end',(to, session) => {
      this.setState({ open:false, localStream: null, remoteStream: [] });
    });

    this.signaling.on('leave',(to) => {
      this.setState({ open:false, localStream: null, remoteStream: [],upload: false });
    });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  message = (time) => {
    this.signaling.gmessage(time);
  }

  audioOn = () => {
    this.signaling.audio_enable_all();
  };

  audioOff = () => {
    this.signaling.audio_disable_all();
  };

  func = () => {
    console.log('ok');
  this.setState({ hours:newDate.getHours() , minutes: newDate.getMinutes() });
  //setTimeout(this.func, 10000);
  }

  handleInvitePeer = (peer_id, type) => {
    if (this.state.peers != null) {
      var streams_list = this.state.peers;
      var streams_elem;
      /*this.signaling.invite(peer_id, type);
     /* streams_list.forEach(element, num => {
        this.signaling.invite(element['id'],'video');
      });*/
      //for (var i = 0; i < streams_list.length; i++) {
        //this.signaling.invite(streams_list[i]['id'],'video');
      //}

    
  }
    /*this.signaling.invite(peer_id, type);*/
  }

  handleBye = () => {
    this.setState({upload: false});
    this.setState({remoteStream: []});
    this.setState({peers: []});
    this.setState({audioStream: []});
    this.signaling.bye();
  }

  /**
     * video open/close
     */
  onVideoOnClickHandler = () => {
    let video_muted = !this.state.video_muted;
    this.onToggleLocalVideoTrack(video_muted);
    this.setState({ video_muted });
  }

  onToggleLocalVideoTrack = (muted) => {
    var videoTracks = this.state.localStream.getVideoTracks();
    if (videoTracks.length === 0) {
      console.log("No local video available.");
      return;
    }
    console.log("Toggling video mute state.");
    for (var i = 0; i < videoTracks.length; ++i) {
      videoTracks[i].enabled = !muted;
    }
  }

  /**
     * mic open/close
     */
  onAudioClickHandler = () => {
    let audio_muted = !this.state.audio_muted;
    this.onToggleLocalAudioTrack(audio_muted);
    this.setState({ audio_muted });
  }


  onToggleLocalAudioTrack = (muted) => {
    var audioTracks = this.state.localStream.getAudioTracks();
    if (audioTracks.length === 0) {
      console.log("No local audio available.");
      return;
    }
    console.log("Toggling audio mute state.");
    for (var i = 0; i < audioTracks.length; ++i) {
      audioTracks[i].enabled = !muted;
    }
  }

  handleDrawerOpen = () => {
    this.setState({ gopen: true });
  };

  handleUpload = () => {
    this.setState({upload: true});
  }

  onStartRecord = () => {
        console.log('starts');
        xhr('https://localhost:8081/stime?stime='+newDate.getHours().toString()+':'+newDate.getMinutes().toString()+'&dir='+newDate.getHours().toString()+newDate.getMinutes().toString(), function (fName) {
        console.log("Time");
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

    chunks = [];
    chunks1 = [];
    chunks2 = [];
    chunks3 = [];
    chunks4 = [];
    chunks5 = [];
    chunks6 = [];
    chunks7 = [];
    chunks8 = [];
    chunks9 = [];
    if (this.state.remoteStream.length>0){
      onMediaSuccess1(this.state.remoteStream[0],1);
      if (this.state.localStream != null) onMediaSuccess(this.state.localStream,0);
    }
    if (this.state.remoteStream.length>1){
      onMediaSuccess2(this.state.remoteStream[1],2);
    }
    if (this.state.remoteStream.length>2){
      onMediaSuccess3(this.state.remoteStream[2],2);
    }
    if (this.state.remoteStream.length>3){
      onMediaSuccess4(this.state.remoteStream[3],2);
    }
    if (this.state.remoteStream.length>4){
      onMediaSuccess5(this.state.remoteStream[4],2);
    }
    if (this.state.remoteStream.length>5){
      onMediaSuccess6(this.state.remoteStream[5],2);
    }
    if (this.state.remoteStream.length>6){
      onMediaSuccess7(this.state.remoteStream[6],2);
    }
    if (this.state.remoteStream.length>7){
      onMediaSuccess8(this.state.remoteStream[7],2);
    }
    if (this.state.remoteStream.length>8){
      onMediaSuccess9(this.state.remoteStream[8],2);
    }
  };

  onStopRecord = () =>{
    xhr('https://localhost:8081/etime?etime='+newDate.getHours().toString()+':'+newDate.getMinutes().toString(), function (fName) {
        console.log("Time");
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
    this.handleUpload();

    function xhr(url, data, callback) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                callback(location.href + request.responseText);
            }
        };   
        request.open('POST', url);
        request.send(data);
    }

    mediaRecorder.onstop = function () {
      var blob = new Blob(chunks, { 'type' : 'video/webm' });

        var formData = new FormData();
        formData.append('upload.webm', blob);
    
    xhr('https://localhost:8081/upload0', formData, function (fName) {
        console.log("Video succesfully uploaded 0!");

    });

        console.log('blobURL');
    };

   mediaRecorder1.onstop = function () {
      var blob = new Blob(chunks1, { 'type' : 'video/webm' });
        // POST/PUT "Blob" using FormData/XHR2
        //var blobURL = URL.createObjectURL(blob);
        var formData = new FormData();
        formData.append('upload1.webm', blob);
    xhr('https://localhost:8081/upload1', formData, function (fName) {
        console.log("Video succesfully uploaded 1!");

    });

        console.log('blobURL');
    };

    if (this.state.remoteStream.length > 1){
    mediaRecorder2.onstop = function () {
      var blob = new Blob(chunks2, { 'type' : 'video/webm' });

        var formData = new FormData();
        formData.append('upload.webm', blob);

    xhr('https://localhost:8081/upload2', formData, function (fName) {
        console.log("Video succesfully uploaded 2!");

    });

        console.log('blobURL');
    };
  }

  if (this.state.remoteStream.length > 2){
    mediaRecorder3.onstop = function () {
      var blob = new Blob(chunks3, { 'type' : 'video/webm' });

        var formData = new FormData();
        formData.append('upload.webm', blob);
    
    xhr('https://localhost:8081/upload3', formData, function (fName) {
        console.log("Video succesfully uploaded 3!");
    });
        console.log('blobURL');
    };
  }
  if (this.state.remoteStream.length > 3){
    mediaRecorder4.onstop = function () {
      var blob = new Blob(chunks4, { 'type' : 'video/webm' });
        var formData = new FormData();
        formData.append('upload.webm', blob);
    xhr('https://localhost:8081/upload4', formData, function (fName) {
        console.log("Video succesfully uploaded 2!");

    });

        console.log('blobURL');
    };
  }
  if (this.state.remoteStream.length > 4){
    mediaRecorder5.onstop = function () {
      var blob = new Blob(chunks5, { 'type' : 'video/webm' });

        var formData = new FormData();
        formData.append('upload.webm', blob);

    xhr('https://localhost:8081/upload5', formData, function (fName) {
        console.log("Video succesfully uploaded 5!");

    });

        console.log('blobURL');
    };
  }
  if (this.state.remoteStream.length > 5){
    mediaRecorder6.onstop = function () {
      var blob = new Blob(chunks6, { 'type' : 'video/webm' });
        // POST/PUT "Blob" using FormData/XHR2
        //var blobURL = URL.createObjectURL(blob);
        var formData = new FormData();
        formData.append('upload.webm', blob);
    
    // Execute the ajax request, in this case we have a very simple PHP script
    // that accepts and save the uploaded "video" file
    xhr('https://localhost:8081/upload6', formData, function (fName) {
        console.log("Video succesfully uploaded 2!");

    });

        console.log('blobURL');
    };
  }
  if (this.state.remoteStream.length > 6){
    mediaRecorder7.onstop = function () {
      var blob = new Blob(chunks7, { 'type' : 'video/webm' });
        // POST/PUT "Blob" using FormData/XHR2
        //var blobURL = URL.createObjectURL(blob);
        var formData = new FormData();
        formData.append('upload.webm', blob);
    
    // Execute the ajax request, in this case we have a very simple PHP script
    // that accepts and save the uploaded "video" file
    xhr('https://localhost:8081/upload7', formData, function (fName) {
        console.log("Video succesfully uploaded 7!");

    });

        console.log('blobURL');
    };
  }

  if (this.state.remoteStream.length > 7){
    mediaRecorder8.onstop = function () {
      var blob = new Blob(chunks8, { 'type' : 'video/webm' });

        var formData = new FormData();
        formData.append('upload.webm', blob);

    xhr('https://localhost:8081/upload8', formData, function (fName) {
        console.log("Video succesfully uploaded 2!");

    });

        console.log('blobURL');
    };
  }

  if (this.state.remoteStream.length > 8){
    mediaRecorder9.onstop = function () {
      var blob = new Blob(chunks9, { 'type' : 'video/webm' });

        var formData = new FormData();
        formData.append('upload.webm', blob);
    xhr('https://localhost:8081/upload9', formData, function (fName) {
        console.log("Video succesfully uploaded 9!");

    });

        console.log('blobURL');
    };
  }


    mediaRecorder.stop();
    mediaRecorder1.stop();
    if (this.state.remoteStream.length > 1) mediaRecorder2.stop();
    if (this.state.remoteStream.length > 2) mediaRecorder3.stop();
    if (this.state.remoteStream.length > 3) mediaRecorder4.stop();
    if (this.state.remoteStream.length > 4) mediaRecorder5.stop();
    if (this.state.remoteStream.length > 5) mediaRecorder6.stop();
    if (this.state.remoteStream.length > 6) mediaRecorder7.stop();
    if (this.state.remoteStream.length > 7) mediaRecorder8.stop();
    if (this.state.remoteStream.length > 8) mediaRecorder9.stop();
    //media
    
  };


  handleDrawerClose = () => {
    this.setState({ gopen: false });
  };

  handleSetGrid = (num) => {
    this.setState({ grid: num});
    console.log(newDate.getHours());
  };

  render() { 
    const style = {
            backgroundColor: '#080808',
        }
    const { classes } = this.props;//
    return (
      <MuiThemeProvider theme={theme} style={{ backgroundColor: '#080808' }}>
        <div className={classes.root} style={{ backgroundColor: '#080808' }}>
          <AppBar position="static" color="secondary" style={{ backgroundColor: '#080808' }} className={classNames(classes.appBar)}>
            <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.state.gopen === false ? this.handleDrawerOpen : this.handleDrawerClose }
              className={classNames(classes.menuButton)}
            >
            <img src={logo} />

            </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Expload Arena
            </Typography>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
              {<Button color="inherit" onClick={this.onStartRecord}>Начать запись</Button>}
              {<Button color="inherit" onClick={this.onStopRecord}>Закончить запись</Button>}

            </Toolbar>
          </AppBar>
          <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.gopen}

          classes={{
            paper: classes.drawerPaper,
          }}
        >
        <Divider style={{color: "#FFFFFF",backgroundColor:'#FFFFFF'}}/>//
          <Typography variant="subheading" style={{backgroundColor:'#080808',color:"#808080",align:'center',marginLeft:'1%'}}>
                Push уведомления:
            </Typography>
          <List>
            {['15 минут до конца', '5 минут до конца', 'Игра закончилась', 'Игра началась'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={<Button style={{objectFit:'cover',width:'100%'}} style={{color:"#808080"}}>{text}</Button>} style={{color: "#808080"}}/>
              </ListItem>
            ))}
          </List>

          <Divider style={{color: "#FFFFFF",backgroundColor:'#FFFFFF'}}/>
          <Typography variant="subheading" color="inherit" style={{color:"#808080",align:'center',marginLeft:'1%'}}>
                Выбор сетки: 
            </Typography>
          <Grid container justify="center" spacing={8} style={{ backgroundColor: '#080808',objectFit: 'cover',height:'10%',alignItems:'center'}}>
              <Grid key="1" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(1)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 1 ? <img src={grid1}/> : <img src={grid1} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
              <Grid key="3" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(2)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 2 ? <img src={grid2}/> : <img src={grid2} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
              <Grid key="4" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(3)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 3 ? <img src={grid3}/> : <img src={grid3} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
          </Grid>
          <Grid container className={classes.demo} justify="center" spacing={8} style={{ backgroundColor: '#080808',objectFit: 'cover',height:'10%',alignItems:'center'}}>
           <Grid key="1" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(4)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 4 ? <img src={grid4}/> : <img src={grid4} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
              <Grid key="3" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(5)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 5 ? <img src={grid5}/> : <img src={grid5} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
              <Grid key="4" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(6)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 6 ? <img src={grid6}/> : <img src={grid6} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
          </Grid>
          <Grid container className={classes.demo} justify="center" spacing={8} style={{ backgroundColor: '#080808',objectFit: 'cover',height:'10%',alignItems:'center'}}>
            <Grid key="1" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(7)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 7 ? <img src={grid7}/> : <img src={grid7} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
              <Grid key="3" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(8)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 8 ? <img src={grid8}/> : <img src={grid8} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
              <Grid key="4" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(9)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 9 ? <img src={grid9}/> : <img src={grid9} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
          </Grid>
          <Divider style={{color: "#FFFFFF",backgroundColor:'#FFFFFF'}}/>

        </Drawer>
          
          <Dialog
            fullScreen
            open={this.state.open}
            onClose={this.handleClose}
            style={{backgroundColor:'#080808'}}
            overlayStyle={{backgroundColor: 'trasparent'}}
            TransitionComponent={Transition}
          >
            <AppBar position="static" color="secondary" style={{ backgroundColor: '#080808' }}>
            <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.state.gopen === false ? this.handleDrawerOpen : this.handleDrawerClose }
              className={classNames(classes.menuButton)}
            >
            <img src={logo} />

            </IconButton>
            
              <Typography variant="title" color="inherit" className={classes.flex}>
                Expload Arena
            </Typography>
            <Paper className={classes.paper} style={{left:'40%'}}>
                <Typography variant="title" color="secondary" style={{color:'#080808',marginTop:'20%',marginLeft:'20%'}} className={classes.flex}>
                {this.state.hours}
                </Typography>
              </Paper> 
              <Typography variant="title" color="primary" style={{color:'#FFFFFF',position:'absolute',left:'43%'}} className={classes.flex}>
                :
                </Typography>
            <Paper className={classes.paper} style={{left:'44%'}}>
                <Typography variant="title" color="secondary" style={{color:'#080808',marginTop:'20%',marginLeft:'20%'}} className={classes.flex}>
                {this.state.minutes}
                </Typography>
              </Paper>
              {<Button color="default" onClick={this.audioOn} style={{color:'#808080',left:'20%',position:'absolute'}}>Комментировать всех</Button>}
              {<Button color="default" onClick={this.audioOff} style={{color:'#808080',left:'30%',position:'absolute'}}>Сбросить всех</Button>}
              {<Button color="inherit" onClick={this.onStartRecord}>Начать запись</Button>}
              {this.state.upload == false ? <Button color="inherit" onClick={this.onStopRecord}>Закончить запись</Button> : <Button color="inherit" onClick={this.handleBye}>Завершить сеанс</Button>}
            </Toolbar>
          </AppBar>
          <Paper className={classes.bigPaper} style={{backgroundColor:'#080808'}}/>
          {
          this.state.grid==1 ? <Grid1 remoteStream={this.state.remoteStream} id={'remoteview'} upload = {this.state.upload} audioStream={this.state.audioStream}/> : null 
          }
          {
          this.state.grid==2 ? <Grid2 remoteStream={this.state.remoteStream} id={'remoteview'} upload = {this.state.upload} audioStream={this.state.audioStream}/> : null
          }
          {
          this.state.grid==3 ? <Grid3 remoteStream={this.state.remoteStream} id={'remoteview'} upload = {this.state.upload} audioStream={this.state.audioStream}/> : null
          }
          {
          this.state.grid==4 ? <Grid4 remoteStream={this.state.remoteStream} id={'remoteview'} upload = {this.state.upload} audioStream={this.state.audioStream}/> : null
          }
          {
          this.state.grid==5 ? <Grid5 remoteStream={this.state.remoteStream} id={'remoteview'} upload = {this.state.upload} audioStream={this.state.audioStream}/> : null
          }
          {
          this.state.grid==6 ? <Grid6 remoteStream={this.state.remoteStream} id={'remoteview'} upload = {this.state.upload} audioStream={this.state.audioStream}/> : null
          }
          {
          this.state.grid==7 ? <Grid7 remoteStream={this.state.remoteStream} id={'remoteview'} upload = {this.state.upload} audioStream={this.state.audioStream}/> : null
          }
          {
          this.state.grid==8 ? <Grid8 remoteStream={this.state.remoteStream} id={'remoteview'} upload = {this.state.upload} audioStream={this.state.audioStream}/> : null
          }
          {
          this.state.grid==9 ? <Grid9 remoteStream={this.state.remoteStream} id={'remoteview'} upload = {this.state.upload} audioStream={this.state.audioStream}/> : null
          }
          <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.gopen}
          style={{ backgroundColor: '#080808' }}
          classes={{
            paper: classes.drawerPaper, 
          }}
        >
        
            <Typography variant="subheading" style={{backgroundColor:'#080808',color:"#808080",align:'center',marginLeft:'1%'}}>
                Push уведомления:
            </Typography>
          <List>
            {['15 минут до конца', '5 минут до конца', 'Игра закончилась', 'Игра началась'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={<Button style={{objectFit:'cover',width:'100%'}} onClick={() => this.message(index)} style={{color:"#808080"}}>{text}</Button>} style={{color: "#808080"}}/>
              </ListItem>
            ))}
          </List>

          <Divider style={{color: "#FFFFFF",backgroundColor:'#FFFFFF'}}/>
          <Typography variant="subheading" color="inherit" style={{color:"#808080",align:'center',marginLeft:'1%'}}>
                Выбор сетки: 
            </Typography>
          <Grid container justify="center" spacing={8} style={{ backgroundColor: '#080808',objectFit: 'cover',height:'10%',alignItems:'center'}}>
              <Grid key="1" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(1)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 1 ? <img src={grid1}/> : <img src={grid1} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
              <Grid key="3" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(2)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 2 ? <img src={grid2}/> : <img src={grid2} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
              <Grid key="4" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(3)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 3 ? <img src={grid3}/> : <img src={grid3} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
          </Grid>
          <Grid container className={classes.demo} justify="center" spacing={8} style={{ backgroundColor: '#080808',objectFit: 'cover',height:'10%',alignItems:'center'}}>
           <Grid key="1" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(4)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 4 ? <img src={grid4}/> : <img src={grid4} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
              <Grid key="3" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(5)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 5 ? <img src={grid5}/> : <img src={grid5} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
              <Grid key="4" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(6)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 6 ? <img src={grid6}/> : <img src={grid6} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
          </Grid>
          <Grid container className={classes.demo} justify="center" spacing={8} style={{ backgroundColor: '#080808',objectFit: 'cover',height:'10%',alignItems:'center'}}>
            <Grid key="1" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(7)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 7 ? <img src={grid7}/> : <img src={grid7} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
              <Grid key="3" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(8)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 8 ? <img src={grid8}/> : <img src={grid8} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
              <Grid key="4" item>
                <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.handleSetGrid(9)}
              className={classNames(classes.menuButton)}
            >
            {
            this.state.grid == 9 ? <img src={grid9}/> : <img src={grid9} style={{opacity: 0.20}}/>
            }
            </IconButton>
              </Grid>
          </Grid>
          <Divider style={{color: "#FFFFFF",backgroundColor:'#FFFFFF'}}/>
          {
                this.state.localStream != null ? <LocalVideoView stream={this.state.localStream} muted={this.state.video_muted} id={'localview'} /> : null
          }
        </Drawer>
          
            

          </Dialog>

        </div>
      </MuiThemeProvider>
    );
  }
}
//
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);