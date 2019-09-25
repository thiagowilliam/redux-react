import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import * as S from "./styles"

export default function Cart() {
  return (
    <S.Container>
      <S.ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-vibe-crew-masculino/26/411-3605-026/411-3605-026_detalhe2.jpg?ims=326x" alt="Tênis"/>
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>

                <input type="number" readOnly value={2}/>

                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </S.ProductTable>

      <footer>
        <button type="button">
          Finalizar pedido
        </button>

        <S.Total>
          <span>Total</span>
          <strong>R$1920,28</strong>
        </S.Total>
      </footer>
    </S.Container>
  );
}
