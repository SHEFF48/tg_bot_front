// UserContext.tsx
"use client";
import { getUserId } from "@/lib/utils";
import React, { createContext, useContext, useState, useEffect } from "react";

interface UserContextType {
  userId: string | null;
  setUserId: (userId: string) => void;
}

const UserContext = createContext<UserContextType>({
  userId: null,
  setUserId: () => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Получаем userId из глобального объекта window
    const userId = getUserId() || "5928954497";
    if (userId) {
      setUserId(userId);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};
