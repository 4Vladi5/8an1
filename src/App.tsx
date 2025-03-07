import React, { useEffect, useState } from 'react';
import { Flower, Stars, Sparkles } from 'lucide-react';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 1000);
  }, []);

  const messages = [
    "Вітаємо зі святом весни!",
    "Бажаємо натхнення та успіхів у всіх починаннях!",
    "Нехай кожен день дарує нові можливості!",
    "Щастя, здоров'я та гарного настрою!"
  ];

  const images = [
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-800 via-purple-700 to-pink-600 relative overflow-hidden">
      {/* Sunset overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-500/20 to-violet-500/30 pointer-events-none" />
      
      {/* Animated elements */}
      <div className="flowers fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={`absolute flower-${i + 1} cursor-pointer pointer-events-auto`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
            onClick={() => {
              const el = document.querySelector(`.flower-${i + 1}`);
              el?.classList.add('flower-click');
              setTimeout(() => el?.classList.remove('flower-click'), 1000);
            }}
          >
            {i % 2 === 0 ? 
              <Flower className="text-pink-200 w-8 h-8 drop-shadow-glow" /> : 
              <Stars className="text-yellow-200 w-8 h-8 drop-shadow-glow" />
            }
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center py-8">
        <div className={`text-center transform transition-all duration-1000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-yellow-200 mb-8 dancing-script animate-title drop-shadow-glow">
            З 8 Березня!
          </h1>
          
          <div className="relative max-w-3xl mx-auto">
            <div 
              className="bg-white/15 backdrop-blur-md p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-102 card-container"
              onClick={() => setActiveCard((prev) => (prev + 1) % messages.length)}
            >
              <div className="flex justify-center mb-6 space-x-2">
                <Sparkles className="text-yellow-200 w-8 h-8 animate-sparkle drop-shadow-glow" />
                <Stars className="text-pink-200 w-8 h-8 animate-sparkle drop-shadow-glow" />
                <Sparkles className="text-yellow-200 w-8 h-8 animate-sparkle drop-shadow-glow" />
              </div>
              
              <p className="text-2xl md:text-3xl text-white mb-6 leading-relaxed animate-text drop-shadow">
                {messages[activeCard]}
              </p>
              
              <div className="mt-8 relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={images[activeCard]}
                  alt="Spring flowers"
                  className="w-full h-auto rounded-lg transform transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;