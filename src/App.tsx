import "./App.css";
import banner from "./assets/banner.png";
import monogram from "./assets/monogram-02.svg";
import dateFlower from "./assets/flower-date.svg";
import flowerTopLeft from "./assets/flower-top-left.svg";
import flowerTopRight from "./assets/flower-top-right.svg";

function App() {
  const cssVars = {
    "--banner": `url(${banner})`,
  };

  const parents = [
    "Raimundo Nonato da Silva",
    "Nicolau Palmeira",
    "Cláudia Fernandes de Melo Silva",
    "Teresa Rodrigues Palmeira",
  ];

  const buttonList = [
    { label: "Local da Cerimônia", ref: "#" },
    { label: "Local da Recepção", ref: "#" },
    { label: "Sugestões de Presentes", ref: "#" },
    { label: "Confirmação de Presença", ref: "#" },
    { label: "Livro de Recados", ref: "#" },
  ];

  const ceremonyLocation = "Paróquia Nossa Senhora de Fátima";
  const receptionLocation = "Chácara Paris, Goiânia, Goiás.";

  return (
    <>
      <div
        style={cssVars}
        className="bg-[image:var(--banner)] bg-no-repeat bg-top-m-100 bg-contain bg-[#fbfbfb]"
      >
        <div className="absolute min-w-128 max-h-96 overflow-hidden flex justify-between w-full">
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
        <div className="container flex flex-col justify-end items-center min-w-128 min-h-screen mx-auto text-[#9f2d61] font-serif tracking-wide">
          <img
            src={monogram}
            className="h-48 mb-4 z-10"
            alt="Amanda e Rick"
            aria-hidden
          />
          <div className="grid grid-cols-2 gap-x-8">
            {parents.map((parent, index) => (
              <div
                className={
                  (index % 2 ? "text-right" : "text-left") +
                  " whitespace-nowrap"
                }
                key={index}
              >
                {parent}
              </div>
            ))}
          </div>
          <h1 className="font-cursive text-[#2f8297] text-8xl pr-2 my-4">
            Amanda e Rick
          </h1>
          <p className="uppercase tracking-widest">
            Convidam para seu casamento
          </p>
          <h2 className="flex items-center uppercase text-xl tracking-widest font-semibold my-4">
            <span className="border-y-2 px-2 border-[#e2acc8]">
              <span className="text-4xl font-normal">17</span> de Agosto de
              <span className="text-4xl font-normal"> 2024</span>
            </span>
            <span className="h-auto w-14 pt-1 -ml-3 -mr-4 z-10" aria-hidden>
              <img src={dateFlower} />
            </span>
            <span className="border-y-2 px-2 border-[#e2acc8]">
              <span className="text-4xl font-normal">17</span> Horas
            </span>
          </h2>
          <p className="tracking-wider">
            <span className="uppercase">Cerimônia: </span>
            <span>{ceremonyLocation}</span>
          </p>
          <p className="tracking-wider">
            <span className="uppercase">Recepção: </span>
            <span>{receptionLocation}</span>
          </p>
          <div className="flex flex-col items-stretch gap-2 my-4">
            {buttonList.map((button, index) => (
              <a href={button.ref} key={index}>
                <button className="px-6 py-1 w-full uppercase tracking-normal text-sm border-[#889973] border-2 text-[#2f8297] rounded-full">
                  {button.label}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
