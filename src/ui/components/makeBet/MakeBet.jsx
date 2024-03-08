import * as React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../../core/Context";
import { Container } from "../HOC/container/Container";
import { Button, Form } from "react-bootstrap";

export const MakeBet = () => {
  const { getBet, makeBet } = useContext(Context);

  useEffect(() => {
    (async () => {
      await getBet();
    })();
  }, []);

  const handlerCreateNFT = async (e) => {
    e.preventDefault();
    const { target } = e;
    await makeBet(target.id.value, target.bet.value);
  };

  return (
    <Container>
      <Form onSubmit={handlerCreateNFT}>
        <Form.Label>Сделать ставку</Form.Label>
        <Form.Control name="id" type="number" placeholder="Id аукциона" className="mb-3" />
        <Form.Control name="bet" type="number" placeholder="Ставка" className="mb-3" />
        <Button type="submit">Сделать ставку</Button>
      </Form>
    </Container>
  );
};
