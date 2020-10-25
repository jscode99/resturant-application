const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://resturant-user:root@cluster0.lnb07.mongodb.net/<dbname>?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology:true
            }
        );
    console.log('Connected to database')
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = connectDB;