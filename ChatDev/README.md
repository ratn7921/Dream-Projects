# AI Media Platform

A full-stack application for generating and sharing AI-powered media content, built with Next.js, TypeScript, and MongoDB.

## Features

- User authentication with Clerk
- AI-powered image generation using DALL-E 3
- AI-powered video generation using Zeroscope
- Social features (likes, comments)
- Responsive design with Tailwind CSS
- Dark mode support

## Prerequisites

- Node.js 18+ and npm
- MongoDB database
- Clerk account for authentication
- OpenAI API key for image generation
- Replicate API key for video generation
- UploadThing account for media storage

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the `.env.example` file to `.env` and fill in your environment variables:
   ```bash
   cp .env.example .env
   ```

4. Initialize Prisma with MongoDB:
   ```bash
   npx prisma generate
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk publishable key
- `CLERK_SECRET_KEY`: Clerk secret key
- `MONGODB_URI`: MongoDB connection string
- `UPLOADTHING_SECRET`: UploadThing secret key
- `UPLOADTHING_APP_ID`: UploadThing app ID
- `OPENAI_API_KEY`: OpenAI API key for image generation
- `REPLICATE_API_KEY`: Replicate API key for video generation

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Database:** MongoDB with Prisma ORM
- **Authentication:** Clerk
- **Styling:** Tailwind CSS
- **Media Storage:** UploadThing
- **AI Services:**
  - OpenAI DALL-E 3 for image generation
  - Replicate Zeroscope for video generation

## License

MIT License
