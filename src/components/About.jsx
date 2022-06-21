
const About = () => {
    return (
        <div className="w-full h-max py-28 bg-slate-600">
            <div className="w-4/5 p-5  md:w-2/5 text-center shadow-2xl rounded-2xl text-slate-100 mx-auto flex flex-col ">
                <div className="text-3xl">About Us <i class="fa-solid fa-microphone"></i></div>
                <p className="my-5 logo">This website has been developed by <span className="text-slate-900 font-bold ">mobin haghverdi</span> with these technologies: </p>
                <div className="flexpb-7 md:pb-1 flex-col">
                    <span className="text-sm mx-2"><i className="fa-regular text-slate-400 mr-1 fa-circle-check"></i> JavaScript</span>
                    <span className="text-sm mx-2"><i className="fa-regular text-slate-400 mr-1 fa-circle-check"></i> React Js</span>
                    <span className="text-sm mx-2"><i className="fa-regular text-slate-400 mr-1 fa-circle-check"></i> Axios(Real Api)</span>
                    <span className="text-sm mx-2"><i className="fa-regular text-slate-400 mr-1 fa-circle-check"></i> Tailwind CSS</span>
                </div>
                <div className="mx-auto text-white w-max h-max my-5  bg-slate-700 text-center rounded-full shadow-xl shadow-slate-600 p-3 hover:text-slate-400 ease-in-out duration-300">
                    <a href="https://www.mobinhaghverdi.ir" className='p-3 text-sm'>Take a look at my website <i class="fa-regular fa-hand"></i></a>
                </div>
                <div>
                    <a href="https://www.github.com/mobinhaghverdi" className="mx-2 text-xl hover:text-slate-900 transition"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.t.me/mobinhaghverdi" className="mx-2 text-xl hover:text-slate-900 transition"><i class="fa-brands fa-telegram"></i></a>
                    <a href="https://www.linkedin.com/in/mobin-haghverdi-525327217/" className="mx-2 text-xl hover:text-slate-900 transition"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://wa.me/989109947606" className="mx-2 text-xl hover:text-slate-900 transition"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
                <div className="my-5">Email <i class="fa-regular fa-envelope"></i> : Gadsalof@gmail.com</div>
            </div>
        </div>
    );
}

export default About;