export const TEMP_BASE_URL = "http://localhost:5000";
export const PREFIX = `/api/v1`;
export const RESERVATIONS_URL = `${PREFIX}/reservations`;
export const DISPLAY_BOARD_URL = `${PREFIX}/display-board`;
export const SPECIALISTS_URL = `${PREFIX}/specialists`;

export const INITIAL_SCREEN_MSG = "Welcome!";
export const FETCH_INTERVAL = 3000;
export const FETCH_INTERVAL_FAST = 1000;
export const FETCH_INTERVAL_SLOW = 10000;
export const VISIT_TIME = 20;
export const DISPLAY_BOARD_VISITS = 8;

export enum STATUS {
  ACTIVE = "active",
  PENDING = "pending",
  COMPLETED = "completed",
  CANCELED = "canceled",
}
