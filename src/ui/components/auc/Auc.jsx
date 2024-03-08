import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../core/Context";
import { Container } from "../HOC/container/Container";

export const Auc = () => {
  const { auc, getAuc, getBet, bet } = useContext(Context);
  useEffect(() => {
    (async () => {
      await getAuc();
      await getBet();
    })();
  }, []);

  return (
    <>
      {auc.map((el, idx) => (
        <React.Fragment key={idx}>
          {el.end !== true && (
            <Container>
              <p>ID аукциона: {el.id}</p>
              <p>ID Коллекции: {el.coll}</p>
              <p>Минимальная ставка: {el.minBet / 10 ** 6} PROFI</p>
              <p>Максимальная ставка: {el.maxBet / 10 ** 6} PROFI</p>
              <p>Текущий лидер: {el.leader}</p>
              <p>Текущая ставка: {el.bet / 10 ** 6}</p>
              <p>Время начала: {new Date(el.timeStart * 1000).toISOString()}</p>
              <p>Время окончания: {new Date(el.timeEnd * 1000).toISOString()}</p>
              <p>Ставки:</p>
              {bet
                .filter((betItem) => el.id === betItem.id)
                .sort((a, b) => b[2] - a[2])
                .slice(0, 3)
                .map((findedBet, idx) => (
                  <React.Fragment key={idx}>
                    <p>Владелец {findedBet.owner}</p>
                    <p>Ставка {findedBet.bet / 10 ** 6} PROFI</p>
                  </React.Fragment>
                ))}
            </Container>
          )}
        </React.Fragment>
      ))}
    </>
  );
};
