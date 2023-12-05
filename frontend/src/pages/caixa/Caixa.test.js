import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Caixa from './Caixa';

test('renders Caixa component with PesquisaCaixa', () => {
  // Renderiza o componente Caixa
  const { container } = render(<Caixa />);

  // Encontra os elementos dentro do componente Caixa
  const inputCodigoPDV = screen.getByPlaceholderText(/Código do produto/i);
  const inputQuantidade = screen.getByPlaceholderText(/Quantidade/i);
  const buttonAdicionar = screen.getByText(/Adicionar/i);

  // Simula a interação do usuário
  fireEvent.change(inputCodigoPDV, { target: { value: '12' } });
  fireEvent.change(inputQuantidade, { target: { value: '-2' } });
  fireEvent.click(buttonAdicionar);

  const pesquisaCaixaElement = screen.getByTestId('pesquisa-caixa');

  console.log('Resultado da pesquisaCaixaElement:', pesquisaCaixaElement);

  // Verifica se o componente PesquisaCaixa está no documento
  expect(pesquisaCaixaElement).toBeInTheDocument();

  // Verifica se os valores não são negativos
  expect(Number(inputCodigoPDV.value)).toBeGreaterThan(0);
  expect(Number(inputQuantidade.value)).toBeGreaterThan(0);
});
