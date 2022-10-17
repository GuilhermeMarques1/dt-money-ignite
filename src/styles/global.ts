import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root { //Variáveis do css para definir cores:
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
    --background: #f0f2f5;
  }

  //Tamanho de fonte da aplicação padrão vem como 16px, funciona muito bem para Desktop. Porém para outros dispostivos pode não ser a melhor opção.
  html {
    @media (max-width: 1080px) { //Para uma tela até 1080px de largura o font-size será diminuido para 15px
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) { //Para uma tela até 720px de largura o font-size será diminuido para 14px 
      font-size: 87.5%; //14px
    }
  }
  /* Por que diminuir a fonte? Primeiro que para dispositivos menores, faz senido ter uma fonte menor. 
    Segundo: vamos utilizar daqui pra frente uma medida no CSS chamada REM, e 1REM = Tamanho do font-size da página. Dessa forma se o font-size é diminuido toda aplicação vai se diminuir tbm, vai adaptar a interface.
    Terceiro: ao utilizar % , porque caso o usuário tenha alguma configuração no computador ou celular para mudar a fonte, o percentual vai adequar a preferẽncia do usuário.
  */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;  //fontes mais nítidas e detalhadas
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1 , h2 , h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;