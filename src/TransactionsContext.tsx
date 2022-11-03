import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number,
  title: string,
  type: string, 
  amount: number,
  category: string,
  createAt: string,
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("/transactions")
      .then(response => setTransactions(response.data.transactions));
      // .then(response => console.log(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      { children }
    </TransactionsContext.Provider>
  );
}
