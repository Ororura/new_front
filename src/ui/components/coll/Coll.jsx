import * as React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../core/Context";
import { Container } from "../components/HOC/container/Container";

export const Coll = () => {
  const { coll, getColl } = useContext(Context);
  useEffect(() => {
    (async () => {
      await getColl();
    })();
  }, []);
  return (
    <Container>
      {/*<p>Ваш адрес: {wallet}</p>*/}
      {/*<p>Ваш баланс: {balance / 10 ** 6} PROFI</p>*/}
    </Container>
  );
};
