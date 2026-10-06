/**
 * @typedef {{ src: string, alt: string }} ImageAsset
 * @typedef {{ title: string, duration: string, groupSize: string, highlights: string[], image: ImageAsset, popular?: boolean }} Program
 * @typedef {{ question: string, answer: string }} FAQ
 * @typedef {Object} CorporateAdventureContent
 * @property {Record<string, string>} labels
 * @property {{ title: string, description: string }} metadata
 * @property {{ eyebrow: string, title: string, accent: string, description: string, image: ImageAsset }} hero
 * @property {{ eyebrow: string, title: string, accent: string, description: string, valueProposition: string, typicalTitle: string, typicalOutcomes: string[], corporateTitle: string, corporateOutcomes: string[], closing: string }} positioning
 * @property {{ icon: string, title: string, description: string }[]} outcomes
 * @property {Program[]} programs
 * @property {{ title: string, image: ImageAsset }[]} activities
 * @property {{ title: string, places: string, description: string, image: ImageAsset }[]} regions
 * @property {{ title: string, description: string }[]} process
 * @property {string[]} promises
 * @property {{ name: string, role: string, company: string, quote: string, image: ImageAsset }[]} testimonials
 * @property {FAQ[]} faqs
 * @property {{ eyebrow: string, title: string, accent: string, description: string, highlights: string[], image: ImageAsset }} homePromotion
 * @property {{ eyebrow: string, title: string, accent: string, description: string }} cta
 */

const unsplash = "https://images.unsplash.com";
const imageOptions = "?auto=format&fit=crop&w=1600&q=85";

/** @type {CorporateAdventureContent} */
export const corporateAdventureContent = {
  labels: {
    heroPrimary: "Plan Your Team Retreat",
    heroSecondary: "View Programs",
    typicalEyebrow: "The usual approach",
    corporateEyebrow: "A more considered reset",
    outcomesEyebrow: "What Teams Take Away",
    outcomesTitle: "Shared challenges.",
    outcomesAccent: "Stronger ways of working.",
    programsEyebrow: "Programs for Every Team",
    programsTitle: "Choose your pace.",
    programsAccent: "We'll shape the details.",
    programDescription: "Start with a focused team challenge or make room for a deeper adventure and wellness retreat. Every program is tailored to your group.",
    popular: "Most Popular",
    requestQuote: "Request a Quote",
    activitiesEyebrow: "A Little Challenge, A Lot of Connection",
    activitiesTitle: "Find the right kind",
    activitiesAccent: "of adventure.",
    activitiesDescription: "Mix outdoor challenges with intentional time to restore, reflect and enjoy being together.",
    regionsEyebrow: "Adventure Regions",
    regionsTitle: "Sri Lanka,",
    regionsAccent: "made for moving together.",
    regionsDescription: "Choose a region that suits your team, travel time and appetite for adventure.",
    processEyebrow: "How It Works",
    processTitle: "From team goals",
    processAccent: "to a shared reset.",
    promiseEyebrow: "Our Promise",
    promiseTitle: "Good people.",
    promiseAccent: "Thoughtful planning.",
    testimonialsEyebrow: "Corporate Team Experiences",
    testimonialsTitle: "Good work,",
    testimonialsAccent: "felt by the whole team.",
    faqEyebrow: "A Few Helpful Details",
    faqTitle: "Questions,",
    faqAccent: "answered.",
    homeLink: "Explore Corporate Adventures",
    ctaPrimary: "Get a Proposal",
    ctaSecondary: "WhatsApp Us",
  },
  metadata: {
    title: "Corporate Adventure Retreats in Sri Lanka | Ceylon Wellness Care",
    description: "Team-building adventure holidays for corporates in Sri Lanka, combining outbound training, outdoor challenges and wellness recovery.",
  },
  hero: {
    eyebrow: "Corporate Team Retreats · Outbound Training · Offsites",
    title: "Adventure Retreats for Teams,",
    accent: "Built to Bring Them Closer.",
    description: "Adventure that builds teams. Wellness that brings them back whole. Bring your people together through purposeful outdoor challenges, then give them the space to recover, reconnect and return energised.",
    image: {
      src: `${unsplash}/photo-1521737711867-e3b97375f902${imageOptions}`, // TODO: replace with real images
      alt: "Colleagues working together during an outdoor team activity",
    },
  },
  positioning: {
    eyebrow: "Why Adventure + Wellness",
    title: "Challenge your team.",
    accent: "Care for the people in it.",
    description: "Most adventure outings focus on adrenaline alone. We pair structured outbound training and outdoor challenges by day with Ayurveda, nature and recovery by evening, so employees return energised, not exhausted.",
    valueProposition: "Adventure that builds teams. Wellness that brings them back whole.",
    typicalTitle: "Typical Team Outings",
    typicalOutcomes: ["Rushed schedules", "Long hours in the sun", "One-size-fits-all activities", "Teams return tired"],
    corporateTitle: "Our Corporate Adventures",
    corporateOutcomes: ["Time-managed itineraries", "Shaded and comfortable facilities", "Activities matched to fitness levels", "Recovery built in"],
    closing: "This isn't an outing. It's a team reset.",
  },
  outcomes: [
    { icon: "leadership", title: "Leadership", description: "Create space for initiative, ownership and confident leadership." },
    { icon: "communication", title: "Communication", description: "Practise clear communication when plans and perspectives shift." },
    { icon: "trust", title: "Trust & Collaboration", description: "Build stronger working relationships through shared challenges." },
    { icon: "decision", title: "Decision-Making Under Pressure", description: "Help teams assess, adapt and make decisions together." },
  ],
  programs: [
    {
      title: "Half-Day Team Challenge", duration: "3–5 hrs", groupSize: "10–150 pax",
      highlights: ["Team games", "Cable balancing", "Archery", "Facilitated debrief"],
      image: { src: `${unsplash}/photo-1529156069898-49953e39b3ac${imageOptions}`, // TODO: replace with real images
        alt: "A team sharing an outdoor group challenge" },
    },
    {
      title: "Day Adventure & OBT", duration: "Full day", groupSize: "15–200 pax",
      highlights: ["Facilitated outbound training", "Zip-line", "Rafting", "Lunch and reflection"],
      image: { src: `${unsplash}/photo-1530866495561-507c9faab2ed${imageOptions}`, // TODO: replace with real images
        alt: "White-water rafting through a green Sri Lankan river valley" },
    },
    {
      title: "Overnight Adventure Camp", duration: "1 night", groupSize: "15–100 pax",
      highlights: ["Daytime outbound training", "Bonfire dinner", "Tent camping", "Sunrise yoga"],
      image: { src: `${unsplash}/photo-1478131143081-80f7f84ca84d${imageOptions}`, // TODO: replace with real images
        alt: "Tents set up for an overnight outdoor camp" },
    },
    {
      title: "Adventure & Wellness Retreat", duration: "2–3 nights", groupSize: "10–60 pax",
      highlights: ["Hill-country hikes", "Waterfall abseiling and canyoning", "Ayurveda and meditation", "Boutique stays"],
      image: { src: `${unsplash}/photo-1500530855697-b586d89ba3ee${imageOptions}`, // TODO: replace with real images
        alt: "A green mountain landscape viewed from a walking trail" },
      popular: true,
    },
  ],
  activities: [
    { title: "Waterfall Abseiling", image: { src: "/waterfall.webp",
      alt: "Climber descending a rock face with safety equipment" } },
    { title: "Zip-Lining", image: { src: "/ziplining.webp",
      alt: "A forest canopy beneath a high adventure course" } },
    { title: "White-Water Rafting", image: { src: "/rafting.webp",
      alt: "Paddlers navigating white water on a river" } },
    { title: "Canyoning", image: { src: "/canyoning.webp",
      alt: "A rugged mountain valley surrounded by forest" } },
    { title: "Rock Climbing", image: { src: "/rockclimbing.webp",
      alt: "A climber ascending a natural rock wall" } },
    { title: "Jungle Trekking", image: { src: "/jungletrekking.webp",
      alt: "A trail winding through dense tropical forest" } },
    { title: "Paintball", image: { src: "/paintball.webp",
      alt: "A group taking part in an outdoor team activity" } },
    { title: "Archery", image: { src: "/archery.webp",
      alt: "An archer practising outdoors in a green setting" } },
    { title: "Night Camping & Bonfire", image: { src: "/nightcamp.webp",
      alt: "A campsite glowing beside a bonfire at night" } },
    { title: "Sunrise Yoga", image: { src: "/yoga.webp",
      alt: "A person practising yoga outdoors at sunrise" } },
    { title: "Ayurveda Recovery", image: { src: "/ayurvedarecovery.webp",
      alt: "A tranquil wellness treatment room surrounded by greenery" } },
    { title: "Mindfulness Sessions", image: { src: "/mindfullness.webp",
      alt: "A quiet green hillside for a guided mindfulness session" } },
  ],
  regions: [
    { title: "Hill Country", places: "Ella · Kandy", description: "Waterfalls, abseiling and hikes among Sri Lanka's green highlands.", image: { src: `${unsplash}/photo-1500530855697-b586d89ba3ee${imageOptions}`, // TODO: replace with real images
      alt: "Misty green hills in Sri Lanka's hill country" } },
    { title: "Kelani River Belt", places: "Near Colombo", description: "Rafting and outbound training, with easy day trips for Colombo teams.", image: { src: `${unsplash}/photo-1530866495561-507c9faab2ed${imageOptions}`, // TODO: replace with real images
      alt: "A raft travelling along a forest-lined river" } },
    { title: "Kitulgala", places: "Wet Zone · Sabaragamuwa", description: "White-water rafting and canyoning in a lush riverside setting.", image: { src: `${unsplash}/photo-1518837695005-2083093ee35b${imageOptions}`, // TODO: replace with real images
      alt: "Fast-moving river water between green riverbanks" } },
  ],
  process: [
    { title: "Share your team goals", description: "Tell us about your people, priorities and practical requirements." },
    { title: "We design the program", description: "We shape the activities, pace, location and recovery around your brief." },
    { title: "Expert-led experience", description: "Your team is guided by experienced facilitators and activity leaders." },
    { title: "Debrief & wellness recovery", description: "Close with reflection, then make room to restore and reconnect." },
  ],
  promises: [
    "Certified instructors and safety gear", "First aid and medical support on site",
    "Catering planned for your full headcount", "Clean facilities and changing areas",
    "Time-managed schedules", "Custom reports for HR/L&D",
  ],
  testimonials: [
    { name: "Amaya Perera", role: "Senior HR Manager", company: "Colombo technology firm", quote: "Our team came away talking about how well the challenge and downtime were balanced. The thoughtful pacing made it easy for everyone to take part.", image: { src: `${unsplash}/photo-1580489944761-15a19d654956${imageOptions}`, // TODO: replace with real images
      alt: "Portrait of Amaya Perera" } },
    { name: "Dilan Fernando", role: "People & Culture Lead", company: "Colombo finance company", quote: "The guided debrief gave our group practical takeaways, and the recovery time meant people finished the retreat feeling refreshed rather than depleted.", image: { src: `${unsplash}/photo-1500648767791-00dcc994a43e${imageOptions}`, // TODO: replace with real images
      alt: "Portrait of Dilan Fernando" } },
    { name: "Nadeesha Silva", role: "Learning & Development Director", company: "Sri Lankan professional services group", quote: "The program felt personal to our goals without losing the fun. Every detail, from the activities to the meals, was carefully coordinated.", image: { src: `${unsplash}/photo-1534528741775-53994a69daeb${imageOptions}`, // TODO: replace with real images
      alt: "Portrait of Nadeesha Silva" } },
  ],
  faqs: [
    { question: "What group sizes can you accommodate?", answer: "Programs range from intimate groups of 10 to larger teams of up to 200, depending on the activities, location and schedule. We confirm capacity and group rotations in your proposal." },
    { question: "Do participants need a particular fitness level?", answer: "No specific fitness level is needed for most programs. We learn about your group in advance and match activities to different comfort levels, with alternatives and appropriate rest built into the plan." },
    { question: "How do you manage safety during activities?", answer: "Activities are led by qualified instructors with appropriate safety equipment, clear briefings and first-aid support on site. We share activity-specific safety arrangements as part of planning." },
    { question: "Can the retreat be customized to our team goals?", answer: "Yes. We tailor the location, duration, activity mix, facilitation, meals and wellness sessions to your objectives, headcount, access needs and budget." },
    { question: "What happens if it rains?", answer: "We plan around seasonal conditions and agree on suitable covered, adjusted or rescheduled options in advance. The right backup depends on your chosen location and activities." },
  ],
  homePromotion: {
    eyebrow: "For Companies & Teams",
    title: "Adventure that builds teams.",
    accent: "Wellness that brings them back whole.",
    description: "Bring your people together for purposeful challenges, expert-led reflection and the kind of recovery that helps a good team experience last beyond the day.",
    highlights: ["Outbound Training", "Adventure Activities", "Wellness Recovery"],
    image: { src: `${unsplash}/photo-1521737711867-e3b97375f902${imageOptions}`, // TODO: replace with real images
      alt: "Colleagues connecting during a collaborative outdoor team retreat" },
  },
  cta: {
    eyebrow: "Corporate Adventures",
    title: "Let's design your team's",
    accent: "next adventure.",
    description: "Share what your team needs from time together. We'll shape an adventure and recovery experience around it.",
  },
};