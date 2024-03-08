import { createContext, useState } from "react";
import Services from "../services/Services";

export const Context = createContext({});

export const ContextWrapper = ({ children }) => {
  const [wallet, setWallet] = useState("");
  const [NFT, setNFT] = useState([]);
  const [NFTbalance, setNFTbalance] = useState([]);
  const [balance, setBalance] = useState(0);
  const [ref, setRef] = useState("");
  const [sales, setSales] = useState([]);
  const [coll, setColl] = useState([]);
  const [auc, setAuc] = useState([]);
  const [bet, setBet] = useState([]);
  const login = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" }).then(async (data) => {
        await setWallet(data[0]);
        await Services.setWallet(data[0]);
      });
    } catch (e) {
      console.error(e);
    }
  };
  const unLogin = () => {
    Services.setWallet("");
    setWallet("");
  };

  const getUserNFT = async () => {
    try {
      await Services.getUserNFT().then((data) => {
        setNFT(data[0]);
        setNFTbalance(data[1]);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getUserBalance = async () => {
    try {
      await Services.getUserBalance().then((data) => {
        setBalance(data);
      });
    } catch (e) {
      console.error(e);
    }
  };
  const getRef = async () => {
    try {
      await Services.getRef().then((data) => {
        setRef(data);
      });
    } catch (e) {
      console.error(e);
    }
  };
  const createRef = async () => {
    try {
      await Services.createRef();
      await getRef();
    } catch (e) {
      console.error(e);
    }
  };
  const refUse = async (ref) => {
    try {
      await Services.RefUse(ref);
      await getRef();
      await getUserBalance();
    } catch (e) {
      console.error(e);
    }
  };
  const transferNFT = async (_to, _nft, _amount) => {
    try {
      await Services.transferNFT(_to, _nft, _amount);
      await getUserNFT();
    } catch (e) {
      console.error(e);
    }
  };

  const sellNFT = async (_nft, _amount, _price) => {
    try {
      await Services.sellNFT(_nft, _amount, _price);
      await getSales();
    } catch (e) {
      console.error(e);
    }
  };
  const buyNFT = async (_id, _amount) => {
    try {
      await Services.buyNFT(_id, _amount);
      await getSales();
      await getUserNFT();
    } catch (e) {
      console.error(e);
    }
  };
  const changePrice = async (_id, _price) => {
    try {
      await Services.changePrice(_id, _price);
      await getSales();
      await getUserNFT();
    } catch (e) {
      console.error(e);
    }
  };

  const addUserRef = async (user) => {
    try {
      await Services.addUserRef(user);
      await getRef();
    } catch (e) {
      console.error(e);
    }
  };
  const createNFT = async (_name, _desc, _photo, _amount, _price) => {
    try {
      await Services.createNFT(_name, _desc, _photo, _amount, _price);
      await getUserNFT();
    } catch (e) {
      console.error(e);
    }
  };
  const createColl = async (_name, _desc, _ids, _amount) => {
    try {
      await Services.createColl(_name, _desc, _ids, _amount);
      await getUserNFT();
      await getColl();
    } catch (e) {
      console.error(e);
    }
  };
  const startAuc = async (_coll, _timeStart, _timeEnd, _minBet, _maxBet) => {
    try {
      await Services.startAuc(_coll, _timeStart, _timeEnd, _minBet, _maxBet);
      await getAuc();
    } catch (e) {
      console.error(e);
    }
  };
  const makeBet = async (_auc, _bet) => {
    try {
      await Services.makeBet(_auc, _bet);
      await getAuc();
      await getBet();
      await getColl();
    } catch (e) {
      console.error(e);
    }
  };
  const stopAuc = async (_auc) => {
    try {
      await Services.stopAuc(_auc);
      await getAuc();
      await getBet();
      await getColl();
    } catch (e) {
      console.error(e);
    }
  };
  const takeNFT = async (_auc) => {
    try {
      await Services.takeNFT(_auc);
      await getAuc();
      await getBet();
      await getColl();
    } catch (e) {
      console.error(e);
    }
  };

  const getColl = async () => {
    try {
      await Services.getColl().then((data) => {
        setColl(data);
      });
    } catch (e) {
      console.error(e);
    }
  };
  const getBet = async () => {
    try {
      await Services.getBet().then((data) => {
        setBet(data);
        console.log(data);
      });
    } catch (e) {
      console.error(e);
    }
  };
  const getSales = async () => {
    try {
      await Services.getSales().then((data) => {
        setSales(data);
      });
    } catch (e) {
      console.error(e);
    }
  };
  const getAuc = async () => {
    try {
      await Services.getAuc().then((data) => {
        setAuc(data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const values = {
    bet,
    getBet,
    coll,
    auc,
    getColl,
    startAuc,
    createNFT,
    getAuc,
    NFT,
    NFTbalance,
    balance,
    wallet,
    setWallet,
    createColl,
    addUserRef,
    changePrice,
    buyNFT,
    getSales,
    createRef,
    login,
    unLogin,
    getUserNFT,
    getUserBalance,
    getRef,
    ref,
    refUse,
    stopAuc,
    transferNFT,
    sellNFT,
    sales,
    makeBet,
    takeNFT,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
