import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import { Search, BookOpen, LineChart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

const data = {
  en: {
    title:    "Supporting Every Child Toward Success",
    subtitle: "Personalized educational support for children with learning difficulties — building skills, confidence, and long-term progress.",
    steps: [
      {
        icon: Search, badge: "Step 1", title: "Educational Assessment",
        desc: <>A complete assessment (3–4 sessions) to identify the child's strengths and difficulties in language and mathematics.<br /><br />A detailed report with recommendations for parents and the school is provided at the end.</>,
      },
      {
        icon: BookOpen, badge: "Step 2", title: "Personalized Learning Support",
        desc: <>Individual sessions adapted to the child's profile working on Reading, Writing, Reasoning, and Mathematics.<br /><br />Each session is <strong>45 minutes</strong> and includes a brief parent update.</>,
      },
      {
        icon: LineChart, badge: "Step 3", title: "Progress Review",
        desc: <>After <strong>6 months</strong> of support, a follow-up review is offered to parents and the school.<br /><br />It evaluates progress, adjusts goals, and provides updated recommendations.</>,
      },
    ],
    closing: "A caring approach to help every child gain independence, confidence, and academic success.",
  },
  fr: {
    title:    "Accompagner chaque enfant vers la réussite",
    subtitle: "Un soutien éducatif personnalisé pour les enfants ayant des difficultés d'apprentissage — pour développer leurs compétences, leur confiance et une progression durable.",
    steps: [
      {
        icon: Search, badge: "Étape 1", title: "Évaluation éducative",
        desc: <>Une évaluation complète (3 à 4 séances) pour identifier les forces et les difficultés de l'enfant en langage et en mathématiques.<br /><br />Un rapport détaillé avec des recommandations est fourni à l'issue du processus.</>,
      },
      {
        icon: BookOpen, badge: "Étape 2", title: "Soutien pédagogique personnalisé",
        desc: <>Séances individuelles adaptées au profil de l'enfant pour travailler la Lecture, l'Écriture, le Raisonnement et les Mathématiques.<br /><br />Chaque séance dure <strong>45 minutes</strong> et inclut un bref échange avec les parents.</>,
      },
      {
        icon: LineChart, badge: "Étape 3", title: "Bilan de progression",
        desc: <>Après <strong>6 mois</strong> d'accompagnement, un bilan de suivi est proposé aux parents et à l'école.<br /><br />Il permet d'évaluer les progrès, d'ajuster les objectifs et de fournir des recommandations mises à jour.</>,
      },
    ],
    closing: "Une approche bienveillante pour aider chaque enfant à gagner en autonomie, en confiance et en réussite scolaire.",
  },
  ar: {
    title:    "مرافقة كلّ طفل نحو النجاح",
    subtitle: "دعم تعليمي مُخصَّص للأطفال الذين يعانون من صعوبات التعلّم — لبناء المهارات والثقة بالنفس والتقدّم على المدى البعيد.",
    steps: [
      {
        icon: Search, badge: "الخطوة 1", title: "التقييم التعليمي",
        desc: <>تقييم شامل (3 إلى 4 جلسات) لتحديد نقاط قوة الطفل وصعوباته في اللغة والرياضيات.<br /><br />يُقدَّم في النهاية تقرير مفصَّل يتضمّن توصيات للأهل والمدرسة.</>,
      },
      {
        icon: BookOpen, badge: "الخطوة 2", title: "الدعم التعليمي المُخصَّص",
        desc: <>جلسات فردية مُكيَّفة مع ملفّ الطفل للعمل على القراءة والكتابة والتفكير والرياضيات.<br /><br />كلّ جلسة مدّتها <strong>45 دقيقة</strong> وتتضمّن تحديثًا موجزًا للأهل.</>,
      },
      {
        icon: LineChart, badge: "الخطوة 3", title: "مراجعة التقدّم",
        desc: <>بعد <strong>6 أشهر</strong> من الدعم، يُقدَّم تقرير متابعة للأهل والمدرسة.<br /><br />يُقيِّم التقدّم المُحرَز ويُعدِّل الأهداف ويُقدِّم توصيات مُحدَّثة.</>,
      },
    ],
    closing: "نهج دافئ لمساعدة كلّ طفل على اكتساب الاستقلالية والثقة بالنفس والنجاح الأكاديمي.",
  },
};

const gradients = [
  "from-mauve-100 to-blush-50",
  "from-blush-50 to-lilac-100",
  "from-lilac-50 to-mauve-50",
];
const iconBg = [
  "from-mauve-400 to-blush-400",
  "from-blush-400 to-lilac-400",
  "from-lilac-400 to-mauve-400",
];

export default function Approach() {
  const { lang } = useLanguage();
  const t = data[lang] ?? data.en;

  return (
    <Section id="approach" title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`group glass rounded-3xl p-6 card-hover relative overflow-hidden bg-gradient-to-br ${gradients[i]}`}
            >
              {/* Glow on hover */}
              <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-mauve-200/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between gap-3 relative">
                <div className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${iconBg[i]} flex items-center justify-center shadow-glow-sm`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-[11px] font-bold rounded-full border border-mauve-200/60 bg-white/60 px-3 py-1 text-mauve-600">
                  {s.badge}
                </span>
              </div>

              <h3 className="relative mt-4 font-bold text-base sm:text-lg text-ink-900 leading-snug">{s.title}</h3>
              <div className="relative mt-2 text-sm text-ink-500 leading-relaxed">{s.desc}</div>
              <div className="relative mt-5 h-[2px] w-8 rounded-full bg-gradient-to-r from-mauve-400 to-blush-400 group-hover:w-16 transition-all duration-300" />
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="mt-7 glass rounded-2xl px-5 py-4 flex items-start gap-3"
      >
        <span className="text-xl flex-shrink-0">💚</span>
        <p className="text-sm text-ink-600 leading-relaxed">{t.closing}</p>
      </motion.div>
    </Section>
  );
}
