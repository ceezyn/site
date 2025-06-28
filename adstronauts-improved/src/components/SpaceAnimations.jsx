import React from 'react';

const SpaceAnimations = () => {
  return (
    <>
      {/* Floating Stars */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Shooting Stars */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute shooting-star"
            style={{
              left: `${Math.random() * 120 - 20}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-1 h-16 bg-gradient-to-b from-cyan-300 via-white to-transparent opacity-80 transform rotate-45"></div>
            <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Cartoon UFOs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute ufo-container"
            style={{
              left: `${Math.random() * 120 - 20}%`,
              top: `${20 + Math.random() * 40}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            {/* UFO Body */}
            <div className="relative">
              {/* Main Saucer */}
              <div className="w-12 h-6 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full opacity-70 relative">
                {/* Dome */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-gradient-to-b from-cyan-200 to-cyan-400 rounded-full opacity-80"></div>
                {/* Lights */}
                <div className="absolute bottom-1 left-2 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1 right-2 w-1 h-1 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                {/* Light Beam */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-gradient-to-b from-yellow-200 to-transparent opacity-30 animate-pulse" style={{ clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)' }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Orbiting Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full opacity-50 animate-spin" 
             style={{ animationDuration: '20s' }} />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full opacity-40 animate-spin" 
             style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-spin" 
             style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/6 right-1/3 w-3 h-3 bg-yellow-400 rounded-full opacity-45 animate-spin" 
             style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-1/4 left-1/6 w-2 h-2 bg-green-400 rounded-full opacity-55 animate-spin" 
             style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
      </div>

      {/* Twinkling Stars */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 8}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            ✦
          </div>
        ))}
      </div>
    </>
  );
};

export default SpaceAnimations;

