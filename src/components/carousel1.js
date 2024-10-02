import Carousel from "react-bootstrap/Carousel";
import Card1 from "../components/card1.js";
export default function Left() {
  return (
    <Carousel controls={false} style={{ marginLeft: "10px" }}>
      <Carousel.Item interval="1000">
        <Card1 />
      </Carousel.Item>

      <Carousel.Item interval="1000">
        <Card1 />
      </Carousel.Item>

      <Carousel.Item interval="1000">
        <Card1 />
      </Carousel.Item>
    </Carousel>
  );
}
