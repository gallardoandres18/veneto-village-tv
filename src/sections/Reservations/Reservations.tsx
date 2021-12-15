import React, { useContext, useEffect, useState } from "react";
import { ShiftContext } from "../../context/ShiftContext";
import { Reservation } from "../../types";
import "./reservations.scss";
import { fetchReservations } from "./services";

export const Reservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const { selectedStadium } = useContext(ShiftContext);

  useEffect(() => {
    async function fetchData() {
      const { data } = await fetchReservations(selectedStadium);
      setReservations(data);
    }

    fetchData();
  }, [selectedStadium]);

  return (
    <section className="reservations">
      <section className="reservations__content">
        {reservations.length === 0 ? (
          <p className="reservations__empty">Sin reservas</p>
        ) : (
          <>
            <div className="reservations__header">
              <p>Propietario</p>
              <p className="center">Cancha</p>
              <p className="center">Turno</p>
            </div>
            <ul className="reservations__list">
              {reservations.map((reservation, index) => (
                <li className="reservations__item" key={index}>
                  <p>{reservation.user.name || "Inquilino"}</p>
                  <p className="center">{reservation.number}</p>
                  <p className="center">{reservation.hour}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </section>
  );
};
