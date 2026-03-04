/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Star, MapPin, Mail, Sun, CheckCircle, TrendingUp, Award, Droplets, Menu, X, HelpCircle, MessageCircle } from 'lucide-react';

export default function App() {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 1000], [1, 1.15]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0.2]);
  const heroTextY = useTransform(scrollY, [0, 800], [0, 150]);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-main selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${isScrolled ? 'bg-surface/80 backdrop-blur-md shadow-sm border-b border-border py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sun className={`w-8 h-8 transition-colors duration-300 ${isScrolled ? 'text-accent' : 'text-white'}`} />
            <span className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-main' : 'text-white'}`}>Éclat Solaire</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#avantages" className={`text-sm font-medium hover:text-accent transition-colors duration-200 ${isScrolled ? 'text-muted' : 'text-white/90'}`}>Notre Expertise</a>
            <a href="#realisations" className={`text-sm font-medium hover:text-accent transition-colors duration-200 ${isScrolled ? 'text-muted' : 'text-white/90'}`}>Réalisations (Gard/Vaucluse)</a>
            <a href="#avis" className={`text-sm font-medium hover:text-accent transition-colors duration-200 ${isScrolled ? 'text-muted' : 'text-white/90'}`}>Avis (4.9/5)</a>
            <a href="#faq" className={`text-sm font-medium hover:text-accent transition-colors duration-200 ${isScrolled ? 'text-muted' : 'text-white/90'}`}>FAQ</a>

            <a href="#devis" className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-accent rounded-full group hover:bg-accent-hover transition-all duration-300 ease-out shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative">Devis Gratuit</span>
            </a>
          </div>

          <button className="md:hidden z-50 cursor-pointer p-2 rounded-lg hover:bg-surface-hover transition-colors" aria-label="Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="text-main" /> : <Menu className={isScrolled ? 'text-main' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-6">
          <a href="#avantages" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-main hover:text-accent transition-colors">Avantages</a>
          <a href="#realisations" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-main hover:text-accent transition-colors">Réalisations</a>
          <a href="#avis" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-main hover:text-accent transition-colors">Avis</a>
          <a href="#devis" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-accent">Devis Gratuit</a>

          <div className="flex items-center gap-3 pl-2 border-l border-white/20">
            <a href="https://aft-receptionist.vercel.app/#demo-section" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-main bg-surface p-4 rounded-xl flex-1 justify-center border border-border shadow-sm active:scale-95 transition-transform">
              <Phone className="w-6 h-6" /> Tester Kylie en direct
            </a>
            <a href="https://wa.me/33769074928?text=Bonjour%20j'aimerais%20en%20savoir%20plus%20pour%20mon%20installation%20solaire" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center p-2.5 font-medium text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-full transition-all duration-300 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-0.5" title="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0 bg-background">
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/hero_solar.png" />
            <img
              src="/images/hero_solar.png"
              alt="Panneaux solaires propres au coucher du soleil"
              className="w-full h-full object-cover"
            />
          </picture>
          {/* Glassmorphism gradient plus prononcé pour assurer le contraste texte (WCAG) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#0F172A]/70 to-[#020617]/95" />
        </motion.div>

        <motion.div style={{ y: heroTextY }} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-success" />
              <span className="text-sm font-bold tracking-wide uppercase">Garantie Décennale & Assurance RC Pro</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
              L'excellence au service de <span className="italic text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-hover">votre énergie.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Nettoyage professionnel à l'eau pure. Augmentez votre rendement jusqu'à 25% et prolongez la durée de vie de votre installation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
              <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
                <a href="#devis" className="cursor-pointer w-full bg-accent hover:bg-accent-hover focus:ring-4 focus:ring-accent/50 outline-none text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 ease-out hover:-translate-y-1 shadow-[0_10px_40px_rgba(249,115,22,0.3)] flex items-center justify-center gap-3">
                  Devis gratuit en 48h <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <a href="https://aft-receptionist.vercel.app/#demo-section" target="_blank" rel="noopener noreferrer" className="cursor-pointer w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 ease-out flex items-center justify-center gap-3 shadow-sm">
                <Phone className="w-5 h-5" /> Tester Kylie en direct
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 bg-surface/10 backdrop-blur-md px-4 py-2 rounded-full border border-border/20">
                <span className="text-white font-bold text-lg">4.9/5</span>
                <div className="flex items-center text-accent">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-muted text-sm ml-2">Google Avis Clients</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <div className="bg-surface border-b border-border py-12 relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4 group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-success-bg flex items-center justify-center transition-colors duration-300">
              <TrendingUp className="w-7 h-7 text-success" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-main group-hover:text-success transition-colors duration-300">+25% de rendement</p>
              <p className="text-sm text-muted">Gain moyen constaté</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-info-bg flex items-center justify-center transition-colors duration-300">
              <Droplets className="w-7 h-7 text-info" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-main group-hover:text-info transition-colors duration-300">Eau 100% Pure</p>
              <p className="text-sm text-muted">Osmosée, zéro calcaire</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-success-bg flex items-center justify-center transition-colors duration-300">
              <Award className="w-7 h-7 text-success" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-main group-hover:text-success transition-colors duration-300">Crédit d'impôt</p>
              <p className="text-sm text-muted">Agréé Service pro 50%</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-info-bg flex items-center justify-center transition-colors duration-300">
              <MapPin className="w-7 h-7 text-info" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-main group-hover:text-info transition-colors duration-300">Proximité</p>
              <p className="text-sm text-muted">Vaucluse & Gard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section id="avantages" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-32">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-main mb-8 leading-tight">
                L'investissement <br /><span className="italic text-accent">le plus rentable</span>
              </h2>
              <p className="text-lg text-muted mb-12 leading-relaxed">
                Un nettoyage régulier n'est pas qu'une question d'esthétique. La pollution, la poussière et les fientes d'oiseaux créent un voile opaque qui bloque les rayons du soleil.
              </p>

              <div className="space-y-6">
                <div className="group bg-surface rounded-3xl p-6 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-success-bg flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-success" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-main mb-2">Gain de rendement immédiat</h3>
                    <p className="text-muted leading-relaxed text-sm sm:text-base">Récupérez jusqu'à 25% de production énergétique. Le coût de notre intervention est souvent amorti en quelques mois grâce au surplus d'électricité généré.</p>
                  </div>
                </div>
                <div className="group bg-surface rounded-3xl p-6 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-success-bg flex items-center justify-center">
                    <Award className="w-8 h-8 text-success" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-main mb-2">Agréé Service à la Personne (50%)</h3>
                    <p className="text-muted leading-relaxed text-sm sm:text-base">Profitez immédiatement d'un crédit d'impôt de 50% sur le montant total de notre prestation. L'entretien de votre investissement n'a jamais été aussi accessible.</p>
                  </div>
                </div>
                <div className="group bg-surface rounded-3xl p-6 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-info-bg flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-info" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-main mb-2">Expertise & Sécurité Absolue</h3>
                    <p className="text-muted leading-relaxed text-sm sm:text-base">Utilisation exclusive d'<b>eau osmosée</b> (0% produits chimiques) et de brosses rotatives adaptées qui préservent la <b>garantie décennale</b> constructeur de vos panneaux.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative z-10 hidden lg:block">
              <div className="absolute inset-0 bg-[var(--color-info)] rounded-[40px] transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              <img src="/images/hero_solar.png" alt="Nettoyage professionnel de panneaux solaires avec eau osmosée" className="relative rounded-[40px] w-full object-cover h-[600px] border border-border shadow-md" />
            </div>
          </div>

          <div className="text-center mb-16 pt-16 border-t border-border">
            <h2 className="font-serif text-4xl md:text-5xl text-main mb-6">Nos Formules d'Intervention</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto font-light">
              Choisissez la solution adaptée à vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-surface rounded-[32px] p-8 md:p-12 border border-border shadow-sm flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-serif text-3xl text-main mb-4">Intervention Ponctuelle</h3>
              <p className="text-muted mb-8 leading-relaxed">Idéal pour une remise à neuf complète de vos modules solaires avant la haute saison estivale.</p>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-main"><CheckCircle className="w-5 h-5 text-accent" /> Nettoyage à l'eau pure osmosée</li>
                <li className="flex items-center gap-3 text-main"><CheckCircle className="w-5 h-5 text-accent" /> Brossage rotatif anti-microrayures</li>
                <li className="flex items-center gap-3 text-main"><CheckCircle className="w-5 h-5 text-accent" /> Bilan visuel de l'installation</li>
                <li className="flex items-center gap-3 text-main"><CheckCircle className="w-5 h-5 text-accent" /> Application des 50% de crédit d'impôt</li>
              </ul>
              <a href="#devis" className="w-full text-center bg-surface-hover hover:bg-border text-main font-bold py-4 rounded-xl transition-colors duration-200">Demander un chiffrage</a>
            </div>

            <div className="bg-surface rounded-[32px] p-8 md:p-12 border-2 border-accent shadow-lg shadow-accent/5 flex flex-col h-full transform md:-translate-y-4 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-md">
                Le choix n°1 des propriétaires
              </div>
              <h3 className="font-serif text-3xl text-main mb-4 mt-2">Contrat de Maintenance</h3>
              <p className="text-muted mb-8 leading-relaxed">Pérennisez votre installation avec un suivi annuel programmé. Ne vous souciez plus de rien !</p>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-main font-medium"><CheckCircle className="w-5 h-5 text-accent" /> Tous les avantages du nettoyage ponctuel</li>
                <li className="flex items-center gap-3 text-main font-medium"><CheckCircle className="w-5 h-5 text-accent" /> 1 à 2 passages automatiques par an</li>
                <li className="flex items-center gap-3 text-main font-medium"><CheckCircle className="w-5 h-5 text-accent" /> Maintien de la garantie rendement constructeur</li>
                <li className="flex items-center gap-3 text-main font-medium"><CheckCircle className="w-5 h-5 text-accent" /> <span className="text-accent">Tarif préférentiel & prioritaire</span></li>
              </ul>
              <a href="#devis" className="w-full text-center bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-accent/25">Être rappelé pour ce contrat</a>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section id="realisations" className="py-32 bg-surface text-main relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-info-bg text-info font-bold text-sm tracking-wider uppercase mb-6 border border-info/20">Nos résultats sur le terrain</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Nos réalisations dans le <span className="italic text-info">Vaucluse & Gard</span></h2>
            <p className="text-xl text-muted max-w-2xl mx-auto font-light">
              Des interventions locales avec une différence immédiate, tant visuelle que sur votre compteur de production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer border border-border">
              <img src="/images/before_dirty_panels.png" alt="Panneaux sales avant" className="w-full h-[400px] md:h-[500px] object-cover filter contrast-75 sepia-[.3] brightness-75 transition-transform duration-700 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/30 to-transparent flex items-end p-8 md:p-10">
                <div className="transform transition-transform duration-500 ease-out group-hover:translate-y-[-8px]">
                  <span className="inline-block bg-error-bg text-error border border-error/20 px-4 py-1.5 rounded-full font-bold text-xs tracking-wider uppercase mb-3 backdrop-blur-sm">Avant intervention</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white">-20% de rendement</h3>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer border border-border">
              <img src="/images/after_clean_panels.png" alt="Panneaux propres après" className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/30 to-transparent flex items-end p-8 md:p-10">
                <div className="transform transition-transform duration-500 ease-out group-hover:translate-y-[-8px]">
                  <span className="inline-block bg-success-bg text-success border border-success/20 px-4 py-1.5 rounded-full font-bold text-xs tracking-wider uppercase mb-3 backdrop-blur-sm">Après nettoyage</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white">100% de puissance restaurée</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="avis" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-main mb-6">Ils nous font <span className="italic text-accent">confiance</span></h2>
            <div className="flex items-center justify-center gap-1.5 text-accent mb-4">
              <Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" />
            </div>
            <p className="text-xl text-muted font-light">Note moyenne de 4.9/5 sur plus de 150 interventions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Jean-Marc D.", date: "Il y a 2 semaines", text: "Intervention rapide et très professionnelle. J'ai pu constater une augmentation de ma production de 18% dès le lendemain. Je recommande vivement !" },
              { name: "Sophie L.", date: "Il y a 1 mois", text: "Équipe ponctuelle et sympathique. Le fait de pouvoir bénéficier du crédit d'impôt rend l'opération vraiment très intéressante financièrement." },
              { name: "Pierre M.", date: "Il y a 2 mois", text: "Mes panneaux n'avaient pas été nettoyés depuis 4 ans. Le résultat avant/après est bluffant. L'utilisation d'eau pure sans produits chimiques est un vrai plus." }
            ].map((review, i) => (
              <div key={i} className="group bg-background p-8 md:p-10 rounded-3xl shadow-sm border border-border hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer flex flex-col h-full">
                <div className="flex items-center gap-1 text-accent mb-6 transition-transform duration-300 group-hover:scale-105 origin-left">
                  <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-main mx-auto text-lg leading-relaxed flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center font-serif font-bold text-lg text-main group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-main">{review.name}</p>
                    <p className="text-sm text-muted">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide / Blog Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-success-bg text-success font-bold text-sm tracking-wider uppercase mb-4 border border-success/20">Nos Conseils</span>
            <h2 className="font-serif text-3xl md:text-4xl text-main mb-4">L'Expertise du <span className="italic text-accent">Nettoyage Solaire</span></h2>
            <p className="text-muted">Tout ce qu'il faut savoir pour optimiser votre production électrique.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer bg-surface rounded-2xl p-6 border border-border hover:shadow-md transition-all">
              <span className="inline-block bg-accent/10 text-accent font-bold text-xs uppercase px-3 py-1 rounded-full mb-4">Rendement</span>
              <h3 className="font-bold text-lg text-main mb-3 group-hover:text-accent transition-colors">Pourquoi la pluie ne suffit-elle pas ?</h3>
              <p className="text-sm text-muted leading-relaxed">Les pluies, souvent chargées en sable du Sahara et pollution, laissent un film gras sur la surface vitrée qui bloque les UV...</p>
            </div>
            <div className="group cursor-pointer bg-surface rounded-2xl p-6 border border-border hover:shadow-md transition-all">
              <span className="inline-block bg-info-bg text-info font-bold text-xs uppercase px-3 py-1 rounded-full mb-4">Méthode</span>
              <h3 className="font-bold text-lg text-main mb-3 group-hover:text-accent transition-colors">L'action de l'Eau Osmosée (100% pure)</h3>
              <p className="text-sm text-muted leading-relaxed">Créée sans aucun minéral (zéro calcaire), cette eau agit comme un aimant naturel sur la saleté pour un rendu transparent cristallin.</p>
            </div>
            <div className="group cursor-pointer bg-surface rounded-2xl p-6 border border-border hover:shadow-md transition-all">
              <span className="inline-block bg-success-bg text-success font-bold text-xs uppercase px-3 py-1 rounded-full mb-4">Entretien</span>
              <h3 className="font-bold text-lg text-main mb-3 group-hover:text-accent transition-colors">Quand nettoyer ses panneaux solaires ?</h3>
              <p className="text-sm text-muted leading-relaxed">Le moment idéal reste le début du printemps pour préparer les mois les plus ensoleillés avec une vitre impeccable...</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-main mb-6">Questions <span className="italic text-accent">Fréquentes</span></h2>
            <p className="text-lg text-muted font-light">
              Des réponses claires avant votre intervention.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { q: "Quel est le prix d'un nettoyage ?", a: "Le tarif dépend de la surface et de l'accessibilité. En tant qu'entreprise agréée Service à la Personne, vous bénéficiez obligatoirement d'un crédit d'impôt immédiat de 50%, rendant l'opération très rentable." },
              { q: "Intervenez-vous si ça monte haut ?", a: "Nos équipes sont formées et utilisent des perches télescopiques rotatives sécurisées allant jusqu'à 20 mètres, avec un système d'eau osmosée ne nécessitant aucun risque direct sur la toiture." },
              { q: "Risquez-vous d'abîmer mon panneau ou d'annuler la garantie ?", a: "Absolument pas. L'eau 100% pure et nos brosses synthétiques ultra-douces sont exactement recommandées par les fabricants pour préserver la Garantie Décennale constructeur." },
              { q: "Pourquoi choisir un pro plutôt que de le faire moi-même ?", a: "Le faire à l'eau courante va calcairiser la vitre, réduisant définitivement le rendement de -10%. Au-delà du risque de chute mortel, l'équipement professionnel nettoie en profondeur et sans traces." }
            ].map((faq, i) => (
              <div key={i} className="bg-background p-6 rounded-2xl border border-border shadow-sm group hover:border-accent/30 transition-colors">
                <h4 className="font-bold text-lg text-main mb-3 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h4>
                <p className="text-muted text-sm md:text-base leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="devis" className="py-32 bg-surface relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-background rounded-[40px] shadow-2xl p-8 md:p-16 border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[var(--color-info)]/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="text-center mb-12 relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl text-main mb-6">Obtenez votre devis gratuit</h2>
              <p className="text-lg md:text-xl text-muted font-light">Remplissez ce formulaire ultra-simple. Nous nous engageons à vous répondre en moins de 48h.</p>
            </div>

            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-main mb-2">Nom complet</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-surface border border-border text-main focus:ring-4 focus:ring-accent/30 focus:border-accent outline-none transition-all placeholder-muted hover:border-accent" placeholder="Jean Dupont" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-main mb-2">Téléphone</label>
                  <input type="tel" className="w-full px-5 py-4 rounded-2xl bg-surface border border-border text-main focus:ring-4 focus:ring-accent/30 focus:border-accent outline-none transition-all placeholder-muted hover:border-accent" placeholder="06 12 34 56 78" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-main mb-2">Email</label>
                  <input type="email" className="w-full px-5 py-4 rounded-2xl bg-surface border border-border text-main focus:ring-4 focus:ring-accent/30 focus:border-accent outline-none transition-all placeholder-muted hover:border-accent" placeholder="jean@exemple.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-main mb-2">Code Postal</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-surface border border-border text-main focus:ring-4 focus:ring-accent/30 focus:border-accent outline-none transition-all placeholder-muted hover:border-accent" placeholder="75000" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-main mb-2">Surface estimée des panneaux (m²)</label>
                <div className="relative">
                  <select className="w-full px-5 py-4 rounded-2xl bg-surface border border-border text-main focus:ring-4 focus:ring-accent/30 focus:border-accent outline-none transition-all appearance-none hover:border-accent cursor-pointer">
                    <option value="small">Moins de 20 m² (Résidentiel)</option>
                    <option value="medium">De 20 à 50 m²</option>
                    <option value="large">De 50 à 100 m²</option>
                    <option value="xlarge">Plus de 100 m² (Agricole / Industriel)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-muted">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white font-bold text-lg md:text-xl py-5 md:py-6 rounded-2xl transition-all duration-300 ease-out transform hover:-translate-y-1 shadow-[0_10px_40px_rgba(249,115,22,0.3)] flex items-center justify-center gap-3 mt-10 cursor-pointer">
                Recevoir mon devis en 48h <ArrowRight className="w-6 h-6" />
              </button>
              <p className="text-center text-sm text-muted mt-6 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-success" /> Vos données sont sécurisées et ne seront jamais partagées.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-muted py-16 lg:py-24 border-t border-border relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-[var(--color-info)]/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Sun className="w-8 h-8 text-info" />
              <span className="text-2xl font-serif font-bold text-main tracking-tight">Éclat Solaire</span>
            </div>
            <p className="max-w-md mb-8 leading-relaxed text-muted">L'expert du nettoyage de panneaux solaires. Optimisez votre rendement, protégez votre investissement et profitez d'avantages fiscaux durables.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 ease-out hover:-translate-y-1 border border-border cursor-pointer">
                <span className="font-bold text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 ease-out hover:-translate-y-1 border border-border cursor-pointer">
                <span className="font-bold text-sm">in</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-main font-serif font-bold text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-info" /> <a href="tel:+33769074928" className="hover:text-accent transition-colors duration-200">07 69 07 49 28</a></li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-info" /> <a href="mailto:contact@eclatsolaire.fr" className="hover:text-accent transition-colors duration-200">contact@eclatsolaire.fr</a></li>
              <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-info" /> <span className="text-muted">Intervention régionale</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-main font-serif font-bold text-xl mb-6">Zones d'Intervention</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-accent" /> <span className="text-muted"><b className="text-main">Vaucluse (84)</b> : Avignon, Orange, Carpentras, Cavaillon...</span></li>
              <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-accent" /> <span className="text-muted"><b className="text-main">Gard (30)</b> : Nîmes, Alès, Uzès, Bagnols-sur-Cèze...</span></li>
              <li className="flex items-center gap-3 mt-4"><ShieldCheck className="w-5 h-5 text-success" /> <span className="text-muted text-sm">Entreprise locale agréée</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-border text-sm text-center flex justify-between items-center flex-col md:flex-row gap-4 relative z-10">
          <span>&copy; {new Date().getFullYear()} Éclat Solaire. Tous droits réservés.</span>
          <span className="text-muted font-light text-xs uppercase tracking-widest">Optimisé UI/UX Pro Max</span>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://aft-receptionist.vercel.app/#demo-section"
          target="_blank" rel="noopener noreferrer"
          className="w-14 h-14 bg-surface hover:bg-surface-hover border border-border text-main rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1"
          title="Tester Kylie en direct"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/33769074928?text=Bonjour%20j'aimerais%20en%20savoir%20plus%20pour%20mon%20installation%20solaire"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.5)] transition-all duration-300 ease-out hover:-translate-y-1 relative group"
          title="Discuter sur WhatsApp"
        >
          <span className="absolute -top-2 -right-2 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-[#25D366]"></span>
          </span>
          <MessageCircle className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
