import React from "react";
import Reservations from "../../sections/Reservations";
import Stadiums from "../../sections/Stadiums";
import "./shift.scss";

export const Shift = () => {
  return (
    <section className="shift">
      <section className="shift__content">
        <h1 className="shift__title">Reservas para el día de hoy</h1>
        <section className="shift__sections">
          <Stadiums></Stadiums>
          <Reservations></Reservations>
        </section>
      </section>
    </section>
  );
};
