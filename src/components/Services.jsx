import Box from "./Box";



const Services = () => {

    const data = [
        {
            id: 1,
            name: "Automations",
            url: "./img/automation.svg"
        },
        {
            id: 2,
            name: "Calling",
            url: "./img/calling.svg"
        },
        {
            id: 3,
            name: "Company Management",
            url: "./img/company-management.svg"
        },
        {
            id: 4,
            name: "Contact Management",
            url: "./img/contact-management.svg"
        },
        {
            id: 5,
            name: "Deal Management",
            url: "./img/deal-management.svg"
        },
        {
            id: 6,
            name: "Email Broadcast",
            url: "./img/email-broadcast.svg"
        },
        {
            id: 7,
            name: "Email Sequence",
            url: "./img/email-sequences.svg"
        },
        {
            id: 8,
            name: "Email Template Builder",
            url: "./img/email-template-builder.svg"
        },

    ]



    return (
        <section className="md:w-2/3 py-10 mx-auto">
            <h2 className="logo text-3xl mx-2">Do It All With EngageBay</h2>
            <p className="text-slate-400 py-5 mx-6">Stop paying thousands of dollars to dozens of marketing, sales, and support software. Experience the world's most affordable, unified software. EngageBay's all-in-one CRM software is the most comprehensive solution for your business.</p>
            <div className="flex flex-wrap justify-center mx-3 gap-5">
                {data.map(item => (
                    <Box key={item.id} name={item.name} url={item.url} />
                ))}
            </div>
        </section>
    );
}

export default Services;