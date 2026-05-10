import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Workflow, 
  Users, 
  Link, 
  ChevronRight, 
  Clock, 
  Target,
  Mail,
  User,
  MessageSquare,
  AlertCircle,
  Cpu,
  Settings,
  Globe,
  Database,
  Calendar,
  Star,
  ArrowRight
} from 'lucide-react';

const TRANSLATIONS = {
  es: {
    nav: {
      services: "Planes",
      workflows: "Workflows",
      specialOffer: "Oferta Especial",
      demoCall: "Llamada Demo"
    },
    hero: {
      tag: "Arquitectos de Procesos",
      title: "Recupera tu",
      titleSpan: "tiempo.",
      titleSuffix: "Automatizamos tu",
      titleSuffixSpan: "crecimiento.",
      desc: "Expertos en automatización personalizada e IA. Creamos sistemas que trabajan mientras descansas. Automatizamos para que factures más sin errores humanos."
    },
    miniGrid: [
      { title: "Eficiencia", desc: "Escala sin contratar más." },
      { title: "Procesos", desc: "Lógica avanzada a medida." },
      { title: "Conexión", desc: "Apps unidas sin errores." }
    ],
    form: {
      badge: "Quedan pocos cupos",
      title: "Socios Fundadores",
      desc: "Las primeras 5 empresas en contratar los planes 1, 2 o 3 recibirán un precio único y soporte prioritario.",
      nameLabel: "Nombre Completo",
      namePlaceholder: "Juan Pérez",
      emailLabel: "Email Profesional",
      emailPlaceholder: "hola@negocio.com",
      phoneLabel: "Teléfono / WhatsApp",
      phonePlaceholder: "+34 600 000 000",
      processLabel: "¿Qué quieres automatizar?",
      specLabel: "Especificaciones",
      customDetailLabel: "Detalles del Flujo a medida",
      options: {
        autoProspector: "Plan 1: Auto-Prospector",
        smartResponder: "Plan 2: Smart-Responder",
        dataBridge: "Plan 3: Data-Bridge",
        customFlow: "Plan 4: Custom-Flow"
      },
      button: "Quiero mi oferta de lanzamiento",
      buttonProcessing: "Procesando...",
      footer: "⚡ Potenciado por Inteligencia Artificial",
      successTitle: "¡Solicitud Enviada!",
      successDesc: "Te contactaremos en menos de 24 horas."
    },
    workflowSection: {
      tag: "Maestría en Procesos",
      title: "Cadenas de trabajo que no fallan,",
      titleSpan: "libertad que escala.",
      desc: "Construimos procesos que conectan todas tus herramientas y funcionan para ti 24/7. Eliminamos errores manuales y multiplicamos tu rentabilidad.",
      features: [
        "Arquitecturas complejas simplificadas.",
        "Lógica de negocio ejecutada a la perfección.",
        "Escalabilidad nativa sin límites de software."
      ]
    },
    plansSection: {
      title: "Elige tu camino al ahorro.",
      desc: "Soluciones diseñadas para ganar tiempo y disparar tu rentabilidad.",
      foundingPartner: "Programa de Socios Fundadores: Precio de lanzamiento para las primeras 5 empresas.",
      list: [
        { title: "Auto-Prospector", desc: "Buscamos y contactamos a tus clientes ideales automáticamente.", impact: "Ahorra 15 horas de búsqueda manual a la semana." },
        { title: "Smart-Responder", desc: "Una IA atiende tus mensajes y agenda citas 24/7. Solo hablas con clientes listos para comprar.", impact: "Ahorra el sueldo de un asistente." },
        { title: "Data-Bridge", desc: "Conectamos todas tus aplicaciones para que tu información se mueva sola y sin errores.", impact: "Orden total y cero tareas administrativas." },
        { title: "Custom-Flow", desc: "Diseñamos una arquitectura de automatización desde cero para problemas complejos de tu empresa.", impact: "Solución Premium a medida." }
      ]
    },
    contactSection: {
      title: "¿Listo para",
      titleSpan: "ahorrar tiempo?",
      desc: "No dejes que las tareas manuales frenen tu crecimiento. Agenda una llamada o completa el formulario para obtener tu precio de lanzamiento.",
      features: [
        "Configuración en menos de 7 días.",
        "Soporte prioritario 24/7.",
        "Consultoría estratégica incluida."
      ],
      formTitle: "Solicita Información",
      submitButton: "Enviando..."
    },
    footer: {
      tag: "Arquitectos de Procesos • Expertos en Ahorro de Tiempo • Soporte 24/7",
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    nav: {
      services: "Plans",
      workflows: "Workflows",
      specialOffer: "Special Offer",
      demoCall: "Demo Call"
    },
    hero: {
      tag: "Process Architects",
      title: "Get back your",
      titleSpan: "time.",
      titleSuffix: "We automate your",
      titleSuffixSpan: "growth.",
      desc: "Experts in custom automation and AI. We create hyper-connected systems that work while you rest. We automate so you can bill more without human errors."
    },
    miniGrid: [
      { title: "Efficiency", desc: "Scale without hiring more." },
      { title: "Workflows", desc: "Advanced custom logic." },
      { title: "Connection", desc: "Apps joined without errors." }
    ],
    form: {
      badge: "Few spots left",
      title: "Founding Partners",
      desc: "The first 5 companies to sign up for plans 1, 2, or 3 will receive launch pricing and priority support.",
      nameLabel: "Full Name",
      namePlaceholder: "John Doe",
      emailLabel: "Professional Email",
      emailPlaceholder: "hello@business.com",
      phoneLabel: "Phone / WhatsApp",
      phonePlaceholder: "+1 (555) 000-0000",
      processLabel: "What do you want to automate?",
      specLabel: "Specifications",
      customDetailLabel: "Custom Flow Details",
      options: {
        autoProspector: "Plan 1: Auto-Prospector",
        smartResponder: "Plan 2: Smart-Responder",
        dataBridge: "Plan 3: Data-Bridge",
        customFlow: "Plan 4: Custom-Flow"
      },
      button: "Claim my launch offer",
      buttonProcessing: "Processing...",
      footer: "⚡ Powered by Artificial Intelligence",
      successTitle: "Request Sent!",
      successDesc: "We will contact you in less than 24 hours."
    },
    workflowSection: {
      tag: "Workflow Mastery",
      title: "Workflows that don't fail,",
      titleSpan: "freedom that scales.",
      desc: "We build processes that connect any tools and run for you 24/7. Manual errors eliminated, efficiency multiplied.",
      features: [
        "Complex architectures simplified.",
        "Business logic executed to perfection.",
        "Native scalability without software limits."
      ]
    },
    plansSection: {
      title: "Choose your path to savings.",
      desc: "Solutions designed to save time and skyrocket your profitability.",
      foundingPartner: "Founding Partner Program: Launch pricing for the first 5 companies.",
      list: [
        { title: "Auto-Prospector", desc: "We automatically find and contact your ideal clients.", impact: "Save 15 hours of manual search per week." },
        { title: "Smart-Responder", desc: "An AI handles your messages and schedules appointments 24/7.", impact: "Save the cost of an assistant." },
        { title: "Data-Bridge", desc: "We connect all your applications so your info moves automatically.", impact: "Total order and zero admin tasks." },
        { title: "Custom-Flow", desc: "We design a custom automation architecture for your complex business problems.", impact: "Premium custom solution." }
      ]
    },
    contactSection: {
      title: "Ready to",
      titleSpan: "save time?",
      desc: "Don't let manual tasks stall your growth. Schedule a call or fill out the form to get your launch price.",
      features: [
        "Setup in less than 7 days.",
        "24/7 Priority Support.",
        "Strategic consulting included."
      ],
      formTitle: "Request Information",
      submitButton: "Sending..."
    },
    footer: {
      tag: "Process Architects • Time Saving Experts • 24/7 Support",
      rights: "All rights reserved."
    }
  },
  fr: {
    nav: {
      services: "Plans",
      workflows: "Workflows",
      specialOffer: "Offre Spéciale",
      demoCall: "Appel Démo"
    },
    hero: {
      tag: "Architectes de Processus",
      title: "Récupérez votre",
      titleSpan: "temps.",
      titleSuffix: "Nous automatisons votre",
      titleSuffixSpan: "croissance.",
      desc: "Experts en automatisation et IA. Nous créons des systèmes qui travaillent pendant que vous vous reposez. Sans erreurs humaines."
    },
    miniGrid: [
      { title: "Efficacité", desc: "Évoluez sans recruter plus." },
      { title: "Procesos", desc: "Logique avancée sur mesure." },
      { title: "Connexion", desc: "Apps unies sans erreurs." }
    ],
    form: {
      badge: "2 places restantes",
      title: "Offre Spéciale",
      desc: "Faites partie des 5 premières personnes et obtenez un prix de lancement.",
      nameLabel: "Nom Complet",
      namePlaceholder: "Jean Dupont",
      emailLabel: "Email Professionnel",
      emailPlaceholder: "bonjour@entreprise.com",
      phoneLabel: "Téléphone / WhatsApp",
      phonePlaceholder: "+33 6 00 00 00 00",
      processLabel: "Que voulez-vous automatiser ?",
      specLabel: "Spécifications",
      customDetailLabel: "Détails du flux sur mesure",
      options: {
        autoProspector: "Plan 1 : Auto-Prospector",
        smartResponder: "Plan 2 : Smart-Responder",
        dataBridge: "Plan 3 : Data-Bridge",
        customFlow: "Plan 4 : Custom-Flow"
      },
      button: "Je veux mon offre de lancement",
      buttonProcessing: "Traitement...",
      footer: "⚡ Propulsé par N8N & Intelligence Artificielle",
      successTitle: "Demande Envoyée !",
      successDesc: "Nous vous contacterons en moins de 24 heures."
    },
    workflowSection: {
      tag: "Maîtrise des Processus",
      title: "Des flux qui n'échouent pas,",
      titleSpan: "une liberté qui s'adapte.",
      desc: "Nous construisons des processus qui connectent vos outils et fonctionnent pour vous 24/7. Erreurs manuelles éliminées.",
      features: [
        "Architectures complexes simplifiées.",
        "Logique métier exécutée à la perfection.",
        "Évolutivité native sans limites."
      ]
    },
    plansSection: {
      title: "Choisissez votre voie vers l'économie.",
      desc: "Solutions conçues pour gagner du temps et booster votre rentabilité.",
      foundingPartner: "Offre Fondatrice : Prix de lancement pour les 5 premières entreprises.",
      list: [
        { title: "Auto-Prospector", desc: "Prospection automatisée.", impact: "Gagnez 15h par semaine." },
        { title: "Smart-Responder", desc: "IA pour vos messages.", impact: "Économisez un salaire." },
        { title: "Data-Bridge", desc: "Connexion totale.", impact: "Zéro admin." },
        { title: "Custom-Flow", desc: "Solution Premium.", impact: "Sur mesure." }
      ]
    },
    contactSection: {
      title: "Prêt à",
      titleSpan: "gagner du temps ?",
      desc: "Ne laissez pas les tâches manuelles freiner votre croissance. Prenez rendez-vous ou remplissez le formulaire.",
      features: [
        "Configuration en moins de 7 jours.",
        "Support prioritaire 24/7.",
        "Conseil stratégique inclus."
      ],
      formTitle: "Demander des Informations",
      submitButton: "Envoi en cours..."
    },
    footer: {
      tag: "Architectes de Processus • Experts en gain de temps • Support 24/7",
      rights: "Tous droits réservés."
    }
  }
};

type Language = 'es' | 'en' | 'fr';

export default function App() {
  const [language, setLanguage] = useState<Language>('es');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedPlan, setSelectedPlan] = useState<string>('autoProspector');
  const [selectedPlanBottom, setSelectedPlanBottom] = useState<string>('autoProspector');

  const t = TRANSLATIONS[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-magenta/30 overflow-x-hidden bg-midnight text-white relative">
      {/* Background Mesh Gradients from Theme */}
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-magenta/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-orange-glow/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed top-[20%] left-[30%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-magenta to-orange-glow flex items-center justify-center shadow-lg">
              <Zap className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="text-2xl font-display font-black tracking-tighter text-white uppercase">
              Axon<span className="text-magenta">Flow</span>
            </span>
          </motion.div>
          
          <div className="flex items-center gap-6 lg:gap-10">
            <motion.nav 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="hidden lg:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-white/50"
            >
              <a href="#planes" className="hover:text-white transition-colors">{t.nav.services}</a>
              <a href="#workflows" className="hover:text-white transition-colors">{t.nav.workflows}</a>
              <a href="#contacto" className="text-orange-glow hover:text-white transition-colors text-sm">{t.nav.specialOffer}</a>
            </motion.nav>

            {/* Language Selector */}
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
              {(['es', 'en', 'fr'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter transition-all ${
                    language === lang 
                      ? 'bg-magenta text-white shadow-lg' 
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest border border-white/20 transition-all shadow-xl"
            >
              {t.nav.demoCall}
            </motion.button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Main Grid Content Area (Merging Hero & Form for Impact) */}
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-8 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Hero & Value Prop */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-magenta/10 border border-magenta/20 text-magenta text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                  <Cpu className="w-3 h-3" />
                  {t.hero.tag}
                </div>
                
                <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 leading-[1.05] tracking-tighter">
                  {t.hero.title} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-orange-glow">
                    {t.hero.titleSpan}
                  </span><br/>
                  {t.hero.titleSuffix} <br/>
                  {t.hero.titleSuffixSpan}
                </h1>

                <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed border-l-2 border-magenta pl-6">
                  {t.hero.desc}
                </p>
              </motion.div>

              {/* Mini Service Grid (from theme) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {t.miniGrid.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    <div className={`w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-3 ${
                      i === 0 ? 'text-magenta' : i === 1 ? 'text-blue-400' : 'text-orange-glow'
                    }`}>
                      {i === 0 ? <Zap className="w-5 h-5" /> : i === 1 ? <Workflow className="w-5 h-5" /> : <Link className="w-5 h-5" />}
                    </div>
                    <h3 className="font-bold mb-1 text-sm">{item.title}</h3>
                    <p className="text-[11px] text-white/50 leading-tight">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Form & Offer (Frosted Card) */}
            <div className="lg:col-span-12 xl:col-span-5 relative lg:max-w-xl lg:mx-auto xl:mx-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 md:p-10 rounded-[40px] shadow-2xl relative overflow-hidden group"
              >
                {/* Limited Offer Badge from Theme */}
                <div className="absolute -top-3 right-10 bg-gradient-to-r from-orange-glow to-magenta px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg animate-pulse z-20">
                  {t.form.badge}
                </div>

                <div className="mb-8 relative z-10">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 leading-tight">{t.form.title}</h2>
                  <p className="text-white/50 text-sm">{t.form.desc}</p>
                </div>

                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="py-12 text-center"
                    >
                      <div className="w-20 h-20 bg-magenta/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Zap className="text-magenta w-10 h-10 fill-current" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{t.form.successTitle}</h3>
                      <p className="text-white/60">{t.form.successDesc}</p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit} 
                      className="space-y-5 relative z-10"
                    >
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 mb-1 block font-black">{t.form.nameLabel}</label>
                        <input 
                          required
                          type="text" 
                          placeholder={t.form.namePlaceholder} 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-magenta transition-all text-sm placeholder:text-white/20 outline-none hover:bg-white/[0.07]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 mb-1 block font-black">{t.form.emailLabel}</label>
                        <input 
                          required
                          type="email" 
                          placeholder={t.form.emailPlaceholder} 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-magenta transition-all text-sm placeholder:text-white/20 outline-none hover:bg-white/[0.07]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 mb-1 block font-black">{t.form.phoneLabel}</label>
                        <input 
                          required
                          type="tel" 
                          placeholder={t.form.phonePlaceholder} 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-magenta transition-all text-sm placeholder:text-white/20 outline-none hover:bg-white/[0.07]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 mb-1 block font-black">{t.form.processLabel}</label>
                        <select 
                          value={selectedPlan}
                          onChange={(e) => setSelectedPlan(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-magenta transition-all text-sm text-white/70 outline-none appearance-none cursor-pointer hover:bg-white/[0.07]"
                        >
                          <option className="bg-midnight" value="autoProspector">{t.form.options.autoProspector}</option>
                          <option className="bg-midnight" value="smartResponder">{t.form.options.smartResponder}</option>
                          <option className="bg-midnight" value="dataBridge">{t.form.options.dataBridge}</option>
                          <option className="bg-midnight" value="customFlow">{t.form.options.customFlow}</option>
                        </select>
                      </div>

                      <AnimatePresence>
                        {selectedPlan === 'customFlow' && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2 overflow-hidden"
                          >
                            <label className="text-[10px] uppercase tracking-widest text-white/40 mb-1 block font-black">{t.form.customDetailLabel}</label>
                            <textarea 
                              required
                              placeholder="..."
                              rows={3}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-magenta transition-all text-sm placeholder:text-white/20 outline-none hover:bg-white/[0.07] resize-none"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 mb-1 block font-black">{t.form.specLabel}</label>
                        <textarea 
                          placeholder="..."
                          rows={2}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-magenta transition-all text-sm placeholder:text-white/20 outline-none hover:bg-white/[0.07] resize-none"
                        />
                      </div>

                      <motion.button 
                        disabled={formStatus === 'submitting'}
                        whileHover={{ 
                          scale: 1.03, 
                          boxShadow: "0 0 50px rgba(255, 0, 255, 0.3)",
                          filter: "brightness(1.1)"
                        }}
                        whileTap={{ scale: 0.97 }}
                        animate={formStatus === 'idle' ? {
                          boxShadow: [
                            "0 0 20px rgba(255, 0, 255, 0.2)",
                            "0 0 40px rgba(255, 140, 0, 0.3)",
                            "0 0 20px rgba(255, 0, 255, 0.2)"
                          ]
                        } : {}}
                        transition={{ 
                          boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="w-full bg-gradient-to-r from-magenta via-[#ff44ff] to-orange-glow text-white font-black py-6 rounded-2xl shadow-2xl transition-all mt-4 uppercase tracking-[0.25em] text-xs disabled:opacity-50 relative overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {formStatus === 'submitting' ? (
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              {t.form.button}
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                            </>
                          )}
                        </span>
                        
                        {/* Interactive Shine/Glow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                      </motion.button>

                      <p className="text-center text-[10px] text-white/30 uppercase tracking-[0.15em] font-bold mt-4">
                        {t.form.footer}
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Workflow Section (formerly Trust Section) */}
        <section id="workflows" className="py-32 px-8 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 text-orange-glow mb-6">
                  <div className="bg-orange-glow/10 p-2 rounded-lg">
                    <Workflow className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">{t.workflowSection.tag}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-8 leading-tight tracking-tighter">
                  {t.workflowSection.title} <br />
                  <span className="text-white/50">{t.workflowSection.titleSpan}</span>
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
                  {t.workflowSection.desc}
                </p>
                <div className="grid grid-cols-1 gap-6">
                  {t.workflowSection.features.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-magenta group-hover:scale-150 transition-transform shadow-[0_0_10px_#ff00ff]" />
                      <span className="text-white/80 font-bold text-sm tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square md:aspect-video rounded-[3rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-12 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-magenta/5 via-transparent to-orange-glow/5" />
                  
                  {/* Connection Lines (Simulated Flow) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[80%] h-[2px] bg-gradient-to-r from-transparent via-magenta/20 to-transparent relative">
                      {/* Flowing Particles */}
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            left: ['-10%', '110%'],
                            opacity: [0, 1, 1, 0]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            delay: i * 1,
                            ease: "easeInOut"
                          }}
                          className="absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-magenta to-transparent"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Nodes */}
                  <div className="flex items-center justify-between w-full h-full relative z-10 px-4 md:px-0">
                    {/* Input Apps */}
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex flex-col gap-6"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md relative group"
                      >
                        <Mail className="w-6 h-6 md:w-10 md:h-10 text-orange-glow" />
                        <div className="absolute -top-2 -right-2 w-3 h-3 md:w-5 md:h-5 bg-orange-glow rounded-full flex items-center justify-center animate-bounce">
                          <div className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-full" />
                        </div>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md"
                      >
                        <Calendar className="w-6 h-6 md:w-10 md:h-10 text-blue-400" />
                      </motion.div>
                    </motion.div>

                    {/* Central N8N Node */}
                    <div className="relative group">
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, -2, 0],
                          backgroundColor: [
                            "rgba(243, 115, 53, 0.1)",
                            "rgba(243, 115, 53, 0.25)",
                            "rgba(200, 29, 119, 0.15)",
                            "rgba(243, 115, 53, 0.1)"
                          ],
                          boxShadow: [
                            "0 0 50px rgba(243, 115, 53, 0.2)",
                            "0 0 100px rgba(243, 115, 53, 0.4)",
                            "0 0 80px rgba(200, 29, 119, 0.3)",
                            "0 0 50px rgba(243, 115, 53, 0.2)"
                          ],
                          borderColor: [
                            "rgba(243, 115, 53, 0.4)",
                            "rgba(243, 115, 53, 0.8)",
                            "rgba(200, 29, 119, 0.5)",
                            "rgba(243, 115, 53, 0.4)"
                          ]
                        }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="w-24 h-24 md:w-40 md:h-40 rounded-full border-2 flex flex-col items-center justify-center backdrop-blur-2xl relative z-20 transition-colors group"
                      >
                        {/* N8N Style Connectors */}
                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-glow border-2 border-midnight " />
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-magenta border-2 border-midnight " />
                        
                        <div className="relative">
                          <Workflow className="w-10 h-10 md:w-16 md:h-16 text-white drop-shadow-[0_0_15px_rgba(243,115,53,0.5)]" />
                          <motion.div 
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-midnight"
                          />
                        </div>
                        <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.4em] text-white/50 mt-2">AxonFlow Core</span>
                      </motion.div>
                       {/* Pulsing Aura */}
                       <motion.div 
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-orange-glow/20 rounded-full blur-2xl pointer-events-none"
                      />
                      
                      {/* Decorative Rings */}
                      <motion.div 
                        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 -m-4 md:-m-8 border border-white/5 rounded-full pointer-events-none"
                      />
                      <motion.div 
                        animate={{ rotate: -360, scale: [1, 0.9, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 -m-8 md:-m-16 border border-white/5 rounded-full pointer-events-none border-dashed"
                      />
                    </div>

                    {/* Output Apps */}
                    <motion.div 
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex flex-col gap-6"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md"
                      >
                        <MessageSquare className="w-6 h-6 md:w-10 md:h-10 text-magenta" />
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md"
                      >
                        <Database className="w-6 h-6 md:w-10 md:h-10 text-orange-glow" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute bottom-6 right-8 flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/50">Flow Active</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="planes" className="py-32 px-8 bg-white/5 relative overflow-hidden">
          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-magenta/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-xl mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-extrabold text-white mb-6 leading-none tracking-tighter">
                {t.plansSection.title}
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                {t.plansSection.desc}
              </p>
              
              {/* Founding Partner Offer Highlight */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  borderColor: ["rgba(243, 115, 53, 0.2)", "rgba(243, 115, 53, 0.6)", "rgba(243, 115, 53, 0.2)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center gap-6 p-6 rounded-[2.5rem] bg-orange-glow/10 border-2 border-orange-glow/30 text-orange-glow shadow-[0_0_50px_rgba(243,115,53,0.1)] mb-12"
              >
                <div className="w-14 h-14 rounded-full bg-orange-glow flex items-center justify-center text-midnight shadow-lg">
                  <Star className="w-8 h-8 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] mb-1 text-orange-glow">Programa de Socios Fundadores</p>
                  <p className="text-sm font-bold text-white max-w-sm leading-tight">{t.plansSection.foundingPartner}</p>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.plansSection.list.map((plan, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className={`p-8 rounded-3xl bg-midnight/40 border transition-all ${
                    i === 3 ? 'border-magenta/50 shadow-[0_0_30px_rgba(200,29,119,0.15)] bg-magenta/5' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    i === 0 ? 'bg-blue-500/10 text-blue-400' : 
                    i === 1 ? 'bg-magenta/10 text-magenta' : 
                    i === 2 ? 'bg-orange-glow/10 text-orange-glow' : 
                    'bg-white/10 text-white'
                  }`}>
                    {i === 0 ? <Zap className="w-6 h-6" /> : 
                     i === 1 ? <MessageSquare className="w-6 h-6" /> : 
                     i === 2 ? <Link className="w-6 h-6" /> : 
                     <Cpu className="w-6 h-6" />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{plan.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 h-28">
                    {plan.desc}
                  </p>
                  
                  <div className="pt-6 border-t border-white/5">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                      <p className="text-xs font-bold text-green-400 leading-tight">
                        {plan.impact}
                      </p>
                    </div>
                  </div>

                  <a 
                    href="#contacto"
                    className={`mt-8 w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 group transition-all ${
                      i === 3 ? 'bg-magenta text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    Elegir Plan
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Contact CTA Section */}
        <section id="contacto" className="py-32 px-8 bg-midnight relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 leading-none tracking-tighter">
                {t.contactSection.title} <br/>
                <span className="text-magenta">{t.contactSection.titleSpan}</span>
              </h2>
              <p className="text-white/50 text-xl leading-relaxed mb-10 max-w-lg">
                {t.contactSection.desc}
              </p>
              
              <div className="flex flex-col gap-6">
                {t.contactSection.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-magenta">
                      {i === 0 ? <Zap className="w-5 h-5" /> : i === 1 ? <Star className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                    </div>
                    <span className="text-white/80 font-bold tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] shadow-2xl relative group"
            >
              <div className="absolute -top-3 right-8 bg-orange-glow px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-midnight z-20">
                {t.form.badge}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6 underline decoration-magenta decoration-4 underline-offset-8 decoration-skip-ink-none">
                {t.contactSection.formTitle}
              </h3>

              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star className="text-green-500 w-10 h-10 fill-current" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{t.form.successTitle}</h3>
                    <p className="text-white/60">{t.form.successDesc}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-white/40">{t.form.nameLabel}</label>
                        <input required type="text" placeholder={t.form.namePlaceholder} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-magenta outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-widest text-white/40">{t.form.emailLabel}</label>
                        <input required type="email" placeholder={t.form.emailPlaceholder} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-magenta outline-none transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-white/40">{t.form.phoneLabel}</label>
                      <input required type="tel" placeholder={t.form.phonePlaceholder} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-magenta outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-white/40">{t.form.processLabel}</label>
                      <select 
                        value={selectedPlanBottom}
                        onChange={(e) => setSelectedPlanBottom(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-magenta outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option className="bg-midnight" value="autoProspector">{t.form.options.autoProspector}</option>
                        <option className="bg-midnight" value="smartResponder">{t.form.options.smartResponder}</option>
                        <option className="bg-midnight" value="dataBridge">{t.form.options.dataBridge}</option>
                        <option className="bg-midnight" value="customFlow">{t.form.options.customFlow}</option>
                      </select>
                    </div>

                    <AnimatePresence>
                      {selectedPlanBottom === 'customFlow' && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2 overflow-hidden"
                        >
                          <label className="text-[10px] uppercase font-black tracking-widest text-white/40">{t.form.customDetailLabel}</label>
                          <textarea 
                            required
                            placeholder="..."
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-magenta outline-none transition-all resize-none"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-white/40">{t.form.specLabel}</label>
                      <textarea 
                        placeholder="..."
                        rows={2}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-magenta outline-none transition-all resize-none"
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-magenta hover:bg-[#ff00ff] text-white font-black py-5 rounded-2xl uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 group"
                    >
                      {formStatus === 'submitting' ? t.contactSection.submitButton : t.form.button}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-8 border-t border-white/5 bg-midnight relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-magenta to-orange-glow flex items-center justify-center">
                <Zap className="text-white w-5 h-5 fill-current" />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter text-white uppercase">
                Axon<span className="text-magenta">Flow</span>
              </span>
            </div>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black">
              {t.footer.tag}
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white/40">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
            <div className="text-white/20 text-[10px] font-bold uppercase tracking-wider">
              © {new Date().getFullYear()} AxonFlow Agency. {t.footer.rights}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


