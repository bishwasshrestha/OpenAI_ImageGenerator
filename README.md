## OverView
OpenAi_ImageGenerator is a simple webapp built with Node.js and Express
that is integrated with OpenAi to generates a random image based on the input text


## App features
* Generates image with the help of AI.
* Confines size based on user's need.
* Select no of variations needed.

**Documentation to OpenAi is [here](https://platform.openai.com/docs/introduction)**
## Build
Clone this repository and import into text editor
```bash
git clone https://github.com/bishwasshrestha/OpenAI_ImageGenerator.git
```

## Screenshot
![image](https://user-images.githubusercontent.com/29711192/218102016-97adcb7b-291a-4bb4-9a7a-cee0d23433e3.png)

## Usage

Generate an API KEY at OpenAI and add it to the .env file.

Install the dependencies

 ``` bash
 npm install  
```
Run server

``` bash
npm start
```

Visit http://localhost:3000 in your browser.

The endpoint is at POST http://localhost:3000/openai/generateimage.
