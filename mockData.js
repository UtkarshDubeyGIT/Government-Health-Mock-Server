// Mock Health Data Generator
const mockHealthData = {
  concerns: [
    {
      id: "concern_001",
      title: "Rising Cases of Respiratory Infections",
      description:
        "Health officials report a 15% increase in respiratory infections across urban areas.",
      severity: "medium",
      affectedAreas: ["New York", "Los Angeles", "Chicago"],
      recommendations: [
        "Wear masks in crowded areas",
        "Maintain good ventilation indoors",
        "Practice regular hand hygiene",
      ],
    },
    {
      id: "concern_002",
      title: "Water Quality Alert in Northern Regions",
      description:
        "Potential contamination detected in water supply systems affecting 50,000 residents.",
      severity: "high",
      affectedAreas: ["Northern Counties", "Rural Districts"],
      recommendations: [
        "Boil water before consumption",
        "Use bottled water for drinking",
        "Avoid using tap water for cooking",
      ],
    },
    {
      id: "concern_003",
      title: "Seasonal Allergy Spike",
      description:
        "Pollen levels reaching record highs, affecting individuals with allergies.",
      severity: "low",
      affectedAreas: ["Nationwide"],
      recommendations: [
        "Take antihistamines as prescribed",
        "Keep windows closed during high pollen days",
        "Shower after outdoor activities",
      ],
    },
    {
      id: "concern_004",
      title: "Heat Wave Health Warning",
      description:
        "Extreme temperatures expected to continue, posing risks to vulnerable populations.",
      severity: "high",
      affectedAreas: ["Southwest States", "Desert Regions"],
      recommendations: [
        "Stay hydrated with plenty of water",
        "Avoid outdoor activities during peak hours",
        "Check on elderly neighbors and relatives",
      ],
    },
    {
      id: "concern_005",
      title: "Air Quality Index Reaches Unhealthy Levels",
      description:
        "Wildfire smoke and industrial emissions push air quality to dangerous levels in multiple metropolitan areas.",
      severity: "high",
      affectedAreas: ["California", "Oregon", "Washington", "Colorado"],
      recommendations: [
        "Limit outdoor activities, especially for sensitive groups",
        "Use air purifiers indoors",
        "Wear N95 masks when going outside",
        "Keep windows and doors closed",
        "Seek medical attention if experiencing breathing difficulties",
      ],
    },
    {
      id: "concern_006",
      title: "Increase in Tick-Borne Illnesses",
      description:
        "Lyme disease and Rocky Mountain spotted fever cases up 25% compared to last year due to mild winter conditions.",
      severity: "medium",
      affectedAreas: ["Northeast", "Upper Midwest", "Mid-Atlantic"],
      recommendations: [
        "Use insect repellent containing 20-30% DEET",
        "Wear long pants and long-sleeved shirts in wooded areas",
        "Perform daily tick checks after outdoor activities",
        "Shower within 2 hours of coming indoors",
        "Consult healthcare provider if rash or flu-like symptoms develop",
      ],
    },
    {
      id: "concern_007",
      title: "Food Safety Alert: Contaminated Leafy Greens",
      description:
        "E. coli outbreak linked to bagged lettuce products from multiple suppliers affects 12 states.",
      severity: "high",
      affectedAreas: [
        "California",
        "Arizona",
        "Texas",
        "Florida",
        "New York",
        "Illinois",
        "Ohio",
        "Pennsylvania",
        "Georgia",
        "North Carolina",
        "Michigan",
        "Virginia",
      ],
      recommendations: [
        "Discard any bagged lettuce with recalled lot numbers",
        "Wash hands thoroughly after handling leafy greens",
        "Rinse all produce under running water before consumption",
        "Cook leafy greens to 160°F to kill bacteria",
        "Seek medical attention if experiencing severe abdominal cramps or bloody diarrhea",
      ],
    },
    {
      id: "concern_008",
      title: "Mental Health Crisis Among Teenagers",
      description:
        "Adolescent depression and anxiety rates reach record highs, with 40% increase in emergency department visits for mental health crises.",
      severity: "high",
      affectedAreas: ["Nationwide"],
      recommendations: [
        "Monitor teenagers for signs of depression or anxiety",
        "Encourage open communication about mental health",
        "Limit social media usage to 2 hours per day",
        "Promote physical activity and outdoor time",
        "Seek professional help if concerning behaviors persist",
      ],
    },
    {
      id: "concern_009",
      title: "Opioid Overdose Deaths Surge in Rural Areas",
      description:
        "Rural communities see 18% increase in opioid-related fatalities as fentanyl supply chains expand into smaller towns.",
      severity: "critical",
      affectedAreas: [
        "Rural Communities",
        "Appalachia",
        "Midwest Rural",
        "Mountain West",
      ],
      recommendations: [
        "Carry naloxone (Narcan) and learn how to use it",
        "Never use drugs alone; use with someone who can call for help",
        "Test drugs for fentanyl using test strips",
        "Seek addiction treatment resources in your community",
        "Call 911 immediately for suspected overdoses",
      ],
    },
    {
      id: "concern_010",
      title: "Antibiotic-Resistant Infections Spreading",
      description:
        "Carbapenem-resistant Enterobacterales (CRE) infections increase by 30% in healthcare facilities nationwide.",
      severity: "high",
      affectedAreas: [
        "Healthcare Facilities",
        "Long-term Care",
        "Urban Hospitals",
      ],
      recommendations: [
        "Practice strict hand hygiene in healthcare settings",
        "Only take antibiotics as prescribed by healthcare providers",
        "Complete full course of antibiotics even if feeling better",
        "Don't share or save leftover antibiotics",
        "Report any unusual symptoms to healthcare providers immediately",
      ],
    },
    {
      id: "concern_011",
      title: "Vitamin D Deficiency Reaching Epidemic Levels",
      description:
        "National survey reveals 70% of adults have insufficient vitamin D levels, particularly affecting indoor workers and northern populations.",
      severity: "medium",
      affectedAreas: ["Northern States", "Urban Areas", "Office Workers"],
      recommendations: [
        "Spend 10-30 minutes in midday sunlight several times per week",
        "Consider vitamin D3 supplements (consult healthcare provider)",
        "Consume vitamin D-rich foods like fatty fish and fortified dairy",
        "Get vitamin D levels tested annually",
        "Use light therapy lamps during winter months in northern climates",
      ],
    },
    {
      id: "concern_012",
      title: "Extreme Cold Weather Health Risks",
      description:
        "Polar vortex brings life-threatening temperatures below -20°F to northern states, increasing risks of frostbite and hypothermia.",
      severity: "critical",
      affectedAreas: [
        "Minnesota",
        "Wisconsin",
        "North Dakota",
        "Montana",
        "Northern Maine",
      ],
      recommendations: [
        "Limit time outdoors to essential activities only",
        "Dress in layers with moisture-wicking base layers",
        "Cover all exposed skin when going outside",
        "Keep emergency supplies in vehicles",
        "Check on elderly neighbors and relatives frequently",
      ],
    },
  ],

  news: [
    {
      id: "news_001",
      headline: "New Vaccine Program Launched for Vulnerable Populations",
      summary:
        "Government announces expanded vaccination initiative targeting seniors and immunocompromised individuals.",
      source: "Department of Health",
      publishedAt: new Date().toISOString(),
      category: "vaccination",
      details:
        "The program will provide free vaccinations at over 500 locations nationwide.",
    },
    {
      id: "news_002",
      headline: "Mental Health Support Services Expanded",
      summary:
        "Additional funding allocated for community mental health programs and crisis intervention.",
      source: "Health & Human Services",
      publishedAt: new Date().toISOString(),
      category: "mental-health",
      details:
        "24/7 crisis hotlines now available in all 50 states with multilingual support.",
    },
    {
      id: "news_003",
      headline: "Food Safety Guidelines Updated",
      summary:
        "New recommendations issued for food handling and preparation to prevent foodborne illnesses.",
      source: "FDA",
      publishedAt: new Date().toISOString(),
      category: "food-safety",
      details:
        "Updated guidelines include enhanced protocols for restaurants and food processing facilities.",
    },
    {
      id: "news_004",
      headline: "Telehealth Services See Record Usage",
      summary:
        "Remote healthcare consultations increase by 200% following improved digital infrastructure.",
      source: "Healthcare Innovation Division",
      publishedAt: new Date().toISOString(),
      category: "telehealth",
      details:
        "New platforms support video consultations with specialists across rural and urban areas.",
    },
    {
      id: "news_005",
      headline: "CDC Announces New Cancer Screening Guidelines",
      summary:
        "Updated recommendations lower screening age for colorectal cancer to 45 and expand mammography access.",
      source: "Centers for Disease Control",
      publishedAt: new Date().toISOString(),
      category: "prevention",
      details:
        "New guidelines expected to detect cancer earlier and save thousands of lives annually. Medicare and most insurance plans will cover the expanded screening protocols.",
    },
    {
      id: "news_006",
      headline: "Historic Investment in Rural Healthcare Infrastructure",
      summary:
        "$50 billion federal program aims to modernize rural hospitals and expand specialist access in underserved areas.",
      source: "Department of Health & Human Services",
      publishedAt: new Date().toISOString(),
      category: "healthcare-access",
      details:
        "Program includes funding for telemedicine equipment, specialist recruitment incentives, and critical access hospital upgrades across 1,200 rural communities.",
    },
    {
      id: "news_007",
      headline: "FDA Approves Breakthrough Alzheimer's Treatment",
      summary:
        "New drug shows promise in slowing cognitive decline in early-stage Alzheimer's patients by 30% in clinical trials.",
      source: "Food and Drug Administration",
      publishedAt: new Date().toISOString(),
      category: "medical-breakthrough",
      details:
        "The treatment represents the first significant advancement in Alzheimer's therapy in over two decades, offering hope to 6 million Americans living with the disease.",
    },
    {
      id: "news_008",
      headline: "National Overdose Prevention Strategy Launched",
      summary:
        "Comprehensive plan includes expanded access to naloxone, harm reduction services, and medication-assisted treatment programs.",
      source: "Office of National Drug Control Policy",
      publishedAt: new Date().toISOString(),
      category: "substance-abuse",
      details:
        "Strategy targets 20% reduction in overdose deaths within two years through evidence-based interventions and $10 billion in federal funding.",
    },
    {
      id: "news_009",
      headline: "Maternal Mortality Rates Show Concerning Disparities",
      summary:
        "New report reveals significant racial and geographic disparities in pregnancy-related deaths, prompting federal action plan.",
      source: "CDC National Center for Health Statistics",
      publishedAt: new Date().toISOString(),
      category: "maternal-health",
      details:
        "Data shows Black women are three times more likely to die from pregnancy-related causes. Federal response includes $200 million for community-based maternal health programs.",
    },
    {
      id: "news_010",
      headline: "Climate Change Health Adaptation Plan Released",
      summary:
        "First-ever national strategy addresses health impacts of extreme weather, air quality, and vector-borne diseases.",
      source: "Department of Health & Human Services",
      publishedAt: new Date().toISOString(),
      category: "climate-health",
      details:
        "Plan outlines $1 billion investment in climate-resilient health infrastructure and early warning systems for extreme weather events.",
    },
    {
      id: "news_011",
      headline: "Prescription Drug Price Negotiation Program Saves Billions",
      summary:
        "Medicare's new drug pricing negotiations result in 40% average price reductions for 12 commonly prescribed medications.",
      source: "Centers for Medicare & Medicaid Services",
      publishedAt: new Date().toISOString(),
      category: "healthcare-costs",
      details:
        "Savings expected to reach $15 billion annually, with reduced costs for diabetes, heart disease, and cancer medications benefiting millions of seniors.",
    },
    {
      id: "news_012",
      headline: "Youth Sports Concussion Prevention Initiative Expands",
      summary:
        "New federal guidelines require baseline testing and mandatory rest protocols for all youth athletes nationwide.",
      source: "Department of Education & CDC",
      publishedAt: new Date().toISOString(),
      category: "injury-prevention",
      details:
        "Program includes coach training, parent education, and return-to-play protocols designed to reduce long-term brain injury risks in student athletes.",
    },
    {
      id: "news_013",
      headline: "AI-Powered Disease Surveillance System Deployed",
      summary:
        "Advanced artificial intelligence network can detect potential outbreaks 2-3 weeks earlier than traditional methods.",
      source: "CDC Emergency Response Division",
      publishedAt: new Date().toISOString(),
      category: "technology",
      details:
        "System analyzes electronic health records, social media, and environmental data to identify emerging health threats across all 50 states and territories.",
    },
    {
      id: "news_014",
      headline:
        "Surgeon General Issues Advisory on Social Media and Youth Mental Health",
      summary:
        "Official advisory warns of significant mental health risks for adolescents spending more than 3 hours daily on social platforms.",
      source: "Office of the Surgeon General",
      publishedAt: new Date().toISOString(),
      category: "mental-health",
      details:
        "Advisory recommends age-appropriate design standards, parental controls, and digital literacy education to protect developing minds from harmful content.",
    },
    {
      id: "news_015",
      headline: "Gene Therapy Breakthrough Cures Inherited Blindness",
      summary:
        "FDA approves revolutionary gene therapy that restores vision in patients with rare inherited retinal diseases.",
      source: "Food and Drug Administration",
      publishedAt: new Date().toISOString(),
      category: "medical-breakthrough",
      details:
        "Treatment involves direct injection of therapeutic genes into the eye, offering potential cure for previously untreatable forms of blindness affecting 20,000 Americans.",
    },
  ],

  outbreaks: [
    {
      id: "outbreak_001",
      disease: "Influenza A",
      location: "Midwest Region",
      casesReported: 1250,
      status: "contained",
      firstReported: "2025-09-01",
      lastUpdate: new Date().toISOString(),
      prevention: [
        "Get annual flu vaccination",
        "Wash hands frequently with soap",
        "Avoid close contact with sick individuals",
        "Cover coughs and sneezes",
      ],
      symptoms: ["Fever", "Cough", "Body aches", "Fatigue"],
      riskLevel: "moderate",
    },
    {
      id: "outbreak_002",
      disease: "Norovirus",
      location: "Coastal Communities",
      casesReported: 85,
      status: "monitoring",
      firstReported: "2025-09-10",
      lastUpdate: new Date().toISOString(),
      prevention: [
        "Wash hands with soap and water frequently",
        "Disinfect contaminated surfaces",
        "Avoid preparing food if ill",
        "Stay hydrated if infected",
      ],
      symptoms: ["Nausea", "Vomiting", "Diarrhea", "Stomach cramps"],
      riskLevel: "low",
    },
    {
      id: "outbreak_003",
      disease: "West Nile Virus",
      location: "Southern States",
      casesReported: 45,
      status: "active",
      firstReported: "2025-08-15",
      lastUpdate: new Date().toISOString(),
      prevention: [
        "Use insect repellent containing DEET",
        "Eliminate standing water around homes",
        "Wear long sleeves during dawn and dusk",
        "Install or repair window screens",
      ],
      symptoms: ["Fever", "Headache", "Body aches", "Skin rash"],
      riskLevel: "moderate",
    },
    {
      id: "outbreak_004",
      disease: "Salmonella",
      location: "Multi-state (15 states affected)",
      casesReported: 312,
      status: "active",
      firstReported: "2025-09-05",
      lastUpdate: new Date().toISOString(),
      prevention: [
        "Cook poultry and eggs to safe internal temperatures",
        "Wash hands after handling raw meat or eggs",
        "Avoid consuming raw or undercooked foods",
        "Keep raw meat separate from other foods",
        "Refrigerate perishable foods promptly",
      ],
      symptoms: ["Diarrhea", "Fever", "Abdominal cramps", "Vomiting"],
      riskLevel: "moderate",
      source: "Contaminated chicken products from three processing facilities",
    },
    {
      id: "outbreak_005",
      disease: "Legionnaires' Disease",
      location: "Downtown Convention Center District",
      casesReported: 23,
      status: "contained",
      firstReported: "2025-08-28",
      lastUpdate: new Date().toISOString(),
      prevention: [
        "Ensure proper maintenance of water systems",
        "Run water for several minutes before use after absence",
        "Seek medical attention for pneumonia-like symptoms",
        "Avoid areas with known contaminated water systems",
      ],
      symptoms: [
        "Cough",
        "Shortness of breath",
        "High fever",
        "Muscle aches",
        "Headaches",
      ],
      riskLevel: "high",
      source: "Contaminated cooling tower at major hotel complex",
    },
    {
      id: "outbreak_006",
      disease: "Hepatitis A",
      location: "Pacific Northwest",
      casesReported: 156,
      status: "monitoring",
      firstReported: "2025-08-20",
      lastUpdate: new Date().toISOString(),
      prevention: [
        "Get hepatitis A vaccination",
        "Practice proper hand hygiene, especially before eating",
        "Avoid consuming raw or undercooked foods",
        "Drink bottled water when traveling",
        "Avoid close contact with infected individuals",
      ],
      symptoms: [
        "Jaundice",
        "Fatigue",
        "Abdominal pain",
        "Loss of appetite",
        "Nausea",
      ],
      riskLevel: "moderate",
      source: "Linked to contaminated frozen berry products",
    },
    {
      id: "outbreak_007",
      disease: "Mpox (Monkeypox)",
      location: "Major Metropolitan Areas",
      casesReported: 89,
      status: "monitoring",
      firstReported: "2025-09-01",
      lastUpdate: new Date().toISOString(),
      prevention: [
        "Get mpox vaccination if eligible",
        "Avoid close contact with individuals showing symptoms",
        "Practice safe sexual behaviors",
        "Don't share personal items like clothing or bedding",
        "Wear protective equipment when caring for infected individuals",
      ],
      symptoms: [
        "Rash",
        "Fever",
        "Headache",
        "Muscle aches",
        "Back pain",
        "Swollen lymph nodes",
      ],
      riskLevel: "moderate",
      source: "Community transmission in urban areas",
    },
    {
      id: "outbreak_008",
      disease: "Cyclospora",
      location: "Southwest Border States",
      casesReported: 78,
      status: "active",
      firstReported: "2025-09-08",
      lastUpdate: new Date().toISOString(),
      prevention: [
        "Wash fresh produce thoroughly before consumption",
        "Avoid eating raw vegetables in affected areas",
        "Use bottled or boiled water for drinking and food preparation",
        "Practice good hand hygiene after using bathroom",
        "Cook foods to proper temperatures",
      ],
      symptoms: [
        "Watery diarrhea",
        "Loss of appetite",
        "Weight loss",
        "Stomach cramps",
        "Bloating",
      ],
      riskLevel: "low",
      source: "Imported fresh basil and cilantro from affected regions",
    },
    {
      id: "outbreak_009",
      disease: "Shigella",
      location: "Child Care Centers - Northeast",
      casesReported: 67,
      status: "contained",
      firstReported: "2025-09-12",
      lastUpdate: new Date().toISOString(),
      prevention: [
        "Wash hands frequently with soap and water",
        "Don't prepare food for others when ill",
        "Avoid swimming in public pools if experiencing symptoms",
        "Practice proper diaper changing procedures",
        "Disinfect contaminated surfaces regularly",
      ],
      symptoms: [
        "Diarrhea (often bloody)",
        "Fever",
        "Stomach cramps",
        "Tenesmus",
      ],
      riskLevel: "moderate",
      source: "Person-to-person transmission in daycare facilities",
    },
    {
      id: "outbreak_010",
      disease: "Eastern Equine Encephalitis",
      location: "Atlantic Coast Wetlands",
      casesReported: 8,
      status: "active",
      firstReported: "2025-08-25",
      lastUpdate: new Date().toISOString(),
      prevention: [
        "Use EPA-approved insect repellents",
        "Wear long sleeves and pants during peak mosquito hours",
        "Remove standing water around homes",
        "Install and maintain window and door screens",
        "Consider staying indoors during dusk and dawn",
      ],
      symptoms: [
        "High fever",
        "Headache",
        "Irritability",
        "Restlessness",
        "Drowsiness",
        "Anorexia",
        "Vomiting",
      ],
      riskLevel: "high",
      source: "Infected mosquitoes in coastal marsh areas",
    },
    {
      id: "outbreak_011",
      disease: "Listeria",
      location: "Nationwide (Ice Cream Products)",
      casesReported: 34,
      status: "monitoring",
      firstReported: "2025-09-03",
      lastUpdate: new Date().toISOString(),
      prevention: [
        "Check for recalled ice cream products and discard immediately",
        "Clean refrigerator and freezer thoroughly",
        "Heat leftover foods to 165°F before eating",
        "Wash hands after handling potentially contaminated products",
        "Pregnant women should avoid soft cheeses and deli meats",
      ],
      symptoms: [
        "Fever",
        "Muscle aches",
        "Nausea",
        "Diarrhea",
        "Headache",
        "Stiff neck",
        "Confusion",
      ],
      riskLevel: "high",
      source: "Contaminated ice cream manufacturing equipment",
    },
    {
      id: "outbreak_012",
      disease: "Hantavirus",
      location: "Four Corners Region",
      casesReported: 12,
      status: "monitoring",
      firstReported: "2025-08-30",
      lastUpdate: new Date().toISOString(),
      prevention: [
        "Seal holes and gaps in homes to prevent rodent entry",
        "Use bleach solution to clean areas with rodent droppings",
        "Wear protective equipment when cleaning infested areas",
        "Store food in sealed, rodent-proof containers",
        "Maintain clean environments around homes and buildings",
      ],
      symptoms: [
        "Fever",
        "Muscle aches",
        "Fatigue",
        "Dizziness",
        "Chills",
        "Abdominal problems",
      ],
      riskLevel: "high",
      source: "Increased rodent activity following heavy rainfall",
    },
  ],

  trivia: [
    {
      id: "trivia_001",
      question:
        "How many times should you wash your hands per day for optimal hygiene?",
      answer:
        "Health experts recommend washing hands at least 5-10 times per day, especially before eating, after using the bathroom, and after being in public spaces.",
      category: "hygiene",
      funFact:
        "The 20-second hand washing rule was established because it takes that long to effectively remove most germs and bacteria.",
    },
    {
      id: "trivia_002",
      question: "What percentage of the human body is water?",
      answer:
        "The human body is approximately 60% water, with variations based on age, gender, and body composition.",
      category: "anatomy",
      funFact:
        "Your brain and heart are composed of 73% water, while your lungs are about 83% water.",
    },
    {
      id: "trivia_003",
      question: "How many hours of sleep do adults need for optimal health?",
      answer:
        "Most adults need 7-9 hours of quality sleep per night for optimal physical and mental health.",
      category: "sleep",
      funFact:
        "During sleep, your brain actually increases in size by about 60% to flush out toxins more effectively.",
    },
    {
      id: "trivia_004",
      question: "What is the recommended daily water intake for adults?",
      answer:
        "Adults should aim for about 8 glasses (64 ounces) of water per day, though needs vary based on activity level and climate.",
      category: "nutrition",
      funFact:
        "You can lose up to 1-3 liters of water per hour during intense exercise in hot weather.",
    },
    {
      id: "trivia_005",
      question: "How often should you exercise for cardiovascular health?",
      answer:
        "The CDC recommends at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous activity per week.",
      category: "exercise",
      funFact:
        "Just 10 minutes of brisk walking can improve your mood for up to 12 hours due to endorphin release.",
    },
    {
      id: "trivia_006",
      question: "How many bones are in the adult human body?",
      answer:
        "Adults have 206 bones in their body, though babies are born with approximately 270 bones that gradually fuse together as they grow.",
      category: "anatomy",
      funFact:
        "The femur (thigh bone) is the longest and strongest bone in the human body, capable of supporting 30 times a person's body weight.",
    },
    {
      id: "trivia_007",
      question:
        "What is the recommended daily intake of fruits and vegetables?",
      answer:
        "The CDC recommends eating at least 5 servings of fruits and vegetables per day, with a goal of 2 cups of fruit and 2.5 cups of vegetables.",
      category: "nutrition",
      funFact:
        "Eating a rainbow of colorful fruits and vegetables ensures you get a wide variety of vitamins, minerals, and antioxidants.",
    },
    {
      id: "trivia_008",
      question: "How often should adults get their blood pressure checked?",
      answer:
        "Adults should have their blood pressure checked at least once every two years, or annually if they have elevated readings or risk factors.",
      category: "prevention",
      funFact:
        "High blood pressure is called the 'silent killer' because it often has no symptoms but significantly increases risk of heart disease and stroke.",
    },
    {
      id: "trivia_009",
      question:
        "What percentage of your daily calories should come from saturated fat?",
      answer:
        "Less than 10% of your daily calories should come from saturated fat, according to dietary guidelines for Americans.",
      category: "nutrition",
      funFact:
        "Replacing saturated fats with unsaturated fats can reduce your risk of heart disease by up to 30%.",
    },
    {
      id: "trivia_010",
      question: "How long should you brush your teeth for optimal oral health?",
      answer:
        "Dentists recommend brushing your teeth for at least 2 minutes, twice daily, using fluoride toothpaste.",
      category: "oral-health",
      funFact:
        "Your mouth contains over 700 species of bacteria, but proper oral hygiene keeps the harmful ones in check.",
    },
    {
      id: "trivia_011",
      question: "What is the largest organ in the human body?",
      answer:
        "The skin is the largest organ in the human body, covering approximately 22 square feet in adults and weighing about 8 pounds.",
      category: "anatomy",
      funFact:
        "Your skin completely renews itself every 28 days, shedding about 40,000 dead skin cells every minute.",
    },
    {
      id: "trivia_012",
      question: "How many steps per day are recommended for optimal health?",
      answer:
        "While 10,000 steps is a popular goal, research shows that 7,000-8,000 steps per day can provide significant health benefits for most adults.",
      category: "exercise",
      funFact:
        "Taking the stairs for just 2 minutes daily can lead to 6 pounds of weight loss over a year.",
    },
    {
      id: "trivia_013",
      question: "What is the recommended age to start getting mammograms?",
      answer:
        "Most medical organizations recommend women begin annual mammograms at age 40, though some suggest starting at 50 depending on risk factors.",
      category: "prevention",
      funFact:
        "Mammograms can detect breast cancer up to 2 years before it can be felt during self-examination.",
    },
    {
      id: "trivia_014",
      question: "How much vitamin D do adults need daily?",
      answer:
        "Adults need 600-800 IU (15-20 mcg) of vitamin D daily, though many experts recommend higher amounts, especially for those with limited sun exposure.",
      category: "nutrition",
      funFact:
        "Just 15 minutes of midday sun exposure can produce 10,000-20,000 IU of vitamin D in light-skinned individuals.",
    },
    {
      id: "trivia_015",
      question: "What is the normal resting heart rate for adults?",
      answer:
        "A normal resting heart rate for adults ranges from 60-100 beats per minute, with lower rates typically indicating better cardiovascular fitness.",
      category: "vital-signs",
      funFact:
        "Your heart beats approximately 100,000 times per day and pumps about 2,000 gallons of blood.",
    },
    {
      id: "trivia_016",
      question: "How often should you replace your toothbrush?",
      answer:
        "Dentists recommend replacing your toothbrush every 3-4 months, or sooner if the bristles become frayed or after recovering from illness.",
      category: "oral-health",
      funFact:
        "A worn toothbrush can harbor millions of bacteria and is only 30% as effective as a new one at removing plaque.",
    },
    {
      id: "trivia_017",
      question: "What percentage of the brain is water?",
      answer:
        "The human brain is approximately 75% water, making proper hydration essential for cognitive function and mental clarity.",
      category: "anatomy",
      funFact:
        "Even mild dehydration of 2% can impair memory, attention, and other cognitive functions.",
    },
    {
      id: "trivia_018",
      question: "How long can the human body survive without food?",
      answer:
        "The human body can typically survive 30-40 days without food, depending on factors like body weight, health, and environmental conditions.",
      category: "survival",
      funFact:
        "However, the body can only survive 3-5 days without water, making hydration far more critical for short-term survival.",
    },
    {
      id: "trivia_019",
      question: "What is the recommended age for first colonoscopy screening?",
      answer:
        "Most guidelines recommend starting colorectal cancer screening at age 45 for average-risk individuals, recently lowered from age 50.",
      category: "prevention",
      funFact:
        "Colonoscopy screening can prevent up to 90% of colorectal cancers by detecting and removing precancerous polyps.",
    },
    {
      id: "trivia_020",
      question: "How many taste buds does the average person have?",
      answer:
        "The average person has about 10,000 taste buds, which can detect five basic tastes: sweet, sour, salty, bitter, and umami.",
      category: "anatomy",
      funFact:
        "Taste buds regenerate every 1-2 weeks, which is why your sense of taste can change after illness or certain medications.",
    },
    {
      id: "trivia_021",
      question: "What is the ideal room temperature for sleep?",
      answer:
        "Sleep experts recommend keeping your bedroom between 60-67°F (15-19°C) for optimal sleep quality.",
      category: "sleep",
      funFact:
        "Your body temperature naturally drops 1-2 degrees when you sleep, and a cool environment helps facilitate this process.",
    },
    {
      id: "trivia_022",
      question: "How much fiber should adults consume daily?",
      answer:
        "Adults should consume 25-35 grams of fiber daily, though most Americans only get about half of this recommended amount.",
      category: "nutrition",
      funFact:
        "High-fiber foods can help you feel full longer and may reduce your risk of heart disease, diabetes, and certain cancers.",
    },
    {
      id: "trivia_023",
      question: "What is the strongest muscle in the human body by weight?",
      answer:
        "The masseter (jaw muscle) is the strongest muscle in the human body by weight, capable of exerting force of up to 200 pounds on molars.",
      category: "anatomy",
      funFact:
        "The heart is the hardest working muscle, beating over 2.5 billion times in an average lifetime without rest.",
    },
    {
      id: "trivia_024",
      question: "How often should you have an eye exam?",
      answer:
        "Adults should have comprehensive eye exams every 1-2 years, or annually after age 60 or if they have risk factors for eye disease.",
      category: "prevention",
      funFact:
        "Many serious eye conditions like glaucoma and diabetic retinopathy have no early symptoms, making regular exams crucial for detection.",
    },
    {
      id: "trivia_025",
      question:
        "What percentage of your body weight should you drink in water daily?",
      answer:
        "A general rule is to drink half to one ounce of water per pound of body weight daily, so a 150-pound person should drink 75-150 ounces.",
      category: "hydration",
      funFact:
        "Your kidneys can process about 0.8-1.0 liters of water per hour, so drinking too much too quickly can be dangerous.",
    },
  ],

  // Additional data categories for more realistic government health communications
  alerts: [
    {
      id: "alert_001",
      type: "weather",
      title: "Extreme Heat Warning - Health Advisory",
      message:
        "Temperatures exceeding 105°F expected for next 3 days. Take precautions to prevent heat-related illness.",
      severity: "high",
      validUntil: "2025-09-17T23:59:59Z",
      affectedRegions: ["Arizona", "Nevada", "Southern California"],
    },
    {
      id: "alert_002",
      type: "air-quality",
      title: "Air Quality Alert - Unhealthy for Sensitive Groups",
      message:
        "Air Quality Index reaching 150+ due to wildfire smoke. Limit outdoor activities if you have respiratory conditions.",
      severity: "medium",
      validUntil: "2025-09-15T18:00:00Z",
      affectedRegions: ["Pacific Northwest", "Northern California"],
    },
    {
      id: "alert_003",
      type: "recall",
      title: "Food Recall Alert - Contaminated Ground Beef",
      message:
        "125,000 pounds of ground beef recalled due to possible E. coli contamination. Check lot numbers and discard if affected.",
      severity: "high",
      validUntil: "2025-09-20T23:59:59Z",
      affectedRegions: ["Nationwide"],
    },
  ],

  healthTips: [
    {
      id: "tip_001",
      category: "prevention",
      title: "Boost Your Immune System Naturally",
      content:
        "Get adequate sleep, eat colorful fruits and vegetables, exercise regularly, manage stress, and maintain good hygiene habits.",
      source: "National Institute of Health",
    },
    {
      id: "tip_002",
      category: "nutrition",
      title: "Hidden Sources of Added Sugar",
      content:
        "Check labels on condiments, bread, yogurt, and salad dressings - they often contain surprising amounts of added sugar.",
      source: "American Heart Association",
    },
    {
      id: "tip_003",
      category: "mental-health",
      title: "5-Minute Stress Relief Technique",
      content:
        "Try the 4-7-8 breathing method: Inhale for 4 counts, hold for 7, exhale for 8. Repeat 3-4 times to activate your body's relaxation response.",
      source: "American Psychological Association",
    },
    {
      id: "tip_004",
      category: "exercise",
      title: "Desk Exercise for Office Workers",
      content:
        "Every hour, do 10 shoulder rolls, 10 neck stretches, and take a 2-minute walk to reduce muscle tension and improve circulation.",
      source: "Occupational Safety and Health Administration",
    },
    {
      id: "tip_005",
      category: "safety",
      title: "Carbon Monoxide Prevention",
      content:
        "Install CO detectors near sleeping areas, never use generators indoors, and have heating systems inspected annually.",
      source: "CDC Injury Prevention Center",
    },
  ],

  statistics: [
    {
      id: "stat_001",
      title: "Heart Disease Prevention Impact",
      value: "80%",
      description:
        "of premature heart disease and stroke cases are preventable through lifestyle changes",
      source: "World Health Organization",
      category: "cardiovascular",
    },
    {
      id: "stat_002",
      title: "Handwashing Effectiveness",
      value: "31%",
      description:
        "reduction in respiratory illnesses when proper handwashing is practiced regularly",
      source: "CDC Disease Prevention",
      category: "infection-control",
    },
    {
      id: "stat_003",
      title: "Vaccination Impact",
      value: "2-3 million",
      description:
        "deaths prevented globally each year through routine childhood immunizations",
      source: "World Health Organization",
      category: "immunization",
    },
    {
      id: "stat_004",
      title: "Mental Health in Workplace",
      value: "$1 trillion",
      description:
        "estimated annual global cost of depression and anxiety disorders to the economy",
      source: "World Health Organization",
      category: "mental-health",
    },
  ],
};

// Function to get random items from an array
function getRandomItems(array, count = 1) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Function to get weighted random items (prioritize recent or high severity)
function getWeightedRandomItems(array, count = 1, weightKey = "severity") {
  if (!array || array.length === 0) return [];

  const weighted = array.map((item) => {
    let weight = 1;
    if (weightKey === "severity") {
      switch (item.severity) {
        case "critical":
          weight = 4;
          break;
        case "high":
          weight = 3;
          break;
        case "medium":
          weight = 2;
          break;
        case "low":
          weight = 1;
          break;
        default:
          weight = 1;
      }
    } else if (weightKey === "riskLevel") {
      switch (item.riskLevel) {
        case "high":
          weight = 3;
          break;
        case "moderate":
          weight = 2;
          break;
        case "low":
          weight = 1;
          break;
        default:
          weight = 1;
      }
    }
    return { ...item, weight };
  });

  // Create weighted selection pool
  const pool = [];
  weighted.forEach((item) => {
    for (let i = 0; i < item.weight; i++) {
      pool.push(item);
    }
  });

  const selected = [];
  const usedIds = new Set();

  while (selected.length < count && selected.length < array.length) {
    const randomItem = pool[Math.floor(Math.random() * pool.length)];
    if (!usedIds.has(randomItem.id)) {
      usedIds.add(randomItem.id);
      const { weight, ...itemWithoutWeight } = randomItem;
      selected.push(itemWithoutWeight);
    }
  }

  return selected;
}

// Function to generate time-based content variations
function getTimeBasedContent() {
  const hour = new Date().getHours();
  const day = new Date().getDay(); // 0 = Sunday, 6 = Saturday

  if (hour >= 6 && hour < 12) {
    return { period: "morning", focus: "daily preparation and prevention" };
  } else if (hour >= 12 && hour < 17) {
    return { period: "afternoon", focus: "workplace health and safety" };
  } else if (hour >= 17 && hour < 22) {
    return {
      period: "evening",
      focus: "family health and emergency preparedness",
    };
  } else {
    return {
      period: "night",
      focus: "urgent alerts and emergency information",
    };
  }
}

// Function to simulate real-time data variations
function addRealtimeVariations(data) {
  // Simulate case count fluctuations for outbreaks
  if (data.outbreaks) {
    data.outbreaks.forEach((outbreak) => {
      const variation = Math.floor(Math.random() * 21) - 10; // ±10 variation
      outbreak.casesReported = Math.max(1, outbreak.casesReported + variation);
      outbreak.lastUpdate = new Date().toISOString();

      // Randomly update status for some outbreaks
      if (Math.random() > 0.8) {
        const statuses = ["active", "monitoring", "contained", "resolved"];
        outbreak.status = statuses[Math.floor(Math.random() * statuses.length)];
      }
    });
  }

  // Add timestamp variations to news
  if (data.news) {
    data.news.forEach((news) => {
      const hoursAgo = Math.floor(Math.random() * 24);
      const publishTime = new Date();
      publishTime.setHours(publishTime.getHours() - hoursAgo);
      news.publishedAt = publishTime.toISOString();
    });
  }

  return data;
}

// Function to generate a random health data payload
function generateHealthPayload() {
  const timestamp = new Date().toISOString();
  const currentHour = new Date().getHours();

  // Adjust data selection based on time of day for more realistic patterns
  const isBusinessHours = currentHour >= 8 && currentHour <= 17;
  const isEmergencyHours = currentHour >= 18 || currentHour <= 7;

  // Generate more dynamic content based on time and randomization
  const concernCount = Math.floor(Math.random() * 3) + 1; // 1-3 concerns
  const newsCount = Math.floor(Math.random() * 4) + 1; // 1-4 news items
  const outbreakCount = Math.floor(Math.random() * 2) + 1; // 1-2 outbreaks
  const includeAlerts = Math.random() > 0.7; // 30% chance of including alerts
  const includeHealthTips = Math.random() > 0.4; // 60% chance of including health tips
  const includeStatistics = Math.random() > 0.6; // 40% chance of including statistics

  const payload = {
    timestamp,
    type: "health_update",
    data: {
      concerns: getRandomItems(mockHealthData.concerns, concernCount),
      news: getRandomItems(mockHealthData.news, newsCount),
      outbreaks: getRandomItems(mockHealthData.outbreaks, outbreakCount),
      dailyTrivia: getRandomItems(mockHealthData.trivia, 1)[0],
    },
    metadata: {
      source: "Government Health Mock Server",
      version: "2.0.0",
      region: "US",
      dataFreshness: "real-time",
      generatedAt: timestamp,
      isBusinessHours: isBusinessHours,
      dataVariety: {
        concernsIncluded: concernCount,
        newsIncluded: newsCount,
        outbreaksIncluded: outbreakCount,
      },
    },
  };

  // Add optional sections based on randomization
  if (includeAlerts && mockHealthData.alerts) {
    payload.data.activeAlerts = getRandomItems(
      mockHealthData.alerts,
      Math.floor(Math.random() * 2) + 1
    );
  }

  if (includeHealthTips && mockHealthData.healthTips) {
    payload.data.healthTips = getRandomItems(
      mockHealthData.healthTips,
      Math.floor(Math.random() * 2) + 1
    );
  }

  if (includeStatistics && mockHealthData.statistics) {
    payload.data.healthStatistics = getRandomItems(
      mockHealthData.statistics,
      Math.floor(Math.random() * 2) + 1
    );
  }

  // Add emergency priority flag for high-severity concerns during emergency hours
  const highSeverityConcerns = payload.data.concerns.filter(
    (concern) => concern.severity === "high" || concern.severity === "critical"
  );

  if (highSeverityConcerns.length > 0 && isEmergencyHours) {
    payload.metadata.emergencyPriority = true;
    payload.metadata.highSeverityCount = highSeverityConcerns.length;
  }

  // Add seasonal context
  const month = new Date().getMonth() + 1; // 1-12
  if (month >= 6 && month <= 8) {
    payload.metadata.seasonalContext = "summer";
    payload.metadata.seasonalRisks = [
      "heat-related illness",
      "vector-borne diseases",
      "water safety",
    ];
  } else if (month >= 12 || month <= 2) {
    payload.metadata.seasonalContext = "winter";
    payload.metadata.seasonalRisks = [
      "respiratory infections",
      "hypothermia",
      "seasonal depression",
    ];
  } else if (month >= 3 && month <= 5) {
    payload.metadata.seasonalContext = "spring";
    payload.metadata.seasonalRisks = [
      "allergies",
      "tick-borne diseases",
      "severe weather",
    ];
  } else {
    payload.metadata.seasonalContext = "fall";
    payload.metadata.seasonalRisks = [
      "flu season",
      "back-to-school illnesses",
      "weather transitions",
    ];
  }

  return payload;
}

module.exports = {
  mockHealthData,
  generateHealthPayload,
  getRandomItems,
  getWeightedRandomItems,
  getTimeBasedContent,
  addRealtimeVariations,
};
