import { Mail, Phone, MapPin } from "lucide-react";

const infoItems = [
  {
    icon: <Mail className="h-6 w-6 text-green-600" />,
    label: "Email",
    value: "claylableducation@gmail.com",
  },
  {
    icon: <Phone className="h-6 w-6 text-green-600" />,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: <MapPin className="h-6 w-6 text-green-600" />,
    label: "Address",
    value: (
      <>
        525 First floor Sector 9–A Gurugram, Haryana 122001 India
      </>
    ),
  },
];

const ContactInfo = () => (
  <div className="space-y-6">
    {infoItems.map((item, i) => (
      <div key={i} className="flex items-start space-x-4">
        <div className="bg-green-100 p-3 rounded-lg">{item.icon}</div>
        <div>
          <h3 className="font-semibold text-foreground">{item.label}</h3>
          <p className="text-muted-foreground">{item.value}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ContactInfo;
