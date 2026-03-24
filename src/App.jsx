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
  ]
}

export default App;