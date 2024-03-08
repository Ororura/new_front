import * as React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../../../core/Context";
import { Container } from "../HOC/container/Container";
import { Button, Form } from "react-bootstrap";

export const Sales = () => {
  const { sales, getSales, buyNFT } = useContext(Context);
  const [inputAmount, setInputAmount] = useState(0);

  useEffect(() => {
    (async () => {
      await getSales();
    })();
  }, []);

  return (
    <>
      {sales.map((el, idx) => (
        <Fragment key={idx}>
          {el.amount !== "0" && (
            <Container>
              <p> ID NFT {el.id}</p>
              <p> Владелец {el.owner}</p>
              <p> В наличии {el.amount}</p>
              <p> Цена {el.price / 10 ** 6} PROFI</p>
              <Form.Control
                onChange={(e) => {
                  setInputAmount(e.target.value);
                }}
                placeholder="Введите кол-во"
                className="mb-3"
              ></Form.Control>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  buyNFT(el.id, inputAmount);
                }}
              >
                Купить
              </Button>
            </Container>
          )}
        </Fragment>
      ))}
    </>
  );
};
