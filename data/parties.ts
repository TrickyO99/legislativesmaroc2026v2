import type { Party } from "@/lib/types";

/**
 * Seats are from the September 2021 legislative election, shown for
 * context only — this is not a prediction for the upcoming election.
 * Descriptions are neutral summaries pending a full fact-check pass (see
 * /methodologie). Founding years / leaders / seat counts are omitted
 * rather than guessed wherever confidence was low, especially for the
 * smaller parties. Party acronyms are conventionally kept in Latin script
 * in Arabic text too. Leader names keep their Latin spelling in English.
 */
export const parties: Party[] = [
  {
    id: "rni",
    name: "Rassemblement National des Indépendants",
    nameAr: "التجمع الوطني للأحرار",
    nameEn: "National Rally of Independents",
    acronym: "RNI",
    colorHex: "#0072BC",
    leader: "Aziz Akhannouch",
    leaderAr: "عزيز أخنوش",
    leaderEn: "Aziz Akhannouch",
    description:
      "Parti libéral, actuellement à la tête du gouvernement de coalition. Met l'accent sur l'investissement privé, les grands chantiers d'infrastructure et une réforme progressive de la protection sociale.",
    descriptionAr:
      "حزب ليبرالي، يقود حاليا حكومة الائتلاف. يركز على الاستثمار الخاص، الأوراش الكبرى للبنية التحتية، وإصلاح تدريجي للحماية الاجتماعية.",
    descriptionEn:
      "A liberal party currently leading the coalition government. Emphasizes private investment, major infrastructure projects, and a gradual reform of social protection.",
    ideologyTags: ["libéral", "pro-affaires", "centriste"],
    ideologyTagsAr: ["ليبرالي", "قريب من الأعمال", "وسطي"],
    ideologyTagsEn: ["liberal", "pro-business", "centrist"],
    foundedYear: 1978,
    lastElectionSeats: 102,
  },
  {
    id: "pam",
    name: "Parti Authenticité et Modernité",
    nameAr: "حزب الأصالة والمعاصرة",
    nameEn: "Authenticity and Modernity Party",
    acronym: "PAM",
    colorHex: "#F7941D",
    leader: "Abdellatif Ouahbi",
    leaderAr: "عبد اللطيف وهبي",
    leaderEn: "Abdellatif Ouahbi",
    description:
      "Parti centriste né en 2008, positionné sur la modernisation des institutions, la réforme de la justice et une ligne sociale-libérale.",
    descriptionAr:
      "حزب وسطي تأسس سنة 2008، يركز على تحديث المؤسسات وإصلاح القضاء وخط اجتماعي-ليبرالي.",
    descriptionEn:
      "A centrist party founded in 2008, focused on modernizing institutions, judicial reform, and a social-liberal line.",
    ideologyTags: ["centriste", "modernisation institutionnelle"],
    ideologyTagsAr: ["وسطي", "تحديث مؤسساتي"],
    ideologyTagsEn: ["centrist", "institutional modernization"],
    foundedYear: 2008,
    lastElectionSeats: 87,
  },
  {
    id: "istiqlal",
    name: "Parti de l'Istiqlal",
    nameAr: "حزب الاستقلال",
    nameEn: "Istiqlal Party",
    acronym: "PI",
    colorHex: "#009E49",
    leader: "Nizar Baraka",
    leaderAr: "نزار بركة",
    leaderEn: "Nizar Baraka",
    description:
      "Le plus ancien parti marocain, historiquement nationaliste et conservateur, aujourd'hui positionné au centre-droit avec un accent sur la souveraineté économique et l'agriculture.",
    descriptionAr:
      "أقدم حزب مغربي، ذو توجه وطني ومحافظ تاريخيا، يتموقع اليوم في يمين الوسط مع تركيز على السيادة الاقتصادية والفلاحة.",
    descriptionEn:
      "The oldest Moroccan party, historically nationalist and conservative, now positioned center-right with a focus on economic sovereignty and agriculture.",
    ideologyTags: ["conservateur", "nationaliste", "centre-droit"],
    ideologyTagsAr: ["محافظ", "وطني", "يمين الوسط"],
    ideologyTagsEn: ["conservative", "nationalist", "center-right"],
    foundedYear: 1944,
    lastElectionSeats: 81,
  },
  {
    id: "pjd",
    name: "Parti de la Justice et du Développement",
    nameAr: "حزب العدالة والتنمية",
    nameEn: "Justice and Development Party",
    acronym: "PJD",
    colorHex: "#8DC63F",
    leader: "Abdelilah Benkirane",
    leaderAr: "عبد الإله بنكيران",
    leaderEn: "Abdelilah Benkirane",
    description:
      "Parti à référence islamiste modérée, a dirigé le gouvernement de 2011 à 2021. Insiste sur la justice sociale, la lutte contre la vie chère et un rôle accru des valeurs religieuses dans la vie publique.",
    descriptionAr:
      "حزب ذو مرجعية إسلامية معتدلة، قاد الحكومة من 2011 إلى 2021. يركز على العدالة الاجتماعية ومحاربة غلاء المعيشة ودور أكبر للقيم الدينية في الحياة العامة.",
    descriptionEn:
      "A party with a moderate Islamist reference, led the government from 2011 to 2021. Emphasizes social justice, fighting the cost of living, and a bigger role for religious values in public life.",
    ideologyTags: ["islamiste modéré", "conservateur social", "justice sociale"],
    ideologyTagsAr: ["إسلامي معتدل", "محافظ اجتماعيا", "عدالة اجتماعية"],
    ideologyTagsEn: ["moderate Islamist", "socially conservative", "social justice"],
    foundedYear: 1967,
    lastElectionSeats: 13,
  },
  {
    id: "usfp",
    name: "Union Socialiste des Forces Populaires",
    nameAr: "الاتحاد الاشتراكي للقوات الشعبية",
    nameEn: "Socialist Union of Popular Forces",
    acronym: "USFP",
    colorHex: "#DA291C",
    leader: "Driss Lachguar",
    leaderAr: "إدريس لشكر",
    leaderEn: "Driss Lachguar",
    description:
      "Parti historique de la gauche marocaine, défend l'État social, les droits des travailleurs et une régionalisation renforcée.",
    descriptionAr:
      "حزب تاريخي لليسار المغربي، يدافع عن الدولة الاجتماعية وحقوق العمال وجهوية موسعة.",
    descriptionEn:
      "A historic party of the Moroccan left, defending the social state, workers' rights, and stronger regionalization.",
    ideologyTags: ["social-démocrate", "gauche historique"],
    ideologyTagsAr: ["اشتراكي ديمقراطي", "يسار تاريخي"],
    ideologyTagsEn: ["social democrat", "historic left"],
    foundedYear: 1975,
    lastElectionSeats: 35,
  },
  {
    id: "mp",
    name: "Mouvement Populaire",
    nameAr: "الحركة الشعبية",
    nameEn: "Popular Movement",
    acronym: "MP",
    colorHex: "#1C3F94",
    description:
      "Parti historiquement ancré dans le monde rural et les régions amazighophones, met l'avant le développement agricole et rural.",
    descriptionAr:
      "حزب ذو جذور تاريخية في العالم القروي والمناطق الأمازيغية، يركز على التنمية الفلاحية والقروية.",
    descriptionEn:
      "A party historically rooted in rural areas and Amazigh-speaking regions, prioritizing agricultural and rural development.",
    ideologyTags: ["rural", "amazigh", "centriste"],
    ideologyTagsAr: ["قروي", "أمازيغي", "وسطي"],
    ideologyTagsEn: ["rural", "Amazigh", "centrist"],
    foundedYear: 1957,
    lastElectionSeats: 28,
  },
  {
    id: "uc",
    name: "Union Constitutionnelle",
    nameAr: "الاتحاد الدستوري",
    nameEn: "Constitutional Union",
    acronym: "UC",
    colorHex: "#EE2A35",
    leader: "Mohamed Sajid",
    leaderAr: "محمد ساجد",
    leaderEn: "Mohamed Sajid",
    description:
      "Parti libéral de centre-droit, proche historiquement des milieux d'affaires et favorable à une économie de marché.",
    descriptionAr:
      "حزب ليبرالي من يمين الوسط، قريب تاريخيا من أوساط الأعمال ومؤيد لاقتصاد السوق.",
    descriptionEn:
      "A center-right liberal party, historically close to business circles and supportive of a market economy.",
    ideologyTags: ["libéral", "centre-droit"],
    ideologyTagsAr: ["ليبرالي", "يمين الوسط"],
    ideologyTagsEn: ["liberal", "center-right"],
    foundedYear: 1983,
    lastElectionSeats: 18,
  },
  {
    id: "pps",
    name: "Parti du Progrès et du Socialisme",
    nameAr: "حزب التقدم والاشتراكية",
    nameEn: "Party of Progress and Socialism",
    acronym: "PPS",
    colorHex: "#DA291C",
    description:
      "Parti de la gauche modérée, héritier du courant communiste marocain, aujourd'hui social-démocrate et participant régulier aux coalitions gouvernementales.",
    descriptionAr:
      "حزب من اليسار المعتدل، وريث التيار الشيوعي المغربي، أصبح اشتراكيا ديمقراطيا ومشاركا منتظما في الائتلافات الحكومية.",
    descriptionEn:
      "A moderate left party, heir to the Moroccan communist current, now social-democratic and a regular participant in governing coalitions.",
    ideologyTags: ["gauche modérée", "social-démocrate"],
    ideologyTagsAr: ["يسار معتدل", "اشتراكي ديمقراطي"],
    ideologyTagsEn: ["moderate left", "social democrat"],
    foundedYear: 1943,
    lastElectionSeats: 9,
  },
  {
    id: "fgd",
    name: "Fédération de la Gauche Démocratique",
    nameAr: "فدرالية اليسار الديمقراطي",
    nameEn: "Federation of the Democratic Left",
    acronym: "FGD",
    colorHex: "#B2192E",
    description:
      "Coalition de partis de gauche (PSU, CNI, PADS) prônant une ligne plus radicale sur la redistribution, les libertés individuelles et la lutte contre la corruption.",
    descriptionAr:
      "تحالف أحزاب يسارية (الاشتراكي الموحد، المؤتمر الوطني الاتحادي، الطليعة) يدافع عن خط أكثر جذرية في إعادة التوزيع والحريات الفردية ومحاربة الفساد.",
    descriptionEn:
      "A coalition of left-wing parties (PSU, CNI, PADS) advocating a more radical line on redistribution, individual freedoms, and the fight against corruption.",
    ideologyTags: ["gauche radicale", "progressiste"],
    ideologyTagsAr: ["يسار جذري", "تقدمي"],
    ideologyTagsEn: ["radical left", "progressive"],
    foundedYear: 2014,
    lastElectionSeats: 3,
  },
  {
    id: "pcs",
    name: "Parti du Centre Social",
    nameAr: "حزب الوسط الاجتماعي",
    nameEn: "Social Centre Party",
    acronym: "PCS",
    colorHex: "#6E6E6E",
    description:
      "Petit parti centriste axé sur les questions sociales et l'entrepreneuriat des jeunes.",
    descriptionAr: "حزب صغير وسطي يركز على القضايا الاجتماعية ومقاولاتية الشباب.",
    descriptionEn:
      "A small centrist party focused on social issues and youth entrepreneurship.",
    ideologyTags: ["centriste"],
    ideologyTagsAr: ["وسطي"],
    ideologyTagsEn: ["centrist"],
    foundedYear: 2020,
    lastElectionSeats: 1,
  },
  {
    id: "mds",
    name: "Mouvement Démocratique et Social",
    nameAr: "الحركة الديمقراطية الاجتماعية",
    nameEn: "Democratic and Social Movement",
    acronym: "MDS",
    colorHex: "#4A4A9C",
    description:
      "Petit parti centriste, historiquement positionné sur les questions de sécurité, d'ordre public et de réforme institutionnelle.",
    descriptionAr:
      "حزب صغير وسطي، اهتم تاريخيا بقضايا الأمن والنظام العام والإصلاح المؤسساتي.",
    descriptionEn:
      "A small centrist party, historically focused on security, public order, and institutional reform.",
    ideologyTags: ["centriste"],
    ideologyTagsAr: ["وسطي"],
    ideologyTagsEn: ["centrist"],
    foundedYear: 1996,
  },
  {
    id: "prv",
    name: "Parti Renaissance et Vertu",
    nameAr: "حزب البديل الحضاري",
    nameEn: "Renaissance and Virtue Party",
    acronym: "PRV",
    colorHex: "#7A9A3C",
    description:
      "Petit parti à référence islamique, positionné sur des questions de valeurs sociales et religieuses dans la vie publique.",
    descriptionAr:
      "حزب صغير ذو مرجعية إسلامية، يهتم بقضايا القيم الاجتماعية والدينية في الحياة العامة.",
    descriptionEn:
      "A small party with an Islamic reference, focused on social and religious values in public life.",
    ideologyTags: ["islamiste", "conservateur social"],
    ideologyTagsAr: ["إسلامي", "محافظ اجتماعيا"],
    ideologyTagsEn: ["Islamist", "socially conservative"],
  },
  {
    id: "ahd",
    name: "Al Ahd Addimocrati",
    nameAr: "حزب العهد الديمقراطي",
    nameEn: "Al Ahd Addimocrati (Democratic Covenant Party)",
    acronym: "AHD",
    colorHex: "#C77D2E",
    description:
      "Petit parti de centre-gauche, axé sur la réforme démocratique des institutions et la gouvernance locale.",
    descriptionAr:
      "حزب صغير من يسار الوسط، يركز على الإصلاح الديمقراطي للمؤسسات والحكامة المحلية.",
    descriptionEn:
      "A small center-left party focused on democratic reform of institutions and local governance.",
    ideologyTags: ["centre-gauche", "réformiste"],
    ideologyTagsAr: ["يسار الوسط", "إصلاحي"],
    ideologyTagsEn: ["center-left", "reformist"],
    foundedYear: 2008,
  },
  {
    id: "ffd",
    name: "Front des Forces Démocratiques",
    nameAr: "جبهة القوات الديمقراطية",
    nameEn: "Front of Democratic Forces",
    acronym: "FFD",
    colorHex: "#9C2B2B",
    description:
      "Petit parti de gauche historique, issu de la mouvance de l'Union Nationale des Forces Populaires.",
    descriptionAr:
      "حزب يساري صغير ذو جذور تاريخية، منبثق عن تيار الاتحاد الوطني للقوات الشعبية.",
    descriptionEn:
      "A small historic left party, stemming from the National Union of Popular Forces movement.",
    ideologyTags: ["gauche historique"],
    ideologyTagsAr: ["يسار تاريخي"],
    ideologyTagsEn: ["historic left"],
    foundedYear: 1997,
  },
  {
    id: "pt",
    name: "Parti Travailliste",
    nameAr: "الحزب العمالي",
    nameEn: "Labour Party",
    acronym: "PT",
    colorHex: "#B5332E",
    description:
      "Petit parti de gauche centré sur la défense des droits des travailleurs et la justice sociale.",
    descriptionAr: "حزب يساري صغير يركز على الدفاع عن حقوق العمال والعدالة الاجتماعية.",
    descriptionEn:
      "A small left party focused on defending workers' rights and social justice.",
    ideologyTags: ["gauche", "travailliste"],
    ideologyTagsAr: ["يسار", "عمالي"],
    ideologyTagsEn: ["left", "labour"],
    foundedYear: 2005,
  },
  {
    id: "pml",
    name: "Parti Marocain Libéral",
    nameAr: "الحزب المغربي الليبرالي",
    nameEn: "Moroccan Liberal Party",
    acronym: "PML",
    colorHex: "#2E86AB",
    description:
      "Petit parti libéral, axé sur les droits individuels, l'indépendance de la justice et la réforme de l'État de droit.",
    descriptionAr:
      "حزب ليبرالي صغير، يركز على الحقوق الفردية واستقلال القضاء وإصلاح دولة الحق والقانون.",
    descriptionEn:
      "A small liberal party focused on individual rights, judicial independence, and rule-of-law reform.",
    ideologyTags: ["libéral", "droits individuels"],
    ideologyTagsAr: ["ليبرالي", "حقوق فردية"],
    ideologyTagsEn: ["liberal", "individual rights"],
    foundedYear: 2016,
  },
];
