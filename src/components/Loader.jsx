import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Main loading spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-400 rounded-full animate-spin" style={{ animationDelay: '0.1s' }}></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-300 rounded-full animate-spin" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Loading text */}
        <div className="text-center">
          <h3 className="text-white text-lg font-semibold mb-2">Loading 3D Experience</h3>
          <p className="text-gray-400 text-sm">Preparing your interactive portfolio...</p>
        </div>
        
        {/* Progress dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
