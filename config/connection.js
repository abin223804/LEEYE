const mongoose=require('mongoose');

const DB=process.env.DBURL;
mongoose.set('strictQuery', true);
const connect = () => {
    mongoose.connect(DB)
        .then(() => {
            console.log('Database is connected');
        })
        .catch((error) => {
            console.error('Error connecting to database:', error);
        });
};


module.exports = {connect}