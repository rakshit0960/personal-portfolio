import emailjs from "@emailjs/browser";

export const sendEmail = async function (formRef: React.RefObject<HTMLFormElement>) {
    if (formRef.current == null) return;

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {

        const response = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
        if (response.status != 200) throw new Error();
        
    } catch (error) {
        console.log("error sending message ", error);
    }
};