import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="w-full h-screen flex justify-center items-center paddingX flex-col gap-8">
      <h2 className="text-[8vw] max-sm:text-[12vw] font-extrabold">CONTACTO</h2>
      <ContactForm />
    </section>
  )
};

export default Contact;