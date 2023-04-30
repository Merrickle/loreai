// Requiring express for routing
import express from 'express';

import cors from 'cors';
  
// Creating app from express
const app = express()

//Defines __dirname as the current path
const __dirname = "G:/Projects/Javascript/dungeontools/server/"

// Using cors for cross origin requests
app.use(cors());
// Requiring in-built file system
import { readFileSync } from 'fs';

// Requiring node-fetch for api requests
import fetch from "node-fetch";
  
// GET which sends an api request to the openAi api using a prompt input and reutrning the response to the client
app.get('/gen/:type/prompt/:prompt', async (req, res) => {
    const prompt = req.params.prompt
    const type = req.params.type;
    const apiKey = JSON.parse(readFileSync("./.data/api_key.json", "utf-8")).key
      const url = "https://api.openai.com/v1/completions";
      let data = {};
    
      if (type == "quote"){
        const input = `Craft a fictional quote or passage from an imagined book or speech that incorporates and/or expands upon the elements provided in ${prompt}. Employ vivid and literary language while weaving in references to characters, locations, time periods, or other aspects of the fictional world. Attribute the quote to an invented author, including any titles they may hold, and indicate the year it was written or spoken within the context of their universe. Steer clear of existing intellectual properties and quotes, and ensure the output remains under 250 words.`;
        data = await queryAPI(input);
        const output = data.choices[0].text;
        res.send(`${output}`);
        return;
      }else if (type == "npc"){
        const input = `Craft a fictional character by incorporating and/or expanding on the elements provided in ${prompt}. Employ vivid and literary language, and make references to other characters, places, times, or aspects of the fictional world when appropriate. Describe the character's appearance, personality, backstory, and other pertinent details. Steer clear of existing intellectual properties and characters. Keep the output under 350 words.`;
        data = await queryAPI(input);
        const output = data.choices[0].text;
        res.send(`${output}`);
        return;
      }else if (type == "item"){
        const input = `Create a fictional item by integrating and/or elaborating on the user inputs (${prompt}). Utilize vivid and literary language, and incorporate references to other characters, locations, time periods, or aspects of the fictional world when relevant. Detail the item's appearance, history, and other significant information. Avoid using existing intellectual properties and items. Keep the output under 250 words.`;
        data = await queryAPI(input);
        const output = data.choices[0].text;
        res.send(`${output}`);
        return;
      }else if (type == "location"){
        const input = `Develop a fictional location by weaving in and/or expanding on the details from ${prompt}. Use rich and literary language, and reference other characters, places, times, or elements of the fictional world when necessary. Describe the location's appearance, history, and other relevant aspects. Refrain from using existing intellectual properties and locations. Keep the output under 450 words.`;
        data = await queryAPI(input);
        const output = data.choices[0].text;
        res.send(`${output}`);
        return;
      }else if(type == "plothook"){
        const input = `Develop a fictional plot hook by weaving in and/or expanding on the details from ${prompt}. Use rich and literary language, and reference other characters, places, times, or elements of the fictional world when necessary. Describe the plot's appearance, history, and other relevant aspects. Refrain from using existing intellectual properties and plots. Keep the output under 250 words.`;
        data = await queryAPI(input);
        const output = data.choices[0].text;
        res.send(`${output}`);
        return;
      }else if(type == "quest"){
        const input = `Develop a fictional quest by weaving in and/or expanding on the details from ${prompt}. Use rich and literary language, and reference other characters, places, times, or elements of the fictional world when necessary. Describe the quest's appearance, history, and other relevant aspects. Refrain from using existing intellectual properties and quests. Keep the output under 250 words.`;
        data = await queryAPI(input);
        const output = data.choices[0].text;
        res.send(`${output}`);
        return;
      }else if(type == "spell"){
        const input = `Develop a fictional spell by weaving in and/or expanding on the details from ${prompt}. Use rich and literary language, and reference other characters, places, times, or elements of the fictional world when necessary. Describe the spell's appearance, history, and other relevant aspects. Refrain from using existing intellectual properties and spells. Keep the output under 250 words.`;
        data = await queryAPI(input);
        const output = data.choices[0].text;
        res.send(`${output}`);
        return;
      }else if(type == "monster"){
        const input = `Develop a fictional monster by weaving in and/or expanding on the details from ${prompt}. Use rich and literary language, and reference other characters, places, times, or elements of the fictional world when necessary. Describe the monster's appearance, history, and other relevant aspects. Refrain from using existing intellectual properties and monsters. Keep the output under 250 words.`;
        data = await queryAPI(input);
        const output = data.choices[0].text;
        res.send(`${output}`);
        return;
      }else{
        res.send("Invalid type")
        return;
      }
})

// Creating server at port 3000
app.listen(3000,function(req,res){
    console.log('Server started at 3000');
    //Displays default message on page load
    console.log('                                                                                                                           \r\n ____                _____         _____        ______                  ______       ______        _____    ____      ____ \r\n|    |          ____|\\    \\    ___|\\    \\   ___|\\     \\             ___|\\     \\  ___|\\     \\   ___|\\    \\  |    |    |    |\r\n|    |         \/     \/\\    \\  |    |\\    \\ |     \\     \\           |    |\\     \\|     \\     \\ |    |\\    \\ |    |    |    |\r\n|    |        \/     \/  \\    \\ |    | |    ||     ,_____\/|          |    |\/____\/||     ,_____\/||    | |    ||    |    |    |\r\n|    |  ____ |     |    |    ||    |\/____\/ |     \\--\'\\_|\/       ___|    \\|   | ||     \\--\'\\_|\/|    |\/____\/ |    |    |    |\r\n|    | |    ||     |    |    ||    |\\    \\ |     \/___\/|        |    \\    \\___|\/ |     \/___\/|  |    |\\    \\ |    |    |    |\r\n|    | |    ||\\     \\  \/    \/||    | |    ||     \\____|\\       |    |\\     \\    |     \\____|\\ |    | |    ||\\    \\  \/    \/|\r\n|____|\/____\/|| \\_____\\\/____\/ ||____| |____||____ \'     \/|      |\\ ___\\|_____|   |____ \'     \/||____| |____|| \\ ___\\\/___ \/ |\r\n|    |     || \\ |    ||    | \/|    | |    ||    \/_____\/ |      | |    |     |   |    \/_____\/ ||    | |    | \\ |   ||   | \/ \r\n|____|_____|\/  \\|____||____|\/ |____| |____||____|     | \/       \\|____|_____|   |____|     | \/|____| |____|  \\|___||___|\/  \r\n  \\(    )\/        \\(    )\/      \\(     )\/    \\( |_____|\/           \\(    )\/       \\( |_____|\/   \\(     )\/      \\(    )\/    \r\n   \'    \'          \'    \'        \'     \'      \'    )\/               \'    \'         \'    )\/       \'     \'        \'    \'     \r\n                                                   \'                                    \'                                  ')
})

//Serves client index.html when the client requests the root directory
app.get('/', function(req, res) {
    res.sendFile('/home/nodejs/index.html');
})

async function queryAPI(input){
  const prompt = input;
    const apiKey = JSON.parse(readFileSync("./.data/api_key.json", "utf-8")).key
      const url = "https://api.openai.com/v1/completions";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: prompt,
          temperature: 0.68,
          max_tokens: 500,
          top_p: 1,
          frequency_penalty: 0.27,
          presence_penalty: 0,
        }),
      });

      const data = await response.json();
      return data;
};