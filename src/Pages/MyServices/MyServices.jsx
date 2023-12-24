import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Banner from "../../Components/Banner/Banner";
import bannerImg from "../../assets/images/banner/2.jpg"
import ServiceData from "../../Components/ServiceData/ServiceData";
import axios from "axios";


const MyServices = () => {
    //get user from context
    const { user } = useContext(AuthContext)

    //api url
    const url = `http://localhost:5000/myservices?email=${user?.email}`

    //state for myservices
    const [myservices, setMyservices] = useState([])
    useEffect(() => {
        // fetch(url)
        //     .then(result => result.json())
        //     .then(data => setMyservices(data))

        //axios 
        axios.get(url)
        .then((res) => {
            setMyservices(res.data)
        })
    }, [url])

    return (
        <div>
            <Banner image={bannerImg} text={"My Service"} serviceName={`My get service : ${myservices.length}`} ></Banner>
            <div className="overflow-x-auto mt-16">
                <table className="table text-center">
                    {/* head */}
                    <thead className="text-lg">
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Service Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        myservices.map(service => <ServiceData key={service._id} myservices={myservices} setMyservices={setMyservices} service={service}></ServiceData>)
                       }
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyServices;