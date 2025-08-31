
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
              <span className="text-primary fa fa-globe">
               
              </span>
              <p className="text-gray-600">
                <strong>Address:</strong> {contact.address}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-primary fa fa-phone">
               
              </span>
              <p className="text-gray-600">
                <strong>Phone:</strong> {contact.phone}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-primary fa fa-envelope">
                
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
