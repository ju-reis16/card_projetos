import React from 'react';
import './card.css';

const Card = ({ title, explanation, code, tip, category }) => {
  const colors = {
    'Fundamentos': '#1E88E5',
    'JSX': '#FDD835',
    'Componentes': '#8E24AA',
    'Props': '#43A047',
    'State': '#C62828',
    'Renderização': '#EC407A',
    'Hooks': '#FB8C00',
    'Conceitos Extras': '#00ACC1'
  };

  const categoryColor = colors[category] || '#333';

  return (
    <div className="card" style={{ '--category-color': categoryColor }}>
      <div className="card-header">
        <span className="category-badge">
          {category}
        </span>
        <h2 className="card-title">{title}</h2>
      </div>
      
      <div className="card-content">
        <div className="section">
          <p className="explanation">{explanation}</p>
        </div>

        <div className="section">
          <h3 className="section-title"> Exemplo de Código:</h3>
          <pre className="code-block">
            <code>{code}</code>
          </pre>
        </div>

        {tip && (
          <div className="tip-section">
            <h3 className="section-title"> Dica:</h3>
            <p className="tip">{tip}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;