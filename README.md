# Issue Tracker App

This Node.js + EJS application is designed to track issues/bugs for different projects. It offers functionalities to manage projects, create issues, and filter issues based on various criteria.

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)

## Introduction

The Issue Tracker App provides a platform to manage projects and their related issues/bugs. It offers a user-friendly interface for creating projects, adding issues, and efficiently filtering issues based on labels, authors, titles, and descriptions.

## Tech Stack

- Node.js
- EJS (Embedded JavaScript templates)
- Express.js
- MongoDB

## Features

- Home Page:
  - Display a list of projects.
  - Button to create a new project.
- Create Project Page:
  - Fields to input Name, Description, and Author for creating a new project.
- Project Detail Page:
  - Display bugs related to a selected project.
  - Filter issues by multiple labels.
  - Filter issues by author.
  - Search by title and description.
  - Button to create a new issue.
- Create Issue Page:
  - Fields to input Title, Description, and Labels for creating a new issue.

## Folder Structure

issue-tracker/  
│  
├── public/  
│ ├── css/  
│  
├── views/  
│ ├── partials/  
│ └── (EJS templates)  
│  
├── routes/  
│ └── (Express routes)  
│  
└── controllers/  
└── (Controllers handling app logic)  


- **public/**: Contains CSS and JS files for styling and client-side scripts.
- **views/**: Contains EJS templates for rendering views.
- **routes/**: Defines Express routes for different functionalities.
- **controllers/**: Includes controllers for handling app logic.
- **repositries/**: Includes repositories for handling models.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/issue-tracker.git

Walkthrough Video link
  http://google.com
