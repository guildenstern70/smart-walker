
/*
 * PIXEL WALKER
 *
 * Copyright (c) 2025, Alessio Saltarin
 * This software is licensed under BSD license - see LICENSE file.
 *
 */

"use client";

import type { FC } from 'react';
import React, { useState, useEffect } from 'react';

interface PixelCharacterProps {
  x: number;
  y: number;
  state: 'idle' | 'walking' | 'jumping';
  direction: 'left' | 'right';
  pixelScale?: number;
}

// Updated PIXEL_COLORS for new theme
const PIXEL_COLORS = {
  SKIN: '#F0D290',       // A beige skin tone
  LIGHT_CLOTHES: 'hsl(30, 45%, 70%)', // Soft light tan/beige for clothes
  DARK_CLOTHES: 'hsl(30, 40%, 55%)',  // Darker tan/beige for clothes/shading
  BOOTS: '#3E2723',       // Very dark brown for boots
  // Below are not used by current sprite but kept for reference or future use
  P_UNUSED: 'bg-primary', 
  A_UNUSED: 'bg-accent', 
  S_UNUSED: 'bg-yellow-300', 
  B_UNUSED: 'bg-black', 
  W_UNUSED: 'bg-white', 
  H_UNUSED: 'bg-red-600', 
};

// Simplified 8x16 character sprite (width x height in abstract pixels)
// C: Light Clothes
// D: Dark Clothes
// S: Skin
// B: Boots
const SPRITE_WIDTH = 8;
const SPRITE_HEIGHT = 16;

const frames = {
  idle: [
    "  SSSS  ",
    " SSSSS  ",
    "SCDDD CS",
    "SCDDD CS",
    "SCDDD CS",
    " S DDD S ",
    "  DDD   ",
    "  DDD   ",
    "  DDD   ",
    "  DDD   ",
    "  DDD   ",
    " CCCCC  ", // Legs are light clothes
    " CCCCC  ",
    " BB  BB ",
    " BB  BB ",
    "BBBBBBBB",
  ],
  walk1: [
    "  SSSS  ",
    " SSSSS  ",
    "SCDDD CS",
    "SCDDD CS",
    "SCDDD CS",
    " S DDD S ",
    "  DDD   ",
    "  DDD   ",
    "  DDD   ",
    "  DDD   ",
    "  DDCC  ", // Legs are light clothes
    " CCCCC  ",
    " CCCBB  ",
    " BBBBB  ",
    "   BB   ",
    "  BBBB  ",
  ],
  walk2: [
    "  SSSS  ",
    " SSSSS  ",
    "SCDDD CS",
    "SCDDD CS",
    "SCDDD CS",
    " S DDD S ",
    "  DDD   ",
    "  DDD   ",
    "  DDD   ",
    "  CCD   ", // Legs are light clothes
    " CCDDD  ",
    "  BBCCC ",
    "  BBCCC ",
    "   BBBB ",
    "   BB   ",
    "  BBBB  ",
  ],
  jump: [
    "  SSSS  ",
    " SSSSS  ",
    "SCDDD CS",
    "SCDDD CS",
    "SCDDD CS",
    " S DDD S ",
    "  DDD   ",
    "  DDD   ",
    "  DD    ",
    "  DD    ",
    "  CC    ", // Legs are light clothes
    " CCC C  ",
    "C BB C B",
    " BBBB BB",
    " B    B ",
    " B    B ",
  ],
};

const PixelCharacter: FC<PixelCharacterProps> = ({
  x,
  y,
  state,
  direction,
  pixelScale = 4,
}) => {
  const [currentFrameData, setCurrentFrameData] = useState(frames.idle);
  const [walkCycleFrame, setWalkCycleFrame] = useState(0);

  useEffect(() => {
    let frameKey: keyof typeof frames = 'idle';
    if (state === 'jumping') {
      frameKey = 'jump';
    } else if (state === 'walking') {
      frameKey = walkCycleFrame === 0 ? 'walk1' : 'walk2';
    }
    setCurrentFrameData(frames[frameKey]);
  }, [state, walkCycleFrame]);

  useEffect(() => {
    if (state === 'walking') {
      const timer = setInterval(() => {
        setWalkCycleFrame((prev) => (prev + 1) % 2);
      }, 150); // Animation speed for walking
      return () => clearInterval(timer);
    }
  }, [state]);

  const characterStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${x}px`,
    bottom: `${y}px`, // Y is from bottom
    width: `${SPRITE_WIDTH * pixelScale}px`,
    height: `${SPRITE_HEIGHT * pixelScale}px`,
    transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
    imageRendering: 'pixelated',
  };

  const getPixelColor = (char: string) => {
    switch (char) {
      case 'S': return PIXEL_COLORS.SKIN;
      case 'C': return PIXEL_COLORS.LIGHT_CLOTHES;
      case 'D': return PIXEL_COLORS.DARK_CLOTHES;
      case 'B': return PIXEL_COLORS.BOOTS;
      default: return 'transparent';
    }
  };

  return (
    <div style={characterStyle} aria-label="Pixel character">
      {currentFrameData.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', height: `${pixelScale}px` }}>
          {row.split('').map((char, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: `${pixelScale}px`,
                height: `${pixelScale}px`,
                backgroundColor: getPixelColor(char),
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PixelCharacter;
