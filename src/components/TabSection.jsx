import { useState } from "react";
import { Bounce } from "react-reveal";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const TabSection = () => {

    const [active, setActive] = useState(1)


    const data = [
        {
            id: 1,
            name: "Marketing Software",
        },
        {
            id: 2,
            name: "Free CRM Features",
        },
        {
            id: 3,
            name: "Sales Software",
        },
        {
            id: 4,
            name: "Help Desk Software",
        },

    ]
    const panel = [
        {
            id: 1,
            title: "Market Your Business Like the World’s Best Companies",
            desc: "With our comprehensive set of Marketing tools, including Email Marketing, Marketing Automation, Email Template Builder, Landing Page Builder, Lead Generation tools, Social Suite & more, your marketing team can take things to the next level.",
            heading: "POPULAR MARKETING FEATURES",
            tags: ["Email Marketing", "Lead Generation tools", "Marketing Automation"],
            imgURL: "./img/marketing_software.png"
        },
        {
            id: 2,
            title: "Build Lasting Customer Relationships",
            desc: "Along with a full stack of software for marketing, sales, and customer service, EngageBay also offers a completely free CRM at its core. While they’re powerful when used individually, they are at their best when used together.",
            heading: "POPULAR MARKETING FEATURES",
            tags: ["Email Marketing", "Lead Generation tools", "Marketing Automation"],
            imgURL: "./img/free_crm_features.png"
        },
        {
            id: 3,
            title: "Sell Like the Pros",
            desc: "With our exhaustive set of Sales tools such as Contact Management, Email Tracking, Telephony, Appointment Scheduling, Project Management, Gamification.",
            heading: "POPULAR MARKETING FEATURES",
            tags: ["Email Marketing", "Lead Generation tools", "Marketing Automation"],
            imgURL: "./img/sales_software.png"
        },
        {
            id: 4,
            title: "Provide Awesome Support to Your Customers",
            desc: "With our seamless stack of Service tools such as Ticketing, Helpdesk, Customer Feedback Forms, Knowledge Base, Canned Responses and your support team can now connect better, resolve faster, and retain your customers for a lifetime.",
            heading: "POPULAR MARKETING FEATURES",
            tags: ["Email Marketing", "Lead Generation tools", "Marketing Automation"],
            imgURL: "./img/helpdesk_software.png"
        },
    ]

    return (
        <Tabs defaultIndex={1} className='w-full bg-slate-600 mt-8 border-slate-500 border-t-2 h-max py-10 block '>
            <TabList className="border-b-2 border-gray-100 w-max mx-auto p-8">
                {data.map(item => (
                    <Tab key={item.id} className={active === item.id ? 'block lg:inline text-2xl px-8 cursor-pointer p-3 rounded-xl bg-slate-700' : 'block lg:inline text-2xl px-8 hover:bg-slate-500 cursor-pointer p-3 rounded-xl'} onClick={() => setActive(item.id)}>{item.name} {active === item.id ? (<i className="fa-regular text-slate-900 mr-1 fa-circle-check"></i>) : null}</Tab>
                ))}
            </TabList>

            {panel.map(item => (
                <TabPanel key={item.id} className="flex flex-col-reverse md:flex-row md:items-center md:mx-16">
                    <Bounce>
                        <div className="text-left m-8 my-12 md:w-4/5">
                            <h2 className="text-4xl">{item.title}</h2>
                            <div className="w-12 my-3 rounded-full h-2 bg-white"></div>
                            <p className="text-slate-400 my-4">{item.desc}</p>
                            <div className="flex flex-col">
                                {item.tags.map(tag => (
                                    <span key={tag}><i className="fa-regular text-slate-900 mr-1 fa-circle-check"></i> {tag}</span>
                                ))}
                            </div>
                            <div className="rounded-full p-4 my-8 flex justify-around items-center md:w-max hover:text-slate-400 shadow-2xl shadow-slate-900 cursor-pointer">{item.heading} <i className="fa-solid md:mx-2 fa-arrow-right-long"></i></div>
                        </div>
                    </Bounce>
                    <Bounce>
                        <div className="md:w-4/5">
                            <img className="hidden md:block md:w-4/5 mx-auto" src={item.imgURL} alt="" />
                        </div>
                    </Bounce>
                </TabPanel>
            ))}
        </Tabs>
    );
}

export default TabSection;