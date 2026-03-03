/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, Mail, CheckCircle, Star, ShieldCheck, ArrowRight, Menu, X, Sun, Droplets, TrendingUp, Award, MapPin } from 'lucide-react';

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
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sun className={`w-8 h-8 ${isScrolled ? 'text-amber-500' : 'text-amber-400'}`} />
            <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>Éclat Solaire</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#avantages" className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>Avantages</a>
            <a href="#realisations" className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>Réalisations</a>
            <a href="#avis" className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>Avis</a>
            <a href="#devis" className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-amber-500 rounded-full group hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/30">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative">Devis Gratuit</span>
            </a>
          </div>

          <button className="md:hidden z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="text-slate-900" /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6">
          <a href="#avantages" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-slate-900">Avantages</a>
          <a href="#realisations" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-slate-900">Réalisations</a>
          <a href="#avis" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-slate-900">Avis</a>
          <a href="#devis" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-amber-500">Devis Gratuit</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
            alt="Panneaux solaires propres"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/90" />
        </motion.div>

        <motion.div style={{ y: heroTextY }} className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium tracking-wide uppercase">Entreprise Certifiée RGE & Assurance RC Pro</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1]">
              L'excellence au service de <span className="italic text-amber-400">votre énergie.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Nettoyage professionnel à l'eau pure. Augmentez votre rendement jusqu'à 25% et prolongez la durée de vie de votre installation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#devis" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl shadow-amber-500/30 flex items-center justify-center gap-3">
                Obtenir mon devis gratuit <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+33123456789" className="w-full sm:w-auto bg-transparent hover:bg-white/10 backdrop-blur-sm text-white border border-white/30 px-10 py-5 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" /> 01 23 45 67 89
              </a>
            </div>
            <p className="text-sm text-slate-400 mt-6 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" /> Promesse de réponse en moins de 48h
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-slate-200 py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-32">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-amber-600" />
            </div>
            <div>
              <p className="font-serif text-xl font-bold text-slate-900">+25% de rendement</p>
              <p className="text-sm text-slate-500">Gain moyen constaté</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
              <Droplets className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <p className="font-serif text-xl font-bold text-slate-900">Eau 100% Pure</p>
              <p className="text-sm text-slate-500">Zéro trace, zéro calcaire</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
              <Award className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <p className="font-serif text-xl font-bold text-slate-900">Crédit d'impôt</p>
              <p className="text-sm text-slate-500">Avantage fiscal de 50%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section id="avantages" className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-8 leading-tight">
                L'investissement <br/><span className="italic text-amber-600">le plus rentable</span>
              </h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Un nettoyage régulier n'est pas qu'une question d'esthétique. La pollution, la poussière et les fientes d'oiseaux créent un voile opaque qui bloque les rayons du soleil.
              </p>

              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-slate-900 mb-3">Gain de rendement immédiat</h3>
                    <p className="text-slate-600 leading-relaxed">Récupérez jusqu'à 25% de production énergétique perdue. Le coût de notre intervention est souvent amorti en quelques mois seulement grâce au surplus d'électricité généré.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                    <Award className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-slate-900 mb-3">Avantage fiscal de 50%</h3>
                    <p className="text-slate-600 leading-relaxed">En tant qu'entreprise agréée services à la personne, nos interventions vous donnent droit à un crédit d'impôt immédiat de 50% sur le montant total de la prestation.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-slate-900 mb-3">Sécurité et longévité</h3>
                    <p className="text-slate-600 leading-relaxed">Nous utilisons exclusivement de l'eau osmosée (pure à 100%) et des brosses spécifiques qui ne rayent pas le verre, préservant ainsi la garantie constructeur de vos panneaux.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-200 rounded-[40px] transform rotate-3 scale-105 opacity-30"></div>
              <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop" alt="Nettoyage professionnel" className="relative rounded-[40px] shadow-2xl object-cover h-[700px] w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section id="realisations" className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl mb-6">Des résultats <span className="italic text-amber-400">visibles</span></h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              La différence est immédiate, tant sur l'aspect visuel que sur votre compteur de production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative rounded-[32px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?q=80&w=2037&auto=format&fit=crop" alt="Avant" className="w-full h-[500px] object-cover filter contrast-75 sepia-[.3] brightness-75 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-10">
                <div>
                  <span className="inline-block bg-red-500/20 text-red-300 border border-red-500/30 px-5 py-2 rounded-full font-bold text-sm tracking-wide uppercase mb-3">Avant intervention</span>
                  <h3 className="font-serif text-3xl">-20% de rendement</h3>
                </div>
              </div>
            </div>
            <div className="relative rounded-[32px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" alt="Après" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-10">
                <div>
                  <span className="inline-block bg-green-500/20 text-green-300 border border-green-500/30 px-5 py-2 rounded-full font-bold text-sm tracking-wide uppercase mb-3">Après nettoyage</span>
                  <h3 className="font-serif text-3xl">100% de puissance restaurée</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="avis" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-8">Ils nous font <span className="italic text-amber-500">confiance</span></h2>
            <div className="flex items-center justify-center gap-2 text-amber-400 mb-4">
              <Star className="w-8 h-8 fill-current" /><Star className="w-8 h-8 fill-current" /><Star className="w-8 h-8 fill-current" /><Star className="w-8 h-8 fill-current" /><Star className="w-8 h-8 fill-current" />
            </div>
            <p className="text-xl text-slate-600 font-light">Note moyenne de 4.9/5 sur plus de 150 interventions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Jean-Marc D.", date: "Il y a 2 semaines", text: "Intervention rapide et très professionnelle. J'ai pu constater une augmentation de ma production de 18% dès le lendemain. Je recommande vivement !" },
              { name: "Sophie L.", date: "Il y a 1 mois", text: "Équipe ponctuelle et sympathique. Le fait de pouvoir bénéficier du crédit d'impôt rend l'opération vraiment très intéressante financièrement." },
              { name: "Pierre M.", date: "Il y a 2 mois", text: "Mes panneaux n'avaient pas été nettoyés depuis 4 ans. Le résultat avant/après est bluffant. L'utilisation d'eau pure sans produits chimiques est un vrai plus pour l'environnement." }
            ].map((review, i) => (
              <div key={i} className="bg-[#F8FAFC] p-10 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-slate-700 mb-8 text-lg leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center font-serif font-bold text-xl text-slate-600">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="devis" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-slate-900 rounded-[40px] shadow-2xl p-8 md:p-16 border border-slate-800">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Obtenez votre devis gratuit</h2>
              <p className="text-xl text-slate-300 font-light">Remplissez ce formulaire ultra-simple. Nous nous engageons à vous répondre en moins de 48h.</p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">Nom complet</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder-slate-500" placeholder="Jean Dupont" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">Téléphone</label>
                  <input type="tel" className="w-full px-5 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder-slate-500" placeholder="06 12 34 56 78" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">Email</label>
                  <input type="email" className="w-full px-5 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder-slate-500" placeholder="jean@exemple.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">Code Postal</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder-slate-500" placeholder="75000" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">Surface estimée des panneaux (m²)</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none">
                  <option value="small">Moins de 20 m² (Résidentiel)</option>
                  <option value="medium">De 20 à 50 m²</option>
                  <option value="large">De 50 à 100 m²</option>
                  <option value="xlarge">Plus de 100 m² (Agricole / Industriel)</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-xl py-5 rounded-2xl transition-all transform hover:scale-[1.02] shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3 mt-10">
                Recevoir mon devis en 48h <ArrowRight className="w-6 h-6" />
              </button>
              <p className="text-center text-sm text-slate-400 mt-6 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Vos données sont sécurisées et ne seront jamais partagées.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Sun className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-serif font-bold text-white">Éclat Solaire</span>
            </div>
            <p className="max-w-sm mb-8 leading-relaxed">L'expert du nettoyage de panneaux solaires. Optimisez votre rendement, protégez votre investissement et profitez d'avantages fiscaux.</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors cursor-pointer">
                <span className="font-bold">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors cursor-pointer">
                <span className="font-bold">in</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-amber-500" /> <a href="tel:+33123456789" className="hover:text-white transition-colors">01 23 45 67 89</a></li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-amber-500" /> <a href="mailto:contact@eclatsolaire.fr" className="hover:text-white transition-colors">contact@eclatsolaire.fr</a></li>
              <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-amber-500" /> Intervention dans toute la région</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-6">Légal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Conditions Générales de Vente</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} Éclat Solaire. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
