const{Translate}= require('@google-cloud/translate').v2
//require('backend/.env').config();


//console.log(process.env.CREDENTIALS);

CREDENTIALS = {
    "type": "service_account",
    "project_id": "grabyourbags",
    "private_key_id": "0cced983a52f8971751e086ce1937946931f11ad",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDZ9C+1XRJH8BsF\nC6c7v6KKskCIuOdGabzu+ukw3eyGnuBFUgK85uUqdbNk1kcpAkQ4QTHHvrolAgKl\nPqoaWUy5gsdfg89mz0CiKSdIuOnJ3b+BTIKpK2HFVJbx1xpKKDpBg26EIYZpzjr+\n/sCyQiV7UWOOzaLm4p9RXFGkZpsMJ10j0oDoHQjvKQ9g0DhlzxRi68F5oXbMXQu+\nQD+OwfuXGgoYHgg94kwtCMBsFZaUZ9YTxCgrtSVjmqvyE1da7abF7XSD0GT9TRQI\nPzgqJG8m6JpYaEBRKH8E8WMVIqmyFpBKDSrcI8S+Wa1bTbmz+ZgYYiGJCxHeYyKG\nBdxLdcqpAgMBAAECggEABXq8vNDmUeHs0fmHJqrEk7tTwUQxx0zG+9SZynlX1hIW\nNhPv3u8onYLIQ+2ZrCOjEq176odGX4IPjjc3OFKcqdDKgaGbFBz7hWAmvU6tzP4K\nz528brOZIYiFA3c6kVj1zvoWjBKaMhyF0e2Wa1zbm6AyEi/kC60wn29kW49bUEi8\nrudqwVd9mMEnnZocBDSOJDh7fu+OhTmKib1OpGmUMQjaOCsWpmWHw5zmWaqQ/tgG\nDQtmIgbrKlwBWZNZprJnbELQd+lxqUgPeg9CUiQsgnsWLEVgLiCXhZbpWGVtB40i\nqDMjsziAwOCe1PXxqbpBosPcm0eW5QO0Nk1pf1AVUQKBgQDxIgLLmD5xoz1ZmgHi\n80Pvt+HNccQs22KJiDKB77uMI+dt4Tki1OMeShDALaiHWH93eMd0EYJsQPPmNSb8\nGX1G23JVobwVqul47YQz72gHe5/bFkjjWGRz5rYZA2UO1dRhLeHTUDsnHj+EvorH\nx7PRqwri5swnQOg1oF8FSQ5n8QKBgQDnZFK0IDptYocRCf19vOEg238mcXj2TkWS\ngFjYGROqOPHRclXmyppG5i/OR8zhpTXSLK203wzq7cIu2yvAzi5NXKAaZn30HtQO\nr1Rj78SstZUNH5U0EZpcPA34ALlJDxRV3OesF6MW4B3uzNiZwn059vH/tEwOtE4V\nd+sKtuEGOQKBgQC/KtyWdmODCgyYXa2DNKM2iEye6MPDYEZVjMGmG95PMyPGDBmV\nELvihouTIF+Mtc+QcxOFZGBG3JPAfYEjuj2EkHOrieaoMvCX64208udBj3PjaF5u\nxuQUsuLJH9Tdlw6h4JM5SVEsKSHoZnt1+VAJOJYP3zQZJq8x3KuYcBvYsQKBgQCq\n4CZHCKm9D46o4ZTGHw6togpizFdEpQaxqoBxjQs9oHHLd0DCf4mwo9pX3iQJ2mRF\ngmMA99rlPpEw4v+LkXcWADnnZRrMhVuaQJX0eyLlW+7nUxRu8DTquhqis34g2rbs\ntYaMSqRQh07zg2jNG5g4jwmlCHNGRJaJOhZjwiuo2QKBgQDGDwpceEaLT90tG0mS\nj6BzG4AFVGJdby6Ac/yYk4+me+bRwZXjfDq32cJvCLJIp+hJeUdjGQTion+OCV5K\ni8LPWxyhK5YJu83f05oI5uR+YDuBaEVpFrEbgHapWGQpp1/S4SQEWLLq46PdshMM\nDBsefCr7mCJOexWyVyVcA+GpIw==\n-----END PRIVATE KEY-----\n",
    "client_email": "grabyourbags@grabyourbags.iam.gserviceaccount.com",
    "client_id": "109148204658072615396",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/grabyourbags%40grabyourbags.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}

//CREDENTIALS = JSON.parse(CREDENTIALS)


const translate = new Translate({
    credentials: CREDENTIALS,
    projectId:"grabyourbags"
});



async function translateText() {
    const target = 'zh-CN'
    let text = "Have a good day"




     try {
    const [translations] = await translate.translate(text, target);
    const translatedText = Array.isArray(translations) ? translations[0] : translations;
    console.log(`Translation: (${target}) ${translatedText}`);
     } catch (error) {
    console.error('Translation error:', error);
    }
    }

    translateText();

module.exports = translateText;

