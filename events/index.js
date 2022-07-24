//TODO 1
const { EventEmitter } = require('events');

const brithdayEventListener = (name) => {
    console.log(`Happy brithday ${name}!`);
}

//TODO 2
const myEmitter = new EventEmitter();

//TODO 3
myEmitter.on('brithday', brithdayEventListener);

//TODO 4
myEmitter.emit('brithday','Ilham');
