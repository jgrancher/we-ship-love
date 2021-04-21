# [ARCHIVED] We Ship Love - Mobile application

**⚠️ Update - April 2021**: Project archived. It was mainly intended to be a showcase/demo of what was possible to do in React Native & the Shopify SDK, but was not maintained afterwards.

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

## Deployment

* This app uses [CodePush](http://microsoft.github.io/code-push/) to deploy updates instantly.
* To check the existing deployment keys of CodePush:

```bash
code-push deployment ls WeShipLove -k
```

* To release an update (that will use the key set into `Info.plist`):

```bash
code-push release-react WeShipLove ios
```

* To promote a release from `Staging` to `Production` environment:

```bash
code-push promote WeShipLove Staging Production
```

## Links
* [React Native Shopify](https://github.com/shoutem/react-native-shopify) has been used to bridge the Shopify SDK to React Native.
