// "use client";

// import { useEffect, useState } from "react";

// interface UsersProps {
//   id: number;
//   name: string;
//   email: string;
// }

// export default function UseEffect() {
//   const [users, setUsers] = useState<UsersProps[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [cancel, setCancel] = useState<boolean>(false);

//   useEffect(() => {
//     const isMounted = true; 

//     const fetchUsers = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok!");
//         }
//         const data: UsersProps[] = await response.json();

//         if (isMounted && !cancel) {
//           setUsers(data);
//         }
//       } catch (err) {
//         if (!isMounted && !cancel) {
//           setError(
//             err instanceof Error ? err.message : "Something went wrong!"
//           );
//         }
//       } finally {
//         if (!isMounted && !cancel) {
//           setLoading(false);
//         }
//       }
//     };
//     fetchUsers();

//     return () => {
//       setUsers([]);
//       setLoading(false);
//       setError(null);
//     };
//   }, [cancel]);

//   console.log(users);

//   const handleCancel = () => {
//     setCancel(true);
//   };

//   if (loading) {
//     return (
//       <div>
//         <div>Loading...</div>
//         <button onClick={handleCancel}>Cancel Fetching</button>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div>
//         <div>Error: {error}</div>
//         <button onClick={handleCancel}>Cancel Fetching</button>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.email}
//           </li>
//         ))}
//         <button onClick={handleCancel}>Cancel Fetching</button>
//       </ul>
//     </div>
//   );
// }
