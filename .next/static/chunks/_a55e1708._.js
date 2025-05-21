(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_a55e1708._.js", {

"[project]/src/components/game/PixelCharacter.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// Updated PIXEL_COLORS for new theme
const PIXEL_COLORS = {
    SKIN: '#F0D290',
    LIGHT_CLOTHES: 'hsl(30, 45%, 70%)',
    DARK_CLOTHES: 'hsl(30, 40%, 55%)',
    BOOTS: '#3E2723',
    // Below are not used by current sprite but kept for reference or future use
    P_UNUSED: 'bg-primary',
    A_UNUSED: 'bg-accent',
    S_UNUSED: 'bg-yellow-300',
    B_UNUSED: 'bg-black',
    W_UNUSED: 'bg-white',
    H_UNUSED: 'bg-red-600'
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
        " CCCCC  ",
        " CCCCC  ",
        " BB  BB ",
        " BB  BB ",
        "BBBBBBBB"
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
        "  DDCC  ",
        " CCCCC  ",
        " CCCBB  ",
        " BBBBB  ",
        "   BB   ",
        "  BBBB  "
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
        "  CCD   ",
        " CCDDD  ",
        "  BBCCC ",
        "  BBCCC ",
        "   BBBB ",
        "   BB   ",
        "  BBBB  "
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
        "  CC    ",
        " CCC C  ",
        "C BB C B",
        " BBBB BB",
        " B    B ",
        " B    B "
    ]
};
const PixelCharacter = ({ x, y, state, direction, pixelScale = 4 })=>{
    _s();
    const [currentFrameData, setCurrentFrameData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(frames.idle);
    const [walkCycleFrame, setWalkCycleFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PixelCharacter.useEffect": ()=>{
            let frameKey = 'idle';
            if (state === 'jumping') {
                frameKey = 'jump';
            } else if (state === 'walking') {
                frameKey = walkCycleFrame === 0 ? 'walk1' : 'walk2';
            }
            setCurrentFrameData(frames[frameKey]);
        }
    }["PixelCharacter.useEffect"], [
        state,
        walkCycleFrame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PixelCharacter.useEffect": ()=>{
            if (state === 'walking') {
                const timer = setInterval({
                    "PixelCharacter.useEffect.timer": ()=>{
                        setWalkCycleFrame({
                            "PixelCharacter.useEffect.timer": (prev)=>(prev + 1) % 2
                        }["PixelCharacter.useEffect.timer"]);
                    }
                }["PixelCharacter.useEffect.timer"], 150); // Animation speed for walking
                return ({
                    "PixelCharacter.useEffect": ()=>clearInterval(timer)
                })["PixelCharacter.useEffect"];
            }
        }
    }["PixelCharacter.useEffect"], [
        state
    ]);
    const characterStyle = {
        position: 'absolute',
        left: `${x}px`,
        bottom: `${y}px`,
        width: `${SPRITE_WIDTH * pixelScale}px`,
        height: `${SPRITE_HEIGHT * pixelScale}px`,
        transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
        imageRendering: 'pixelated'
    };
    const getPixelColor = (char)=>{
        switch(char){
            case 'S':
                return PIXEL_COLORS.SKIN;
            case 'C':
                return PIXEL_COLORS.LIGHT_CLOTHES;
            case 'D':
                return PIXEL_COLORS.DARK_CLOTHES;
            case 'B':
                return PIXEL_COLORS.BOOTS;
            default:
                return 'transparent';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: characterStyle,
        "aria-label": "Pixel character",
        children: currentFrameData.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    height: `${pixelScale}px`
                },
                children: row.split('').map((char, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: `${pixelScale}px`,
                            height: `${pixelScale}px`,
                            backgroundColor: getPixelColor(char)
                        }
                    }, `${rowIndex}-${colIndex}`, false, {
                        fileName: "[project]/src/components/game/PixelCharacter.tsx",
                        lineNumber: 167,
                        columnNumber: 13
                    }, this))
            }, rowIndex, false, {
                fileName: "[project]/src/components/game/PixelCharacter.tsx",
                lineNumber: 165,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/game/PixelCharacter.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
};
_s(PixelCharacter, "ZoAjq9L2DdCvuPgQ3DCEQotHGd0=");
_c = PixelCharacter;
const __TURBOPACK__default__export__ = PixelCharacter;
var _c;
__turbopack_context__.k.register(_c, "PixelCharacter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/game/ScrollingBackground.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ScrollingBackground = ({ scrollOffset, gameWidth, gameHeight, pixelScale = 4 })=>{
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollingBackground.useEffect": ()=>{
            setIsClient(true);
        }
    }["ScrollingBackground.useEffect"], []);
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
      <path d='M0 ${30 * pixelScale} Q${25 * pixelScale} ${0 * pixelScale} ${50 * pixelScale} ${30 * pixelScale} T${100 * pixelScale} ${30 * pixelScale} Q${125 * pixelScale} ${10 * pixelScale} ${150 * pixelScale} ${30 * pixelScale} T${200 * pixelScale} ${30 * pixelScale} V${60 * pixelScale} H0 Z' fill='url(#hillGradientDef)'/>
    </svg>
  `;
    const hillDataUrl = ("TURBOPACK compile-time truthy", 1) ? `url("data:image/svg+xml,${encodeURIComponent(hillPattern)}")` : ("TURBOPACK unreachable", undefined);
    const cloudWidth = 20 * pixelScale;
    const cloudHeight = 10 * pixelScale;
    // Clouds positions - these could be randomized or fixed
    const clouds = [
        {
            x: 50,
            y: gameHeight * 0.7,
            id: 'cloud1'
        },
        {
            x: 250,
            y: gameHeight * 0.8,
            id: 'cloud2'
        },
        {
            x: 500,
            y: gameHeight * 0.75,
            id: 'cloud3'
        },
        {
            x: 750,
            y: gameHeight * 0.65,
            id: 'cloud4'
        }
    ];
    const cloudPattern = (color)=>`
    <svg xmlns='http://www.w3.org/2000/svg' width='${cloudWidth}' height='${cloudHeight}'>
      <rect x='${2 * pixelScale}' y='0' width='${16 * pixelScale}' height='${10 * pixelScale}' fill='${color}' />
      <rect x='0' y='${3 * pixelScale}' width='${20 * pixelScale}' height='${4 * pixelScale}' fill='${color}' />
    </svg>
  `;
    const cloudDataUrl = ("TURBOPACK compile-time truthy", 1) ? `url("data:image/svg+xml,${encodeURIComponent(cloudPattern('rgba(255,255,255,0.8)'))}")` : ("TURBOPACK unreachable", undefined);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            height: '100%',
            backgroundColor: gameSkyColor,
            overflow: 'hidden',
            position: 'relative'
        },
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: gameHeight * 0.1,
                    left: 0,
                    width: `${gameWidth + hillPatternWidth}px`,
                    height: `${60 * pixelScale}px`,
                    backgroundImage: hillDataUrl,
                    backgroundRepeat: 'repeat-x',
                    backgroundPositionX: `${-(scrollOffset * 0.5) % hillPatternWidth}px`,
                    imageRendering: 'pixelated'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/game/ScrollingBackground.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            clouds.map((cloud)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        bottom: `${cloud.y}px`,
                        left: `${(cloud.x - scrollOffset * 0.2) % (gameWidth + cloudWidth * 2) - cloudWidth}px`,
                        width: `${cloudWidth}px`,
                        height: `${cloudHeight}px`,
                        backgroundImage: cloudDataUrl,
                        backgroundRepeat: 'no-repeat',
                        imageRendering: 'pixelated',
                        opacity: 0.8
                    }
                }, cloud.id, false, {
                    fileName: "[project]/src/components/game/ScrollingBackground.tsx",
                    lineNumber: 99,
                    columnNumber: 10
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: `${gameHeight * 0.2}px`,
                    backgroundColor: groundColor
                }
            }, void 0, false, {
                fileName: "[project]/src/components/game/ScrollingBackground.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/ScrollingBackground.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
};
_s(ScrollingBackground, "k460N28PNzD7zo1YW47Q9UigQis=");
_c = ScrollingBackground;
const __TURBOPACK__default__export__ = ScrollingBackground;
var _c;
__turbopack_context__.k.register(_c, "ScrollingBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PixelWalkerPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$PixelCharacter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/PixelCharacter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ScrollingBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/ScrollingBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>"); // Import icons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Game Constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 450; // 16:9 aspect ratio
const PIXEL_SCALE = 4; // Each "pixel" in sprites is 4x4 real pixels
const CHARACTER_SPEED_BASE = 0.75;
const CHARACTER_SPEED = CHARACTER_SPEED_BASE * PIXEL_SCALE;
const JUMP_FORCE_BASE = 10;
const GRAVITY_BASE = 0.25;
const JUMP_FORCE = JUMP_FORCE_BASE * PIXEL_SCALE / 2;
const GRAVITY = GRAVITY_BASE * PIXEL_SCALE / 2;
const GROUND_Y = GAME_HEIGHT * 0.2;
const SPRITE_HEIGHT = 16; // from PixelCharacter (abstract pixels)
const CHARACTER_WIDTH = 8 * PIXEL_SCALE;
// Jump Arc Constants
const SPRITE_TOTAL_HEIGHT_PIXELS = SPRITE_HEIGHT * PIXEL_SCALE;
const JUMP_ARC_HORIZONTAL_DISTANCE = 2 * SPRITE_TOTAL_HEIGHT_PIXELS;
const APPROX_JUMP_DURATION_FRAMES = Math.max(1, Math.round(2 * JUMP_FORCE / (GRAVITY === 0 ? 1 : GRAVITY))); // Avoid division by zero if GRAVITY is 0
const JUMP_ARC_SPEED_PER_FRAME = JUMP_ARC_HORIZONTAL_DISTANCE / APPROX_JUMP_DURATION_FRAMES;
function PixelWalkerPage() {
    _s();
    const [characterPos, setCharacterPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: GAME_WIDTH / 2 - CHARACTER_WIDTH / 2,
        y: GROUND_Y
    });
    const [characterState, setCharacterState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [characterDirection, setCharacterDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('right');
    const velocityYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const onGroundRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [backgroundOffset, setBackgroundOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const keysPressedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const gameAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Refs for current state values to be used in stable gameLoop
    const characterStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(characterState);
    const characterDirectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(characterDirection);
    // Refs for jump arc mechanics
    const isPerformingArcJumpRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const jumpArcDirectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('right');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PixelWalkerPage.useEffect": ()=>{
            characterStateRef.current = characterState;
        }
    }["PixelWalkerPage.useEffect"], [
        characterState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PixelWalkerPage.useEffect": ()=>{
            characterDirectionRef.current = characterDirection;
        }
    }["PixelWalkerPage.useEffect"], [
        characterDirection
    ]);
    // Keyboard input handlers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PixelWalkerPage.useEffect": ()=>{
            const handleKeyDown = {
                "PixelWalkerPage.useEffect.handleKeyDown": (event)=>{
                    keysPressedRef.current[event.key.toLowerCase()] = true;
                    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === ' ' || event.key === 'ArrowUp') {
                        event.preventDefault();
                    }
                }
            }["PixelWalkerPage.useEffect.handleKeyDown"];
            const handleKeyUp = {
                "PixelWalkerPage.useEffect.handleKeyUp": (event)=>{
                    keysPressedRef.current[event.key.toLowerCase()] = false;
                }
            }["PixelWalkerPage.useEffect.handleKeyUp"];
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);
            if (gameAreaRef.current) {
                gameAreaRef.current.focus();
            }
            return ({
                "PixelWalkerPage.useEffect": ()=>{
                    window.removeEventListener('keydown', handleKeyDown);
                    window.removeEventListener('keyup', handleKeyUp);
                }
            })["PixelWalkerPage.useEffect"];
        }
    }["PixelWalkerPage.useEffect"], []);
    // Game Loop Logic
    const gameLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PixelWalkerPage.useCallback[gameLoop]": ()=>{
            setCharacterPos({
                "PixelWalkerPage.useCallback[gameLoop]": (prevPos)=>{
                    let newX = prevPos.x;
                    let newY = prevPos.y;
                    let currentKeyHorizontalMovement = false;
                    let newCharacterStateForFrame = characterStateRef.current;
                    let newCharacterDirectionForFrame = characterDirectionRef.current;
                    // Horizontal Movement from Arrow Keys
                    if (keysPressedRef.current['arrowright']) {
                        newX += CHARACTER_SPEED;
                        currentKeyHorizontalMovement = true;
                        newCharacterDirectionForFrame = 'right';
                        setBackgroundOffset({
                            "PixelWalkerPage.useCallback[gameLoop]": (prev)=>prev + CHARACTER_SPEED * 0.5
                        }["PixelWalkerPage.useCallback[gameLoop]"]);
                    } else if (keysPressedRef.current['arrowleft']) {
                        newX -= CHARACTER_SPEED;
                        currentKeyHorizontalMovement = true;
                        newCharacterDirectionForFrame = 'left';
                        setBackgroundOffset({
                            "PixelWalkerPage.useCallback[gameLoop]": (prev)=>prev - CHARACTER_SPEED * 0.5
                        }["PixelWalkerPage.useCallback[gameLoop]"]);
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
                            setBackgroundOffset({
                                "PixelWalkerPage.useCallback[gameLoop]": (prev)=>prev + JUMP_ARC_SPEED_PER_FRAME * 0.5
                            }["PixelWalkerPage.useCallback[gameLoop]"]);
                        } else {
                            newX -= JUMP_ARC_SPEED_PER_FRAME;
                            setBackgroundOffset({
                                "PixelWalkerPage.useCallback[gameLoop]": (prev)=>prev - JUMP_ARC_SPEED_PER_FRAME * 0.5
                            }["PixelWalkerPage.useCallback[gameLoop]"]);
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
                    return {
                        x: newX,
                        y: newY
                    };
                }
            }["PixelWalkerPage.useCallback[gameLoop]"]);
        }
    }["PixelWalkerPage.useCallback[gameLoop]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PixelWalkerPage.useEffect": ()=>{
            let animationFrameId;
            const runLoop = {
                "PixelWalkerPage.useEffect.runLoop": ()=>{
                    gameLoop();
                    animationFrameId = requestAnimationFrame(runLoop);
                }
            }["PixelWalkerPage.useEffect.runLoop"];
            animationFrameId = requestAnimationFrame(runLoop);
            return ({
                "PixelWalkerPage.useEffect": ()=>{
                    cancelAnimationFrame(animationFrameId);
                }
            })["PixelWalkerPage.useEffect"];
        }
    }["PixelWalkerPage.useEffect"], [
        gameLoop
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-screen bg-background p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl text-primary mb-4",
                children: "Pixel Walker"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: gameAreaRef,
                tabIndex: 0,
                className: "relative overflow-hidden border-4 border-primary shadow-2xl",
                style: {
                    width: `${GAME_WIDTH}px`,
                    height: `${GAME_HEIGHT}px`,
                    outline: 'none'
                },
                "aria-label": "Pixel Walker game area",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ScrollingBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        scrollOffset: backgroundOffset,
                        gameWidth: GAME_WIDTH,
                        gameHeight: GAME_HEIGHT,
                        pixelScale: PIXEL_SCALE
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$PixelCharacter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        x: characterPos.x,
                        y: characterPos.y,
                        state: characterState,
                        direction: characterDirection,
                        pixelScale: PIXEL_SCALE
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex justify-center items-center space-x-4 sm:space-x-6",
                "aria-label": "Game controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-foreground p-2 bg-card border border-primary rounded-md shadow-md",
                        title: "Move Left (Left Arrow)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-6 w-6 sm:h-8 sm:w-8 text-primary",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-foreground p-2 bg-card border border-primary rounded-md shadow-md",
                        title: "Jump (Spacebar or Up Arrow)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-6 w-12 sm:h-8 sm:w-20 bg-input border border-primary rounded flex items-center justify-center",
                            children: " "
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-foreground p-2 bg-card border border-primary rounded-md shadow-md",
                        title: "Move Right (Right Arrow)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "h-6 w-6 sm:h-8 sm:w-8 text-primary",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
_s(PixelWalkerPage, "L96V/gXZ53ah2yuPJpaU4HJi0NM=");
_c = PixelWalkerPage;
var _c;
__turbopack_context__.k.register(_c, "PixelWalkerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ArrowLeft)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowLeft", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ArrowLeft": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ArrowRight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowRight", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ArrowRight": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_a55e1708._.js.map