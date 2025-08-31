
 import { ClipLoader } from "react-spinners";
import Image from "next/image";
import{contactAddress} from '@/utils/static'

import EmptyState from "@/app/components/shared/EmptyState";
import { useState } from "react";
const ContactInfo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);



  return (
    <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center mb-10 md:mb-0">
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
        Our Office
      </h2>
      {isLoading && (
        <div className="flex mt-20 mx-auto md:mt-10 flex-col items-center justify-center">
          <ClipLoader size={50} color="#e2bd7e" />
        </div>
      )}
      {
    
        contactAddress.map((contact)=>(
            <div key={contact.phone} className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16.88 3.549A9.956 9.956 0 0112 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10c0-1.657-.402-3.22-1.12-4.599M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <p className="text-gray-600">
                <strong>Address:</strong> {contact.address}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10l1.664 1.664a4.5 4.5 0 006.364 0L12 10m0 0l1.664 1.664a4.5 4.5 0 006.364 0L21 10m-9 0v10"
                  />
                </svg>
              </span>
              <p className="text-gray-600">
                <strong>Phone:</strong> {contact.phone}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12H8m0 0l4-4m-4 4l4 4"
                  />
                </svg>
              </span>
              <p className="text-gray-600">
                <strong>Email:</strong> {contact.email}
              </p>
            </div>
          

          
          </div>
        ))

         
     
        }
      {contactAddress.length< 1 && (
        <EmptyState description="Unable to load contact us information at the moment" />
      )}
    </div>
  );
};

export default ContactInfo;
