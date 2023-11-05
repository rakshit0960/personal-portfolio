import ContactComponentsList from "./ContactComponentsList";
import ContactForm from "./ContactForm";
import SectionWrapper from "./SectionWrapper";

export default function ContactSection() {
  return (
    
    <div id="ContactSection">
      <SectionWrapper name="Contact Me">

        <div className="grid grid-cols-6">
          <div className="self-center col-span-2">
            <ContactComponentsList />
          </div>
          <div className="col-span-4">
            <ContactForm />
          </div>
        </div>

      </SectionWrapper>
    </div>
  );
}
