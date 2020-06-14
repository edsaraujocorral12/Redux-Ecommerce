import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg'

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo Netshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          {
            cartSize > 1 ? <span>{cartSize} itens</span> : <span>{cartSize} item</span>
          }
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
