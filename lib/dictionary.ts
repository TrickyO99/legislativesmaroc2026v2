import type { Locale } from "./types";

/**
 * All UI chrome text (not quiz/party content, which lives alongside the
 * data itself as *Ar fields — see data/parties.ts and data/questions.*.ts).
 */
export const DICT = {
  fr: {
    topBar: "Outil citoyen indépendant · Gratuit · Publicité respectueuse de la vie privée",
    nav: {
      partis: "Les partis",
      methodologie: "Méthodologie",
      confidentialite: "Confidentialité",
      cookies: "Cookies",
    },
    footer:
      "Législatives Maroc 2026 est un projet citoyen indépendant, non affilié à un parti, une administration ou une instance électorale. Les positions affichées sont des estimations en cours de vérification — voir la",
    footerLink: "méthodologie",
    footerBadge: "🔒 Indépendant · Publicité transparente · Partage de données 100% optionnel",
    footerCopyright: (y: number) => `© ${y} Législatives Maroc 2026`,
    home: {
      badge: "🇲🇦 Législatives marocaines",
      title: "Pas sûr·e pour qui voter aux législatives ?",
      subtitle:
        "Répondez à une série d'affirmations sur des sujets concrets — économie, santé, éducation, régionalisation... — et découvrez quels partis marocains partagent le plus vos opinions.",
      quickTitle: "Test rapide",
      quickCount: "20 questions",
      quickDuration: "~5 minutes",
      quickDesc:
        "Un aperçu rapide sur les grands sujets qui distinguent les partis.",
      fullTitle: "Test complet",
      fullCount: "100 questions",
      fullDuration: "~25 minutes",
      fullDesc:
        "Une analyse approfondie pour un résultat plus précis et nuancé.",
      start: "Commencer →",
      partiesHeading: (n: number) => `${n} partis dans la base`,
      seeAll: "Voir tous les partis et leurs positions →",
      statsHeading: "Une base citoyenne",
      statParties: "PARTIS",
      statQuestions: "QUESTIONS",
      statSources: "SOURCES",
      statsDescription:
        "Lois, institutions officielles et programmes publics : une base pour tout savoir sur les partis et leurs positions.",
      statsCta: "Parcourir les partis et leurs positions →",
      guaranteesHeading: "Nos garanties",
      guarantee1Title: "Vous décidez de vos données",
      guarantee1Desc:
        "Vos réponses restent sur votre appareil par défaut. Rien n'est envoyé sauf si vous choisissez explicitement de les partager, de façon anonyme.",
      guarantee2Title: "Publicité transparente",
      guarantee2Desc:
        "Ce site affiche des publicités pour rester gratuit ; elles ne s'activent qu'après votre consentement.",
      guarantee3Title: "Projet indépendant",
      guarantee3Desc: "Non affilié à un parti, une administration ou une instance électorale.",
      guarantee4Title: "Transparent",
      guarantee4Desc: "La méthodologie et les sources sont vérifiables par tous.",
      guarantee5Title: "Formulations neutres",
      guarantee5Desc: "Des affirmations équilibrées, sans parti pris dans la formulation.",
      guarantee6Title: "Indicatif seulement",
      guarantee6Desc: "Un outil d'aide à la réflexion, pas un oracle. Le vote final vous appartient.",
      howHeading: "Comment ça marche ?",
      step1Title: "Choisissez un test",
      step1Desc: "20 questions rapides ou 100 questions complètes.",
      step2Title: "Répondez honnêtement",
      step2Desc: "Sur une échelle de tout à fait d'accord à pas du tout d'accord.",
      step3Title: "Découvrez vos résultats",
      step3Desc: "Correspondance en pourcentage, parti par parti.",
      step4Title: "Approfondissez",
      step4Desc: "Consultez les sources et la méthodologie de chaque position.",
    },
    quiz: {
      question: (i: number, total: number) => `Question ${i} / ${total}`,
      quit: "Quitter",
      context: "Contexte",
      savedCount: (n: number) => `${n} réponse${n > 1 ? "s" : ""} enregistrée${n > 1 ? "s" : ""}`,
      likert: [
        "Pas du tout d'accord",
        "Plutôt pas d'accord",
        "Neutre",
        "Plutôt d'accord",
        "Tout à fait d'accord",
      ],
      noOpinion: "Sans opinion / je ne sais pas",
      sourceLabel: "Source :",
      weightLabel: "Ce sujet compte plus pour moi (compte double)",
      prev: "← Précédent",
      next: "Suivant →",
      finish: "Voir mes résultats",
    },
    results: {
      title: "Vos résultats",
      subtitle: (quizLabel: string) =>
        `Classement des partis par pourcentage d'accord avec vos réponses au ${quizLabel}.`,
      quickLabel: "test rapide",
      fullLabel: "test complet",
      detailHeading: "Détail par parti",
      noAnswers: "Aucune réponse trouvée pour ce test.",
      startCta: "Commencer un test",
      basedOn: (n: number) =>
        `Basé sur ${n} question${n > 1 ? "s" : ""} où ce parti a une position déclarée.`,
      disclaimer:
        "Ce résultat est une aide à la réflexion, pas une recommandation de vote. Les positions des partis sont des estimations en cours de vérification — voir la",
      disclaimerLink: "méthodologie",
      strong: "Accord fort",
      partial: "Accord partiel",
      partialDisagree: "Désaccord partiel",
      disagree: "Désaccord",
      noData: "Pas de donnée",
      shareOptIn: {
        title: "Aider la recherche",
        description:
          "Partagez vos réponses de façon anonyme pour aider à mieux comprendre les opinions politiques au Maroc. Aucune information ne permettant de vous identifier n'est envoyée — ni adresse IP, ni identifiant, ni compte.",
        cta: "Partager mes réponses anonymisées",
        sending: "Envoi…",
        sent: "Merci, vos réponses anonymisées ont été partagées.",
        error: "Une erreur est survenue. Réessayez plus tard.",
      },
    },
    partis: {
      title: "Les partis",
      subtitle: (n: number) =>
        `${n} partis actuellement dans la base. Les descriptions sont des résumés neutres en cours de vérification (voir la méthodologie).`,
      leader: "Chef de file",
      founded: (y: number) => `Fondé en ${y}`,
      seats: (n: number) => `${n} siège${n > 1 ? "s" : ""} (2021)`,
    },
    methodologie: {
      title: "Méthodologie",
      s1h: "Qui est derrière ce projet ?",
      s1p1:
        "MonVote Maroc est un projet citoyen indépendant. Il n'est affilié à aucun parti politique, administration publique ou instance électorale, et ne reçoit aucun financement de parti. L'objectif est d'aider les électeurs à comparer leurs propres opinions à celles des partis en lice, pas de recommander un vote.",
      s2h: "Comment le score est calculé",
      s2p1:
        "Pour chaque affirmation, vous exprimez votre accord sur une échelle de -2 (pas du tout d'accord) à +2 (tout à fait d'accord), ou vous passez la question. Vous pouvez aussi indiquer qu'un sujet compte plus pour vous, ce qui double son poids dans le calcul.",
      s2p2:
        "Chaque parti a, quand elle est connue, une position déclarée sur la même échelle. Le pourcentage affiché mesure la proximité moyenne (pondérée) entre vos réponses et les positions du parti, uniquement sur les questions où le parti a une position déclarée. Un parti qui n'a pas pris position sur un sujet n'est ni pénalisé ni avantagé sur ce sujet : la question est simplement exclue de son calcul.",
      s3h: "D'où viennent les positions des partis ?",
      s3p1strong: "Important :",
      s3p1:
        "les positions actuellement dans la base sont des estimations de départ, établies à partir de la ligne générale connue de chaque parti. Elles n'ont pas encore été vérifiées une par une contre un programme électoral ou une déclaration officielle récente. Chaque position porte un statut « vérifié » ou non, et une source sera ajoutée au fur et à mesure de la vérification. Tant qu'une position n'est pas marquée vérifiée, elle doit être considérée comme indicative seulement.",
      s3p2:
        "Concrètement, la plupart des positions affichées ne viennent pas d'une déclaration officielle relevée question par question : elles sont déduites du positionnement idéologique général de chaque parti sur six grands axes (économique, société, centralisation du pouvoir, environnement, transparence, ouverture internationale), appliqué à l'orientation de chaque question. Un petit nombre de positions bien documentées et largement connues (par exemple la ligne du PJD contre la baisse des subventions) ont été fixées à la main. Cette méthode garantit une cohérence idéologique raisonnable en attendant une vérification complète, mais elle reste une approximation.",
      s3p3:
        "Les petits partis n'ont volontairement une position affichée que sur les thèmes où ils ont une ligne publique connue — le reste est traité comme « pas de position déclarée » plutôt que d'être deviné.",
      s3p4:
        "Vous avez repéré une erreur ou une position obsolète ? Ce projet est conçu pour être corrigé : les données sont dans des fichiers publics et toute correction sourcée est la bienvenue.",
      s4h: "Vie privée",
      s4p1:
        "Vos réponses restent sur votre appareil par défaut et ne sont envoyées à aucun serveur, sauf si vous choisissez explicitement de les partager de façon anonyme à la fin d'un test. Ce site affiche des publicités (Google AdSense) qui ne s'activent qu'après votre consentement explicite. Voir la politique de confidentialité et la politique de cookies pour le détail.",
    },
    consent: {
      message:
        "Nous utilisons des publicités pour financer ce projet gratuit. Elles ne s'activent qu'avec votre accord.",
      learnMore: "En savoir plus",
      accept: "Accepter",
      reject: "Refuser",
    },
  },
  ar: {
    topBar: "أداة مواطنة مستقلة · مجانية · إعلانات تحترم الخصوصية",
    nav: {
      partis: "الأحزاب",
      methodologie: "المنهجية",
      confidentialite: "الخصوصية",
      cookies: "ملفات تعريف الارتباط",
    },
    footer:
      "«التشريعيات المغرب 2026» مشروع مواطن مستقل، غير تابع لأي حزب أو إدارة أو هيئة انتخابية. المواقف المعروضة تقديرات أولية قيد التحقق — راجع",
    footerLink: "المنهجية",
    footerBadge: "🔒 مستقل · إعلانات شفافة · مشاركة البيانات اختيارية بالكامل",
    footerCopyright: (y: number) => `© ${y} التشريعيات المغرب 2026`,
    home: {
      badge: "🇲🇦 الانتخابات التشريعية المغربية",
      title: "لست متأكدا لمن تصوّت في الانتخابات التشريعية؟",
      subtitle:
        "أجب عن سلسلة من العبارات حول مواضيع ملموسة — الاقتصاد، الصحة، التعليم، الجهوية... — واكتشف الأحزاب المغربية الأقرب إلى آرائك.",
      quickTitle: "الاختبار السريع",
      quickCount: "20 سؤالا",
      quickDuration: "~5 دقائق",
      quickDesc: "نظرة سريعة على أهم المواضيع التي تميّز بين الأحزاب.",
      fullTitle: "الاختبار الكامل",
      fullCount: "100 سؤال",
      fullDuration: "~25 دقيقة",
      fullDesc: "تحليل معمّق للحصول على نتيجة أدق وأكثر تفصيلا.",
      start: "← ابدأ",
      partiesHeading: (n: number) => `${n} حزبا في القاعدة`,
      seeAll: "← اطّلع على جميع الأحزاب ومواقفها",
      statsHeading: "قاعدة مواطنة",
      statParties: "أحزاب",
      statQuestions: "أسئلة",
      statSources: "مصادر",
      statsDescription:
        "قوانين ومؤسسات رسمية وبرامج عمومية: قاعدة لمعرفة كل شيء عن الأحزاب ومواقفها.",
      statsCta: "← تصفح الأحزاب ومواقفها",
      guaranteesHeading: "ضماناتنا",
      guarantee1Title: "أنت من يقرر بشأن بياناتك",
      guarantee1Desc:
        "تبقى إجاباتك على جهازك بشكل افتراضي. لا يُرسل شيء إلا إذا اخترت صراحة مشاركتها بشكل مجهول الهوية.",
      guarantee2Title: "إعلانات شفافة",
      guarantee2Desc: "يعرض هذا الموقع إعلانات ليبقى مجانيا؛ لا تُفعَّل إلا بعد موافقتك.",
      guarantee3Title: "مشروع مستقل",
      guarantee3Desc: "غير تابع لأي حزب أو إدارة أو هيئة انتخابية.",
      guarantee4Title: "شفاف",
      guarantee4Desc: "المنهجية والمصادر قابلة للتحقق من طرف الجميع.",
      guarantee5Title: "صياغة محايدة",
      guarantee5Desc: "عبارات متوازنة، دون تحيز في الصياغة.",
      guarantee6Title: "إرشادي فقط",
      guarantee6Desc: "أداة للمساعدة على التفكير، وليست حكما نهائيا. القرار الأخير يعود لك.",
      howHeading: "كيف يعمل الموقع؟",
      step1Title: "اختر اختبارا",
      step1Desc: "20 سؤالا سريعا أو 100 سؤال كامل.",
      step2Title: "أجب بصدق",
      step2Desc: "على مقياس من «موافق تماما» إلى «غير موافق إطلاقا».",
      step3Title: "اكتشف نتائجك",
      step3Desc: "نسبة التوافق مع كل حزب على حدة.",
      step4Title: "تعمّق أكثر",
      step4Desc: "اطّلع على مصادر ومنهجية كل موقف.",
    },
    quiz: {
      question: (i: number, total: number) => `السؤال ${i} / ${total}`,
      quit: "خروج",
      context: "السياق",
      savedCount: (n: number) => `${n} إجابة مسجَّلة`,
      likert: [
        "غير موافق إطلاقا",
        "غير موافق نوعا ما",
        "محايد",
        "موافق نوعا ما",
        "موافق تماما",
      ],
      noOpinion: "بدون رأي / لا أعرف",
      sourceLabel: "المصدر:",
      weightLabel: "هذا الموضوع يهمّني أكثر (وزن مضاعف)",
      prev: "→ السابق",
      next: "التالي ←",
      finish: "شاهد نتائجي",
    },
    results: {
      title: "نتائجك",
      subtitle: (quizLabel: string) =>
        `ترتيب الأحزاب حسب نسبة التوافق مع إجاباتك في ${quizLabel}.`,
      quickLabel: "الاختبار السريع",
      fullLabel: "الاختبار الكامل",
      detailHeading: "التفاصيل حسب الحزب",
      noAnswers: "لم يتم العثور على إجابات لهذا الاختبار.",
      startCta: "ابدأ اختبارا",
      basedOn: (n: number) => `استنادا إلى ${n} سؤالا لدى هذا الحزب موقف معلن بشأنها.`,
      disclaimer:
        "هذه النتيجة أداة للتفكير، وليست توصية بالتصويت. مواقف الأحزاب تقديرات قيد التحقق — راجع",
      disclaimerLink: "المنهجية",
      strong: "توافق قوي",
      partial: "توافق جزئي",
      partialDisagree: "اختلاف جزئي",
      disagree: "اختلاف",
      noData: "لا توجد بيانات",
      shareOptIn: {
        title: "المساهمة في البحث",
        description:
          "شارك إجاباتك بشكل مجهول الهوية للمساعدة على فهم أفضل للآراء السياسية في المغرب. لا تُرسل أي معلومة تسمح بالتعرف عليك — لا عنوان IP، لا معرّف، لا حساب.",
        cta: "مشاركة إجاباتي مجهولة الهوية",
        sending: "جارٍ الإرسال…",
        sent: "شكرا، تمت مشاركة إجاباتك مجهولة الهوية.",
        error: "حدث خطأ ما. حاول مرة أخرى لاحقا.",
      },
    },
    partis: {
      title: "الأحزاب",
      subtitle: (n: number) =>
        `${n} حزبا حاليا في القاعدة. الأوصاف ملخصات محايدة قيد التحقق (راجع المنهجية).`,
      leader: "الأمين العام",
      founded: (y: number) => `تأسس سنة ${y}`,
      seats: (n: number) => `${n} مقعدا (2021)`,
    },
    methodologie: {
      title: "المنهجية",
      s1h: "من وراء هذا المشروع؟",
      s1p1:
        "«مونفوت المغرب» مشروع مواطن مستقل. غير تابع لأي حزب سياسي أو إدارة عمومية أو هيئة انتخابية، ولا يتلقى أي تمويل حزبي. الهدف هو مساعدة الناخبين على مقارنة آرائهم الخاصة بمواقف الأحزاب المتنافسة، وليس التوصية بالتصويت لجهة معينة.",
      s2h: "كيف تُحتسب النتيجة",
      s2p1:
        "بالنسبة لكل عبارة، تعبّر عن مدى موافقتك على مقياس من -2 (غير موافق إطلاقا) إلى +2 (موافق تماما)، أو يمكنك تجاوز السؤال. يمكنك أيضا تحديد أن موضوعا معينا يهمّك أكثر، مما يضاعف وزنه في الحساب.",
      s2p2:
        "لكل حزب، عندما يكون معروفا، موقف معلن على نفس المقياس. النسبة المعروضة تقيس مدى التقارب المتوسط (المرجّح) بين إجاباتك ومواقف الحزب، فقط بالنسبة للأسئلة التي أعلن فيها الحزب موقفه. الحزب الذي لم يتخذ موقفا بشأن قضية ما لا يُعاقب ولا يُكافأ عليها: يُستبعد السؤال ببساطة من حسابه.",
      s3h: "من أين تأتي مواقف الأحزاب؟",
      s3p1strong: "مهم:",
      s3p1:
        "المواقف الموجودة حاليا في القاعدة هي تقديرات أولية، مبنية على الخط العام المعروف لكل حزب. لم يتم بعد التحقق منها واحدة تلو الأخرى مقابل برنامج انتخابي أو تصريح رسمي حديث. يحمل كل موقف حالة «تم التحقق» أو لا، وستُضاف المصادر تدريجيا أثناء عملية التحقق. وإلى أن يُعلَّم الموقف كـ«تم التحقق منه»، يجب اعتباره إرشاديا فقط.",
      s3p2:
        "بشكل ملموس، معظم المواقف المعروضة لا تأتي من تصريح رسمي مسجَّل سؤالا بسؤال: بل يتم استنتاجها من التموقع الإيديولوجي العام لكل حزب على ستة محاور كبرى (الاقتصاد، المجتمع، مركزية السلطة، البيئة، الشفافية، الانفتاح الدولي)، مطبَّقة على اتجاه كل سؤال. تم تثبيت عدد قليل من المواقف الموثقة والمعروفة على نطاق واسع يدويا (مثل موقف حزب العدالة والتنمية الرافض لخفض الدعم). تضمن هذه الطريقة اتساقا إيديولوجيا معقولا في انتظار تحقق كامل، لكنها تبقى تقريبية.",
      s3p3:
        "لا تظهر مواقف الأحزاب الصغيرة عمدا إلا في المواضيع التي لها فيها خط عام معروف — أما الباقي فيُعامل كـ«لا يوجد موقف معلن» بدل تخمينه.",
      s3p4:
        "هل لاحظت خطأ أو موقفا متجاوَزا؟ صُمم هذا المشروع ليكون قابلا للتصحيح: البيانات موجودة في ملفات عمومية، وأي تصحيح موثَّق بمصدر موضع ترحيب.",
      s4h: "الخصوصية",
      s4p1:
        "تبقى إجاباتك على جهازك بشكل افتراضي ولا تُرسَل إلى أي خادم، إلا إذا اخترت صراحة مشاركتها بشكل مجهول الهوية في نهاية الاختبار. يعرض هذا الموقع إعلانات (Google AdSense) لا تُفعَّل إلا بعد موافقتك الصريحة. راجع سياسة الخصوصية وسياسة ملفات تعريف الارتباط للتفاصيل.",
    },
    consent: {
      message:
        "نستخدم الإعلانات لتمويل هذا المشروع المجاني. لا تُفعَّل إلا بموافقتك.",
      learnMore: "معرفة المزيد",
      accept: "قبول",
      reject: "رفض",
    },
  },
  en: {
    topBar: "Independent citizen tool · Free · Privacy-respecting ads",
    nav: {
      partis: "Parties",
      methodologie: "Methodology",
      confidentialite: "Privacy",
      cookies: "Cookies",
    },
    footer:
      "Législatives Maroc 2026 is an independent citizen project, not affiliated with any party, administration, or electoral body. The positions shown are drafts pending verification — see the",
    footerLink: "methodology",
    footerBadge: "🔒 Independent · Transparent ads · Data sharing fully optional",
    footerCopyright: (y: number) => `© ${y} Législatives Maroc 2026`,
    home: {
      badge: "🇲🇦 Moroccan legislative elections",
      title: "Not sure who to vote for in the legislative elections?",
      subtitle:
        "Answer a series of statements on concrete topics — economy, health, education, regionalization... — and find out which Moroccan parties are closest to your views.",
      quickTitle: "Quick test",
      quickCount: "20 questions",
      quickDuration: "~5 minutes",
      quickDesc: "A quick overview of the big topics that set parties apart.",
      fullTitle: "Full test",
      fullCount: "100 questions",
      fullDuration: "~25 minutes",
      fullDesc: "An in-depth analysis for a more precise, nuanced result.",
      start: "Start →",
      partiesHeading: (n: number) => `${n} parties in the database`,
      seeAll: "See all parties and their positions →",
      statsHeading: "A citizen database",
      statParties: "PARTIES",
      statQuestions: "QUESTIONS",
      statSources: "SOURCES",
      statsDescription:
        "Laws, official institutions, and public programs — a database to know everything about the parties and their positions.",
      statsCta: "Browse the parties and their positions →",
      guaranteesHeading: "Our guarantees",
      guarantee1Title: "You control your data",
      guarantee1Desc:
        "Your answers stay on your device by default. Nothing is sent unless you explicitly choose to share it, anonymously.",
      guarantee2Title: "Transparent advertising",
      guarantee2Desc:
        "This site shows ads to stay free; they only activate after your consent.",
      guarantee3Title: "Independent project",
      guarantee3Desc: "Not affiliated with any party, administration, or electoral body.",
      guarantee4Title: "Transparent",
      guarantee4Desc: "The methodology and sources are verifiable by anyone.",
      guarantee5Title: "Neutral wording",
      guarantee5Desc: "Balanced statements, with no bias built into the phrasing.",
      guarantee6Title: "Indicative only",
      guarantee6Desc: "A thinking aid, not an oracle. The final vote is yours.",
      howHeading: "How it works",
      step1Title: "Choose a test",
      step1Desc: "20 quick questions or 100 in-depth ones.",
      step2Title: "Answer honestly",
      step2Desc: "On a scale from \"strongly agree\" to \"strongly disagree\".",
      step3Title: "See your results",
      step3Desc: "Percentage match, party by party.",
      step4Title: "Go deeper",
      step4Desc: "Check the sources and methodology behind each position.",
    },
    quiz: {
      question: (i: number, total: number) => `Question ${i} / ${total}`,
      quit: "Quit",
      context: "Context",
      savedCount: (n: number) => `${n} answer${n > 1 ? "s" : ""} saved`,
      likert: [
        "Strongly disagree",
        "Somewhat disagree",
        "Neutral",
        "Somewhat agree",
        "Strongly agree",
      ],
      noOpinion: "No opinion / don't know",
      sourceLabel: "Source:",
      weightLabel: "This topic matters more to me (double weight)",
      prev: "← Previous",
      next: "Next →",
      finish: "See my results",
    },
    results: {
      title: "Your results",
      subtitle: (quizLabel: string) =>
        `Parties ranked by percentage agreement with your answers on the ${quizLabel}.`,
      quickLabel: "quick test",
      fullLabel: "full test",
      detailHeading: "Detail by party",
      noAnswers: "No answers found for this test.",
      startCta: "Start a test",
      basedOn: (n: number) =>
        `Based on ${n} question${n > 1 ? "s" : ""} where this party has a declared position.`,
      disclaimer:
        "This result is a thinking aid, not a voting recommendation. Party positions are drafts pending verification — see the",
      disclaimerLink: "methodology",
      strong: "Strong agreement",
      partial: "Partial agreement",
      partialDisagree: "Partial disagreement",
      disagree: "Disagreement",
      noData: "No data",
      shareOptIn: {
        title: "Help research",
        description:
          "Share your answers anonymously to help better understand political opinions in Morocco. No information that could identify you is sent — no IP address, no identifier, no account.",
        cta: "Share my anonymized answers",
        sending: "Sending…",
        sent: "Thanks, your anonymized answers were shared.",
        error: "Something went wrong. Try again later.",
      },
    },
    partis: {
      title: "Parties",
      subtitle: (n: number) =>
        `${n} parties currently in the database. Descriptions are neutral summaries pending verification (see the methodology).`,
      leader: "Leader",
      founded: (y: number) => `Founded in ${y}`,
      seats: (n: number) => `${n} seat${n > 1 ? "s" : ""} (2021)`,
    },
    methodologie: {
      title: "Methodology",
      s1h: "Who is behind this project?",
      s1p1:
        "MonVote Maroc is an independent citizen project. It is not affiliated with any political party, public administration, or electoral body, and receives no funding from any party. The goal is to help voters compare their own opinions to those of competing parties, not to recommend a vote.",
      s2h: "How the score is calculated",
      s2p1:
        "For each statement, you express your agreement on a scale from -2 (strongly disagree) to +2 (strongly agree), or you can skip the question. You can also mark a topic as mattering more to you, which doubles its weight in the calculation.",
      s2p2:
        "Each party has, where known, a declared position on the same scale. The percentage shown measures the average (weighted) closeness between your answers and the party's positions, only on questions where the party has a declared position. A party that has not taken a position on a topic is neither penalized nor rewarded for it: the question is simply excluded from its calculation.",
      s3h: "Where do party positions come from?",
      s3p1strong: "Important:",
      s3p1:
        "the positions currently in the database are starting estimates, drawn from each party's known general line. They have not yet been verified one by one against an electoral platform or a recent official statement. Each position carries a \"verified\" status or not, and a source will be added as verification proceeds. Until a position is marked verified, it should be treated as indicative only.",
      s3p2:
        "Concretely, most of the positions shown do not come from an official statement recorded question by question: they are inferred from each party's general ideological positioning on six broad axes (economic, social, centralization of power, environment, transparency, international openness), applied to the direction of each question. A small number of well-documented, widely known positions (for example the PJD's stance against cutting subsidies) were set by hand. This method ensures reasonable ideological consistency while awaiting full verification, but it remains an approximation.",
      s3p3:
        "Smaller parties deliberately show a position only on topics where they have a known public line — everything else is treated as \"no declared position\" rather than guessed.",
      s3p4:
        "Spotted an error or an outdated position? This project is built to be corrected: the data lives in public files, and any sourced correction is welcome.",
      s4h: "Privacy",
      s4p1:
        "Your answers stay on your device by default and are never sent to a server, unless you explicitly choose to share them anonymously at the end of a test. This site shows ads (Google AdSense) that only activate after your explicit consent. See our privacy policy and cookie policy for details.",
    },
    consent: {
      message:
        "We use ads to fund this free project. They only activate with your consent.",
      learnMore: "Learn more",
      accept: "Accept",
      reject: "Reject",
    },
  },
} satisfies Record<Locale, unknown>;
