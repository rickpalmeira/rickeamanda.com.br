import React, { useState, useEffect, Component } from "react";

import "./App.css";
import bannerImg from "./assets/banner.png";
import flowerTopLeft from "./assets/flower-top-left.svg";
import flowerTopRight from "./assets/flower-top-right.svg";
import monogram from "./assets/monogram-02.svg";
import dateFlower from "./assets/flower-date.svg";

class App extends Component {
  render() {
    function Banner() {
      return (
        <header
          style={{ backgroundImage: `url(${bannerImg})` }}
          className="bg-[image:var(--banner)] bg-no-repeat bg-bottom bg-cover h-[40dvh]"
        >
          <div className="absolute max-h-96 overflow-hidden flex justify-between w-dvw">
            <img
              src={flowerTopLeft}
              className="max-w-[50vw] -mt-40 -ml-10"
              aria-hidden
            />
            <img
              src={flowerTopRight}
              className="max-w-[50vw] -mt-24 -mr-5"
              aria-hidden
            />
          </div>
        </header>
      );
    }

    function DateTime() {
      return (
        <a
          href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20240817T200000Z%2F20240818T040000Z&text=Casamento%20Amanda%20e%20Rick&location=Par%C3%B3quia%20Cat%C3%B3lica%20Nossa%20Senhora%20de%20F%C3%A1tima%2C%20Pra%C3%A7a%20Santos%20Dumont%20-%20St.%20Aeroporto%2C%20Goi%C3%A2nia%20-%20GO%2C%2074070-050%2C%20Brasil&details="
          target="_blank"
        >
          <h2 className="flex items-center uppercase text-lg tracking-widest font-semibold">
            <span className="border-y-2 px-2 border-[#e2acc8]">
              <span className="text-3xl font-normal">17</span>
              <span className="text-3xl font-normal sm:hidden">/08/</span>
              <span className="hidden sm:inline"> de Agosto de </span>
              <span className="text-3xl font-normal">2024</span>
            </span>
            <span className="h-auto w-14 pt-3 -ml-3 -mr-4 z-10" aria-hidden>
              <img src={dateFlower} />
            </span>
            <span className="border-y-2 px-2 border-[#e2acc8]">
              <span className="text-3xl font-normal">17</span>
              <span className="text-3xl font-normal sm:hidden">:00</span>
              <span className="hidden sm:inline"> Horas</span>
            </span>
          </h2>
        </a>
      );
    }

    function Countdown() {
      const [currentDate, setTime] = useState(new Date());

      useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
      }, []);

      const weddingDate = new Date("2024-08-17T17:00:00");
      const timeDiff = weddingDate.getTime() - currentDate.getTime();
      return (
        <div className="flex justify-around border-y-2 w-full sm:justify-center sm:gap-12 sm:w-auto sm:px-4 border-[#e2acc8]">
          <div className="flex flex-col items-center">
            <span className="text-4xl">
              {Math.floor(timeDiff / (1000 * 60 * 60 * 24))}
            </span>
            <span className="text-[#2f8297] uppercase">dias</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl">
              {Math.floor((timeDiff / (1000 * 60 * 60)) % 24)}
            </span>
            <span className="text-[#2f8297] uppercase">horas</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl">
              {Math.floor((timeDiff / (1000 * 60)) % 60)}
            </span>
            <span className="text-[#2f8297] uppercase">minutos</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl">
              {Math.floor((timeDiff / 1000) % 60)}
            </span>
            <span className="text-[#2f8297] uppercase">segundos</span>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-[#fbfbfb] min-w-[294px]">
        <Banner />
        <div className="container px-6 pb-12 flex flex-col justify-between h-[60dvh] items-center mx-auto text-[#9f2d61] font-serif tracking-wide">
          <img
            src={monogram}
            className="h-48 -mt-24 z-10"
            alt="Amanda e Rick"
            aria-hidden
          />
          <DateTime />
          <Countdown />
        </div>
      </div>
    );
  }
}

export default App;
