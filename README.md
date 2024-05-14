![image](https://github.com/muhammad-nabih/E-Commerce/assets/86538085/2ec6ed09-321a-43d2-a9ae-63ee09d94e24)
![image](https://github.com/muhammad-nabih/E-Commerce/assets/86538085/04076690-3351-4310-bdbd-527f3fc44fd8)
![image](https://github.com/muhammad-nabih/E-Commerce/assets/86538085/96edbb53-24a8-4053-8e00-e2e7d73aeccf)
![image](https://github.com/muhammad-nabih/E-Commerce/assets/86538085/26f5bdea-6597-4764-a802-4070f134b383)
![image](https://github.com/muhammad-nabih/E-Commerce/assets/86538085/884f2eff-4c88-46d9-a038-408f5de077a8)
# E-commerce Project

## Overview

This project is an E-commerce platform that includes both a frontend and a backend. The frontend is built using React, while the backend is powered by Strapi, a headless CMS.

## Project Structure

### Frontend (client)

The frontend part of the project resides in the `client` directory. It is a React application structured as follows:

- **node_modules**: Contains all the npm packages.
- **public**: Public assets and the main `index.html` file.
- **src**: Source code for the React application.
  - **assets**: Contains static assets such as images and styles.
  - **components**: Reusable React components.
    - **Cart**: Components related to the shopping cart functionality.
    - **Categories**: Components for product category listings.
    - **CheckBox**: Custom checkbox components.
    - **Footer**: Footer component.
    - **Landing**: Components for the landing page.
    - **LandingInfo**: Information sections for the landing page.
    - **Navbar**: Navigation bar components.
    - **NavItem**: Navigation item components.
    - **NotFoundPage**: Component for 404 error page.
    - **ProductDetails**: Components for displaying detailed product information.
    - **Products**: Components for displaying product listings.
    - **SkeletonProduct**: Placeholder components for loading states.
    - **Star**: Star rating components.
    - **Timeline**: Timeline components for order tracking.
    - **TitleSection**: Title section components.
  - **contexts**: Context providers for global state management.
  - **hooks**: Custom React hooks.
  - **pages**: Main pages of the application.
    - **About**: About page components.
      - `About.jsx`: The About page component.
      - `About.module.css`: CSS module for the About page.
    - **Contact**: Contact page components.
    - **Services**: Services page components.
  - **redux**: Redux store configuration and slices.
  - **utilities**: Utility functions and helpers.

### Backend (server)

The backend part of the project is located in the `server` directory. It is a Strapi application structured as follows:

- **.strapi**: Strapi-specific configuration.
- **build**: Build-related files.
- **config**: Configuration files for Strapi.
- **database**: Database configuration and files.
- **node_modules**: Contains all the npm packages.
- **public**: Public assets and static files.
- **src**: Source code for the Strapi application.
- **types**: Type definitions for TypeScript.
- **.editorconfig**: Editor configuration file.
- **.env**: Environment variables.
- **.env.example**: Example environment variables file.
- **.eslintignore**: ESLint ignore file.
- **.eslintrc**: ESLint configuration file.
- **.gitignore**: Git ignore file.
- **favicon.png**: Favicon for the application.
- **jsconfig.json**: JavaScript configuration file.
- **package-lock.json**: Lockfile for npm dependencies.
- **package.json**: Package manifest for npm.
- **README.md**: Project documentation.

## Installation

### Prerequisites

- Node.js
- npm or yarn
- Strapi CLI

### Frontend Setup

1. Navigate to the `client` directory:
2. cd client

## Install dependencies:

- npm install
- npm run dev
