import * as React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../../core/Context";
import { Container } from "../HOC/container/Container";
import { Button, Form } from "react-bootstrap";

export const ChangePrice = () => {
  const { changePrice } = useContext(Context);
  const handlerSellNFT = async (e) => {
    e.preventDefault();
    const { target } = e;
    await changePrice(target.id.value, target.price.value);
  };

  return (
    <Container>
      <Form onSubmit={handlerSellNFT}>
        <Form.Label>Поменять цену NFT</Form.Label>
        <Form.Control name="id" type="number" placeholder="ID лота" className="mb-3" />
        <Form.Control name="price" type="number" placeholder="Новая цена" className="mb-3" />
        <Button type="submit">Поменять цену</Button>
      </Form>
    </Container>
  );
};
