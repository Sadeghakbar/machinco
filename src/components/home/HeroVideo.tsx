"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  fallbackText: string;
};

const VIDEO_MP4 = "/vids/0503.mp4";
const POSTER = "/vids/0503-poster.jpg";

/**
 * Safari's engine (all browsers on iPhone/iPad, Safari on Mac) reports vendor "Apple" and can
 * render an MP4 inside <img> as a silent looping animation.
 */
function isAppleWebKit() {
  return /Apple/.test(navigator.vendor);
}

/**
 * Homepage hero background video.
 *
 * - Muted + playsInline + autoplay is what iOS Safari and Android Chrome require for autoplay.
 * - The MP4 is the original 0503 clip remuxed (same H.264 frames) into a faststart MP4 without audio.
 * - play() is retried after hydration and when the tab becomes visible again.
 * - If the browser refuses autoplay (e.g. iPhone Low Power Mode, which blocks every autoplaying
 *   video), two fallbacks apply:
 *     1. Safari/iOS: the same MP4 is shown through an <img> element, which Safari animates as a
 *        silent loop and which is not subject to the video autoplay block.
 *     2. Any browser: the first tap/click anywhere on the page starts the video (user-initiated
 *        playback is always allowed).
 *   Until then the poster frame stays visible, so the hero never looks empty.
 */
export function HeroVideo({ fallbackText }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imageFallback, setImageFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;

    let blocked = false;

    const removeGestureListeners = () => {
      document.removeEventListener("touchend", startOnGesture);
      document.removeEventListener("click", startOnGesture);
    };
    const startOnGesture = () => {
      removeGestureListeners();
      video.play().catch(() => {
        // Still refused: the poster (or the <img> animation) remains visible.
      });
    };

    const tryPlay = () => {
      if (!video.paused || blocked) {
        return;
      }
      const attempt = video.play();
      if (attempt) {
        attempt.catch((error: unknown) => {
          if (error instanceof DOMException && error.name === "NotAllowedError") {
            blocked = true;
            if (isAppleWebKit()) {
              setImageFallback(true);
            }
            document.addEventListener("touchend", startOnGesture, { passive: true });
            document.addEventListener("click", startOnGesture);
          }
        });
      }
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        tryPlay();
      }
    };

    // Once the real video runs (autoplay or after a tap), the <img> fallback is no longer needed.
    const onPlaying = () => {
      setImageFallback(false);
      removeGestureListeners();
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay, { once: true });
    video.addEventListener("playing", onPlaying);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("playing", onPlaying);
      document.removeEventListener("visibilitychange", onVisibility);
      removeGestureListeners();
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER}
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={VIDEO_MP4} type="video/mp4" />
        <source src="/vids/0503.mov" type="video/quicktime" />
        {fallbackText}
      </video>
      {imageFallback ? (
        <img
          className="hero-video hero-video-img"
          src={VIDEO_MP4}
          alt=""
          aria-hidden="true"
          onError={() => setImageFallback(false)}
        />
      ) : null}
    </>
  );
}
