"use client";
import { useEffect, useState } from 'react';

export default function StarryBackground() {
  const [stars, setStars] = useState<{ id: number; size: number; left: string; duration: string; delay: string; twinkleDuration: string }[]>([]);

  useEffect(() => {
    // Generate 150 stars for a dense starry effect
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5, // Size between 0.5px and 3px
      left: `${Math.random() * 150 - 25}vw`, // -25vw to 125vw to account for diagonal falling
      duration: `${Math.random() * 15 + 10}s`, // Fall duration between 10s and 25s
      delay: `-${Math.random() * 20}s`, // Negative delay so they are already falling when page loads
      twinkleDuration: `${Math.random() * 3 + 2}s`, // Twinkle duration between 2s and 5s
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-gradient-to-b from-gray-900 via-[#1a0b2e] to-black pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.left,
            animationDuration: `${star.duration}, ${star.twinkleDuration}`,
            animationDelay: `${star.delay}, ${star.delay}`,
          }}
        />
      ))}
    </div>
  );
}
