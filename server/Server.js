import express from 'express';
var app = express();
import fs from 'fs';
import ws from 'ws';
import http from 'http';
import https from 'https';
const multer = require('multer');
const upload = multer();
var cors = require('cors')
const request = require("request");


var app1 = express();
app1.use(express.static(__dirname));
app1.use(cors());
app1.post('/upload1', upload.any(), (req, res) => {
    //console.log(app1._router.stack);
    console.log('POST /upload/');
    console.log('Files: ', req.files);
    fs.writeFile("video/stream1.webm", req.files[0].buffer, (err) => {
        if (err) {
            console.log('Error: ', err);
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086'); 
            res.status(500).send('An error occurred: ' + err.message);
        } else {
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086');
            res.status(200).send('ok');
        }
    });
});

app1.post('/upload2', upload.any(), (req, res) => {
    console.log(app1._router.stack);
    console.log('POST /upload/');
    console.log('Files: ', req.files);
    fs.writeFile("video/stream2.webm", req.files[0].buffer, (err) => {
        if (err) {
            console.log('Error: ', err);
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086'); 
            res.status(500).send('An error occurred: ' + err.message);
        } else {
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086');
            res.status(200).send('ok');
        }
    });
});

app1.post('/upload3', upload.any(), (req, res) => {
    console.log(app1._router.stack);
    console.log('POST /upload/');
    console.log('Files: ', req.files);
    fs.writeFile("video/stream3.webm", req.files[0].buffer, (err) => {
        if (err) {
            console.log('Error: ', err);
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086'); 
            res.status(500).send('An error occurred: ' + err.message);
        } else {
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086');
            res.status(200).send('ok');
        }
    });
});

app1.get('/setUpload',(req,res) => {
    //req.query.num
    console.log('YES\n\n\n')
    request('http://localhost:5000/render?id='+req.query.num, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});
});

app1.post('/upload4', upload.any(), (req, res) => {
    console.log(app1._router.stack);
    console.log('POST /upload/');
    console.log('Files: ', req.files);
    fs.writeFile("video/stream4.webm", req.files[0].buffer, (err) => {
        if (err) {
            console.log('Error: ', err);
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086'); 
            res.status(500).send('An error occurred: ' + err.message);
        } else {
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086');
            res.status(200).send('ok');
        }
    });
});

app1.post('/upload5', upload.any(), (req, res) => {
    console.log(app1._router.stack);
    console.log('POST /upload/');
    console.log('Files: ', req.files);
    fs.writeFile("video/stream5.webm", req.files[0].buffer, (err) => {
        if (err) {
            console.log('Error: ', err);
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086'); 
            res.status(500).send('An error occurred: ' + err.message);
        } else {
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086');
            res.status(200).send('ok');
        }
    });
});

app1.post('/upload6', upload.any(), (req, res) => {
    console.log(app1._router.stack);
    console.log('POST /upload/');
    console.log('Files: ', req.files);
    fs.writeFile("video/stream6.webm", req.files[0].buffer, (err) => {
        if (err) {
            console.log('Error: ', err);
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086'); 
            res.status(500).send('An error occurred: ' + err.message);
        } else {
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086');
            res.status(200).send('ok');
        }
    });
});

app1.post('/upload7', upload.any(), (req, res) => {
    console.log(app1._router.stack);
    console.log('POST /upload/');
    console.log('Files: ', req.files);
    fs.writeFile("video/stream7.webm", req.files[0].buffer, (err) => {
        if (err) {
            console.log('Error: ', err);
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086'); 
            res.status(500).send('An error occurred: ' + err.message);
        } else {
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086');
            res.status(200).send('ok');
        }
    });
});

app1.post('/upload8', upload.any(), (req, res) => {
    //console.log(app1._router.stack);
    console.log('POST /upload/');
    console.log('Files: ', req.files);
    fs.writeFile("video/stream8.webm", req.files[0].buffer, (err) => {
        if (err) {
            console.log('Error: ', err);
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086'); 
            res.status(500).send('An error occurred: ' + err.message);
        } else {
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086');
            res.status(200).send('ok');
        }
    });
});

app1.post('/upload9', upload.any(), (req, res) => {
    //console.log(app1._router.stack);
    console.log('POST /upload/');
    console.log('Files: ', req.files);
    fs.writeFile("video/stream9.webm", req.files[0].buffer, (err) => {
        if (err) {
            console.log('Error: ', err);
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086'); 
            res.status(500).send('An error occurred: ' + err.message);
        } else {
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086');
            res.status(200).send('ok');
        }
    });
});

app1.post('/upload0', upload.any(), (req, res) => {
    //console.log(app1._router.stack);
    console.log('POST /upload/');
    console.log('Files: ', req.files);
    fs.writeFile("video/streamer.webm", req.files[0].buffer, (err) => {
        if (err) {
            console.log('Error: ', err);
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086'); 
            res.status(500).send('An error occurred: ' + err.message);
        } else {
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086');
            res.status(200).send('ok');
        }
    });
});

app1.get('/get', upload.any(), (req, res) => {
    console.log(app1._router.stack);
    console.log('POST /upload/');
    console.log('Files: ', req.files);
    fs.writeFile(req.files[0].originalname, req.files[0].buffer, (err) => {
        if (err) {
            console.log('Error: ', err);
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086');
            res.status(500).send('An error occurred: ' + err.message);
        } else {
            //res.header('Access-Control-Allow-Origin', 'https://192.168.1.176:8086');
            res.status(200).send('ok');
        }
    });
});

var options1 = {
            key: fs.readFileSync('certs/key.pem'),
            cert: fs.readFileSync('certs/cert.pem')
        };

const server = https.createServer(options1, app1).listen(8081, () => {
  console.log('server running at ' + 8081)
});
//app1.listen(process.env.PORT || 8081);

export default class CallHandler {

    constructor() {
        this.wss = null;
        this.ws = null;
        this.clients = new Set();
        this.server = null;
        this.ssl_server = null;
        this.sessions = [];
    }

    init() {
        var ws_server_port = (process.env.PORT || 4442);
        this.server = http.createServer(app).listen(ws_server_port, () => {
            console.log("228 Start WS Server: bind => ws://0.0.0.0:"+ws_server_port);
        });

        this.ws = new ws.Server({ server: this.server });
        this.ws.on('connection', this.onConnection);


        var options = {
            key: fs.readFileSync('certs/key.pem'),
            cert: fs.readFileSync('certs/cert.pem')
        };

        var wss_server_port = (process.env.PORT + 1 || 4443);
        this.ssl_server = https.createServer(options, app).listen(wss_server_port, () => {
            console.log("Start WSS Server: bind => wss://0.0.0.0:"+wss_server_port);
        });

        this.wss = new ws.Server({ server: this.ssl_server });
        this.wss.on('connection', this.onConnection);
    }

    updatePeers = (si) => {
        var peers = [];

        this.clients.forEach(function (client) {
            var peer = {};
            if (client.hasOwnProperty('id')) {
                peer.id = client.id;
            }
            if (client.hasOwnProperty('name')) {
                peer.name = client.name;
            }
            if (client.hasOwnProperty('user_agent')) {
                peer.user_agent = client.user_agent;
            }
            if (client.hasOwnProperty('session_id')) {
                peer.session_id = client.session_id;
            }
            peers.push(peer);
        });

        var msg = {
            type: "peers",
            data: {
                to: si,
                from: "server",
                peers: peers,
            },

        };

        this.clients.forEach(function (client) {
            client.send(JSON.stringify(msg));
        });
    }

    onClose = (client_self, data) => {
        console.log('close');
        var session_id = client_self.session_id;
        //remove old session_id
        if (session_id !== undefined) {
            for (let i = 0; i < this.sessions.length; i++) {
                let item = this.sessions[i];
                if (item.id == session_id) {
                    this.sessions.splice(i, 1);
                    break;
                }
            }
        }
        var msg = {
            type: "leave",
            data: client_self.id,
        };

        this.clients.forEach(function (client) {
            if (client != client_self)
                client.send(JSON.stringify(msg));
        });

        this.updatePeers();
    }

    onConnection = (client_self, socket) => {
        console.log('connection');
        this.clients.add(client_self);

        client_self.on("close", (data) => {
            this.clients.delete(client_self);
            this.onClose(client_self, data)
        });

        client_self.on("message", message => {
            try {
                message = JSON.parse(message);
                console.log("message.type:: " + message.type + ", \nbody: " + JSON.stringify(message));
            } catch (e) {
                console.log(e.message);
            }

            switch (message.type) {
                case 'new':
                    {
                        client_self.id = "" + message.id;
                        client_self.name = message.name;
                        //client_self.user_agent = message.user_agent;
                        this.updatePeers(client_self.id);
                    }
                    break;
                case 'bye':
                    {
                        /*var session = null;
                        this.sessions.forEach((sess) => {
                            if (sess.id == message.session_id) {
                                session = sess;
                            }
                        });*/

                        /*if (!session) {
                            var msg = {
                                type: "error",
                                data: {
                                    error: "Invalid session " + message.session_id, 
                                },
                            };
                            client_self.send(JSON.stringify(msg));
                            return;
                        }*/

                        this.clients.forEach((client) => {
                            console.log("ATTENTION!!!!!!!!!!!!!!!!");
                            console.log(client.session_id);
                            console.log(message.session_id);
                           // if (client.session_id === message.session_id) {
                                 if (1) {
                                try {

                                    var msg = {
                                        type: "bye",
                                        data: {
                                            session_id: message.to,
                                            from: "server",
                                            to: client.id,
                                        },
                                    };
                                    client.send(JSON.stringify(msg));
                                } catch (e) {
                                    console.log("onUserJoin:" + e.message);
                                }
                            }
                        });
                    }
                    break;
                case 'time_remaining':
                {
                    this.clients.forEach((client) => {
                            if (client.session_id === message.session_id) {
                                try {

                                    console.log('TIME!!!!!!!!')
                                    var msg = {
                                        type: "time_remaining",
                                        data: {
                                            time: message.time*60000,
                                            to: client.id,
                                            session_id: message.session_id,
                                            from: "server",
                                        },
                                    };
                                    client.send(JSON.stringify(msg));
                                } catch (e) {
                                    console.log("Bad" + e.message);
                                }
                            }
                        });
                    
                }
                break;
                case 'enable_audio_all':
                {
                    this.clients.forEach((client) => {
                            if (client.session_id === message.session_id) {
                                try {

                                    console.log('AUDIO!!!!!!!!')
                                    var msg = {
                                        type: "enable_audio",
                                        data: {
                                            to: client.id,
                                            enable: message.bool,
                                            session_id: message.session_id,
                                            from: "server",
                                        },
                                    };
                                    client.send(JSON.stringify(msg));
                                } catch (e) {
                                    console.log("Bad" + e.message);
                                }
                            }
                        });
                    
                }
                case 'enable_audio':
                {
                    this.clients.forEach((client) => {
                        console.log(client.session_id);
                            if (client.session_id === message.session_id) {
                                try {

                                    console.log('AUDIO!!!!!!!!')
                                    var msg = {
                                        type: "enable_audio",
                                        data: {
                                            to: message.to,
                                            enable: message.bool,
                                            session_id: message.session_id,
                                            from: "server",
                                        },
                                    };
                                    client.send(JSON.stringify(msg));
                                } catch (e) {
                                    console.log("Bad" + e.message);
                                }
                            }
                        });
                }
                break;
                case "offer":
                    {
                        
                        var peer = null;
                        this.clients.forEach(function (client) {
                            if (client.hasOwnProperty('id') && client.id === "" + message.to) {
                                peer = client;
                            }
                        });
                        console.log("ATTENTION 1");
                        //console.log(peer.id);
                        if (peer != null) {

                            msg = {
                                type: "offer",
                                data: {
                                    to: peer.id,
                                    from: client_self.id,
                                    media: message.media,
                                    session_id: message.session_id,
                                    description: message.description,
                                }
                            }
                            peer.send(JSON.stringify(msg));
                            
                            peer.session_id = message.session_id;
                            client_self.session_id = message.session_id;

                            let session = {
                                id: message.session_id,
                                from: client_self.id,
                                to: peer.id,
                            };
                            this.sessions.push(session);
                        }

                        break;
                    }
                case 'answer':
                    {
                        console.log("ATTENTION 1");
                        console.log(message.to);
                        var msg = {
                            type: "answer",
                            data: {
                                from: "server",
                                to: message.to,
                                description: message.description,
                            }
                        };

                        this.clients.forEach(function (client) {
                            if (client.id === "" + message.to && client.session_id === message.session_id) {
                                try {
                                    client.send(JSON.stringify(msg));
                                } catch (e) {
                                    console.log("onUserJoin:" + e.message);
                                }
                            }
                        });
                    }
                    break;
                case 'candidate':
                    {
                        console.log("ATTENTION 2");
                        console.log(message.to);
                        var msg = {
                            type: "candidate",
                            data: {
                                from: 'server',
                                to: message.to,
                                candidate: message.candidate,
                            }
                        };
                        
                        this.clients.forEach(function (client) {
                            if (client.id === "" + message.to && client.session_id === message.session_id) {
                                try {
                                    client.send(JSON.stringify(msg));
                                } catch (e) {
                                    console.log("onUserJoin:" + e.message);
                                }
                            }
                        });
                    }
                    break;
                case 'keepalive':
                    client_self.send(JSON.stringify({type:'keepalive', data:{}}));
                break;
                default:
                    console.log("Unhandled message: " + message.type);
            }
        });
    }
}

let callHandler = new CallHandler();
callHandler.init();