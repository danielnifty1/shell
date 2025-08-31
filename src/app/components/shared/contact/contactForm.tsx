import React, { useRef, useState } from "react";
import Input from "../Input";
import Button from "@/app/components/shared/Button";

import { toast } from "react-toastify";

import { Loader2 } from "lucide-react";


const ContactForm: React.FC = () => {

      const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

//   handle form
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
      // Array of input field configurations
  const inputFields = [
    {
      id: "name",
      name: "name",
      type: "text",
      label: "Name",
      placeholder: "Enter your name",
      value: formData.name,
      required: true,
    },
    {
      id: "email",
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      value: formData.email,
      required: true,
    },
    {
      id: "message",
      name: "message",
      type: "textarea",
      label: "Message",
      placeholder: "Enter your message",
      value: formData.message,
      required: true,
    },
  ];

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
toast.success("sent")
}

    return(
        <>
        <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {inputFields.map((field) => (
            <Input onChange={handleChange} key={field?.id} {...field} />
          ))}

          {/* Submit Button */}
          <div>
            <Button
              type="submit"
              className="cursor-pointer w-full bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              Send Message <span className="fa fa-spin fa-spinner"></span>
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="animate-spin h-4 w-4 mr-2" />
                </div>
              ) : null}
            </Button>
          </div>
        </form>
      </div>
        </>
    )

}

export default ContactForm;