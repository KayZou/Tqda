# Tqda Marketplace Web App

This repository contains a marketplace web application built with Next.js and NestJS.

## Features

- User registration and login
- Browse products
- Adding products

## Technologies Used

- **Frontend:** Next.js with Material-UI
- **Backend:** NestJS
- **Authentication:** NestJS JWT and local strategy
- **Stripe:** Payment gateway

## Required ENVs:

  #For Backend:
  - PORT=3001
  - DATABASE_URL=""
  - JWT_SECRET=tqda-db
  - JWT_EXPIRATION=10h
  - STRIPE_SECRET_KEY=""
  - STRIPE_SUCCESS_URL=http://localhost:3000
  - STRIPE_CANCEL_URL=http://localhost:3000

  #For Frontend:
  - NEXT_PUBLIC_API_URL=http://localhost:3001
  - NEXT_PUBLIC_STRIPE_PUBLIC_KEY=""
