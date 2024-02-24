const csv = require('csv-parser');
const fs = require('fs');
const { PickUp, Delivered, DeliveryException, Returned } = require('../db');


function formatDate(dateString) {
    let date;
    if (dateString.includes('T')) {
        date = new Date(dateString);
    } else if (dateString.includes(':')) {
        let parts = dateString.split(' ');
        let datePart = parts[0];
        let timePart = parts[1];
        let dateParts = datePart.split('-');
        let day = parseInt(dateParts[0]);
        let month = parseInt(dateParts[1]) - 1;
        let year = parseInt(dateParts[2]);
        let timeParts = timePart.match(/(\d+):(\d+)(\w+)/);
        let hours = parseInt(timeParts[1]);
        let minutes = parseInt(timeParts[2]);
        if (timeParts[3].toLowerCase() === 'pm' && hours < 12) {
            hours += 12;
        } else if (timeParts[3].toLowerCase() === 'am' && hours === 12) {
            hours = 0;
        }
        date = new Date(year, month, day, hours, minutes);
    } else {
        let parts = dateString.split('-');
        let day = parseInt(parts[0]);
        let month = parseInt(parts[1]) - 1;
        let year = parseInt(parts[2]);
        date = new Date(year, month, day);
    }
    return date.toISOString().slice(0, 19).replace('T', ' '); // Format: YYYY-MM-DD HH:mm:ss
}

const setData = () => {

    fs.createReadStream('data/Sample_Card_Status_Info _Delivered.csv')
        .pipe(csv({
            trim: true,
            quote: '"'
        }))
        .on('data', async (data) => {
            // console.log(data);
            const cardData = {
                id: data['ID '],
                cardId: data['Card ID'],
                userContact: parseInt(data['User contact'].replace(/"/g, '')),
                timeStamp: formatDate(data.Timestamp),
                comment: data.comment
            }
            const check = await Delivered.findOne({
                id: cardData.id
            })
            if (check === null) {
                Delivered.create(cardData);
            }
        })
        .on('end', () => {
            // console.log("Delivered");

        })

    fs.createReadStream('data/Sample_Card_Status_Info _Delivery_exceptions.csv')
        .pipe(csv({
            trim: true,
            quote: '"'
        }))
        .on('data', async (data) => {
            // console.log(data);
            const cardData = {
                id: data['ID '],
                cardId: data['Card ID'],
                userContact: parseInt(data['User contact'].replace(/"/g, '')),
                timeStamp: formatDate(data.Timestamp),
                comment: data.comment
            }
            const check = await DeliveryException.findOne({
                id: cardData.id
            })
            if (check === null) {
                DeliveryException.create(cardData);
            }
        })
        .on('end', () => {
            // console.log("Delivered");

        })
    

    fs.createReadStream('data/Sample_Card_Status_Info _Pickup.csv')
        .pipe(csv({
            trim: true,
            quote: '"'
        }))
        .on('data', async (data) => {
            // console.log(data);
            const cardData = {
                id: data['ID '],
                cardId: data['Card ID'],
                userContact: parseInt(data['User Mobile'].replace(/"/g, '')),
                timeStamp: formatDate(data.Timestamp),
                comment: data.comment
            }
            const check = await PickUp.findOne({
                id: cardData.id
            })
            if (check === null) {
                PickUp.create(cardData);
            }
        })
        .on('end', () => {
            // console.log("Delivered");

        })

    fs.createReadStream('data/Sample_Card_Status_Info _Returned.csv')
        .pipe(csv({
            trim: true,
            quote: '"'
        }))
        .on('data', async (data) => {
            // console.log(data);
            const cardData = {
                id: data['ID '],
                cardId: data['Card ID'],
                userContact: parseInt(data['User contact'].replace(/"/g, '')),
                timeStamp: formatDate(data.Timestamp),
                comment: data.comment
            }
            const check = await Returned.findOne({
                id: cardData.id
            })
            if (check === null) {
                Returned.create(cardData);
            }
        })
        .on('end', () => {
            // console.log("Delivered");

        })


   
}

module.exports = setData;