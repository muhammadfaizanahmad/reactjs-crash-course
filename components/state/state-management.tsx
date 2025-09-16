"use client";

// STRING

// import { useState } from "react";

// export default function StateManagement() {
//   const [name, setName] = useState<string>("");

//   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setName(event.target.value);
//   }
//   return (
//     <div>
//       <input
//         className="border-2 p-2 border-black"
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={handleChange}
//       />

//       <p>Your name is: {name}</p>
//     </div>
//   );
// }

// NUMBER

// import { useState } from "react";

// export default function SateManagement() {
//   const [age, setAge] = useState<number>(20);

//   function handleAge() {
//     setAge(age + 1);
//   }
//   return (
//     <div>
//       <p>Your age is: {age}</p>
//       <button onClick={handleAge}>Increase Age</button>
//     </div>
//   );
// }

// BOOLEAN

// import { useState } from "react";

// export default function StateManagement() {
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   function handleLoading() {
//     setIsLoading(!isLoading);
//   }

//   return (
//     <div>
//       <p>{isLoading ? "Loading..." : "Not Loading"}</p>
//       <button onClick={handleLoading}>
//         {isLoading ? "Stop Loading" : "Start Loading"}
//       </button>
//     </div>
//   );
// }

// ARRAY

// import { useState } from "react";

// export default function StateManagement() {
//   const [items, setItems] = useState<string[]>([]);

//   function addItem() {
//     setItems([...items, `Items ${items.length + 1}`]);
//   }
//   return (
//     <div>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//       <button onClick={addItem}>Add Item</button>
//     </div>
//   );
// }

// OBJECT

// import { useState } from "react";

// interface StateManagementProps {
//   name: string;
//   age: number;
// }

// export default function StateManagement() {
//   const [user, setUser] = useState<StateManagementProps>({ name: "", age: 0 });

//   function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setUser({ ...user, name: event.target.value });
//   }

//   function handleAgeChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setUser({ ...user, age: +event.target.value });
//   }

//   return (
//     <div className="space-x-2">
//       <input
//         className="p-2 border-2 border-gray-600 rounded-lg"
//         type="text"
//         placeholder="Enter your name"
//         value={user.name}
//         onChange={handleNameChange}
//       />
//       <input
//         className="p-2 border-2 border-gray-600 rounded-lg"
//         type="text"
//         placeholder="Enter your age"
//         value={user.age}
//         onChange={handleAgeChange}
//       />
//       <p>
//         Name: {user.name} - Age: {user.age}
//       </p>
//     </div>
//   );
// }
