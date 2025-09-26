import React from "react";
import { MapPin, Clock, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="w-full px-6 lg:px-16 py-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* LEFT SIDE */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Get Closer <span className="text-green-700">With Us</span>
          </h2>
          <p className="text-gray-500 mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
            tempor incididunt ut labore dolore eiusmod tempor incididunt.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Location */}
            <div className="bg-white shadow-md rounded-lg p-5 flex items-start gap-3">
              <MapPin className="text-green-700 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-500 text-sm">Puputan Renon, DPS</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white shadow-md rounded-lg p-5 flex items-start gap-3">
              <Clock className="text-green-700 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">Opening Hours</h4>
                <p className="text-gray-500 text-sm">9AM – 8PM</p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white shadow-md rounded-lg p-5 flex items-start gap-3">
              <Phone className="text-green-700 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">Contact</h4>
                <p className="text-gray-500 text-sm">+62 123-432-543</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white shadow-md rounded-lg p-5 flex items-start gap-3">
              <Mail className="text-green-700 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-500 text-sm">Credigi@mail.com</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <p className="font-semibold mb-3">Social Media :</p>
            <div className="flex gap-3">
              <a href="#" className="bg-green-700 text-white p-2 rounded-md hover:bg-green-800">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-green-700 text-white p-2 rounded-md hover:bg-green-800">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-green-700 text-white p-2 rounded-md hover:bg-green-800">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-green-700 text-white p-2 rounded-md hover:bg-green-800">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex-1 bg-white">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name*</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-green-700"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email*</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-green-700"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-green-700"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone*</label>
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-green-700"
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Message*</label>
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-green-700"
              ></textarea>
            </div>

            {/* Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-green-700 text-white font-medium py-3 rounded-md hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
