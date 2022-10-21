===================================================================================================

# CHAPTER I

===================================================================================================

# 1º Class (Criando a estrutura do projeto)
- 1° step: yarn init -y or npm init -y (cria o package.json - informações principais do projeto) => esse comando é para iniciar qualquer projeto que utiliza JS. Cria o package.json que guarda informações principais do projeto.
- 2º step: yarn add react (biblioteca)
  obs: pasta node_modules - contém os códigos das dependências da aplicação
- 3º step: yarn add react-dom (para trabalhar com react na web - DOM arvore de elementos da aplicação) - permite que o react se comunique com a árvore de elementos do HTML. Não vem diretamente com a biblioteca react, porque o react pode ser utilizado para mobile ou para interfaces de outro ambiente que não seja web.
- 4º step: pasta src (nosso código)
- pasta public (arquivos/assets públicos onde ficam index.html, favicon, robot.txt(dizer ao google quais páginas ele deve indexar) - arquivos que devem ser acessados do meio externo). O próprio index.html fica na pasta public, esse index que carrega o "script" do JS que gera todos os estilos.

# 2º Class (configurando o babel)
- Babel (ferramenta/biblioteca): serve para converter o código para que o browser e todo ambiente da aplicação consiga entender todo o código, por exemplo a própria escrita do HTML dentro do JS, os navegadores não entendem, o que o Babel faz é converter esse código para o Navegador entender. Além disso, o JS tem muitas atualizações e o Babel serve para adaptar o JS para versões que a maior parte dos navegadores entenda.
- yarn add @babel/core @babel/cli @babel/preset-env -D -> (-D) (dependencia de desenvolvimento, quer dizer que ela nao vai para produção, vou converter o código antes dela ir para produção).
- criar arquivo babel.config.js
- @babel/core - principal biblioteca do babel
- @babel/cli - para conseguir manipular o babel pelo terminal (linha de comando)
- @babel/preset-env - extensão do babel para identificar o ambiente que a aplicação esta sendo executada para executar o código da melhor maneira possível. Por exemplo no browser é uma quantidade x, já se fosse para executar no node o número de conversões seria menor pois o node consegue entender mais funcionalidades do JS.
- Para ver o Babel em funcionamento, criar um código JS por exemplo e rodar o comandar yarn babel src/index.js ("caminho do arquivo que vc quer converter") --out-file dist/bundle.js ("local onde vc quer gerar o arquivo")
- pasta src criar o index.js ou index.jsx
- yarn add @babel/preset-react -D - para que o babel consiga entender o código react (HTML dentro do JS (JSX))

# 3º Class (Configurando o Webpack)
- webpack: dentro de arquivos JS podemos importar outros arquivos .css, .png, .jpg, .sass, o que o webpack faz é estipular configurações (loaders) que ensinam a aplicação para como tratar esses tipos de arquivos. O webpack converte esses arquivos para extensões que o browser entende (.js, .css, .jpg, .png)
- yarn add webpack webpack-cli webpack-dev-server -D
- criar o arquivo de configuração (webpack.config.js) 
- yarn add babel-loader
- para testar criar um arquivo app.jsx em src e importar ele em index.jsx, então usar o comando yarn webpack

# 4º Class (Estrutura do ReactJS)
- O React cria toda interface através do JavaScript. Então o body do html não tera todas divs ... Em geral dentro do index.html terá só a div com id=root
- Para entender isso: No index.html da pasta public terá apenas uma div root, no arquivo index.js da src importar o render do react-dom e passar dois parâmetros:
render(<h1>hello World</h1>, document.getElementById('root')); isso renderiza o primeiro parâmetro no segundo elemento. E no index.html colocar a tag <script src=../dist/bundle.js></script> importa o bundle e assim já estará funcionando o html carrega o script do babel que gera o html da página. E rodar o yarn webpack
- o webpack tem dois modos para rodar production ou development, passar no webpack.config.js mode: "development"

# 5º Class (Servindo html estático)
- A fim de melhorar a estrutura do código, e não precisarmos estar sempre referenciando dentro do index.html o caminho do script src='../dist/bundle.js' há um plugin do webpack que ele injeta o arquivo js no html sem se preocupar em criar a tag script
- yarn add html-webpack-plugin -D
- mudanças no webpack.config.js

# 6º Class (webpack dev server)
- webpack-dev-server biblioteca que observa alterações no código e cria o bundle automaticamente, sem a necessidade de rodar o yarn webpack toda vez.
- adicionar configuração do dev webpack-dev-server no webpack.config.js
- rodar yarn webpack serve --> projeto é executado no localhost e o webpack fica observando mudanças para gerar o bundle atualizado.

# 7º Class (Utilizando source maps)
- configurar o source maps - forma de vizualizar o código original da aplicação, mesmo com o bundle.js
- Para testar criar um erro proposital ==> throw new Error('Eita meu, tirei 5 :0')
- Se entrar na aplicação e tentar encontrar onde está o erro, vai ficar um embaralhado de código, para isso existe o source map, onde você consegue mudar a janela de vizualização do código no browser e ajuda identificar erros.
- configurar no webpack.config.js - campo devtool: 'eval-source-map'

# 8º Class (Ambient dev e produção)
- Adicionar a variável isDevelopment no webpack.config.js
- No JavaScript há as variáveis de ambiente usadas para configurar algo de acordo com o ambiente da aplicação.
- process.env.NODE_ENV --> variável bem comum utilizada para identificar ambiente de desenvolvimento e produção
- Para criar a variável de ambiente há duas formas, dentro do unix (Mac ou Linux) bastaria rodar o código definindo a variável e rodando o código: NODE_ENV=production yarn webpack.
- Porém isso não funciona no windows. Para isso instalamos outra dependência yarn add cross-env -D (serve para definir variáveis de ambiente independete do SO)
- Depois criar no package.json alguns scripts ==> "dev" e "build"
- scripts: {
  "dev": "webpack server",
  "build": "cross-env NODE_ENV=production webpack"
}

# 9º Class (Importando arquivos CSS)
- Configuração para importar arquivos css. Criar pasta styles e arquivo global.css
- Utilizando o React toda a parte de arquivos de css e imagens são importadas por dentro do JavaScript. Então eu poderia tentar importar o arquivo css em app.jsx. Se tiver sem a configuração do babel e do webpack, vai dar erro. O JS não entende o código CSS
- ir no arquivo webpack e criar uma nova rule para os arquivos css.
- yarn add style-loader css-loader -D
- colocar nova rule no webpack.config.js

# 10º Class (Utilizando SASS)
- SASS é um pré-processador CSS tem algumas funcionalidades a mais no CSS, como o encadeamento.
- yarn add sass-loader -D
- yarn add node-sass -D
- adicionar regra no webpack para com o sass-loader e mudar os arquivos css para scss

# 11º Class (Primeiro Componente React)
- Componentes no React são como as tags no HTML. No React tudo são componentes
- São formas de encapsular código dentro de um único elemento, e esse elemento tem sua própria funcionalidade, prória estrutura e estilização. Componentes são formas de organizar nossa aplicação e dividir o app em vários "pedacinhos"
- Componente: uma função com o nome que começa com a primeira letra maiúscula e devolve um HTML.Exemplo: export function Name() { return <h1> Hello, World! <h1> };
- Quando um arquivo é um componente começar ele com letra maiúscula e 1 componente por arquivo (convenção)
- criar pasta components
- Os componentes permitem fazer transição de HTML e JS com muita facilidade declarar uma variável JS e colocar ela dentro de um HTML <p>{ varName }<p>

# 12º Class (Propriedades no React)
- Há 3 conceitos principais no React: COMPONENTE, PROPRIEDADE e ESTADO
- Propriedades: funcionam como atributos em tags HTML, informações variáveis que podemos passar para um componente funcionar de forma diferente.
- Conceito de propriedade consiste no fato de mandar uma informação de um componente pai para um componente filho (exemplo o RepositoryList é pai do RepositoryItem)
- No repositório filho podemos acessar as informações apartir do argumento da função, só recebemos um argumento com nome props. No repositório filho podemos acessar as informações a partir de props.blablabla

# 13º Class (Estado do Componente)
- Criar o componente contador com um button e um <h2>
- Colocar pra exibir ele no App.jsx. return ( <component1/> <counter/> ) vai gerar erro, no react sempre que houver dois componentes é necessário que tenha um componente por volta deles. Poderia colocar uma div return( <div> <component1> <counter> </div> ) 
- No react existe o fragment <></> é uma tag do html sem nenhum conteúdo/nome. Não produz nada visual no html
- criar function increment no componente counter
- A primeira ideia que vem para criar um contador em tela com o javaScript seria definindo uma variável que é incrementada a cada clique no botão e essa variável seria colocada em algum elemento do css. Porém isso não funcionaria, pois o React não fica monitorando se variáveis tem seus valores alterados para então ele renderizar o conteúdo do componente novamente. Isso não seria muito perfomático.
- Para isso o React desenvolveu um novo conceito: Estado
- ESTADO em react são variáveis que ele vai monitorar e quando essas variáveis mudarem ai sim ele vai renderizar o conteúdo do componente de novo. Ou seja ele não precisa monitorar todas as variáveis do sistema apenas as de estado. E quando o estado é alterado ele renderiza o componente novamente.
- importa { useState } from 'react'    obs: funções do react que começam com use são os hooks
- const counter = useState() retorna duas coisas ==> counter[0] e counter[1]
- o melhor é pegar isso por destructuring const [counter, setCounter] = useState(0);
- A primeira é em si a variável e a segunda é a função que altera a primeira variável. setCounter(counter + 1)

# 14º Class (Imutabilidade no React)
 - Um conceito também muito utilizado em outras áreas da programação, como na programação funcional, é a imutabilidade.
 - Quando uma variável é imutável, quer dizer que ela não pode ter seu valor alterado, mas pode dar um novo valor a ela.
 - Por exemplo se temos um array users = ['guilherminho', 'guilherme123'] e depois decidimos fazer um user.push('guilherme1000'). Nesse momento eu estou alterando diretamente a variável. Em um contexto que existe a imutabilidade, nós não fazemos isso, nós criaríamos um novo array copiando o que já existe em users e adicionaria o novo usuário => newUser = [...users, 'guilherme1000']
 - A imutabilidade é um conceito aplicado ao estado do React, pois é mais fácil para o React monitorar um novo set do que comparar com a variável anterior
 - Por isso que o setCounter seta um novo valor para counter, criamos um novo counter ao invés de dar um counter+1 apenas. "Eu sempre crio um novo espaço na memória contendo a nova informação, do que alterar uma informação já salva na memória". o setCounter seta um novo valor, cria uma nova variável counter.
 - Ou seja, para o react é menos custoso entender que duas referências de objetos são diferentes e, por isso, houve uma alteração e ele deve renderizar um componente, do que comparar valores.

# 15º Class (Fast Refresh no Webpack)
  - Quando estamos utilizando o webpack dev server, ele atualiza todas mudanças, mas reinicializa todas as alterações para o total 0, então apesar de ser bom para observar as mudanças ele pode apresentar alguns "atrasos", como por exemplo uma mudança no código reiniciaria todas os Estados da aplicação (e.g. carrinho de um ecomerce com alguns objetos salvos no estado seriam reiniciados ao fazer alguma mudança no código)
  - Existe uma ferramenta do React chamada Fast Refresh, de forma que é possível alterar o código mas mantendo o estado dos componentes
  - Instalar https://github.com/pmmmwh/react-refresh-webpack-plugin - yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
  - Depois importar no webpackconfig e configurar o webpack plugin

# 16º Class (Estilização da listagem)
  - Adicionando estilização para listagem com scss.

# 17º Class (Utilizando o useEffect)
  - https://api.github.com/users/GuilhermeMarques1/repos
  - const [repositories, setRepositories] = useState([]) ==> o que fica dentro dos parenteses do useState(  ) significa a inicialização do elemento. E é importante sempre iniciar com uma variável do tipo que o estado vai assumir, por exemplo para o counter que seria um número iniciamos-o como 0 const [counter, setCounter] = useState(0), já o repostories que será um array começara com const [repositoires, setRepositories] = useState([]) um array vazio.
  - Começamos colocando repositories no estado, pois como vamos fazer uma chamada para api isso levará alguns poucos segundos. Ou seja quando formos exibir esse componente em tela pela primeira vez talvez os dados não terão acabado de carregar. Toda vez que a variável tiver essa troca de valor, seja por um clique no botão pelo usuário ou seja por uma chamada api, precisamos sempre ter essa variável no estado. 
  - useEffect ==> serve para disparar uma função quando algo acontecer na aplicação. Uma variável mudou, por exemplo.
  - Sintaxe do useEffect: useEffect(() => {}, []), no primeiro parâmetro passamos a função que será executada e o segundo parâmetro é quando queremos executar essa primeira função. Por exemplo se quisermos executar a primeira função toda vez que repositories mudar faríamos useEffect(() => {}, [repositories]). O segundo parâmetro é chamado dependências.
  - Se passarmos o array de dependências do useEffect vazio, a função será executada uma única vez assim que o componente for exibido em tela.
  - 2 erros, não deixar sem o segundo parâmetro nem que seja um array vazio (se não definirmos o segundo parâmetro o useEffect entrará num loop infinito). Alterar um valor dentro da função do useEffect e essa variável ser uma dependência (entrará em loop infinito).
  - Toda vez que formos fazer chamadas para api externas, utilizaremos useEffect.
  ex: useEffect(() => {
    fetch(https://api.github.com/users/GuilhermeMarques1/repos).then(response => response.json()).then(data => console.log(data)) 
  }, [])
  - Alterações em estados fazem todo componente recarregar

# 18º Class (Listando repositórios)
  - Quando temos informações armazenadas em um array e para cada item desse array queremos mostrar algo diferente. Devemos colocar {} indica código javascript dentro do HTML. E usamos o map, não utilizamos forEach pois apesar dele passar por todos itens do array ele não retorna nada, já o map retorna algo para cada item.
  - No caso do repositories queremos retornar para cada item o repositório que ele buscou na api do github. 
  <ul>
    {repositories.map(repository => {
      return <RepositoryItem key={repository.name} repository={repository}>
    })}
  </ul>
  - Para resolver o erro: Each child in a list should have a unique key prop. Nós precisamos utilizar a propriedade key que será uma variável que identifca a diferença entre cada item retornado do map. O React precisa de uma informação única, no caso não há repositórios que possuem nomes iguais, então usamos repository.name como key.

# 19º Class (Fundamentos do TypeScript):
  - TypeScript é um superset, conjunto de funcionalidades acima da linguagem JavaScript. 
  - O JavaScript tem uma tipagem dinâmica, o que acaba causando um problema em alguns momentos pois não sabemos os formatos de informações que podem chegar para nós em algumas funções, por exemplo.
  - O typescript permite adicionarmos tipagens, qual o formato das informações que estamos esperando receber ou retornar. 
  - Podemos definir um tipo por type ou interface, mas usamos mais o type.
  type User {   //primeira letra minúscula
    name: string,
    email: string,
    address: {
      city: string,
      state?: string,   //? - indica que não é obrigatório
    }
  }
  - o typescript é um static type checking, ele checa tipos durante o desenvolvimento. Até porque quando mandamos para produção, o código é convertido todo para javascript.

# 20º Class (TypeScript no ReactJS):
  - A partir de agora vamos começar a utilizar o typeScript nas aplicações em React, já que isso poderia nos dar um norte melhor.
  - Primeiro passo instalar o typescript como uma dependência de desenvolvimento: yarn add typescript -D
  - yarn tsc --init - comando para inicializar o typescript na aplicação, será criado o tsconfig.json
  - Alterar o tsconfig.json
  - yarn add @babel/preset-typescript -D  para o babel interpretar código typescript
  - configurar webpack.config.js e babel.config.js
  - mudar o nome do index.jsx para index.tsx isso vai gerar um erro, isso porque quando começamos a utilizar o typescript na aplicação algumas bibliotecas não incluem definições de tipo do typescript. E para isso, a grande maioria das vezes a comunidade cria a definição de tipos daquela biblioteca e para instalar por exemplo para o react-dom ficaria yarn add @types/react-dom -D
  
# 21º Class (Componentes com Typescript):
  - Definir uma interface dentro dos componentes para informar o tipo da propriedade que um determinado componente vai receber
  - Por exemplo dentro do RepositoryItem.tsx teremos uma interface RepositoryItemProps { repository: { name: string, description: string, html_url: string } }, lembrando que definimos apenas as informações que vamos utilizar na app, não tudo que é retornado.
  - Quando temos um estado dentro do React, principalmente se for um array ou um objeto, string ou número é mais fácil para o React entender, mas arrays e objetos é importante adicionar tipagem.
  - no RepositoryList.tsx definir uma interface para o const [repositories, setRepositories] = useState([]), seria o interface Repository { name: string, description: string, html_url: string }. Queremos informar que o estado será um array de Repository, mas como o estado pode mudar seu valor, há dentro do react uma funcionalidade que se chama generic (pode mudar), então para determinar o tipo de estado ficaria: const [repositories, setRepositories] = useState<Repository[]>([]);

# 22º Class (Utilizando React DevTools):
  - Extensão do navegador React devtools, muito boa para debugar e avisa páginas que avisam quais aplicações utilizam react.

# 23º Class (Finalização do Módulo)

# Desafio 01:
  - O setState do useState pode ser usado como callback e é uma boa opção, porque ao dar o set com um valor antigo, como a atualização é async, o valor pode estar desatualizado.
  - Na forma de callback: setTasks(oldState => [...oldState, newTask]);

# Desafio 02:
  - Fake API com json server (https://github.com/typicode/json-server)


===================================================================================================

# CHAPTER II

===================================================================================================

# 1º Class (Estrutura com create-react-app):
  - Create React App é basicamente uma estrutura pré-configurada de um projeto react para nos preocuparmos apenas com código e não toda configuração de webpack e Babel.
  - yarn create react-app my-app   |   Para rodar com o typescript:  yarn create react-app my-app --template typescript
  -  Limpar os arquivos que não são importantes da estrutura criada, em public deixar o só o index.html e em src deixar apenas o app.tsx, index.tsx e o react-app-env.d.ts
  - OBS: ao exportar componentes por exemplo dar preferência ao uso do export function App() {} do que do export default App; isso pois usando o export default quem define o nome do component é quem importa e não quem exporta. O que pode ser uma prática não tão boa.
  - Quando usamos o create react-app toda configuração de babel e webpack não fica na nossa aplicação, essa configuração fica dentro de um pacote instalado pelo create react-app chamado react-scripts, por isso os scripts de iniciar a aplicação, buildar, test e eject são iniciados a partir do react-script. Ou seja não temos acesso direto à essas configurações. Se você precisar modificar essas configurações, use o comando eject. Mas o problema disso é a necessidade de fazer atualizações de versões na mão.
  - Outro problema do create react-app é no package.json vir com todas dependencias sem separar as de desenvolvimento. Por isso precisamos mudar no package.json e criar a parte das devDependencies e deixar nas dependencies apenas o react, react-dom, react-scripts e web-vitals.

# 2º Class (Exportando assets do figma):
  - Export de assets do figma em svg para pasta assets em src
  - Fonts Awesome Icons plugin do figma para adquirir icons

# 3º Class (Instalando Styled Components):
  - CSS in JS, yarn add styled-components
  - styled-components é uma biblioteca para usar o css no javascript. yarn add @types/styled-components -D
  - styled-components é muito vantajoso por permitir o encadeamento assim como o SASS, mas também possibilita a não sobreposição de estilos, estilos ficam scoped. Fora o uso de variáveis e lógica.
  - A forma "normal" de se estilizar é colocando um className em uma tag html e depois importar um arquivo css. 
    e.g.
    com CSS: .title { font-size: 64px; color: red; }
    com styled-components: import styled from "styled-components" const Title = styled.h1` font-size: 64px color: red; `
  - Extensão para ver o styled-components: vscode-styled-components

# 4º Class (Estilização global):
  - Adicionar o createGlobalstyle, seguir padrão do projeto com configuração do globalstyle.ts

# 5º Class (Google Fonts): 
  - Utilizar google fonts, Adicionar os tamanhos que deseja na aplicação, por recomendação usar no react via link, ao invés do @import
  - colocar as tags <link > com rel=preconnect logo no começo do index, para fazer o pré-carregamento da fonte mais rápido.
  - definir as fontes no body, input, textarea, button { font-family: 'fonte que pegou no google', sans-serif; font-weight: 400  }  h1, h2, h3, h4, h5, h6 { font-weight: 600 }
  - 
# 6º Class (Header):
  - Criação do component de Header e seu estilo.
  - Estrutura de pasta para componentes
  - Uso de hover com filter.

# 7º Class (Summary):
  - Criação do component Dashboard e Summary e seus respectivos estilos

# 8º Class (Transaction Table):
  - Criação do component Transaction Table e seus respectivos estilos

# 9º Class (Criando Front-end sem back-end):
  - Quando se está criando um projeto front-end e ainda não se tem a rota do backend pronta para consumi-lá, a melhor opção é utilizar alguma ferramenta que simule o funcionamento dessa API.
  - Algumas ferramentas: json-server, miragejs, msw(Mock Service Worker)

# 10º Class (Configurando MirageJS):
  - Primeiro passo foi criar no componente que vai utilizar a API, a estrutura da chamada dessa API, no caso no TransactionsTable, defini o useEffect(() => { fetch("http://localhost:3000/api/transactions") }, []); 
  - yarn add miragejs
  - ir no index.tsx e importar o createServer: import { createServer } from "miragejs"
  - e criar as rotas e os retornos que serão utilizados:
  - createServer({
    routes() {
      this.namespace = 'api';

      this.get("/transactions", () => {
        return([
          {
            id: 1,
            title: "Transaction 1",
            amount: 400,
            createAt: new Date()
          }
        ])
      })
    }
  })

# 11º Class (Configurando cliente do Axios):
  - Configurando um cliente http para não precisar usar o fetch que é a api nativa de requisições http do próprio browser, assim como do node e do react...
  - E por que não utilizar o fetch? 
  - primeiro porque para usar o fetch precisamos colocar sempre todo endereço da chamada de api em todas requisições, e tem uma parte do endereço da api que sempre se repete.
  - segundo precisamos sempre transformar nossas respostas em json
  - Com o axios por exemplo, conseguimos interceptar requisições e respostas da nossa api. Por exemplo, seria possível adicionar uma regra no axios para que cada requisição que seja enviada para o backend envie junto um token de autenticação,... e nas respostas também seria possível interceptar a chamada da api e verificar alguma informação...
  - yarn add axios
  - criar pasta services em src/ essa pasta tem o significado de serviços de dados, onde conseguimos buscar e enviar dados
  - criar o arquivo api.ts
  - import axios from "axios";
    export const api = axios.create({
      baseURL: "http://localhost:3000/api",
    }) 
  - Voltar no component TransactionsTable e modificar o fetch para utilizar o api.get(), a resposta não precisa mais ser convertida para json e os dados da resposta ficam em response.data

# 12º Class (Configurando modal de criação):
  - Configurar o modal de criação de nova transação, e para configura-lo vamos utilizar uma biblioteca externa chamada react-modal
  - react-modal traz algumas funcionalidades prontas de modal, como apertar esc e fechar o modal, clicar fora e fechar o modal...
  - yarn add react-modal
  - https://github.com/reactjs/react-modal
  - criar os states de [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); colocar o nome completo da variável para deixar explícito ao que se refere
  - e criar as functions para abrir e fechar o modal, utilizar como padrão handle, handle => funções que indicam que o usuário vai clicar ou executar algo.
  - import Modal from "react-modal"
  - Declara o modal em qualquer parte do conteúdo, <Modal isOpen="passa o estado" onRequestClose="funcao handle para fechar o modal"> </Modal>
  - Como o modal parece não ser algo exclusivo do header, vamos remover o modal do header e colocá-lo no App.tsx e passar também as funções para lá
  - Porém, o botão que controla para abrir o Modal fica no header, o que fazer nesse caso? o que vamos fazer é passar a função do componente pai (App) para o componente filho (Header)
  - Para passar essa função declaramos uma interface da props: interface HeaderProps { onOpenNewTransactionModal: () => void; }, on no início do nome de funções, indica é uma função que não recebe nenhum parâmetro e não retorna nada.
  - em Header({ onOpenNewTransactionModal }: HeaderProps) e passa para onClick.
  - Modal.setAppElement('#root'); usar isso por questão de acessibilidade definir o root de onde o Modal vai aparecer

# 13º Class (Componente NewTransactionModal):
  - Para não ficar todo conteúdo do modal dentro do App criar um component para esse modal