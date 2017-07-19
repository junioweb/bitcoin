import bitcoin from 'bitcoinjs-lib';
import bs58 from 'bs58';
import bigi from 'bigi';
//import bs58check from 'bs58check';

export default function walletGenerator(masterKey, campaignTitle, walletNumber) {
  const textualSeed = masterKey + campaignTitle + walletNumber
  const intermediarySeed = bs58.encode(bitcoin.crypto.sha256(bitcoin.crypto.sha256(textualSeed)))
  const seed = intermediarySeed.slice(0, 20)

  const hash = bitcoin.crypto.sha256(seed)
  const d = bigi.fromBuffer(hash)

  const privateKey = new bitcoin.ECPair(d, null, {compressed: false})

  const toWIF = privateKey.toWIF()
  const publicKey = privateKey.getPublicKeyBuffer().toString('hex')
  const address = privateKey.getAddress()

  return {
    privateKey: toWIF,
    publicKey: publicKey,
    address: address,
    seed: seed
  }
}