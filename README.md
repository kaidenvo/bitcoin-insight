This project was created to study https://insight.bitpay.com/.

To install and run, simply clone this repo and run:

~~~
$ yarn install # or, npm install
$ yarn start   # or, npm start
~~~

It is by no mean to be comprehensive. It is only meant for studying bitpay and using
new set of UI technologies.

## What's implemented:
* Homepage
* Block and its detailed information page
* Next/Previous block navigation
* Search
* Somewhat responsive to resolution/mobile platform
* BTC to USD change rate

## What is missing from the original site:
* WebSocket implementation to get transactions (XDM prevents socket listening)
* Transaction detail page.
* Blocks filtered by date
* Block detail page with sticky header and transaction details
* Localization (I don't have translated text)
* QR Code scan
* Status page
* Verify message and Broadcast transaction

## What technologies:
* Boilerplate by create-react-app. So, of course, react is the main tech.
* Redux (First time for me. It's a good exercise to get to know Redux)
* Fetch API
* Time formatting using react-moment
* react-router
* web-pack build with code-splitting

## What needs to be done:
* Unit Tests
* Convert more "legacy" css to use flex-box
* Error handling
