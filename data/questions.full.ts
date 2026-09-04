import type { Question } from "@/lib/types";

/**
 * "Test complet" — 100 questions, independently curated from the
 * 20-question "Test rapide" (not a superset): a deeper pass within each
 * category. See lib/ideology.ts for how party positions are derived.
 */
export const fullQuestions: Question[] = [
  // Économie & fiscalité (8)
  {
    id: "c-econ-1",
    category: "economie",
    text: "L'État doit accélérer la privatisation des entreprises publiques non stratégiques.",
    textAr: "يجب على الدولة تسريع خوصصة المقاولات العمومية غير الاستراتيجية.",
    textEn: "The state should speed up the privatization of non-strategic public companies.",
    explainer:
      "L'État marocain détient encore des participations dans des centaines d'entreprises publiques (Al Omrane, Barid Al-Maghrib, RAM...) ; des privatisations partielles ont déjà eu lieu par le passé (Maroc Telecom, banques).",
    explainerAr:
      "لا تزال الدولة المغربية تملك حصصا في مئات المقاولات العمومية (العمران، بريد بنك، الخطوط الملكية المغربية...)؛ وقد سبق أن جرت عمليات خوصصة جزئية في الماضي (اتصالات المغرب، بنوك).",
    explainerEn:
      "The Moroccan state still holds stakes in hundreds of public companies (Al Omrane, Barid Al-Maghrib, RAM...); partial privatizations have already happened in the past (Maroc Telecom, banks).",
    source: "Direction des Entreprises Publiques et de la Privatisation",
    sourceAr: "مديرية المنشآت العامة والخوصصة",
    sourceEn: "Directorate of Public Enterprises and Privatization",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-econ-2",
    category: "economie",
    text: "Le taux de TVA sur les produits de première nécessité doit être réduit, quitte à augmenter d'autres impôts.",
    textAr:
      "يجب تخفيض سعر الضريبة على القيمة المضافة على المواد الأساسية، ولو تطلب ذلك رفع ضرائب أخرى.",
    textEn:
      "VAT on basic necessities should be lowered, even if it means raising other taxes.",
    explainer:
      "La TVA au Maroc varie de 0 % à 20 % selon les produits ; le pain, le lait ou certains produits de base bénéficient déjà de taux réduits ou d'exonérations.",
    explainerAr:
      "تتراوح الضريبة على القيمة المضافة بالمغرب بين 0% و20% حسب المنتجات؛ ويستفيد الخبز والحليب وبعض المواد الأساسية بالفعل من أسعار مخفضة أو إعفاءات.",
    explainerEn:
      "VAT in Morocco ranges from 0% to 20% depending on the product; bread, milk, and some staples already benefit from reduced rates or exemptions.",
    source: "Code Général des Impôts",
    sourceAr: "المدونة العامة للضرائب",
    sourceEn: "General Tax Code",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-econ-3",
    category: "economie",
    text: "Le Maroc doit réduire sa dépendance aux importations de blé en investissant massivement dans la production céréalière nationale.",
    textAr:
      "يجب على المغرب تقليص اعتماده على استيراد القمح عبر استثمار ضخم في الإنتاج الوطني للحبوب.",
    textEn:
      "Morocco should reduce its dependence on wheat imports by investing massively in domestic cereal production.",
    explainer:
      "Le Maroc importe une large part de ses besoins en blé, notamment lors des années de sécheresse ; les prix mondiaux du blé influencent directement le prix du pain sur le marché intérieur.",
    explainerAr:
      "يستورد المغرب جزءا كبيرا من حاجياته من القمح، خصوصا خلال سنوات الجفاف؛ وتؤثر الأسعار العالمية للقمح مباشرة على ثمن الخبز في السوق الداخلية.",
    explainerEn:
      "Morocco imports a large share of its wheat needs, especially in drought years; world wheat prices directly affect the price of bread on the domestic market.",
    source: "Office National Interprofessionnel des Céréales et des Légumineuses (ONICL)",
    sourceAr: "المكتب الوطني المهني للحبوب والقطاني",
    sourceEn: "National Interprofessional Cereals and Pulses Office (ONICL)",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-econ-4",
    category: "economie",
    text: "Les zones franches et incitations fiscales aux investisseurs étrangers doivent être maintenues même si elles réduisent les recettes fiscales de l'État.",
    textAr:
      "يجب الإبقاء على المناطق الحرة والإعفاءات الضريبية للمستثمرين الأجانب حتى لو قلّصت مداخيل الدولة الضريبية.",
    textEn:
      "Free zones and tax incentives for foreign investors should be kept even if they reduce state tax revenue.",
    explainer:
      "Des zones comme Tanger Med bénéficient d'exonérations fiscales pour attirer les investisseurs étrangers, notamment dans l'automobile (Renault, Stellantis) et l'aéronautique.",
    explainerAr:
      "تستفيد مناطق مثل طنجة المتوسط من إعفاءات ضريبية لجذب المستثمرين الأجانب، خصوصا في قطاع السيارات (رونو، ستيلانتيس) والطيران.",
    explainerEn:
      "Zones like Tanger Med benefit from tax exemptions to attract foreign investors, notably in the automotive (Renault, Stellantis) and aerospace industries.",
    source: "Agence Marocaine de Développement des Investissements et des Exportations (AMDIE)",
    sourceAr: "الوكالة المغربية لتنمية الاستثمارات والصادرات",
    sourceEn: "Moroccan Investment and Export Development Agency (AMDIE)",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-econ-5",
    category: "economie",
    text: "Le secteur informel doit être intégré à l'économie formelle par des mesures incitatives plutôt que par des contrôles renforcés.",
    textAr:
      "يجب إدماج القطاع غير المهيكل في الاقتصاد المهيكل عبر تدابير تحفيزية بدل تشديد المراقبة.",
    textEn:
      "The informal sector should be integrated into the formal economy through incentives rather than stricter controls.",
    explainer:
      "Une large part de l'économie marocaine reste informelle selon le Haut-Commissariat au Plan ; l'auto-entrepreneuriat a été créé en 2015 pour faciliter le passage vers le formel.",
    explainerAr:
      "يبقى جزء كبير من الاقتصاد المغربي غير مهيكل حسب المندوبية السامية للتخطيط؛ وقد أُحدثت صفة المقاول الذاتي سنة 2015 لتسهيل الانتقال نحو القطاع المهيكل.",
    explainerEn:
      "A large share of the Moroccan economy remains informal according to the High Commission for Planning; the self-employed entrepreneur status was created in 2015 to ease the shift to the formal sector.",
    source: "Statut de l'auto-entrepreneur — loi n° 114-13",
    sourceAr: "نظام المقاول الذاتي — القانون رقم 114.13",
    sourceEn: "Self-employed entrepreneur status — law 114-13",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-econ-6",
    category: "economie",
    text: "L'État doit plafonner les marges bénéficiaires sur les produits alimentaires de base.",
    textAr: "يجب على الدولة وضع سقف لهوامش الربح على المواد الغذائية الأساسية.",
    textEn: "The state should cap profit margins on basic food products.",
    explainer:
      "Le Conseil de la concurrence a enquêté à plusieurs reprises sur les marges de la distribution alimentaire, notamment lors des pics de prix des fruits et légumes.",
    explainerAr:
      "حقق مجلس المنافسة في عدة مناسبات في هوامش ربح التوزيع الغذائي، خصوصا خلال ارتفاع أسعار الخضر والفواكه.",
    explainerEn:
      "The Competition Council has investigated food distribution margins several times, especially during spikes in fruit and vegetable prices.",
    source: "Conseil de la concurrence",
    sourceAr: "مجلس المنافسة",
    sourceEn: "Competition Council",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-econ-7",
    category: "economie",
    text: "La Bourse de Casablanca et les marchés financiers doivent être davantage ouverts aux investisseurs étrangers.",
    textAr: "يجب المزيد من انفتاح بورصة الدار البيضاء والأسواق المالية على المستثمرين الأجانب.",
    textEn: "The Casablanca Stock Exchange and financial markets should be opened up further to foreign investors.",
    explainer:
      "La Bourse de Casablanca reste l'une des plus petites d'Afrique en nombre de sociétés cotées ; les autorités cherchent régulièrement à attirer davantage d'investisseurs internationaux.",
    explainerAr:
      "تبقى بورصة الدار البيضاء من بين الأصغر في إفريقيا من حيث عدد الشركات المدرجة؛ وتسعى السلطات بانتظام لجذب مزيد من المستثمرين الدوليين.",
    explainerEn:
      "The Casablanca Stock Exchange remains one of the smallest in Africa by number of listed companies; authorities regularly try to attract more international investors.",
    source: "Autorité Marocaine du Marché des Capitaux (AMMC)",
    sourceAr: "الهيئة المغربية لسوق الرساميل",
    sourceEn: "Moroccan Capital Market Authority (AMMC)",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-econ-8",
    category: "economie",
    text: "Le Maroc doit renforcer ses entreprises publiques stratégiques (OCP, ONEE, ONCF) plutôt que d'envisager leur ouverture au capital privé.",
    textAr:
      "يجب على المغرب تعزيز مقاولاته العمومية الاستراتيجية (المكتب الشريف للفوسفاط، المكتب الوطني للكهرباء والماء، المكتب الوطني للسكك الحديدية) بدل التفكير في فتح رأسمالها للخواص.",
    textEn:
      "Morocco should strengthen its strategic public companies (OCP, ONEE, ONCF) rather than consider opening their capital to private investors.",
    explainer:
      "L'OCP (phosphates), l'ONEE (électricité et eau) et l'ONCF (rail) restent des piliers publics de l'économie marocaine, même si des débats existent sur l'ouverture partielle de leur capital.",
    explainerAr:
      "يبقى المكتب الشريف للفوسفاط والمكتب الوطني للكهرباء والماء والمكتب الوطني للسكك الحديدية ركائز عمومية للاقتصاد المغربي، رغم وجود نقاش حول فتح جزئي لرأسمالها.",
    explainerEn:
      "OCP (phosphates), ONEE (electricity and water), and ONCF (rail) remain public pillars of the Moroccan economy, even though debate exists over partially opening their capital.",
    source: "Loi-cadre n° 50-21 relative aux établissements et entreprises publics",
    sourceAr: "القانون الإطار رقم 50.21 المتعلق بالمنشآت والمقاولات العمومية",
    sourceEn: "Framework law 50-21 on public institutions and enterprises",
    axis: "econ",
    axisPolarity: -1,
  },

  // Protection sociale (8)
  {
    id: "c-social-1",
    category: "social",
    text: "Le Registre Social Unifié et l'aide sociale directe doivent remplacer progressivement toutes les subventions générales.",
    textAr:
      "يجب أن يحل السجل الاجتماعي الموحد والدعم الاجتماعي المباشر تدريجيا محل كل أشكال الدعم العام.",
    textEn:
      "The Unified Social Registry and direct social aid should gradually replace all general subsidies.",
    explainer:
      "Le gouvernement compte sur le RSU pour mener une réforme complète de la Caisse de Compensation, en remplaçant progressivement les subventions générales par des transferts monétaires ciblés.",
    explainerAr:
      "تراهن الحكومة على السجل الاجتماعي الموحد لإجراء إصلاح شامل لصندوق المقاصة، عبر استبدال الدعم العام تدريجيا بتحويلات مالية موجهة.",
    explainerEn:
      "The government is relying on the RSU to carry out a full reform of the Caisse de Compensation, gradually replacing general subsidies with targeted cash transfers.",
    source: "Registre Social Unifié (RSU) — social.gov.ma",
    sourceAr: "السجل الاجتماعي الموحد — social.gov.ma",
    sourceEn: "Unified Social Registry (RSU) — social.gov.ma",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-social-2",
    category: "social",
    text: "Les allocations familiales doivent être universelles, sans condition de ressources.",
    textAr: "يجب أن تكون التعويضات العائلية شاملة للجميع دون شرط الدخل.",
    textEn: "Family allowances should be universal, with no means test.",
    explainer:
      "Les allocations familiales au Maroc sont aujourd'hui liées au statut d'emploi (CNSS, fonction publique) plutôt qu'universelles ; des programmes de soutien social direct ciblent certaines familles selon des critères sociaux.",
    explainerAr:
      "ترتبط التعويضات العائلية بالمغرب حاليا بالوضعية المهنية (الصندوق الوطني للضمان الاجتماعي، الوظيفة العمومية) وليست شاملة للجميع؛ بينما تستهدف برامج الدعم الاجتماعي المباشر أسرا محددة وفق معايير اجتماعية.",
    explainerEn:
      "Family allowances in Morocco are currently tied to employment status (CNSS, civil service) rather than universal; direct social support programs target certain families based on social criteria.",
    source: "CNSS / programme de soutien social direct",
    sourceAr: "الصندوق الوطني للضمان الاجتماعي / برنامج الدعم الاجتماعي المباشر",
    sourceEn: "CNSS / direct social support program",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-social-3",
    category: "social",
    text: "Les pensions de retraite minimales doivent être revalorisées même si cela creuse le déficit des caisses de retraite.",
    textAr: "يجب رفع الحد الأدنى لمعاشات التقاعد حتى لو زاد ذلك من عجز صناديق التقاعد.",
    textEn:
      "Minimum pensions should be raised even if it deepens the pension funds' deficit.",
    explainer:
      "La pension minimale de la CNSS a déjà été relevée à plusieurs reprises ces dernières années, mais reste jugée insuffisante par plusieurs syndicats face au coût de la vie.",
    explainerAr:
      "تم رفع الحد الأدنى لمعاش الصندوق الوطني للضمان الاجتماعي عدة مرات في السنوات الأخيرة، لكنه لا يزال يُعتبر غير كاف من طرف عدة نقابات في مواجهة غلاء المعيشة.",
    explainerEn:
      "The CNSS minimum pension has already been raised several times in recent years, but several unions still consider it insufficient given the cost of living.",
    source: "CNSS — régime des pensions",
    sourceAr: "الصندوق الوطني للضمان الاجتماعي — نظام المعاشات",
    sourceEn: "CNSS — pension scheme",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-social-4",
    category: "social",
    text: "Les cotisations sociales des entreprises doivent être allégées pour encourager l'embauche formelle.",
    textAr: "يجب تخفيف التحملات الاجتماعية على المقاولات لتشجيع التوظيف المهيكل.",
    textEn:
      "Employer social contributions should be reduced to encourage formal hiring.",
    explainer:
      "Les charges sociales patronales sont régulièrement citées par la CGEM (patronat) comme un frein à l'embauche formelle, notamment pour les petites entreprises.",
    explainerAr:
      "تُعتبر التحملات الاجتماعية على المشغلين من طرف الاتحاد العام لمقاولات المغرب عائقا أمام التشغيل المهيكل، خصوصا بالنسبة للمقاولات الصغرى.",
    explainerEn:
      "Employer social charges are regularly cited by the CGEM (employers' federation) as a barrier to formal hiring, especially for small businesses.",
    source: "Confédération Générale des Entreprises du Maroc (CGEM)",
    sourceAr: "الاتحاد العام لمقاولات المغرب",
    sourceEn: "General Confederation of Moroccan Enterprises (CGEM)",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-social-5",
    category: "social",
    text: "L'État doit instaurer une allocation chômage universelle pour tous les demandeurs d'emploi.",
    textAr: "يجب على الدولة إحداث تعويض شامل عن البطالة لكل الباحثين عن الشغل.",
    textEn:
      "The state should introduce a universal unemployment benefit for all job seekers.",
    explainer:
      "L'indemnité pour perte d'emploi (IPE) existe déjà pour les salariés du privé cotisant à la CNSS, mais reste limitée dans le temps et exclut les personnes n'ayant jamais eu d'emploi déclaré.",
    explainerAr:
      "يتوفر المغرب بالفعل على تعويض عن فقدان الشغل لفائدة أجراء القطاع الخاص المنخرطين في الصندوق الوطني للضمان الاجتماعي، لكنه محدود في الزمن ويستثني من لم يسبق له العمل بشكل مصرح به.",
    explainerEn:
      "Unemployment benefit (IPE) already exists for CNSS-registered private-sector employees, but it is time-limited and excludes people who have never held a declared job.",
    source: "CNSS — Indemnité pour Perte d'Emploi (IPE)",
    sourceAr: "الصندوق الوطني للضمان الاجتماعي — التعويض عن فقدان الشغل",
    sourceEn: "CNSS — Unemployment Benefit (IPE)",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-social-6",
    category: "social",
    text: "Le système de santé doit rester majoritairement financé par les cotisations plutôt que par l'impôt général.",
    textAr: "يجب أن يبقى تمويل منظومة الصحة معتمدا أساسا على الاشتراكات بدل الضريبة العامة.",
    textEn:
      "The healthcare system should stay mainly funded by contributions rather than general taxation.",
    explainer:
      "L'AMO est financée par les cotisations des assurés et des employeurs, avec une prise en charge par l'État pour les non-cotisants depuis la généralisation de 2022.",
    explainerAr:
      "يُموَّل التأمين الإجباري عن المرض عبر اشتراكات المؤمَّنين والمشغلين، مع تكفل الدولة بالفئات غير المساهمة منذ تعميمه سنة 2022.",
    explainerEn:
      "AMO is funded by contributions from the insured and employers, with the state covering non-contributors since its 2022 rollout to everyone.",
    source: "Loi n° 27-22 sur l'AMO",
    sourceAr: "القانون رقم 27.22 المتعلق بالتأمين الإجباري عن المرض",
    sourceEn: "Law 27-22 on mandatory health insurance",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-social-7",
    category: "social",
    text: "Les associations caritatives et le tissu associatif doivent jouer un rôle plus important que l'État dans l'aide aux plus démunis.",
    textAr: "يجب أن تلعب الجمعيات الخيرية والنسيج الجمعوي دورا أكبر من الدولة في مساعدة الفئات الأكثر فقرا.",
    textEn:
      "Charities and civil-society groups should play a bigger role than the state in helping the neediest.",
    explainer:
      "Des associations comme la Fondation Mohammed V pour la Solidarité jouent un rôle historique important dans l'aide sociale directe, aux côtés des programmes publics.",
    explainerAr:
      "تلعب جمعيات مثل مؤسسة محمد الخامس للتضامن دورا تاريخيا مهما في المساعدة الاجتماعية المباشرة، إلى جانب البرامج العمومية.",
    explainerEn:
      "Organizations like the Mohammed V Foundation for Solidarity have long played an important role in direct social assistance, alongside public programs.",
    source: "Fondation Mohammed V pour la Solidarité",
    sourceAr: "مؤسسة محمد الخامس للتضامن",
    sourceEn: "Mohammed V Foundation for Solidarity",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-social-8",
    category: "social",
    text: "La lutte contre la précarité des travailleurs domestiques doit être une priorité législative.",
    textAr: "يجب أن تكون محاربة هشاشة وضعية خدم البيوت أولوية تشريعية.",
    textEn:
      "Fighting the precarious status of domestic workers should be a legislative priority.",
    explainer:
      "La loi n° 19-12 encadre depuis 2018 le travail domestique (contrat écrit, salaire minimum, repos hebdomadaire), mais son application reste jugée limitée par plusieurs associations.",
    explainerAr:
      "تؤطر مدونة الشغل بموجب القانون رقم 19.12 منذ 2018 عمل خدم البيوت (عقد كتابي، أجر أدنى، راحة أسبوعية)، لكن تطبيقها لا يزال يُعتبر محدودا من طرف عدة جمعيات.",
    explainerEn:
      "Law 19-12 has regulated domestic work since 2018 (written contract, minimum wage, weekly rest), but several associations still consider its enforcement limited.",
    source: "Loi n° 19-12 sur le travail domestique",
    sourceAr: "القانون رقم 19.12 المتعلق بتشغيل خدم البيوت",
    sourceEn: "Law 19-12 on domestic work",
    axis: "social",
    axisPolarity: 1,
  },

  // Éducation & langues (7)
  {
    id: "c-edu-1",
    category: "education",
    text: "L'enseignement préscolaire doit devenir obligatoire et généralisé, financé par l'État.",
    textAr: "يجب أن يصبح التعليم الأولي إلزاميا ومعمما، بتمويل من الدولة.",
    textEn: "Preschool education should become compulsory and universal, funded by the state.",
    explainer:
      "La loi-cadre 51-17 sur l'éducation prévoit la généralisation du préscolaire d'ici la fin de la décennie, un chantier encore inachevé notamment en milieu rural.",
    explainerAr:
      "ينص القانون الإطار رقم 51.17 المتعلق بالتربية والتكوين على تعميم التعليم الأولي في أفق نهاية العقد، وهو ورش لا يزال غير مكتمل خصوصا بالعالم القروي.",
    explainerEn:
      "Framework law 51-17 on education calls for universal preschool by the end of the decade, a project still unfinished especially in rural areas.",
    source: "Loi-cadre n° 51-17",
    sourceAr: "القانون الإطار رقم 51.17",
    sourceEn: "Framework law 51-17",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-edu-2",
    category: "education",
    text: "Les écoles privées doivent être davantage encouragées par des partenariats public-privé.",
    textAr: "يجب تشجيع المدارس الخصوصية أكثر عبر شراكات بين القطاعين العام والخاص.",
    textEn: "Private schools should be encouraged further through public-private partnerships.",
    explainer:
      "Le nombre d'élèves scolarisés dans le privé a fortement augmenté ces vingt dernières années, en particulier dans les grandes villes, creusant un écart avec l'école publique.",
    explainerAr:
      "ارتفع عدد التلاميذ المسجلين بالتعليم الخصوصي بشكل كبير خلال العشرين سنة الأخيرة، خصوصا في المدن الكبرى، مما وسّع الفجوة مع المدرسة العمومية.",
    explainerEn:
      "The number of students in private schools has grown sharply over the past twenty years, especially in big cities, widening the gap with public schools.",
    source: "Ministère de l'Éducation nationale — carte scolaire",
    sourceAr: "وزارة التربية الوطنية — الخريطة المدرسية",
    sourceEn: "Ministry of National Education — school map",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-edu-3",
    category: "education",
    text: "L'enseignement de l'amazighe doit être généralisé dans toutes les écoles publiques du royaume.",
    textAr: "يجب تعميم تدريس الأمازيغية في جميع المدارس العمومية بالمملكة.",
    textEn: "Amazigh-language teaching should be made universal in all public schools in the kingdom.",
    explainer:
      "L'amazighe est langue officielle depuis la Constitution de 2011, mais son enseignement reste encore partiel, limité à certaines écoles et certains niveaux malgré les engagements pris.",
    explainerAr:
      "الأمازيغية لغة رسمية منذ دستور 2011، لكن تدريسها لا يزال جزئيا، محصورا في بعض المدارس والمستويات رغم الالتزامات المعلنة.",
    explainerEn:
      "Amazigh has been an official language since the 2011 Constitution, but its teaching remains partial, limited to certain schools and grade levels despite the commitments made.",
    source: "Constitution de 2011, article 5 / IRCAM",
    sourceAr: "دستور 2011، الفصل 5 / المعهد الملكي للثقافة الأمازيغية",
    sourceEn: "2011 Constitution, article 5 / Royal Institute of Amazigh Culture (IRCAM)",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "c-edu-4",
    category: "education",
    text: "Les enseignants doivent pouvoir faire grève sans limitation, même pendant les périodes d'examens.",
    textAr: "يجب تمكين الأساتذة من الإضراب دون قيود، حتى خلال فترات الامتحانات.",
    textEn: "Teachers should be able to strike without restriction, even during exam periods.",
    explainer:
      "Les grèves des enseignants, notamment celles de 2023-2024 contre le nouveau statut unifié, ont fortement perturbé le calendrier scolaire, relançant le débat sur l'encadrement du droit de grève dans les services essentiels.",
    explainerAr:
      "أثرت إضرابات الأساتذة، خصوصا خلال 2023-2024 احتجاجا على النظام الأساسي الموحد، بشكل كبير على البرنامج الدراسي، مما أعاد فتح النقاش حول تأطير حق الإضراب في الخدمات الأساسية.",
    explainerEn:
      "Teacher strikes, notably those of 2023-2024 against the new unified status, badly disrupted the school calendar, reviving debate over regulating the right to strike in essential services.",
    source: "Statut unifié des enseignants (2023) / projet de loi organique sur le droit de grève",
    sourceAr: "النظام الأساسي الموحد للأساتذة (2023) / مشروع القانون التنظيمي للإضراب",
    sourceEn: "Unified teacher status (2023) / draft organic law on the right to strike",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "c-edu-5",
    category: "education",
    text: "Le budget de la recherche scientifique universitaire doit doubler dans les cinq prochaines années, même si cela réduit d'autres postes budgétaires.",
    textAr: "يجب مضاعفة ميزانية البحث العلمي الجامعي خلال الخمس سنوات المقبلة، حتى لو استلزم ذلك تقليص بنود أخرى.",
    textEn:
      "The university scientific research budget should double over the next five years, even if it means cutting other budget items.",
    explainer:
      "Le Maroc consacre une part de son PIB à la recherche parmi les plus faibles de la région comparé à des pays comme la Tunisie, ce qui freine le classement international de ses universités.",
    explainerAr:
      "يخصص المغرب حصة من ناتجه الداخلي الخام للبحث العلمي من بين الأضعف في المنطقة مقارنة ببلدان مثل تونس، مما يؤثر على تصنيف جامعاته دوليا.",
    explainerEn:
      "Morocco devotes one of the lowest shares of GDP to research in the region compared to countries like Tunisia, which weighs on its universities' international rankings.",
    source: "Centre National pour la Recherche Scientifique et Technique (CNRST)",
    sourceAr: "المركز الوطني للبحث العلمي والتقني",
    sourceEn: "National Center for Scientific and Technical Research (CNRST)",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-edu-6",
    category: "education",
    text: "La formation professionnelle doit être pilotée principalement par les entreprises et leurs besoins, plutôt que par l'État.",
    textAr: "يجب أن تُقاد التكوين المهني أساسا من طرف المقاولات وحاجياتها، بدل الدولة.",
    textEn:
      "Vocational training should be driven mainly by businesses and their needs, rather than by the state.",
    explainer:
      "L'Office de la Formation Professionnelle (OFPPT) a multiplié les partenariats avec des secteurs comme l'automobile ou l'aéronautique pour adapter les cursus aux besoins des employeurs.",
    explainerAr:
      "ضاعف مكتب التكوين المهني وإنعاش الشغل شراكاته مع قطاعات مثل السيارات والطيران لملاءمة المسالك التكوينية مع حاجيات المشغلين.",
    explainerEn:
      "The Vocational Training Office (OFPPT) has multiplied partnerships with sectors like automotive and aerospace to tailor curricula to employers' needs.",
    source: "Office de la Formation Professionnelle et de la Promotion du Travail (OFPPT)",
    sourceAr: "مكتب التكوين المهني وإنعاش الشغل",
    sourceEn: "Vocational Training and Employment Promotion Office (OFPPT)",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-edu-7",
    category: "education",
    text: "L'enseignement supérieur public doit rester gratuit pour tous les étudiants marocains.",
    textAr: "يجب أن يبقى التعليم العالي العمومي مجانيا لجميع الطلبة المغاربة.",
    textEn: "Public higher education should remain free for all Moroccan students.",
    explainer:
      "L'enseignement supérieur public reste gratuit au Maroc (hors quelques établissements à accès régulé), un principe régulièrement débattu face aux contraintes budgétaires des universités.",
    explainerAr:
      "يبقى التعليم العالي العمومي مجانيا بالمغرب (باستثناء بعض المؤسسات ذات الولوج المحدود)، وهو مبدأ يُطرح للنقاش بانتظام في ظل الإكراهات المالية للجامعات.",
    explainerEn:
      "Public higher education remains free in Morocco (except for a few selective-entry institutions), a principle regularly debated given universities' budget constraints.",
    source: "Ministère de l'Enseignement supérieur",
    sourceAr: "وزارة التعليم العالي",
    sourceEn: "Ministry of Higher Education",
    axis: "econ",
    axisPolarity: -1,
  },

  // Santé (7)
  {
    id: "c-sante-1",
    category: "sante",
    text: "L'État doit construire davantage d'hôpitaux publics dans les zones rurales en priorité.",
    textAr: "يجب على الدولة بناء المزيد من المستشفيات العمومية في المناطق القروية على سبيل الأولوية.",
    textEn: "The state should prioritize building more public hospitals in rural areas.",
    explainer:
      "L'accès aux soins reste très inégal entre zones urbaines et rurales ; certaines provinces ne disposent que d'un seul hôpital pour toute une région montagneuse ou enclavée.",
    explainerAr:
      "لا يزال الولوج إلى العلاج متفاوتا بشكل كبير بين المناطق الحضرية والقروية؛ إذ لا تتوفر بعض الأقاليم إلا على مستشفى واحد لكامل منطقة جبلية أو معزولة.",
    explainerEn:
      "Access to care remains highly unequal between urban and rural areas; some provinces have only a single hospital for an entire mountainous or landlocked region.",
    source: "Ministère de la Santé — carte sanitaire",
    sourceAr: "وزارة الصحة — الخريطة الصحية",
    sourceEn: "Ministry of Health — health map",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-sante-2",
    category: "sante",
    text: "Les médecins formés au Maroc doivent être obligés d'exercer plusieurs années dans le secteur public avant de rejoindre le privé.",
    textAr: "يجب إلزام الأطباء المتخرجين بالمغرب بالعمل عدة سنوات في القطاع العام قبل الالتحاق بالخاص.",
    textEn:
      "Doctors trained in Morocco should be required to practice several years in the public sector before joining the private one.",
    explainer:
      "Le Maroc connaît une émigration importante de jeunes médecins vers l'Europe et le Golfe ; des mesures d'incitation ou d'obligation de service public sont régulièrement proposées pour y faire face.",
    explainerAr:
      "يشهد المغرب هجرة مهمة للأطباء الشباب نحو أوروبا ودول الخليج؛ وتُقترح بانتظام تدابير تحفيزية أو إلزامية للخدمة العمومية لمواجهة هذه الظاهرة.",
    explainerEn:
      "Morocco sees significant emigration of young doctors to Europe and the Gulf; incentive or mandatory public-service measures are regularly proposed to address this.",
    source: "Ministère de la Santé — plan de résorption du déficit en ressources humaines",
    sourceAr: "وزارة الصحة — مخطط سد الخصاص في الموارد البشرية",
    sourceEn: "Ministry of Health — plan to address the healthcare staffing shortage",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-sante-3",
    category: "sante",
    text: "Les cliniques privées doivent être davantage intégrées dans la couverture de l'Assurance Maladie Obligatoire.",
    textAr: "يجب إدماج العيادات الخاصة أكثر في تغطية التأمين الإجباري عن المرض.",
    textEn: "Private clinics should be integrated further into mandatory health insurance coverage.",
    explainer:
      "Certaines cliniques privées refusent encore les patients couverts par l'AMO-Tadamon (l'ex-RAMED), invoquant des tarifs de remboursement jugés trop bas.",
    explainerAr:
      "لا تزال بعض العيادات الخاصة ترفض استقبال المرضى المستفيدين من التأمين الإجباري عن المرض تضامن (راميد سابقا)، بذريعة أن أسعار التعويض منخفضة جدا.",
    explainerEn:
      "Some private clinics still turn away patients covered by AMO-Tadamon (formerly RAMED), citing reimbursement rates they consider too low.",
    source: "Agence Nationale de l'Assurance Maladie (ANAM)",
    sourceAr: "الوكالة الوطنية للتأمين الصحي",
    sourceEn: "National Health Insurance Agency (ANAM)",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-sante-4",
    category: "sante",
    text: "La santé mentale doit devenir une priorité de santé publique avec un budget dédié significatif.",
    textAr: "يجب أن تصبح الصحة النفسية أولوية صحية عمومية بميزانية مخصصة مهمة.",
    textEn: "Mental health should become a public health priority with a significant dedicated budget.",
    explainer:
      "Le Maroc compte un nombre de psychiatres par habitant parmi les plus faibles de la région, et les structures de santé mentale restent concentrées dans quelques grandes villes.",
    explainerAr:
      "يتوفر المغرب على عدد من الأطباء النفسانيين لكل نسمة من بين الأضعف في المنطقة، وتبقى بنيات الصحة النفسية مرتكزة في عدد قليل من المدن الكبرى.",
    explainerEn:
      "Morocco has one of the lowest ratios of psychiatrists per capita in the region, and mental health facilities remain concentrated in a handful of large cities.",
    source: "Ministère de la Santé — plan santé mentale",
    sourceAr: "وزارة الصحة — المخطط الوطني للصحة النفسية",
    sourceEn: "Ministry of Health — national mental health plan",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "c-sante-5",
    category: "sante",
    text: "L'importation de médicaments génériques doit être facilitée pour réduire les prix, même si cela affecte l'industrie pharmaceutique nationale.",
    textAr: "يجب تسهيل استيراد الأدوية الجنيسة لخفض الأثمنة، حتى لو أثر ذلك على الصناعة الصيدلية الوطنية.",
    textEn:
      "Importing generic drugs should be made easier to lower prices, even if it affects the domestic pharmaceutical industry.",
    explainer:
      "Les prix des médicaments ont fait l'objet de plusieurs baisses réglementaires ces dernières années, mais restent un sujet de tension entre l'industrie pharmaceutique locale et les associations de consommateurs.",
    explainerAr:
      "شهدت أثمنة الأدوية عدة تخفيضات تنظيمية في السنوات الأخيرة، لكنها تبقى موضوع توتر بين الصناعة الصيدلية المحلية وجمعيات حماية المستهلك.",
    explainerEn:
      "Drug prices have seen several regulatory cuts in recent years, but remain a point of tension between the local pharmaceutical industry and consumer protection groups.",
    source: "Ministère de la Santé — politique du médicament",
    sourceAr: "وزارة الصحة — سياسة الدواء",
    sourceEn: "Ministry of Health — drug policy",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-sante-6",
    category: "sante",
    text: "La formation de nouveaux médecins doit être une priorité budgétaire même si cela signifie réduire les dépenses ailleurs dans le secteur de la santé.",
    textAr: "يجب أن يكون تكوين أطباء جدد أولوية في الميزانية حتى لو استلزم تقليص نفقات أخرى في قطاع الصحة.",
    textEn:
      "Training new doctors should be a budget priority even if it means cutting other health spending.",
    explainer:
      "Le Maroc a ouvert plusieurs nouvelles facultés de médecine ces dernières années (Béni Mellal, Errachidia...) pour tenter de combler le déficit en professionnels de santé.",
    explainerAr:
      "فتح المغرب عدة كليات جديدة للطب في السنوات الأخيرة (بني ملال، الراشيدية...) في محاولة لسد الخصاص في الأطر الصحية.",
    explainerEn:
      "Morocco has opened several new medical schools in recent years (Béni Mellal, Errachidia...) in an effort to close the gap in health professionals.",
    source: "Ministère de l'Enseignement supérieur / Ministère de la Santé",
    sourceAr: "وزارة التعليم العالي / وزارة الصحة",
    sourceEn: "Ministry of Higher Education / Ministry of Health",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-sante-7",
    category: "sante",
    text: "La légalisation de l'usage médical du cannabis doit être élargie au-delà du cadre actuel.",
    textAr: "يجب توسيع الترخيص للاستعمال الطبي للقنب الهندي إلى ما هو أبعد من الإطار الحالي.",
    textEn: "Legal medical use of cannabis should be expanded beyond the current framework.",
    explainer:
      "Depuis 2021, la loi n° 13-21 autorise l'usage médical, cosmétique et industriel du cannabis dans un cadre réglementé par l'Agence Nationale de Régulation des Activités du Cannabis (ANRAC).",
    explainerAr:
      "منذ 2021، يجيز القانون رقم 13.21 الاستعمال الطبي والتجميلي والصناعي للقنب الهندي في إطار منظم من طرف الوكالة الوطنية لتقنين أنشطة القنب الهندي.",
    explainerEn:
      "Since 2021, law 13-21 has allowed medical, cosmetic, and industrial use of cannabis under a framework regulated by the National Agency for the Regulation of Cannabis Activities (ANRAC).",
    source: "Loi n° 13-21 / ANRAC",
    sourceAr: "القانون رقم 13.21 / الوكالة الوطنية لتقنين أنشطة القنب الهندي",
    sourceEn: "Law 13-21 / ANRAC",
    axis: "social",
    axisPolarity: 1,
  },

  // Agriculture & monde rural (6)
  {
    id: "c-agri-1",
    category: "agriculture",
    text: "Les petits exploitants agricoles doivent bénéficier de subventions prioritaires par rapport aux grandes exploitations exportatrices.",
    textAr: "يجب أن يستفيد صغار الفلاحين من دعم ذي أولوية مقارنة مع الضيعات الكبرى المصدِّرة.",
    textEn: "Small farmers should get priority subsidies over large export-oriented farms.",
    explainer:
      "La stratégie Génération Green (2020-2030) a succédé au Plan Maroc Vert avec un accent renouvelé sur le soutien à la classe moyenne agricole et aux petites exploitations.",
    explainerAr:
      "خلفت استراتيجية الجيل الأخضر (2020-2030) مخطط المغرب الأخضر مع تركيز متجدد على دعم الطبقة الوسطى الفلاحية والضيعات الصغرى.",
    explainerEn:
      "The Génération Green strategy (2020-2030) succeeded the Plan Maroc Vert with renewed emphasis on supporting the agricultural middle class and small farms.",
    source: "Stratégie Génération Green 2020-2030",
    sourceAr: "استراتيجية الجيل الأخضر 2020-2030",
    sourceEn: "Génération Green 2020-2030 strategy",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-agri-2",
    category: "agriculture",
    text: "L'irrigation goutte-à-goutte et les techniques économes en eau doivent être obligatoires pour toute nouvelle exploitation agricole.",
    textAr: "يجب أن يكون السقي بالتنقيط وتقنيات ترشيد الماء إلزاميا لكل ضيعة فلاحية جديدة.",
    textEn:
      "Drip irrigation and water-saving techniques should be mandatory for any new farm.",
    explainer:
      "Le Maroc a fortement investi dans l'irrigation localisée ces vingt dernières années, mais son adoption reste inégale selon les régions et les types de cultures.",
    explainerAr:
      "استثمر المغرب بشكل كبير في السقي الموضعي خلال العشرين سنة الأخيرة، لكن اعتماده يبقى متفاوتا حسب الجهات وأنواع الزراعات.",
    explainerEn:
      "Morocco has invested heavily in localized irrigation over the past twenty years, but adoption remains uneven across regions and crop types.",
    source: "Programme National d'Économie d'Eau d'Irrigation (PNEEI)",
    sourceAr: "البرنامج الوطني للاقتصاد في مياه السقي",
    sourceEn: "National Program for Irrigation Water Savings (PNEEI)",
    axis: "environnement",
    axisPolarity: 1,
  },
  {
    id: "c-agri-3",
    category: "agriculture",
    text: "Les exportations agricoles à forte consommation d'eau (comme la pastèque ou l'avocat) doivent être limitées en période de sécheresse.",
    textAr: "يجب تقييد الصادرات الفلاحية الشرهة للماء (كالبطيخ الأحمر أو الأفوكادو) في فترات الجفاف.",
    textEn:
      "Water-intensive agricultural exports (like watermelon or avocado) should be limited during droughts.",
    explainer:
      "Après plusieurs années de sécheresse sévère, le débat sur les cultures exportatrices très consommatrices d'eau s'est intensifié, notamment dans des régions comme Zagora.",
    explainerAr:
      "بعد عدة سنوات من الجفاف الحاد، تصاعد النقاش حول الزراعات التصديرية الشرهة للماء، خصوصا في مناطق مثل زاكورة.",
    explainerEn:
      "After several years of severe drought, debate over highly water-intensive export crops has intensified, notably in regions like Zagora.",
    source: "Agences des Bassins Hydrauliques — rapports sur le stress hydrique",
    sourceAr: "وكالات الأحواض المائية — تقارير حول الإجهاد المائي",
    sourceEn: "Hydraulic Basin Agencies — water stress reports",
    axis: "environnement",
    axisPolarity: 1,
  },
  {
    id: "c-agri-4",
    category: "agriculture",
    text: "Le foncier agricole collectif (terres soulaliyates) doit être privatisé pour attirer davantage d'investissements.",
    textAr: "يجب خوصصة الأراضي الفلاحية الجماعية (السلالية) لجذب مزيد من الاستثمارات.",
    textEn:
      "Collective agricultural land (soulaliyate land) should be privatized to attract more investment.",
    explainer:
      "Les terres collectives (soulaliyates) couvrent des millions d'hectares au Maroc ; leur statut juridique fait l'objet de réformes successives depuis 2019 pour faciliter leur mobilisation économique tout en protégeant les ayants droit.",
    explainerAr:
      "تغطي الأراضي الجماعية (السلالية) ملايين الهكتارات بالمغرب؛ ويخضع وضعها القانوني لإصلاحات متتالية منذ 2019 لتسهيل تعبئتها اقتصاديا مع حماية ذوي الحقوق.",
    explainerEn:
      "Collective (soulaliyate) land covers millions of hectares in Morocco; its legal status has undergone successive reforms since 2019 to ease its economic use while protecting rights-holders.",
    source: "Ministère de l'Intérieur — Direction des Affaires Rurales",
    sourceAr: "وزارة الداخلية — مديرية الشؤون القروية",
    sourceEn: "Ministry of the Interior — Directorate of Rural Affairs",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-agri-5",
    category: "agriculture",
    text: "L'État doit garantir des prix planchers aux agriculteurs pour les céréales de base.",
    textAr: "يجب على الدولة ضمان سعر أدنى للفلاحين بالنسبة للحبوب الأساسية.",
    textEn: "The state should guarantee floor prices to farmers for staple cereals.",
    explainer:
      "L'État marocain intervient régulièrement sur le marché des céréales via des primes à l'importation ou au stockage pour stabiliser les prix, sans garantir de prix plancher permanent aux producteurs.",
    explainerAr:
      "تتدخل الدولة المغربية بانتظام في سوق الحبوب عبر منح للاستيراد أو التخزين لتحقيق استقرار الأسعار، دون ضمان سعر أدنى دائم للمنتجين.",
    explainerEn:
      "The Moroccan state regularly intervenes in the cereals market through import or storage subsidies to stabilize prices, without guaranteeing a permanent floor price to producers.",
    source: "Office National Interprofessionnel des Céréales et des Légumineuses (ONICL)",
    sourceAr: "المكتب الوطني المهني للحبوب والقطاني",
    sourceEn: "National Interprofessional Cereals and Pulses Office (ONICL)",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-agri-6",
    category: "agriculture",
    text: "La coopération agricole et les coopératives doivent recevoir plus de soutien public que les grandes entreprises agro-industrielles.",
    textAr: "يجب أن تحظى التعاونيات الفلاحية بدعم عمومي أكبر من الشركات الفلاحية الصناعية الكبرى.",
    textEn:
      "Agricultural cooperatives should receive more public support than large agro-industrial companies.",
    explainer:
      "Le mouvement coopératif agricole marocain a connu une forte croissance ces quinze dernières années, en particulier dans les filières laitière et de l'huile d'argan, avec un appui de l'Office de Développement de la Coopération.",
    explainerAr:
      "شهدت الحركة التعاونية الفلاحية بالمغرب نموا كبيرا خلال الخمس عشرة سنة الأخيرة، خصوصا في قطاعي الحليب وزيت الأركان، بدعم من مكتب تنمية التعاون.",
    explainerEn:
      "Morocco's agricultural cooperative movement has grown strongly over the past fifteen years, particularly in the dairy and argan oil sectors, supported by the Cooperative Development Office.",
    source: "Office du Développement de la Coopération (ODCO)",
    sourceAr: "مكتب تنمية التعاون",
    sourceEn: "Cooperative Development Office (ODCO)",
    axis: "econ",
    axisPolarity: -1,
  },

  // Emploi & jeunesse (7)
  {
    id: "c-emploi-1",
    category: "emploi",
    text: "Le salaire minimum (SMIG) doit être augmenté significativement, même si cela pèse sur les petites entreprises.",
    textAr: "يجب رفع الحد الأدنى للأجر (SMIG) بشكل ملموس، حتى لو أثقل ذلك كاهل المقاولات الصغرى.",
    textEn:
      "The minimum wage (SMIG) should be raised significantly, even if it burdens small businesses.",
    explainer:
      "Le SMIG a été revalorisé par étapes ces dernières années dans le cadre du dialogue social entre gouvernement, syndicats et patronat, sans toujours suivre le rythme de l'inflation selon les syndicats.",
    explainerAr:
      "تمت مراجعة الحد الأدنى للأجر على مراحل في السنوات الأخيرة في إطار الحوار الاجتماعي بين الحكومة والنقابات وأرباب العمل، دون أن يواكب دائما وتيرة التضخم حسب النقابات.",
    explainerEn:
      "The SMIG has been raised in stages in recent years through social dialogue between government, unions, and employers, though unions say it hasn't always kept pace with inflation.",
    source: "Accords du dialogue social — ministère de l'Emploi",
    sourceAr: "اتفاقيات الحوار الاجتماعي — وزارة التشغيل",
    sourceEn: "Social dialogue agreements — Ministry of Employment",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-emploi-2",
    category: "emploi",
    text: "L'auto-entrepreneuriat doit être davantage encouragé comme solution au chômage des jeunes.",
    textAr: "يجب تشجيع المقاولة الذاتية أكثر كحل لبطالة الشباب.",
    textEn: "Self-employment should be encouraged further as a solution to youth unemployment.",
    explainer:
      "Le statut d'auto-entrepreneur, créé en 2015, a permis à plusieurs centaines de milliers de Marocains de déclarer une activité individuelle avec une fiscalité allégée.",
    explainerAr:
      "مكّن نظام المقاول الذاتي، المحدث سنة 2015، مئات الآلاف من المغاربة من التصريح بنشاط فردي بضريبة مخففة.",
    explainerEn:
      "The self-employed entrepreneur status, created in 2015, has allowed several hundred thousand Moroccans to register an individual activity with lighter taxation.",
    source: "Statut de l'auto-entrepreneur — loi n° 114-13",
    sourceAr: "نظام المقاول الذاتي — القانون رقم 114.13",
    sourceEn: "Self-employed entrepreneur status — law 114-13",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-emploi-3",
    category: "emploi",
    text: "Les contrats précaires (intérim, CDD répétés) doivent être davantage encadrés par la loi.",
    textAr: "يجب تأطير العقود الهشة (التشغيل المؤقت، العقود محددة المدة المتكررة) أكثر بموجب القانون.",
    textEn:
      "Precarious contracts (temp work, repeated fixed-term contracts) should be regulated more tightly by law.",
    explainer:
      "Le recours répété aux CDD et à l'intérim est fréquemment dénoncé par les syndicats dans des secteurs comme le textile ou les centres d'appel, malgré un encadrement légal existant.",
    explainerAr:
      "كثيرا ما تندد النقابات باللجوء المتكرر لعقود محددة المدة والتشغيل المؤقت في قطاعات مثل النسيج ومراكز النداء، رغم وجود تأطير قانوني لذلك.",
    explainerEn:
      "Unions frequently denounce the repeated use of fixed-term and temp contracts in sectors like textiles or call centers, despite existing legal regulation.",
    source: "Code du travail — loi n° 65-99",
    sourceAr: "مدونة الشغل — القانون رقم 65.99",
    sourceEn: "Labour Code — law 65-99",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-emploi-4",
    category: "emploi",
    text: "Les concours de la fonction publique doivent être élargis pour créer plus d'emplois publics stables.",
    textAr: "يجب توسيع مباريات الوظيفة العمومية لخلق مزيد من مناصب الشغل العمومية المستقرة.",
    textEn:
      "Civil service entrance exams should be expanded to create more stable public-sector jobs.",
    explainer:
      "Le nombre de postes ouverts aux concours de la fonction publique est fixé chaque année par la loi de finances, dans un contexte de pression budgétaire sur la masse salariale de l'État.",
    explainerAr:
      "يُحدَّد عدد المناصب المفتوحة لمباريات الوظيفة العمومية سنويا بموجب قانون المالية، في سياق ضغط على كتلة أجور الدولة.",
    explainerEn:
      "The number of civil-service positions open for competitive exams is set each year by the Finance Act, amid budget pressure on the state wage bill.",
    source: "Loi de finances — ministère de la Fonction publique",
    sourceAr: "قانون المالية — وزارة التحول الرقمي وإصلاح الإدارة",
    sourceEn: "Finance Act — Ministry of Digital Transition and Administration Reform",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-emploi-5",
    category: "emploi",
    text: "Les investissements étrangers créateurs d'emplois doivent bénéficier d'exonérations fiscales prolongées.",
    textAr: "يجب أن تستفيد الاستثمارات الأجنبية الخالقة لفرص الشغل من إعفاءات ضريبية ممتدة.",
    textEn:
      "Job-creating foreign investments should benefit from extended tax exemptions.",
    explainer:
      "La Charte de l'investissement de 2022 prévoit des primes et exonérations pour les projets créateurs d'emplois, en particulier dans l'industrie automobile et les énergies renouvelables.",
    explainerAr:
      "ينص ميثاق الاستثمار لسنة 2022 على منح وإعفاءات للمشاريع الخالقة لفرص الشغل، خصوصا في صناعة السيارات والطاقات المتجددة.",
    explainerEn:
      "The 2022 Investment Charter provides grants and exemptions for job-creating projects, particularly in the automotive industry and renewable energy.",
    source: "Charte de l'investissement (loi-cadre n° 03-22)",
    sourceAr: "ميثاق الاستثمار (القانون الإطار رقم 03.22)",
    sourceEn: "Investment Charter (framework law 03-22)",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-emploi-6",
    category: "emploi",
    text: "Le télétravail et les emplois numériques à distance doivent être davantage soutenus par des politiques publiques dédiées.",
    textAr: "يجب دعم العمل عن بعد والوظائف الرقمية أكثر عبر سياسات عمومية مخصصة.",
    textEn:
      "Remote work and remote digital jobs should be supported further through dedicated public policies.",
    explainer:
      "Le télétravail s'est développé au Maroc depuis la pandémie de Covid-19, notamment dans les secteurs de l'offshoring et du numérique, sans cadre légal spécifique complet à ce jour.",
    explainerAr:
      "تطور العمل عن بعد بالمغرب منذ جائحة كوفيد-19، خصوصا في قطاعي الأوفشورينغ والرقمنة، دون إطار قانوني خاص مكتمل إلى حدود اليوم.",
    explainerEn:
      "Remote work has grown in Morocco since the Covid-19 pandemic, especially in offshoring and digital sectors, without a fully dedicated legal framework to date.",
    source: "Ministère de la Transition Numérique",
    sourceAr: "وزارة الانتقال الرقمي",
    sourceEn: "Ministry of Digital Transition",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-emploi-7",
    category: "emploi",
    text: "La lutte contre le travail des enfants doit être renforcée avec des sanctions plus sévères pour les employeurs.",
    textAr: "يجب تعزيز محاربة عمل الأطفال بعقوبات أكثر صرامة في حق المشغلين.",
    textEn:
      "The fight against child labour should be strengthened with harsher penalties for employers.",
    explainer:
      "Le travail des enfants a nettement reculé au Maroc ces vingt dernières années selon le Haut-Commissariat au Plan, mais persiste notamment dans l'agriculture et l'artisanat en milieu rural.",
    explainerAr:
      "تراجع عمل الأطفال بشكل ملحوظ بالمغرب خلال العشرين سنة الأخيرة حسب المندوبية السامية للتخطيط، لكنه لا يزال قائما خصوصا في الفلاحة والصناعة التقليدية بالعالم القروي.",
    explainerEn:
      "Child labour has fallen markedly in Morocco over the past twenty years according to the High Commission for Planning, but persists notably in agriculture and traditional crafts in rural areas.",
    source: "Haut-Commissariat au Plan (HCP)",
    sourceAr: "المندوبية السامية للتخطيط",
    sourceEn: "High Commission for Planning (HCP)",
    axis: "social",
    axisPolarity: 1,
  },

  // Régionalisation (6)
  {
    id: "c-reg-1",
    category: "regionalisation",
    text: "Les présidents de région doivent avoir le pouvoir de lever leurs propres impôts locaux.",
    textAr: "يجب أن تكون لرؤساء الجهات صلاحية فرض ضرائب محلية خاصة بهم.",
    textEn: "Regional council presidents should have the power to levy their own local taxes.",
    explainer:
      "Les régions marocaines disposent aujourd'hui de ressources propres limitées et dépendent largement des dotations de l'État, contrairement à certains pays où les collectivités locales lèvent leurs propres impôts.",
    explainerAr:
      "تتوفر الجهات المغربية حاليا على موارد ذاتية محدودة وتعتمد بشكل كبير على مساهمات الدولة، خلافا لبعض الدول التي تفرض فيها الجماعات الترابية ضرائبها الخاصة.",
    explainerEn:
      "Moroccan regions currently have limited resources of their own and rely heavily on state funding, unlike some countries where local governments levy their own taxes.",
    source: "Loi organique n° 111-14 relative aux régions",
    sourceAr: "القانون التنظيمي رقم 111.14 المتعلق بالجهات",
    sourceEn: "Organic law 111-14 on regions",
    axis: "decentralisation",
    axisPolarity: 1,
  },
  {
    id: "c-reg-2",
    category: "regionalisation",
    text: "Les walis (représentants de l'État) doivent conserver un droit de regard sur les décisions des conseils régionaux élus.",
    textAr: "يجب أن يحتفظ الولاة (ممثلو الدولة) بحق مراقبة قرارات المجالس الجهوية المنتخبة.",
    textEn:
      "Walis (state-appointed governors) should keep oversight of decisions made by elected regional councils.",
    explainer:
      "Le wali reste chargé de l'exécution des délibérations des conseils régionaux et exerce une forme de tutelle administrative, ce qui alimente le débat sur l'équilibre entre décentralisation et déconcentration.",
    explainerAr:
      "يبقى الوالي مكلفا بتنفيذ مداولات المجالس الجهوية ويمارس نوعا من الوصاية الإدارية، مما يغذي النقاش حول التوازن بين اللامركزية واللاتمركز.",
    explainerEn:
      "The wali remains in charge of executing regional council resolutions and exercises a form of administrative oversight, fueling debate over the balance between decentralization and deconcentration.",
    source: "Loi organique n° 111-14 relative aux régions",
    sourceAr: "القانون التنظيمي رقم 111.14 المتعلق بالجهات",
    sourceEn: "Organic law 111-14 on regions",
    axis: "decentralisation",
    axisPolarity: -1,
  },
  {
    id: "c-reg-3",
    category: "regionalisation",
    text: "Le budget de l'État doit être réparti de façon plus égalitaire entre les régions, y compris les moins développées.",
    textAr: "يجب توزيع ميزانية الدولة بشكل أكثر عدلا بين الجهات، بما فيها الأقل نموا.",
    textEn:
      "The state budget should be shared out more equally across regions, including less developed ones.",
    explainer:
      "Le Fonds de Mise à Niveau Social et le Fonds de Solidarité Interrégionale ont été créés pour réduire les écarts de développement entre régions, mais leur montée en puissance reste jugée lente par plusieurs élus locaux.",
    explainerAr:
      "أُحدث صندوق التأهيل الاجتماعي وصندوق التضامن بين الجهات للحد من فوارق التنمية بين الجهات، لكن تفعيلهما لا يزال يُعتبر بطيئا من طرف عدة منتخبين محليين.",
    explainerEn:
      "The Social Upgrading Fund and the Interregional Solidarity Fund were created to narrow development gaps between regions, but several local officials still consider their rollout slow.",
    source: "Fonds de Solidarité Interrégionale — loi organique n° 111-14",
    sourceAr: "صندوق التضامن بين الجهات — القانون التنظيمي رقم 111.14",
    sourceEn: "Interregional Solidarity Fund — organic law 111-14",
    axis: "decentralisation",
    axisPolarity: 1,
  },
  {
    id: "c-reg-4",
    category: "regionalisation",
    text: "Les grandes villes (Casablanca, Rabat, Tanger) doivent continuer à concentrer prioritairement les investissements publics.",
    textAr: "يجب أن تستمر المدن الكبرى (الدار البيضاء، الرباط، طنجة) في استقطاب الاستثمارات العمومية على سبيل الأولوية.",
    textEn:
      "Big cities (Casablanca, Rabat, Tangier) should continue to be the priority focus of public investment.",
    explainer:
      "L'axe Casablanca-Rabat-Tanger concentre une large part des grands projets d'infrastructure (port, train à grande vitesse, industrie), ce qui alimente le débat sur les inégalités territoriales.",
    explainerAr:
      "يستقطب محور الدار البيضاء-الرباط-طنجة جزءا كبيرا من المشاريع الكبرى للبنية التحتية (الميناء، القطار فائق السرعة، الصناعة)، مما يغذي النقاش حول الفوارق الترابية.",
    explainerEn:
      "The Casablanca-Rabat-Tangier corridor draws a large share of major infrastructure projects (port, high-speed rail, industry), fueling debate over territorial inequality.",
    source: "Ministère de l'Intérieur — aménagement du territoire",
    sourceAr: "وزارة الداخلية — إعداد التراب الوطني",
    sourceEn: "Ministry of the Interior — territorial planning",
    axis: "decentralisation",
    axisPolarity: -1,
  },
  {
    id: "c-reg-5",
    category: "regionalisation",
    text: "Les compétences en matière d'éducation et de santé doivent être transférées aux régions plutôt que gérées par les ministères centraux.",
    textAr: "يجب نقل اختصاصات التعليم والصحة إلى الجهات بدل تدبيرها من طرف الوزارات المركزية.",
    textEn:
      "Powers over education and health should be transferred to the regions rather than managed by central ministries.",
    explainer:
      "La régionalisation avancée prévoit à terme un transfert de certaines compétences (dont des aspects de l'éducation et de la santé) aux régions, un chantier encore largement inachevé quinze ans après son lancement.",
    explainerAr:
      "تنص الجهوية المتقدمة على تحويل بعض الاختصاصات (بما فيها جوانب من التعليم والصحة) إلى الجهات على المدى البعيد، وهو ورش لا يزال غير مكتمل إلى حد كبير بعد خمس عشرة سنة من إطلاقه.",
    explainerEn:
      "Advanced regionalization is meant to eventually transfer certain powers (including aspects of education and health) to the regions, a project still largely unfinished fifteen years after it was launched.",
    source: "Loi organique n° 111-14 relative aux régions",
    sourceAr: "القانون التنظيمي رقم 111.14 المتعلق بالجهات",
    sourceEn: "Organic law 111-14 on regions",
    axis: "decentralisation",
    axisPolarity: 1,
  },
  {
    id: "c-reg-6",
    category: "regionalisation",
    text: "Les provinces du Sud doivent bénéficier d'un statut économique préférentiel prolongé pour soutenir leur développement.",
    textAr: "يجب أن تستفيد الأقاليم الجنوبية من نظام اقتصادي تفضيلي ممتد لدعم تنميتها.",
    textEn:
      "The southern provinces should keep an extended preferential economic status to support their development.",
    explainer:
      "Un modèle de développement spécifique pour les provinces du Sud a été présenté en 2015, avec d'importants investissements publics dans les infrastructures et les énergies renouvelables (Dakhla, Laâyoune).",
    explainerAr:
      "قُدم نموذج تنموي خاص بالأقاليم الجنوبية سنة 2015، رافقته استثمارات عمومية مهمة في البنيات التحتية والطاقات المتجددة (الداخلة، العيون).",
    explainerEn:
      "A dedicated development model for the southern provinces was presented in 2015, accompanied by major public investment in infrastructure and renewable energy (Dakhla, Laâyoune).",
    source: "Modèle de développement des provinces du Sud (2015)",
    sourceAr: "النموذج التنموي الجديد للأقاليم الجنوبية (2015)",
    sourceEn: "Southern Provinces Development Model (2015)",
    axis: "decentralisation",
    axisPolarity: 1,
  },

  // Environnement & énergie (7)
  {
    id: "c-env-1",
    category: "environnement",
    text: "Le Maroc doit interdire la construction de toute nouvelle centrale à énergie fossile dès maintenant.",
    textAr: "يجب على المغرب منع بناء أي محطة جديدة للطاقة الأحفورية ابتداء من الآن.",
    textEn: "Morocco should ban the construction of any new fossil-fuel power plant starting now.",
    explainer:
      "Le Maroc a annoncé viser la neutralité carbone dans son mix électrique à long terme, mais des projets liés au gaz naturel sont encore envisagés comme énergie de transition.",
    explainerAr:
      "أعلن المغرب استهداف الحياد الكربوني في مزيجه الكهربائي على المدى البعيد، لكن لا تزال بعض المشاريع المرتبطة بالغاز الطبيعي مطروحة كطاقة انتقالية.",
    explainerEn:
      "Morocco has announced it is targeting carbon neutrality in its power mix in the long run, but natural-gas projects are still being considered as a transition energy.",
    source: "Stratégie énergétique nationale",
    sourceAr: "الاستراتيجية الطاقية الوطنية",
    sourceEn: "National energy strategy",
    axis: "environnement",
    axisPolarity: 1,
  },
  {
    id: "c-env-2",
    category: "environnement",
    text: "Les entreprises polluantes doivent payer une taxe carbone proportionnelle à leurs émissions.",
    textAr: "يجب أن تؤدي المقاولات الملوِّثة ضريبة كربونية متناسبة مع انبعاثاتها.",
    textEn: "Polluting companies should pay a carbon tax proportional to their emissions.",
    explainer:
      "Le Maroc ne dispose pas encore d'une taxe carbone généralisée, mais des mécanismes de tarification carbone sont à l'étude dans le cadre de ses engagements climatiques internationaux (Accord de Paris).",
    explainerAr:
      "لا يتوفر المغرب بعد على ضريبة كربونية شاملة، لكن آليات تسعير الكربون قيد الدراسة في إطار التزاماته المناخية الدولية (اتفاق باريس).",
    explainerEn:
      "Morocco does not yet have an economy-wide carbon tax, but carbon pricing mechanisms are under study as part of its international climate commitments (Paris Agreement).",
    source: "Contribution Déterminée au niveau National (CDN) — Accord de Paris",
    sourceAr: "المساهمة المحددة وطنيا — اتفاق باريس",
    sourceEn: "Nationally Determined Contribution (NDC) — Paris Agreement",
    axis: "environnement",
    axisPolarity: 1,
  },
  {
    id: "c-env-3",
    category: "environnement",
    text: "La préservation des ressources en eau doit primer sur le développement de nouvelles cultures d'exportation gourmandes en eau.",
    textAr: "يجب أن تكون المحافظة على الموارد المائية أولى من تطوير زراعات تصديرية جديدة شرهة للماء.",
    textEn:
      "Preserving water resources should take priority over developing new water-intensive export crops.",
    explainer:
      "Face au stress hydrique croissant, plusieurs bassins comme celui de Souss-Massa ont vu des restrictions imposées sur les nouveaux forages agricoles pour les cultures d'exportation.",
    explainerAr:
      "في مواجهة الإجهاد المائي المتزايد، شهدت أحواض مثل سوس-ماسة فرض قيود على حفر آبار فلاحية جديدة موجهة للزراعات التصديرية.",
    explainerEn:
      "Facing growing water stress, several basins such as Souss-Massa have seen restrictions placed on new agricultural boreholes for export crops.",
    source: "Agence du Bassin Hydraulique de Souss-Massa",
    sourceAr: "وكالة الحوض المائي سوس-ماسة",
    sourceEn: "Souss-Massa Hydraulic Basin Agency",
    axis: "environnement",
    axisPolarity: 1,
  },
  {
    id: "c-env-4",
    category: "environnement",
    text: "Les plastiques à usage unique doivent être totalement interdits, au-delà des mesures déjà en vigueur.",
    textAr: "يجب منع البلاستيك ذي الاستعمال الوحيد كليا، إلى ما هو أبعد من التدابير المعمول بها حاليا.",
    textEn:
      "Single-use plastics should be banned outright, beyond the measures already in place.",
    explainer:
      "Le Maroc a interdit les sacs plastiques en 2016 (loi 77-15, opération « Zéro Mika »), une mesure saluée internationalement mais dont l'application reste inégale sur le terrain.",
    explainerAr:
      "منع المغرب الأكياس البلاستيكية سنة 2016 (القانون 77.15، عملية «زيرو ميكا»)، وهو إجراء حظي بإشادة دولية لكن تطبيقه لا يزال متفاوتا ميدانيا.",
    explainerEn:
      "Morocco banned plastic bags in 2016 (law 77-15, the \"Zero Mika\" operation), a measure praised internationally though its enforcement remains uneven on the ground.",
    source: "Loi n° 77-15 — opération Zéro Mika",
    sourceAr: "القانون رقم 77.15 — عملية زيرو ميكا",
    sourceEn: "Law 77-15 — \"Zero Mika\" operation",
    axis: "environnement",
    axisPolarity: 1,
  },
  {
    id: "c-env-5",
    category: "environnement",
    text: "Le développement du dessalement d'eau de mer doit être accéléré, même à coût énergétique et budgétaire élevé.",
    textAr: "يجب تسريع تطوير تحلية مياه البحر، حتى بكلفة طاقية ومالية مرتفعة.",
    textEn:
      "Seawater desalination should be scaled up faster, even at a high energy and budget cost.",
    explainer:
      "La station de dessalement de Casablanca, l'une des plus grandes d'Afrique, doit être alimentée en partie par une centrale éolienne dédiée pour limiter son coût énergétique.",
    explainerAr:
      "من المرتقب أن تُغذى محطة تحلية مياه البحر بالدار البيضاء، من بين الأكبر في إفريقيا، جزئيا بمحطة للرياح مخصصة للحد من كلفتها الطاقية.",
    explainerEn:
      "The Casablanca desalination plant, one of the largest in Africa, is meant to be partly powered by a dedicated wind farm to limit its energy cost.",
    source: "ONEE — programme national de dessalement",
    sourceAr: "المكتب الوطني للكهرباء والماء الصالح للشرب — البرنامج الوطني لتحلية مياه البحر",
    sourceEn: "ONEE — national desalination program",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-env-6",
    category: "environnement",
    text: "Les zones naturelles protégées doivent être étendues, même si cela limite certains projets touristiques ou immobiliers.",
    textAr: "يجب توسيع المناطق الطبيعية المحمية، حتى لو حدّ ذلك من بعض المشاريع السياحية أو العقارية.",
    textEn:
      "Protected natural areas should be expanded, even if it limits some tourism or real-estate projects.",
    explainer:
      "Le Maroc compte une dizaine de parcs nationaux, mais leur extension se heurte parfois aux projets touristiques ou immobiliers dans des zones côtières prisées.",
    explainerAr:
      "يتوفر المغرب على حوالي عشر محميات وطنية، لكن توسيعها يصطدم أحيانا بمشاريع سياحية أو عقارية في مناطق ساحلية مرغوبة.",
    explainerEn:
      "Morocco has around ten national parks, but expanding them sometimes clashes with tourism or real-estate projects in sought-after coastal areas.",
    source: "Haut-Commissariat aux Eaux et Forêts",
    sourceAr: "المندوبية السامية للمياه والغابات",
    sourceEn: "High Commission for Water and Forests",
    axis: "environnement",
    axisPolarity: 1,
  },
  {
    id: "c-env-7",
    category: "environnement",
    text: "Le nucléaire civil doit être envisagé comme option énergétique pour le Maroc.",
    textAr: "يجب التفكير في الطاقة النووية المدنية كخيار طاقي بالنسبة للمغرب.",
    textEn: "Civilian nuclear power should be considered as an energy option for Morocco.",
    explainer:
      "Le Maroc a exploré par le passé l'option du nucléaire civil à des fins de production électrique et de dessalement, sans qu'aucun projet concret n'ait été lancé à ce jour.",
    explainerAr:
      "استكشف المغرب في الماضي خيار الطاقة النووية المدنية لأغراض إنتاج الكهرباء وتحلية المياه، دون أن يُطلق أي مشروع ملموس إلى حدود اليوم.",
    explainerEn:
      "Morocco has explored civilian nuclear power in the past for electricity generation and desalination, though no concrete project has been launched to date.",
    source: "Centre National de l'Énergie, des Sciences et des Techniques Nucléaires (CNESTEN)",
    sourceAr: "المركز الوطني للطاقة والعلوم والتقنيات النووية",
    sourceEn: "National Center for Nuclear Energy, Sciences and Techniques (CNESTEN)",
    axis: "environnement",
    axisPolarity: -1,
  },

  // Justice (6)
  {
    id: "c-justice-1",
    category: "justice",
    text: "Les magistrats doivent être élus par leurs pairs plutôt que nommés par un conseil présidé par le Roi.",
    textAr: "يجب أن يُنتخب القضاة من طرف نظرائهم بدل تعيينهم من طرف مجلس يرأسه الملك.",
    textEn: "Judges should be elected by their peers rather than appointed by a council chaired by the King.",
    explainer:
      "Le Conseil Supérieur du Pouvoir Judiciaire actuel est présidé par le Roi conformément à la Constitution de 2011 ; une élection des magistrats par leurs pairs sans cette présidence impliquerait une révision constitutionnelle.",
    explainerAr:
      "يرأس الملك حاليا المجلس الأعلى للسلطة القضائية طبقا لدستور 2011؛ وسيتطلب انتخاب القضاة من طرف نظرائهم دون هذه الرئاسة مراجعة دستورية.",
    explainerEn:
      "The current Supreme Council of the Judiciary is chaired by the King under the 2011 Constitution; electing judges by their peers without this chairmanship would require a constitutional revision.",
    source: "Conseil Supérieur du Pouvoir Judiciaire (CSPJ)",
    sourceAr: "المجلس الأعلى للسلطة القضائية",
    sourceEn: "Supreme Council of the Judiciary (CSPJ)",
    axis: "transparence",
    axisPolarity: 1,
  },
  {
    id: "c-justice-2",
    category: "justice",
    text: "Les peines alternatives à la prison doivent être développées pour désengorger les établissements pénitentiaires.",
    textAr: "يجب تطوير العقوبات البديلة عن السجن للتخفيف من اكتظاظ المؤسسات السجنية.",
    textEn:
      "Alternatives to prison sentences should be expanded to relieve overcrowding in penal institutions.",
    explainer:
      "La loi n° 43-22 sur les peines alternatives est entrée en vigueur en 2024 pour désengorger des prisons marocaines parmi les plus surpeuplées de la région.",
    explainerAr:
      "دخل القانون رقم 43.22 المتعلق بالعقوبات البديلة حيز التنفيذ سنة 2024 للتخفيف من اكتظاظ السجون المغربية التي تُعد من بين الأكثر اكتظاظا في المنطقة.",
    explainerEn:
      "Law 43-22 on alternative sentences took effect in 2024 to relieve overcrowding in Moroccan prisons, among the most crowded in the region.",
    source: "Loi n° 43-22 sur les peines alternatives",
    sourceAr: "القانون رقم 43.22 المتعلق بالعقوبات البديلة",
    sourceEn: "Law 43-22 on alternative sentences",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "c-justice-3",
    category: "justice",
    text: "La peine de mort doit être officiellement abolie dans la loi marocaine.",
    textAr: "يجب إلغاء عقوبة الإعدام رسميا من القانون المغربي.",
    textEn: "The death penalty should be formally abolished in Moroccan law.",
    explainer:
      "Le Maroc observe un moratoire de fait sur les exécutions depuis 1993, mais la peine de mort reste inscrite dans le Code pénal et continue d'être prononcée par les tribunaux.",
    explainerAr:
      "يطبق المغرب وقفا اختياريا فعليا لتنفيذ عقوبة الإعدام منذ 1993، لكنها تبقى منصوصا عليها في القانون الجنائي ولا تزال المحاكم تصدرها.",
    explainerEn:
      "Morocco has observed a de facto moratorium on executions since 1993, but the death penalty remains in the Penal Code and courts still hand it down.",
    source: "Code pénal marocain — moratoire de fait depuis 1993",
    sourceAr: "القانون الجنائي المغربي — الوقف الاختياري الفعلي منذ 1993",
    sourceEn: "Moroccan Penal Code — de facto moratorium since 1993",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "c-justice-4",
    category: "justice",
    text: "Les délais de traitement des affaires judiciaires doivent être réduits, y compris en recrutant davantage de magistrats.",
    textAr: "يجب تقليص آجال معالجة القضايا، بما في ذلك عبر توظيف قضاة إضافيين.",
    textEn:
      "Case-processing times should be shortened, including by hiring more judges.",
    explainer:
      "La lenteur des procédures judiciaires est régulièrement citée dans les rapports internationaux sur le climat des affaires comme un frein à l'investissement.",
    explainerAr:
      "يُستحضر بطء المساطر القضائية بانتظام في التقارير الدولية حول مناخ الأعمال كعائق أمام الاستثمار.",
    explainerEn:
      "Slow judicial procedures are regularly cited in international business-climate reports as a barrier to investment.",
    source: "Ministère de la Justice — programme de réforme judiciaire",
    sourceAr: "وزارة العدل — برنامج إصلاح منظومة العدالة",
    sourceEn: "Ministry of Justice — judicial reform program",
    axis: "transparence",
    axisPolarity: 1,
  },
  {
    id: "c-justice-5",
    category: "justice",
    text: "L'aide juridictionnelle gratuite doit être élargie à davantage de citoyens à faibles revenus.",
    textAr: "يجب توسيع المساعدة القضائية المجانية لتشمل مزيدا من المواطنين ذوي الدخل المحدود.",
    textEn: "Free legal aid should be extended to more low-income citizens.",
    explainer:
      "L'aide juridictionnelle existe au Maroc pour les personnes à faibles revenus, mais reste peu utilisée en pratique faute d'information suffisante selon plusieurs associations de défense des droits.",
    explainerAr:
      "تتوفر المساعدة القضائية بالمغرب لفائدة ذوي الدخل المحدود، لكنها تبقى قليلة الاستعمال ميدانيا لغياب معلومات كافية حسب عدة جمعيات حقوقية.",
    explainerEn:
      "Legal aid exists in Morocco for low-income people, but several rights groups say it remains underused in practice due to insufficient information.",
    source: "Code de procédure civile — aide juridictionnelle",
    sourceAr: "قانون المسطرة المدنية — المساعدة القضائية",
    sourceEn: "Code of Civil Procedure — legal aid",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-justice-6",
    category: "justice",
    text: "Les tribunaux de commerce doivent être réformés en priorité pour améliorer le climat des affaires.",
    textAr: "يجب إصلاح المحاكم التجارية على سبيل الأولوية لتحسين مناخ الأعمال.",
    textEn: "Commercial courts should be reformed as a priority to improve the business climate.",
    explainer:
      "Le Maroc a créé des tribunaux de commerce dédiés depuis 1997 pour accélérer le traitement des litiges économiques, un facteur suivi de près dans les classements internationaux du climat des affaires.",
    explainerAr:
      "أحدث المغرب محاكم تجارية مختصة منذ 1997 لتسريع البت في النزاعات الاقتصادية، وهو عامل يُتابع عن كثب في التصنيفات الدولية لمناخ الأعمال.",
    explainerEn:
      "Morocco has had dedicated commercial courts since 1997 to speed up the handling of economic disputes, a factor closely watched in international business-climate rankings.",
    source: "Loi n° 53-95 instituant les juridictions de commerce",
    sourceAr: "القانون رقم 53.95 المحدث للمحاكم التجارية",
    sourceEn: "Law 53-95 establishing commercial courts",
    axis: "econ",
    axisPolarity: 1,
  },

  // Gouvernance & lutte anti-corruption (7)
  {
    id: "c-gouv-1",
    category: "gouvernance",
    text: "Les marchés publics doivent tous être soumis à un appel d'offres transparent consultable en ligne par tout citoyen.",
    textAr: "يجب أن تخضع جميع الصفقات العمومية لطلب عروض شفاف يمكن لأي مواطن الاطلاع عليه عبر الإنترنت.",
    textEn:
      "All public procurement should go through a transparent tender process any citizen can view online.",
    explainer:
      "Le portail des marchés publics publie déjà une large part des appels d'offres publics, mais des exceptions (marchés négociés, secteurs sensibles) échappent encore à cette transparence.",
    explainerAr:
      "تنشر بوابة الصفقات العمومية جزءا كبيرا من طلبات العروض العمومية بالفعل، لكن بعض الاستثناءات (الصفقات بالتراضي، القطاعات الحساسة) لا تزال خارج هذه الشفافية.",
    explainerEn:
      "The public procurement portal already publishes a large share of public tenders, but exceptions (negotiated contracts, sensitive sectors) still fall outside this transparency.",
    source: "Portail des marchés publics — marchespublics.gov.ma",
    sourceAr: "بوابة الصفقات العمومية",
    sourceEn: "Public procurement portal — marchespublics.gov.ma",
    axis: "transparence",
    axisPolarity: 1,
  },
  {
    id: "c-gouv-2",
    category: "gouvernance",
    text: "Le cumul des mandats électifs (par exemple maire et parlementaire en même temps) doit être interdit.",
    textAr: "يجب منع الجمع بين المهام الانتخابية (كالجمع بين رئاسة بلدية والنيابة البرلمانية مثلا).",
    textEn:
      "Holding multiple elected offices at once (e.g. mayor and MP) should be banned.",
    explainer:
      "Le cumul de mandats reste fréquent au Maroc, malgré des débats récurrents sur son encadrement plus strict pour éviter les conflits d'intérêts.",
    explainerAr:
      "لا يزال الجمع بين المهام الانتخابية شائعا بالمغرب، رغم نقاشات متكررة حول تأطيره بشكل أكثر صرامة لتفادي تضارب المصالح.",
    explainerEn:
      "Holding multiple elected offices remains common in Morocco, despite recurring debate over regulating it more strictly to avoid conflicts of interest.",
    source: "Code électoral",
    sourceAr: "مدونة الانتخابات",
    sourceEn: "Electoral Code",
    axis: "transparence",
    axisPolarity: 1,
  },
  {
    id: "c-gouv-3",
    category: "gouvernance",
    text: "Les partis politiques doivent publier chaque année le détail de leur financement.",
    textAr: "يجب على الأحزاب السياسية نشر تفاصيل تمويلها كل سنة.",
    textEn: "Political parties should publish the details of their funding every year.",
    explainer:
      "Les partis politiques marocains reçoivent un financement public de l'État et sont soumis à des obligations de reddition des comptes auprès de la Cour des comptes, sans publication systématique détaillée au grand public.",
    explainerAr:
      "تتلقى الأحزاب السياسية المغربية تمويلا عموميا من الدولة وتخضع لالتزامات تقديم الحسابات أمام المجلس الأعلى للحسابات، دون نشر منهجي مفصل للعموم.",
    explainerEn:
      "Moroccan political parties receive public funding from the state and must report their accounts to the Court of Auditors, but without systematic detailed publication to the public.",
    source: "Cour des comptes — contrôle du financement des partis",
    sourceAr: "المجلس الأعلى للحسابات — مراقبة تمويل الأحزاب",
    sourceEn: "Court of Auditors — oversight of party funding",
    axis: "transparence",
    axisPolarity: 1,
  },
  {
    id: "c-gouv-4",
    category: "gouvernance",
    text: "Le nombre de ministères doit être réduit pour limiter les dépenses de fonctionnement de l'État.",
    textAr: "يجب تقليص عدد الوزارات للحد من نفقات تسيير الدولة.",
    textEn: "The number of ministries should be reduced to limit state operating costs.",
    explainer:
      "Le nombre de ministères varie à chaque remaniement gouvernemental ; le gouvernement formé en 2021 comptait environ 24 départements ministériels et secrétariats d'État.",
    explainerAr:
      "يتغير عدد الوزارات مع كل تعديل حكومي؛ ضمت الحكومة المشكَّلة سنة 2021 حوالي 24 قطاعا وزاريا وكتابة دولة.",
    explainerEn:
      "The number of ministries changes with each cabinet reshuffle; the government formed in 2021 had about 24 ministerial departments and secretariats of state.",
    source: "Chef du gouvernement — composition gouvernementale",
    sourceAr: "رئاسة الحكومة — التشكيلة الحكومية",
    sourceEn: "Office of the Head of Government — cabinet composition",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-gouv-5",
    category: "gouvernance",
    text: "L'Instance Nationale de la Probité et de la Lutte contre la Corruption doit obtenir un pouvoir d'enquête et de sanction plus large.",
    textAr: "يجب أن تحصل الهيئة الوطنية للنزاهة والوقاية من الرشوة ومحاربتها على صلاحيات أوسع للتحقيق والعقاب.",
    textEn:
      "The National Integrity and Anti-Corruption Authority should get broader investigative and sanctioning powers.",
    explainer:
      "L'INPPLC dispose depuis 2021 d'un cadre légal renforcé, mais ne détient pas de pouvoir de sanction direct : elle transmet ses constats à la justice, qui reste seule habilitée à sanctionner.",
    explainerAr:
      "تتوفر الهيئة الوطنية للنزاهة منذ 2021 على إطار قانوني معزز، لكنها لا تتوفر على سلطة عقابية مباشرة: إذ تحيل معايناتها إلى القضاء الذي يبقى وحده مخولا بالعقاب.",
    explainerEn:
      "The INPPLC has had a strengthened legal framework since 2021, but has no direct sanctioning power: it refers its findings to the judiciary, the only body authorized to impose sanctions.",
    source: "INPPLC — inpplc.ma",
    sourceAr: "الهيئة الوطنية للنزاهة والوقاية من الرشوة ومحاربتها — inpplc.ma",
    sourceEn: "INPPLC — inpplc.ma",
    axis: "transparence",
    axisPolarity: 1,
  },
  {
    id: "c-gouv-6",
    category: "gouvernance",
    text: "Les hauts fonctionnaires reconnus coupables de mauvaise gestion doivent pouvoir être poursuivis pénalement plus facilement.",
    textAr: "يجب تسهيل المتابعة الجنائية لكبار الموظفين المدانين بسوء التدبير.",
    textEn:
      "Senior officials found guilty of mismanagement should be easier to prosecute criminally.",
    explainer:
      "La Cour des comptes et les Cours régionales des comptes contrôlent la gestion des établissements publics, mais leurs rapports débouchent rarement sur des poursuites pénales rapides selon plusieurs observateurs.",
    explainerAr:
      "يراقب المجلس الأعلى للحسابات والمجالس الجهوية للحسابات تدبير المؤسسات العمومية، لكن تقاريرها نادرا ما تفضي إلى متابعات جنائية سريعة حسب عدة مراقبين.",
    explainerEn:
      "The Court of Auditors and Regional Courts of Auditors oversee the management of public bodies, but several observers say their reports rarely lead to swift criminal prosecutions.",
    source: "Cour des comptes du Maroc",
    sourceAr: "المجلس الأعلى للحسابات",
    sourceEn: "Court of Auditors of Morocco",
    axis: "transparence",
    axisPolarity: 1,
  },
  {
    id: "c-gouv-7",
    category: "gouvernance",
    text: "La décentralisation des recrutements de la fonction publique vers les régions doit être accélérée.",
    textAr: "يجب تسريع نقل توظيفات الوظيفة العمومية نحو الجهات.",
    textEn: "Decentralizing civil-service hiring to the regions should be accelerated.",
    explainer:
      "La déconcentration administrative, actée par une charte en 2018, prévoit un transfert progressif de pouvoirs de décision (dont certains recrutements) des ministères vers les services régionaux.",
    explainerAr:
      "تنص اللاتمركز الإداري، الذي أقره ميثاق سنة 2018، على نقل تدريجي لصلاحيات القرار (بما في ذلك بعض التوظيفات) من الوزارات نحو المصالح الجهوية.",
    explainerEn:
      "Administrative deconcentration, enacted through a 2018 charter, calls for gradually transferring decision-making powers (including some hiring) from ministries to regional services.",
    source: "Charte de la déconcentration administrative (2018)",
    sourceAr: "ميثاق اللاتمركز الإداري (2018)",
    sourceEn: "Administrative Deconcentration Charter (2018)",
    axis: "decentralisation",
    axisPolarity: 1,
  },

  // Migration (6)
  {
    id: "c-mig-1",
    category: "migration",
    text: "Les travailleurs migrants doivent avoir accès aux mêmes droits sociaux que les citoyens marocains.",
    textAr: "يجب أن يستفيد العمال المهاجرون من نفس الحقوق الاجتماعية التي يستفيد منها المواطنون المغاربة.",
    textEn: "Migrant workers should have access to the same social rights as Moroccan citizens.",
    explainer:
      "Depuis 2021, les travailleurs étrangers en situation régulière peuvent en principe être affiliés à la CNSS, mais l'accès effectif à ces droits reste souvent limité pour les travailleurs informels.",
    explainerAr:
      "منذ 2021، يمكن نظريا للعمال الأجانب في وضعية نظامية الانخراط في الصندوق الوطني للضمان الاجتماعي، لكن الولوج الفعلي لهذه الحقوق يبقى غالبا محدودا بالنسبة للعمال في القطاع غير المهيكل.",
    explainerEn:
      "Since 2021, foreign workers with regular status can in principle join the CNSS, but effective access to these rights often remains limited for informal workers.",
    source: "CNSS — affiliation des travailleurs étrangers",
    sourceAr: "الصندوق الوطني للضمان الاجتماعي — انخراط العمال الأجانب",
    sourceEn: "CNSS — foreign worker enrollment",
    axis: "ouverture",
    axisPolarity: 1,
  },
  {
    id: "c-mig-2",
    category: "migration",
    text: "Le Maroc doit renforcer le contrôle de ses frontières terrestres et maritimes contre la migration irrégulière.",
    textAr: "يجب على المغرب تعزيز مراقبة حدوده البرية والبحرية ضد الهجرة غير النظامية.",
    textEn:
      "Morocco should strengthen control of its land and sea borders against irregular migration.",
    explainer:
      "Le Maroc coopère étroitement avec l'Espagne et l'Union européenne sur la surveillance de ses frontières nord, notamment autour de Ceuta et Melilla, un point régulier de tension diplomatique.",
    explainerAr:
      "يتعاون المغرب بشكل وثيق مع إسبانيا والاتحاد الأوروبي في مراقبة حدوده الشمالية، خصوصا حول سبتة ومليلية، وهي نقطة توتر دبلوماسي متكررة.",
    explainerEn:
      "Morocco cooperates closely with Spain and the European Union on monitoring its northern borders, especially around Ceuta and Melilla, a recurring point of diplomatic tension.",
    source: "Coopération Maroc-Union européenne en matière migratoire",
    sourceAr: "التعاون المغربي الأوروبي في المجال الهجري",
    sourceEn: "Morocco-EU cooperation on migration",
    axis: "ouverture",
    axisPolarity: -1,
  },
  {
    id: "c-mig-3",
    category: "migration",
    text: "Les enfants de migrants nés au Maroc doivent avoir un accès facilité à la scolarisation, indépendamment du statut de leurs parents.",
    textAr: "يجب تسهيل ولوج أبناء المهاجرين المزدادين بالمغرب للتمدرس، بغض النظر عن وضعية آبائهم.",
    textEn:
      "Children of migrants born in Morocco should have easier access to schooling, regardless of their parents' status.",
    explainer:
      "Une circulaire ministérielle de 2019 autorise en principe la scolarisation des enfants de migrants sans exiger de titre de séjour, mais son application varie selon les académies régionales.",
    explainerAr:
      "تجيز مذكرة وزارية لسنة 2019 من حيث المبدأ تمدرس أبناء المهاجرين دون اشتراط بطاقة الإقامة، لكن تطبيقها يتفاوت حسب الأكاديميات الجهوية.",
    explainerEn:
      "A 2019 ministerial circular in principle allows migrant children to enroll in school without requiring a residence permit, but its application varies across regional education boards.",
    source: "Ministère de l'Éducation nationale — circulaire sur la scolarisation des migrants",
    sourceAr: "وزارة التربية الوطنية — مذكرة تمدرس أبناء المهاجرين",
    sourceEn: "Ministry of National Education — circular on schooling for migrant children",
    axis: "ouverture",
    axisPolarity: 1,
  },
  {
    id: "c-mig-4",
    category: "migration",
    text: "Le Maroc doit conclure davantage d'accords de réadmission avec les pays d'origine des migrants en situation irrégulière.",
    textAr: "يجب على المغرب إبرام مزيد من اتفاقيات إعادة القبول مع دول منشأ المهاجرين في وضعية غير نظامية.",
    textEn:
      "Morocco should sign more readmission agreements with the countries of origin of irregular migrants.",
    explainer:
      "Le Maroc a signé plusieurs accords de coopération migratoire avec des pays d'origine et de transit, dans le cadre plus large de sa politique migratoire régionale.",
    explainerAr:
      "وقع المغرب عدة اتفاقيات للتعاون في مجال الهجرة مع دول المنشأ والعبور، في إطار سياسته الهجرية الجهوية الأوسع.",
    explainerEn:
      "Morocco has signed several migration-cooperation agreements with origin and transit countries, as part of its broader regional migration policy.",
    source: "Ministère chargé des Marocains résidant à l'étranger et des Affaires de la migration",
    sourceAr: "الوزارة المكلفة بالمغاربة المقيمين بالخارج وشؤون الهجرة",
    sourceEn: "Ministry for Moroccans Abroad and Migration Affairs",
    axis: "ouverture",
    axisPolarity: -1,
  },
  {
    id: "c-mig-5",
    category: "migration",
    text: "Les migrants qualifiés doivent bénéficier de visas de travail facilités pour combler les besoins du marché marocain.",
    textAr: "يجب أن يستفيد المهاجرون المؤهلون من تسهيلات في رخص العمل لسد حاجيات السوق المغربية.",
    textEn:
      "Skilled migrants should get easier work visas to meet the needs of the Moroccan labor market.",
    explainer:
      "Certains secteurs marocains en croissance rapide (technologies, offshoring) recrutent déjà des profils étrangers qualifiés, avec des procédures de permis de travail jugées encore lourdes par les employeurs.",
    explainerAr:
      "توظف بعض القطاعات المغربية السريعة النمو (التكنولوجيا، الأوفشورينغ) بالفعل كفاءات أجنبية، وسط مساطر لرخص العمل لا تزال تُعتبر ثقيلة من طرف المشغلين.",
    explainerEn:
      "Some fast-growing Moroccan sectors (technology, offshoring) already hire skilled foreign talent, amid work-permit procedures employers still consider burdensome.",
    source: "Ministère de l'Emploi — permis de travail des étrangers",
    sourceAr: "وزارة التشغيل — رخص عمل الأجانب",
    sourceEn: "Ministry of Employment — foreign work permits",
    axis: "ouverture",
    axisPolarity: 1,
  },
  {
    id: "c-mig-6",
    category: "migration",
    text: "La coopération migratoire avec l'Union européenne ne doit pas se faire au détriment de la souveraineté migratoire du Maroc.",
    textAr: "يجب ألا يكون التعاون الهجري مع الاتحاد الأوروبي على حساب السيادة الهجرية للمغرب.",
    textEn:
      "Migration cooperation with the European Union should not come at the expense of Morocco's migration sovereignty.",
    explainer:
      "Le Maroc a régulièrement affirmé vouloir traiter la question migratoire comme un partenariat équilibré avec l'Union européenne plutôt qu'une simple sous-traitance du contrôle des frontières.",
    explainerAr:
      "أكد المغرب بانتظام رغبته في التعامل مع ملف الهجرة كشراكة متوازنة مع الاتحاد الأوروبي عوض أن يكون مجرد وكيل لمراقبة الحدود.",
    explainerEn:
      "Morocco has repeatedly stated it wants to treat migration as a balanced partnership with the European Union rather than simply outsourced border control.",
    source: "Ministère des Affaires étrangères — dialogue Maroc-UE sur la migration",
    sourceAr: "وزارة الشؤون الخارجية — الحوار المغربي الأوروبي حول الهجرة",
    sourceEn: "Ministry of Foreign Affairs — Morocco-EU migration dialogue",
    axis: "ouverture",
    axisPolarity: -1,
  },

  // Marocains du monde / diaspora (5)
  {
    id: "c-dia-1",
    category: "diaspora",
    text: "Les Marocains du monde doivent pouvoir voter électroniquement depuis l'étranger lors des élections nationales.",
    textAr: "يجب تمكين المغاربة المقيمين بالخارج من التصويت إلكترونيا من الخارج خلال الانتخابات الوطنية.",
    textEn:
      "Moroccans abroad should be able to vote electronically from overseas in national elections.",
    explainer:
      "Le vote électronique pour les Marocains du monde a été évoqué à plusieurs reprises par les autorités sans être mis en œuvre à ce jour ; les MRE doivent généralement se déplacer ou voter par procuration.",
    explainerAr:
      "طُرح التصويت الإلكتروني للمغاربة المقيمين بالخارج مرارا من طرف السلطات دون أن يُفعَّل إلى حدود اليوم، إذ يضطر المغاربة المقيمون بالخارج عموما للتنقل أو التصويت بالوكالة.",
    explainerEn:
      "Authorities have repeatedly floated electronic voting for Moroccans abroad without implementing it to date; expatriates generally must travel or vote by proxy.",
    source: "Ministère de l'Intérieur — code électoral",
    sourceAr: "وزارة الداخلية — مدونة الانتخابات",
    sourceEn: "Ministry of the Interior — Electoral Code",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "c-dia-2",
    category: "diaspora",
    text: "Les investissements de la diaspora doivent bénéficier d'avantages fiscaux spécifiques pour encourager leur retour au pays.",
    textAr: "يجب أن تستفيد استثمارات الجالية من امتيازات ضريبية خاصة لتشجيع عودتها للاستثمار بالبلد.",
    textEn:
      "Diaspora investments should get specific tax benefits to encourage them back into the country.",
    explainer:
      "Des programmes comme « Marocains du Monde Invest » offrent des primes et un accompagnement aux MRE souhaitant investir dans des projets au Maroc.",
    explainerAr:
      "توفر برامج مثل «مغاربة العالم إنفست» منحا ومواكبة للمغاربة المقيمين بالخارج الراغبين في الاستثمار بمشاريع بالمغرب.",
    explainerEn:
      "Programs like \"Marocains du Monde Invest\" offer grants and support to expatriates who want to invest in projects in Morocco.",
    source: "Programme Marocains du Monde Invest — CGEM / AMDIE",
    sourceAr: "برنامج مغاربة العالم إنفست — الاتحاد العام لمقاولات المغرب / الوكالة المغربية لتنمية الاستثمارات",
    sourceEn: "Marocains du Monde Invest program — CGEM / AMDIE",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-dia-3",
    category: "diaspora",
    text: "Un ministère de plein exercice dédié aux Marocains du monde doit être rétabli.",
    textAr: "يجب إعادة إحداث وزارة كاملة الصلاحيات مخصصة للمغاربة المقيمين بالخارج.",
    textEn: "A full-fledged ministry dedicated to Moroccans abroad should be reinstated.",
    explainer:
      "Le portefeuille chargé des Marocains résidant à l'étranger a changé plusieurs fois de statut ces dernières années, passant de ministère de plein exercice à ministère délégué selon les gouvernements.",
    explainerAr:
      "تغيرت صفة الحقيبة المكلفة بالمغاربة المقيمين بالخارج عدة مرات في السنوات الأخيرة، بين وزارة كاملة الصلاحيات ووزارة منتدبة حسب الحكومات.",
    explainerEn:
      "The portfolio for Moroccans living abroad has changed status several times in recent years, alternating between a full ministry and a delegated ministry depending on the government.",
    source: "Organigramme gouvernemental — portefeuille MRE",
    sourceAr: "الهيكل الحكومي — قطاع الجالية",
    sourceEn: "Government organizational chart — MRE portfolio",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "c-dia-4",
    category: "diaspora",
    text: "Les procédures douanières et administratives pour les Marocains du monde en visite doivent être simplifiées en priorité.",
    textAr: "يجب تبسيط المساطر الجمركية والإدارية للمغاربة المقيمين بالخارج الزائرين على سبيل الأولوية.",
    textEn:
      "Customs and administrative procedures for visiting Moroccans abroad should be simplified as a priority.",
    explainer:
      "L'opération Marhaba, mobilisée chaque été, vise à faciliter le transit des MRE au Maroc, mais les files d'attente aux frontières et ports restent un point de friction récurrent.",
    explainerAr:
      "تُعبَّأ عملية مرحبا كل صيف لتسهيل عبور المغاربة المقيمين بالخارج بالمغرب، لكن طوابير الانتظار عند الحدود والموانئ تبقى نقطة احتكاك متكررة.",
    explainerEn:
      "The Marhaba operation is mobilized every summer to ease the transit of expatriates through Morocco, but queues at borders and ports remain a recurring friction point.",
    source: "Opération Marhaba — Fondation Mohammed V",
    sourceAr: "عملية مرحبا — مؤسسة محمد الخامس",
    sourceEn: "Marhaba Operation — Mohammed V Foundation",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-dia-5",
    category: "diaspora",
    text: "La double imposition entre le Maroc et les pays de résidence des MRE doit être davantage combattue par de nouveaux accords bilatéraux.",
    textAr: "يجب محاربة الازدواج الضريبي بين المغرب ودول إقامة الجالية أكثر عبر اتفاقيات ثنائية جديدة.",
    textEn:
      "Double taxation between Morocco and the countries where expatriates live should be tackled further through new bilateral agreements.",
    explainer:
      "Le Maroc a signé des conventions de non-double imposition avec plusieurs pays d'accueil des MRE (France, Belgique, Espagne...), mais des zones de friction subsistent notamment sur les pensions de retraite.",
    explainerAr:
      "وقع المغرب اتفاقيات لتجنب الازدواج الضريبي مع عدة دول استقبال للمغاربة المقيمين بالخارج (فرنسا، بلجيكا، إسبانيا...)، لكن تبقى نقط احتكاك قائمة خصوصا بخصوص معاشات التقاعد.",
    explainerEn:
      "Morocco has signed double-taxation treaties with several host countries of its diaspora (France, Belgium, Spain...), but friction points remain, notably over retirement pensions.",
    source: "Conventions fiscales bilatérales — Direction Générale des Impôts",
    sourceAr: "الاتفاقيات الضريبية الثنائية — المديرية العامة للضرائب",
    sourceEn: "Bilateral tax treaties — Directorate General of Taxes",
    axis: "econ",
    axisPolarity: 1,
  },

  // Droits & société (7)
  {
    id: "c-droits-1",
    category: "droits",
    text: "L'avortement doit être autorisé dans davantage de circonstances qu'actuellement (viol, inceste, malformation grave).",
    textAr: "يجب السماح بالإجهاض في حالات أوسع مما هو معمول به حاليا (الاغتصاب، سفاح القربى، التشوهات الخطيرة).",
    textEn:
      "Abortion should be allowed in more circumstances than currently (rape, incest, serious fetal malformation).",
    explainer:
      "L'avortement reste largement interdit au Maroc sauf pour sauver la vie de la mère ; un projet de réforme en 2016 pour l'élargir aux cas de viol, inceste ou malformation n'a jamais été adopté.",
    explainerAr:
      "يبقى الإجهاض ممنوعا بشكل واسع بالمغرب باستثناء حالة إنقاذ حياة الأم؛ ولم يُعتمد قط مشروع إصلاح سنة 2016 كان يهدف لتوسيعه ليشمل حالات الاغتصاب وسفاح القربى والتشوهات.",
    explainerEn:
      "Abortion remains broadly banned in Morocco except to save the mother's life; a 2016 reform bill to extend it to cases of rape, incest, or malformation was never adopted.",
    source: "Code pénal, article 453 / projet de réforme de 2016",
    sourceAr: "القانون الجنائي، الفصل 453 / مشروع إصلاح 2016",
    sourceEn: "Penal Code, article 453 / 2016 reform bill",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "c-droits-2",
    category: "droits",
    text: "Les relations hors mariage entre adultes consentants ne doivent plus être pénalisées par la loi.",
    textAr: "يجب ألا يُجرِّم القانون بعد الآن العلاقات خارج إطار الزواج بين بالغين متراضين.",
    textEn:
      "Relationships outside marriage between consenting adults should no longer be criminalized by law.",
    explainer:
      "L'article 490 du Code pénal criminalise toujours les relations sexuelles hors mariage entre adultes consentants, une disposition régulièrement critiquée par des associations de défense des droits humains.",
    explainerAr:
      "لا يزال الفصل 490 من القانون الجنائي يجرّم العلاقات الجنسية خارج إطار الزواج بين بالغين متراضين، وهو مقتضى تنتقده بانتظام جمعيات حقوقية.",
    explainerEn:
      "Article 490 of the Penal Code still criminalizes consensual sexual relations outside marriage, a provision regularly criticized by human rights groups.",
    source: "Code pénal, article 490",
    sourceAr: "القانون الجنائي، الفصل 490",
    sourceEn: "Penal Code, article 490",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "c-droits-3",
    category: "droits",
    text: "La liberté de culte et de conscience doit être explicitement garantie pour tous les citoyens, quelle que soit leur religion.",
    textAr: "يجب أن تُضمن صراحة حرية العبادة والضمير لجميع المواطنين، أيا كانت ديانتهم.",
    textEn:
      "Freedom of worship and conscience should be explicitly guaranteed for all citizens, regardless of religion.",
    explainer:
      "La Constitution de 2011 garantit la liberté de conscience mais l'islam reste religion d'État ; le prosélytisme visant à convertir des musulmans reste pénalement réprimé.",
    explainerAr:
      "يضمن دستور 2011 حرية الضمير لكن الإسلام يبقى دين الدولة؛ ولا يزال التبشير الرامي لتنصير مسلمين مجرَّما جنائيا.",
    explainerEn:
      "The 2011 Constitution guarantees freedom of conscience but Islam remains the state religion; proselytizing aimed at converting Muslims is still criminally punishable.",
    source: "Constitution de 2011, article 3 / Code pénal, article 220",
    sourceAr: "دستور 2011، الفصل 3 / القانون الجنائي، الفصل 220",
    sourceEn: "2011 Constitution, article 3 / Penal Code, article 220",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "c-droits-4",
    category: "droits",
    text: "Les violences faites aux femmes doivent être sanctionnées par des peines plus sévères qu'actuellement.",
    textAr: "يجب معاقبة العنف ضد النساء بعقوبات أكثر صرامة مما هو معمول به حاليا.",
    textEn: "Violence against women should be punished with harsher penalties than currently.",
    explainer:
      "La loi n° 103-13 de 2018 a créé un cadre spécifique de lutte contre les violences faites aux femmes, mais son application concrète (accompagnement des victimes, poursuites) reste jugée insuffisante par plusieurs associations.",
    explainerAr:
      "أحدث القانون رقم 103.13 لسنة 2018 إطارا خاصا لمحاربة العنف ضد النساء، لكن تطبيقه الملموس (مواكبة الضحايا، المتابعات) لا يزال يُعتبر غير كاف من طرف عدة جمعيات.",
    explainerEn:
      "Law 103-13 of 2018 created a specific framework against violence toward women, but several associations still see its practical implementation (victim support, prosecutions) as insufficient.",
    source: "Loi n° 103-13 relative à la lutte contre les violences faites aux femmes",
    sourceAr: "القانون رقم 103.13 المتعلق بمحاربة العنف ضد النساء",
    sourceEn: "Law 103-13 on combating violence against women",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "c-droits-5",
    category: "droits",
    text: "L'héritage entre hommes et femmes doit évoluer vers davantage d'égalité.",
    axis: "social",
    axisPolarity: 1,
    textAr: "يجب أن يتجه الإرث بين الرجال والنساء نحو مزيد من المساواة.",
    textEn: "Inheritance rules between men and women should move toward greater equality.",
    explainer:
      "Les règles d'héritage au Maroc suivent les principes du fiqh musulman, avec une part généralement double pour les hommes ; ce sujet fait partie des points les plus débattus de la réforme de la Moudawana de 2024.",
    explainerAr:
      "تتبع قواعد الإرث بالمغرب مبادئ الفقه الإسلامي، بحصة مضاعفة عموما للذكور؛ ويُعد هذا الموضوع من أكثر النقط إثارة للجدل في إصلاح مدونة الأسرة لسنة 2024.",
    explainerEn:
      "Inheritance rules in Morocco follow Islamic fiqh principles, generally giving men a double share; this is one of the most contested points of the 2024 Moudawana reform.",
    source: "Moudawana (Code de la famille) — commission de réforme 2024",
    sourceAr: "مدونة الأسرة — لجنة الإصلاح 2024",
    sourceEn: "Moudawana (Family Code) — 2024 reform commission",
  },
  {
    id: "c-droits-6",
    category: "droits",
    text: "La société civile et les associations de défense des droits humains doivent pouvoir opérer sans autorisation préalable de l'administration.",
    textAr: "يجب أن يعمل المجتمع المدني والجمعيات الحقوقية دون ترخيص مسبق من الإدارة.",
    textEn:
      "Civil society and human rights associations should be able to operate without prior authorization from the administration.",
    explainer:
      "La loi marocaine impose un régime déclaratif (et non d'autorisation préalable) pour créer une association, mais l'obtention du récépissé de dépôt est parfois retardée ou refusée dans la pratique pour certaines associations sensibles.",
    explainerAr:
      "يفرض القانون المغربي نظام التصريح (وليس الترخيص المسبق) لتأسيس جمعية، لكن الحصول على وصل الإيداع يتأخر أو يُرفض أحيانا عمليا بالنسبة لبعض الجمعيات الحساسة.",
    explainerEn:
      "Moroccan law technically requires only a declaration (not prior authorization) to found an association, but obtaining the filing receipt is sometimes delayed or refused in practice for certain sensitive groups.",
    source: "Loi n° 75-00 relative aux associations (dahir de 1958 modifié)",
    sourceAr: "القانون رقم 75.00 المتعلق بالجمعيات (ظهير 1958 المعدل)",
    sourceEn: "Law 75-00 on associations (amended 1958 dahir)",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "c-droits-7",
    category: "droits",
    text: "Le mariage des mineurs doit être totalement interdit, sans dérogation judiciaire possible.",
    textAr: "يجب منع زواج القاصرين منعا كليا، دون إمكانية أي استثناء قضائي.",
    textEn:
      "Marriage of minors should be banned outright, with no judicial exception possible.",
    explainer:
      "Le Code de la famille de 2004 fixe l'âge légal du mariage à 18 ans mais permet des dérogations judiciaires ; leur nombre reste élevé selon les statistiques du ministère de la Justice, ce qui alimente le débat sur leur suppression.",
    explainerAr:
      "تحدد مدونة الأسرة لسنة 2004 السن القانونية للزواج في 18 سنة لكنها تسمح باستثناءات قضائية؛ ولا يزال عددها مرتفعا حسب إحصائيات وزارة العدل، مما يغذي النقاش حول إلغائها.",
    explainerEn:
      "The 2004 Family Code sets the legal marriage age at 18 but allows judicial exceptions; their number remains high according to Ministry of Justice statistics, fueling debate over abolishing them.",
    source: "Moudawana, article 20 (dérogation judiciaire au mariage des mineurs)",
    sourceAr: "مدونة الأسرة، المادة 20 (الاستثناء القضائي لزواج القاصرين)",
    sourceEn: "Moudawana, article 20 (judicial exception for marriage of minors)",
    axis: "social",
    axisPolarity: 1,
  },

  // Numérique & administration (6)
  {
    id: "c-num-1",
    category: "numerique",
    text: "L'identité numérique unique doit permettre d'accéder à tous les services publics en ligne d'ici 2027.",
    textAr: "يجب أن تمكّن الهوية الرقمية الموحدة من الولوج لكل الخدمات العمومية عبر الإنترنت في أفق 2027.",
    textEn:
      "A single digital identity should provide access to all public services online by 2027.",
    explainer:
      "Le Maroc a lancé la Carte Nationale d'Identité Électronique (CNIE) nouvelle génération, brique de base d'une identité numérique destinée à simplifier l'accès aux services publics en ligne.",
    explainerAr:
      "أطلق المغرب الجيل الجديد من البطاقة الوطنية للتعريف الإلكترونية، كلبنة أساسية لهوية رقمية تهدف لتبسيط الولوج للخدمات العمومية عبر الإنترنت.",
    explainerEn:
      "Morocco has launched the new-generation electronic national ID card (CNIE), the basic building block of a digital identity meant to simplify access to online public services.",
    source: "Agence Nationale du Registre National (ANRN) — CNIE",
    sourceAr: "الوكالة الوطنية للسجل الوطني — البطاقة الوطنية الإلكترونية",
    sourceEn: "National Population Registry Agency (ANRN) — CNIE",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "c-num-2",
    category: "numerique",
    text: "L'État doit investir massivement dans la formation aux métiers de l'intelligence artificielle et du numérique.",
    textAr: "يجب على الدولة الاستثمار بشكل كبير في التكوين في مهن الذكاء الاصطناعي والرقمنة.",
    textEn:
      "The state should invest massively in training for AI and digital jobs.",
    explainer:
      "Le Maroc a lancé plusieurs initiatives de formation aux métiers du numérique (1337, écoles de code, partenariats universitaires) pour répondre à la demande croissante du secteur offshoring et technologique.",
    explainerAr:
      "أطلق المغرب عدة مبادرات للتكوين في مهن الرقمنة (1337، مدارس البرمجة، شراكات جامعية) لتلبية الطلب المتزايد لقطاع الأوفشورينغ والتكنولوجيا.",
    explainerEn:
      "Morocco has launched several digital-skills training initiatives (1337, coding schools, university partnerships) to meet growing demand from the offshoring and tech sectors.",
    source: "Agence de Développement du Digital (ADD)",
    sourceAr: "وكالة التنمية الرقمية",
    sourceEn: "Digital Development Agency (ADD)",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-num-3",
    category: "numerique",
    text: "La protection des données personnelles des citoyens doit être renforcée par une autorité de contrôle indépendante et puissante.",
    textAr: "يجب تعزيز حماية المعطيات الشخصية للمواطنين عبر هيئة مراقبة مستقلة وذات صلاحيات واسعة.",
    textEn:
      "Protection of citizens' personal data should be strengthened through a powerful, independent oversight authority.",
    explainer:
      "La Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP) existe depuis 2009 pour encadrer l'usage des données personnelles au Maroc.",
    explainerAr:
      "توجد اللجنة الوطنية لمراقبة حماية المعطيات ذات الطابع الشخصي منذ 2009 لتأطير استعمال المعطيات الشخصية بالمغرب.",
    explainerEn:
      "The National Commission for the Control of Personal Data Protection (CNDP) has existed since 2009 to regulate the use of personal data in Morocco.",
    source: "Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP)",
    sourceAr: "اللجنة الوطنية لمراقبة حماية المعطيات ذات الطابع الشخصي",
    sourceEn: "National Personal Data Protection Commission (CNDP)",
    axis: "transparence",
    axisPolarity: 1,
  },
  {
    id: "c-num-4",
    category: "numerique",
    text: "Le très haut débit internet doit être considéré comme un service public essentiel garanti à tous, y compris en zones rurales.",
    textAr: "يجب اعتبار الأنترنت فائق السرعة خدمة عمومية أساسية مضمونة للجميع، بما في ذلك بالمناطق القروية.",
    textEn:
      "High-speed internet should be treated as an essential public service guaranteed to everyone, including in rural areas.",
    explainer:
      "L'Agence Nationale de Réglementation des Télécommunications (ANRT) pilote des programmes de couverture des zones rurales et enclavées, où l'accès à internet reste plus limité qu'en zone urbaine.",
    explainerAr:
      "تشرف الوكالة الوطنية لتقنين المواصلات على برامج تغطية المناطق القروية والمعزولة، حيث يبقى الولوج للأنترنت أكثر محدودية مقارنة بالمناطق الحضرية.",
    explainerEn:
      "The National Telecommunications Regulatory Agency (ANRT) runs coverage programs for rural and remote areas, where internet access remains more limited than in cities.",
    source: "Agence Nationale de Réglementation des Télécommunications (ANRT)",
    sourceAr: "الوكالة الوطنية لتقنين المواصلات",
    sourceEn: "National Telecommunications Regulatory Agency (ANRT)",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-num-5",
    category: "numerique",
    text: "Les plateformes numériques étrangères (réseaux sociaux, grandes entreprises technologiques) doivent être davantage régulées et taxées au Maroc.",
    textAr: "يجب تنظيم وفرض ضرائب أكبر على المنصات الرقمية الأجنبية (الشبكات الاجتماعية، الشركات التكنولوجية الكبرى) بالمغرب.",
    textEn:
      "Foreign digital platforms (social media, big tech companies) should be regulated and taxed more in Morocco.",
    explainer:
      "Le débat sur la taxation des grandes plateformes numériques internationales (publicité en ligne, commerce électronique) reste émergent au Maroc comparé à des réglementations déjà en place en Europe.",
    explainerAr:
      "لا يزال النقاش حول فرض ضرائب على المنصات الرقمية الدولية الكبرى (الإشهار عبر الإنترنت، التجارة الإلكترونية) ناشئا بالمغرب مقارنة بتنظيمات موجودة بالفعل في أوروبا.",
    explainerEn:
      "Debate over taxing major international digital platforms (online advertising, e-commerce) remains nascent in Morocco compared to regulations already in place in Europe.",
    source: "Direction Générale des Impôts — fiscalité du numérique",
    sourceAr: "المديرية العامة للضرائب — الجبايات الرقمية",
    sourceEn: "Directorate General of Taxes — digital taxation",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "c-num-6",
    category: "numerique",
    text: "Les start-ups technologiques marocaines doivent bénéficier d'un statut fiscal spécial pour stimuler l'innovation.",
    textAr: "يجب أن تستفيد الشركات الناشئة التكنولوجية المغربية من نظام ضريبي خاص لتحفيز الابتكار.",
    textEn:
      "Moroccan tech start-ups should get a special tax status to boost innovation.",
    explainer:
      "La loi sur les start-ups adoptée en 2024 (Startup Act) prévoit des avantages fiscaux et un statut simplifié pour les jeunes pousses technologiques marocaines.",
    explainerAr:
      "ينص قانون الشركات الناشئة المعتمد سنة 2024 (Startup Act) على امتيازات ضريبية ونظام مبسط للشركات الناشئة التكنولوجية المغربية.",
    explainerEn:
      "The Startup Act, adopted in 2024, provides tax benefits and a simplified status for Moroccan tech start-ups.",
    source: "Loi sur les start-ups (Startup Act, 2024)",
    sourceAr: "قانون الشركات الناشئة (Startup Act، 2024)",
    sourceEn: "Startup Act (2024)",
    axis: "econ",
    axisPolarity: 1,
  },

  // Politique étrangère (7)
  {
    id: "c-intl-1",
    category: "international",
    text: "Le Maroc doit renforcer prioritairement ses relations économiques avec l'Union européenne plutôt qu'avec d'autres blocs.",
    textAr: "يجب على المغرب تعزيز علاقاته الاقتصادية مع الاتحاد الأوروبي على سبيل الأولوية مقارنة بتكتلات أخرى.",
    textEn:
      "Morocco should prioritize strengthening its economic ties with the European Union over other blocs.",
    explainer:
      "L'Union européenne reste le premier partenaire commercial du Maroc, avec un accord d'association ancien (1996) et des tensions récurrentes autour des accords agricoles et de pêche.",
    explainerAr:
      "يبقى الاتحاد الأوروبي الشريك التجاري الأول للمغرب، باتفاقية شراكة قديمة (1996) وتوترات متكررة حول اتفاقيات الفلاحة والصيد البحري.",
    explainerEn:
      "The European Union remains Morocco's top trading partner, with a long-standing association agreement (1996) and recurring tensions over agricultural and fishing agreements.",
    source: "Accord d'association Maroc-Union européenne (1996)",
    sourceAr: "اتفاقية الشراكة بين المغرب والاتحاد الأوروبي (1996)",
    sourceEn: "Morocco-EU Association Agreement (1996)",
    axis: "ouverture",
    axisPolarity: -1,
  },
  {
    id: "c-intl-2",
    category: "international",
    text: "Le Maroc doit diversifier ses partenariats militaires au-delà de ses alliances traditionnelles.",
    textAr: "يجب على المغرب تنويع شراكاته العسكرية إلى ما هو أبعد من تحالفاته التقليدية.",
    textEn: "Morocco should diversify its military partnerships beyond its traditional alliances.",
    explainer:
      "Le Maroc a diversifié ses fournisseurs d'équipements militaires ces dernières années (États-Unis, France, mais aussi Israël depuis la normalisation de 2020), au-delà de ses alliances traditionnelles.",
    explainerAr:
      "نوّع المغرب موردي عتاده العسكري في السنوات الأخيرة (الولايات المتحدة، فرنسا، وكذلك إسرائيل منذ التطبيع سنة 2020)، متجاوزا تحالفاته التقليدية.",
    explainerEn:
      "Morocco has diversified its military equipment suppliers in recent years (the United States, France, and also Israel since the 2020 normalization), beyond its traditional alliances.",
    source: "Ministère de la Défense nationale",
    sourceAr: "وزارة الدفاع الوطني",
    sourceEn: "Ministry of National Defense",
    axis: "ouverture",
    axisPolarity: 1,
  },
  {
    id: "c-intl-3",
    category: "international",
    text: "L'aide publique au développement envers les pays africains doit augmenter significativement.",
    textAr: "يجب أن تزيد المساعدة العمومية للتنمية الموجهة للدول الإفريقية بشكل ملموس.",
    textEn: "Public development aid to African countries should increase significantly.",
    explainer:
      "Le Maroc a fortement développé sa coopération Sud-Sud en Afrique depuis son retour à l'Union africaine en 2017, notamment via des investissements bancaires, agricoles et dans les phosphates (OCP).",
    explainerAr:
      "طور المغرب بشكل كبير تعاونه جنوب-جنوب في إفريقيا منذ عودته إلى الاتحاد الإفريقي سنة 2017، خصوصا عبر استثمارات بنكية وفلاحية وفي مجال الفوسفاط.",
    explainerEn:
      "Morocco has substantially expanded its South-South cooperation in Africa since rejoining the African Union in 2017, notably through banking, agricultural, and phosphate (OCP) investments.",
    source: "Ministère des Affaires étrangères — coopération Sud-Sud",
    sourceAr: "وزارة الشؤون الخارجية — التعاون جنوب-جنوب",
    sourceEn: "Ministry of Foreign Affairs — South-South cooperation",
    axis: "ouverture",
    axisPolarity: 1,
  },
  {
    id: "c-intl-4",
    category: "international",
    text: "Le Maroc doit jouer un rôle actif de médiation dans les conflits régionaux africains.",
    textAr: "يجب على المغرب لعب دور فاعل في الوساطة بالنزاعات الإفريقية الجهوية.",
    textEn: "Morocco should play an active mediation role in African regional conflicts.",
    explainer:
      "Le Maroc s'est positionné à plusieurs reprises comme médiateur ou facilitateur dans des dossiers régionaux africains, en particulier au Sahel, dans le cadre de sa diplomatie religieuse et économique.",
    explainerAr:
      "تموقع المغرب في عدة مناسبات كوسيط أو ميسّر في ملفات إفريقية جهوية، خصوصا في منطقة الساحل، في إطار دبلوماسيته الدينية والاقتصادية.",
    explainerEn:
      "Morocco has repeatedly positioned itself as a mediator or facilitator in African regional issues, particularly in the Sahel, as part of its religious and economic diplomacy.",
    source: "Ministère des Affaires étrangères — diplomatie africaine",
    sourceAr: "وزارة الشؤون الخارجية — الدبلوماسية الإفريقية",
    sourceEn: "Ministry of Foreign Affairs — African diplomacy",
    axis: "ouverture",
    axisPolarity: 1,
  },
  {
    id: "c-intl-5",
    category: "international",
    text: "Les accords de libre-échange doivent être renégociés pour mieux protéger les industries marocaines naissantes.",
    textAr: "يجب إعادة التفاوض بشأن اتفاقيات التبادل الحر لحماية الصناعات المغربية الناشئة بشكل أفضل.",
    textEn:
      "Free-trade agreements should be renegotiated to better protect Morocco's infant industries.",
    explainer:
      "Le Maroc a signé une cinquantaine d'accords de libre-échange ; certains secteurs industriels locaux (textile notamment) réclament régulièrement une révision de certains accords jugés déséquilibrés.",
    explainerAr:
      "وقع المغرب حوالي خمسين اتفاقية للتبادل الحر؛ وتطالب بعض القطاعات الصناعية المحلية (النسيج خصوصا) بانتظام بمراجعة بعض الاتفاقيات المعتبرة غير متوازنة.",
    explainerEn:
      "Morocco has signed around fifty free-trade agreements; some local industrial sectors (textiles in particular) regularly call for revising deals they consider unbalanced.",
    source: "Ministère de l'Industrie et du Commerce — accords de libre-échange",
    sourceAr: "وزارة الصناعة والتجارة — اتفاقيات التبادل الحر",
    sourceEn: "Ministry of Industry and Trade — free-trade agreements",
    axis: "ouverture",
    axisPolarity: -1,
  },
  {
    id: "c-intl-6",
    category: "international",
    text: "Le Maroc doit renforcer sa coopération scientifique et universitaire avec les pays du Golfe.",
    textAr: "يجب على المغرب تعزيز تعاونه العلمي والجامعي مع دول الخليج.",
    textEn: "Morocco should strengthen its scientific and academic cooperation with Gulf countries.",
    explainer:
      "Les investissements des pays du Golfe (Émirats, Arabie saoudite, Qatar) dans l'économie marocaine se sont multipliés ces dernières années, notamment dans l'immobilier, l'énergie et l'enseignement supérieur privé.",
    explainerAr:
      "تضاعفت استثمارات دول الخليج (الإمارات، السعودية، قطر) في الاقتصاد المغربي في السنوات الأخيرة، خصوصا في العقار والطاقة والتعليم العالي الخاص.",
    explainerEn:
      "Investments from Gulf countries (UAE, Saudi Arabia, Qatar) in the Moroccan economy have multiplied in recent years, notably in real estate, energy, and private higher education.",
    source: "AMDIE — investissements du Golfe au Maroc",
    sourceAr: "الوكالة المغربية لتنمية الاستثمارات والصادرات — استثمارات دول الخليج بالمغرب",
    sourceEn: "AMDIE — Gulf investment in Morocco",
    axis: "ouverture",
    axisPolarity: -1,
  },
  {
    id: "c-intl-7",
    category: "international",
    text: "Le Maroc doit maintenir une position de non-alignement actif entre les grandes puissances mondiales plutôt que de privilégier un camp.",
    textAr: "يجب على المغرب الحفاظ على موقف عدم انحياز فاعل بين القوى العالمية الكبرى بدل تفضيل معسكر بعينه.",
    textEn:
      "Morocco should maintain a stance of active non-alignment among world powers rather than favoring one camp.",
    explainer:
      "Le Maroc entretient des relations soutenues à la fois avec les États-Unis, la France, la Chine et les pays du Golfe, une diplomatie souvent qualifiée de « multi-alignée » plutôt que strictement non-alignée.",
    explainerAr:
      "يحافظ المغرب على علاقات وطيدة في آن واحد مع الولايات المتحدة وفرنسا والصين ودول الخليج، وهي دبلوماسية توصف غالبا بـ«التعدد في التحالفات» أكثر من كونها عدم انحياز صارم.",
    explainerEn:
      "Morocco maintains strong ties simultaneously with the United States, France, China, and Gulf countries, a diplomacy often described as \"multi-aligned\" rather than strictly non-aligned.",
    source: "Ministère des Affaires étrangères — orientations de la politique étrangère",
    sourceAr: "وزارة الشؤون الخارجية — توجهات السياسة الخارجية",
    sourceEn: "Ministry of Foreign Affairs — foreign policy orientations",
    axis: "ouverture",
    axisPolarity: 1,
  },
];
