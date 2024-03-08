import * as React from "react";
import { useContext } from "react";
import { Context } from "../../../core/Context";
import { Container } from "../HOC/container/Container";
import { Button, Form } from "react-bootstrap";

export const TakeNft = () => {
  const { takeNFT } = useContext(Context);

  const handlerStopAuc = async (e) => {
    e.preventDefault();
    const { target } = e;
    await takeNFT(target.auc.value);
  };

  return (
    <Container>
      <Form onSubmit={handlerStopAuc}>
        <Form.Label>Забрать NFT</Form.Label>
        <Form.Control name="auc" type="number" placeholder="ID аукциона" className="mb-3" />
        <Button type="submit">Забрать</Button>
      </Form>
    </Container>
  );
};
