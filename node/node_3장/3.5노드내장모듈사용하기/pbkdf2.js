const crypto = require('crypto');

crypto.randomBytes(64, (err,buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 10000, 64, 'sha512', (err,key) => {
        console.log('password:', key.toString('base64'))
    })
})
// salt: uJbwDAQgpxCcgEcfzhuo+7GaYfE69CC/0gAKAiY+FirsIuxQLzxxUBentd1mRmlgMW6txXJc3GxDPNFV/+ZrAw==
// password: P0pokaht2cIiG/6NjN0ipzh0nedPoLnxi/hcc4ybon78eVPBIypnDKHJ9mCwF81kpja+jnGmfIEAKy6TEUNqSA==
