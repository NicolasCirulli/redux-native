import React from "react";
import useUser from "../store/hooks/useUserActions";
import { Redirect } from "expo-router";

interface WithUserProps {
  children: JSX.Element;
}

export default function WithUser({ children }: WithUserProps) {
  const { user } = useUser();

  if (!user.id) {
    return <Redirect href={"/login"} />;
  }
  return <>{children}</>;
}
