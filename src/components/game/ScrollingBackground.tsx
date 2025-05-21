
/*
 * PIXEL WALKER
 *
 * Copyright (c) 2025, Alessio Saltarin
 * This software is licensed under BSD license - see LICENSE file.
 *
 */

"use client";

import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

interface ScrollingBackgroundProps {
  scrollOffset: number;
  gameWidth: number;
  gameHeight: number;
  pixelScale?: number;
}

const ScrollingBackground: FC<ScrollingBackgroundProps> = ({
  scrollOffset,
  gameWidth,
  gameHeight,
  pixelScale = 4,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid rendering server-side where window is not available for dimensions
  }
  
  // Palette: Light Blue Sky, Dark Green Hills, Brown Land
  const gameSkyColor = 'hsl(200, 70%, 75%)'; // Slightly darker blue for the game sky
  const groundColor = 'hsl(var(--primary))'; // Brown, from globals.css
  const hillColorDarkGreen = 'hsl(120, 60%, 25%)'; // Dark Green for hills (slightly darker than theme's secondary for depth)
  const hillColorLighterGreen = 'hsl(120, 50%, 35%)'; // Lighter green for hill gradient top

  // Simple repeating hill pattern (SVG data URL)
  const hillPatternWidth = 200 * pixelScale;
  const hillPattern = `
    <svg xmlns='http://www.w3.org/2000/svg' width='${hillPatternWidth}' height='${60 * pixelScale}' viewBox='0 0 ${hillPatternWidth} ${60 * pixelScale}'>
      <defs>
        <linearGradient id="hillGradientDef" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:${hillColorLighterGreen};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${hillColorDarkGreen};stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d='M0 ${30*pixelScale} Q${25*pixelScale} ${0*pixelScale} ${50*pixelScale} ${30*pixelScale} T${100*pixelScale} ${30*pixelScale} Q${125*pixelScale} ${10*pixelScale} ${150*pixelScale} ${30*pixelScale} T${200*pixelScale} ${30*pixelScale} V${60*pixelScale} H0 Z' fill='url(#hillGradientDef)'/>
    </svg>
  `;
  const hillDataUrl = typeof window !== "undefined" ? `url("data:image/svg+xml,${encodeURIComponent(hillPattern)}")` : "";


  const cloudWidth = 20 * pixelScale;
  const cloudHeight = 10 * pixelScale;
  // Clouds positions - these could be randomized or fixed
  const clouds = [
    { x: 50, y: gameHeight * 0.7, id: 'cloud1' },
    { x: 250, y: gameHeight * 0.8, id: 'cloud2' },
    { x: 500, y: gameHeight * 0.75, id: 'cloud3' },
    { x: 750, y: gameHeight * 0.65, id: 'cloud4' },
  ];
  
  const cloudPattern = (color: string) => `
    <svg xmlns='http://www.w3.org/2000/svg' width='${cloudWidth}' height='${cloudHeight}'>
      <rect x='${2*pixelScale}' y='0' width='${16*pixelScale}' height='${10*pixelScale}' fill='${color}' />
      <rect x='0' y='${3*pixelScale}' width='${20*pixelScale}' height='${4*pixelScale}' fill='${color}' />
    </svg>
  `;
  const cloudDataUrl = typeof window !== "undefined" ? `url("data:image/svg+xml,${encodeURIComponent(cloudPattern('rgba(255,255,255,0.8)'))}")` : "";


  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: gameSkyColor, // Use the new darker game sky color
        overflow: 'hidden',
        position: 'relative',
      }}
      aria-hidden="true"
    >
      {/* Hills Layer - scrolls slower */}
      <div
        style={{
          position: 'absolute',
          bottom: gameHeight * 0.1, // Position hills above the ground line
          left: 0,
          width: `${gameWidth + hillPatternWidth}px`, // Ensure enough width for smooth scrolling
          height: `${60 * pixelScale}px`,
          backgroundImage: hillDataUrl,
          backgroundRepeat: 'repeat-x',
          backgroundPositionX: `${-(scrollOffset * 0.5) % hillPatternWidth}px`, // Slower scroll
          imageRendering: 'pixelated',
        }}
      />

      {/* Clouds Layer - scrolls even slower */}
      {clouds.map(cloud => (
         <div
         key={cloud.id}
         style={{
           position: 'absolute',
           bottom: `${cloud.y}px`,
           left: `${((cloud.x - scrollOffset * 0.2) % (gameWidth + cloudWidth*2)) - cloudWidth}px`, // Looping clouds
           width: `${cloudWidth}px`,
           height: `${cloudHeight}px`,
           backgroundImage: cloudDataUrl,
           backgroundRepeat: 'no-repeat',
           imageRendering: 'pixelated',
           opacity: 0.8,
         }}
       />
      ))}


      {/* Ground Layer */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: `${gameHeight * 0.2}px`, // Ground takes up 20% of height
          backgroundColor: groundColor,
        }}
      />
    </div>
  );
};

export default ScrollingBackground;
