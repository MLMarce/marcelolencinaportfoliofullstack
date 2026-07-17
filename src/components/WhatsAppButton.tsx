"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

const WHATSAPP_NUMBER = "5493518509827";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// Corners: bottom-right (default), bottom-left, top-right, top-left
type Corner = "br" | "bl" | "tr" | "tl";

const MARGIN = 20; // px from viewport edges

function getCornerPosition(
  corner: Corner,
  btnSize: number
): { x: number; y: number } {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  switch (corner) {
    case "br":
      return { x: vw - btnSize - MARGIN, y: vh - btnSize - MARGIN };
    case "bl":
      return { x: MARGIN, y: vh - btnSize - MARGIN };
    case "tr":
      return { x: vw - btnSize - MARGIN, y: MARGIN + 64 }; // 64 = navbar height
    case "tl":
      return { x: MARGIN, y: MARGIN + 64 };
  }
}

function snapToNearestCorner(
  x: number,
  y: number,
  btnSize: number
): Corner {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const cx = x + btnSize / 2;
  const cy = y + btnSize / 2;
  const right = cx > vw / 2;
  const bottom = cy > vh / 2;
  if (right && bottom) return "br";
  if (!right && bottom) return "bl";
  if (right && !bottom) return "tr";
  return "tl";
}

export default function WhatsAppButton() {
  const BTN_SIZE = 56;
  const [corner, setCorner] = useState<Corner>("br");
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  const btnRef = useRef<HTMLButtonElement>(null);
  const dragOrigin = useRef<{ mx: number; my: number; bx: number; by: number } | null>(null);
  const currentPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);

  // Initialize position on mount + window resize
  const initPos = useCallback(() => {
    const p = getCornerPosition(corner, BTN_SIZE);
    setPos(p);
    currentPos.current = p;
  }, [corner]);

  useEffect(() => {
    initPos();
    window.addEventListener("resize", initPos);
    return () => window.removeEventListener("resize", initPos);
  }, [initPos]);

  // ---- Pointer events (works for mouse AND touch) ----
  const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!pos) return;
    e.preventDefault();
    btnRef.current?.setPointerCapture(e.pointerId);
    dragOrigin.current = {
      mx: e.clientX,
      my: e.clientY,
      bx: pos.x,
      by: pos.y,
    };
    setIsDragging(false);
    setHasMoved(false);
    setShowTooltip(false);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!dragOrigin.current) return;
    const dx = e.clientX - dragOrigin.current.mx;
    const dy = e.clientY - dragOrigin.current.my;

    // Only start dragging after 6px movement
    if (!isDragging && Math.hypot(dx, dy) < 6) return;

    setIsDragging(true);
    setHasMoved(true);

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const nx = Math.max(0, Math.min(vw - BTN_SIZE, dragOrigin.current.bx + dx));
    const ny = Math.max(0, Math.min(vh - BTN_SIZE, dragOrigin.current.by + dy));

    currentPos.current = { x: nx, y: ny };

    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(() => {
      setPos({ x: nx, y: ny });
    });
  };

  const onPointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!dragOrigin.current) return;

    if (isDragging) {
      // Snap to nearest corner
      const snapped = snapToNearestCorner(
        currentPos.current.x,
        currentPos.current.y,
        BTN_SIZE
      );
      setCorner(snapped);
      const snapPos = getCornerPosition(snapped, BTN_SIZE);
      setPos(snapPos);
      currentPos.current = snapPos;
    } else if (!hasMoved) {
      // It was a click — open WhatsApp
      window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    }

    dragOrigin.current = null;
    setIsDragging(false);
  };

  if (!pos) return null;

  const tooltipSide =
    corner === "br" || corner === "tr" ? "left" : "right";

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: BTN_SIZE,
        height: BTN_SIZE,
        zIndex: 9999,
        userSelect: "none",
        transition: isDragging ? "none" : "left 0.35s cubic-bezier(0.34,1.56,0.64,1), top 0.35s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      {/* Tooltip */}
      {showTooltip && !isDragging && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none
            ${tooltipSide === "left" ? "right-[calc(100%+12px)]" : "left-[calc(100%+12px)]"}
          `}
          style={{
            background: "rgba(10,10,15,0.95)",
            border: "1px solid rgba(37,211,102,0.4)",
            borderRadius: "10px",
            padding: "6px 12px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#fff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          💬 Escribime por WhatsApp
          <span
            className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent
              ${tooltipSide === "left"
                ? "right-[-7px] border-l-[7px] border-l-[rgba(37,211,102,0.4)]"
                : "left-[-7px] border-r-[7px] border-r-[rgba(37,211,102,0.4)]"
              }`}
          />
        </div>
      )}

      {/* Pulse ring */}
      {!isDragging && (
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{
            background: "rgba(37,211,102,0.25)",
            animationDuration: "2s",
          }}
        />
      )}

      {/* Button */}
      <button
        ref={btnRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={() => !isDragging && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
        style={{
          width: BTN_SIZE,
          height: BTN_SIZE,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25d366 0%, #128c5e 100%)",
          border: "none",
          cursor: isDragging ? "grabbing" : "grab",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isDragging
            ? "0 12px 40px rgba(37,211,102,0.55), 0 0 0 4px rgba(37,211,102,0.15)"
            : "0 6px 25px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.35)",
          transform: isDragging ? "scale(1.1)" : "scale(1)",
          transition: isDragging
            ? "box-shadow 0.15s, transform 0.15s"
            : "box-shadow 0.3s, transform 0.2s",
          position: "relative",
          zIndex: 1,
          outline: "none",
          touchAction: "none",
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width={28}
          height={28}
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </div>
  );
}
