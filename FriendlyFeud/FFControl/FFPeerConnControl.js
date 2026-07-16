class connControl {


    hereID;
    peer;
    conn;
    board;
    questions;


    static initialConn = () => {

        this.conn = [];
        this.hereID = this.makeid(8);

        this.board = -1;
        this.questions = -1;



        this.peer = new Peer(this.hereID, {
            "debug": "2", "debug": "2", config: {
                iceServers: [
                    { urls: "stun:stun.l.google.com:19302" }
                ]
            }
        });

        this.peer.on("open", function (id) {
            console.log("My peer ID is: " + id);
        });

        this.peer.on('connection', (dataConnection) => {
            console.log(dataConnection.peer);
            console.log("we have contact");
            // conn = peer.connect(dataConnection.peer, { "serialization": "binary-utf8" });
            this.conn.push(dataConnection);

            console.log('peer connected');
            dataConnection.on('open', () => {
                console.log('conn open');
                dataConnection.send("Ready Up");
            });
            dataConnection.on('data', (data) => {
                console.log(dataConnection.peer, "says", data);

                if (!this.reorderParse(data, dataConnection) && !this.ping(data, dataConnection)
                    && typeof parseMessage !== undefined) {

                    parseMessage(data, this.conn.indexOf(dataConnection));
                }

                // if (typeof parseMessage !== undefined) {

                // } else {
                //     console.log("Doesn't exist");
                // }
            });


        });

        showCode(this.hereID.toString());
    }


    static ping = (message, peer) => {

        if (message == "ping") {
            peer.send("pong");
            return (true);
        }
        return (false);
    }

    static reorderParse = (message, peer) => {
        console.log(message);
        switch (message) {
            case "QuestionHolder":
                console.log(this.conn);
                console.log(peer);
                this.questions = this.conn.indexOf(peer);
                break;
            case "board":
                this.board = this.conn.indexOf(peer);
                break;

            default:
                return (false);
                break;
        }
        return (true);
    }

    static sendMessageAll = (message) => {
        console.log("attempting to send");

        this.conn.forEach(element => {
            element.send(message);
        });
    }

    static sendMessage = (num, message) => {
        console.log("attempting to send");

        if (num < this.conn.length) {
            this.conn[num].send(message);
        }
    }

    static sendMessageBoard(message) {
        if (this.board >= 0) {
            this.sendMessage(this.board, message);
        } else {
            console.log("nice try lol, no board here");
        }

    }

    static sendMessageQuestion(message) {
        if (this.questions >= 0) {
            this.sendMessage(this.questions, message);
        } else {
            console.log("there aren't the questions you're looking for")
        }


    }

    static makeid = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}