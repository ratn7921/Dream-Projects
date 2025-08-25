import { Navbar } from './components/navbar';
import { auth } from '@clerk/nextjs';
import Link from 'next/link';

export default async function Home() {
  const { userId } = auth();

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="container flex flex-col items-center justify-center flex-1 px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold text-center mb-6">
          Create Amazing AI-Powered Media Content
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-8">
          Generate images and videos with AI, share your creations, and explore a world of creativity.
        </p>
        
        {!userId ? (
          <div className="flex flex-col items-center space-y-4">
            <p className="text-lg text-center">
              Sign in to start creating and sharing your AI-generated content.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-6">
            <Link
              href="/generate"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-11 items-center justify-center rounded-md px-8 py-3 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Start Creating
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
