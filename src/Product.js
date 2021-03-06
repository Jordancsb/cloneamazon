import React from 'react';
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
  const [{ basket }, dispatch ] = useStateValue();

  console.log(basket);

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
      },
    });
  };

  return (
    <div className='product'>
        <div className='product--info'>
            <p> {title} </p>
            <p className='product--price'>
                <small> R$ </small>
                <strong> {price} </strong>
            </p>
            <div className='product--rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
        </div>
        <img 
        src={image}
        alt='Book'
        />
        <button onClick={addToBasket}> Adicionar ao Carrinho </button>
    </div>
  )
}

export default Product