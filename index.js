const express = require('express');
const setData = require('./dataManipulation/operations');
const { Delivered, PickUp, Returned, DeliveryException } = require('./db');

const app = express();
const PORT = 3000;
app.use(express.json());

setData();


app.get("/get_card_status", async (req, res) => {
    const cardId = req.body.cardId;
    const currentObjects = [];
    await Delivered.findOne({ cardId }).then((data) => {
        if (data) {
            currentObjects.push(data);
        }
    })

    await PickUp.findOne({ cardId }).then((data) => {
        if (data) {
            currentObjects.push(data);
        }
    })

    await DeliveryException.findOne({ cardId }).then((data) => {
        if (data) {
            currentObjects.push(data);
        }
    })

    await Returned.findOne({ cardId }).then((data) => {
        if (data) {
            currentObjects.push(data);
        }
    })

    // console.log(currentObjects);
    currentObjects.sort((a, b) => {
        let dateA = new Date(a.timeStamp);
        let dateB = new Date(b.timeStamp);
        return dateB - dateA;
    });
    console.log("sorted",currentObjects);

    res.send({
        status: currentObjects[0].comment
    })
})


app.listen(PORT, (req, res) => {
    console.log(`server is running on port ${PORT}`);
})