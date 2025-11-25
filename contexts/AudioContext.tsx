"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Howl } from "howler";

interface AudioContextType {
  isPlaying: boolean;
  volume: number;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.3);
  const [sound, setSound] = useState<Howl | null>(null);

  useEffect(() => {
    // Initialize Howler sound
    // TODO: Add actual ambient sound file to public/assets/sounds/
    const ambientSound = new Howl({
      src: ["/assets/sounds/ambient.mp3"], // Will need to add this file
      loop: true,
      volume: volume,
      html5: true, // Better for streaming large files
    });

    setSound(ambientSound);

    // Load volume preference from localStorage
    const savedVolume = localStorage.getItem("audioVolume");
    if (savedVolume) {
      const vol = parseFloat(savedVolume);
      setVolumeState(vol);
      ambientSound.volume(vol);
    }

    // Load play state from localStorage
    const savedPlayState = localStorage.getItem("audioPlaying");
    if (savedPlayState === "true") {
      setIsPlaying(true);
      ambientSound.play();
    }

    return () => {
      ambientSound.unload();
    };
  }, []);

  useEffect(() => {
    if (sound) {
      sound.volume(volume);
      localStorage.setItem("audioVolume", volume.toString());
    }
  }, [volume, sound]);

  const togglePlay = () => {
    if (!sound) return;

    if (isPlaying) {
      sound.pause();
      setIsPlaying(false);
      localStorage.setItem("audioPlaying", "false");
    } else {
      sound.play();
      setIsPlaying(true);
      localStorage.setItem("audioPlaying", "true");
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, volume, togglePlay, setVolume }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudioContext() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudioContext must be used within an AudioProvider");
  }
  return context;
}
