import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface VideoGeneratorProps {
  onVideoGenerated?: (videoUrl: string) => void;
}

export default function VideoGenerator({ onVideoGenerated }: VideoGeneratorProps) {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateVideo = async () => {
    if (!prompt) {
      toast.error('Please enter a prompt');
      return;
    }

    try {
      setIsGenerating(true);
      const response = await axios.post('/api/generate/video', { prompt });
      const videoUrl = response.data[0];
      
      if (onVideoGenerated) {
        onVideoGenerated(videoUrl);
      }

      toast.success('Video generated successfully!');
    } catch (error) {
      console.error('Error generating video:', error);
      toast.error('Failed to generate video');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="flex flex-col space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the video you want to generate..."
          className="w-full min-h-[100px] p-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
        />
        
        <button
          onClick={generateVideo}
          disabled={isGenerating}
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-11 items-center justify-center rounded-md px-8 py-3 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          {isGenerating ? 'Generating...' : 'Generate Video'}
        </button>
      </div>
    </div>
  );
}
