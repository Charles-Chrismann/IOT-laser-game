// require('dotenv').config()
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

// const db = require("./models");




// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
let kk = 0
// app.get('/game/player', (req, res) => {
app.get('/', (req, res) => {
  console.log("get score")
  res.json({
    killCount: kk
  })
})

app.get('/kill', (req, res) => {
  console.log("new kill")
  a = ++kk
  res.json({
    killCount: a
  })
  io.emit('update', {
    killCount: a
  });
})

app.get('/board', (req, res) => {
  res.sendFile(__dirname + "/public/board.html")
})

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('update', {
      killCount: kk++
    });
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

// // db.sequelize.sync({ alter: true }).then(() => {
//   http.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
// // })

// io.on('connection', (socket) => {
//   console.log("user connected")
//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg);
//   });
// });
