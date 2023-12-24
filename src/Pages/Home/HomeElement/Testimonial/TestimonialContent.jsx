import quoteImg from "../../../../assets/quote 1.svg"

const TestimonialContent = ({review}) => {
    return (
        <div className="space-y-5 relative border-2 px-10 py-5 rounded-lg">
            <div className="flex items-center gap-5">
                <img src={review.img} alt={`${review.name} image`} className="w-16 h-full rounded-full object-cover" />
                <div>
                    <h2 className="text-xl font-bold">{review.name}</h2>
                    <p className="text-gray-500 text-semibold text-lg">{review.profession}</p>
                </div>
            </div>

            <p className="text-gray-500 text-semibold">{review.description}</p>

            <div className="absolute top-1 right-10 -z-10">
                <img src={quoteImg} alt="quote" />
            </div>

            
        </div>
    );
};

export default TestimonialContent;