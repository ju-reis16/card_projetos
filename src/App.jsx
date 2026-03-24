import React from 'react';
import Card from './assets/components/Card';
import './App.css';

const App = () => {
  const cardsData = [
    {
      title: "O que é React ?",
      explanation: "O React é um framework JavaScript, ou seja, um conjunto de ferramentas e bibliotecas. Foi criado pelo Facebook. Ele é usado para criar interfaces de usuários em aplicativos webs.",
      code: `import React from 'react'; {\n  return <h1>Olá, React!</h1>;\n}`,
      tip: "React não é um framework, mas sim uma biblioteca focada apenas na camada de visualização (view).",
      category: "Fundamentos"
    },
    {
      title: "O que é Vite ?",
      explanation: "Vite é uma ferramenta de build extremamente rápida para projetos front-end. Ele oferece um ambiente de desenvolvimento com recarga instantânea e suporte nativo a ES modules.",
      code: `npm create vite@latest meu-app\ncd meu-app\nnpm install\nnpm run dev`,
      tip: "Vite é mais rápido que o create-react-app por usar ES modules nativos no desenvolvimento.",
      category: "Fundamentos"
    },
    {
      title: "Criando projeto com Vite !",
      explanation: "Para criar um projeto React com Vite, utilize o comando npm create vite@latest e escolha React como template. Depois instale as dependências e inicie o servidor.",
      code: `npm create vite@latest meu-app -- --template react\ncd meu-app\nnpm install\nnpm run dev`,
      tip: "Use --template react-ts se quiser usar TypeScript no seu projeto.",
      category: "Fundamentos"

    },
    {
      title: "Estrutura de pastas !",
      explanation: "Um projeto React com Vite tem pastas principais: src/ (código fonte), public/ (arquivos estáticos), node_modules/ (dependências) e arquivos de configuração como vite.config.js.",
      code: `meu-app/\n├── src/\n│   ├── assets/\n│   ├── components/\n│   ├── App.jsx\n│   └── main.jsx\n├── public/\n├── index.html\n└── package.json`,
      tip: "Organize seus componentes na pasta components/ para manter o projeto estruturado.",
      category: "Fundamentos"
    },
    {
      title: "Arquivo main.jsx",
      explanation: "O main.jsx é o ponto de entrada da aplicação. Ele renderiza o componente principal App dentro do elemento root do HTML usando ReactDOM.createRoot().",
      code: `import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport App from './App.jsx'\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n)`,
      tip: "O StrictMode ajuda a identificar problemas na aplicação durante o desenvolvimento.",
      category: "Fundamentos"
    },
    {
      title: "Arquivo App.jsx",
      explanation: "App.jsx é o componente principal da aplicação. É onde começamos a construir nossa interface e organizar os demais componentes.",
      code: `function App() {\n  return (\n    <div>\n      <h1>Meu App React</h1>\n    </div>\n  );\n}\n\nexport default App;`,
      tip: "Cada arquivo .jsx deve exportar um componente para ser usado em outros lugares.",
      category: "Fundamentos"
    },
    {
      title: "O que é JSX ?",
      explanation: "JSX é uma extensão de sintaxe para JavaScript que permite escrever HTML dentro do JavaScript. Ele é usado no React para descrever como a interface deve ser.",
      code: `const elemento = <h1>Olá, mundo!</h1>;\n\nfunction App() {\n  return <div>{elemento}</div>;\n}`,
      tip: "JSX não é obrigatório no React, mas é altamente recomendado por ser mais expressivo.",
      category: "JSX"
    },
    {
      title: "Diferença HTML e JSX ?",
      explanation: "No JSX usamos className em vez de class, camelCase para atributos (onClick), e todo elemento deve ser fechado (ex: <img />).",
      code: `// HTML: <div class="container" onclick="funcao">\n// JSX:\n<div className="container" onClick={funcao}>\n  <img src="foto.jpg" alt="foto" />\n</div>`,
      tip: "Use className para classes CSS e camelCase para eventos como onClick, onChange.",
      category: "JSX"
    },
    {
      title: "Expressões JSX {}",
      explanation: "Usamos chaves {} para inserir expressões JavaScript dentro do JSX. Pode ser variáveis, funções, operações matemáticas, etc.",
      code: `const nome = "João";\nconst idade = 25;\n\nfunction App() {\n  return (\n    <div>\n      <h1>Olá, {nome}!</h1>\n      <p>Idade: {idade + 5} anos</p>\n    </div>\n  );\n}`,
      tip: "Dentro das chaves {} você pode colocar qualquer expressão JavaScript válida.",
      category: "JSX"
    },
    {
      title: "Fragment <> </>",
      explanation: "Fragment é usado para agrupar múltiplos elementos sem adicionar um nó extra no DOM. Pode ser escrito como <></> ou <Fragment></Fragment>.",
      code: `function App() {\n  return (\n    <>\n      <h1>Título</h1>\n      <p>Parágrafo 1</p>\n    </>\n  );\n}`,
      tip: "Use Fragment quando precisar retornar múltiplos elementos sem uma div pai desnecessária.",
      category: "JSX"
    },
    {
      title: "Classes CSS no JSX (className)",
      explanation: "No JavaScript puro, a palavra class é reservada para criar classes de objetos. Por isso, no JSX, usamos className para aplicar classes de estilo do CSS.",
      code: `.caixa-azul {
  background-color: blue;
  color: white;
  padding: 20px;
  border-radius: 10px;
}
----------------------------
  function MeuComponente() {
  return (
    <div className="caixa-azul">
      <h1>Este card usa className!</h1>
    </div>
  );
}
`,
      category: "JSX"
    },
    {
      title: "O que são componentes ?",
      explanation: "Componentes são blocos de construção reutilizáveis em React. Eles podem ser funções ou classes que retornam JSX e permitem dividir a UI em partes independentes.",
      code: `function Saudacao() {\n  return <h1>Olá!</h1>;\n}\n\nfunction App() {\n  return <Saudacao />;\n}`,
      tip: "Componentes devem começar com letra maiúscula para o React reconhecer como componente.",
      category: "Componentes"
    },

     {
      title: "Criando componente funcional",
      explanation: "Um componente funcional é uma função JavaScript que retorna JSX. Pode receber props como parâmetro e é a forma mais moderna de criar componentes.",
      code: `function MeuComponente({ nome }) {\n  return (\n    <div>\n      <h2>Componente de {nome}</h2>\n      <p>Este é um componente funcional</p>\n    </div>\n  );\n}\n\nexport default MeuComponente;`,
      tip: "Use arrow functions também: const MeuComponente = () => { return <div /> }",
      category: "Componentes"
    },
    {
      title: "Reutilização de componentes",
      explanation: "Componentes podem ser reutilizados quantas vezes forem necessárias com diferentes props, evitando código duplicado e facilitando a manutenção.",
      code: `function Card({ titulo, conteudo }) {\n  return (\n    <div className="card">\n      <h3>{titulo}</h3>\n      <p>{conteudo}</p>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      <Card titulo="Card 1" conteudo="Conteúdo 1" />\n      <Card titulo="Card 2" conteudo="Conteúdo 2" />\n      <Card titulo="Card 3" conteudo="Conteúdo 3" />\n    </div>\n  );\n}`,
      tip: "Componentes bem feitos são reutilizáveis e independentes.",
      category: "Componentes"
    },
    {
      title: "Organização de pastas",
      explanation: "Organize componentes em pastas específicas dentro de src/. Use componentes/ para componentes reutilizáveis, pages/ para páginas, e features/ para funcionalidades específicas.",
      code: `src/\n├── components/\n│   ├── Button/\n│   │   ├── Button.jsx\n│   │   └── Button.css\n│   └── Card/\n│       └── Card.jsx\n├── pages/\n│   ├── Home.jsx\n│   └── About.jsx\n└── App.jsx`,
      tip: "Cada componente pode ter sua própria pasta com arquivo JSX, CSS e testes.",
      category: "Componentes"
    },
    {
      title: "O que são props",
      explanation: "Props (propriedades) são dados passados de um componente pai para um componente filho. São apenas leitura e permitem configurar componentes de forma dinâmica.",
      code: `function Saudacao({ nome, idade }) {\n  return (\n    <div>\n      <h1>Olá, {nome}!</h1>\n      <p>Você tem {idade} anos</p>\n    </div>\n  );\n}\n\nfunction App() {\n  return <Saudacao nome="Maria" idade={25} />;\n}`,
      tip: "Props são imutáveis no componente filho. Não tente modificar props diretamente.",
      category: "Props"
    },
    {
      title: "Passando props",
      explanation: "Props são passadas como atributos HTML no componente filho. Podem ser strings, números, booleanos, arrays, objetos, funções, etc.",
      code: `function Lista({ itens, titulo }) {\n  return (\n    <div>\n      <h2>{titulo}</h2>\n      <ul>\n        {itens.map(item => <li key={item}>{item}</li>)}\n      </ul>\n    </div>\n  );\n}\n\nfunction App() {\n  const frutas = ['Maçã', 'Banana', 'Laranja'];\n  return <Lista itens={frutas} titulo="Lista de Frutas" />;\n}`,
      tip: "Para passar valores JavaScript (arrays, objetos), use {}. Para strings literais, pode usar aspas.",
      category: "Props"
    },
    {
      title: "Props com valores padrão",
      explanation: "Podemos definir valores padrão para props usando defaultProps ou parâmetros padrão na desestruturação.",
      code: `function Botao({ texto = "Clique aqui", cor = "azul" }) {\n  return (\n    <button style={{ backgroundColor: cor }}>\n      {texto}\n    </button>\n  );\n}\n\n// Ou usando defaultProps\n// Botao.defaultProps = { texto: "Clique aqui", cor: "azul" }`,
      tip: "Use parâmetros padrão na desestruturação para definir valores padrão de props.",
      category: "Props"
    },
    {
      title: "Desestruturação de props",
      explanation: "Desestruturar props permite extrair valores diretamente nos parâmetros da função, tornando o código mais limpo e legível.",
      code: `// Sem desestruturação\nfunction Card(props) {\n  return <h1>{props.titulo}</h1>;\n}\n\n// Com desestruturação\nfunction Card({ titulo, descricao, imagem }) {\n  return (\n    <div>\n      <h1>{titulo}</h1>\n      <p>{descricao}</p>\n      <img src={imagem} alt={titulo} />\n    </div>\n  );\n}`,
      tip: "Sempre prefira desestruturar props para facilitar a leitura e evitar repetir props.",
      category: "Props"
    },

    {
      title: "O que é useState",
      explanation: "useState é um Hook que permite adicionar estado a componentes funcionais. Retorna um array com o valor atual e uma função para atualizá-lo.",
      code: `import { useState } from 'react';\n\nfunction Contador() {\n  const [contador, setContador] = useState(0);\n  \n  return (\n    <div>\n      <p>Você clicou {contador} vezes</p>\n      <button onClick={() => setContador(contador + 1)}>\n        Clique aqui\n      </button>\n    </div>\n  );\n}`,
      tip: "useState retorna [valor, funçãoAtualizadora] - use desestruturação para acessar.",
      category: "State"
    },
    {
      title: "Atualizando estado",
      explanation: "Para atualizar estado, use a função setter fornecida pelo useState. Nunca modifique o estado diretamente.",
      code: `function Atualizacao() {\n  const [contador, setContador] = useState(0);\n  \n  const incrementar = () => {\n    // Forma correta\n    setContador(contador + 1);\n    \n    // Para estado baseado no estado anterior\n    setContador(prev => prev + 1);\n  };\n  \n  return <button onClick={incrementar}>Clicou {contador} vezes</button>;\n}`,
      tip: "Use a forma funcional (prev => prev + 1) quando o novo estado depende do anterior.",
      category: "State"
    },
  ]
return (
    <div className="app">
      <div className="legend">
        <h3> Legenda de Cores por Categoria</h3>
        <div className="legend-grid">
          <div className="legend-item"><div className="color-box" style={{ backgroundColor: '#1E88E5' }}></div><span>Fundamentos</span></div>
          <div className="legend-item"><div className="color-box" style={{ backgroundColor: '#FDD835' }}></div><span>JSX</span></div>
          <div className="legend-item"><div className="color-box" style={{ backgroundColor: '#8E24AA' }}></div><span>Componentes</span></div>
          <div className="legend-item"><div className="color-box" style={{ backgroundColor: '#43A047' }}></div><span>Props</span></div>
          <div className="legend-item"><div className="color-box" style={{ backgroundColor: '#C62828' }}></div><span>State</span></div>
          <div className="legend-item"><div className="color-box" style={{ backgroundColor: '#EC407A' }}></div><span>Renderização</span></div>
          <div className="legend-item"><div className="color-box" style={{ backgroundColor: '#FB8C00' }}></div><span>Hooks</span></div>
          <div className="legend-item"><div className="color-box" style={{ backgroundColor: '#00ACC1' }}></div><span>Conceitos Extras</span></div>
        </div>
      </div>

      <div className="cards-container">
        {cardsData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            explanation={item.explanation}
            code={item.code}
            tip={item.tip}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default App;