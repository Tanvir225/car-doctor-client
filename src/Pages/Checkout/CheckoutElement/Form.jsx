import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Form = ({handleSubmit,checkOutProduct}) => {
    //get user by context
    const { user } = useContext(AuthContext);
  
  return (
    <div className="bg-base-200 mt-10 p-5 lg:px-16 lg:py-10 rounded-lg">
      <form onSubmit={handleSubmit} className="card-body ">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
          <div className="form-control">
            <input
              readOnly
              type="text"
              placeholder="Your Name"
              defaultValue={`${user.displayName}`}
              name="name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <input
              type="text"
              readOnly
              defaultValue={`$ ${checkOutProduct.price}`}
              name=""
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              name="date"
              placeholder="Service date"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control col-span-full border-none ">
            <textarea
                rows={4}
                cols={40}
                name="message"
              className="p-5 w-full rounded-lg border-2"
              placeholder="your message"
            ></textarea>
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811] w-full text-white">
             Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
