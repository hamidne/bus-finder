import * as dotenv from 'dotenv'
dotenv.config()

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

export async function sendAvailableNotification(items) {
    const message = items.map(item => `${item.companyName}\n${item.orginCityName} => ${item.destinationCityName}\nساعت: ${item.departureTime}\nتعداد صندلی: ${item.availableSeats}`).join('\n\n')
    return sendNotification(message, [process.env.NOTIFICATION_NUMBER])
}
