import naos from "../imagess/naos.png";
import bioderma from "../imagess/bioderma.png";
import esthe from "../imagess/esthe.png";
import etat from "../imagess/etat.png";
import SocialBox from "../components/socialbox";

function Footer() {
  return (
    <footer className="w-full  md:mt-[15px] mt-[420px]">
      <div className="md:flex ">
        <div className="md:px-[59px] md:h-[380px] border-r mt-[-40px] flex flex-col items-center justify-center text-center">
          <img src={naos} alt="" />
          <p className="text-xs  md:w-[182px] px-8">
            NAOS dünyanın ilk müstəqil dəriyə qulluq şirkətlərindən biridir.
            NAOS eko biologiyadan ilhamlanaraq 3 marka yaratdı
          </p>
        </div>
        <div>
          <div className="md:flex ml-[-200px]">
            <div className="mt-[43px]">
              <p className="font-medium mb-3 text-center md:text-start">
                Kateqoriyalar
              </p>
              <div className="flex flex-column md:flex-col flex-wrap  gap-2 justify-center">
                <p className="text-sm text-[#757575] mb-[10px] ">
                  Brendlər və Məhsullar
                </p>
                <p className="text-sm text-[#757575] mb-[10px]">
                  Qulluq setləri
                </p>
                <p className="text-sm text-[#757575] mb-[10px]">Üz qulluğu</p>
                <p className="text-sm text-[#757575] mb-[10px]">
                  Bədən qulluğu
                </p>
                <p className="text-sm text-[#757575] mb-[10px]">
                  Günəş qoruyucuları
                </p>
                <p className="text-sm text-[#757575] mb-[10px]">Göz yaş alma</p>
              </div>
            </div>
            <div className="md:ml-[59px] mt-[43px] ml-[20px]">
              <p className="font-medium mb-3 text-center md:text-start">
                Şirkət
              </p>
              <div className="  flex flex-column md:flex-col flex-wrap  gap-4 justify-center">
                <p className="text-sm text-[#757575] mb-[10px]">Haqqımızda</p>
                <p className="text-sm text-[#757575] mb-[10px]">Faydalı</p>
                <p className="text-sm text-[#757575] mb-[10px]">
                  Aksiyalar və Kompaniyalar
                </p>
              </div>
            </div>
            <div className="md:ml-[59px] mt-[43px] md:flex flex-col">
              <p className="font-medium mb-3 text-center md:text-start">
                Kömək
              </p>
              <div className=" flex flex-column md:flex-col flex-wrap  gap-4 justify-center md:justify-start">
                <p className="text-sm text-[#757575] mb-[10px]">FAQ</p>
                <p className="text-sm text-[#757575] mb-[10px]">
                  Ödəniş və çatdırılma
                </p>
                <p className="text-sm text-[#757575] mb-[10px]">
                  Zəmanət şərtləri
                </p>
                <p className="text-sm text-[#757575] mb-[10px]">
                  Mağaza ünvanları
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex ml-[59px] mt-[43px] gap-[29px]">
            <SocialBox image={bioderma} />
            <SocialBox image={esthe} />
            <SocialBox image={etat} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pl-[65px] pr-[65px] mt-[43px] mb-[20px]">
        <p className="text-sm">Bütün hüquqlar qorunur. © 2022 BIODERMA</p>
        <p className="text-sm text-right">Bu bir Marcom məhsuludur.</p>
      </div>
    </footer>
  );
}

export default Footer;
