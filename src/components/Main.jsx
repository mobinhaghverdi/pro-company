import TabSection from "./TabSection";
import ServiceBox from "./ServiceBox";
import Services from "./Services";
import PreFooter from "./PreFooter";
const Main = () => {

    const data = [
        {
            id: 1,
            name: "CRM Software",
            desc: "Identify new opportunities, convert visitors, deliver customer happiness, and more!",
            imgURL: "./img/crm.svg"
        },
        {
            id: 2,
            name: "Marketing Automation",
            desc: "Store unlimited contacts and build stronger relationships by keeping track of all your customer details in one place",
            imgURL: "./img/marketing-automation.svg"
        },
        {
            id: 3,
            name: "Helpdesk Software",
            desc: "Resolve queries faster and deliver exceptional support to delight your customers",
            imgURL: "./img/helpdesk.svg"
        },
        {
            id: 4,
            name: "Live Chat Software",
            desc: "Boost customer happiness and increase conversions by offering instant help when your customers need it",
            imgURL: "./img/livechat.svg"
        },
    ]



    return (
        <main className="bg-slate-700 border-b-2 text-white text-center border-slate-500 h-max w-full">
            <i className="fa-brands text-5xl pt-10 fa-medapps"></i>
            <h2 className="pt-8 pb-2 px-3 text-2xl">Single Solution for All Your Activities</h2>
            <p className="text-slate-400 p-3">Identify new opportunities, convert visitors, deliver customer happiness, and more!</p>

            <section className="flex flex-wrap mx-8 justify-around ">
                {data.map(item => (

                    <ServiceBox key={item.id} name={item.name} desc={item.desc} image={item.imgURL} />
                ))}
            </section>
            <TabSection />
            <Services />
            <PreFooter />
        </main>
    );
}

export default Main;