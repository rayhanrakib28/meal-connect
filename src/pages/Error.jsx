import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className='flex flex-col justify-center justify-items-center items-center min-h-screen'>
            <div className='flex flex-col justify-center items-center'>
                <img src="/404.gif" alt="404" className="text-2xl w-1/2" />
                <h2 className='text-2xl md:text-4xl my-3 uppercase text-[#50577A]'>Oops, page not found!</h2>
                <Link to="/">{<button className="btn text-xl my-6 bg-[#FF6C22] text-white focus:ring-[#FF6C22] focus:ring-offset-2 focus:ring-offset-gray-900 transition hover:bg-white hover:text-[#FF6C22]">Back To Home</button>}</Link>
            </div>
        </div>
    );
};

export default Error;