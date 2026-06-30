# Homepage hero video assets

The hero on `index-new.html` is pre-wired to load a background video from this
folder. It only activates when these files exist (the `<video>` `onloadeddata`
handler adds `.has-hero-video`). Until then the hero keeps its charcoal + red
gradient, so a missing file never breaks the page.

## Required filenames (exact, case-sensitive)

| File | What | Spec |
|---|---|---|
| `hero.webm` | Desktop background video, VP9 | 1920x1080, 8-10s, no audio, ~2 Mbps, target < 4 MB |
| `hero.mp4`  | Desktop background video, H.264 | 1920x1080, 8-10s, no audio, faststart, target < 4 MB |
| `hero-poster.webp` | Final "satisfied" frame | 1920x1080, < 120 KB (shows before play / if autoplay blocked) |

`sms-confirmation.svg` is the branded confirmation to composite onto the phone
screen on the "promise kept" beat. Export to PNG with transparency (~1200px wide)
before bringing it into the video editor.

## Encode commands

```bash
ffmpeg -i hero_master.mov -an -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -movflags +faststart -b:v 3M -maxrate 4M -bufsize 6M hero.mp4
ffmpeg -i hero_master.mov -an -c:v libvpx-vp9 -b:v 2M -crf 32 hero.webm
ffmpeg -sseof -0.1 -i hero.mp4 -frames:v 1 -q:v 2 hero-poster.webp
```

Optional later: a 9:16 mobile cut (`hero-mobile.webm/.mp4`). Ping to have the
markup wired for a mobile source swap once those exist.
