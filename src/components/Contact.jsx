import { useRef, useState } from "react";
import { toast } from "react-toastify";


const Contact = () => {

    const [name, setName] = useState("")
    const emailRef = useRef();
    const textRef = useRef();
    const checkRef = useRef();
    const handleSubmition = (e) => {
        e.preventDefault();
        if (name === "" && !isNaN(name)) {
            return toast.error("Please complete the feilds below...")
        }
        toast.info(<div><span>{name}</span> <br /> <span>Youre idea has been sent to the server <i class="fa-regular fa-circle-check"></i></span></div>)
        setName("");
        textRef.current.value = ""
        emailRef.current.value = ""
        checkRef.current.checked = false
    }

    return (
        <div className="bg-slate-600 w-full py-28  md:py-20 md:flex-row h-max">
            <div className="w-4/5 mx-auto flex flex-col md:flex-row gap-10">
                <div className="mx-auto md:py-16 mb-5">
                    <img className="mx-auto" src="./img/contact.svg" alt="" />
                </div>
                <form onSubmit={(e) => handleSubmition(e)} className="p-8 md:p-16 rounded-xl shadow-2xl md:w-2/5">
                    <div className="text-gray-50 text-3xl text-center mb-8">Your Ideas <i class="fa-regular fa-lightbulb"></i></div>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="john limi" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" ref={emailRef} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@mobinhaghverdi.com" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="idea" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your idea</label>
                        <textarea id="idea" ref={textRef} name="idea" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="terms" ref={checkRef} type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                        </div>
                        <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                    </div>

                    <button type="submit" className="text-white bg-slate-700 shadow-xl hover:bg-slate-900 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Send the form</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;