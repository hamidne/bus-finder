import {checkHasAvailable, sendAvailableNotification} from "./utils.js";

const items = await checkHasAvailable('21310000', '11320000', '2022-09-09T23:00:00');
if (items.length) await sendAvailableNotification(items);
