# Aside — Mengmeng Xue

Bilingual UX case study with a no-install interactive desktop demonstration.

- Case study: https://celine-xue.github.io/aside-mengmeng-xue/
- Try Aside: https://celine-xue.github.io/aside-mengmeng-xue/demo/

The browser demo recreates the original Aside System Layer and Work Layer, including workflow editing, native-looking floating guidance, draggable windows, three display modes, light/dark appearance, Pin behavior, pause/resume, and completion. Sample creative workspaces make the music-video workflow explorable inside a single page.

The creative tools are simulations; no external AI, Adobe, Suno, Sora or account service is connected. Audio is a bundled demo sample; visuals come from the supplied project references. Project export downloads a JSON summary, not a rendered video. Progress is stored locally in the visitor's browser.

`demo/index.html` is a self-contained production build with bundled fonts, images and audio, a script hash Content Security Policy, and no analytics or external requests. Source is maintained in the local Aside desktop MVP project's `web-demo/` folder; build using `npm run build:demo`.
