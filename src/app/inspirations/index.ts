// index.ts
// Master aggregator for all CURATIONS V2 inspirations.
// Imports each inspiration file and exports them as a single array.

import { Inspiration } from "./inspiration1";

import { inspiration as inspiration1 } from "./inspiration1";
import { inspiration as inspiration2 } from "./inspiration2";
import { inspiration as inspiration3 } from "./inspiration3";
import { inspiration as inspiration4 } from "./inspiration4";
import { inspiration as inspiration5 } from "./inspiration5";
import { inspiration as inspiration6 } from "./inspiration6";
import { inspiration as inspiration7 } from "./inspiration7";
import { inspiration as inspiration8 } from "./inspiration8";
import { inspiration as inspiration9 } from "./inspiration9";
import { inspiration as inspiration10 } from "./inspiration10";
import { inspiration as homepage } from "./homepage";

const silverVibes: Inspiration = {
    id: "silver-vibes",
    title: "Silver Vibes",
    headline: "🥈 FINAL DRAFTS",
    layout: "grid",
    themeColor: "#C0C0C0",
    description: "Primary workspace for final draft elements and pages. Contains live drafts and an archive for comparison and versioning.",
    tags: ["workflow", "draft", "silver"],
    ctas: [
      { label: "View Live Drafts", url: "/vibes/silver-vibes" },
      { label: "View Archive", url: "/vibes/silver-vibes/archive" },
    ],
  };
  
  const glitterVibes: Inspiration = {
    id: "glitter-vibes",
    title: "Glitter Vibes",
    headline: "✨ STAGING",
    layout: "grid",
    themeColor: "#D4AF37",
    description: "Staging area for curated components ready for master. Also holds the deck for items demoted from Golden.",
    tags: ["workflow", "staging", "glitter"],
    ctas: [
      { label: "View Staging", url: "/vibes/glitter-vibes" },
      { label: "Golden Vibes Deck", url: "/vibes/glitter-vibes/golden-vibes-deck" },
    ],
  };
  
  const goldenVibes: Inspiration = {
    id: "golden-vibes",
    title: "Golden Vibes",
    headline: "🏆 MASTER",
    layout: "grid",
    themeColor: "#FFD700",
    description: "The master production candidate for internal debugging and trusted circle performance identification. No duplicates allowed.",
    tags: ["workflow", "master", "golden"],
    cta: { label: "View Master", url: "/vibes/golden-vibes" },
  };

export const inspirations: Inspiration[] = [
  goldenVibes,
  glitterVibes,
  silverVibes,
  homepage,
  inspiration1,
  inspiration2,
  inspiration3,
  inspiration4,
  inspiration5,
  inspiration6,
  inspiration7,
  inspiration8,
  inspiration9,
  inspiration10,
];
