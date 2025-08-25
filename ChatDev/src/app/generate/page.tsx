import { Navbar } from '../components/navbar';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function GeneratePage() {
  const { userId } = auth();

  if (!userId) {
    redirect('/');
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="container mt-24">
        <h1 className="text-3xl font-bold mb-8">Generate AI Content</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/generate/image"
            className="flex flex-col items-center justify-center p-8 border rounded-lg hover:border-primary transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-4">Generate Image</h2>
            <p className="text-center text-muted-foreground">
              Create unique images from text descriptions using AI
            </p>
          </Link>
          
          <Link
            href="/generate/video"
            className="flex flex-col items-center justify-center p-8 border rounded-lg hover:border-primary transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-4">Generate Video</h2>
            <p className="text-center text-muted-foreground">
              Transform your ideas into short video clips with AI
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
