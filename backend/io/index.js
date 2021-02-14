const socketIo = require("socket.io");
const mongoose = require("mongoose");
const Message = mongoose.model("messages");
const Errand = mongoose.model("errands");

module.exports = server => {
  const io = socketIo(server);

  io.on("connection", socket => {
    console.log('connected');

    initializeSocket(socket);
  });
}

const initializeSocket = socket => {
  socket.on('join', (data) => {
    const { errandId } = data;
    socket.join(errandId);
  })

  socket.on('message', async (data) => {
    const { text, errandId, userId } = data;

    const newMessage = await new Message({ text, author: userId, time: new Date() }).save();
    const errand = await Errand.findById(errandId);
    errand.messageThread.messages.push(newMessage._id);
    await errand.messageThread.save();

    socket.to(errandId).emit('message', newMessage);
    socket.emit('message', newMessage);
  })
}