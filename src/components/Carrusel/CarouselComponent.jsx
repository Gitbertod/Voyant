import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardComponent } from "../Card/CardComponent";
import { Link } from "react-router-dom";

export function CarouselComponent() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Resoluciones menores a 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Resoluciones menores a 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="m-11">
          <Link to="/blog/68ba45cdd5df60c376d2f93a">
            <CardComponent />
          </Link>
        </div>
        <div className="m-11">
          <Link to="/blog/68ba45cdd5df60c376d2f93a">
            <CardComponent />
          </Link>
        </div>
        <div className="m-11">
          <Link to="/blog/68ba45cdd5df60c376d2f93a">
            <CardComponent />
          </Link>
        </div>
        <div className="m-11">
          <Link to="/blog/68ba45cdd5df60c376d2f93a">
            <CardComponent />
          </Link>
        </div>
      </Slider>
    </div>
  );
}
