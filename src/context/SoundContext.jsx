// SoundContext.jsx
import { createContext, useContext, useMemo } from 'react';

const SoundContext = createContext(null);

const playSound = (source) => {
   const audio = new Audio(source);
   audio.currentTime = 0;
   void audio.play().catch(() => { });
};

export const SoundProvider = ({ children }) => {
   const handleBack = () => {
      playSound('/assets/sound/close.mp3');
   };

   const handleHover = () => {
      playSound('/assets/sound/hover.mp3');
   };

   const handleClick = () => {
      playSound('/assets/sound/click.mp3');
   }

   const value = useMemo(
      () => ({
         handleBack,
         handleHover,
         handleClick,
      }),
      []
   );

   return (
      <SoundContext.Provider value={value}>
         {children}
      </SoundContext.Provider>
   );
};

export const useSound = () => {
   const context = useContext(SoundContext);

   if (!context) {
      throw new Error('useSound must be used inside SoundProvider');
   }

   return context;
};