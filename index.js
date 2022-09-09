import cron from "node-cron";
import {checkHasAvailable, sendAvailableNotification} from "./utils.js";

cron.schedule('*/2 * * * *', async () => {
    const items = await checkHasAvailable('21310000', '11320000', '2022-09-09T22:00:00', [13, 24]);
    if (items.length) await sendAvailableNotification(items);
});
