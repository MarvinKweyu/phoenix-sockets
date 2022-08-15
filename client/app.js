const { Socket } = require('phoenix-channels')

const cluster = require("cluster")
let { channel } = require('diagnostics_channel')

// duplicate multiple connections
if (cluster.isMaster) {
    for (let i = 1; i <= 100; i++) {
        cluster.fork()
    }
} else {


    let socket = new Socket("ws://localhost:4000/socket")

    socket.connect()

    //  connect to a channel

    channel = socket.channel("sales:lobby")

    channel.join()

    channel.on("new_sale", sale => {
        console.table(sale)
        channel.push("registered", {client_id: process.pid})
    })
}