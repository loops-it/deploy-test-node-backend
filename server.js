const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
// import {playAudioFile} from 'audic';
// const playAudioFile = require('audic');



// const { Configuration, OpenAIApi } = require("openai");
// const recorder = require('node-record-lpcm16');
// const speech = require('@google-cloud/speech');
// const textToSpeech = require('@google-cloud/text-to-speech');
// const { Translate } = require('@google-cloud/translate').v2;
// const fs = require('fs');
// const util = require('util');
const path = require("path");
// const player = require('play-sound')(opts = {})
require('dotenv').config();



const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
app.use(cors());

app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '/public')));




// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const translate = new Translate();
// const client = new speech.SpeechClient();
// const clienttext = new textToSpeech.TextToSpeechClient();


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'public') });
})

app.listen(port, () => {
    console.log(`Listning to port :${port}`);
});


module.exports = app
// ========================= user message into english ========================
// app.post("/save-rating", async (req, res) => {
//     const ratingValue = req.body.ratingValue;
//     const feedbakMessage = req.body.feedbakMessage;
//     const chatId = req.body.chatId;

//     try {
//         console.log("user chatId : ", chatId);
//         console.log("user feedbakMessage : ", feedbakMessage);
//         console.log("user ratingValue : ", ratingValue);

//         // const success = "Hi, wait for me.."
//         // res.json({ success })
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })
// app.post("/live-chat-user", async (req, res) => {
//     const user_message = req.body.user_Message;
//     const chatId = req.body.chatId;

//     try {
//         console.log("user message : ", user_message);
//         // console.log("user id : ", chatId);

//         const success = "Added"
//         res.json({ success })
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })

// app.post("/live-chat-agent", async (req, res) => {
//     const chatId = req.body.chatId;
//     const chatStatus = "closed"
//     const agent_name = "TJ";
//     try {
//         console.log("user id : ", chatId);

//         const agent_message = "Hi, I'm thinushika"
//         res.json({ agent_message, chatStatus,agent_name })
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })
// ========================= user message into english ========================









// app.post("/switch-to-live-agent", async (req, res) => {
//     const chatId = req.body.chatId;
// console.log("switch : ",chatId)
//     try {
//           const success = "Success"
//           res.json({ success })
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })







// ============================================================================
// ==============================   Translate =================================

// ========================= user message into english ========================
// app.post("/translate-to-english", async (req, res) => {
//     const user_message = req.body.user_Message;
//     const language = req.body.language;
//     const chatId = req.body.chatId;

//     console.log('chat id:', chatId)
//     console.log("response frontend : ", user_message)

//     let selectedLanguage = 'en'

//     if (language == 'sinhala') {
//         selectedLanguage = 'si'
//     }
//     else if (language === 'tamil') {
//         selectedLanguage = 'ta'
//     }
//     else {
//         selectedLanguage = 'en'
//     }
//     console.log('language:', selectedLanguage)
//     try {
//         let [translationsToEng] = await translate.translate(user_message, 'en');
//         translationsToEng = Array.isArray(translationsToEng) ? translationsToEng : [translationsToEng];
//         console.log(translationsToEng)
//         res.json({ translationsToEng })

//         translationsToEng = '';
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })
// // ========================= user message into english ========================
// // ========================= bot message into language ========================
// app.post("/translate-to-language", async (req, res) => {
//     const Message = req.body.resultMessage;
//     console.log("message from bot: ", Message);
//     const language = req.body.language;
//     let selectedLanguage = 'en'

//     if (language == 'sinhala') {
//         selectedLanguage = 'si'
//     }
//     else if (language === 'tamil') {
//         selectedLanguage = 'ta'
//     }
//     else {
//         selectedLanguage = 'en'
//     }

//     try {

//         let [translations] = await translate.translate(Message, selectedLanguage);
//         translations = Array.isArray(translations) ? translations : [translations];
//         console.log("teranslatet bot message", translations)
//         res.json({ translations })
//         translations = '';
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })
// ========================= bot message into language ========================









// ============================================================================
// =================================   speach =================================

// ================= speech recognition - transcript user =====================
// app.post("/recording-start", async (req, res) => {
//     let userMessageTime = new Date().toLocaleTimeString()

//     try {
//         if (!transcript) {
//             transcript = await speechRecognition();
//             console.log("Transcript =====> " + transcript);
//         }
//         res.json({ transcript, userMessageTime })

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     } finally {
//         transcript = '';
//     }

// })
// ================= speech recognition - transcript user =====================













// =======================  text bot + translate ==============================
// app.post("/send-message", async (req, res) => {
//     // get values
//     let userTextMessageTime = new Date().toLocaleTimeString()
//     const user_message = req.body.user_Message;
//     const language = req.body.language;

//     // set selected language
//     // console.log(language);
//     let selectedLanguage = '';
//     if (language === 'SINHALA') {
//         selectedLanguage = 'si';
//     } else if (language === 'TAMIL') {
//         selectedLanguage = 'ta';
//     } else {
//         selectedLanguage = 'en';
//     }

//     try {
//         // translate message to engish
//         let [translationsToEng] = await translate.translate(user_message, 'en');
//         translationsToEng = Array.isArray(translationsToEng) ? translationsToEng : [translationsToEng];
//         // console.log("use msg: " + user_message);

//         // GPT prompt
//         const prompt = `answer to : ${user_message}`;
//         const completion = await openai.createCompletion({
//             model: "text-davinci-003",
//             prompt: prompt,
//             temperature: 0.6,
//             max_tokens: 256,
//         });
//         resultMessage = completion.data.choices[0].text;
//         // console.log("bot msg: " + resultMessage)


//         // translate english to selected language
//         let [translations] = await translate.translate(resultMessage, selectedLanguage);
//         translations = Array.isArray(translations) ? translations : [translations];

//         // console.log(translations)
//         res.json({ translations, userTextMessageTime })

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })
// =======================  text bot + translate ==============================


// let transcript = '';
// ================== start recording ===========================
// app.post("/start-recording", async (req, res) => {
//     let userMessageTime = new Date().toLocaleTimeString()

//     try {
//         if (!transcript) {
//             transcript = await speechRecognition();
//             console.log("Transcript =====> " + transcript);
//         }
//         res.json({ transcript, userMessageTime })

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     } finally {
//         transcript = '';
//     }

// })




// =======================  voice bot + google speech recognition ==============================
// app.post("/send-audio", async (req, res) => {
//     const message = req.body.user_Message;

//     try {

//         // gpt prompt
//         const prompt = `answer to : ${message}`;
//         const completion = await openai.createCompletion({
//             model: "text-davinci-003",
//             prompt: prompt,
//             temperature: 0.6,
//             max_tokens: 256,
//         });
//         result = completion.data.choices[0].text;
//         console.log(`gpt result: ${result}`);
//         let botMessageTime = new Date().toLocaleTimeString()


// audio generate
// const requesttext = {
//     input: { text: result },
//     voice: { languageCode: 'en-gb', ssmlGender: 'FEMALE' },
//     audioConfig: { audioEncoding: 'MP3' },
// };

// save audio file
// const [response] = await clienttext.synthesizeSpeech(requesttext);
// const writeFile = util.promisify(fs.writeFile);
// await writeFile('./public/output.mp3', response.audioContent, 'binary');
// console.log(`Audio synthesized, content-length: ${response.audioContent.length} bytes`)
// const readStream = response.audioContent;
// console.log(`content: ${readStream} bytes`);

// result = JSON.stringify(result);
// botMessageTime = JSON.stringify(botMessageTime);
// const url = `${req.protocol}://${req.hostname}:5000/output.mp3`;



// res.set({
//     "Content-Type": "audio/mpeg",
//     "Content-Length": response.audioContent.length,
// }).json({ result, botMessageTime, readStream });
// res.set({
//     'Content-Type': 'audio/mpeg',
//     'Content-Length': response.audioContent.length
//   });
//   res.send(readStream, result, botMessageTime);
// res.json({ result, botMessageTime, url });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })
// =======================  voice bot + google speech recognition ==============================

// const sound = player.play('output.mp3', function (err) {
//     if (err) {
//       console.error(err);
//     }
//   });

//   sound.on('exit', function (code) {
//     console.log('audio file finished playing with code:', code);
//   });

// app.get('/audio', async (req, res) => {
//     res.sendFile(path.join(__dirname, './public/output.mp3'));
//     await player.play('output.mp3');
// });

// app.get('/audio-welcome', async (req, res) => {
//     res.sendFile(path.join(__dirname, './public/welcome.mp3'));
//     await player.play('welcome.mp3');
// });

// app.get("/download-audio", async (req, res) => {
//     const file = `${__dirname}/output.mp3`;
//     res.download(file); // Set disposition and send it.
// });














// =======================  video bot + google speech recognition + d-id ==============================
// app.post("/get-video", async (req, res) => {
//     const message = req.body.resultMessage;
//     let avatarVideoId = '';
//     let avatarVideoURL = '';

//     try {

//         // d-id id generate
//         await fetch('https://api.d-id.com/talks', {
//             method: 'POST',
//             headers: {
//                 "accept": 'application/json',
//                 'Authorization': `Basic ${process.env.DID_API_KEY}`,
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(
//                 {
//                     "driver_url": "bank://lively",
//                     "script": {
//                         "provider": {
//                             "type": "microsoft",
//                             "voice_id": "Jenny"
//                         },
//                         "input": `${message}`,
//                         "type": "text"
//                     },
//                     "source_url": "https://clips-presenters.d-id.com/amy/image.png"
//                 }
//             )
//         }).then(async response => {
//             const responseData = await response.json();
//             console.log("firstcall",responseData);
//             avatarVideoId = responseData.id
//             console.log("fist call id : ", avatarVideoId)
//         })
//             .catch(error => {
//                 console.error('Error sending transcript to server:', error);
//             });

//         // d-id get url
//         await fetch(`https://api.d-id.com/talks/${avatarVideoId}`, {
//             method: 'GET',
//             headers: {
//                 "accept": 'application/json',
//                 'Authorization': `Basic ${process.env.DID_API_KEY}`,
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then(async response => {
//                 const responseVideoData = await response.json();

//                 avatarVideoURL = responseVideoData.result_url
//                 console.log(avatarVideoURL);
//             })
//             .catch(error => {
//                 console.error('Error sending transcript to server:', error);
//             });



//         // send response
//         res.json({ avatarVideoURL })

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })
// app.post("/get-video", async (req, res) => {
//     const message = req.body.resultMessage;
//     console.log("bot message : ", message);
//     let avatarVideoId = '';
//     let avatarVideoURL = '';

//     try {
// const responseData = await fetch('https://api.d-id.com/talks', {
//     method: 'POST',
//     headers: {
//         "accept": 'application/json',
//         'Authorization': `Basic ${process.env.DID_API_KEY}`,
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         "driver_url": "bank://lively",
//         "script": {
//             "provider": {
//                 "type": "microsoft",
//                 "voice_id": "Jenny"
//             },
//             "input": `${message}`,
//             "type": "text"
//         },
//         "source_url": "https://clips-presenters.d-id.com/amy/image.png"
//     })
// })
// const responseDataJson = await responseData.json();
// avatarVideoId = responseDataJson.id;
// console.log("first call id: ", avatarVideoId);
// url = `https://api.d-id.com/talks/${avatarVideoId}`
// console.log(url)

// // send second API request after 20 seconds
// setTimeout(async () => {
//     const responseVideoData = await fetch(url, {
//         method: "GET",
//         headers: {
//             accept: "application/json",
//             Authorization: `Basic ${process.env.DID_API_KEY}`,
//             "Content-Type": "application/json",
//         },
//     });
//     const responseVideoDataJson = await responseVideoData.json();
//     console.log("url: ", responseVideoDataJson);
//     avatarVideoURL = responseVideoDataJson.result_url;
//     // avatarVideoURL = responseVideoDataJson.source_url;
//     console.log("id result: ", responseVideoDataJson);
//     console.log("avatarVideoURL: ", avatarVideoURL);
//     console.log(responseVideoDataJson.result_url);
//     res.json({ avatarVideoURL });
// }, 10000); // 20 seconds delay

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })


// =======================  video bot + google speech recognition + d-id ==============================


// const speechRecognition = async () => {
//     // config
//     const encoding = 'LINEAR16';
//     const sampleRateHertz = 16000;
//     const languageCode = 'en-US';

//     const request = {
//         config: {
//             encoding: encoding,
//             sampleRateHertz: sampleRateHertz,
//             languageCode: languageCode,
//         },
//         interimResults: false,
//     };

//     const recognizeStream = client
//         .streamingRecognize(request)
//         .on('error', console.error);

//     //   start recording
//     const recorderStream = recorder
//         .record({
//             sampleRateHertz: sampleRateHertz,
//             threshold: 0,
//             endOnSilence: true,
//             verbose: false,
//             recordProgram: 'rec',
//             silence: '10.0',
//         })
//         .stream()
//         .on('error', console.error);

//     recorderStream.pipe(recognizeStream);

//     // create new promise
//     return new Promise((resolve, reject) => {
//         recognizeStream
//             .on('data', data => {
//                 const transcript = data.results[0].alternatives[0].transcript;
//                 resolve(transcript);
//             })
//             .on('error', error => {
//                 console.error(error);
//                 reject(error);
//             })
//     });
// };



// app.listen(port, () => {
//     console.log(`Server started at http://localhost:${port}`);
// });


// module.exports = app