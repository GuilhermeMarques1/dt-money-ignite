import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

export function Summary() {
  const data = useContext(TransactionsContext);

  console.log(" summary: ", data);

  return(
    <Container>
      {/* <TransactionsContext.Consumer>
        {
          (data) => {
            console.log(data);

            return <p>Hello, World!</p>
          }
        }
      </TransactionsContext.Consumer> */}

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="income icon" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="outcome icon" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}