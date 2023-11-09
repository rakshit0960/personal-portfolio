import SectionWrapper from "./SectionWrapper";
import { FormEventHandler, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {ImSpinner2 } from "react-icons/im";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const sendEmail:FormEventHandler = async function(e) {
      e.preventDefault();
      if (formRef.current == null) return;

      setIsLoading(true);
      try {
        const response = await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        if (response.status != 200) throw new Error();
        alert('message sent')
      } catch (error) {
        console.log("error sending message ", error);
      } finally {
        setIsLoading(false);
      }
      
    };

  return (
    <SectionWrapper name="Form">
      <form
        onSubmit={sendEmail}
        ref={formRef}
        className="grid grid-flow-row gap-y-8"
      >
        <div className="grid lg:grid-flow-col gap-4">
          <label>
            First Name <br />
            <input
              type="text"
              name="firstName"
              required={true}
              placeholder="firstName"
              className="border-2 p-2 font-semibold w-full focus:outline-none focus:ring-1 focus:ring-black dark:bg-transparent dark:focus:bg-transparent"
            />
          </label>
          <label>
            Last Name <br />
            <input
              type="text"
              name="lastName"
              required={true}
              placeholder="lastName"
              className="border-2 p-2 font-semibold w-full focus:outline-none focus:ring-1 focus:ring-black dark:bg-transparent dark:focus:bg-transparent"
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
            className="border-2 p-2 font-semibold w-full focus:outline-none focus:ring-1 focus:ring-black dark:bg-transparent dark:focus:bg-transparent"
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
            className="border-2 resize-none p-2 w-full font-semibold focus:outline-none focus:ring-1 focus:ring-black dark:bg-transparent"
          ></textarea>
        </label>

        {!isLoading ? (
          <button
            type="submit"
            className="border-2 p-2 mt-4 rounded-xl hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-black dark:bg-transparent dark:hover:bg-white dark:hover:text-black dark:border-white"
          >
            Send
          </button>
        ) : (
          <button
            disabled
            type="submit"
            className="border-2 p-2 mt-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-black grid place-content-center dark:bg-transparent dark:hover:bg-white dark:hover:text-black dark:border-white"
          >
            <ImSpinner2 className="animate-spin" size='1.55em'/>
          </button>
        )}

      </form>
    </SectionWrapper>
  );
}
