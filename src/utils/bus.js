function getAvailable(origin, destination, date) {
    return fetch(`https://ws.alibaba.ir/api/v2/bus/available?orginCityCode=${origin}&destinationCityCode=${destination}&requestDate=${date}&passengerCount=1`).then(r => r.json());
}

export async function checkHasAvailable(origin, destination, date, [start, end]) {
    const {result: {availableList: items}} = await getAvailable(origin, destination, date);
    return items
        .filter(item => item.availableSeats > 0)
        .filter(item => new Date(item.departureDateTime).getHours() >= start && new Date(item.departureDateTime).getHours() <= end )
}

export function getSeats(id) {
    return fetch(`https://ws.alibaba.ir/api/v1/bus/available/${id}/seats`)
        .then(res => res.json())
        .then(res => res.result)
        .then(res => res.filter(item => item.status === 'Available'))
}