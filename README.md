# We Ship Love - Mobile application

This repository contains the mobile storefront source code for [We Ship Love](https://weshiplove.com/). It has been built with React Native, the Shopify SDK, Redux and Styled-Components. The goal of exposing the source code is to show to the community an example of React Native application using the Shopify APIs and their Mobile Buy SDK. Also, it can be seen as a showcase to demonstrate what I'm currently busy with. Any feedback is welcome! :)

**Still in development!**

![Screenshots](https://cloud.githubusercontent.com/assets/5517450/15112550/4a1e31ae-1632-11e6-9b11-87af0af066ac.png "Better Than Flowers - Screenshots")

## Installation

* Install 'watchman' with brew: `brew install watchman`.
* Intall 'react-native-cli' globally: `npm install -g react-native-cli`.
* Install all the node modules required: `npm install`.

## Configuration

You will need your Shopify administration access to get it running!

* Create a `.env` file where you define private credentials from your Shopify administration.
* The `SHOPIFY_BUY_SDK_KEY` value is accessible from the 'Sales channels > Mobile App' menu.
* THE `SHOPIFY_API_KEY` and `SHOPIFY_API_PASSWORD` are set in the 'Apps > Private apps' menu. This API is used to extend the possibilities of the BUY SDK, to get the store pages, delivery countries, etc.

```
SHOPIFY_BUY_SDK_KEY=XXX
SHOPIFY_API_KEY=XXX
SHOPIFY_API_PASSWORD=XXX
SHOPIFY_DOMAIN=myshopname.myshopify.com
```

## Get started

* To open and run the project (with Xcode, as we install Pod dependencies):

```bash
cd ios
pod install
open WeShipLove.xcworkspace
```

## Links
* [React Native Shopify](https://github.com/shoutem/react-native-shopify) has been used to bridge the Shopify SDK to React Native.
