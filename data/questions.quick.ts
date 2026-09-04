import type { Question } from "@/lib/types";

/**
 * "Test rapide" — 20 questions, independently curated from the 100-question
 * "Test complet" (not a subset): one strong, discriminating statement per
 * major axis. See lib/ideology.ts for how party positions are derived.
 */
export const quickQuestions: Question[] = [
  {
    id: "r-subventions",
    category: "economie",
    text: "L'État doit réduire les subventions générales (Caisse de Compensation) et cibler l'aide sociale directement vers les ménages pauvres.",
    textAr:
      "يجب على الدولة تقليص الدعم العام (صندوق المقاصة) وتوجيه المساعدة الاجتماعية مباشرة نحو الأسر الفقيرة.",
    textEn:
      "The state should cut general subsidies (Caisse de Compensation) and target social aid directly at poor households.",
    explainer:
      "La Caisse de Compensation subventionne depuis des décennies des produits comme le gaz butane, le sucre ou la farine pour tout le monde, riche ou pauvre. Le Registre Social Unifié (RSU), généralisé depuis 2023, permet en théorie de cibler l'aide vers les ménages qui en ont le plus besoin.",
    explainerAr:
      "يدعم صندوق المقاصة منذ عقود مواد مثل غاز البوتان والسكر والدقيق للجميع، الغني والفقير على حد سواء. يسمح السجل الاجتماعي الموحد (RSU)، المعمم منذ 2023، نظريا بتوجيه الدعم نحو الأسر الأكثر احتياجا.",
    explainerEn:
      "The Caisse de Compensation has for decades subsidized products like butane gas, sugar, or flour for everyone, rich or poor alike. The Unified Social Registry (RSU), rolled out nationwide since 2023, is meant to target aid toward the households that need it most.",
    source: "Registre Social Unifié (RSU) — social.gov.ma",
    sourceAr: "السجل الاجتماعي الموحد — social.gov.ma",
    sourceEn: "Unified Social Registry (RSU) — social.gov.ma",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "r-impot-fortune",
    category: "economie",
    text: "Le Maroc devrait créer un impôt sur les grandes fortunes pour financer les services publics.",
    textAr: "يجب على المغرب إحداث ضريبة على الثروات الكبرى لتمويل الخدمات العمومية.",
    textEn: "Morocco should create a wealth tax on large fortunes to fund public services.",
    explainer:
      "Le Maroc n'a pas d'impôt sur la fortune à proprement parler ; certains évoquent le précédent de la contribution de solidarité ponctuelle mise en place sur les grandes entreprises pendant la crise du Covid-19.",
    explainerAr:
      "لا يتوفر المغرب حاليا على ضريبة على الثروة بالمعنى الدقيق؛ ويستحضر البعض سابقة المساهمة التضامنية الاستثنائية التي فُرضت على الشركات الكبرى خلال أزمة كوفيد-19.",
    explainerEn:
      "Morocco has no wealth tax as such; some point to the precedent of the one-off solidarity contribution levied on large companies during the Covid-19 crisis.",
    source: "Loi de finances — ministère de l'Économie et des Finances",
    sourceAr: "قانون المالية — وزارة الاقتصاد والمالية",
    sourceEn: "Finance Act — Ministry of Economy and Finance",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "r-amo",
    category: "social",
    text: "L'Assurance Maladie Obligatoire doit être étendue à tous, avec un financement public plus important.",
    textAr:
      "يجب توسيع التأمين الإجباري عن المرض ليشمل الجميع، بتمويل عمومي أكبر.",
    textEn:
      "Mandatory health insurance (AMO) should be extended to everyone, with greater public funding.",
    explainer:
      "La loi n° 27-22 a généralisé l'Assurance Maladie Obligatoire (AMO) et supprimé le RAMED, l'ancien régime d'assistance médicale pour les plus démunis, dont l'État prend désormais en charge les cotisations.",
    explainerAr:
      "عمّم القانون رقم 27.22 التأمين الإجباري عن المرض (AMO) وألغى نظام المساعدة الطبية «راميد» القديم الموجه للفئات الأكثر فقرا، حيث تتحمل الدولة الآن اشتراكاتهم.",
    explainerEn:
      "Law 27-22 made mandatory health insurance (AMO) universal and abolished RAMED, the old medical assistance scheme for the poorest, whose contributions the state now covers.",
    source: "Loi n° 27-22 sur la généralisation de l'AMO",
    sourceAr: "القانون رقم 27.22 المتعلق بتعميم التأمين الإجباري عن المرض",
    sourceEn: "Law 27-22 on universal mandatory health insurance",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "r-retraites",
    category: "social",
    text: "L'âge de départ à la retraite doit être relevé pour équilibrer les caisses de retraite, même si c'est impopulaire.",
    textAr:
      "يجب رفع سن التقاعد لتحقيق توازن صناديق التقاعد، حتى لو كان ذلك غير شعبي.",
    textEn:
      "The retirement age should be raised to balance the pension funds, even if it's unpopular.",
    explainer:
      "Les caisses de retraite marocaines (CMR pour la fonction publique, CNSS pour le privé) font face à des déficits projetés à moyen terme ; une réforme de l'âge de départ et des cotisations est débattue depuis plusieurs années sans consensus.",
    explainerAr:
      "تواجه صناديق التقاعد المغربية (الصندوق المغربي للتقاعد للقطاع العام، والصندوق الوطني للضمان الاجتماعي للقطاع الخاص) عجزا متوقعا على المدى المتوسط، ويُناقش إصلاح سن التقاعد والاشتراكات منذ سنوات دون توافق.",
    explainerEn:
      "Morocco's pension funds (CMR for civil servants, CNSS for the private sector) face projected medium-term deficits; a reform of the retirement age and contributions has been debated for years without consensus.",
    source: "Caisse Marocaine des Retraites (CMR) / CNSS",
    sourceAr: "الصندوق المغربي للتقاعد / الصندوق الوطني للضمان الاجتماعي",
    sourceEn: "Moroccan Pension Fund (CMR) / CNSS",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "r-langue-sciences",
    category: "education",
    text: "Les matières scientifiques dans l'enseignement public doivent être enseignées principalement en français.",
    textAr: "يجب تدريس المواد العلمية في التعليم العمومي أساسا باللغة الفرنسية.",
    textEn: "Science subjects in public education should be taught mainly in French.",
    explainer:
      "Depuis 2019, le Maroc a progressivement réintroduit le français pour les matières scientifiques au collège et au lycée.",
    explainerAr:
      "منذ 2019، أعاد المغرب تدريجيا اعتماد اللغة الفرنسية لتدريس المواد العلمية في الإعدادي والثانوي.",
    explainerEn:
      "Since 2019, Morocco has gradually reintroduced French for science subjects in middle and high school.",
    source: "Ministère de l'Éducation nationale — réforme des langues d'enseignement",
    sourceAr: "وزارة التربية الوطنية — إصلاح لغات التدريس",
    sourceEn: "Ministry of National Education — language-of-instruction reform",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "r-sante-publique",
    category: "sante",
    text: "L'État doit prioriser l'investissement dans les hôpitaux publics plutôt qu'encourager le secteur privé de santé.",
    textAr:
      "يجب على الدولة إعطاء الأولوية للاستثمار في المستشفيات العمومية بدل تشجيع القطاع الصحي الخاص.",
    textEn:
      "The state should prioritize investment in public hospitals rather than encouraging the private health sector.",
    explainer:
      "Le Maroc souffre d'un déficit important de médecins et de lits hospitaliers publics, surtout en zone rurale, tandis que le secteur privé s'est fortement développé dans les grandes villes.",
    explainerAr:
      "يعاني المغرب من نقص كبير في الأطباء والأسرة الاستشفائية العمومية، خصوصا في المناطق القروية، في حين تطور القطاع الخاص بشكل كبير في المدن الكبرى.",
    explainerEn:
      "Morocco suffers from a significant shortage of doctors and public hospital beds, especially in rural areas, while the private sector has grown strongly in big cities.",
    source: "Ministère de la Santé et de la Protection sociale",
    sourceAr: "وزارة الصحة والحماية الاجتماعية",
    sourceEn: "Ministry of Health and Social Protection",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "r-taxation-agrobusiness",
    category: "agriculture",
    text: "Les grandes exploitations agricoles exportatrices doivent être davantage taxées au profit des petits agriculteurs.",
    textAr:
      "يجب فرض ضرائب أكبر على الضيعات الفلاحية الكبرى المصدِّرة لفائدة صغار الفلاحين.",
    textEn:
      "Large export-oriented farms should be taxed more, to the benefit of small farmers.",
    explainer:
      "L'agriculture d'exportation (agrumes, primeurs, avocats) bénéficie d'exonérations fiscales historiques, alors que la majorité des exploitations marocaines restent de petite taille et peu mécanisées.",
    explainerAr:
      "تستفيد الفلاحة التصديرية (الحوامض، الخضر المبكرة، الأفوكادو) من إعفاءات ضريبية تاريخية، في حين تبقى غالبية الضيعات الفلاحية المغربية صغيرة الحجم وضعيفة الميكنة.",
    explainerEn:
      "Export agriculture (citrus, early vegetables, avocados) benefits from long-standing tax exemptions, while most Moroccan farms remain small and poorly mechanized.",
    source: "Ministère de l'Agriculture — stratégie Génération Green",
    sourceAr: "وزارة الفلاحة — استراتيجية الجيل الأخضر",
    sourceEn: "Ministry of Agriculture — Génération Green strategy",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "r-flexibilite-travail",
    category: "emploi",
    text: "Le Code du travail doit être assoupli pour faciliter l'embauche et le licenciement.",
    textAr: "يجب تخفيف مدونة الشغل لتسهيل التوظيف والتسريح.",
    textEn: "Labour law should be loosened to make hiring and firing easier.",
    explainer:
      "Le Code du travail marocain (loi 65-99) encadre les licenciements par une procédure d'autorisation ; les organisations patronales demandent régulièrement plus de souplesse, les syndicats s'y opposent.",
    explainerAr:
      "تؤطر مدونة الشغل المغربية (القانون 65.99) عمليات التسريح بمسطرة للترخيص؛ وتطالب المنظمات المهنية للمشغلين بانتظام بمزيد من المرونة، بينما تعارض النقابات ذلك.",
    explainerEn:
      "Morocco's Labour Code (law 65-99) requires an authorization procedure for layoffs; employer organizations regularly call for more flexibility, while unions oppose it.",
    source: "Code du travail — loi n° 65-99",
    sourceAr: "مدونة الشغل — القانون رقم 65.99",
    sourceEn: "Labour Code — law 65-99",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "r-emplois-jeunes",
    category: "emploi",
    text: "L'État doit garantir un programme public d'emploi pour tout jeune diplômé sans emploi depuis plus d'un an.",
    textAr:
      "يجب على الدولة ضمان برنامج عمومي للتشغيل لكل شاب حامل لشهادة عاطل عن العمل منذ أكثر من سنة.",
    textEn:
      "The state should guarantee a public jobs program for every graduate unemployed for more than a year.",
    explainer:
      "Le taux de chômage des jeunes diplômés reste élevé selon le Haut-Commissariat au Plan, en particulier en milieu urbain ; plusieurs programmes publics (Forsa, Awrach) ont tenté d'y répondre ces dernières années.",
    explainerAr:
      "لا تزال نسبة بطالة الشباب حاملي الشهادات مرتفعة حسب المندوبية السامية للتخطيط، خصوصا في صفوف شباب المدن؛ وحاولت عدة برامج عمومية (فرصة، أوراش) معالجة هذا الإشكال في السنوات الأخيرة.",
    explainerEn:
      "The unemployment rate among young graduates remains high according to the High Commission for Planning, especially in urban areas; several public programs (Forsa, Awrach) have tried to address this in recent years.",
    source: "Haut-Commissariat au Plan (HCP) — enquête emploi",
    sourceAr: "المندوبية السامية للتخطيط — البحث الوطني حول التشغيل",
    sourceEn: "High Commission for Planning (HCP) — employment survey",
    axis: "econ",
    axisPolarity: -1,
  },
  {
    id: "r-pouvoirs-regions",
    category: "regionalisation",
    text: "Les régions doivent obtenir plus de pouvoirs budgétaires et de décision, même si cela réduit le contrôle du gouvernement central.",
    textAr:
      "يجب أن تحصل الجهات على مزيد من الصلاحيات المالية والقرارية، حتى لو قلّص ذلك من مراقبة الحكومة المركزية.",
    textEn:
      "Regions should get more budgetary and decision-making power, even if it reduces central government control.",
    explainer:
      "La loi organique n° 111-14 de 2015 a posé le cadre de la régionalisation avancée, mais les régions restent très dépendantes des transferts budgétaires de l'État central pour financer leurs projets.",
    explainerAr:
      "وضع القانون التنظيمي رقم 111.14 لسنة 2015 إطار الجهوية المتقدمة، لكن الجهات تبقى معتمدة بشكل كبير على التحويلات المالية من الدولة المركزية لتمويل مشاريعها.",
    explainerEn:
      "Organic law 111-14 of 2015 set the framework for advanced regionalization, but regions remain heavily dependent on budget transfers from the central state to fund their projects.",
    source: "Loi organique n° 111-14 relative aux régions",
    sourceAr: "القانون التنظيمي رقم 111.14 المتعلق بالجهات",
    sourceEn: "Organic law 111-14 on regions",
    axis: "decentralisation",
    axisPolarity: 1,
  },
  {
    id: "r-sortie-charbon",
    category: "environnement",
    text: "Le Maroc doit accélérer la sortie du charbon dans son mix électrique, même si cela coûte plus cher à court terme.",
    textAr:
      "يجب على المغرب تسريع التخلي عن الفحم في مزيجه الكهربائي، حتى لو كلّف ذلك أكثر على المدى القصير.",
    textEn:
      "Morocco should speed up phasing out coal in its power mix, even if it costs more in the short term.",
    explainer:
      "Le Maroc s'est fixé un objectif de 52 % de capacité électrique renouvelable à l'horizon 2030, mais reste encore dépendant de centrales à charbon comme celles de Jorf Lasfar et Safi pour une large part de sa production.",
    explainerAr:
      "حدد المغرب هدف بلوغ 52% من القدرة الكهربائية من الطاقات المتجددة في أفق 2030، لكنه لا يزال يعتمد على محطات الفحم مثل الجرف الأصفر وآسفي في جزء كبير من إنتاجه.",
    explainerEn:
      "Morocco has set a target of 52% renewable electricity capacity by 2030, but still relies on coal plants like Jorf Lasfar and Safi for a large share of its output.",
    source: "Stratégie énergétique nationale — ministère de la Transition énergétique",
    sourceAr: "الاستراتيجية الطاقية الوطنية — وزارة الانتقال الطاقي",
    sourceEn: "National energy strategy — Ministry of Energy Transition",
    axis: "environnement",
    axisPolarity: 1,
  },
  {
    id: "r-independance-justice",
    category: "justice",
    text: "Le pouvoir judiciaire doit être rendu totalement indépendant du pouvoir exécutif.",
    textAr: "يجب أن تصبح السلطة القضائية مستقلة تماما عن السلطة التنفيذية.",
    textEn: "The judiciary should be made fully independent of the executive branch.",
    explainer:
      "La Constitution de 2011 a créé le Conseil Supérieur du Pouvoir Judiciaire (CSPJ), présidé par le Roi, pour garantir l'indépendance des magistrats ; certains observateurs estiment que cette présidence limite une séparation complète avec l'exécutif.",
    explainerAr:
      "أحدث دستور 2011 المجلس الأعلى للسلطة القضائية، الذي يرأسه الملك، لضمان استقلالية القضاة؛ ويرى بعض المراقبين أن هذه الرئاسة تحد من الفصل الكامل عن السلطة التنفيذية.",
    explainerEn:
      "The 2011 Constitution created the Supreme Council of the Judiciary (CSPJ), chaired by the King, to guarantee judges' independence; some observers argue this chairmanship limits a full separation from the executive.",
    source: "Conseil Supérieur du Pouvoir Judiciaire (CSPJ) — Constitution de 2011",
    sourceAr: "المجلس الأعلى للسلطة القضائية — دستور 2011",
    sourceEn: "Supreme Council of the Judiciary (CSPJ) — 2011 Constitution",
    axis: "transparence",
    axisPolarity: 1,
  },
  {
    id: "r-declaration-patrimoine",
    category: "gouvernance",
    text: "Les élus et hauts fonctionnaires doivent être obligés de déclarer publiquement leur patrimoine.",
    textAr: "يجب إلزام المنتخبين وكبار الموظفين بالتصريح العلني بممتلكاتهم.",
    textEn: "Elected officials and senior civil servants should be required to publicly declare their assets.",
    explainer:
      "La loi n° 54-06 impose déjà une déclaration de patrimoine à certains élus et fonctionnaires, mais elle n'est pas rendue publique ; seules l'Instance Nationale de la Probité (INPPLC) et quelques institutions y ont accès.",
    explainerAr:
      "يفرض القانون رقم 54.06 بالفعل التصريح بالممتلكات على بعض المنتخبين والموظفين، لكنه لا يُنشر للعموم؛ ولا تطلع عليه سوى الهيئة الوطنية للنزاهة (INPPLC) وبعض المؤسسات المخوَّل لها ذلك.",
    explainerEn:
      "Law 54-06 already requires certain elected officials and civil servants to declare their assets, but it is not made public; only the National Integrity Authority (INPPLC) and a few institutions can access it.",
    source: "Loi n° 54-06 sur la déclaration obligatoire de patrimoine",
    sourceAr: "القانون رقم 54.06 المتعلق بالتصريح الإجباري بالممتلكات",
    sourceEn: "Law 54-06 on mandatory asset declaration",
    axis: "transparence",
    axisPolarity: 1,
  },
  {
    id: "r-immunite-elus",
    category: "gouvernance",
    text: "Les élus reconnus coupables de corruption doivent être immédiatement déchus de leur mandat.",
    textAr: "يجب إسقاط عضوية المنتخبين المدانين بالفساد فورا.",
    textEn: "Elected officials found guilty of corruption should be immediately stripped of their mandate.",
    explainer:
      "Actuellement, un élu condamné pour corruption ne perd pas automatiquement son mandat ; la déchéance dépend de procédures judiciaires et administratives qui peuvent prendre plusieurs années.",
    explainerAr:
      "حاليا، لا يفقد المنتخب المدان بالفساد عضويته تلقائيا؛ إذ يتوقف إسقاط العضوية على مساطر قضائية وإدارية قد تستغرق عدة سنوات.",
    explainerEn:
      "Currently, an official convicted of corruption does not automatically lose their mandate; removal depends on judicial and administrative procedures that can take several years.",
    source: "Code électoral — Instance Nationale de la Probité (INPPLC)",
    sourceAr: "مدونة الانتخابات — الهيئة الوطنية للنزاهة",
    sourceEn: "Electoral Code — National Integrity Authority (INPPLC)",
    axis: "transparence",
    axisPolarity: 1,
  },
  {
    id: "r-regularisation-migrants",
    category: "migration",
    text: "Le Maroc doit faciliter la régularisation des migrants subsahariens présents sur son territoire.",
    textAr:
      "يجب على المغرب تسهيل تسوية وضعية المهاجرين من جنوب الصحراء المقيمين على أراضيه.",
    textEn:
      "Morocco should make it easier for sub-Saharan migrants on its territory to regularize their status.",
    explainer:
      "Le Maroc a mené deux campagnes exceptionnelles de régularisation de migrants en situation irrégulière (2014 et 2017) dans le cadre de sa Stratégie Nationale d'Immigration et d'Asile, saluées par certaines organisations internationales.",
    explainerAr:
      "نظم المغرب حملتين استثنائيتين لتسوية وضعية المهاجرين في وضعية غير نظامية (2014 و2017) في إطار الاستراتيجية الوطنية للهجرة واللجوء، وهي سياسة أشادت بها بعض المنظمات الدولية.",
    explainerEn:
      "Morocco has run two exceptional regularization campaigns for undocumented migrants (2014 and 2017) under its National Immigration and Asylum Strategy, praised by some international organizations.",
    source: "Stratégie Nationale d'Immigration et d'Asile (SNIA)",
    sourceAr: "الاستراتيجية الوطنية للهجرة واللجوء",
    sourceEn: "National Immigration and Asylum Strategy (SNIA)",
    axis: "ouverture",
    axisPolarity: 1,
  },
  {
    id: "r-mre-representation",
    category: "diaspora",
    text: "Les Marocains résidant à l'étranger doivent pouvoir élire directement leurs propres représentants au Parlement.",
    textAr:
      "يجب تمكين المغاربة المقيمين بالخارج من انتخاب ممثليهم مباشرة في البرلمان.",
    textEn:
      "Moroccans living abroad should be able to directly elect their own representatives to Parliament.",
    explainer:
      "La représentation parlementaire directe des Marocains du monde est évoquée depuis la Constitution de 2011 mais n'a toujours pas été mise en œuvre ; les MRE participent aujourd'hui au vote surtout par procuration ou via leurs proches au Maroc.",
    explainerAr:
      "التمثيلية البرلمانية المباشرة للمغاربة المقيمين بالخارج مطروحة منذ دستور 2011 لكنها لم تُفعَّل بعد؛ ويشارك المغاربة المقيمون بالخارج حاليا في التصويت أساسا بالوكالة أو عبر أقاربهم بالمغرب.",
    explainerEn:
      "Direct parliamentary representation for Moroccans abroad has been discussed since the 2011 Constitution but has still not been implemented; expatriates currently vote mainly by proxy or through relatives in Morocco.",
    source: "Constitution de 2011, article 17",
    sourceAr: "دستور 2011، الفصل 17",
    sourceEn: "2011 Constitution, article 17",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "r-moudawana",
    category: "droits",
    text: "Le Code de la famille (Moudawana) doit être réformé pour renforcer l'égalité entre les hommes et les femmes.",
    textAr: "يجب إصلاح مدونة الأسرة لتعزيز المساواة بين الرجال والنساء.",
    textEn:
      "The Family Code (Moudawana) should be reformed to strengthen equality between men and women.",
    explainer:
      "Une commission royale a proposé en 2024 une réforme de la Moudawana portant notamment sur la garde des enfants, l'héritage et l'âge du mariage ; le texte final était toujours en discussion.",
    explainerAr:
      "اقترحت لجنة ملكية سنة 2024 إصلاحا لمدونة الأسرة يهم بالخصوص الحضانة والإرث وسن الزواج؛ وكان النص النهائي لا يزال قيد النقاش.",
    explainerEn:
      "A royal commission proposed a Moudawana reform in 2024 covering child custody, inheritance, and the marriage age; the final text was still under discussion.",
    source: "Commission royale de réforme de la Moudawana (2024)",
    sourceAr: "اللجنة الملكية لإصلاح مدونة الأسرة (2024)",
    sourceEn: "Royal commission on Moudawana reform (2024)",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "r-liberte-presse",
    category: "droits",
    text: "La dépénalisation des délits de presse doit être une priorité, même pour les contenus jugés offensants.",
    textAr:
      "يجب أن يكون إلغاء تجريم جرائم الصحافة أولوية، حتى بالنسبة للمحتوى المعتبر مسيئا.",
    textEn:
      "Decriminalizing press offenses should be a priority, even for content deemed offensive.",
    explainer:
      "Le Code de la presse de 2016 a supprimé les peines de prison pour la plupart des délits de presse, mais certains délits (atteinte à la religion, à la monarchie, à l'intégrité territoriale) restent poursuivis via le Code pénal.",
    explainerAr:
      "ألغت مدونة الصحافة لسنة 2016 عقوبات السجن بالنسبة لمعظم جرائم الصحافة، لكن بعض الجرائم (المس بالدين، بالملكية، بالوحدة الترابية) تبقى خاضعة للمتابعة عبر القانون الجنائي.",
    explainerEn:
      "The 2016 Press Code removed prison sentences for most press offenses, but some offenses (insulting religion, the monarchy, or territorial integrity) are still prosecuted under the Penal Code.",
    source: "Code de la presse et de l'édition (2016)",
    sourceAr: "مدونة الصحافة والنشر (2016)",
    sourceEn: "Press and Publishing Code (2016)",
    axis: "social",
    axisPolarity: 1,
  },
  {
    id: "r-administration-digitale",
    category: "numerique",
    text: "La dématérialisation complète des démarches administratives doit être une priorité budgétaire, même au détriment d'autres dépenses.",
    textAr:
      "يجب أن تكون الرقمنة الكاملة للمساطر الإدارية أولوية في الميزانية، حتى على حساب نفقات أخرى.",
    textEn:
      "Fully digitizing administrative procedures should be a budget priority, even at the expense of other spending.",
    explainer:
      "Le Maroc a lancé la stratégie « Maroc Digital 2030 » pour dématérialiser les services publics, avec des avancées comme la carte d'identité électronique, mais de nombreuses démarches nécessitent encore un déplacement physique.",
    explainerAr:
      "أطلق المغرب استراتيجية «المغرب الرقمي 2030» لرقمنة الخدمات العمومية، مع تقدم في مجالات مثل البطاقة الوطنية الإلكترونية، لكن العديد من المساطر لا تزال تستلزم التنقل الفعلي.",
    explainerEn:
      "Morocco launched the \"Digital Morocco 2030\" strategy to digitize public services, with progress such as the electronic ID card, but many procedures still require an in-person visit.",
    source: "Stratégie Maroc Digital 2030 — Agence de Développement du Digital (ADD)",
    sourceAr: "استراتيجية المغرب الرقمي 2030 — وكالة التنمية الرقمية",
    sourceEn: "Digital Morocco 2030 strategy — Digital Development Agency (ADD)",
    axis: "econ",
    axisPolarity: 1,
  },
  {
    id: "r-diversification-partenaires",
    category: "international",
    text: "Le Maroc doit prioriser le renforcement de ses partenariats économiques avec l'Afrique subsaharienne, même si cela nécessite de réduire les investissements ailleurs.",
    textAr:
      "يجب على المغرب إعطاء الأولوية لتعزيز شراكاته الاقتصادية مع إفريقيا جنوب الصحراء، حتى لو تطلب ذلك تقليص الاستثمارات في مناطق أخرى.",
    textEn:
      "Morocco should prioritize strengthening its economic partnerships with sub-Saharan Africa, even if it means reducing investment elsewhere.",
    explainer:
      "Le Maroc a multiplié les accords économiques et diplomatiques avec les pays d'Afrique subsaharienne ces dernières années, notamment autour du projet de gazoduc Nigeria-Maroc et de son initiative d'ouverture atlantique pour les pays du Sahel.",
    explainerAr:
      "ضاعف المغرب اتفاقياته الاقتصادية والدبلوماسية مع دول إفريقيا جنوب الصحراء في السنوات الأخيرة، خصوصا في إطار مشروع أنبوب الغاز نيجيريا-المغرب ومبادرة الواجهة الأطلسية لفائدة دول الساحل.",
    explainerEn:
      "Morocco has multiplied economic and diplomatic agreements with sub-Saharan African countries in recent years, notably around the Nigeria-Morocco gas pipeline project and its Atlantic outreach initiative for Sahel countries.",
    source: "Ministère des Affaires étrangères — coopération Sud-Sud",
    sourceAr: "وزارة الشؤون الخارجية — التعاون جنوب-جنوب",
    sourceEn: "Ministry of Foreign Affairs — South-South cooperation",
    axis: "ouverture",
    axisPolarity: 1,
  },
];
