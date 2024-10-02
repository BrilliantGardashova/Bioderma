import bio2 from "../imagess/bio2.png";
import cosmetic from "../imagess/cosmetic.png";
import "../css/card.css";

export default function Caption(argument) {
  return (
    <div className="caption1">
      <div className="caption2">
        <img src={bio2} className="bio2"/>
      </div>

      <img src={cosmetic} className="captioni" />
      <div className="caption3">
        {" "}
        MEGA DISCOUNT OF THE MONTH <br />
        <hr className="chr" />
        <br />
        <p className="captionp">
          UP TO <b>30%</b> OFF
        </p>{" "}
        <br />
        <br />
        <br />
        <p className="caption4">Make-up removal</p>
        <p className="caption5">Sensibio Micellar water, 1 l</p>
      </div>
    </div>
  );
}
