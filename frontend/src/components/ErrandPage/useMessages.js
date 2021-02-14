import { useState, useEffect, useCallback, useContext } from 'react';
import { SocketContext } from '../../contexts/SocketContext';
import { UserContext } from '../../contexts/UserContext';

const useMessages = (errand) => {
  const [messages, setMessages] = useState([]);
  const socket = useContext(SocketContext);
  const user = useContext(UserContext);

  const onJoin = useCallback(() => {
    socket.emit('join', errand._id);
  }, [socket, errand]);

  const onSend = useCallback((text) => {
    socket.emit('message', { text, userId: user._id, errandId: errand._id });
  }, [socket, user, errand]);

  useEffect(() => {
    if (socket && errand) {
      onJoin();
    }
  }, [onJoin, socket, errand]);

  useEffect(() => {
    if (socket) {
      socket.on('message', (newMessage) => {
        setMessages(prevState => [...prevState, newMessage]);
      })
    }
  }, [socket, setMessages])

  useEffect(() => {
    if (errand && !messages.length) {
      setMessages(errand.messageThread.messages);
    }
  }, [errand, messages, setMessages]);

  return { messages, onSend };
};

export default useMessages;