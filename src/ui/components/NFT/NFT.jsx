import * as React from "react";
import { Container } from "../HOC/container/Container";
import { Fragment, useContext, useEffect } from "react";
import { Context } from "../../../core/Context";

export const Nft = () => {
  const { NFT, NFTbalance, getUserNFT } = useContext(Context);
  useEffect(() => {
    (async () => {
      await getUserNFT();
    })();
  }, []);
  return (
    <>
      {NFT.map((el, idx) => (
        <Fragment key={idx}>
          {NFTbalance[idx] !== "0" && (
            <Container>
              <img style={{ borderRadius: "10px" }} width={"200px"} src={`nfts/${el.photo}`} alt={"nft"} />
              <p>ID NFT: {el.id}</p>
              <p>Название NFT: {el.name}</p>
              <p>Описание NFT: {el.desc}</p>
              {el.coll !== "-1" && <p>Коллекция NFT: {el.coll}</p>}
              <p>У вас в наличии NFT: {NFTbalance[idx]}</p>
              <p>Кол-во NFT при создании: {el.amount}</p>
              <p>Цена NFT при создании: {el.price / 10 ** 6}</p>
              <p>Дата создания: {new Date(el.dateCreate * 1000).toISOString()}</p>
            </Container>
          )}
        </Fragment>
      ))}
    </>
  );
};
