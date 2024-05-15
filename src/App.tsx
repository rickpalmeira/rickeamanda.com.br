import { useState, useEffect } from "react";

import "./App.css";
import bannerImg from "./assets/banner.png";
import flowerTopLeft from "./assets/flower-top-left.svg";
import flowerTopRight from "./assets/flower-top-right.svg";
import monogram from "./assets/monogram-02.svg";
import dateFlower from "./assets/flower-date.svg";

function App() {
  function Banner() {
    return (
      <header
        style={{ backgroundImage: `url(${bannerImg})` }}
        className="bg-[image:var(--banner)] bg-no-repeat bg-bottom bg-cover h-[50dvh] bg-black"
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
      <h2 className="flex whitespace-nowrap items-center uppercase text-lg tracking-widest font-semibold">
        <span className="border-y-2 px-2 border-[#e2acc8]">
          <span className="text-3xl font-normal">17</span> de Agosto de
          <span className="text-3xl font-normal"> 2024</span>
        </span>
        <span className="h-auto w-14 pt-3 -ml-3 -mr-4 z-10" aria-hidden>
          <img src={dateFlower} />
        </span>
        <span className="border-y-2 px-2 border-[#e2acc8]">
          <span className="text-3xl font-normal">17</span> Horas
        </span>
      </h2>
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
      <div className="flex gap-4 border-y-2 px-4 border-[#e2acc8]">
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
          <span className="text-4xl">{Math.floor((timeDiff / 1000) % 60)}</span>
          <span className="text-[#2f8297] uppercase">segundos</span>
        </div>
      </div>
    );
  }

  // function Parents(props: { parentList: string[] }) {
  //   return (
  //     <section className="grid grid-cols-2 gap-x-8">
  //       {props.parentList.map((parent, index) => (
  //         <div
  //           className={
  //             (index % 2 ? "text-right" : "text-left") + " whitespace-nowrap"
  //           }
  //           key={index}
  //         >
  //           {parent}
  //         </div>
  //       ))}
  //     </section>
  //   );
  // }

  // function Locations() {
  //   const ceremonyLocation = "Paróquia Nossa Senhora de Fátima";
  //   const receptionLocation = "Chácara Paris, Goiânia, Goiás.";

  //   return (
  //     <section className="text-center">
  //       <p className="tracking-wider">
  //         <span className="uppercase">Cerimônia: </span>
  //         <span>{ceremonyLocation}</span>
  //       </p>
  //       <p className="tracking-wider">
  //         <span className="uppercase">Recepção: </span>
  //         <span>{receptionLocation}</span>
  //       </p>
  //     </section>
  //   );
  // }

  // function ButtonList(props: { buttonList: { label: string; ref: string }[] }) {
  //   return (
  //     <section className="flex flex-col items-stretch gap-2">
  //       {buttonList.map((button, index) => (
  //         <a href={button.ref} key={index}>
  //           <button className="px-6 py-1 w-full uppercase tracking-normal text-sm border-[#889973] border-2 text-[#2f8297] rounded-full">
  //             {button.label}
  //           </button>
  //         </a>
  //       ))}
  //     </section>
  //   );
  // }

  return (
    <div className="bg-[#fbfbfb]">
      <Banner />
      <div className="container px-5 pb-12 flex flex-col justify-between h-[50dvh] items-center mx-auto text-[#9f2d61] font-serif tracking-wide">
        <img
          src={monogram}
          className="h-48 -mt-24 z-10"
          alt="Amanda e Rick"
          aria-hidden
        />
        <h1 className="font-cursive whitespace-nowrap text-[#2f8297] text-8xl pr-2">
          Amanda e Rick
        </h1>
        <DateTime />
        <Countdown />
      </div>
    </div>
  );
}

export default App;
