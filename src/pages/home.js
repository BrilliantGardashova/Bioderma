import addim1 from "../imagess/temizle_img.png";
import addim2 from "../imagess/nemlen_img.png";
import addim3 from "../imagess/spf.png";
import Carousell from "../components/carousel2.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import "../css/home.css";
import Left from "../components/carousel1.js";
import Card2 from "../components/card2.js";
import More from "../components/more.js";
import Harvests from "../components/harvests.js";
import Routines from "../components/routine.js";

export default function Index() {
  return (
    <>
      <div className="container">
        <div className=" justify-content-center" id="homecon">
          <div className="row " id="homerow">
            <div className="left col-8">
              <Left />
            </div>
            <div className="col-4" id="homecol">
              <a href="/aksiya" style={{ textDecoration: "none" }}>
                <Card2 />
              </a>
            </div>
          </div>
        </div>
        <div className="container justify-content-center" id="homecon1">
          <div className="row" id="homerow2">
            <div className="col">
              <h4 className="homeh">Endirimli məhsullar</h4>
              <div id="box" className="homediv"></div>
            </div>
            <div className="col text-center" id="homecol2">
              <a href="/aksiya" style={{ textDecoration: "none" }}>
                <p className="text-end homep">Hamısına bax</p>
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="container justify-content-center" id="homec">
          <Harvests />
        </div>
        <br />
        <>
          <More />
        </>
        <div className="container justify-content-center" id="homecon2">
          <div className="row" id="homerow3">
            <br />
            <div className="col">
              <h4 className="homeh2">Dəri qulluğu rutini</h4>
              <div id="box" className="homediv2"></div>
            </div>
          </div>
        </div>

        <div className="container justify-content-center" id="homecon3">
          <div className="row" id="homerow4">
            <div className="col-4">
              <Routines src={addim1} text="1.Addım: Təmizlə" />
            </div>
            <div className="col-4" style={{ marginLeft: "-25px" }}>
              <Routines
                src={addim2}
                text="2. Addım: Müalicə et və qulluq (nəmləndir) et"
              />
            </div>
            <div className="col-4" style={{ marginLeft: "-25px" }}>
              <Routines src={addim3} text="3. Addım: Günəşdən qoru" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="container justify-content-center" id="homecon4">
          <div style={{ marginLeft: "70px" }}>
            <Carousell />
          </div>
        </div>
      </div>
    </>
  );
}
