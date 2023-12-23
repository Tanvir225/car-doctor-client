import { Link } from "react-router-dom";

const Details = ({image,title,descrption,category,price,id}) => {
  return (
    <div className="flex justify-between flex-col lg:flex-row mt-10">
      <div className="lg:w-[70%] space-y-3">
        <div className="h-[50vh] ">
          <img src={image} alt={`${title} image`} className="w-full h-full rounded-lg object-cover" />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="py-2 text-justify text-gray-500">
           {descrption}
          </p>
      </div>

      <div className="lg:w-[27%] space-y-5">
            <div className="h-[50vh] bg-[#F3F3F3] p-5 rounded-lg w-full">
                Comoing soon
            </div>
            <h2 className="text-2xl text-[#FF3811] font-bold"> Price : {price} $</h2>
            <Link  to={`/${id}/checkout`} className="btn bg-[#FF3811] w-full text-white">Process Checkout</Link>
      </div>
    </div>
  );
};

export default Details;
