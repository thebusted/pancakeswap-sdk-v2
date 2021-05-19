const {ChainId, Token, Pair, TokenAmount, WETH, Price} = require('./dist');

(async () => {
    const BUSD = new Token(ChainId.BSCTESTNET, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD');
    const SCZ = new Token(ChainId.BSCTESTNET, '0x39f1014a88c8ec087cedf1bfc7064d24f507b894', 18, 'SCZ');
    const test = new Price(SCZ, BUSD, '100', '101');
    console.log(test)
})();