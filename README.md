# MQDF - Mobile Storefront

> [Mieux Que Des Fleurs](http://www.mieuxquedesfleurs.com/) (Literal meaning: "Better than flowers") is a French website whose aim is to spread love by shipping it: order and send balloons to your beloved ones!

*This repository is the mobile storefront of MQDF. It has been built with React Native, the Shopify SDK, Redux and Styled-Components. The goal of exposing the source code is to show to the community an example of React Native application using the Shopify APIs and their Mobile Buy SDK. Also, it can be seen as a showcase to demonstrate what I'm currently busy with. Any feedback is welcome! :)*

**Still in development!**

![Screenshots](https://cloud.githubusercontent.com/assets/5517450/15112550/4a1e31ae-1632-11e6-9b11-87af0af066ac.png "Better Than Flowers - Screenshots")

## Installation

* Install node > v4.0 (NVM strongly recommended).
* Install 'watchman' with brew: `brew install watchman`.
* Intall 'react-native-cli' globally: `npm install -g react-native-cli`.
* Install all the node modules required: `npm install`.

## Get started

* You will need your Shopify administration access to get it running!
* Create a `.env` file where you define private credentials from your Shopify administration:
```
SHOPIFY_API_KEY=XXX
SHOPIFY_SDK_KEY=XXX
SHOPIFY_PASSWORD=XXX
SHOPIFY_DOMAIN=myshopname.myshopify.com
```
* Run the project: `react-native run-ios`.

## Xcode

To open and run the project with Xcode:

```bash
cd ios
pod install
open mqdf.xcworkspace
```

## Links
* [React Native Shopify](https://github.com/shoutem/react-native-shopify) has been used to bridge the Shopify SDK to React Native.
