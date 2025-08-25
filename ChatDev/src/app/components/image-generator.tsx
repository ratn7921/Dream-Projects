import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface ImageGeneratorProps {
  onImageGenerated?: (imageUrl: string) => void;
}

export default function ImageGenerator({ onImageGenerated }: ImageGeneratorProps) {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateImage = async () => {
    if (!prompt) {
      toast.error('Please enter a prompt');
      return;
    }

    try {
      setIsGenerating(true);
      const response = await axios.post('/api/generate/image', { prompt });
      const imageUrl = response.data[0].url;
      
      if (onImageGenerated) {
        onImageGenerated(imageUrl);
      }

      toast.success('Image generated successfully!');
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error('Failed to generate image');
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
          placeholder="Describe the image you want to generate..."
          className="w-full min-h-[100px] p-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
        />
        
        <button
          onClick={generateImage}
          disabled={isGenerating}
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-11 items-center justify-center rounded-md px-8 py-3 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          {isGenerating ? 'Generating...' : 'Generate Image'}
        </button>
      </div>
    </div>
  );
}
