import ContactComponentsList from "./ContactComponentsList";
import ContactForm from "./ContactForm";
import SectionWrapper from "./SectionWrapper";

export default function ContactSection() {
  return (
    
    <div id="ContactSection">
      <SectionWrapper name="Contact Me">

        <div className="grid 2xl:grid-cols-6 grid-cols-1">
          <div className="self-center 2xl:col-span-2 ml-8 mr-6 2xl:ml-0 2xl:mr-0 order-last 2xl:order-first">
            <ContactComponentsList />
          </div>
          <div className="2xl:col-span-4">
            <ContactForm />
          </div>
        </div>

      </SectionWrapper>
    </div>
  );
}
