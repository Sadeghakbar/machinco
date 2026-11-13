"use client";

import { useEffect, useRef } from "react";

type HeroVideoProps = {
  fallbackText: string;
};

/**
 * Homepage hero background video.
 *
 * - Muted + playsInline + autoplay is what iOS Safari and Android Chrome require for autoplay.
 * - The MP4 is the original 0503 clip remuxed (same H.264 frames) into a standard MP4 with the
 *   index at the start ("faststart") and without the unused audio track, so phones can start
 *   playback immediately. The original .mov remains as a secondary source.
 * - play() is called again after hydration and when the tab becomes visible, because some mobile
 *   browsers skip the autoplay attempt for videos inserted or resumed late.
 * - If the browser still refuses (e.g. iOS Low Power Mode, data saver), the poster frame stays
 *   visible — the hero never looks empty.
 */
export function HeroVideo({ fallbackText }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    // Set as property as well as attribute: autoplay policies check the live muted state.
    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      if (!video.paused) {
        return;
      }
      const attempt = video.play();
      if (attempt) {
        attempt.catch(() => {
          // Autoplay blocked by browser or device settings: the poster image remains visible.
        });
      }
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        tryPlay();
      }
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay, { once: true });
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/vids/0503-poster.jpg"
      disablePictureInPicture
      disableRemotePlayback
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/vids/0503.mp4" type="video/mp4" />
      <source src="/vids/0503.mov" type="video/quicktime" />
      {fallbackText}
    </video>
  );
}
