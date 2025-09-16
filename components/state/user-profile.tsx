"use client";

import { useState } from "react";

interface UserProfileProps {
  name: string;
  age: number;
}

export default function UserProfile() {
  const [user, setUser] = useState<UserProfileProps>({
    name: "Abdul Rahman",
    age: 19,
  });

  const updateAge = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button
        className="p-2 rounded-lg border-2 border-black"
        onClick={updateAge}
      >
        Make me one year older!
      </button>
    </div>
  );
}
