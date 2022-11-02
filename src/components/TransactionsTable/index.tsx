import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number,
  title: string,
  type: string, 
  amount: number,
  category: string,
  createAt: string,
}

export function TransactionsTable() {
  // useEffect(() => {
  //   fetch("http:localhost:3000/api/transactions")
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }, []);
  
  const [transactions, setTransactions] = useState<Transaction[]>([]);


  useEffect(() => {
    api.get("/transactions")
      .then(response => setTransactions(response.data.transactions));
      // .then(response => console.log(response.data.transactions));
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createAt}</td>
              </tr>
            );
          })}
        </tbody>

        {/* <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>18/10/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$840,00</td>
            <td>Casa</td>
            <td>10/10/2022</td>
          </tr>
          <tr>
            <td>Ajuda trabalho de TI</td>
            <td className="deposit">R$150</td>
            <td>Desenvolvimento</td>
            <td>16/10/2022</td>
          </tr>
        </tbody> */}
      </table>
    </Container>
  );
}