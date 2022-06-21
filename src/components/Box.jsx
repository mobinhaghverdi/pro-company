import { Slide } from "react-reveal";






const Box = ({ name, url }) => {


    return (
        <Slide up>
            <div className="w-2/5 flex flex-col justify-center items-center space-y-5 border-2 border-slate-500 hover:border-blue-300 hover:border-2 transition bg-slate-500 p-5 rounded-xl sm:w-1/5 ">
                <img src={url} className="w-1/3" alt="" />
                <div className="text-lg md:text-xl">{name}</div>
            </div>
        </Slide>
    );
}

export default Box;