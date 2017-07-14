import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import bitcoin from 'bitcoinjs-lib';
import bs58 from 'bs58';
import bigi from 'bigi';
import bs58check from 'bs58check';

const masterKey = 'talents.jun2017'
const campaign = {
  title: 'Recife Campaign',
  wallets: [
    {
      amount: 0.005,
      expirationDate: '2017-07-26'
    },
    {
      amount: 0.005,
      expirationDate: '2017-07-27'
    },
    {
      amount: 0.005,
      expirationDate: '2017-07-25'
    },
    {
      amount: 0.005,
      expirationDate: '2017-07-25'
    },
    {
      amount: 0.005,
      expirationDate: '2017-07-25'
    }
  ]
}

class App extends Component {
  constructor() {
    super()

    this.walletGenerator = this.walletGenerator.bind(this)
  }

  walletGenerator(masterKey, campaign) {
    campaign.wallets.map((wallet, index) => {
      const textualSeed = masterKey + campaign.title + index
      const intermediarySeed = bs58.encode(bitcoin.crypto.sha256(bitcoin.crypto.sha256(textualSeed)))
      const seed = intermediarySeed.slice(0, 20)

      const hash = bitcoin.crypto.sha256(seed)
      const d = bigi.fromBuffer(hash)

      const privateKey = new bitcoin.ECPair(d, null, {compressed: false})

      const toWIF = privateKey.toWIF()
      const publicKey = privateKey.getPublicKeyBuffer().toString('hex')
      const address = privateKey.getAddress()
      
      const decoded = bs58check.decode(toWIF)
      console.log(decoded)
      console.log(bs58check.encode(decoded))
    })
  }

  render() {
    return (
      <div className="App">
        {this.walletGenerator(masterKey, campaign)}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
