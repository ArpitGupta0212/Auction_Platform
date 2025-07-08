const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const itemRoutes = require('./routes/items');
const paymentRoutes = require('./routes/payment');
const setupSockets = require('./sockets/bids');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/auctionDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use('/items', itemRoutes);
app.use('/pay', paymentRoutes);


setupSockets(io);


const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
