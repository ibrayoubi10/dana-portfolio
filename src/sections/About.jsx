import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import { Heart, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

const content = {
  en: {
    title:    "About Dana",
    subtitle: "Warm, structured support for children who struggle at school — built on personalized strategies and genuine collaboration.",
    p1: "I am a Special Educator dedicated to supporting children who experience learning difficulties and developmental challenges. My goal is to help each child progress at their own pace while building self-confidence, independence, and motivation.",
    p2: "I work closely with families and educators to create supportive learning environments, using adapted teaching methods and individualized plans to make learning more accessible and meaningful.",
    values: [
      { emoji: "🌱", title: "Warmth",          desc: "A safe and encouraging environment for every child." },
      { emoji: "🎯", title: "Personalization",  desc: "Every plan is designed around the child's needs." },
      { emoji: "🤝", title: "Collaboration",    desc: "A close partnership with families and schools." },
    ],
    highlights: ["Special Education Specialist", "Experience with autism & intellectual disabilities", "Private tutoring (ages 6–10)", "Online support for international students"],
    strengthsTitle: "Key Strengths",
    note: "Sessions available in Arabic, French and English — in person in Tripoli or remotely via Zoom.",
  },
  fr: {
    title:    "À propos de Dana",
    subtitle: "Un soutien chaleureux et structuré pour les enfants en difficulté scolaire — fondé sur des stratégies personnalisées et une vraie collaboration.",
    p1: "Je suis éducatrice spécialisée, passionnée par l'accompagnement des enfants qui rencontrent des difficultés d'apprentissage ou des défis développementaux. Mon objectif est d'aider chaque enfant à progresser à son propre rythme, tout en renforçant sa confiance en soi, son autonomie et sa motivation.",
    p2: "Je travaille en étroite collaboration avec les familles et les enseignants pour créer des environnements d'apprentissage adaptés, en utilisant des méthodes pédagogiques individualisées pour rendre l'apprentissage accessible et porteur de sens.",
    values: [
      { emoji: "🌱", title: "Bienveillance",    desc: "Un environnement sécurisé et encourageant." },
      { emoji: "🎯", title: "Personnalisation", desc: "Chaque plan est conçu pour l'enfant." },
      { emoji: "🤝", title: "Collaboration",    desc: "Un partenariat étroit avec les familles." },
    ],
    highlights: ["Spécialiste de l'éducation adaptée", "Expérience autisme & handicap intellectuel", "Cours particuliers (6–10 ans)", "Soutien en ligne pour élèves internationaux"],
    strengthsTitle: "Points forts",
    note: "Séances disponibles en arabe, français et anglais — en présentiel à Tripoli ou à distance via Zoom.",
  },
  ar: {
    title:    "عن دانا",
    subtitle: "دعم دافئ ومنظّم للأطفال الذين يواجهون صعوبات في المدرسة — قائم على استراتيجيات مُخصَّصة وتعاون حقيقي.",
    p1: "أنا معلّمة تربية خاصة مُكرَّسة لدعم الأطفال الذين يواجهون صعوبات في التعلّم والتحدّيات التطورية. هدفي هو مساعدة كلّ طفل على التقدّم بحسب إيقاعه الخاص، مع تعزيز ثقته بنفسه واستقلاليته ودافعيته نحو التعلّم.",
    p2: "أعمل بتعاون وثيق مع الأسر والمعلمين لخلق بيئات تعلّم داعمة، باستخدام أساليب تعليمية مُكيَّفة وخطط فردية لجعل التعلّم أكثر سهولةً وإثراءً.",
    values: [
      { emoji: "🌱", title: "الدفء والأمان",    desc: "بيئة آمنة ومشجّعة لكلّ طفل." },
      { emoji: "🎯", title: "التخصيص",          desc: "كلّ خطة مُصمَّمة حول احتياجات الطفل." },
      { emoji: "🤝", title: "التعاون",           desc: "شراكة حقيقية مع الأسر والمدارس." },
    ],
    highlights: ["متخصّصة في التربية الخاصة", "خبرة مع التوحّد والإعاقة الذهنية", "دروس خصوصية (6–10 سنوات)", "دعم عبر الإنترنت للطلاب الدوليين"],
    strengthsTitle: "نقاط القوة",
    note: "الجلسات متاحة بالعربية والفرنسية والإنجليزية — حضوريًا في طرابلس أو عن بُعد عبر زووم.",
  },
};

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang] ?? content.en;
  return (
    <Section id="about" title={t.title} subtitle={t.subtitle}>
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-5">
          <p className="text-sm sm:text-base text-ink-500 leading-relaxed">{t.p1}</p>
          <p className="text-sm sm:text-base text-ink-500 leading-relaxed">{t.p2}</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {t.values.map(({ emoji, title, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                className="glass rounded-2xl p-4 card-hover">
                <div className="text-2xl mb-2">{emoji}</div>
                <div className="text-sm font-semibold text-ink-800">{title}</div>
                <div className="mt-1 text-xs text-ink-500 leading-relaxed">{desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="glass rounded-3xl p-6 shadow-glass">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-mauve-400 to-blush-400 flex items-center justify-center">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-ink-800 text-sm">{t.strengthsTitle}</span>
            </div>
            <ul className="space-y-3">
              {t.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-mauve-500 flex-shrink-0" />
                  <span className="text-sm text-ink-600">{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-3.5 rounded-2xl bg-gradient-to-r from-mauve-50 to-blush-50 border border-mauve-100/60 text-xs text-mauve-700 leading-relaxed">
              💬 {t.note}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
