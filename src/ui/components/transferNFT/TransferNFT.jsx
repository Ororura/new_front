import * as React from "react";
import { Container } from "../HOC/container/Container";
import { Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../../core/Context";
//, _to, _nft, _amount
export const TransferNft = () => {
  const { transferNFT } = useContext(Context);

  const handlerTransferNFT = async (e) => {
    e.preventDefault();
    const { target } = e;
    await transferNFT(target.to.value, target.nft.value, target.amount.value);
  };

  return (
    <Container>
      <Form onSubmit={handlerTransferNFT}>
        <Form.Label>Перевести NFT другом пользовталю</Form.Label>
        <Form.Control name="to" type="text" placeholder="Кому" className="mb-3" />
        <Form.Control name="nft" type="number" placeholder="Id NFT" className="mb-3" />
        <Form.Control name="amount" type="number" placeholder="Кол-во" className="mb-3" />
        <Button type="submit">Отправить NFT</Button>
      </Form>
    </Container>
  );
};
