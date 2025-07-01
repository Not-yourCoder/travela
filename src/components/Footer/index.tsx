import { FOOTER_DATA } from "@/constants";
import { NewsletterSection } from "./NewsLetter";
import { VendorLinks } from "./Vendors";
import { FooterSection } from "./FooterSection";
import { ContactInfo } from "./ContactInfo";
import { FooterLinks } from "./FooterLinks";
import { MobileApps } from "./MobileApps";
import { BottomFooter } from "./BottomFooter";

const TravelFooter = () => {
    return (
        <footer className="bg-white">
            <NewsletterSection data={FOOTER_DATA.newsletter} />
            {/* <VendorLinks links={FOOTER_DATA.vendorLinks} /> */}

            <div className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
                        <div className="lg:col-span-1">
                            <FooterSection title={FOOTER_DATA.contact.title}>
                                <ContactInfo data={FOOTER_DATA.contact} />
                            </FooterSection>
                        </div>

                        <div className="lg:col-span-1">
                            <FooterSection title={FOOTER_DATA.company.title}>
                                <FooterLinks links={FOOTER_DATA.company.links} />
                            </FooterSection>
                        </div>

                        <div className="lg:col-span-1">
                            <FooterSection title={FOOTER_DATA.support.title}>
                                <FooterLinks links={FOOTER_DATA.support.links} />
                            </FooterSection>
                        </div>

                        <div className="lg:col-span-1">
                            <FooterSection title={FOOTER_DATA.services.title}>
                                <FooterLinks links={FOOTER_DATA.services.links} />
                            </FooterSection>
                        </div>

                        <div className="lg:col-span-2">
                            <FooterSection title={FOOTER_DATA.mobile.title}>
                                <MobileApps data={FOOTER_DATA.mobile} />
                            </FooterSection>
                        </div>
                    </div>
                </div>
            </div>

            <BottomFooter data={FOOTER_DATA.footer} />
        </footer>
    );
};

export default TravelFooter;