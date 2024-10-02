import naos from "../imagess/naos.png";
import bioderma from "../imagess/bioderma.png";
import esthe from "../imagess/esthe.png";
import etat from "../imagess/etat.png";
import search from "../imagess/search.png";
import like from "../imagess/like.png";
import korzin from "../imagess/korzin.png";
import menu from "../imagess/menu-icon.png";
import phoneIcon from "../imagess/phone.png";

const navItems = [
  { id: 1, name: "Brendlər və Məhsullar" },
  { id: 2, name: "Üz qulluğu" },
  { id: 3, name: "Bədən qulluğu" },
  { id: 4, name: "Günəş qoruyucuları" },
  { id: 5, name: "Gözəl yaş alma" },
  { id: 6, name: "Qulluq setləri" },
  { id: 7, name: "Aksiyalar və Kompaniyalar" },
  { id: 8, name: "Haqqımızda" },
  { id: 9, name: "Faydalı" },
];

function Header() {
  return (
    <header>
      <div className="bg-[#6BACCC] w-full h-[40px] flex justify-around items-center px-[180px] text-white">
        <p>Bioderma, Institut Esthederm ve Etat Pur rəsmi satış saytıdır.</p>
        <div className="flex items-center gap-10">
          <img src={phoneIcon} alt="Phone Icon" className="h-4 mt-[-10px]" />
          <p>+994 12 123 4567</p>
        </div>
      </div>

      <div className="h-[168px] w-full flex flex-col items-center justify-center">
        <div className="flex items-center md:px-[51px] h-[68px] w-full border-b border-[#ACACAC] md:justify-center justify-between md:gap-[120px]">
          <div>
            <img src={naos} alt="Naos Logo" />
          </div>
          <div className="hidden md:flex items-center gap-[30px]">
            <img src={bioderma} alt="Bioderma Logo" />
            <img src={esthe} alt="Esthederm Logo" />
            <img src={etat} alt="Etat Pur Logo" />
          </div>
          {/* mobile-nav */}
          <div className="md:hidden flex gap-4">
            <div className="w-10 h-10 border flex items-center justify-center rounded-[7px]">
              <img src={search} alt="Search Icon" />
            </div>
            <div className="w-10 h-10 border flex items-center justify-center rounded-[7px]">
              <img src={like} alt="Like Icon" />
            </div>
            <div className="w-10 h-10 bg-[#009BC7] flex items-center justify-center rounded-[7px]">
              <img src={menu} alt="Menu Icon" />
            </div>
          </div>

          <div className="hidden md:flex">
            <div className="relative mr-5">
              <input
                placeholder="Axtar"
                className="border border-[#C7CACE] w-[253px] rounded-[4px] py-[6px] px-3"
              />
              <img
                src={search}
                alt="Search Icon"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            </div>
            <div className="hidden md:flex items-center gap-5">
              <img src={like} alt="Like Icon" />
              <img src={korzin} alt="Korzin Icon" />
              <div className="flex items-center gap-[10px]">
                <button className="underline">AZ</button>
                <div className="w-1 h-5 bg-[#ECEFF2]"></div>
                <button>EN</button>
              </div>
            </div>
          </div>
        </div>
        <nav className="hidden px-[51px] py-3 md:flex items-center justify-between border-b border-[#ECEFF2] gap-[30px]">
          {navItems.map((item) => (
            <p key={item.id} className="text-[#444A51] text-sm font-semibold">
              {item.name}
            </p>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
