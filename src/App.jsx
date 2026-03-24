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
  ]
}

export default App;