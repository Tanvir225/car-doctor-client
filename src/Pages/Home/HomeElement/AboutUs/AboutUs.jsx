import person from "../../../../assets/images/about_us/person.jpg"
import parts from "../../../../assets/images/about_us/parts.jpg"

const AboutUs = () => {
    return (
        <div className="">
            <div className="hero">
                <div className="flex gap-10 items-center flex-col  lg:flex-row">
                    <div className="lg:w-1/2 relative">
                        <img src={person} className="w-[85%] h-full rounded-lg shadow-2xl" />
                        <img src={parts} className="w-[45%] h-[80%] rounded-lg border-base-100 border-8 absolute bottom-0 top-[30%] left-1/2 " />
                    </div>
                    <div className="lg:w-[40%]  space-y-2">
                        <p className="font-bold text-lg text-[#FF3811] ">About Us</p>
                        <h1 className="text-5xl font-bold leading-tight">We are qualified & <br /> of experience <br /> in this field</h1>
                        <p className="py-2 text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p className="py-2  text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn mt-2 bg-[#FF3811] text-white px-5">Get more info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;