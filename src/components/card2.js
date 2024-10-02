import bio1 from "../imagess/bio1.png";
import back from "../imagess/back.png";
import "../css/card2.css";

export default function Card2(argument) {
  return (
    <>
      <img src={back} className="discounti" />
      <div className="discountdiv">
        <p>
          Ləkəyə qarşı
          <br /> <b>Parlaqladıcı</b> qayğı:
        </p>
      </div>
      <div className="discountdiv2">
        <p> Make-up removal</p>
        <p className="discountp">Sensibio Micellar water, 1 l</p>
      </div>
      <div className="discountdiv3">
        <p className="discountp2">30% Endirim</p>
      </div>
      <img src={bio1} className="discountim" />
    </>
  );
}
