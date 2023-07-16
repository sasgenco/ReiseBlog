const{Translate}= require('@google-cloud/translate').v2
//require('backend/.env').config();


//console.log(process.env.CREDENTIALS);

CREDENTIALS = {}

//CREDENTIALS = JSON.parse(CREDENTIALS)


const translate = new Translate({
    credentials: CREDENTIALS,
    projectId:"grabyourbags"
});



async function translateText(title,description,address) {
    //const target = 'zh-CN'
    const target = 'es'


     try {
         const [translatedTitle, translatedDescription, translatedAddress] = await translate.translate([title, description, address], target);

         //const translatedText = Array.isArray(translations) ? translations[0] : translations;
   // console.log(`Translation: (${target}) ${translatedText}`);
         console.log(`Translated Title: (${target}) ${translatedTitle}`);
         //console.log(`Translated Description: (${target}) ${translatedDescription}`);
         //console.log(`Translated Address: (${target}) ${translatedAddress}`);
     } catch (error) {
    console.error('Translation error:', error);
    }
    }



module.exports = translateText;

