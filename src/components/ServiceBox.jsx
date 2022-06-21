import { Roll } from "react-reveal";


const ServiceBox = ({ name, desc, image }) => {
    return (
        <Roll>
            <div className="w-full sm:w-2/5 flex rounded-xl p-7 my-5 bg-slate-800 flex-col justify-center md:flex-row-reverse items-center">
                <img src={image} className="w-1/2 mx-auto md:w-1/3" alt="" />
                <div className="mx-2">
                    <h2 className="py-5">{name}</h2>
                    <p className="text-slate-400">{desc}</p>
                </div>
            </div>
        </Roll>
    );
}

export default ServiceBox;