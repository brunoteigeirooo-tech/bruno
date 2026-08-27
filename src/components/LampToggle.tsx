"use client";

interface LampToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export default function LampToggle({
  darkMode,
  onToggle,
}: LampToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={darkMode ? "Encender la luz" : "Apagar la luz"}
      className={`lamp-control ${darkMode ? "lamp-off" : "lamp-on"}`}
    >
      <span className="lamp-fixture">
        <span className="lamp-cap" />
        <span className="lamp-bulb">
          <span className="lamp-glow" />
        </span>
      </span>

      <span className="lamp-cord-wrap">
        <span className="lamp-cord" />
        <span className="lamp-pull">
          <span className="lamp-pull-top" />
          <span className="lamp-pull-handle" />
        </span>
      </span>

      <style jsx>{`
        .lamp-control {
          position: relative;
          width: 42px;
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          cursor: pointer;
          background: transparent;
          border: 0;
          padding: 0;
          color: inherit;
          overflow: visible;
        }

        .lamp-fixture {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          transform-origin: center top;
          transition: transform 300ms ease;
        }

        .lamp-control:hover .lamp-fixture {
          transform: translateY(1px);
        }

        .lamp-cap {
          width: 16px;
          height: 7px;
          border-radius: 4px 4px 2px 2px;
          background: currentColor;
          opacity: 0.7;
        }

        .lamp-bulb {
          position: relative;
          width: 25px;
          height: 30px;
          margin-top: -1px;
          border-radius: 50% 50% 45% 45%;
          background: ${darkMode ? "rgba(245,243,237,0.16)" : "#f5b942"};
          border: 1px solid
            ${darkMode ? "rgba(245,243,237,0.35)" : "rgba(90,55,5,0.25)"};
          box-shadow: ${
            darkMode
              ? "0 0 0 rgba(245,243,237,0)"
              : "0 0 10px rgba(245,185,66,0.45), 0 0 28px rgba(245,185,66,0.22)"
          };
          transition:
            background 400ms ease,
            box-shadow 400ms ease,
            border-color 400ms ease;
        }

        .lamp-bulb::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 6px;
          width: 7px;
          height: 12px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: ${darkMode
            ? "rgba(245,243,237,0.2)"
            : "rgba(255,255,255,0.75)"};
          filter: blur(1px);
        }

        .lamp-glow {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          background: ${
            darkMode
              ? "transparent"
              : "radial-gradient(circle, rgba(245,185,66,0.24), transparent 68%)"
          };
          transition: opacity 400ms ease;
          pointer-events: none;
        }

        .lamp-cord-wrap {
          position: absolute;
          top: 35px;
          left: 50%;
          width: 20px;
          height: 55px;
          transform: translateX(-50%);
          transform-origin: top center;
          transition: transform 180ms ease;
        }

        .lamp-cord {
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          height: 37px;
          transform: translateX(-50%);
          border-radius: 999px;
          background: currentColor;
          opacity: 0.48;
        }

        .lamp-pull {
          position: absolute;
          left: 50%;
          top: 34px;
          width: 12px;
          height: 21px;
          transform: translateX(-50%);
          transform-origin: top center;
          transition: transform 180ms ease;
        }

        .lamp-pull-top {
          display: block;
          width: 2px;
          height: 8px;
          margin: 0 auto;
          background: currentColor;
          opacity: 0.55;
        }

        .lamp-pull-handle {
          display: block;
          width: 9px;
          height: 12px;
          margin: -1px auto 0;
          border-radius: 50% 50% 45% 45%;
          background: currentColor;
          opacity: 0.75;
        }

        .lamp-control:hover .lamp-cord-wrap {
          animation: lampSwing 1.15s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .lamp-control:hover .lamp-pull {
          animation: pullSwing 0.9s ease-in-out;
        }

        .lamp-control:active .lamp-cord-wrap {
          transform: translateX(-50%) translateY(5px) rotate(3deg);
        }

        .lamp-control:active .lamp-pull {
          transform: translateX(-50%) translateY(7px);
        }

        @keyframes lampSwing {
          0% {
            transform: translateX(-50%) rotate(0deg);
          }
          20% {
            transform: translateX(-50%) rotate(12deg);
          }
          45% {
            transform: translateX(-50%) rotate(-9deg);
          }
          68% {
            transform: translateX(-50%) rotate(6deg);
          }
          84% {
            transform: translateX(-50%) rotate(-3deg);
          }
          100% {
            transform: translateX(-50%) rotate(0deg);
          }
        }

        @keyframes pullSwing {
          0% {
            transform: translateX(-50%) rotate(0deg);
          }
          25% {
            transform: translateX(-50%) rotate(-10deg);
          }
          55% {
            transform: translateX(-50%) rotate(8deg);
          }
          80% {
            transform: translateX(-50%) rotate(-4deg);
          }
          100% {
            transform: translateX(-50%) rotate(0deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lamp-control:hover .lamp-cord-wrap,
          .lamp-control:hover .lamp-pull {
            animation: none;
          }
        }
      `}</style>
    </button>
  );
}
