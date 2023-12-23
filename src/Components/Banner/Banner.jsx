

const Banner = ({image,text,serviceName}) => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r rounded-lg from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%] w-full h-full absolute top-0 left-0 "></div>
      <div className="w-full h-[45vh] ">
        <img src={image} alt="banner" className="w-full h-full rounded-lg object-cover" />
      </div>
      <div className="text-white absolute left-10 top-1/2 space-y-5">
        <h2 className="text-3xl font-bold">{text}</h2>
        <h2 className="text-2xl text-[#FF3811] font-bold">{serviceName}</h2>
      </div>
    </div>
  );
};

export default Banner;
