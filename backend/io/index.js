
const mongoose = require("mongoose");
const mongoose = require("mongoose");
const MessageThread = mongoose.model("messageThreads");

const review = new Schema({
  postTime: Date,
  rating: Number,
  body: String
});

mongoose.model("reviews", review);

module.exports = server => {
  const io = socketIo(server);

  io.on("connection", socket => {
    initializeSocket(socket);
  });
}

const initializeSocket = socket => {
  socket.on('join', (data) => {
    const { errandId } = data;
    socket.join(errandId);

    // send message data
    const thread = await MessageThread.findOne({ errand: errandId });

    socket.emit('get thread', thread);
  })

  socket.on('message', (data) => {
    const { text, errandId } = data;
    socket.to(errandId).emit('message', text);
  })
}