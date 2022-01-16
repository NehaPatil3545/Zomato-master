import React from "react";
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";

function HomeLayout({ children }) {
  return (
    <div>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto px-4 lg:px-20">{children}</div>
    </div>
  );
}

export default HomeLayout;






// //rfce
// import React from "react";
// //import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import FoodTab from "../components/FoodTab";

// function HomeLayout({ props, children }) {
//   return (
//     <div>
//     <Navbar/>
//     <FoodTab/>
      
//       <div className="container mx-auto px-4 lg:px-20">{children}</div> 
//     </div>
//   );
// }

// export default HomeLayout;