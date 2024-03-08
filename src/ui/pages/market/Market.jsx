import * as React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../../core/Context";
import { useHistory } from "react-router-dom";
import { SellNft } from "../../components/sellNFT/SellNFT";
import { Sales } from "../../components/sales/Sales";
import { ChangePrice } from "../../components/changePrice/ChangePrice";
import { Coll } from "../../components/coll/Coll";
import { StartAuc } from "../../components/startAuc/StartAuc";
import { Auc } from "../../components/auc/Auc";
import { MakeBet } from "../../components/makeBet/MakeBet";
import { StopAuc } from "../../components/stopAuc/StopAuc";

export const Market = () => {
  const { wallet } = useContext(Context);
  const nav = useHistory();
  useEffect(() => {
    if (wallet === "") {
      nav.push("/");
    }
  }, []);
  return (
    <>
      <SellNft></SellNft>
      <ChangePrice></ChangePrice>
      <Sales></Sales>
      <Coll></Coll>
      <MakeBet></MakeBet>
      <Auc></Auc>
      <StartAuc></StartAuc>
      <StopAuc></StopAuc>
    </>
  );
};
