import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

// import styled from "styled-components";
// const Title = styled.h1`
//   font-size: 64px;
//   color: red;
// `;

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }


  return (
    <>
      <GlobalStyle />

      <Modal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
    </>
  );
}

export default App;
