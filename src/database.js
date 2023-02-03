const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose');
const url =
  'mongodb+srv://AndreiH:andrei@cluster0.hauidre.mongodb.net/?retryWrites=true&w=majority';
async function connect() {
  try {
    await mangoose.connect(url);
    console.log('Mongo connected');
  } catch (err) {
    console.log('Error->', err);
  }
}
connect();
