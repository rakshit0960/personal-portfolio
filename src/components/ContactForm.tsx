import SectionWrapper from "./SectionWrapper";
import { FormEventHandler, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail: FormEventHandler = async (e) => {
    e.preventDefault();
    if (formRef.current == null) return;

    try {
      await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
    } catch(error) {
        console.log('error sending message ', error);
    }


  };

  return (
    <SectionWrapper name="Form">
      <form
        onSubmit={sendEmail}
        ref={formRef}
        className="grid grid-flow-row gap-4"
      >
        <div className="grid grid-flow-col gap-4">
          <label>
            First Name <br />
            <input
              type="text"
              name="firstName"
              required={true}
              placeholder="Name"
              className="border-2 p-2 font-semibold w-full focus:outline-none focus:ring-1 focus:ring-black"
            />
          </label>
          <label>
            Last Name <br />
            <input
              type="text"
              name="lastName"
              required={true}
              placeholder="Name"
              className="border-2 p-2 font-semibold w-full focus:outline-none focus:ring-1 focus:ring-black"
            />
          </label>
        </div>

        <label>
          Email <br />
          <input
            type="email"
            name="email"
            required={true}
            placeholder="Email"
            autoComplete="email"
            className="border-2 p-2 font-semibold w-full focus:outline-none focus:ring-1 focus:ring-black"
          />
        </label>
        <label>
          Message <br />
          <textarea
            name="message"
            required={true}
            placeholder="Message"
            rows={6}
            cols={40}
            className="border-2 resize-none p-2 w-full font-semibold focus:outline-none focus:ring-1 focus:ring-black"
          ></textarea>
        </label>
        <button
          type="submit"
          className="border-2 p-2 mt-4 rounded-xl hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-black"
        >
          Send
        </button>
      </form>
    </SectionWrapper>
  );
}
