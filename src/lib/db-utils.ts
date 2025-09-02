import { connectDBEnterprise } from "./db";

let isInitialized = false;

export async function ensureDatabaseConnection() {
  if (!isInitialized) {
    await connectDBEnterprise();
    isInitialized = true;
  }
}
