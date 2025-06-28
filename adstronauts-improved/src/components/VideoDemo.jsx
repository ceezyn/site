import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Play, Pause, Volume2, Maximize } from 'lucide-react';

const VideoDemo = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Placeholder video data - in a real app, these would be actual video URLs
  const demoVideos = [
    {
      id: 1,
      title: "AI-Generated Product Launch Campaign",
      description: "Watch how AdStronauts creates a complete product launch campaign in under 60 seconds",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
      duration: "0:45",
      category: "Product Launch"
    },
    {
      id: 2,
      title: "Social Media Ad Creation",
      description: "See our AI generate engaging social media ads with stunning visuals and compelling copy",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
      duration: "1:12",
      category: "Social Media"
    },
    {
      id: 3,
      title: "Brand Story Video Generation",
      description: "Experience how we transform your brand story into a cinematic video presentation",
      thumbnail: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=800&h=450&fit=crop",
      duration: "1:30",
      category: "Brand Story"
    },
    {
      id: 4,
      title: "E-commerce Product Showcase",
      description: "Discover how AdStronauts creates professional product showcase videos for e-commerce",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
      duration: "0:58",
      category: "E-commerce"
    }
  ];

  const handleVideoSelect = (index) => {
    setActiveVideo(index);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real app, this would control actual video playback
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Hyper-Realistic
            </span> Video Demos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of AI-generated content with these stunning video demonstrations created using cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-slate-900/50 border-purple-500/20 backdrop-blur-sm overflow-hidden">
              <div className="relative aspect-video bg-black">
                <img
                  src={demoVideos[activeVideo].thumbnail}
                  alt={demoVideos[activeVideo].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button
                    onClick={togglePlayPause}
                    size="lg"
                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white/50 transition-all duration-300 hover:scale-110"
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-white" />
                    ) : (
                      <Play className="h-8 w-8 text-white ml-1" />
                    )}
                  </Button>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-white">
                    <span className="text-sm bg-black/50 px-2 py-1 rounded">
                      {demoVideos[activeVideo].duration}
                    </span>
                    <span className="text-sm bg-purple-600 px-2 py-1 rounded">
                      {demoVideos[activeVideo].category}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {demoVideos[activeVideo].title}
                </h3>
                <p className="text-gray-300">
                  {demoVideos[activeVideo].description}
                </p>
              </CardContent>
            </Card>

            {/* Video Progress Bar */}
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: isPlaying ? '100%' : '0%' }}
              ></div>
            </div>
          </div>

          {/* Video Playlist */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">More Demos</h3>
            {demoVideos.map((video, index) => (
              <Card
                key={video.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activeVideo === index
                    ? 'bg-purple-600/20 border-purple-500/50'
                    : 'bg-slate-800/50 border-slate-700/50 hover:border-purple-500/30'
                }`}
                onClick={() => handleVideoSelect(index)}
              >
                <CardContent className="p-4">
                  <div className="flex space-x-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-20 h-12 object-cover rounded"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white truncate">
                        {video.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">
                        {video.duration} • {video.category}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
          >
            Create Your Own Video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;

