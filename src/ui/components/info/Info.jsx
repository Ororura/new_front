import * as React from "react";
import { Container } from "../HOC/container/Container";
import { useContext, useEffect } from "react";
import { Context } from "../../../core/Context";

export const Info = () => {
  const { balance, getUserNFT, getUserBalance, wallet } = useContext(Context);
  useEffect(() => {
    (async () => {
      await getUserBalance();
      await getUserNFT();
    })();
  }, []);
  return (
    <Container>
      <p>Ваш адрес: {wallet}</p>
      <p>Ваш баланс: {balance / 10 ** 6} PROFI</p>
    </Container>
  );
};
