const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://<mongodb_username>:<cluster_password>@cluster0.nxcni.mongodb.net/toDo?retryWrites=true&w=majority', { useNewUrlParser: true });
module.exports = mongoose.connection;