# Backend App README

## Overview

This repository contains the backend application for the Property Viewer project. The backend is implemented in Node.js using the Express framework and interacts with a MySQL database for storing property information.

## Table of Contents

- [Backend App README](#backend-app-readme)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Database Setup, Upload photos \& Deploy to AWS.](#database-setup-upload-photos--deploy-to-aws)

## Requirements

- Node.js (v14 or later)
- npm package manager
- MySQL database
- Install AWS CLI:
  Ensure you have the AWS Command Line Interface (CLI) installed on your machine.You can download it from the official AWS CLI website.
- Configure AWS CLI:
  Run aws configure and provide your AWS Access Key ID, Secret Access Key, default region, and output format.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Backend
2. Install dependencies:
   
   ```bash
   npm install
## Configuration

Create a .env file in the root directory and configure the following .env.example file.

## Database Setup, Upload photos & Deploy to AWS.
    aws cloudformation create-stack --stack-name MyScraper --template-body cloudformation-template.yaml
