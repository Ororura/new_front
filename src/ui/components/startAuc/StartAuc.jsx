import * as React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../../core/Context";
import { Container } from "../HOC/container/Container";
import { Button, Form } from "react-bootstrap";

export const StartAuc = () => {
  const { getAuc, startAuc } = useContext(Context);
  useEffect(() => {
    (async () => {
      await getAuc();
    })();
  }, []);

  const handlerStartAuc = async (e) => {
    e.preventDefault();
    const { target } = e;
    await startAuc(target.coll.value, target.start.value, target.end.value, target.min.value, target.max.value);
  };

  return (
    <Container>
      <Form onSubmit={handlerStartAuc}>
        <Form.Label>Запустить аукцион</Form.Label>
        <Form.Control name="coll" type="number" placeholder="ID Коллекции" className="mb-3" />
        <Form.Control
          name="start"
          type="number"
          placeholder="Время, через которое запустится система (минутах)"
          className="mb-3"
        />
        <Form.Control
          name="end"
          type="number"
          placeholder="Время, через которое завершится система (минутах)"
          className="mb-3"
        />
        <Form.Control name="min" type="number" placeholder="Минимальная ставка" className="mb-3" />
        <Form.Control name="max" type="number" placeholder="Максимальная ставка" className="mb-3" />
        <Button type="submit">Запустить</Button>
      </Form>
    </Container>
  );
};
