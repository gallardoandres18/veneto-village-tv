export type StadiumsType = "FOOTBALL" | "PADDLE" | "BOWLING" | "TENNIS";

export interface Stadium {
  name: string;
  type: StadiumsType;
  icon: string;
}

export interface Reservation {
  user: User;
  number: number;
  hour: string;
}

interface User {
  _id: string;
  apartment: string;
  floor: number;
  pin: number;
  tower: number;
  wing: number;
  identityNumber: string;
  name: string;
  owner: string;
}
