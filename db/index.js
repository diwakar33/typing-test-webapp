const mongoose = require('mongoose');

const Connection = async (username, password) => {
    // const URL = `mongodb://localhost:27017/Swiftkeynew`;
    const URL = `mongodb+srv://${username}:${password}@cluster0.j7tl5vl.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
};


module.exports = Connection;





