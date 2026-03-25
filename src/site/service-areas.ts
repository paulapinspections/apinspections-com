export interface ServiceAreaCity {
  slug: string;
  name: string;
  county: string;
  state: string;
  stateAbbr: string;
  population: number;
  driveTimeMinutes: number;
  tier: 1 | 2 | 3;
  description: string;
  commonHomes: string;
  localContext: string;
}

export const serviceAreaCities: ServiceAreaCity[] = [
  // === STEUBEN COUNTY (Home County) ===
  {
    slug: "fremont-in",
    name: "Fremont",
    county: "Steuben County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 2080,
    driveTimeMinutes: 15,
    tier: 1,
    description:
      "Located along the I-69 corridor near the Indiana Toll Road, Fremont is a growing community with an active residential real estate market.",
    commonHomes:
      "Single-family homes ranging from older farmhouses to newer subdivisions along the interstate corridor.",
    localContext:
      "Fremont's proximity to major highways makes it attractive for commuters working in Fort Wayne or traveling into Michigan and Ohio.",
  },
  {
    slug: "hamilton-in",
    name: "Hamilton",
    county: "Steuben County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 1569,
    driveTimeMinutes: 15,
    tier: 1,
    description:
      "A quiet small town in western Steuben County, Hamilton offers affordable homes in a rural setting close to Angola.",
    commonHomes:
      "Traditional small-town homes, ranch-style houses, and rural properties with acreage.",
    localContext:
      "Hamilton residents enjoy a peaceful, close-knit community while being just minutes from Angola's amenities.",
  },
  {
    slug: "ashley-in",
    name: "Ashley",
    county: "Steuben County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 1050,
    driveTimeMinutes: 20,
    tier: 1,
    description:
      "Straddling the Steuben and DeKalb county line, Ashley is a small residential community with steady home sales.",
    commonHomes:
      "Older bungalows and ranch homes, some newer construction near the town edges.",
    localContext:
      "Ashley sits between Angola and Auburn, giving residents easy access to both communities.",
  },
  {
    slug: "clear-lake-in",
    name: "Clear Lake",
    county: "Steuben County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 355,
    driveTimeMinutes: 10,
    tier: 1,
    description:
      "A lakefront community known for vacation and year-round waterfront properties around Clear Lake.",
    commonHomes:
      "Waterfront cottages, lakefront year-round homes, and seasonal vacation properties. Many older lake homes are being renovated or replaced.",
    localContext:
      "Steuben County is known as the 'lake country' of Indiana. Waterfront properties require special inspection attention for moisture, foundation, dock structures, and septic systems.",
  },
  {
    slug: "orland-in",
    name: "Orland",
    county: "Steuben County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 400,
    driveTimeMinutes: 15,
    tier: 1,
    description:
      "A small, friendly town in Steuben County with affordable residential properties and a rural lifestyle.",
    commonHomes:
      "Traditional small-town homes, older farmsteads, and modest single-family residences.",
    localContext:
      "Orland offers a quiet alternative to Angola while being close to lakes and recreational areas.",
  },

  // === NOBLE COUNTY ===
  {
    slug: "kendallville-in",
    name: "Kendallville",
    county: "Noble County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 10300,
    driveTimeMinutes: 32,
    tier: 2,
    description:
      "The largest city in Noble County and its commercial hub, Kendallville has a strong residential real estate market with homes across all price ranges.",
    commonHomes:
      "Victorian-era downtown homes, mid-century neighborhoods, and newer suburban developments. Wide range from starter homes to established family residences.",
    localContext:
      "Kendallville's active housing market includes first-time buyers and families. Older homes downtown may need careful inspection of aging systems — plumbing, electrical, and foundations built in the early 1900s.",
  },
  {
    slug: "albion-in",
    name: "Albion",
    county: "Noble County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 2230,
    driveTimeMinutes: 25,
    tier: 1,
    description:
      "The county seat of Noble County, Albion is near Chain O'Lakes State Park and offers a mix of in-town and rural properties.",
    commonHomes:
      "Historic homes near the courthouse square, ranch-style houses from the 1960s-80s, and newer builds near the park.",
    localContext:
      "Albion's proximity to Chain O'Lakes State Park makes it popular with buyers who want outdoor recreation and small-town living.",
  },
  {
    slug: "rome-city-in",
    name: "Rome City",
    county: "Noble County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 1310,
    driveTimeMinutes: 20,
    tier: 1,
    description:
      "A charming community along Sylvan Lake with a resort heritage. Rome City features lakefront and near-lake residential properties.",
    commonHomes:
      "Lakefront homes, converted summer cottages, and year-round residences. Many properties have been updated from seasonal to full-time use.",
    localContext:
      "Like Clear Lake, Rome City's lakefront properties need special attention to moisture issues, septic systems, and structural concerns common in converted seasonal homes.",
  },
  {
    slug: "ligonier-in",
    name: "Ligonier",
    county: "Noble County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 4580,
    driveTimeMinutes: 51,
    tier: 3,
    description:
      "A diverse community in western Noble County with a manufacturing base and growing residential area.",
    commonHomes:
      "Affordable single-family homes, older worker housing near the historic downtown, and newer suburban-style builds on the outskirts.",
    localContext:
      "Ligonier has become increasingly attractive to buyers looking for affordable housing within commuting distance of larger employment centers.",
  },
  {
    slug: "avilla-in",
    name: "Avilla",
    county: "Noble County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 2500,
    driveTimeMinutes: 35,
    tier: 2,
    description:
      "A growing community positioned between Kendallville and Fort Wayne, Avilla attracts buyers looking for small-town living with easy highway access.",
    commonHomes:
      "Mix of older village homes and newer construction. Growing number of family homes as the community expands.",
    localContext:
      "Avilla's location along US-33 between Kendallville and Fort Wayne makes it appealing for commuters seeking affordable homes.",
  },

  // === DEKALB COUNTY ===
  {
    slug: "auburn-in",
    name: "Auburn",
    county: "DeKalb County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 13400,
    driveTimeMinutes: 30,
    tier: 2,
    description:
      "The county seat and largest city in DeKalb County, Auburn has the strongest real estate market in the area with diverse housing options across all price points.",
    commonHomes:
      "Historic homes in the downtown district, established neighborhoods from the 1950s-80s, and active new construction in growing subdivisions. Auburn has everything from starter homes to executive properties.",
    localContext:
      "Auburn's position along I-69 and its strong school system make it one of the most active real estate markets in northeast Indiana. The mix of older and newer homes means inspection needs vary widely — from century-old foundations to new construction quality checks.",
  },
  {
    slug: "garrett-in",
    name: "Garrett",
    county: "DeKalb County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 6550,
    driveTimeMinutes: 35,
    tier: 2,
    description:
      "DeKalb County's second-largest city with a railroad heritage and an active residential market with affordable housing options.",
    commonHomes:
      "Classic small-city homes, many from the railroad era (early 1900s), along with mid-century ranch homes and some newer builds.",
    localContext:
      "Garrett's older housing stock means many homes have aging infrastructure — knob-and-tube wiring, galvanized plumbing, and older foundations are common findings during inspections here.",
  },
  {
    slug: "butler-in",
    name: "Butler",
    county: "DeKalb County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 2635,
    driveTimeMinutes: 25,
    tier: 1,
    description:
      "A small city along US-6 near the Ohio border, Butler offers affordable small-town living in DeKalb County.",
    commonHomes:
      "Traditional small-town homes, ranch-style houses, and rural properties. Affordable housing stock attracts first-time buyers.",
    localContext:
      "Butler's location near the Ohio border means some buyers come from the Bryan/Defiance area looking for Indiana properties.",
  },
  {
    slug: "waterloo-in",
    name: "Waterloo",
    county: "DeKalb County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 2120,
    driveTimeMinutes: 20,
    tier: 1,
    description:
      "Positioned along I-69 between Angola and Auburn, Waterloo is growing thanks to its convenient interstate access.",
    commonHomes:
      "Mix of established homes and newer construction driven by I-69 corridor growth. Growing number of new subdivisions.",
    localContext:
      "Waterloo's new construction market is expanding as the I-69 corridor develops. New builds benefit from a professional construction inspection to catch builder oversights before closing.",
  },

  // === LAGRANGE COUNTY ===
  {
    slug: "lagrange-in",
    name: "LaGrange",
    county: "LaGrange County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 2625,
    driveTimeMinutes: 25,
    tier: 1,
    description:
      "The county seat of LaGrange County, LaGrange is a growing community with a mix of traditional and newer residential properties.",
    commonHomes:
      "In-town historic homes near the courthouse, newer suburban homes, and rural properties on the outskirts.",
    localContext:
      "LaGrange County has a significant Amish population, and some properties may have unique features like converted outbuildings, well water systems, and septic that need thorough inspection.",
  },
  {
    slug: "shipshewana-in",
    name: "Shipshewana",
    county: "LaGrange County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 840,
    driveTimeMinutes: 37,
    tier: 2,
    description:
      "A major Amish tourism destination known for the famous flea market, Shipshewana has a unique real estate market.",
    commonHomes:
      "Mix of Amish and non-Amish properties, tourist-area commercial/residential combos, and traditional homes. Some properties may have non-standard construction.",
    localContext:
      "Properties in the Shipshewana area sometimes have unique construction methods or systems. A thorough inspection helps buyers understand what they're purchasing, especially for non-standard builds.",
  },
  {
    slug: "topeka-in",
    name: "Topeka",
    county: "LaGrange County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 1240,
    driveTimeMinutes: 46,
    tier: 3,
    description:
      "An Amish country community in LaGrange County experiencing residential growth alongside its traditional character.",
    commonHomes:
      "Small-town homes, rural farmsteads, and some newer builds as the area grows.",
    localContext:
      "Topeka sits in the heart of Indiana's Amish country, and buyers moving to the area benefit from understanding the unique property features common in this region.",
  },
  {
    slug: "howe-in",
    name: "Howe",
    county: "LaGrange County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 700,
    driveTimeMinutes: 15,
    tier: 1,
    description:
      "A small residential community along US-20, Howe is close to both Angola and LaGrange.",
    commonHomes:
      "Traditional small-town homes and some rural properties with acreage.",
    localContext:
      "Howe's location along US-20 provides easy access to both Angola and LaGrange, making it convenient for commuters.",
  },
  {
    slug: "wolcottville-in",
    name: "Wolcottville",
    county: "LaGrange County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 1000,
    driveTimeMinutes: 30,
    tier: 2,
    description:
      "A small town on the Noble/LaGrange county border with affordable residential properties.",
    commonHomes:
      "Older small-town homes, some rural properties, and affordable starter homes.",
    localContext:
      "Wolcottville sits between Noble and LaGrange counties, serving buyers looking for affordable options in either county.",
  },

  // === ALLEN COUNTY (Fort Wayne Area) ===
  {
    slug: "fort-wayne-in",
    name: "Fort Wayne",
    county: "Allen County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 263900,
    driveTimeMinutes: 40,
    tier: 3,
    description:
      "Indiana's second-largest city with a massive and diverse real estate market spanning every price range and home style.",
    commonHomes:
      "Everything from historic West Central mansions to mid-century suburban neighborhoods to brand-new construction in developments like Aboite and northwest Allen County.",
    localContext:
      "Fort Wayne's size means highly varied inspection needs. Older neighborhoods may have lead paint, asbestos, and aging infrastructure, while new construction areas need quality verification inspections.",
  },
  {
    slug: "leo-cedarville-in",
    name: "Leo-Cedarville",
    county: "Allen County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 3660,
    driveTimeMinutes: 40,
    tier: 2,
    description:
      "A growing residential suburb in northeast Allen County, Leo-Cedarville is the closest Allen County community to Angola.",
    commonHomes:
      "Newer single-family homes, established neighborhoods, and some rural properties. Active new construction market.",
    localContext:
      "Leo-Cedarville's growth makes it a busy area for both pre-purchase and new construction inspections.",
  },
  {
    slug: "grabill-in",
    name: "Grabill",
    county: "Allen County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 1180,
    driveTimeMinutes: 35,
    tier: 2,
    description:
      "An Amish heritage community northeast of Fort Wayne with a charming downtown and residential properties.",
    commonHomes:
      "Traditional homes, some with Amish construction heritage, and newer builds as the Fort Wayne metro expands northeast.",
    localContext:
      "Grabill's unique character and proximity to Fort Wayne make it attractive to buyers looking for small-town living near urban amenities.",
  },
  {
    slug: "huntertown-in",
    name: "Huntertown",
    county: "Allen County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 9230,
    driveTimeMinutes: 50,
    tier: 3,
    description:
      "One of the fastest-growing suburbs north of Fort Wayne, Huntertown has a booming new construction market.",
    commonHomes:
      "Predominantly newer construction — subdivisions built in the 2000s-2020s. Active new home building continues.",
    localContext:
      "Huntertown's rapid growth means many new construction inspections. Even brand-new homes benefit from an independent inspection to catch builder oversights.",
  },

  // === WHITLEY COUNTY ===
  {
    slug: "churubusco-in",
    name: "Churubusco",
    county: "Whitley County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 1850,
    driveTimeMinutes: 40,
    tier: 2,
    description:
      "Known as 'Turtle Town USA,' Churubusco is in northern Whitley County, closer to Angola than the county seat of Columbia City.",
    commonHomes:
      "Classic small-town homes, some dating to the early 1900s, along with newer rural residential properties.",
    localContext:
      "Churubusco draws buyers looking for affordable homes between Fort Wayne and the lake country of Steuben County.",
  },
  {
    slug: "columbia-city-in",
    name: "Columbia City",
    county: "Whitley County",
    state: "Indiana",
    stateAbbr: "IN",
    population: 9890,
    driveTimeMinutes: 57,
    tier: 3,
    description:
      "The county seat of Whitley County, Columbia City has a growing residential market at the edge of AP Inspections' service area.",
    commonHomes:
      "Historic homes near downtown, established suburban neighborhoods, and some new construction. Wide price range from affordable to upscale.",
    localContext:
      "Columbia City's position along US-30 and its growing economy make it an increasingly active real estate market.",
  },
];
