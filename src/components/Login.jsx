import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { CircleLoader } from 'react-spinners';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
    let [loading, setLoading] = useState(false);
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            navigate("/")
            toast.success("Welcome To You're Account...")
        }, 3000);
    };



    return (
        <div className="bg-slate-600 h-max py-24 md:py-16">
            <div className={loading ? 'transition  fixed flex justify-center items-center top-0 w-full h-full bg-green-300 bg-opacity-30 z-20' : 'opacity-0 pointer-events-none transition'}>
                <CircleLoader color='#36D7B7' loading={loading} size={300} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 mx-auto bg-slate-800 p-8 md:p-16 rounded-xl shadow md:w-2/5">
                <div className="text-gray-50 text-3xl text-center mb-8">Log-In <i className="fa-solid fa-right-to-bracket"></i></div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input {...register('email', { required: true })} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@mobinhaghverdi.com" />
                    {errors.email && <p className="text-red-500 mt-2" >*You're name is required.</p>}

                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                    <input {...register('password', { required: true, minLenght: 8, maxLength: 15 })} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="********" />
                    {errors.password && <p className="text-red-500 mt-2" >*PLease enter you're password at least 8 character...</p>}

                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                    </div>
                    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Let Me Know The News With <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Email.</a></label>
                </div>
                <button type="submit" className="text-white bg-slate-700 shadow-xl hover:bg-slate-900 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Log-In to account</button>
            </form>
        </div>
    );
}
// bg-blue-700 hover:bg-blue-800
// dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
export default Login;