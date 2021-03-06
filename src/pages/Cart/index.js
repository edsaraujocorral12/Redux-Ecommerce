import React from 'react';
import { connect } from 'react-redux';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { Container, ProductTable, Total } from './styles'

import * as cartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

function Cart({ cart, dispatch, total }) {

  function increment(product) {
    dispatch(cartActions.updateAmount(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(cartActions.updateAmount(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTOS</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img
                  src={product.image}
                  alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormated}</span>
              </td>

              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline
                      size={20}
                      color='#7159c1'
                      onClick={() => decrement(product)}
                    />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline
                      size={20}
                      color='#7159c1'
                      onClick={() => increment(product)}
                    />
                  </button>
                </div>
              </td>

              <td>
                <strong>{product.subTotal}</strong>
              </td>

              <td>
                <button
                  type='button'
                  onClick={() => dispatch(cartActions.removeFromCart(product.id))}
                >
                  <MdDelete size={20} color='#7159c1' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type='button'>Finalizar Pedido</button>

        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

/**
 * Sempre que precisarmos realizar um cálculo baseado em 
 * alguma informação que está dentro no Reducer, o melhor lugar 
 * é aqui!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount)
  })),
  total: formatPrice(state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0))
});

export default connect(mapStateToProps)(Cart);
