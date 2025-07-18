import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 flex flex-col max-w-screen bg-clay-light-hover gap-10">
      <div className="max-w-4xl mx-auto">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ContactInfo />
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
