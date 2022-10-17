import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header';
import { Dashboard } from "./components/Dashboard";

// import styled from "styled-components";
// const Title = styled.h1`
//   font-size: 64px;
//   color: red;
// `;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
