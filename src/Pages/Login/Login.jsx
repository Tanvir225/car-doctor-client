import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg"
import { AiFillGoogleCircle } from "react-icons/ai"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

    //get context
    const { loginUser, googleLogin } = useContext(AuthContext)

    //navigate
    const navigate = useNavigate()
    //location
    const location = useLocation()
    console.log(location)

    //handle login form submit
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        const user = { email, password }
        console.log(user)

        //creat User
        loginUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success("user Login successfully")
                form.reset()
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                toast.error(error.message.slice(10, error.message.length))
            })
    }

    //handle media Login
    const hadleGoogleLogin = (media) => {
        media()
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success("user Login successfully")
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                toast.error(error.message.slice(10, error.message.length))
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
                        <h2 className="text-2xl font-bold text-center">Login</h2>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF3811] text-white">Login</button>
                            </div>
                        </form>

                        <div className="px-8 space-y-5">
                            <h2 className="text-lg font-bold divider ">OR</h2>
                            <button onClick={() => hadleGoogleLogin(googleLogin)} className="btn btn-outline bg-[#FF3811] w-full  text-white"><AiFillGoogleCircle className="text-4xl"></AiFillGoogleCircle>Google</button>
                            <p className="text-center">Don't have any account? <Link to={'/register'} className="text-[#FF3811] font-bold">Register</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;