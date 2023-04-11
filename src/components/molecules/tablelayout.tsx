import React from 'react';

const Table: React.FC = () => {
  return (
    <div className="relative">
      <img className="absolute top-0 left-0 h-[70vh] pb-12 w-full" src="/abouttablevectors.svg" alt="Table border" />
      <table className="relative mx-auto">
        {/* <thead>
          <tr>
            <th className="w-1/4 py-4 px-4">Name</th>
          </tr>
        </thead> */}
        <tbody>
        <tr>
            <td className="py-8 px-8 text-8xl font-abandoned text-black relative z-10">WORK</td>
       
          </tr>
          <tr>
            <td className="py-8 px-2 text-8xl  font-abandoned text-black relative z-10">RESOURCES</td>
       
          </tr>
          <tr>
            <td className="py-4 px-4 text-8xl  font-abandoned text-black relative z-10">SOLUTIONS</td>
         
          </tr>
          <tr>
            <td className="py-12 px-4 text-8xl font-abandoned text-black relative z-10">CONTACT</td>
         
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
