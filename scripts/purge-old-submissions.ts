import { purgeExpiredSubmissions } from "../lib/db";

const deleted = purgeExpiredSubmissions();
console.log(`Purged ${deleted} submission(s) past the retention period.`);
