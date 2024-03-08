import Web3 from "web3";
import abi from "./abi.json";

class Services {
  contractAddress = "0x6ec21B7b2509Cb24EF1C140F52eCF972C509f31d";
  web3 = new Web3(window.ethereum);
  contract = new this.web3.eth.Contract(abi, this.contractAddress);
  wallet = "";

  setWallet(wallet) {
    this.wallet = wallet;
  }

  async stopAuc(_auc) {
    try {
      return this.contract.methods.stopAuc(_auc).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async makeBet(_auc, _bet) {
    try {
      return this.contract.methods.makeBet(_auc, _bet).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async takeNFT(_auc) {
    try {
      return this.contract.methods.takeNFT(_auc).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async startAuc(_coll, _timeStart, _timeEnd, _minBet, _maxBet) {
    try {
      return this.contract.methods.startAuc(_coll, _timeStart, _timeEnd, _minBet, _maxBet).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async changePrice(_id, _price) {
    try {
      return this.contract.methods.changePrice(_id, _price).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async buyNFT(_id, _amount) {
    try {
      return this.contract.methods.buyNFT(_id, _amount, this.wallet).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async RefUse(_ref) {
    try {
      return this.contract.methods.useRef(_ref).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async transferNFT(_to, _nft, _amount) {
    try {
      return this.contract.methods.transferNFT(this.wallet, _to, _nft, _amount).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async sellNFT(_nft, _amount, _price) {
    try {
      return this.contract.methods.sellNFT(_nft, _amount, _price).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async createColl(_name, _desc, _ids, _amount) {
    try {
      return this.contract.methods.createColl(_name, _desc, _ids, _amount).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async createNFT(_name, _desc, _photo, _amount, _price) {
    try {
      return this.contract.methods.createNFT(_name, _desc, _photo, _amount, _price).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async createRef() {
    try {
      return this.contract.methods.createRef(this.wallet).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async addUserRef(_user) {
    try {
      return this.contract.methods.addUserRef(_user, this.wallet).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async getUserNFT() {
    try {
      return this.contract.methods.getUserNFT().call({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async getColl() {
    try {
      return this.contract.methods.getColl().call({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async getSales() {
    try {
      return this.contract.methods.getSales().call({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async getAuc() {
    try {
      return this.contract.methods.getAuc().call({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async getRef() {
    try {
      return this.contract.methods.getRef(this.wallet).call({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
  async getBet() {
    try {
      return this.contract.methods.getBet().call({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async getUserBalance() {
    try {
      return this.contract.methods.getUserBalance().call({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
}

export default new Services();
