import { forwardRef } from "react";
import ContactComponentsList from "./ContactComponentsList";
import ContactForm from "./ContactForm";
import SectionWrapper from "./SectionWrapper";

const ContactSection = forwardRef<HTMLDivElement, unknown>(function (_, ref) {
  return (

    <div ref={ref}>
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
})

export default ContactSection;