
/*
 * Smart Walker
 *
 * Copyright (c) 2025, Alessio Saltarin
 * This software is licensed under BSD license - see LICENSE file.
 *
 */

"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import PixelCharacter from '@/components/game/PixelCharacter';
import ScrollingBackground from '@/components/game/ScrollingBackground';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Import icons

// Game Constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 450; // 16:9 aspect ratio
const PIXEL_SCALE = 4; // Each "pixel" in sprites is 4x4 real pixels

const CHARACTER_SPEED_BASE = 0.75; 
const CHARACTER_SPEED = CHARACTER_SPEED_BASE * PIXEL_SCALE;

const JUMP_FORCE_BASE = 10; 
const GRAVITY_BASE = 0.30;

const JUMP_FORCE = JUMP_FORCE_BASE * PIXEL_SCALE / 2;
const GRAVITY = GRAVITY_BASE * PIXEL_SCALE / 2;
const GROUND_Y = GAME_HEIGHT * 0.2; 

const SPRITE_HEIGHT = 16; // from PixelCharacter (abstract pixels)
const CHARACTER_WIDTH = 8 * PIXEL_SCALE; 

// Jump Arc Constants
const SPRITE_TOTAL_HEIGHT_PIXELS = SPRITE_HEIGHT * PIXEL_SCALE;
const JUMP_ARC_HORIZONTAL_DISTANCE = 2 * SPRITE_TOTAL_HEIGHT_PIXELS;
const APPROX_JUMP_DURATION_FRAMES = Math.max(1, Math.round((2 * JUMP_FORCE) / (GRAVITY === 0 ? 1 : GRAVITY))); // Avoid division by zero if GRAVITY is 0
const JUMP_ARC_SPEED_PER_FRAME = JUMP_ARC_HORIZONTAL_DISTANCE / APPROX_JUMP_DURATION_FRAMES;


export default function PixelWalkerPage() {
  const [characterPos, setCharacterPos] = useState({ x: GAME_WIDTH / 2 - CHARACTER_WIDTH / 2, y: GROUND_Y });
  const [characterState, setCharacterState] = useState<'idle' | 'walking' | 'jumping'>('idle');
  const [characterDirection, setCharacterDirection] = useState<'left' | 'right'>('right');
  
  const velocityYRef = useRef(0);
  const onGroundRef = useRef(true);
  
  const [backgroundOffset, setBackgroundOffset] = useState(0);
  
  const keysPressedRef = useRef<{ [key: string]: boolean }>({});

  const gameAreaRef = useRef<HTMLDivElement>(null);

  // Refs for current state values to be used in stable gameLoop
  const characterStateRef = useRef(characterState);
  const characterDirectionRef = useRef(characterDirection);

  // Refs for jump arc mechanics
  const isPerformingArcJumpRef = useRef(false);
  const jumpArcDirectionRef = useRef<'left' | 'right'>('right');


  useEffect(() => {
    characterStateRef.current = characterState;
  }, [characterState]);

  useEffect(() => {
    characterDirectionRef.current = characterDirection;
  }, [characterDirection]);

  // Keyboard input handlers
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      keysPressedRef.current[event.key.toLowerCase()] = true;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === ' ' || event.key === 'ArrowUp') {
        event.preventDefault();
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      keysPressedRef.current[event.key.toLowerCase()] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    if (gameAreaRef.current) {
      gameAreaRef.current.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Game Loop Logic
  const gameLoop = useCallback(() => {
    setCharacterPos(prevPos => {
      let newX = prevPos.x;
      let newY = prevPos.y;
      
      let currentKeyHorizontalMovement = false; 
      let newCharacterStateForFrame: 'idle' | 'walking' | 'jumping' = characterStateRef.current;
      let newCharacterDirectionForFrame = characterDirectionRef.current;

      // Horizontal Movement from Arrow Keys
      if (keysPressedRef.current['arrowright']) {
        newX += CHARACTER_SPEED;
        currentKeyHorizontalMovement = true;
        newCharacterDirectionForFrame = 'right';
        setBackgroundOffset(prev => prev + CHARACTER_SPEED * 0.5); 
      } else if (keysPressedRef.current['arrowleft']) {
        newX -= CHARACTER_SPEED;
        currentKeyHorizontalMovement = true;
        newCharacterDirectionForFrame = 'left';
        setBackgroundOffset(prev => prev - CHARACTER_SPEED * 0.5);
      }
      
      if (newCharacterDirectionForFrame !== characterDirectionRef.current) {
        setCharacterDirection(newCharacterDirectionForFrame);
      }

      // Vertical Movement (Jumping & Gravity) & Jump Arc Initiation
      if ((keysPressedRef.current[' '] || keysPressedRef.current['arrowup']) && onGroundRef.current) {
        velocityYRef.current = JUMP_FORCE; 
        onGroundRef.current = false;
        isPerformingArcJumpRef.current = true;
        jumpArcDirectionRef.current = newCharacterDirectionForFrame; 
        newCharacterStateForFrame = 'jumping'; 
      }

      if (isPerformingArcJumpRef.current && !onGroundRef.current) {
        if (jumpArcDirectionRef.current === 'right') {
          newX += JUMP_ARC_SPEED_PER_FRAME;
          setBackgroundOffset(prev => prev + JUMP_ARC_SPEED_PER_FRAME * 0.5);
        } else { 
          newX -= JUMP_ARC_SPEED_PER_FRAME;
          setBackgroundOffset(prev => prev - JUMP_ARC_SPEED_PER_FRAME * 0.5);
        }
      }
      
      if (!onGroundRef.current) { 
        newY += velocityYRef.current; 
        velocityYRef.current -= GRAVITY;
      }
      
      if (newY <= GROUND_Y) { 
        newY = GROUND_Y; 
        velocityYRef.current = 0; 
        onGroundRef.current = true; 
        isPerformingArcJumpRef.current = false; 

        if (currentKeyHorizontalMovement) {
          newCharacterStateForFrame = 'walking';
        } else {
          newCharacterStateForFrame = 'idle';
        }
      } else { 
        onGroundRef.current = false; 
        newCharacterStateForFrame = 'jumping'; 
      }

      if (newX < 0) newX = 0;
      if (newX > GAME_WIDTH - CHARACTER_WIDTH) newX = GAME_WIDTH - CHARACTER_WIDTH;
      
      if (newCharacterStateForFrame !== characterStateRef.current) {
        setCharacterState(newCharacterStateForFrame);
      }
      
      return { x: newX, y: newY };
    });
  }, []); 

  useEffect(() => {
    let animationFrameId: number;
    const runLoop = () => {
      gameLoop(); 
      animationFrameId = requestAnimationFrame(runLoop);
    }
    animationFrameId = requestAnimationFrame(runLoop);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameLoop]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <h1 className="text-3xl text-primary mb-4">Smart Walker</h1>
      <div 
        ref={gameAreaRef}
        tabIndex={0} 
        className="relative overflow-hidden border-4 border-primary shadow-2xl"
        style={{ 
          width: `${GAME_WIDTH}px`, 
          height: `${GAME_HEIGHT}px`,
          outline: 'none', 
        }}
        aria-label="Smart Walker game area"
      >
        <ScrollingBackground 
          scrollOffset={backgroundOffset} 
          gameWidth={GAME_WIDTH}
          gameHeight={GAME_HEIGHT}
          pixelScale={PIXEL_SCALE}
        />
        <PixelCharacter 
          x={characterPos.x} 
          y={characterPos.y} 
          state={characterState}
          direction={characterDirection}
          pixelScale={PIXEL_SCALE}
        />
      </div>
      
      {/* Icon Controls */}
      <div className="mt-6 flex justify-center items-center space-x-4 sm:space-x-6" aria-label="Game controls">
        <div 
          className="flex flex-col items-center text-foreground p-2 bg-card border border-primary rounded-md shadow-md"
          title="Move Left (Left Arrow)"
        >
          <ArrowLeft className="h-6 w-6 sm:h-8 sm:w-8 text-primary" aria-hidden="true" />
        </div>
        
        <div 
          className="flex flex-col items-center text-foreground p-2 bg-card border border-primary rounded-md shadow-md"
          title="Jump (Spacebar or Up Arrow)"
        >
          <div className="h-6 w-12 sm:h-8 sm:w-20 bg-input border border-primary rounded flex items-center justify-center">
            &nbsp;
          </div>
        </div>

        <div 
          className="flex flex-col items-center text-foreground p-2 bg-card border border-primary rounded-md shadow-md"
          title="Move Right (Right Arrow)"
        >
          <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-primary" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
