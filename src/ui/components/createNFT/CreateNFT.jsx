import * as React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../../core/Context";
import { Container } from "../HOC/container/Container";
import { Button, Form } from "react-bootstrap";

export const CreateNft = () => {
  const { createNFT } = useContext(Context);
  const handlerCreateNFT = async (e) => {
    e.preventDefault();
    const { target } = e;
    await createNFT(target.name.value, target.desc.value, target.photo.value, target.amount.value, target.price.value);
  };

  return (
    <Container>
      <Form onSubmit={handlerCreateNFT}>
        <Form.Label>Создать NFT</Form.Label>
        <Form.Control name="name" type="text" placeholder="Название" className="mb-3" />
        <Form.Control name="desc" type="text" placeholder="Описание" className="mb-3" />
        <Form.Control name="photo" type="text" placeholder="Фото. Пример: photo.png" className="mb-3" />
        <Form.Control name="amount" type="text" placeholder="Кол-во" className="mb-3" />
        <Form.Control name="price" type="text" placeholder="Цена" className="mb-3" />
        <Button type="submit">Создать NFT</Button>
      </Form>
    </Container>
  );
};
