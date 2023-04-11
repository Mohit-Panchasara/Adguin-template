import React from "react";
import Table from "@/components/molecules/tablelayout";
import Navbar from "@/components/organisms/navbar2";
import SignUpSection from "@/components/organisms/signup";


const AboutUsPage = () => {
  return (
    
    
    <div className="bg-gray-100">
      {/* First row */}
      <Navbar />
      <div
        className="bg-cover bg-center flex flex-col justify-center"
        style={{ backgroundImage: "url('/aboutbg.svg')" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 pt-40 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-center -mx-4">
            {/* First column */}
            <div className="w-[full] md:w-1/2 px-4 mb-8">
            <Table />
            
            </div>
            {/* Second column */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img src="/penguin.svg" alt="Company Logo" />
            </div>
          </div>
        </div>
        
      <SignUpSection />
      </div>
      {/* Second row */}

       
   
</div>
  );
};
export default AboutUsPage;
