"use client";

import { useState } from "react";

export default function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div>
      <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
      <button
        className="p-2 border-gray-100 border-2"
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
