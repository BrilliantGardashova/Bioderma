import "bootstrap/dist/css/bootstrap.min.css";
import frame1 from "../imagess/Frame 1.png";
import frame2 from "../imagess/Frame 2.png";
import frame3 from "../imagess/Frame 3.png";
import frame4 from "../imagess/Frame 4.png";
import "../css/navbar.css";

export default function Body() {
  return (
    <div className="container-fluid" id="navbarcon">
      <ul className="nav justify-content-center">
        <li className="nav-item" id="navbarli1">
          <img src={frame1} className="navbarimg" />
        </li>
        <li className="nav-item" id="navbarli2">
          <span className="span">
            Səhiyyə mütəxəssisləri ilə <br />
            40 illik iş təcrübəsi
          </span>
        </li>
        <li>
          <div className="navbard1"></div>
        </li>
        <li className="nav-item" id="navbarli3">
          <img src={frame2} className="navbarimg" />
        </li>
        <li className="nav-item" id="navbarli4">
          <span className="span">Dəriyə dərin hörmət</span>
        </li>
        <li>
          <div className="navbard2"></div>
        </li>
        <li className="nav-item" id="navbarli5">
          <img src={frame3} className="navbarimg" />
        </li>
        <li className="nav-item" id="navbarli6">
          <span className="span">
            Effektivlik və təhlükəsizlik tibbi <br />
            nəzarət altında sınaqdan keçirilmişdir
          </span>
        </li>
        <li>
          <div className="navbard3"></div>
        </li>
        <li className="nav-item" id="navbarli8">
          <img src={frame4} className="navbarimg" />
        </li>
        <li className="nav-item" id="navbarli7">
          <span className="span">
            Səhiyyə mütəxəssisləri ilə <br />
            40 illik iş təcrübəsi
          </span>
        </li>
      </ul>
    </div>
  );
}
