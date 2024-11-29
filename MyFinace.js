import React from 'react';
import './style.css'; 
import Tabelas from './tabelas';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>MyFinance</h1>
        <nav>
          <ul>
            <li><a href="#" onClick={() => handleNavigation('home')}>Home</a></li>
            <li><a href="#" onClick={() => handleNavigation('tabelas')}>Transações</a></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section className="home">
          <h2>Home</h2>
        </section>
        <section className="balance">
          <div>
            <h3>Total Entradas: 6350</h3>
            <h3>Total Saídas: 4140</h3>
            <h3>Saldo Atual: 2210</h3>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>Desenvolvido por Julio Cesar Rufino</p>
      </footer>
    </div>
  );
}

export default App;
