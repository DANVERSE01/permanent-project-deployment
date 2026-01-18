// Centralized data model for projects, case studies, blog posts, services, testimonials
// All content is placeholder and easily editable.

export const stats = [
  { label: "Cinematic Campaigns", value: "10+" },
  { label: "AI-Driven Workflows", value: "Yes" },
  { label: "Worldwide", value: "Egypt • Global" },
]

export const projects = [
  {
    slug: "imax-style-product-launch",
    title: "IMAX-Style Product Launch",
    type: "Cinematic Ad",
    client: "Brand X",
    year: 2024,
    tags: ["AI-Cinematic", "Client Work", "Spec Ad"],
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    logline: "Ultra-realistic macro lens journey through materials and light.",
  },
  {
    slug: "identity-locked-portrait-system",
    title: "Identity-Locked Portrait System",
    type: "Studio Piece",
    client: "DANVERSE Concept",
    year: 2024,
    tags: ["AI", "Studio"],
    thumbnail: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=1600&auto=format&fit=crop",
    logline: "Consistent, locked identity across portrait content at scale.",
  },
  {
    slug: "image-to-video-cinematic-transitions",
    title: "Image-to-Video Cinematic Transitions",
    type: "AI Experiment",
    client: "Self-Initiated",
    year: 2023,
    tags: ["AI", "Experiment"],
    thumbnail: "https://images.unsplash.com/photo-1534367604291-e15f5988401e?q=80&w=1600&auto=format&fit=crop",
    logline: "Fluid transitions that feel like real camera moves.",
  },
  {
    slug: "social-reels-performance-pack",
    title: "Social Reels Performance Pack",
    type: "Social Campaign",
    client: "Startup Y",
    year: 2024,
    tags: ["Performance", "Social"],
    thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
    logline: "High-impact short-form reels optimized for engagement.",
  },
  {
    slug: "concept-film-future-city",
    title: "Concept Film: Future City",
    type: "Concept Film",
    client: "DANVERSE Concept",
    year: 2023,
    tags: ["Concept", "Worldbuilding"],
    thumbnail: "https://images.unsplash.com/photo-1526328828355-99c2f1a06f2b?q=80&w=1600&auto=format&fit=crop",
    logline: "Moody, neon-glow cityscapes with cinematic lensing.",
  },
  {
    slug: "brand-visual-system-refresh",
    title: "Brand Visual System Refresh",
    type: "Brand System",
    client: "Agency Z",
    year: 2024,
    tags: ["Brand", "System"],
    thumbnail: "https://images.unsplash.com/photo-1529107386315-449e20868a9e?q=80&w=1600&auto=format&fit=crop",
    logline: "Unified visual language for cross-platform campaigns.",
  },
]

export const caseStudies = projects.map(p => ({
  ...p,
  hero: p.thumbnail,
  duration: p.type.includes("Ad") ? "00:30" : undefined,
  overview: "Short summary and goal for the project. Replace with final copy.",
  roleServices: ["Direction", "Concept", "Prompt Design", "Editing"],
  creativeApproach: "Cinematic lens choices, framing, mood, and AI pipelines (image-to-video, generative models).",
  gallery: [p.thumbnail, p.thumbnail, p.thumbnail],
  results: "Placeholder metrics and qualitative outcomes.",
  prompts: "Optional prompt notes and behind-the-scenes thinking.",
}))

export const services = [
  {
    id: "cinematic-ad-packages",
    title: "Cinematic Ad Packages",
    for: "Brands, agencies, creators",
    deliverables: ["10–30s reels", "Full-length cinematic social spots"],
  },
  {
    id: "ai-driven-visual-systems",
    title: "AI-Driven Visual Systems",
    for: "Brands and studios",
    deliverables: ["Identity-locked portraits", "Image-to-video transitions", "Concept frames"],
  },
  {
    id: "brand-content-systems",
    title: "Brand & Content Systems",
    for: "Campaign teams",
    deliverables: ["Content packs", "Storyboard + script", "Visual direction"],
  },
  {
    id: "education-consulting",
    title: "Education & Consulting",
    for: "Individuals and agencies",
    deliverables: ["1:1 prompt engineering", "Studio workflow design"],
  },
]

export const testimonials = [
  {
    quote: "Turned a rough idea into a cinematic reality that felt premium.",
    name: "Creative Lead, Brand X",
    role: "Client",
    result: "+250% engagement on Instagram Reels",
  },
  {
    quote: "The identity-locked system gave us consistent portraits across the campaign.",
    name: "CMO, Startup Y",
    role: "Client",
    result: "Huge uplift in brand perception",
  },
  {
    quote: "Beautiful visual language and precise prompt engineering.",
    name: "Agency Z",
    role: "Partner",
    result: "Fast iteration, stunning results",
  },
]

export const blogPosts = [
  {
    slug: "cinematic-theory-lenses-framing",
    title: "Cinematic Theory: Lenses & Framing",
    date: "2024-10-01",
    tags: ["Cinematic Tips", "Theory"],
    cover: "https://images.unsplash.com/photo-1462798447106-6e686ce7d6f0?q=80&w=1600&auto=format&fit=crop",
    excerpt: "How lens choice and framing change mood and storytelling.",
    content: "## Headline\nDetailed body content with headings, images, and prompt snippets.",
  },
  {
    slug: "ai-prompt-engineering-basics",
    title: "AI Prompt Engineering Basics",
    date: "2024-09-20",
    tags: ["AI Tools", "Prompt Engineering"],
    cover: "https://images.unsplash.com/photo-1518779576993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    excerpt: "A practical way to think about prompts for cinematic results.",
    content: "## Intro\nExamples and code-like prompt blocks.",
  },
]

export const clientLogos = [
  "https://dummyimage.com/200x80/0f172a/38bdf8.png&text=Brand+One",
  "https://dummyimage.com/200x80/0f172a/f0abfc.png&text=Brand+Two",
  "https://dummyimage.com/200x80/0f172a/22d3ee.png&text=Brand+Three",
  "https://dummyimage.com/200x80/0f172a/a78bfa.png&text=Brand+Four",
]
