import { useLoaderData } from "react-router-dom";
import bannerImg from "../../assets/images/banner/4.jpg";
import Banner from "../../Components/Banner/Banner";
import Details from "../../Components/Details/Details";

const DetailsRoute = () => {
  //get loaderdata
  const signgleService = useLoaderData();

  return (
    <div>
      <Banner image={bannerImg} text={"Service Details"}></Banner>

      <Details
        id={signgleService._id}
        image={signgleService.img}
        title={signgleService.title}
        price={signgleService.price}
        descrption={signgleService.description}
      ></Details>
    </div>
  );
};

export default DetailsRoute;
