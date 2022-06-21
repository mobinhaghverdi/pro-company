import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="divide-y divide-slate-400 pt-10 text-center text-white bg-slate-500">
            <section className="py-10 divide-y divide-slate-800 md:flex md:justify-around md:text-start md:divide-none">
                <div className="mx-5 space-y-3 py-5">
                    <span className="text-slate-900 text-xl font-bold">Attract Web Visitors</span>
                    <ul className="space-y-2">
                        <li><Link to="#" className="text-slate-200">Email Marketing</Link></li>
                        <li><Link to="#" className="text-slate-200">Email Templates</Link></li>
                        <li><Link to="#" className="text-slate-200">Email Broadcast</Link></li>
                        <li><Link to="#" className="text-slate-200">Double Opt-In Email</Link></li>
                    </ul>
                </div>
                <div className="mx-5 space-y-3 py-5">
                    <span className="text-slate-900 text-xl font-bold">Integrations</span>
                    <ul className="space-y-2">
                        <li><Link to="#" className="text-slate-200">Zapier Integration</Link></li>
                        <li><Link to="#" className="text-slate-200">Xero Integration</Link></li>
                        <li><Link to="#" className="text-slate-200">Mailgun Integration</Link></li>
                        <li><Link to="#" className="text-slate-200">Mandrill Integration</Link></li>
                    </ul>
                </div>
                <div className="mx-5 space-y-3 py-5">
                    <span className="text-slate-900 text-xl font-bold">Alternatives</span>
                    <ul className="space-y-2">
                        <li><Link to="#" className="text-slate-200">Infusionsoft Alternative</Link></li>
                        <li><Link to="#" className="text-slate-200">Drip Alternative</Link></li>
                        <li><Link to="#" className="text-slate-200">ActiveCampaign Alternative</Link></li>
                        <li><Link to="#" className="text-slate-200">Insightly Alternative</Link></li>
                    </ul>
                </div>
                <div className="mx-5 space-y-3 py-5">
                    <span className="text-slate-900 text-xl font-bold">Solutions</span>
                    <ul className="space-y-2">
                        <li><Link to="#" className="text-slate-200">Infusionsoft Alternative</Link></li>
                        <li><Link to="#" className="text-slate-200">Drip Alternative</Link></li>
                        <li><Link to="#" className="text-slate-200">ActiveCampaign Alternative</Link></li>
                        <li><Link to="#" className="text-slate-200">Insightly Alternative</Link></li>
                    </ul>
                </div>
            </section>
            <div className="py-5 text-slate-100"><i className="fa-regular fa-copyright"></i> CopyRight Mobinhaghverdi.ir 2022 <br /></div>
        </footer>
    );
}

export default Footer;