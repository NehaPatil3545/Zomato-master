import React from "react";
import { Route } from "react-router-dom";

// layout
import CheckoutLayout from "../layouts/Checkout.layout";

function CheckoutLayoutHoc({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <CheckoutLayout>
            <Component {...props} />
          </CheckoutLayout>
        )}
      />
    </>
  );
}

export default CheckoutLayoutHoc;






// import React from "react";
// import { Route , Routes } from "react-router-dom";

// // layout
// import CheckoutLayout from "../layouts/Checkout.layout";

// function CheckoutLayoutHoc({ component: Component, path, ...rest }) {
//   return (
//     <>
//       <Routes>
//         <Route 
//           {...rest}
//             path={path}
//             element={
//               <CheckoutLayout>
//             <Component />
//           </CheckoutLayout>   
//           }
//       />
//       </Routes>
//     </>
//   );
// }


// export default CheckoutLayoutHoc;