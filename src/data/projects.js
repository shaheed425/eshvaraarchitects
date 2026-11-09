export const projects = [
  {
    id: "residence-01-architecture",
    slug: "residence-01-architecture",
    number: "01",
    title: "Residence 01 — Contemporary Architecture",
    category: "Architecture",
    status: "Completed Architecture",
    isProposed: false,
    location: "Pathanamthitta, Kerala",
    siteArea: "3,800 sq.ft",
    heroImage: "/hero-contemporary-residence.webp",
    summary: "A contemporary Kerala residence structured around natural stone textures, warm timber louvers, and cantilevered glass balconies.",
    description: "Residence 01 explores tactile regional materiality and passive microclimatic cooling. The exterior composition pairs flamed grey stone compound walls with warm timber screens, glass balustrades, and a pitched roof pavilion volume nestled into tropical greenery.",
    details: [
      "Natural dressed stone base anchoring the lower volume into the landscape",
      "Warm exposed timber ceilings and extended eaves for monsoon rain protection",
      "Perforated vertical louvers allowing continuous air movement while filtering harsh afternoon sun",
      "Cantilevered upper floor glass balcony overlooking manicured gardens",
      "Integrated ground uplighting embedded along stone boundary walls"
    ],
    materials: [
      { name: "Dressed Laterite & Granite", detail: "Hand-chiseled regional stone with natural thermal mass" },
      { name: "Teakwood Joinery", detail: "Sustainably harvested timber for rafters, doors and louvers" },
      { name: "Structural Glazing", detail: "Thermal-break glass balustrades and expansive windows" }
    ],
    gallery: [
      {
        url: "/hero-contemporary-residence.webp",
        caption: "Front elevation featuring terracotta tiled roof, cantilevered balcony and warm landscape lighting."
      },
      {
        url: "/residence-living-room.webp",
        caption: "Living room interior with bespoke timber fins and floating credenza."
      },
      {
        url: "/residence-lounge.webp",
        caption: "Lounge with slatted accent wall and traditional carved teak cabinet."
      },
      {
        url: "/residence-kitchen-dining.webp",
        caption: "Kitchen and dining suite with dark stone counters and warm joinery."
      }
    ]
  },
  {
    id: "residence-01-living-room",
    slug: "residence-01-living-room",
    number: "02",
    title: "Living Room — Residence 01",
    category: "Interiors",
    status: "Completed Interior",
    isProposed: false,
    location: "Pathanamthitta, Kerala",
    siteArea: "Living Suite",
    heroImage: "/residence-living-room.webp",
    summary: "Timber fins, a stone-clad stair beyond and warm indirect ambient light.",
    description: "Designed for quiet elegance and spatial fluidity. Vertical teak timber fins form an acoustic and visual divider beside the media console, while a stone-clad staircase rises beyond. Concealed warm LED coves bathe the polished concrete floor in soft ambient luminescence.",
    details: [
      "Custom vertical timber fin partition with warm integrated LED backlighting",
      "Low-profile floating media console finished in matte charcoal and stone",
      "Artisanal niche shelving displaying curated ceramic artifacts",
      "Polished micro-concrete flooring with warm natural patina"
    ],
    materials: [
      { name: "Solid Teak Slats", detail: "Precision-milled vertical fins with natural wax finish" },
      { name: "Flamed Stone Cladding", detail: "Textured wall cladding anchoring the staircase spine" },
      { name: "Acoustic Lighting", detail: "Warm 3000K indirect cove luminaires" }
    ],
    gallery: [
      {
        url: "/residence-living-room.webp",
        caption: "Living room with timber fins, stone stair beyond and warm indirect light."
      }
    ]
  },
  {
    id: "residence-01-lounge",
    slug: "residence-01-lounge",
    number: "03",
    title: "Lounge — Residence 01",
    category: "Interiors",
    status: "Completed Interior",
    isProposed: false,
    location: "Pathanamthitta, Kerala",
    siteArea: "Formal Lounge",
    heroImage: "/residence-lounge.webp",
    summary: "Slatted panel, carved timber cabinet and a calm, low-tone palette.",
    description: "An intimate gathering space that balances heritage memory with contemporary minimalism. An intricately carved traditional teak cabinet provides a sculptural focal point, complemented by a floor-to-ceiling slatted timber accent panel and linen sectional upholstery.",
    details: [
      "Heritage-inspired carved teak wood cabinet handcrafted in Eshvara carpentry studio",
      "Floor-to-ceiling slatted wood wall feature with concealed illumination",
      "Deep-cushioned linen sectional sofa with earth-tone accent pillows",
      "Custom cast bronze circular coffee table and minimal reading lamp"
    ],
    materials: [
      { name: "Hand-Carved Teak", detail: "Artisanal joinery crafted in-house by master carpenters" },
      { name: "Linen & Wool", detail: "Breathable natural fiber upholstery" }
    ],
    gallery: [
      {
        url: "/residence-lounge.webp",
        caption: "Lounge featuring slatted panel, carved timber cabinet and low palette."
      }
    ]
  },
  {
    id: "residence-01-kitchen-dining",
    slug: "residence-01-kitchen-dining",
    number: "04",
    title: "Kitchen & Dining — Residence 01",
    category: "Interiors",
    status: "Completed Interior",
    isProposed: false,
    location: "Pathanamthitta, Kerala",
    siteArea: "Culinary & Dining Suite",
    heroImage: "/residence-kitchen-dining.webp",
    summary: "Timber joinery, dark stone counters and an artisanal jali window.",
    description: "A functional culinary atelier centered on tactile warmth and ergonomic precision. Rich natural wood veneer cabinetry is capped with flamed dark granite countertops, illuminated by continuous under-cabinet warm task lights, with a low horizontal jali window opening to lush exterior greens.",
    details: [
      "Handleless timber veneer cabinetry with soft-close Blum hardware",
      "Seamless dark granite kitchen island and perimeter worktops",
      "Horizontal garden-view splashback window framing private courtyard greens",
      "Integrated appliances, concealed extraction hood, and open display shelving"
    ],
    materials: [
      { name: "Engineered Timber Veneer", detail: "Moisture-resistant architectural wood surfacing" },
      { name: "Flamed Black Granite", detail: "Scratch and heat resistant tactile stone worktops" }
    ],
    gallery: [
      {
        url: "/residence-kitchen-dining.webp",
        caption: "Kitchen and dining suite with timber joinery, dark stone counters and jali window."
      }
    ]
  },
  {
    id: "selected-renovation",
    slug: "selected-renovation",
    number: "05",
    title: "Selected Renovation — Before & After",
    category: "Renovation",
    status: "Completed Transformation",
    isProposed: false,
    hasBeforeAfter: true,
    location: "Pathanamthitta, Kerala",
    siteArea: "Multi-Storey Residential Transformation",
    heroImage: "/renovation-after.webp",
    summary: "A transformation project applying 'Care Before Design' — renewing what needs to change while retaining what works.",
    description: "A striking architectural transformation demonstrating Eshvara's philosophy: 'Care Before Design'. The existing structurally sound elements and primary structural grid are retained, while modern volumetric forms, dark marble portals, vertical louvers, glass balustrades, and warm illumination transform the residence into an editorial contemporary sanctuary.",
    beforeAfter: {
      existing: {
        title: "Existing House (Before)",
        desc: "The original multi-tier Kerala residence with temporary metal truss canopy, aged masonry facade, and exposed scaffolding.",
        image: "/renovation-before.webp",
        notes: "Structural retrofit retaining the solid framework while stripping tired external accretions."
      },
      proposed: {
        title: "Transformed Architecture (After)",
        desc: "Contemporary luxury residence featuring sculptural charcoal marble portal, vertical timber louvers, open glass balcony, integrated warm lighting, and car porch.",
        image: "/renovation-after.webp",
        notes: "Care Before Design philosophy: surgical transformation delivering modern tropical luxury while retaining sound existing foundations."
      },
      combined: {
        title: "Before & After Transformation",
        desc: "Direct visual comparison demonstrating how thoughtful architectural intervention turns an aged structure into an editorial masterpiece.",
        image: "/renovation-before-after-combined.webp",
        notes: "Official Eshvara Design Architects transformation showcase."
      }
    },
    details: [
      "Retained structural concrete frame, deep porch, and covered parking to optimize budget and reduce demolition waste",
      "Introduced contemporary white and charcoal interlocking volumetric massing",
      "Clad porch ceiling in warm hand-finished exterior timber battens",
      "Installed upper-level perforated sun screen for solar shading and visual privacy",
      "Added natural stone accent cladding at the entrance plinth"
    ],
    materials: [
      { name: "Engineered Exterior Timber", detail: "Weather-sealed wood lining for porch ceiling" },
      { name: "Perforated Aluminum Screen", detail: "Laser-cut sun-shading panel with powder-coated charcoal finish" },
      { name: "Granite Plinth Cladding", detail: "Flamed natural granite accentuating entrance threshold" }
    ],
    gallery: [
      {
        url: "/renovation-after.webp",
        caption: "Completed contemporary transformation with integrated warm illumination and vertical louvers."
      },
      {
        url: "/renovation-before.webp",
        caption: "Original house prior to surgical architectural renovation."
      },
      {
        url: "/renovation-before-after-combined.webp",
        caption: "Official Eshvara Design Architects Before & After transformation showcase."
      }
    ]
  },
  {
    id: "parachantha-villa-development",
    slug: "parachantha-villa-development",
    number: "06",
    title: "Parachantha Villa Development",
    category: "Architecture",
    status: "PROPOSED MASTERPLAN",
    isProposed: true,
    location: "Pathanamthitta, Kerala",
    siteArea: "Approx. 1.5 Acres",
    disclaimer: "The master plan is indicative. Final drawings are subject to survey and local authority approval.",
    heroImage: "/projects/parachantha-villa-enclave.webp",
    summary: "Proposed gated villa community structured along a central arterial avenue across 1.5 acres in Pathanamthitta.",
    description: "A thoughtful master-planned residential enclave envisioned for contemporary living in harmony with Kerala's topography. The project encompasses three organized residential zones along a central internal road, integrating community amenities with private villa enclaves.",
    details: [
      "Master plan layout spanning 1.5 acres with optimized road hierarchy",
      "Statutory municipal permit drawings and zonal demarcations",
      "Architectural conceptual villa views blending contemporary volumes with regional climate response",
      "Gated entrance plaza with integrated security cabin and access control"
    ],
    materials: [
      { name: "Interlocking Paved Roads", detail: "Heavy-duty permeable paving for internal spine" },
      { name: "Boundary Masonry & Greenery", detail: "Perimeter solid block masonry with living hedges" }
    ],
    gallery: [
      {
        url: "/projects/parachantha-villa-enclave.webp",
        caption: "Master planned villa enclave perspective along central spine avenue."
      }
    ]
  }
];

export const projectCategories = [
  "All Projects",
  "Architecture",
  "Interiors",
  "Renovation"
];
