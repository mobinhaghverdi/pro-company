

const Products = () => {

    const panel = [
        {
            id: 1,
            title: "Market Your Business Like the World’s Best Companies",
            desc: "With our comprehensive set of Marketing tools, including Email Marketing, Marketing Automation, Email Template Builder, Landing Page Builder, Lead Generation tools, Social Suite & more, your marketing team can take things to the next level.",
            heading: "POPULAR MARKETING FEATURES",
            tags: ["Email Marketing", "Lead Generation tools", "Marketing Automation"],
            imgURL: "./img/marketing_software.png",
            price: 19,
        },
        {
            id: 2,
            title: "Build Lasting Customer Relationships",
            desc: "Along with a full stack of software for marketing, sales, and customer service, EngageBay also offers a completely free CRM at its core. While they’re powerful when used individually, they are at their best when used together.",
            heading: "POPULAR MARKETING FEATURES",
            tags: ["Email Marketing", "Lead Generation tools", "Marketing Automation"],
            imgURL: "./img/free_crm_features.png",
            price: 25,
        },
        {
            id: 3,
            title: "Sell Like the Pros",
            desc: "With our exhaustive set of Sales tools such as Contact Management, Email Tracking, Telephony, Appointment Scheduling, Project Management, Gamification.",
            heading: "POPULAR MARKETING FEATURES",
            tags: ["Email Marketing", "Lead Generation tools", "Marketing Automation"],
            imgURL: "./img/sales_software.png",
            price: 32,
        },
        {
            id: 4,
            title: "Provide Awesome Support to Your Customers",
            desc: "With our seamless stack of Service tools such as Ticketing, Helpdesk, Customer Feedback Forms, Knowledge Base, Canned Responses and your support team can now connect better, resolve faster, and retain your customers for a lifetime.",
            heading: "POPULAR MARKETING FEATURES",
            tags: ["Email Marketing", "Lead Generation tools", "Marketing Automation"],
            imgURL: "./img/helpdesk_software.png",
            price: 45,
        },
    ]


    return (
        <section className="h-max w-full bg-slate-600">
            <div className="w-4/5 mx-auto pt-28 pb-10 md:py-10 flex justify-center gap-16 flex-wrap">
                {panel.map(item => (
                    <div className="text-white w-6/7 md:w-2/5 bg-slate-800 p-5 md:p-8 rounded-xl divide-y md:divide-none divide-slate-400">
                        <div className="py-5">
                            <h1 className="md:text-xl font-bold mb-3 ">{item.title}</h1>
                            <p className="text-sm">{item.desc}</p>
                        </div>
                        <div className="pt-7 flex flex-col divide-y divide-slate-400 md:divide-none  md:flex-row items-start md:items-end justify-between">
                            <div className="flex justify-end pb-7 md:pb-1 flex-col">
                                {item.tags.map(tag => (
                                    <span className="text-sm"><i className="fa-regular text-slate-400 mr-1 fa-circle-check"></i> {tag}</span>
                                ))}
                            </div>
                            <div className="w-full md:w-1/2 flex  justify-between items-end">
                                <div className="md:text-xl p-2 md:w-max mt-5">
                                    <span className="text-slate-200 flex flex-col text-center"><span>{item.price}$</span> <span className="text-red-500 font-bold">Per Month</span></span>
                                </div>
                                <div className=" text-white w-max h-max mb-2  bg-slate-700 text-center rounded-full shadow-2xl shadow-slate-600 p-3 hover:text-slate-400 ease-in-out duration-300">
                                    <a href="#" className='p-3 text-sm'>Buy The Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;