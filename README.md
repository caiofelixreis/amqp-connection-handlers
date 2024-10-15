# AMQP Connection Test Repository

This repository explores different approaches for handling AMQP connection stability, disconnection, and reconnection scenarios. The goal is to identify and implement strategies that ensure robust, reliable connections to AMQP brokers, specifically targeting issues such as sudden disconnections, network instability, and automatic reconnection.

## Background

Maintaining a stable connection to an AMQP broker can be challenging, especially when dealing with network fluctuations or broker-side disconnections. This repository aims to test and compare various techniques to handle these issues, with a focus on reconnecting strategies, error handling, and connection recovery.

## Features

+ Connection Approaches: Examples using different connection handling patterns.
+ Error Handling: Strategies for catching and handling common AMQP connection errors.
+ Reconnection Logic: Techniques to ensure reliable reconnection without losing messages or causing downtime.
+ Logging and Monitoring: Integrated logging to help monitor connection status and identify connection issues.

# Getting Started

## Prerequisites

    Node.js (version 14 or higher)    

## Installation

Clone the repository:

    git clone https://github.com/caiofelixreis/amqp-connection-handlers

## Install dependencies:

    cd amqp-connection-handlers
    npm install

## Configuration

Create a .env file in the root directory, consult .env.example.

## Running RabbitMQ with Docker Compose

This repository includes a Docker Compose file to quickly set up a local RabbitMQ broker.

Make sure you have a .env file with your RabbitMQ credentials:

    AMQP_USER=guest
    AMQP_PASS=guest

### Start RabbitMQ:

    docker-compose up -d

Access the RabbitMQ Management Console at http://localhost:15672.

### To stop the RabbitMQ service, run:

    docker-compose down

# Running the Tests

To start testing the connection approaches:

### amqp-connection-manager
`npm run amqp-connection-manager`

### Approaches Explored

Using the amqp-connection-manager library that supports automatic reconnection.
    
    Pros: Easier to implement; reduces downtime.
    
    Cons: Potential for reconnection loops if not managed correctly.

___Feel free to open issues or pull requests if you have suggestions for improvements or want to add new approaches.___