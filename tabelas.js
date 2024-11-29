import React from 'react';

function Tabelas() {
  return (
    <div>
      <h2>Transações</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01/01/2023</td>
            <td>Salário</td>
            <td>6350</td>
          </tr>
          <tr>
            <td>02/01/2023</td>
            <td>Aluguel</td>
            <td>-4140</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tabelas;