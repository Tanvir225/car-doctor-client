import CarouselContent from "./CarouselContent";
import slider1 from "../../../../assets/images/banner/1.jpg"
import slider2 from "../../../../assets/images/banner/2.jpg"
import slider3 from "../../../../assets/images/banner/3.jpg"
import slider4 from "../../../../assets/images/banner/4.jpg"


const Carousel = () => {
    return (
        <div className="carousel w-full h-[60vh] rounded-lg ">
            <div id="slide1" className="carousel-item relative w-full">
               <CarouselContent image={slider1} prev={'#slide4'} next={'#slide2'}></CarouselContent>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <CarouselContent image={slider2} prev={'#slide1'} next={'#slide3'}></CarouselContent>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <CarouselContent image={slider3} prev={'#slide2'} next={'#slide4'}></CarouselContent>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <CarouselContent image={slider4} prev={'#slide3'} next={'#slide1'} ></CarouselContent>
            </div>
        </div>
    );
};

export default Carousel;