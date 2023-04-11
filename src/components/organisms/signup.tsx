import React from "react";

const SignUpSection: React.FC = () => {
  return (
    <section className="bg-none py-12 px-4">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-6xl font-extrabold text-gray-900 mb-4 font-abandoned">
            GET ADGUIN <br />
            UPDATES <br />
            IN YOUR EMAIL
            </h2>
          </div>
          <div className=" p-6">
            <div className="mb-4">
              <h3 className="text-lg font-black text-gray-900 mb-2 font-abandoned">
              SIGN UP AND NEVER MISS OUT WHAT WE’RE UP TO
              </h3>
            </div>
            <form>
              <div className="mb-4">
            
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full border-violet-700 text-black text-2xl border-b p-3 font-miriam bg-gray-100 focus:outline-none focus:border-gray-600"
                />
              </div>
              <div className="flex items-center">
                <input 
                className="inline-block w-1/2 mr-1 text-black border-violet-700 text-2xl border-b p-3 font-miriam  bg-gray-100 focus:outline-none focus:border-gray-600" 
                type="text" 
                name="first-name"
                id="first-name"
                placeholder="First Name" />

                <input 
                className="ml-1 inline-block w-1/2 text-2xl  text-black  border-violet-700 border-b p-3 font-miriam  bg-gray-100 focus:outline-none focus:border-gray-600"
                name="last-name"
                id="last-name" 
                type="text" 
                placeholder="Last Name" />
                

                <button className="inline-block h-14 ml-4 bg-violet-700 text-2xl font-miriam w-1/3 hover:bg-violet-500 text-white font-light rounded">
                Sign Up
                </button>

                </div>
              {/* <div className="text-center">
                <button
                  type="submit"
                  className="py-3 px-6 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                  
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;