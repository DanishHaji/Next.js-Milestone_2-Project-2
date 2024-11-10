import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
}
