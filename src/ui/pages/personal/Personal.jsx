import * as React from "react";
import { Info } from "../../components/info/Info";
import { Nft } from "../../components/NFT/NFT";
import { useContext, useEffect } from "react";
import { Context } from "../../../core/Context";
import { useHistory } from "react-router-dom";
import { Ref } from "../../components/ref/Ref";
import { TransferNft } from "../../components/transferNFT/TransferNFT";
import { CreateNft } from "../../components/createNFT/CreateNFT";
import { CreateColl } from "../../components/createColl/CreateColl";

export const Personal = () => {
  const { wallet } = useContext(Context);
  const nav = useHistory();
  useEffect(() => {
    if (wallet === "") {
      nav.push("/");
    }
  }, []);
  return (
    <>
      <Info></Info>
      <Ref></Ref>
      <TransferNft></TransferNft>
      <Nft></Nft>
      <CreateNft></CreateNft>
      <CreateColl></CreateColl>
    </>
  );
};
