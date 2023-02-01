import { useRef } from 'react';
import { AccentTitle } from '../../style/GlobalComponentStyles';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import * as pallete from '../../style/colorVars';
import Slider from 'react-slick';
import image1 from '../../assets/card1.jpg';
import image2 from '../../assets/card2.jpg';
import image3 from '../../assets/card3.jpg';
import image4 from '../../assets/card4.jpg';
import image5 from '../../assets/card5.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

const { light_cream, black } = pallete.colors.neutral;

function MyWork() {
    const sliderRef = useRef();

    const settings = {
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    function goToNext() {
        sliderRef.current.slickNext();
    }

    function goToPrev() {
        sliderRef.current.slickPrev();
    }

    return (
        <>
            <div className="card-title">
                <AccentTitle textColor={black}>My Work</AccentTitle>
            </div>

            <Slider {...settings} ref={sliderRef}>
                <div className="card-container">
                    <img src={image1} alt="" />
                </div>

                <div className="card-container">
                    <img src={image2} alt="" />
                </div>

                <div className="card-container">
                    <img src={image3} alt="" />
                </div>

                <div className="card-container">
                    <img src={image4} alt="" />
                </div>

                <div className="card-container">
                    <img src={image5} alt="" />
                </div>
            </Slider>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <button
                    onClick={() => goToPrev()}
                    className="btn-prev"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "5px",
                    }}
                >
                    <HiArrowSmLeft size={25} color={light_cream} />
                </button>
                <button
                    onClick={() => goToNext()}
                    className="btn-next"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "5px",
                    }}
                >
                    <HiArrowSmRight size={25} color={light_cream} />
                </button>
            </div>
        </>
    );
};

export default MyWork;