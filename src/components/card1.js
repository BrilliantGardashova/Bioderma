import spa from "../imagess/spa.png";
import bio from "../imagess/bio.png";
import "../css/card1.css";
export default function Card1(argument) {
  return (
    <div className="container col-8  mb-5">
      <a href="/mehsullar" className="caption2a">
        <img src={spa} className="caption2i" />
        <div className="caption2d">
          <p>
            Ləkəyə qarşı <br />
            <b>Parlaqladıcı</b> qayğı: <b className="caption2b">Pigmentbio</b>
          </p>
        </div>
      </a>
      <img src={bio} className="caption2im" height="253px" width="106.29px" />
    </div>
  );
}
