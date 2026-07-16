class pConn {

  peer = null;
  conn = null;

  static initConnect = () => {
    this.peer = new Peer({
      "debug": "2", config: {
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" }
        ]
      }
    });
    console.log("all set up!");

    this.peer.on("open", function (id) {
      console.log("My peer ID is: " + id);
    });

    // Connect to a remote peer
    this.conn = this.peer.connect(null);
    console.log("fr all set up this time");
  }


  static connect = (code) => {
    let theCode = code.replace(" ", '');
    this.conn = this.peer.connect(theCode, { "serialization": "binary-utf8" });
    console.log(theCode);

    // conn.on("data", function (data) {
    //   console.log("Received", data);
    //   document.getElementById("m").innerHTML = data;
    // });

    this.openSmth();
  }

  static openSmth = () => {
    console.log(this.conn);
    this.conn.on("open", (id) => {
      console.log("serving");
      this.conn.send("Hello, peer!");

      if (typeof connected === 'function') {
        console.log(connected);
        connected();
      } else {
        console.log("Doesn't exist");
      }


      this.conn.on("data", (data) => {
        console.log("Received", data);
        if (typeof parseMessage !== undefined) {
          parseMessage(data);
        } else {
          console.log("Doesn't exist");
        }
        // document.getElementById("m").innerHTML = data;
      });

    });
  }

  static sendMsg = (message) => {
    console.log("sending " + message);
    this.conn.send(message);
  }
}