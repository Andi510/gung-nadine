"use client";

import { useState, useRef } from 'react';
import StarryBackground from '@/components/StarryBackground';
import { motion } from 'motion/react';
import { Heart, Music } from 'lucide-react';

const photos = [
  { src: '/a.jpg', quote: 'Senyummu adalah candu bagiku.' },
  { src: '/b.jpg', quote: 'Bersamamu, setiap detik adalah keajaiban.' },
  { src: '/c.jpg', quote: 'Kamu adalah alasan di balik tawaku hari ini.' },
  { src: '/d.jpg', quote: 'Mencintaimu adalah hal termudah yang pernah kulakukan.' },
  { src: '/e.jpg', quote: 'Di matamu, aku menemukan rumah.' },
  { src: '/f.jpg', quote: 'Kamu adalah doa yang dikabulkan oleh semesta.' },
  { src: '/g.jpg', quote: 'Tak ada tempat yang lebih indah selain di sampingmu.' },
  { src: '/h.jpg', quote: 'Genggam tanganku, dan mari kita taklukkan dunia bersama.' },
  { src: '/i.jpg', quote: 'Kamu adalah puisi terindah yang pernah kutulis.' },
  { src: '/j.jpg', quote: 'Aku memilihmu, hari ini, esok, dan selamanya.' },
];

export default function Page() {
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStart = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(e => console.log("Audio play failed:", e));
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="min-h-screen font-sans text-white selection:bg-pink-500/30">
      <StarryBackground />
      
      {/* Audio element - hidden */}
      <audio ref={audioRef} src="/music.mp3" loop />

      {!started ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStart}
              className="flex flex-col items-center gap-6 p-10 rounded-3xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 shadow-[0_0_40px_rgba(236,72,153,0.2)]"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <Heart className="w-20 h-20 text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" fill="currentColor" />
              </motion.div>
              <div className="space-y-2">
                <span className="block text-2xl font-serif italic text-pink-100">Ada sesuatu untukmu...</span>
                <span className="block text-sm text-gray-400 tracking-widest uppercase">Klik untuk membuka</span>
              </div>
            </motion.button>
          </motion.div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="container mx-auto px-4 py-20 max-w-5xl relative"
        >
          {/* Music Toggle Button */}
          <button 
            onClick={toggleMusic}
            className="fixed top-6 right-6 z-40 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
            title={isPlaying ? "Pause Music" : "Play Music"}
          >
            <Music className={`w-6 h-6 ${isPlaying ? 'animate-pulse text-pink-400' : 'text-gray-400'}`} />
          </button>

          <div className="text-center mb-32 space-y-8 mt-10">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="text-5xl md:text-7xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 drop-shadow-lg"
            >
              Untuk Kamu, Cintaku
            </motion.h1>
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1.5 }}
              className="max-w-3xl mx-auto relative"
            >
              <div className="absolute -top-6 -left-6 text-6xl text-pink-500/20 font-serif">"</div>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light italic z-10 relative px-8">
                Sejak pertama kali bertemu, aku tahu ada sesuatu yang istimewa. Kamu bukan hanya sekadar pasangan, tapi juga sahabat, tempat bersandar, dan rumah bagiku. Terima kasih telah hadir dan mewarnai hidupku dengan cinta yang begitu tulus. Aku mencintaimu lebih dari kata-kata yang bisa kuucapkan.
              </p>
              <div className="absolute -bottom-10 -right-6 text-6xl text-pink-500/20 font-serif">"</div>
            </motion.div>
          </div>

          <div className="space-y-40">
            {photos.map((photo, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2 relative group">
                  <div className={`absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-purple-500/30 rounded-3xl transform ${index % 2 === 0 ? 'rotate-3 group-hover:rotate-6' : '-rotate-3 group-hover:-rotate-6'} transition-transform duration-700 blur-sm`}></div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/20 bg-gray-900 shadow-2xl">
                    {/* Fallback image logic */}
                    <img 
                      src={photo.src} 
                      alt={`Kenangan ${index + 1}`}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                      onError={(e) => {
                        // Fallback to picsum if local image not found
                        (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${index + 20}/800/1000`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left px-4">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <h3 className="text-3xl md:text-5xl font-serif italic text-pink-100 leading-tight drop-shadow-md">
                      "{photo.quote}"
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mt-8 mx-auto md:mx-0 rounded-full opacity-50"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="mt-40 text-center pb-32"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-16 h-16 text-pink-500 mx-auto mb-8 drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]" fill="currentColor" />
            </motion.div>
            <p className="text-4xl md:text-6xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
              I Love You, Selamanya.
            </p>
            <p className="mt-6 text-gray-400 font-light tracking-widest text-sm uppercase">
              Terima kasih telah menjadi bagian dari hidupku
            </p>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
