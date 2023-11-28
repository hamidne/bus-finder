// import cron from "node-cron";
import {checkHasAvailable, getSeats} from "./utils/index.js";

const items = await checkHasAvailable(11320000, 21310000, '2023-11-28', [10, 16]);
const lastItem = items.at(-1);

const seats = await getSeats(lastItem.proposalId)
console.log(seats)

// cron.schedule('*/5 * * * *', async () => {
//
// });
