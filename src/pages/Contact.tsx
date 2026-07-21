import ContactForm from '../components/forms/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#FFFFF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl text-[#2C2C2C] mb-4">
            Contactez-nous
          </h1>
          <p className="font-cormorant text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Parlons de votre projet et créons ensemble l'événement de vos rêves
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl border border-[#F7E7CE]/30 text-center">
            <Phone className="w-8 h-8 text-[#CFB53B] mx-auto mb-4" />
            <h3 className="font-playfair text-xl text-[#2C2C2C] mb-2">Téléphone</h3>
            <p className="font-cormorant text-lg text-[#2C2C2C]/70">+225 07 07 07 07 07</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#F7E7CE]/30 text-center">
            <Mail className="w-8 h-8 text-[#CFB53B] mx-auto mb-4" />
            <h3 className="font-playfair text-xl text-[#2C2C2C] mb-2">Email</h3>
            <p className="font-cormorant text-lg text-[#2C2C2C]/70">contact@chicnuptial.ci</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#F7E7CE]/30 text-center">
            <MapPin className="w-8 h-8 text-[#CFB53B] mx-auto mb-4" />
            <h3 className="font-playfair text-xl text-[#2C2C2C] mb-2">Adresse</h3>
            <p className="font-cormorant text-lg text-[#2C2C2C]/70">Cocody, Abidjan</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#F7E7CE]/30 shadow-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;