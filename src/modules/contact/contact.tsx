"use client";

 
import Breadcrumb from "@/app/components/shared/BreadCrumb";
import ContactForm from "@/app/components/shared/contact/contactForm";
import ContactInfo from "@/app/components/shared/contact/contactInfo";
export default function ContactPage() {
  return (
    <div>
      <Breadcrumb featuredImage="/images/breadcrumb.avif" />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="container mx-auto lg:mt-0 mt-6 px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <ContactForm />

            {/* Office Details */}
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
