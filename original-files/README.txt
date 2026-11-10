Original files used on the portfolio
=====================================

Inside Lovable, the photos and CV are stored online, and the files in
src/assets/*.asset.json only point to them. These are the real files, so you
have your own copy.

If you host the site somewhere other than Lovable, copy these files into
public/ and change the imports in src/content/portfolio.ts and
src/components/portfolio/Hero.tsx to plain paths, for example:

  src: "/pos-on-device.png"
  cv:  "/CV-Roza-Belay.pdf"

Files:
- roza-belay.png      profile photo (top of the page)
- pos-on-device.png   Android POS project image
- webshop.png         webshop project image
- chat-app.png        chat app project image
- CV-Roza-Belay.pdf   downloadable CV
