import TestimonialContent from "./TestimonialContent";
import TestimonialLink from "./TestimonialLink";

const Testimonial = () => {
  //fake review
  const reviews = [
    {
      id: 1,
      name: "Awlad Hossain",
      img: "https://i.ibb.co/HpJ3VmR/man-4140048.png",
      profession: "Businessman",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
      rating: 5,
    },
    {
      id: 2,
      name: "Ranbir Hossain",
      img: "https://i.ibb.co/HpJ3VmR/man-4140048.png",
      profession: "Businessman",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
      rating: 4,
    },
    {
      id: 3,
      name: "Tanvir Hossain",
      img: "https://i.ibb.co/HpJ3VmR/man-4140048.png",
      profession: "Businessman",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
      rating: 5,
    },
    {
      id: 4,
      name: "Shihab Hossain",
      img: "https://i.ibb.co/HpJ3VmR/man-4140048.png",
      profession: "Businessman",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
      rating: 4,
    },
    {
      id: 5,
      name: "Shakib Hossain",
      img: "https://i.ibb.co/HpJ3VmR/man-4140048.png",
      profession: "Businessman",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
      rating: 5,
    },
    {
      id: 6,
      name: "Abir Hossain",
      img: "https://i.ibb.co/HpJ3VmR/man-4140048.png",
      profession: "Businessman",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
      rating: 5,
    },
  ];

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide6" className="carousel-item relative w-full">
          <div className="flex items-center flex-col md:flex-row gap-5 max-w-6xl mx-auto">
            {reviews.slice(0, 2).map((review) => (
              <TestimonialContent
                key={review.id}
                review={review}
              ></TestimonialContent>
            ))}
          </div>

                <TestimonialLink prev={"#slide8"} next={"#slide7"}></TestimonialLink>
                
        </div>
        <div id="slide7" className="carousel-item relative w-full">
          <div  className="flex items-center flex-col md:flex-row gap-5 max-w-6xl mx-auto">
            {reviews.slice(2, 4).map((review) => (
              <TestimonialContent
                key={review.id}
                review={review}
              ></TestimonialContent>
            ))}
          </div>
            
          <TestimonialLink prev={"#slide6"} next={"#slide8"}></TestimonialLink>
         
        </div>
        <div id="slide8" className="carousel-item relative w-full">
          <div  className="flex items-center flex-col md:flex-row gap-5 max-w-6xl mx-auto">
            {reviews.slice(4, 6).map((review) => (
              <TestimonialContent
                key={review.id}
                review={review}
              ></TestimonialContent>
            ))}
          </div>

          <TestimonialLink prev={"#slide7"} next={"#slide6"}></TestimonialLink>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
