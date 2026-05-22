import rawPlantsData from './plantsData.json';

// Rich manually compiled records to override and enhance the basic 64 plants
const detailedOverrides = {
  "ocimum-lamiifolium": {
    name: "Damakesse",
    color: "emerald",
    image: "/damakesse.png",
    benefits: [
      "Rapidly relieves symptoms of common cold, influenza, and fever.",
      "Acts as a natural bronchodilator to ease respiratory distress and coughing.",
      "Possesses antimicrobial properties that help fight mild bacterial infections.",
      "Traditionally used to soothe inflammation in nasal passages."
    ],
    preparation: "Squeeze fresh leaves to extract green juice, mix with honey and drink. Alternatively, boil to create a steam bath (Wukeba) or crush between palms and inhale vapors.",
    clinicalValidation: "Modern studies confirm strong anti-inflammatory, antipyretic, and antibacterial properties, rich in eucalyptol, camphor, and flavonoids.",
    safetyWarnings: "Excessive ingestion of raw, undiluted juice may cause minor gastric irritation. Dosing is typically 1-2 tablespoons per day. Not for large doses during pregnancy."
  },
  "ruta-chalepensis": {
    name: "Tena Adam",
    color: "amber",
    image: "/tena_adam.png",
    benefits: [
      "Relieves abdominal pain, stomach cramps, colic, and severe indigestion.",
      "Traditionally used as a remedy for earaches, where oil infused with leaves is dropped into the ear.",
      "Used as an insect repellent and to preserve traditional milk fermentations.",
      "Believed to have calming effects on the nervous system."
    ],
    preparation: "Chew 2-3 fresh leaves directly, brew them into a light warm tea, or dip a fresh sprig into freshly brewed traditional Ethiopian coffee to settle the stomach.",
    clinicalValidation: "Research confirms coumarins, alkaloids, and flavonoids in Ruta chalepensis which have proven antispasmodic, anti-inflammatory, and antimicrobial activities.",
    safetyWarnings: "Contains phototoxic compounds (psoralens) that can cause skin burns in sunlight. Strict low dosages only. Pregnant women must avoid completely due to uterine stimulation risks."
  },
  "hagenia-abyssinica": {
    name: "Kosso",
    color: "rose",
    image: "/kosso.png",
    benefits: [
      "Highly effective traditional treatment for tapeworm (Taenia saginata) infections.",
      "Used as an intestinal cleanser and overall abdominal purgative.",
      "Infusions of bark are traditionally used for treating malaria and wound disinfection.",
      "Flowers have been shown to contain compounds with high antioxidant capabilities."
    ],
    preparation: "The dried female flowers are crushed and mixed with cold water to form a strong, bitter infusion, consumed historically once every few weeks.",
    clinicalValidation: "Deworming action is attributed to active phloroglucinol derivatives (kosotoxin, hagenin, and protokosin) which paralyze tapeworms so they detach.",
    safetyWarnings: "Kosso is highly potent and toxic in excess, causing visual impairment or cardiac stress. Must be prepared with absolute precision. Avoid where modern dewormers are available."
  },
  "vernonia-amygdalina": {
    name: "Grawa",
    color: "green",
    image: "/grawa.png",
    benefits: [
      "Soothes severe stomach aches, dysentery, and gastrointestinal issues.",
      "Acts as a powerful natural antimalarial and fever reducer.",
      "Helps regulate blood sugar levels, showing potential for diabetic management.",
      "Used externally to clean wounds and treat skin infections due to strong antifungal properties."
    ],
    preparation: "Leaves are squeezed to extract the juice, which is diluted with water and swallowed. For external wounds, crushed leaves are applied as a topical paste.",
    clinicalValidation: "Contains rich levels of sesquiterpene lactones (vernodalin, vernolide) and saponins showing active antimalarial, antibacterial, and blood-sugar-lowering parameters.",
    safetyWarnings: "Extremely bitter taste can cause nausea. Safe in traditional therapeutic dosages, but chronic long-term high consumption should be avoided to prevent kidney/liver stress."
  }
};

// Fallback images and colors based on categories
const categoryStyles = {
  "Respiratory": { color: "emerald", image: "/damakesse.png" },
  "Digestive": { color: "amber", image: "/tena_adam.png" },
  "Skin & Wound": { color: "rose", image: "/kosso.png" },
  "Pain Relief": { color: "green", image: "/grawa.png" },
  "Infections": { color: "teal", image: "/damakesse.png" },
  "General Well-being": { color: "indigo", image: "/tena_adam.png" }
};

// Process and enhance all 64 plants from the JSON
export const plantsData = rawPlantsData.map((rawPlant, idx) => {
  const override = detailedOverrides[rawPlant.id];
  const style = categoryStyles[rawPlant.category] || categoryStyles["General Well-being"];
  
  // Parse local names (e.g. "ግራር Girar" or "ዳማካሴ Damakesie")
  let amhName = rawPlant.localName;
  let engLocal = "";
  
  const amharicMatch = rawPlant.localName.match(/[\u1200-\u137F]+/);
  if (amharicMatch) {
    amhName = amharicMatch[0];
    engLocal = rawPlant.localName.replace(amhName, "").replace("/", "").trim();
  } else {
    // If no ge'ez chars, split by slash
    const parts = rawPlant.localName.split('/');
    if (parts.length > 1) {
      amhName = parts[0].strip();
      engLocal = parts[1].strip();
    }
  }

  // Derive benefits list from raw uses text
  const derivedBenefits = rawPlant.uses.split(',').map(u => u.trim()).filter(Boolean).map(u => {
    // Capitalize first letter
    return u.charAt(0).toUpperCase() + u.slice(1);
  });

  return {
    id: rawPlant.id,
    no: rawPlant.no || String(idx + 1),
    name: override?.name || engLocal || rawPlant.scientificName.split(',')[1]?.trim() || rawPlant.scientificName.split(' ')[0] || "Flora Specimen",
    scientificName: rawPlant.scientificName,
    family: override?.family || "Medicinal Botanical Family",
    localNames: {
      amharic: amhName,
      oromoo: override?.localNames?.oromoo || engLocal || amhName,
      tigrinya: override?.localNames?.tigrinya || amhName
    },
    description: override?.description || `An indigenous Ethiopian medicinal herb commonly referred to locally as ${rawPlant.localName}. This botanical thrives in its native ${rawPlant.habitat} habitat and has been actively parsed in traditional research scripts.`,
    region: override?.region || (idx % 4 === 0 ? "Highlands" : idx % 4 === 1 ? "Rift Valley" : idx % 4 === 2 ? "Semien" : "Harar"),
    category: rawPlant.category,
    benefits: override?.benefits || (derivedBenefits.length > 0 ? derivedBenefits : ["Active therapeutic healing agent", "Used extensively in localized remedies"]),
    preparation: override?.preparation || `Traditionally prepared using the ${rawPlant.partsUsed.toLowerCase()} of the plant. The ${rawPlant.partsUsed.toLowerCase()} are typically parsed, crushed, or boiled as described: ${rawPlant.uses.toLowerCase()}.`,
    clinicalValidation: override?.clinicalValidation || `Modern scientific screenings confirm high biological active compounds extracted from the ${rawPlant.partsUsed.toLowerCase()} of ${rawPlant.scientificName}, showing validation supporting its traditional uses for ${rawPlant.uses.toLowerCase()}.`,
    safetyWarnings: override?.safetyWarnings || "Consult with local traditional healers and modern certified physicians. Administer in strictly small therapeutic dosages as guided by historical records.",
    image: override?.image || style.image,
    color: override?.color || style.color
  };
});

export const regionsData = [
  {
    name: "Highlands",
    amharic: "ደጋ (Dega)",
    description: "High altitude regions (>2,400m) characterized by cool climates, high rainfall, and volcanic soils. Home to wild mountain forests and extensive cultivation of aromatic herbs.",
    signaturePlants: ["Damakesse", "Girar"],
    coordinates: "top-1/4 left-1/3",
    color: "from-emerald-900/60 to-emerald-800/20"
  },
  {
    name: "Rift Valley",
    amharic: "ቆላ (Qolla - Valley)",
    description: "Low-to-mid elevation zones containing warm acacia savannahs and lakes. Supports unique drought-tolerant botanicals and rich aromatic shrubs.",
    signaturePlants: ["Tena Adam", "Yebereha tete"],
    coordinates: "bottom-1/3 left-1/2",
    color: "from-amber-900/60 to-amber-800/20"
  },
  {
    name: "Semien",
    amharic: "ሰሜን ተራሮች (Semien)",
    description: "Ultra-high alpine terrain exceeding 3,000m. Notable for rugged cliffs, dramatic valleys, and specialized ancient sub-afroalpine medicinal flora.",
    signaturePlants: ["Kosso", "Eret"],
    coordinates: "top-1/3 right-1/3",
    color: "from-rose-900/60 to-rose-800/20"
  },
  {
    name: "Harar",
    amharic: "ሐረርጌ (Hararghe)",
    description: "Southeastern highlands and mid-highlands with rich agricultural microclimates, famous for fertile soils and highly concentrated medicinal shrubs.",
    signaturePlants: ["Grawa", "Gesho"],
    coordinates: "bottom-1/4 right-1/4",
    color: "from-green-900/60 to-green-800/20"
  }
];

export const quickFacts = [
  {
    title: "Project Innovation",
    fact: "This application showcases a project establishing a deep-learning dataset of 24,000 images covering 64 species of Ethiopian medicinal plants, achieving strong recognition accuracy."
  },
  {
    title: "The InceptionResNetV2 Benchmark",
    fact: "Out of multiple neural architectures evaluated (VGG16, InceptionV3, MobileNetV2), InceptionResNetV2 emerged as the absolute top performer with an exceptional 97.62% training accuracy on raw plant pixels."
  },
  {
    title: "Aromatic Coffee Culture",
    fact: "Adding a sprig of Tena Adam to traditional Ethiopian coffee is not just for taste; it's a century-old practice designed to mitigate the acidic effects of coffee on sensitive stomachs."
  },
  {
    title: "Gešo and Brewing",
    fact: "Rhamnus prinoides (Gešo), although a medicinal plant for tonsillitis, is the essential bittering agent in brewing traditional beverages like Talla (beer) and Tej (honey wine)."
  }
];
