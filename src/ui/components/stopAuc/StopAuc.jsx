import * as React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../../core/Context";
import { Container } from "../HOC/container/Container";
import { Button, Form } from "react-bootstrap";

export const StopAuc = () => {
  const { stopAuc } = useContext(Context);

  const handlerStopAuc = async (e) => {
    e.preventDefault();
    const { target } = e;
    await stopAuc(target.auc.value);
  };

  return (
    <Container>
      <Form onSubmit={handlerStopAuc}>
        <Form.Label>Остановить аукцион</Form.Label>
        <Form.Control name="auc" type="number" placeholder="ID аукциона" className="mb-3" />
        <Button type="submit">Остановить</Button>
      </Form>
    </Container>
  );
};
