import {checkHasAvailable, sendNotification} from "./utils.js";

await checkHasAvailable('2022-09-09T22:00:00');
const res = await sendNotification('asdasd', ['9136865204']);
