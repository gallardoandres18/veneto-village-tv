import axios from "axios";
import { Reservation, StadiumsType } from "../../types";

export const fetchReservations = (type: StadiumsType) => {
  console.log(process.env.REACT_APP_API_URL);

  return axios.get<Reservation[]>(
    `${process.env.REACT_APP_API_URL}/reservation/by-type/?type=${type}&limit=8`
  );
};
