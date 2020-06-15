import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductList } from './styles'
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as cartActions from '../../store/modules/cart/actions';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { dispatch } = this.props;

    dispatch(cartActions.addToCartRequest(id));
  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
            />

            <strong>{product.title}</strong>
            <span>{product.priceFormated}</span>

            <button type="button"
              onClick={() => this.handleAddProduct(product.id)}>
              <div>
                <MdAddShoppingCart
                  size={16}
                  color='#fff'
                />
                {amount[product.id] || 0}
              </div>
              <span>Adicionar ao Carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {})
});

export default connect(mapStateToProps)(Home);
