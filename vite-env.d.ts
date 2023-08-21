/// <reference types="vite/client" />

interface Visit {
  cabinetNumber: Number;
  reservationCode: string;
  status: Status;
  visibleCode: string;
  visitTime: Date;
  priority?: boolean;
  _id: string;
}

interface Specialist {
  name: string;
  hasADayOff: boolean;
  workingHours: {
    start: number;
    end: number;
    lunchBreakStart: number;
    lunchBreakEnd: number;
  };
  isCurrentlyWorking: boolean;
}

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
};
