import { useParallaxScroll } from "../hooks/useParallaxScroll.js";
import "./OceanBackground.css";

function OceanBackground({ variant }) {
  return (
    <div className="ocean-bg" aria-hidden="true">
      {variant === "surface" && <SurfaceScene />}
      {variant === "reef" && <ReefScene />}
      {variant === "deep" && <DeepScene />}
      {variant === "kelp" && <KelpScene />}
      {variant === "treasure" && <TreasureScene />}
    </div>
  );
}

function SurfaceScene() {
  const { far, mid, near } = useParallaxScroll({ far: 0.03, mid: 0.09, near: 0.18 });

  return (
    <svg viewBox="0 0 1440 1024" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="surface-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BFEAF0" />
          <stop offset="35%" stopColor="#6FC6E0" />
          <stop offset="70%" stopColor="#1E88B0" />
          <stop offset="100%" stopColor="#0B4A66" />
        </linearGradient>
      </defs>

      <g className="layer" style={{ transform: `translateY(${far}px)` }}>
        <rect width="1440" height="1024" fill="url(#surface-sky)" />
        <circle cx="1220" cy="150" r="130" fill="#FFE9A8" opacity="0.25" />
        <circle cx="1220" cy="150" r="90" fill="#FFE6A0" opacity="0.45" />
        <circle cx="1220" cy="150" r="55" fill="#FFF3C9" opacity="0.9" />
        <g fill="#FFFFFF" opacity="0.55">
          <ellipse cx="250" cy="140" rx="90" ry="28" />
          <ellipse cx="320" cy="125" rx="60" ry="22" />
          <ellipse cx="620" cy="90" rx="70" ry="20" />
        </g>
        <g stroke="#0B4A66" strokeWidth="4" fill="none" opacity="0.5" strokeLinecap="round">
          <path d="M120 220 q15 -18 30 0 q15 -18 30 0" />
          <path d="M420 260 q12 -14 24 0 q12 -14 24 0" />
          <path d="M760 190 q12 -14 24 0 q12 -14 24 0" />
        </g>
      </g>

      <g className="layer" style={{ transform: `translateY(${mid}px)` }}>
        <path
          className="sway"
          d="M0 620 Q 180 580 360 620 T 720 620 T 1080 620 T 1440 620 V1024 H0 Z"
          fill="#177EA0"
          opacity="0.85"
        />
        <path
          d="M0 700 Q 200 670 400 700 T 800 700 T 1200 700 T 1440 700 V1024 H0 Z"
          fill="#125E82"
          opacity="0.9"
        />
      </g>

      <g className="layer" style={{ transform: `translateY(${near}px)` }}>
        <path d="M0 800 Q 220 770 440 800 T 880 800 T 1320 800 T 1440 800 V1024 H0 Z" fill="#0B4A66" />
        <g fill="#FFFFFF" opacity="0.4">
          <circle cx="180" cy="860" r="8" />
          <circle cx="260" cy="900" r="5" />
          <circle cx="980" cy="880" r="10" />
          <circle cx="1120" cy="930" r="6" />
        </g>
      </g>
    </svg>
  );
}

function ReefScene() {
  const { far, mid, near } = useParallaxScroll({ far: 0.03, mid: 0.1, near: 0.2 });

  return (
    <svg viewBox="0 0 1440 1024" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="reef-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B4B57" />
          <stop offset="55%" stopColor="#0E7A82" />
          <stop offset="85%" stopColor="#C9A15B" />
          <stop offset="100%" stopColor="#E7C98A" />
        </linearGradient>
      </defs>

      <g className="layer" style={{ transform: `translateY(${far}px)` }}>
        <rect width="1440" height="1024" fill="url(#reef-water)" />
        <g fill="#FFFFFF" opacity="0.3">
          <circle cx="200" cy="180" r="6" />
          <circle cx="260" cy="240" r="4" />
          <circle cx="1200" cy="150" r="8" />
          <circle cx="1100" cy="260" r="5" />
        </g>
      </g>

      <g className="layer" style={{ transform: `translateY(${mid}px)` }}>
        <g fill="#FFB84D">
          <path d="M180 400 q40 -30 80 0 q-10 14 -40 14 q-30 0 -40 -14 Z" />
          <path d="M260 400 l24 -16 v32 z" />
        </g>
        <g fill="#FF7A59">
          <path d="M1180 300 q40 -28 80 0 q-10 13 -40 13 q-30 0 -40 -13 Z" />
          <path d="M1260 300 l22 -14 v28 z" />
        </g>
        <g fill="none" stroke="#FFB4A0" strokeWidth="4" opacity="0.85">
          <path d="M1300 940 q0 -110 -70 -140" />
          <path d="M1300 940 q0 -120 -20 -150" />
          <path d="M1300 940 q0 -120 40 -150" />
          <path d="M1300 940 q0 -110 80 -130" />
        </g>
      </g>

      <g className="layer" style={{ transform: `translateY(${near}px)` }}>
        <g fill="#FF7A59">
          <rect x="60" y="820" width="26" height="120" rx="13" />
          <rect x="100" y="780" width="22" height="160" rx="11" />
          <rect x="135" y="840" width="20" height="100" rx="10" />
        </g>
        <g fill="#F2506B">
          <rect x="90" y="800" width="18" height="140" rx="9" />
        </g>
        <path d="M0 960 Q 360 920 720 960 T 1440 960 V1024 H0 Z" fill="#E7C98A" />
      </g>
    </svg>
  );
}

function DeepScene() {
  const { far, mid, near } = useParallaxScroll({ far: 0.02, mid: 0.08, near: 0.15 });

  return (
    <svg viewBox="0 0 1440 1024" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="deep-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#04141C" />
          <stop offset="55%" stopColor="#0A2E40" />
          <stop offset="100%" stopColor="#0F3A50" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4FD1C5" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4FD1C5" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g className="layer" style={{ transform: `translateY(${far}px)` }}>
        <rect width="1440" height="1024" fill="url(#deep-water)" />
        <circle cx="220" cy="240" r="90" fill="url(#glow)" />
        <circle cx="1240" cy="700" r="110" fill="url(#glow)" />
        <circle cx="900" cy="180" r="70" fill="url(#glow)" />
      </g>

      <g className="layer" style={{ transform: `translateY(${mid}px)` }}>
        <g fill="#4FD1C5">
          <circle cx="220" cy="240" r="3" />
          <circle cx="250" cy="270" r="2" />
          <circle cx="190" cy="210" r="2" />
          <circle cx="1240" cy="700" r="3" />
          <circle cx="1270" cy="730" r="2" />
          <circle cx="900" cy="180" r="2.5" />
          <circle cx="60" cy="820" r="2" />
          <circle cx="1360" cy="300" r="2" />
        </g>
        <g opacity="0.75">
          <ellipse cx="1150" cy="360" rx="60" ry="42" fill="#8FE3E0" opacity="0.5" />
          <path
            d="M1100 380 q10 60 0 120 M1130 384 q6 60 -4 120 M1170 384 q-6 60 4 120 M1200 380 q-10 60 0 120"
            stroke="#8FE3E0"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
          />
        </g>
      </g>

      <g className="layer" style={{ transform: `translateY(${near}px)` }}>
        <g opacity="0.5">
          <ellipse cx="320" cy="620" rx="40" ry="28" fill="#8FE3E0" opacity="0.4" />
          <path
            d="M290 634 q6 40 0 80 M310 636 q4 40 -2 80 M340 636 q-4 40 2 80"
            stroke="#8FE3E0"
            strokeWidth="2.5"
            fill="none"
            opacity="0.4"
          />
        </g>
      </g>
    </svg>
  );
}

function KelpScene() {
  const { far, mid, near } = useParallaxScroll({ far: 0.03, mid: 0.1, near: 0.2 });

  return (
    <svg viewBox="0 0 1440 1024" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="kelp-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CFF6D8" />
          <stop offset="55%" stopColor="#1F6E52" />
          <stop offset="100%" stopColor="#0B3B2C" />
        </linearGradient>
      </defs>

      <g className="layer" style={{ transform: `translateY(${far}px)` }}>
        <rect width="1440" height="1024" fill="url(#kelp-water)" />
        <g fill="#FFFDE8" opacity="0.16" className="shimmer">
          <polygon points="200,0 320,0 120,1024 40,1024" />
          <polygon points="1100,0 1220,0 1380,1024 1280,1024" />
        </g>
      </g>

      <g className="layer" style={{ transform: `translateY(${mid}px)` }}>
        <g fill="none" stroke="#3FAE7A" strokeWidth="20" strokeLinecap="round">
          <path d="M1300 1024 C 1320 840, 1250 760, 1300 600 C 1340 470, 1270 400, 1310 260" />
          <path d="M1220 1024 C 1200 880, 1260 800, 1210 660 C 1180 540, 1240 460, 1200 340" />
        </g>
        <g fill="#FFD37A">
          <path d="M700 500 q30 -22 60 0 q-8 10 -30 10 q-22 0 -30 -10 Z" />
          <path d="M760 500 l18 -12 v24 z" />
        </g>
      </g>

      <g className="layer" style={{ transform: `translateY(${near}px)` }}>
        <g fill="none" stroke="#2F9464" strokeWidth="26" strokeLinecap="round">
          <path d="M120 1024 C 100 820, 180 760, 130 600 C 90 480, 160 400, 120 260" />
          <path d="M220 1024 C 240 860, 170 780, 220 640 C 260 520, 190 440, 230 320" />
        </g>
      </g>
    </svg>
  );
}

function TreasureScene() {
  const { far, mid, near } = useParallaxScroll({ far: 0.03, mid: 0.1, near: 0.2 });

  return (
    <svg viewBox="0 0 1440 1024" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="treasure-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E5266" />
          <stop offset="55%" stopColor="#178C97" />
          <stop offset="85%" stopColor="#D8B978" />
          <stop offset="100%" stopColor="#C79A52" />
        </linearGradient>
      </defs>

      <g className="layer" style={{ transform: `translateY(${far}px)` }}>
        <rect width="1440" height="1024" fill="url(#treasure-water)" />
      </g>

      <g className="layer" style={{ transform: `translateY(${mid}px)` }}>
        <g fill="#5A3A22">
          <rect x="60" y="900" width="220" height="26" rx="10" transform="rotate(-6 170 913)" />
          <rect x="90" y="930" width="180" height="22" rx="10" transform="rotate(4 180 941)" />
        </g>
        <g fill="#E7B75F">
          <circle cx="1150" cy="960" r="10" />
          <circle cx="1330" cy="975" r="8" />
          <circle cx="1250" cy="990" r="9" />
        </g>
        <g stroke="#FFF3C9" strokeWidth="3" opacity="0.8">
          <path d="M1300 830 v20 M1290 840 h20" />
          <path d="M1120 900 v14 M1113 907 h14" />
        </g>
      </g>

      <g className="layer" style={{ transform: `translateY(${near}px)` }}>
        <g fill="#FFFFFF" opacity="0.5">
          <circle className="rise" cx="220" cy="820" r="7" />
          <circle className="rise" cx="260" cy="860" r="4" style={{ animationDelay: "1.5s" }} />
          <circle className="rise" cx="1180" cy="800" r="6" style={{ animationDelay: "3s" }} />
        </g>
        <g>
          <rect x="1180" y="860" width="180" height="100" rx="10" fill="#8A5A2B" />
          <path d="M1180 860 q90 -50 180 0 v20 h-180 z" fill="#C9932E" />
          <rect x="1255" y="880" width="30" height="30" rx="6" fill="#5A3A15" />
        </g>
        <path d="M0 970 Q 360 930 720 970 T 1440 970 V1024 H0 Z" fill="#C79A52" />
      </g>
    </svg>
  );
}

export default OceanBackground;