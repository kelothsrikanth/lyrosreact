// import { useState, createContext, useContext } from "react";
// import Childa from "./Childa";
// export const UserContext = createContext();
// export default function App13a() {
//   const [user, setUser] = useState("John");
//   return (
//     <>
//       <UserContext.Provider value={{ user, setUser }}>
//         <h2>Hello {user} from App13 component</h2>
//         <Childa />
//       </UserContext.Provider>
//     </>
//   );
// }


import React from "react";
import App19child from "./App19child";
export default function App19() {
  return (
    <div>
      <App19child>
        <h1>Hello World</h1>
        <p>This is a paragraph</p>
      </App19child>
    </div>
  );
}