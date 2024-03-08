import * as React from "react";
import { useContext } from "react";
import { Context } from "../../../core/Context";
import { Container } from "../HOC/container/Container";
import { Button, Form } from "react-bootstrap";

//_name, _desc, _ids, _amount
export const CreateColl = () => {
  const { createColl } = useContext(Context);
  const handlerCreateNFT = async (e) => {
    e.preventDefault();
    const { target } = e;
    await createColl(target.name.value, target.desc.value, target.ids.value.split(","), target.amount.value.split(","));
  };

  return (
    <Container>
      <Form onSubmit={handlerCreateNFT}>
        <Form.Label>Создать коллекцию</Form.Label>
        <Form.Control name="name" type="text" placeholder="Название" className="mb-3" />
        <Form.Control name="desc" type="text" placeholder="Описание" className="mb-3" />
        <Form.Control name="ids" type="text" placeholder="Id NFT. Пример: 0,1,2,3" className="mb-3" />
        <Form.Control name="amount" type="text" placeholder="Кол-во NFT. Пример: 10,10,4,2" className="mb-3" />
        <Button type="submit">Создать NFT</Button>
      </Form>
    </Container>
  );
};
