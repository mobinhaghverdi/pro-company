


const PreFooter = () => {
    return (
        <section className="py-8 mt-5 bg-slate-500 border-b-2 border-slate-400">
            <div className="md:w-2/3 mx-auto">
                <h2 className="text-3xl"> Simplify Marketing, Sales, & Support with the best free</h2>
                <h2 className="text-4xl font-bold text-slate-800 my-5">All-In-One CRM software</h2>
                <div className="flex text-center divide-x p-2 divide-slate-500 my-8 border-2 border-slate-600 text-white shadow-2xl shadow-slate-900  rounded-full w-fit mx-auto mt-4">
                    <input type="text" placeholder='Search Here...' id='search-box' className="text-base mx-2 outline-none bg-transparent" />
                    <label htmlFor="search-box absolute" className="bg-slate-600 p-2 cursor-pointer rounded-full hover:bg-slate-800" >Get Started</label>
                </div>
                <span><i className="fa-regular text-slate-900 mr-1 fa-circle-check"></i> Free for 15 users</span>
                <span className="ml-2"><i className="fa-regular text-slate-900 mr-1 fa-circle-check"></i> No credit card required</span>
            </div>
        </section>
    );
}

export default PreFooter;