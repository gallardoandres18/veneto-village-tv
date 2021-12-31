import React, { useContext, useEffect, useState } from "react";
import { ShiftContext } from "../../context/ShiftContext";
import { Stadium } from "../../types";
import { delay } from "../../utils";
import "./stadiums.scss";

const TIME_CHANGE_STADIUM = 15000;

export const Stadiums = () => {
  const { selectedStadium, setSelectedStadium } = useContext(ShiftContext);
  const [stadiums] = useState<Stadium[]>([
    {
      icon: "icon-football",
      name: "Fútbol",
      type: "FOOTBALL",
    },
    {
      icon: "icon-paddle",
      name: "Paddle",
      type: "PADDLE",
    },
    {
      icon: "icon-tennis",
      name: "Tenis",
      type: "TENNIS",
    },
    {
      icon: "icon-bowling",
      name: "Bochas",
      type: "BOWLING",
    },
  ]);

  useEffect(() => {
    async function changeActiveStadium() {
      await delay(TIME_CHANGE_STADIUM);

      const stadiumActiveIndex = stadiums.findIndex(
        (stadium) => stadium.type === selectedStadium
      );

      setSelectedStadium(
        stadiums[stadiumActiveIndex + 1]?.type || stadiums[0].type
      );
    }

    changeActiveStadium();
  }, [selectedStadium, setSelectedStadium, stadiums]);

  return (
    <section className="stadiums">
      <ul className="stadiums__content">
        {stadiums.map((stadium, index) => (
          <li
            className={`stadium ${
              stadium.type === selectedStadium ? "active" : ""
            } `}
            key={index}
          >
            <i className={stadium.icon}></i>
            {stadium.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
