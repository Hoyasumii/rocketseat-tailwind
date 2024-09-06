"use client";

import { createContext } from "react";

interface ContextType {
  active: boolean;
  toggleActive: () => void;
}

export const Context = createContext<ContextType | undefined>(
  undefined
);
