---
id: known-issues
title: Known Issues
---

- [ ] `carefree-drawboard` 🎨 is not smartphone friendly.

> I think it's a bit too heavy for mobile devices, but if many people want it, I will try to support it.

- [ ] The item from a select box will blur under some combinations of system & hardware.

    * This seems to be a `chakra`/`popover.js` issue.

- [ ] Combining keyboard shortcuts and Undo/Redo may cause plugins not follow the selecting `Node`s correctly.
- [ ] Using keyboard shortcuts in sketch mode may cause unexpected behaviors.
- [ ] On M1 Mac, anything related to the `input` HTML tag with `type="file"` may not work.

    * Therefore the `Upload Image` button may not response. In this case, you can directly drag images to drawboard 🎨.

- [x] The interactions on the drawboard 🎨 will be interrupted if the mouse slipped pass any plugin ([be1b433](https://github.com/carefree0910/carefree-drawboard/commit/be1b43389e5db24b1ade3d973c45b24a3d944d30)).

    * This is intended, as we want the plugins' interactions to be prioritized.
    * But this will also lead to unexpected user experiences, so maybe it need to be somehow optimized in the future.

- [ ] The displayed `CURRENT VERSION` in browser console is one version behind.
- [ ] When 'magnet effects' take place, the plugins cannot be dragged to the correct position.
