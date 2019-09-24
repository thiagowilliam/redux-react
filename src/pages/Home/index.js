import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md'

import * as S from "./styles"

export default function Home() {
  return (
    <S.ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-vibe-crew-masculino/26/411-3605-026/411-3605-026_detalhe2.jpg?ims=326x" alt=""/>
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-vibe-crew-masculino/26/411-3605-026/411-3605-026_detalhe2.jpg?ims=326x" alt="" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-vibe-crew-masculino/26/411-3605-026/411-3605-026_detalhe2.jpg?ims=326x" alt="" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-vibe-crew-masculino/26/411-3605-026/411-3605-026_detalhe2.jpg?ims=326x" alt="" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-vibe-crew-masculino/26/411-3605-026/411-3605-026_detalhe2.jpg?ims=326x" alt="" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-vibe-crew-masculino/26/411-3605-026/411-3605-026_detalhe2.jpg?ims=326x" alt="" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARINHO</span>
        </button>
      </li>
    </S.ProductList>
  );
}
