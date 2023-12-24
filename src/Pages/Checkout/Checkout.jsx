import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import bannerImg from "../../assets/images/banner/1.jpg";
import Form from "./CheckoutElement/Form";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Checkout = () => {
  //get loader data
  const checkoutProduct = useLoaderData();
  //console.log(chckoutProduct);

  //navigate
  const navigate = useNavigate()

  //get user by context
  const { user } = useContext(AuthContext);

  //handle formSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    //const name = form.name.value
    const phone = form.phone.value;
    //const price = form.price.value
    const date = form.date.value;
    const message = form.message.value;

    const orderInfo = {
      name: user.displayName,
      email: user.email,
      phone,
      img:checkoutProduct.img,
      title:checkoutProduct.title,
      price: checkoutProduct.price,
      date,
      message,
    };
    console.log(orderInfo);

    //post data to databse
    fetch("http://localhost:5000/myservices",{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(orderInfo),
    })
    .then((response)=> response.json())
    .then(data=>{
      console.log(data);
      if (data.insertedId) {
        toast.success("your order successfully place")
        form.reset()
      }
    })

    navigate('/')
    
  };

  return (
    <div>
      <Banner
        image={bannerImg}
        text={"Checkout For"}
        serviceName={checkoutProduct.title}
      ></Banner>
      <Form
        handleSubmit={handleSubmit}
        checkOutProduct={checkoutProduct}
      ></Form>
    </div>
  );
};

export default Checkout;
