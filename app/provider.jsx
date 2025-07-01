"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { UserDetailContext } from "@/context/UserDetailContext";

function Provider({ children }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = React.useState(null);

  useEffect(() => {
    user && CreateNewUser();
  }, [user]);

  const CreateNewUser = async () => {
    const result = await axios.post("/api/user", {
      name: user?.fullName,
      email: user?.primaryEmailAddress?.emailAddress,
    });
    setUserDetail(result.data);
  };
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
}

export default Provider;
