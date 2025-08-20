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

export const inspirations: Inspiration[] = [
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
