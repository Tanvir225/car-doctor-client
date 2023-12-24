

const TestimonialLink = ({prev,next}) => {
  return (
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href={prev} className="btn btn-circle bg-[#FF3811] text-white">
        ❮
      </a>
      <a href={next} className="btn btn-circle bg-[#FF3811]  text-white">
        ❯
      </a>
    </div>
  );
};

export default TestimonialLink;
