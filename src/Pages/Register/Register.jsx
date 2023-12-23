import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";



const Register = () => {

    //get context
    const {creatUser} = useContext(AuthContext)

    //handle register form submit
    const handleSubmit = (event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        const user = {name,email,photo,password}
        console.log(user)

        //creat User
        creatUser(email,password)
        .then(result =>{
            const user = result.user
            console.log(user)

            //update user
            updateProfile(user,{
                displayName : name,
                photoURL : photo
            })
            toast.success("user created successfully")
            form.reset()
        })
        .catch(error =>{
            toast.error(error.message.slice(10,error.message.length))
        })
    }

    return (
        <div className="mt-10 pb-5">
            <div className="hero">
                <div className="hero-content flex-col-reverse gap-5 lg:gap-16 h-[100vh] lg:flex-row">
                    <div className="text-center lg:w-1/2 h-full">
                        <img src={loginImage} alt="login Image" className="w-full h-full" />
                    </div>
                    <div className="card shrink-0 w-full max-w-xl border-2 py-10">
                        <h2 className="text-2xl font-bold text-center">Register</h2>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" required placeholder="name" className="input input-bordered"  />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" required placeholder="img.bb/tanvir.jpg" className="input input-bordered"  />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="email" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password"  placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF3811] text-white">Register</button>
                            </div>
                        </form>

                        <div className="px-8 space-y-5">
                            <p className="text-center">Already have any account? <Link to={'/login'} className="text-[#FF3811] font-bold">Login</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;