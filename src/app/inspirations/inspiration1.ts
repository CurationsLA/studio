// inspiration1.ts
export interface Inspiration {
  id: string;
  title: string;
  headline: string;
  layout: "hero" | "grid" | "card" | "layered" | "banner" | "feed";
  themeColor: string;
  description?: string;
  tags: string[];
  cta?: { label: string; url: string };
  stats?: Array<{ label: string; value: string }>;
  posts?: Array<{ title: string; date?: string; category?: string }>;
}

export const inspiration: Inspiration = {
  id: "future-neon-grid",
  title: "Future Neon Grid",
  headline: "CURATIONS V2",
  layout: "hero",
  themeColor: "#FF00FF",
  description: "The spotlight is a grid: neon pulses, brand beats, cultural rhythms.",
  tags: ["neon", "grid", "future"],
  stats: [
    { label: "Brands Amplified", value: "777+" },
    { label: "Subscribers", value: "80K+" },
  ],
  cta: { label: "Enter Grid", url: "/grid" },
};
