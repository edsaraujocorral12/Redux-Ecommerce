import React from 'react';

import { ProductList } from './styles'

import { MdAddShoppingCart } from 'react-icons/md';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&ims=326x" alt="itens" />
        <strong>Tênis</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color='#fff' /> 3
          </div>

          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&ims=326x" alt="itens" />
        <strong>Tênis</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color='#fff' /> 3
          </div>

          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&ims=326x" alt="itens" />
        <strong>Tênis</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color='#fff' /> 3
          </div>

          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&ims=326x" alt="itens" />
        <strong>Tênis</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color='#fff' /> 3
          </div>

          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
