import * as React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../../core/Context";
import { Container } from "../HOC/container/Container";
import { Button, Form } from "react-bootstrap";

export const SellNft = () => {
  const { sellNFT, getSales } = useContext(Context);

  useEffect(() => {
    (async () => {
      await getSales();
    })();
  }, []);

  const handlerSellNFT = async (e) => {
    e.preventDefault();
    const { target } = e;
    await sellNFT(target.nft.value, target.amount.value, target.price.value);
  };

  return (
    <Container>
      <Form onSubmit={handlerSellNFT}>
        <Form.Label>Продать NFT</Form.Label>
        <Form.Control name="nft" type="number" placeholder="ID NFT" className="mb-3" />
        <Form.Control name="amount" type="number" placeholder="Кол-во NFT" className="mb-3" />
        <Form.Control name="price" type="number" placeholder="Цена NFT" className="mb-3" />
        <Button type="submit">Продать NFT</Button>
      </Form>
    </Container>
  );
};
