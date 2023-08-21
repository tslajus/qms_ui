import { serverHealth } from "@/api";

async function wakeUpServer() {
  try {
    await serverHealth();
    return true;
  } catch (error) {
    console.error("Failed to wake up server:", error);
    return false;
  }
}

export default wakeUpServer;
