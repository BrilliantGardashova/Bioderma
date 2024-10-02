import Carousel from "react-bootstrap/Carousel";
import Card from "./card.js";
import "../css/card.css";

function Carousell() {
  return (
    <Carousel controls={false} id="carousel1">
      <Carousel.Item>
        <Card />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <Card />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <Card />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;
