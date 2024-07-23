import SectionWrapper from "./SectionWrapper";
import { useRef, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { sendEmail } from "../utils/sendEmail";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await sendEmail(formRef);
    setIsLoading(false);
    alert("message sent");
  }

  return (
    <SectionWrapper name="Form">
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="grid grid-flow-row gap-y-8"
      >
        <div className="grid lg:grid-flow-col gap-4">
          <label>
            {/* First Name <br /> */}
            <input
              type="text"
              name="firstName"
              required={true}
              placeholder="firstName"
              className="text-xl font-mono rounded-lg border border-black dark:border-gray-400 p-2 w-full focus:outline-none focus:ring-1 focus:ring-black dark:bg-transparent dark:focus:bg-transparent"
            />
          </label>
          <label>
            {/* Last Name <br /> */}
            <input
              type="text"
              name="lastName"
              required={true}
              placeholder="lastName"
              className="text-xl font-mono rounded-lg border border-black dark:border-gray-400 p-2 w-full focus:outline-none focus:ring-1 focus:ring-black dark:bg-transparent dark:focus:bg-transparent"
            />
          </label>
        </div>

        <label>
          {/* Email <br /> */}
          <input
            type="email"
            name="email"
            required={true}
            placeholder="Email"
            autoComplete="email"
            className="text-xl font-mono rounded-lg border border-black dark:border-gray-400 p-2 w-full focus:outline-none focus:ring-1 focus:ring-black dark:bg-transparent dark:focus:bg-transparent"
          />
        </label>
        <label>
          {/* Message <br /> */}
          <textarea
            name="message"
            required={true}
            placeholder="Message"
            rows={6}
            cols={40}
            className="text-xl font-mono rounded-lg border border-black dark:border-gray-400 resize-none p-2 w-full focus:outline-none focus:ring-1 focus:ring-black dark:bg-transparent"
          ></textarea>
        </label>

        {!isLoading ? (
          <button
            type="submit"
            className="hover:bg-black hover:text-white transition-all border-2 border-black p-2 mt-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-black dark:bg-transparent dark:hover:bg-white dark:hover:text-black dark:border-white"
          >
            Send
          </button>
        ) : (
          <button
            disabled
            type="submit"
            className="border-2 border-black  p-2 mt-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-black grid place-content-center dark:bg-transparent dark:hover:bg-white dark:hover:text-black dark:border-white"
          >
            <ImSpinner2 className="animate-spin" size="1.55em" />
          </button>
        )}
      </form>
    </SectionWrapper>
  );
}
