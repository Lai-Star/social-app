let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let stream = require('./ws/stream');
let path = require('path');
let favicon = require('serve-favicon');

// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// app.use(cors());

app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

//MongoDB connection
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => {
//     console.log(err);
//   });

// Models
// const User = require('./models/User');
// const Post = require('./models/Post');
// const Comment = require('./models/Comment');

//Routes
// app.use('/users', require('./routes/users'));
// app.use('/posts', require('./routes/posts'));
// app.use('/comments', require('./routes/comments'));

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.of('/stream').on('connection', stream);

server.listen(5000);
