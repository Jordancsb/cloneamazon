import React from 'react';
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home--container'>
            <img
            className='img--class'
            src="https://disneyplusbrasil.com.br/wp-content/uploads/2020/09/Disney-Plus-e-Amazon-Prime-Video-1-1024x575.jpg" 
            alt='Banner Amazon'/>

            <div className='home--row'>
                <Product 
                id={4019284583}
                title={'Kindle 10a. geração com bateria de longa duração - Cor Preta'}
                price={349.99}
                rating = {5}
                image={'https://m.media-amazon.com/images/I/61X0ISBpD-L._AC_SL1000_.jpg'} 
                />
                <Product
                id={1029059321}
                title={'Blackout: O amor também brilha no escuro'}
                price={24.90}
                rating = {3}
                image={'https://m.media-amazon.com/images/P/B099FLFN54.01._SCLZZZZZZZ_SX500_.jpg'} 
                />
            </div>
            <div className='home--row'>
                <Product 
                id={1029090124}
                title={'Echo Show 10: Smart Display HD de 10,1" com movimento e Alexa - cor Preta'}
                price={1799.99}
                rating = {4}
                image={'https://m.media-amazon.com/images/I/51kzDl5rPRL._AC_SL1000_.jpg'} 
                />
                <Product
                id={1029090124}
                title={'Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Preta'}
                price={248.99}
                rating = {4}
                image={'https://m.media-amazon.com/images/I/41GZCWFJB1L._AC_.jpg'} 
                />
                <Product
                id={1029090124}
                title={'Fire TV Stick com Controle Remoto por Voz com Alexa (inclui comandos de TV) | Streaming em Full HD'}
                price={399.99}
                rating = {4}
                image={'https://m.media-amazon.com/images/I/51degAt5CFL._AC_SL1000_.jpg'} 
                />
            </div>
            <div className='home--row'>
                <Product
                id={1029090124}
                title={'Smart TV LED 43" Full HD AOC ROKU TV FHD 43S5195/78G, Wi-Fi, 3 HDMI, 1 USB, Wifi, Conversor Digital'}
                price={2199.99}
                rating = {4}
                image={'https://m.media-amazon.com/images/I/610XyUMknBL._AC_SL1000_.jpg'} 
                />
            </div>
        </div>
    </div>
  )
}

export default Home