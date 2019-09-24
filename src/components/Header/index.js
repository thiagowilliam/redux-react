import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md'
import * as S from "./styles"

import logo from '../../assets/images/logo.svg'

export default function Header() {
  return (
    <S.Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes"/>
      </Link>

      <S.Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>3 Itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff"/>
      </S.Cart>
    </S.Container>
  );
}
