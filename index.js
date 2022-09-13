import cron from "node-cron";
import {checkHasAvailable, sendAvailableNotification} from "./utils.js";

cron.schedule('*/5 * * * *', async () => {
    const items = await checkHasAvailable(11320000, 21310000, '2022-09-14', [18, 24]);
    console.log(`[${new Date().toJSON()}]: Finds Items =>`, items.length)
    if (items.length) await sendAvailableNotification(items);
});
