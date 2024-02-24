const { default: mongoose } = require("mongoose");
require('dotenv').config()
const PASSWORD = encodeURIComponent(process.env.PASSWORD);
const URI = `mongodb+srv://jagi_song:${PASSWORD}@cluster0.qcdwway.mongodb.net/zywa`;
mongoose.connect(URI).then(console.log("connected"));

const PickupSchema = new mongoose.Schema({
    id: String,
    cardId: String,
    userContact: Number,
    timeStamp: String,
    comment: {
        type: String,
        default: 'Card Picked'
    }

})

const DeliveredSchema = new mongoose.Schema({
    id: String,
    cardId: String,
    userContact: Number,
    timeStamp: String,
    comment: {
        type: String,
        default: "Delivered"
    }
})

const ReturnedSchema = new mongoose.Schema({
    id: String,
    cardId: String,
    userContact: Number,
    timeStamp: String,
    comment: {
        type: String,
        default: 'Card Returned'
    }
})

const DeliveryExceptionSchema = new mongoose.Schema({
    id: String,
    cardId: String,
    userContact: Number,
    timeStamp: String,
    comment: String
})

const PickUp = mongoose.model('PickUp', PickupSchema);
const Delivered = mongoose.model('Delivered', DeliveredSchema);
const Returned = mongoose.model('Returned', ReturnedSchema);
const DeliveryException = mongoose.model('DeliveryException', DeliveryExceptionSchema);


module.exports = {
    PickUp,
    Delivered,
    Returned,
    DeliveryException
}

