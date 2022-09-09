import * as dotenv from 'dotenv'
dotenv.config()

async function getAvailable(origin, destination, date) {
    return fetch(`https://ws.alibaba.ir/api/v2/bus/available?orginCityCode=${origin}&destinationCityCode=${destination}&requestDate=${date}&passengerCount=1`).then(r => r.json());
}

export async function checkHasAvailable(date) {
    const {result: {availableList: items}} = await getAvailable('21310000', '11320000', date.replace(/T.+/, ''));
    return items
        .filter(item => item.availableSeats > 0)
        .filter(item => +new Date(item.departureDateTime) >= +new Date(date))
}

export function sendNotification(message, phone) {
    return fetch(
        'http://ippanel.com/api/select',
        {
            method: 'POST',
            body: JSON.stringify({
                "op": "send",
                "uname": process.env.SMS_USERNAME,
                "pass": process.env.SMS_PASSWORD,
                "message": message,
                "from": process.env.SMS_NUMBER,
                "to": phone,
            }),
        })
        .then(r => r.json());
}
