const CryptoJS = require('crypto-js')

const SECURITY_KEY = 'abc'

// Encrypt
export const getCiphertext = (clearText: string) => {
    return CryptoJS.AES.encrypt(clearText, SECURITY_KEY).toString()
}
// Decrypt
export const getClearText = (ciphertext: string) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECURITY_KEY)
    return bytes.toString(CryptoJS.enc.Utf8)
}
