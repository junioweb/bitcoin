import bitcoin from 'bitcoinjs-lib';
import bs58 from 'bs58';
import bigi from 'bigi';
//import bs58check from 'bs58check';

export default function walletGenerator(masterKey, campaign) {
  return campaign.wallets.map((wallet, index) => {
    const textualSeed = masterKey + campaign.title + index
    const intermediarySeed = bs58.encode(bitcoin.crypto.sha256(bitcoin.crypto.sha256(textualSeed)))
    const seed = intermediarySeed.slice(0, 20)

    const hash = bitcoin.crypto.sha256(seed)
    const d = bigi.fromBuffer(hash)

    const privateKey = new bitcoin.ECPair(d, null, {compressed: false})

    const toWIF = privateKey.toWIF()
    const publicKey = privateKey.getPublicKeyBuffer().toString('hex')
    const address = privateKey.getAddress()
    
    /* const decoded = bs58check.decode(toWIF)
    console.log(decoded)
    console.log(bs58check.encode(decoded)) */

    return {
      privateKey: toWIF,
      publicKey: publicKey,
      address: address,
      seed: seed
    }
  })
}