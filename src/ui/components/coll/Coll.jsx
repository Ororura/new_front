import * as React from "react";
import { Fragment, useContext, useEffect } from "react";
import { Context } from "../../../core/Context";
import { Container } from "../HOC/container/Container";

export const Coll = () => {
  const { coll, getColl } = useContext(Context);
  useEffect(() => {
    (async () => {
      await getColl();
    })();
  }, []);
  return (
    <>
      {coll.map((el, idx) => (
        <Fragment key={idx}>
          {el.deleted === false && (
            <Container>
              <p>ID коллекции: {el.id}</p>
              <p>Название: {el.name}</p>
              <p>Описание: {el.desc}</p>
              <p>NFT в коллекции: {el.ids.map((id) => id + " ")}</p>
              <p>Кол-во NFT в коллекции: {el.amount.map((id) => id + " ")}</p>
            </Container>
          )}
        </Fragment>
      ))}
    </>
  );
};
