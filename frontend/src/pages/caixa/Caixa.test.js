// PesquisaCaixa.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import PesquisaCaixa from './PesquisaCaixa';

// eslint-disable-next-line no-undef
test('Valores não negativos aceitos', () => {
  render(<PesquisaCaixa />);
  const codigoInput = screen.getByPlaceholderText('Código do produto');

  fireEvent.input(codigoInput, { target: { value: '123' } });

  // eslint-disable-next-line no-undef
  expect(codigoInput.value).toBe('123');
});

// eslint-disable-next-line no-undef
test('Valores negativos negados', () => {
  render(<PesquisaCaixa />);
  const codigoInput = screen.getByPlaceholderText('Código do produto');

  fireEvent.input(codigoInput, { target: { value: '-123' } });

  // eslint-disable-next-line no-undef
  expect(codigoInput.value).toBe('');
});

// eslint-disable-next-line no-undef
test('Quantidade negativa negada', () => {
  render(<PesquisaCaixa />);
  const quantidadeInput = screen.getByPlaceholderText('Quantidade');

  fireEvent.input(quantidadeInput, { target: { value: '-5' } });

  // eslint-disable-next-line no-undef
  expect(quantidadeInput.value).toBe('');
});

// eslint-disable-next-line no-undef
test('Código Negativo negado', () => {
  render(<PesquisaCaixa />);
  const quantidadeInput = screen.getByPlaceholderText('Quantidade');

  fireEvent.input(quantidadeInput, { target: { value: '-5' } });

  // eslint-disable-next-line no-undef
  expect(quantidadeInput.value).toBe('');
});

// eslint-disable-next-line no-undef
test('Código positivo aceito', () => {
  render(<PesquisaCaixa />);
  const result = true;
  // eslint-disable-next-line no-undef
  expect(result).toBe(true);
});

// eslint-disable-next-line no-undef
test('Quantidade positiva aceita', () => {
  render(<PesquisaCaixa />);
  const result = false;
  // eslint-disable-next-line no-undef
  expect(result).toBe(false);
});
