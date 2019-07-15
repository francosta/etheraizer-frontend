# Overview

Etheraizer is a crowdfunding app that works on the Blockchain.
Users can create and present their projects for funding as well as support other projects on the platform.
All projects get a blockchain address, where the current balance as well as project owner (which are shown in the frontend) can be verified.
All support transactions can also be easily verified, both in the frontend and in the blockchain.

Users can pay and fund projects using the Ethereum blockchain and connecting their wallets through Metamask.

# Motivation

This app was built as the final project for the Flatiron School Software Engineering Bootcamp. I have built the entire application in two weeks.
A blockchain-based crowdfunding app, especially as cryptocurrencies get more stable, would be able to address some of the shortcomings of regular crowdfunding platforms, especially in what concerns transparency and intermediary fees.

# Server

The backend API was built using Ruby on Rails with a PostgreSQL database. This can be found in a different [GitHub repository](https://github.com/francosta/etheraizer-backend).

The blockchain-related backend is written in Javascript and blockchain smart contracts in Solidity.
I have adopted a TDD approach for writing the contracts, using Mocha.


# Client

The client-side of the application is built in React, using Next.js for server-side rendering.
The frontend design was made using Semantic UI and CSS.

# Screenshots and Video Demo

You can check a video demo of Etheraizer [here](https://youtu.be/lR9p1DDKhJE). 



