import Choose from "../components/choose.js";
import img1 from "../imagess/img 1.png";
import img2 from "../imagess/img 2.png";
import img3 from "../imagess/img 3.png";
import img4 from "../imagess/img 4.png";
import "../css/choose.css";

export default function Harvests(argument) {
  return (
    <div className="row" id="harvestsr">
      <div className="col-3">
        <Choose id="1" src={img1} />
      </div>

      <div className="col-3" id="harvestsc1">
        <Choose id="2" src={img2} />
      </div>

      <div className="col-3" id="harvestsc2">
        <Choose id="3" src={img3} />
      </div>

      <div className="col-3" id="harvestsc3">
        <Choose id="4" src={img4} />
      </div>
    </div>
  );
}
