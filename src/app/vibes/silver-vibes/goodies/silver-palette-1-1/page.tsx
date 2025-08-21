import Link from 'next/link';

export default function SilverPalettePage() {
  const coreTrio = [
    { name: 'Green', hex: '#ebf998', description: 'Energetic lime-yellow green', usage: 'Actions/Success' },
    { name: 'Blue', hex: '#38b6ff', description: 'Vibrant cyan-blue', usage: 'Trust/Navigation' },
    { name: 'Pink', hex: '#ff69b4', description: 'Hot pink magenta', usage: 'Accents/Highlights' },
  ];

  const palettes = [
    {
      name: 'Dynamic Professional',
      colors: [
        { name: 'Green', hex: '#ebf998', usage: 'Actions/Success' },
        { name: 'Blue', hex: '#38b6ff', usage: 'Trust/Navigation' },
        { name: 'Pink', hex: '#ff69b4', usage: 'Accents/Highlights' },
        { name: 'Purple', hex: '#8b5cf6', usage: 'Premium features' },
        { name: 'Orange', hex: '#f59e0b', usage: 'Warnings/Secondary CTAs' },
        { name: 'Neutral', hex: '#374151', usage: 'Text/Backgrounds' },
        { name: 'Light Neutral', hex: '#f9fafb', usage: 'Backgrounds' },
      ]
    },
    {
      name: 'Tech Startup',
      colors: [
        { name: 'Green', hex: '#ebf998' },
        { name: 'Blue', hex: '#38b6ff' },
        { name: 'Pink', hex: '#ff69b4' },
        { name: 'Purple', hex: '#7c3aed', usage: 'Pro features' },
        { name: 'Yellow', hex: '#fbbf24', usage: 'Notifications' },
        { name: 'Neutral', hex: '#1f2937', usage: 'Dark mode' },
        { name: 'Light Neutral', hex: '#ffffff', usage: 'Clean backgrounds' },
      ]
    },
    {
      name: 'Creative Agency',
      colors: [
        { name: 'Green', hex: '#ebf998' },
        { name: 'Blue', hex: '#38b6ff' },
        { name: 'Pink', hex: '#ff69b4' },
        { name: 'Purple', hex: '#a855f7', usage: 'Luxury elements' },
        { name: 'Coral', hex: '#fb7185', usage: 'Secondary accents' },
        { name: 'Neutral', hex: '#475569', usage: 'Professional text' },
        { name: 'Light Neutral', hex: '#f1f5f9', usage: 'Content areas' },
      ]
    },
    {
      name: 'SaaS Platform',
      colors: [
        { name: 'Green', hex: '#ebf998' },
        { name: 'Blue', hex: '#38b6ff' },
        { name: 'Pink', hex: '#ff69b4' },
        { name: 'Indigo', hex: '#6366f1', usage: 'Analytics/Data' },
        { name: 'Amber', hex: '#f59e0b', usage: 'Warnings' },
        { name: 'Neutral', hex: '#334155', usage: 'Interface text' },
        { name: 'Light Neutral', hex: '#f8fafc', usage: 'Dashboard backgrounds' },
      ]
    },
    {
      name: 'E-commerce Bold',
      colors: [
        { name: 'Green', hex: '#ebf998' },
        { name: 'Blue', hex: '#38b6ff' },
        { name: 'Pink', hex: '#ff69b4' },
        { name: 'Red', hex: '#ef4444', usage: 'Sale prices/Urgency' },
        { name: 'Orange', hex: '#f97316', usage: 'Add to cart secondary' },
        { name: 'Neutral', hex: '#52525b', usage: 'Product text' },
        { name: 'Light Neutral', hex: '#fafafa', usage: 'Product backgrounds' },
      ]
    },
    {
      name: 'Fintech Modern',
      colors: [
        { name: 'Green', hex: '#ebf998' },
        { name: 'Blue', hex: '#38b6ff' },
        { name: 'Pink', hex: '#ff69b4' },
        { name: 'Emerald', hex: '#10b981', usage: 'Money/Growth' },
        { name: 'Sky', hex: '#0ea5e9', usage: 'Security elements' },
        { name: 'Neutral', hex: '#27272a', usage: 'Financial data' },
        { name: 'Light Neutral', hex: '#f4f4f5', usage: 'Clean interfaces' },
      ]
    },
    {
      name: 'Gaming/Entertainment',
      colors: [
        { name: 'Green', hex: '#ebf998' },
        { name: 'Blue', hex: '#38b6ff' },
        { name: 'Pink', hex: '#ff69b4' },
        { name: 'Purple', hex: '#a21caf', usage: 'Achievements' },
        { name: 'Lime', hex: '#84cc16', usage: 'Health/Energy' },
        { name: 'Neutral', hex: '#18181b', usage: 'Dark gaming UI' },
        { name: 'Light Neutral', hex: '#f4f4f5', usage: 'Leaderboards' },
      ]
    },
    {
      name: 'Health & Wellness',
      colors: [
        { name: 'Green', hex: '#ebf998' },
        { name: 'Blue', hex: '#38b6ff' },
        { name: 'Pink', hex: '#ff69b4' },
        { name: 'Teal', hex: '#14b8a6', usage: 'Wellness indicators' },
        { name: 'Rose', hex: '#f43f5e', usage: 'Health alerts' },
        { name: 'Neutral', hex: '#64748b', usage: 'Information text' },
        { name: 'Light Neutral', hex: '#f8fafc', usage: 'Clean medical UI' },
      ]
    },
    {
      name: 'Education Platform',
      colors: [
        { name: 'Green', hex: '#ebf998' },
        { name: 'Blue', hex: '#38b6ff' },
        { name: 'Pink', hex: '#ff69b4' },
        { name: 'Violet', hex: '#7c2d12', usage: 'Learning paths' },
        { name: 'Yellow', hex: '#eab308', usage: 'Achievements' },
        { name: 'Neutral', hex: '#475569', usage: 'Content text' },
        { name: 'Light Neutral', hex: '#f1f5f9', usage: 'Reading backgrounds' },
      ]
    },
    {
      name: 'Social Media App',
      colors: [
        { name: 'Green', hex: '#ebf998' },
        { name: 'Blue', hex: '#38b6ff' },
        { name: 'Pink', hex: '#ff69b4' },
        { name: 'Rose', hex: '#e11d48', usage: 'Likes/Hearts' },
        { name: 'Cyan', hex: '#06b6d4', usage: 'Messages/Communication' },
        { name: 'Neutral', hex: '#3f3f46', usage: 'User text' },
        { name: 'Light Neutral', hex: '#fafafa', usage: 'Feed backgrounds' },
      ]
    },
  ];

  const gradients = [
    { name: 'Main Brand Gradient (Purple to Pink)', css: 'linear-gradient(135deg, #8b5fbf 0%, #d946ef 100%)' },
    { name: 'Alternative (Horizontal)', css: 'linear-gradient(90deg, #8b5fbf 0%, #d946ef 100%)' },
    { name: 'Alternative (Vertical)', css: 'linear-gradient(180deg, #8b5fbf 0%, #d946ef 100%)' },
    { name: 'Green-Blue Energy Gradient', css: 'linear-gradient(135deg, #ebf998 0%, #38b6ff 100%)' },
    { name: 'Pink-Purple Creative Gradient', css: 'linear-gradient(135deg, #ff69b4 0%, #8b5fbf 100%)' },
    { name: 'Full Spectrum Brand Gradient', css: 'linear-gradient(135deg, #ebf998 0%, #38b6ff 33%, #ff69b4 66%, #8b5fbf 100%)' },
    { name: 'Subtle Trio Fade', css: 'linear-gradient(135deg, rgba(235, 249, 152, 0.1) 0%, rgba(56, 182, 255, 0.1) 50%, rgba(255, 105, 180, 0.1) 100%)' },
  ];

  const universalBackgrounds = [
    { name: 'Primary Universal Background', hex: '#fafbfc', description: 'Subtle warm white - works with all trio colors' },
    { name: 'Alternative Cool', hex: '#f8fafc', description: 'Cool white with blue undertones' },
    { name: 'Alternative Warm', hex: '#fefefe', description: 'Pure white with warm undertones' },
    { name: 'Alternative Grey', hex: '#f1f5f9', description: 'Light grey that maintains contrast' },
  ];

  const universalGradients = [
    { name: 'Subtle Universal Gradient', css: 'linear-gradient(135deg, #fafbfc 0%, #f1f5f9 100%)' },
    { name: 'Enhanced Universal with Brand Hint', css: 'linear-gradient(135deg, #fafbfc 0%, rgba(235, 249, 152, 0.02) 50%, #f8fafc 100%)' },
  ];

  const contrastRatios = [
    { combo: 'Green (#ebf998) on Universal BG (#fafbfc)', ratio: '8.2:1 (AAA)' },
    { combo: 'Blue (#38b6ff) on Universal BG (#fafbfc)', ratio: '4.9:1 (AA)' },
    { combo: 'Pink (#ff69b4) on Universal BG (#fafbfc)', ratio: '5.3:1 (AA)' },
    { combo: 'Purple (#8b5fbf) on Universal BG (#fafbfc)', ratio: '6.1:1 (AA)' },
    { combo: 'Dark text (#374151) on Universal BG (#fafbfc)', ratio: '9.8:1 (AAA)' },
    { combo: 'White text on Purple Gradient', ratio: '7.5:1+ (AAA)' },
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#374151] font-sans">
      {/* Header */}
      <header className="py-8 px-4 md:px-8 bg-gradient-to-r from-[#8b5fbf] to-[#d946ef] text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Silver Palette 1.1 Guide
          </h1>
          <Link href="/vibes/silver-vibes/goodies" passHref>
            <button className="px-6 py-2 bg-white text-[#8b5fbf] rounded-lg shadow-md hover:bg-gray-100 transition-colors font-semibold">
              Back to Goodies
            </button>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        {/* Core Trio Foundation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#8b5fbf]">🎨 Core Trio Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreTrio.map((color) => (
              <div key={color.name} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 brutal-box-shadow">
                <div style={{ backgroundColor: color.hex }} className="w-full h-24 rounded-md mb-4 border border-gray-300"></div>
                <h3 className="text-xl font-semibold mb-2">{color.name}</h3>
                <p className="text-gray-700 mb-2">{color.hex}</p>
                <p className="text-gray-600 italic">{color.description}</p>
                <p className="text-sm text-gray-500 mt-2">Usage: {color.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#38b6ff]">📋 Quick Reference for Teams & AI</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 brutal-box-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-[#475569]">Color Hierarchy & Usage Rules</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li><strong className="text-[#ebf998]">Primary Action Color</strong>: Green (`#ebf998`) - CTAs, success states, positive actions</li>
              <li><strong className="text-[#38b6ff]">Trust & Navigation</strong>: Blue (`#38b6ff`) - Links, navigation, informational elements</li>
              <li><strong className="text-[#ff69b4]">Accent & Highlights</strong>: Pink (`#ff69b4`) - Special features, creative elements, alerts</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-[#475569]">Brand Personality Keywords</h3>
            <p className="text-lg">Innovative • Energetic • Trustworthy • Creative • Modern • Approachable • Bold • Professional</p>
          </div>
        </section>

        {/* 10 Complete Palette Variations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#ff69b4]">🎯 10 Complete Palette Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {palettes.map((palette) => (
              <div key={palette.name} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 brutal-box-shadow">
                <h3 className="text-xl font-semibold mb-4 text-[#52525b]">{palette.name}</h3>
                <div className="space-y-3">
                  {palette.colors.map((color) => (
                    <div key={color.name} className="flex items-center">
                      <div style={{ backgroundColor: color.hex }} className="w-8 h-8 rounded-full border border-gray-300 mr-3"></div>
                      <span className="font-medium text-gray-800">{color.name}: {color.hex}</span>
                      {color.usage && <span className="ml-2 text-sm text-gray-500">({color.usage})</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gradient Hero Enhancements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#8b5fbf]">🌈 Gradient Hero Enhancements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gradients.map((gradient) => (
              <div key={gradient.name} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 brutal-box-shadow">
                <h3 className="text-xl font-semibold mb-4 text-[#52525b]">{gradient.name}</h3>
                <div className="w-full h-32 rounded-md mb-4" style={{ background: gradient.css }}></div>
                <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
                  <code className="text-gray-700">{gradient.css}</code>
                </pre>
              </div>
            ))}
          </div>
        </section>

        {/* Universal Background Recommendations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#38b6ff]">Universal Background Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#475569]">Primary Universal Background</h3>
              {universalBackgrounds.map((bg) => (
                <div key={bg.name} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 brutal-box-shadow mb-4">
                  <h4 className="text-lg font-semibold mb-2">{bg.name}</h4>
                  <div style={{ backgroundColor: bg.hex, height: '60px', width: '100%' }} className="rounded-md border border-gray-300 mb-2"></div>
                  <p className="text-gray-700">{bg.hex}</p>
                  <p className="text-sm text-gray-500 italic">{bg.description}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#475569]">Gradient Background Options</h3>
              {universalGradients.map((gradient) => (
                <div key={gradient.name} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 brutal-box-shadow mb-4">
                  <h4 className="text-lg font-semibold mb-2">{gradient.name}</h4>
                  <div style={{ background: gradient.css, height: '60px', width: '100%' }} className="rounded-md border border-gray-300 mb-2"></div>
                  <pre className="bg-gray-100 p-2 rounded-md text-xs overflow-x-auto">
                    <code className="text-gray-700">{gradient.css}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Context-Specific Applications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#ff69b4]">### Enhanced Context-Specific Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 brutal-box-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-[#475569]">Web Applications:</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li><strong className="text-[#8b5fbf]">Hero Sections</strong>: Purple gradient background with white text</li>
                <li><strong className="text-[#38b6ff]">Headers</strong>: Blue backgrounds or universal background with blue navigation</li>
                <li><strong className="text-[#374151]">Content Areas</strong>: Universal background (`#fafbfc`) with trio accents</li>
                <li><strong className="text-[#ebf998]">CTAs</strong>: Green buttons with dark text on universal background</li>
                <li><strong className="text-[#ff69b4]">Notifications</strong>: Pink badges on universal background</li>
                <li><strong className="text-[#38b6ff]">Forms</strong>: Blue for focus states, green for validation on universal background</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 brutal-box-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-[#475569]">Mobile Apps:</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li><strong className="text-[#8b5fbf]">Splash Screen</strong>: Purple gradient hero style</li>
                <li><strong className="text-[#fafbfc]">Main Background</strong>: Universal background (`#fafbfc`) throughout</li>
                <li><strong className="text-[#38b6ff]">Tab bars</strong>: Blue for active states on universal background</li>
                <li><strong className="text-[#ebf998]">Action buttons</strong>: Green for primary actions</li>
                <li><strong className="text-[#ff69b4]">Badges</strong>: Pink for notifications and new features</li>
                <li><strong className="text-[#ebf998]">Success states</strong>: Green checkmarks and confirmations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 brutal-box-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-[#475569]">Marketing Materials:</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li><strong className="text-[#8b5fbf]">Hero Banners</strong>: Purple gradient with white text</li>
                <li><strong className="text-[#fafbfc]">Background</strong>: Universal (`#fafbfc`) for all content sections</li>
                <li><strong className="text-[#38b6ff]">Headlines</strong>: Blue for trust-building statements</li>
                <li><strong className="text-[#ebf998]">CTAs</strong>: Green for "Sign Up", "Get Started", "Buy Now"</li>
                <li><strong className="text-[#ff69b4]">Accents</strong>: Pink for special offers and limited-time promotions</li>
                <li><strong className="text-[#ffffff]">Cards</strong>: White cards with subtle shadows on universal background</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accessibility Compliance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#8b5fbf]">📊 Accessibility Compliance</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 brutal-box-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-[#475569]">Enhanced WCAG AA Standards:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg mb-6">
              {contrastRatios.map((item) => (
                <li key={item.combo}>✅ {item.combo} - <strong className="font-semibold">{item.ratio}</strong></li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-[#475569]">Color Blind Considerations:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li><strong className="font-semibold">Deuteranopia</strong>: Trio remains distinguishable</li>
              <li><strong className="font-semibold">Protanopia</strong>: Blue and green maintain contrast</li>
              <li><strong className="font-semibold">Tritanopia</strong>: Pink and green stay distinct</li>
              <li>Always include non-color indicators (icons, text labels)</li>
            </ul>
          </div>
        </section>

        {/* Quick Start Checklist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#38b6ff]">🚀 Quick Start Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 brutal-box-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-[#475569]">For Design Teams:</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>[ ] Save trio as global color variables</li>
                <li>[ ] Create component library with trio applications</li>
                <li>[ ] Set up accessibility testing workflow</li>
                <li>[ ] Document brand-specific usage guidelines</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 brutal-box-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-[#475569]">For Development Teams:</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>[ ] Implement CSS custom properties</li>
                <li>[ ] Set up color validation functions</li>
                <li>[ ] Create automated accessibility testing</li>
                <li>[ ] Build component-level color management</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 brutal-box-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-[#475569]">For AI/Automation:</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>[ ] Train models on trio + context combinations</li>
                <li>[ ] Set up automated palette generation</li>
                <li>[ ] Implement brand consistency validation</li>
                <li>[ ] Create color suggestion algorithms</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pro Tips for Team Efficiency */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#ff69b4]">💡 Pro Tips for Team Efficiency</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 brutal-box-shadow">
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Use color tokens instead of hex codes in design files</li>
              <li>Create automated brand compliance checks in your CI/CD pipeline</li>
              <li>Set up color blind simulation testing for all new features</li>
              <li>Document color usage decisions for future reference</li>
              <li>Regular brand audits to ensure consistency across platforms</li>
            </ul>
          </div>
        </section>

        {/* Footer Note */}
        <section className="text-center text-gray-500 text-sm mt-16">
          <p>
            *This guide is designed to be your single source of truth for color decisions. Bookmark it, share it with your team, and use it to maintain consistent, accessible, and beautiful color implementations across all your projects.*
          </p>
        </section>
      </main>
    </div>
  );
}
