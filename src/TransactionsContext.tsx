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

// interface TransactionInput {
//   title: string,
//   type: string,
//   amount: number,
//   category: string,
// }

// type TransactionInput = Pick<Transaction, 'title' | 'type' | 'amount' | 'category'>;

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>


interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => void,
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("/transactions")
      .then(response => setTransactions(response.data.transactions));
      // .then(response => console.log(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      { children }
    </TransactionsContext.Provider>
  );
}
