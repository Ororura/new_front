import * as React from "react";
import { Container } from "../HOC/container/Container";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../core/Context";
import { Button, Form } from "react-bootstrap";

export const Ref = () => {
  const { getRef, ref, createRef, refUse, addUserRef } = useContext(Context);
  const [inputRef, setInputRef] = useState("");
  const [inputUser, setInputUser] = useState("");
  useEffect(() => {
    (async () => {
      await getRef();
    })();
  }, [ref]);

  const handlerCreateRef = async (e) => {
    e.preventDefault();
    await createRef();
  };
  const handlerUseRef = async (e) => {
    e.preventDefault();
    await refUse(inputRef);
  };

  const handlerAddUser = async (e) => {
    e.preventDefault();
    await addUserRef(inputUser);
  };

  return (
    <Container>
      {ref.name !== "" && (
        <>
          <p>Ваш реферал: {ref.name}</p>
          <p>Ваш процент скидки: {ref.discount}</p>
        </>
      )}
      {ref.name === "" && (
        <Button className="mb-3" onClick={handlerCreateRef}>
          Создать свой реферал
        </Button>
      )}
      <Form.Control
        type="text"
        placeholder="Введите реферал для скидки"
        onChange={(e) => {
          setInputRef(e.target.value);
        }}
        className="mb-3"
      ></Form.Control>

      <Button className="mb-3" onClick={handlerUseRef}>
        Ввести
      </Button>
      {ref.name !== "" && (
        <>
          <Form.Control
            type="text"
            placeholder="Введите пользователя"
            onChange={(e) => {
              setInputUser(e.target.value);
            }}
            className="mb-3"
          ></Form.Control>
          <Button className="mb-3" onClick={handlerAddUser}>
            Добавить пользователя в реферал
          </Button>
        </>
      )}
    </Container>
  );
};
