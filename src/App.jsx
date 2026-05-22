import React, { useState, useEffect, useRef } from 'react';
import { 
  Sprout, 
  Search, 
  Leaf, 
  ShieldAlert, 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  RefreshCw, 
  Upload, 
  Camera, 
  Send, 
  X, 
  BookOpen, 
  HeartPulse, 
  History, 
  MessageSquare, 
  Layers, 
  Droplet, 
  CheckCircle2, 
  Info,
  ChevronRight,
  User,
  Bot,
  GraduationCap,
  Activity,
  Cpu,
  BarChart3,
  Globe,
  Sun,
  Moon
} from 'lucide-react';
import { plantsData, regionsData, quickFacts } from './data/plants';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [lightMode, setLightMode] = useState(false);
  
  // Tab Switch Scroll-to-Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentTab]);

  // Apply light theme class to document root
  useEffect(() => {
    if (lightMode) document.documentElement.classList.add('light');
    else document.documentElement.classList.remove('light');
  }, [lightMode]);

  return (
    <div className="flex flex-col min-h-screen bg-abyssinian-950 font-sans selection:bg-ethioGold-500 selection:text-black">
      {/* Top Multi-Color Eco Stripe Accent */}
      <div className="h-2 w-full bg-gradient-to-r from-emerald-600 via-ethioGold-500 to-rose-600"></div>

      {/* Navigation Header - Scaled to Full Screen Width */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b border-forest-900/30 backdrop-blur-md px-6 md:px-12 py-4">
        <div className="max-w-[96vw] xl:max-w-[98vw] mx-auto flex items-center justify-between min-w-0 gap-4">
          
          {/* Brand Logo & Tagline */}
          <div 
            className="flex items-center gap-3 cursor-pointer group min-w-0"
            onClick={() => setCurrentTab('home')}
          >
            <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-forest-700 rounded-xl shadow-lg shadow-emerald-950/50 group-hover:scale-105 transition-transform">
              <Sprout className="w-7 h-7 text-ethioGold-400 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="font-display font-extrabold text-xl md:text-2xl tracking-tight text-white flex items-center gap-2 truncate">
                EthioHerbal <span className="text-[11px] bg-ethioGold-500/25 text-ethioGold-400 border border-ethioGold-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono font-bold">AI</span>
              </span>
              <span className="text-xs text-forest-400 tracking-wider font-semibold uppercase truncate">Project Portal</span>
            </div>
          </div>

          {/* Navigation Tab Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            <NavLink active={currentTab === 'home'} onClick={() => setCurrentTab('home')}>Home</NavLink>
            <NavLink active={currentTab === 'scanner'} onClick={() => setCurrentTab('scanner')}>AI Neural Scanner</NavLink>
            <NavLink active={currentTab === 'encyclopedia'} onClick={() => setCurrentTab('encyclopedia')}>Herbal Encyclopedia</NavLink>
            <NavLink active={currentTab === 'research'} onClick={() => setCurrentTab('research')}>Project Study</NavLink>
            <NavLink active={currentTab === 'assistant'} onClick={() => setCurrentTab('assistant')}>AI Herbal Bot</NavLink>
            <NavLink active={currentTab === 'preservation'} onClick={() => setCurrentTab('preservation')}>Preservation</NavLink>
          </nav>

          {/* Nav Action Buttons */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentTab('scanner')}
              className="relative overflow-hidden group px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-forest-700 text-white rounded-xl text-sm font-bold tracking-wide shadow-md shadow-emerald-950/60 hover:shadow-lg hover:shadow-emerald-900/30 transition-all flex items-center gap-2.5 border border-emerald-500/20 active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <Camera className="w-4.5 h-4.5 text-ethioGold-400" />
              <span>Real-Time Scan</span>
            </button>
            <button
              onClick={() => setLightMode((s) => !s)}
              aria-label="Toggle light mode"
              className="px-3 py-2 rounded-lg bg-abyssinian-950/40 border border-forest-800/30 text-abyssinian-300 hover:text-white hover:bg-forest-900/20 transition-all flex items-center gap-2"
            >
              {lightMode ? <Sun className="w-4 h-4 text-ethioGold-400" /> : <Moon className="w-4 h-4 text-abyssinian-300" />}
              <span className="text-sm font-semibold">{lightMode ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Header */}
          <div className="flex lg:hidden justify-around mt-4 border-t border-forest-950/50 pt-3 gap-1.5 text-xs font-bold text-abyssinian-400">
          <MobileNavLink active={currentTab === 'home'} onClick={() => setCurrentTab('home')}>Home</MobileNavLink>
          <MobileNavLink active={currentTab === 'scanner'} onClick={() => setCurrentTab('scanner')}>Scanner</MobileNavLink>
          <MobileNavLink active={currentTab === 'encyclopedia'} onClick={() => setCurrentTab('encyclopedia')}>Encyclopedia</MobileNavLink>
          <MobileNavLink active={currentTab === 'research'} onClick={() => setCurrentTab('research')}>Research</MobileNavLink>
          <MobileNavLink active={currentTab === 'assistant'} onClick={() => setCurrentTab('assistant')}>Bot</MobileNavLink>
          <MobileNavLink active={currentTab === 'preservation'} onClick={() => setCurrentTab('preservation')}>Heritage</MobileNavLink>
        </div>
      </header>

      {/* Main Body - Scaled for Screen Fitting & Accessibility */}
      <main className="flex-grow max-w-[96vw] xl:max-w-[98vw] w-full mx-auto px-6 md:px-12 py-10">
        {currentTab === 'home' && <HomeView setTab={setCurrentTab} />}
        {currentTab === 'scanner' && <ScannerView setSelectedPlant={setSelectedPlant} />}
        {currentTab === 'encyclopedia' && (
          <EncyclopediaView 
            selectedPlant={selectedPlant} 
            setSelectedPlant={setSelectedPlant} 
          />
        )}
        {currentTab === 'research' && <ResearchView />}
        {currentTab === 'assistant' && <AssistantView />}
        {currentTab === 'preservation' && <PreservationView />}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-forest-900/30 bg-abyssinian-950/80 backdrop-blur-md py-12 px-6 md:px-12">
        <div className="max-w-[96vw] xl:max-w-[98vw] w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-emerald-600 rounded-lg">
                <Sprout className="w-5.5 h-5.5 text-ethioGold-400" />
              </div>
              <span className="font-display font-extrabold text-xl text-white">EthioHerbal AI</span>
            </div>
            <p className="text-sm text-abyssinian-400 leading-relaxed max-w-sm">
              An advanced deep learning framework designed to preserve and validate traditional Ethiopian herbal knowledge. Based on a project dataset using 24,000 images across 64 species.
            </p>
          </div>
          
          <div className="text-left space-y-3">
            <h4 className="font-display font-bold text-xs text-ethioGold-400 mb-2 tracking-wider uppercase">Medical & Research Disclaimer</h4>
            <p className="text-xs text-abyssinian-500 leading-relaxed">
              This prototype models project data derived from a curated image collection. Predictions are based on leaf segmentation and pre-trained classification models. Always consult certified medical practitioners before applying traditional herbal extracts.
            </p>
          </div>

          <div className="flex flex-col lg:items-end justify-between text-left lg:text-right gap-4">
            <div className="text-sm text-abyssinian-400">
              © {new Date().getFullYear()} EthioHerbal AI Research Initiative. All rights Reserved.
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-emerald-400">
              <a href="#" onClick={(e) => {e.preventDefault(); setCurrentTab('home')}} className="hover:underline hover:text-ethioGold-400">Home</a>
              <span>•</span>
              <a href="#" onClick={(e) => {e.preventDefault(); setCurrentTab('scanner')}} className="hover:underline hover:text-ethioGold-400">Model inference</a>
              <span>•</span>
              <a href="#" onClick={(e) => {e.preventDefault(); setCurrentTab('research')}} className="hover:underline hover:text-ethioGold-400">Project Study</a>
              <span>•</span>
              <a href="#" onClick={(e) => {e.preventDefault(); setCurrentTab('preservation')}} className="hover:underline hover:text-ethioGold-400">Historical Preservation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// NavLink Subcomponent
function NavLink({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4.5 py-2 rounded-xl text-base font-bold tracking-wide transition-all ${
        active 
          ? 'bg-emerald-900/50 text-ethioGold-400 border border-emerald-500/25 shadow-inner' 
          : 'text-abyssinian-300 hover:text-white hover:bg-forest-900/20'
      }`}
    >
      {children}
    </button>
  );
}

// MobileNavLink Subcomponent
function MobileNavLink({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2 text-center rounded-lg transition-all ${
        active 
          ? 'bg-emerald-900/50 text-ethioGold-400 border border-emerald-500/20 shadow-inner' 
          : 'text-abyssinian-400 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

/* ============================================================================
   VIEW 1: HOME/LANDING PAGE
   ============================================================================ */
function HomeView({ setTab }) {
  const [activeRegion, setActiveRegion] = useState(regionsData[0]);
  const [factIndex, setFactIndex] = useState(0);

  // Auto facts rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % quickFacts.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-20 animate-fade-in text-left">
      {/* 1. HERO SECTION - Expanded to fit screen */}
      <section className="relative glass-panel rounded-3xl overflow-hidden p-10 md:p-16 border border-emerald-800/20 shadow-2xl flex flex-col lg:flex-row items-center gap-16">
        
        {/* Decorative Radial Lights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full filter blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ethioGold-600/5 rounded-full filter blur-3xl -z-10"></div>
        
        {/* Hero Left Content */}
        <div className="flex-grow flex-shrink-0 w-full lg:w-7/12 space-y-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-emerald-950/80 border border-emerald-500/30 rounded-full text-xs font-bold text-emerald-400 shadow-sm uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-ethioGold-400" />
            <span>Project Overview (2024)</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none text-white text-glow-green">
            AI-Driven Identification of <br />
            <span className="bg-gradient-to-r from-ethioGold-400 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
              Medicinal Flora
            </span>
          </h1>

          <p className="text-abyssinian-300 text-base md:text-lg leading-relaxed max-w-3xl">
            Bridging indigenous botanical knowledge with high-accuracy Deep Convolutional Networks. The project leverages a custom dataset of 24,000 images across 64 species and fine-tunes <strong>InceptionResNetV2</strong>, achieving strong validation performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-5 pt-4">
            <button 
              onClick={() => setTab('scanner')}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-forest-700 text-white rounded-xl text-base font-extrabold tracking-wide shadow-lg shadow-emerald-950/80 hover:shadow-xl hover:shadow-emerald-900/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3 border border-emerald-500/20"
            >
              <span>Scan Botanical Image</span>
              <Camera className="w-5.5 h-5.5 text-ethioGold-400 animate-pulse" />
            </button>
            <button 
              onClick={() => setTab('research')}
              className="px-8 py-4 bg-forest-950/40 text-ethioGold-400 hover:text-white rounded-xl text-base font-extrabold tracking-wide border border-forest-900/40 shadow-inner hover:bg-forest-900/30 hover:border-forest-800/50 active:scale-95 transition-all flex items-center gap-2.5"
            >
              <span>Explore Project</span>
              <GraduationCap className="w-5 h-5 text-ethioGold-400" />
            </button>
          </div>
        </div>

        {/* Hero Right Visual Banner */}
        <div className="flex-grow w-full lg:w-5/12">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-forest-800/30 shadow-2xl glass-panel group">
            {/* Ambient scanner sweep on hero image */}
            <div className="absolute inset-0 laser-line w-full h-1/6 animate-sweep z-10 pointer-events-none opacity-60"></div>
            <img 
              src="/damakesse.png" 
              alt="Damakesse herb closeup representation" 
              className="w-full h-full object-cover object-center brightness-[0.75] contrast-[1.05] group-hover:scale-105 transition-transform duration-700" 
            />
            {/* Overlaid stats */}
            <div className="absolute bottom-5 left-5 right-5 bg-abyssinian-950/90 backdrop-blur-md p-5 rounded-2xl border border-emerald-500/20 flex justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-950 flex items-center justify-center border border-emerald-500/30 shadow-inner">
                  <Sprout className="w-6 h-6 text-ethioGold-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">Ocimum lamiifolium</h4>
                  <p className="text-xs text-emerald-400 font-semibold font-mono">Damakesse • 97.6% Model Acc</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3.5 py-1.5 rounded-full font-bold font-mono">FIBRILL ILLNESS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC HISTORICAL FACTS SLIDER */}
      <section className="bg-gradient-to-r from-forest-950/40 via-abyssinian-950 to-forest-950/40 p-2 border-y border-forest-900/20">
        <div className="max-w-[96vw] mx-auto py-5 px-6 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="flex items-center gap-2.5 text-ethioGold-400 bg-ethioGold-500/10 px-4 py-2 rounded-full border border-ethioGold-500/20 text-xs font-black uppercase tracking-widest shrink-0">
            <History className="w-4 h-4" />
            <span>Research & Legacy Chronicles</span>
          </div>
          <div className="flex-grow transition-all duration-500 text-left min-h-[3.5rem] flex flex-col justify-center px-4 md:px-10">
            <h4 className="font-display font-bold text-base text-white">{quickFacts[factIndex].title}</h4>
            <p className="text-sm text-abyssinian-400 leading-relaxed mt-1 italic">"{quickFacts[factIndex].fact}"</p>
          </div>
          <div className="flex gap-1.5 shrink-0">
            {quickFacts.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setFactIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${factIndex === i ? 'bg-ethioGold-500 w-6' : 'bg-forest-900 hover:bg-forest-700'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE GEOGRAPHICAL MAP */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-display font-extrabold text-4xl text-white text-glow-green">Ethiopian Biodiversity Climatic Map</h2>
          <p className="text-sm sm:text-base text-abyssinian-400 leading-relaxed">
            Ethiopia's unique geography encompasses highly variable climatic zones. Select a region on our geographical radar to explore the signature plants that thrive there out of the 64 database models.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Map Visual (Grid Column 1-7) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl border border-forest-800/20 p-8 flex flex-col justify-center min-h-[450px] relative overflow-hidden bg-emerald-950/10 shadow-inner">
            <div className="absolute inset-0 bg-radial-gradient from-emerald-900/5 to-transparent pointer-events-none"></div>
            
            {/* Topographical grid lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#143128_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

            <div className="relative w-full aspect-[4/3] max-w-[550px] mx-auto bg-emerald-950/20 border border-emerald-500/10 rounded-3xl p-6 flex items-center justify-center shadow-2xl">
              {/* Central Map Illustration */}
              <div className="absolute inset-8 rounded-full border border-forest-900/30 animate-pulse-slow"></div>
              <div className="absolute inset-20 rounded-full border border-forest-900/40 animate-pulse-slow"></div>
              <div className="absolute inset-32 rounded-full border border-emerald-900/40 animate-radar pointer-events-none"></div>

              {/* Stylized Horn of Africa Outline */}
              <div className="w-[85%] h-[85%] border-2 border-dashed border-forest-800/40 rounded-[40%_60%_30%_70%] rotate-12 flex items-center justify-center bg-gradient-to-tr from-forest-950/30 to-emerald-900/10 backdrop-blur-[2px]">
                <span className="font-traditional uppercase font-black text-3xl tracking-widest text-forest-900/20 select-none">HORN OF AFRICA</span>
              </div>

              {/* Region interactive markers */}
              {regionsData.map((reg) => {
                const isActive = activeRegion.name === reg.name;
                return (
                  <button
                    key={reg.name}
                    onClick={() => setActiveRegion(reg)}
                    className={`absolute ${reg.coordinates} flex flex-col items-center gap-2.5 z-20 group outline-none`}
                  >
                    <span className={`map-pulse p-2.5 rounded-full shadow-lg transition-all ${
                      isActive 
                        ? 'bg-ethioGold-500 text-black scale-110 ring-4 ring-ethioGold-500/20' 
                        : 'bg-emerald-600 text-white group-hover:scale-105'
                    }`}>
                      <MapPin className="w-5 h-5" />
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border tracking-wide shadow-md transition-all ${
                      isActive 
                        ? 'bg-abyssinian-950 text-ethioGold-400 border-ethioGold-500/50 shadow-lg' 
                        : 'bg-abyssinian-950/95 text-abyssinian-300 border-forest-900/50 group-hover:text-white'
                    }`}>
                      {reg.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Region Details Panel (Grid Column 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel rounded-2xl border border-forest-800/20 p-8 md:p-10 bg-gradient-to-b from-abyssinian-950 to-forest-950/20 text-left">
            <div className="space-y-8">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-3xl text-white tracking-tight">{activeRegion.name} Region</h3>
                  <p className="text-xs text-ethioGold-400 font-extrabold font-mono tracking-widest uppercase">{activeRegion.amharic}</p>
                </div>
                <div className="w-14 h-14 rounded-xl bg-forest-950 flex items-center justify-center border border-forest-800/50 shadow-inner">
                  <Layers className="w-7 h-7 text-emerald-400" />
                </div>
              </div>

              <div className={`p-5 rounded-xl border border-forest-900/40 bg-gradient-to-r ${activeRegion.color}`}>
                <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-2">Climatic Environment</h4>
                <p className="text-sm text-abyssinian-300 leading-relaxed">{activeRegion.description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-widest">Signature Botanicals</h4>
                <div className="grid grid-cols-2 gap-4">
                  {activeRegion.signaturePlants.map((plant) => (
                    <div 
                      key={plant} 
                      onClick={() => setTab('encyclopedia')}
                      className="p-4 rounded-xl border border-forest-900/30 bg-emerald-950/10 hover:bg-forest-900/20 hover:border-ethioGold-500/20 cursor-pointer transition-all flex items-center gap-3 group"
                    >
                      <div className="p-1.5 bg-emerald-950 rounded border border-emerald-900 flex items-center justify-center">
                        <Leaf className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-grow">
                        <span className="text-sm font-bold text-white group-hover:text-ethioGold-400 transition-colors block">{plant}</span>
                        <span className="text-[10px] text-abyssinian-500 block font-semibold">Click to inspect</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-abyssinian-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-forest-900/30 pt-8 mt-8">
              <button 
                onClick={() => setTab('scanner')}
                className="w-full py-4 bg-forest-950/60 hover:bg-forest-900/40 hover:border-emerald-500/30 border border-forest-800/40 text-ethioGold-400 hover:text-white rounded-xl text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 active:scale-98 shadow-sm"
              >
                <span>Diagnose Plant from this region</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE CORE FEATURES CARD GRID */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Camera className="w-7 h-7 text-ethioGold-400" />}
          title="InceptionResNetV2 Models"
          desc="Test our high-performance classification nodes trained on 24,000 images, providing rapid local edge predictions or offline simulations for medicinal plants."
        />
        <FeatureCard 
          icon={<BookOpen className="w-7 h-7 text-emerald-400" />}
          title="Herbal Encyclopedia"
          desc="Access comprehensive records containing scientific nomenclature, local names (Amharic, Oromoo, Tigrinya), traditional preparations, and safety notes."
        />
        <FeatureCard 
          icon={<MessageSquare className="w-7 h-7 text-rose-400" />}
          title="Traditional Remedies Chatbot"
          desc="Consult our automated Debtera conversational wellness assistant regarding dosages, active compounds, biochemical features, and toxic limits."
        />
      </section>
    </div>
  );
}

/* ============================================================================
   VIEW 2: AI SCANNER VIEW
   ============================================================================ */
function ScannerView({ setSelectedPlant }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFileObj, setSelectedFileObj] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanLogs, setScanLogs] = useState([]);
  const [activePreset, setActivePreset] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [activeResultTab, setActiveResultTab] = useState('overview');
  
  // Real-time backend connection status
  const [serverOnline, setServerOnline] = useState(false);
  const [isServerPrediction, setIsServerPrediction] = useState(false);
  const [predictionMessage, setPredictionMessage] = useState('');

  // Proactively check if Python FastAPI server.py is running
  useEffect(() => {
    fetch("http://localhost:8000/")
      .then(res => res.json())
      .then(data => {
        if (data.status === "active") {
          setServerOnline(true);
          console.log("Model Server Online. Mode:", data.mode);
        }
      })
      .catch(() => {
        setServerOnline(false);
        console.log("Local model server is offline. Falling back to high-fidelity simulation.");
      });
  }, [scanning]);

  const logStreamLive = [
    "Contacting local Python FastAPI Model Server...",
    "Connection established with active InceptionResNetV2 model...",
    "Uploading raw image buffer...",
    "FastAPI preprocessing: resizing image to 299x299 RGB...",
    "Preprocessing: Normalizing pixels to [-1, 1] range...",
    "Executing deep neural tensor calculations (164 layers, 55M params)...",
    "Parsing categorical class index probabilities...",
    "Class mapped alphabetically: matching with 64-plant database indices...",
    "Live inference complete."
  ];

  const logStreamSim = [
    "Initializing local simulation diagnostic sequence...",
    "Activating high-fidelity leaf segmentation algorithms...",
    "Analyzing leaf margin structure and venation patterns...",
    "Cross-referencing historical medical manuscripts (Branna)...",
    "Filtering database indices for high-confidence predictions...",
    "Compilation complete. Target successfully identified."
  ];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setSelectedFileObj(file);
      setActivePreset(null);
      setScanResult(null);
    }
  };

  // Run Simulation or Live inference scan
  const triggerScan = () => {
    if (!selectedImage) return;
    setScanning(true);
    setScanProgress(0);
    setScanLogs([]);
    setScanResult(null);

    const logStream = serverOnline ? logStreamLive : logStreamSim;

    // Simulated scanner timing loops
    let currentLogIndex = 0;
    const logInterval = setInterval(() => {
      if (currentLogIndex < logStream.length) {
        setScanLogs(prev => [...prev, logStream[currentLogIndex]]);
        currentLogIndex++;
      }
    }, 380);

    const progressInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(logInterval);
          
          // Perform actual backend inference fetch if server online
          if (serverOnline && selectedFileObj) {
            const formData = new FormData();
            formData.append("file", selectedFileObj);
            
            fetch("http://localhost:8000/predict", {
              method: "POST",
              body: formData
            })
              .then(res => {
                if (!res.ok) throw new Error("Inference failed");
                return res.json();
              })
              .then(data => {
                const plantObj = plantsData.find(p => p.id === data.plantId) || plantsData[0];
                setScanResult(plantObj);
                setIsServerPrediction(!data.isSimulation);
                setPredictionMessage(data.message);
                setScanning(false);
              })
              .catch(err => {
                console.error("Backend error: ", err);
                // Fallback to simulation default
                executeSimulationFallback();
              });
          } else {
            executeSimulationFallback();
          }
          return 100;
        }
        return prev + 6;
      });
    }, 130);
  };

  const executeSimulationFallback = () => {
    setTimeout(() => {
      // Find corresponding plant data or default to preset if custom upload
      const plantObj = plantsData.find(p => p.id === activePreset) || plantsData.find(p => p.id === "ocimum-lamiifolium");
      setScanResult(plantObj);
      setIsServerPrediction(false);
      setPredictionMessage("Simulation Mode (fastapi server.py is offline).");
      setScanning(false);
    }, 300);
  };

  // Trigger quick scan from specimen buttons
  const triggerPresetScan = (plantId) => {
    const matchedPlant = plantsData.find(p => p.id === plantId);
    if (!matchedPlant) return;
    
    setSelectedImage(matchedPlant.image);
    setActivePreset(plantId);
    setScanResult(null);
    
    // Fetch image from URL and convert to File Object for API compatibility
    fetch(matchedPlant.image)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], `${plantId}.png`, { type: "image/png" });
        setSelectedFileObj(file);
      })
      .catch(() => setSelectedFileObj(null));

    // Auto-trigger scan
    setTimeout(() => {
      setScanning(true);
      setScanProgress(0);
      setScanLogs([]);
      
      const logStream = serverOnline ? logStreamLive : logStreamSim;
      let currentLogIndex = 0;
      const logInterval = setInterval(() => {
        if (currentLogIndex < logStream.length) {
          setScanLogs(prev => [...prev, logStream[currentLogIndex]]);
          currentLogIndex++;
        }
      }, 350);

      const progressInterval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            clearInterval(logInterval);
            
            if (serverOnline) {
              // Trigger backend request
              const fileToSend = new File([], `${plantId}.png`); // Quick fallback
              const formData = new FormData();
              // Try to fetch real blob or send empty
              formData.append("file", selectedFileObj || fileToSend);
              
              fetch("http://localhost:8000/predict", {
                method: "POST",
                body: formData
              })
                .then(res => res.json())
                .then(data => {
                  const plantObj = plantsData.find(p => p.id === data.plantId) || matchedPlant;
                  setScanResult(plantObj);
                  setIsServerPrediction(!data.isSimulation);
                  setPredictionMessage(data.message);
                  setScanning(false);
                })
                .catch(() => {
                  setScanResult(matchedPlant);
                  setIsServerPrediction(false);
                  setPredictionMessage("Simulation Mode fallback.");
                  setScanning(false);
                });
            } else {
              setScanResult(matchedPlant);
              setIsServerPrediction(false);
              setPredictionMessage("Simulation Mode.");
              setScanning(false);
            }
            return 100;
          }
          return prev + 8;
        });
      }, 110);
    }, 100);
  };

  const resetAll = () => {
    setSelectedImage(null);
    setSelectedFileObj(null);
    setScanning(false);
    setScanProgress(0);
    setScanLogs([]);
    setActivePreset(null);
    setScanResult(null);
  };

  return (
    <div className="space-y-10 animate-fade-in text-left">
      
      {/* Header with Server Status LED */}
      <div className="border-b border-forest-900/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="font-display font-extrabold text-3xl text-glow-green">AI Botanical Diagnosis Console</h2>
          <p className="text-sm text-abyssinian-400 leading-relaxed max-w-xl">
            Simulate a real-time neural scan of Ethiopian traditional plants. Drop your own image or choose an archive preset below. The portal detects local model connections automatically.
          </p>
        </div>
        
        {/* Dynamic LED Indicator */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className="flex items-center gap-2 bg-abyssinian-950/80 px-4 py-2 border border-forest-900/40 rounded-xl shadow-inner text-xs">
            <span className={`w-3 h-3 rounded-full ${serverOnline ? 'bg-emerald-500 animate-ping' : 'bg-red-500'} shrink-0`}></span>
            <span className="font-bold text-white font-mono uppercase tracking-wider">
              {serverOnline ? "FastAPI Server: Connected" : "FastAPI Server: Offline"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Scanner Box (Col 1-7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative rounded-2xl aspect-[4/3] w-full border-2 border-dashed glass-panel flex flex-col items-center justify-center overflow-hidden bg-emerald-950/5 border-forest-800/40">
            {selectedImage ? (
              <div className="absolute inset-0 w-full h-full">
                <img src={selectedImage} alt="Scanned Subject" className="w-full h-full object-cover" />
                
                {/* Laser Sweep Overlay when Scanning */}
                {scanning && (
                  <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px] flex flex-col items-center justify-center p-6">
                    <div className="absolute inset-0 laser-line w-full h-1/6 animate-sweep opacity-90 z-20"></div>
                    
                    {/* Retro Camera Grid overlay */}
                    <div className="absolute inset-6 border border-emerald-500/20 pointer-events-none"></div>
                    <div className="absolute top-6 left-6 w-4.5 h-4.5 border-t-2 border-l-2 border-emerald-400"></div>
                    <div className="absolute top-6 right-6 w-4.5 h-4.5 border-t-2 border-r-2 border-emerald-400"></div>
                    <div className="absolute bottom-6 left-6 w-4.5 h-4.5 border-b-2 border-l-2 border-emerald-400"></div>
                    <div className="absolute bottom-6 right-6 w-4.5 h-4.5 border-b-2 border-r-2 border-emerald-400"></div>

                    {/* Scanning Text HUD */}
                    <div className="bg-abyssinian-950/95 border border-emerald-500/35 p-6 rounded-xl w-full max-w-sm flex flex-col gap-4 shadow-2xl relative z-30 font-mono text-xs">
                      <div className="flex justify-between items-center text-emerald-400 font-bold border-b border-forest-900/50 pb-2">
                        <span className="flex items-center gap-1.5 uppercase"><Sparkles className="w-3.5 h-3.5 animate-spin" /> Neural matching...</span>
                        <span>{scanProgress}%</span>
                      </div>
                      
                      {/* Log Console */}
                      <div className="h-28 overflow-y-auto text-abyssinian-400 space-y-1.5 text-left custom-scrollbar">
                        {scanLogs.map((log, idx) => (
                          <div key={idx} className="flex gap-1.5 items-start">
                            <span className="text-emerald-500 shrink-0">&gt;</span>
                            <span>{log}</span>
                          </div>
                        ))}
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2.5 bg-forest-950 rounded-full overflow-hidden border border-forest-900/30">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-ethioGold-500 transition-all duration-300"
                          style={{ width: `${scanProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Empty Drag and Drop State
              <div className="p-8 text-center max-w-sm space-y-5">
                <div className="w-20 h-20 rounded-2xl bg-forest-950 border border-forest-900/30 flex items-center justify-center mx-auto shadow-inner">
                  <Upload className="w-10 h-10 text-forest-400" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-extrabold text-base text-white">Upload Plant Specimen Photo</h4>
                  <p className="text-xs text-abyssinian-400 leading-relaxed">
                    Select a high-resolution PNG or JPEG leaf image. Files will be forwarded to your InceptionResNetV2 local endpoint if active.
                  </p>
                </div>
                <label className="inline-block px-5 py-3 bg-forest-950 hover:bg-forest-900 border border-forest-800 text-ethioGold-400 hover:text-white rounded-lg text-xs font-bold tracking-widest cursor-pointer uppercase transition-all shadow-md">
                  <span>Browse Directory</span>
                  <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                </label>
              </div>
            )}
          </div>

          {/* Action buttons under scanner box */}
          {selectedImage && !scanning && (
            <div className="flex gap-3 justify-end">
              <button 
                onClick={resetAll}
                className="px-5 py-2.5 bg-forest-950/50 hover:bg-forest-900 border border-forest-800 text-abyssinian-300 hover:text-white rounded-lg text-xs font-bold tracking-wide uppercase transition-all"
              >
                Clear Specimen
              </button>
              <button 
                onClick={triggerScan}
                className="px-7 py-2.5 bg-gradient-to-r from-emerald-600 to-forest-700 text-white rounded-lg text-xs font-bold tracking-widest uppercase transition-all flex items-center gap-2 border border-emerald-500/20 active:scale-95 shadow-md shadow-emerald-950/60"
              >
                <Sparkles className="w-4 h-4 text-ethioGold-400" />
                <span>Initialize AI Scan</span>
              </button>
            </div>
          )}

          {/* Quick presets catalog */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-widest">Select Real Plant specimens (Preset Library Scan)</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {plantsData.slice(0, 4).map((plant) => (
                <button
                  key={plant.id}
                  onClick={() => triggerPresetScan(plant.id)}
                  disabled={scanning}
                  className={`group rounded-xl overflow-hidden glass-panel text-left flex flex-col border hover:scale-[1.02] transition-all disabled:opacity-50 disabled:pointer-events-none ${
                    activePreset === plant.id 
                      ? 'border-ethioGold-500 shadow-lg shadow-ethioGold-500/5' 
                      : 'border-forest-900/30 hover:border-forest-800'
                  }`}
                >
                  <div className="h-20 w-full overflow-hidden relative">
                    <img src={plant.image} alt={plant.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyssinian-950/80 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-3 space-y-0.5">
                    <h5 className="font-display font-bold text-xs text-white leading-none">{plant.name}</h5>
                    <span className="text-[9px] text-emerald-400 font-semibold font-mono tracking-wider">{plant.scientificName}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Scan Result Panel (Col 8-12) */}
        <div className="lg:col-span-5 h-full">
          {scanResult ? (
            <div className="glass-panel rounded-2xl border border-forest-800/20 overflow-hidden bg-gradient-to-b from-abyssinian-950 to-forest-950/20 shadow-2xl flex flex-col">
              
              {/* Header Title band */}
              <div className="p-6 bg-gradient-to-r from-emerald-950 via-forest-950 to-emerald-950 border-b border-forest-900/30 flex items-center justify-between gap-3 text-left">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-extrabold text-2xl text-white">{scanResult.name}</h3>
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-bold">
                      {scanResult.localNames.amharic}
                    </span>
                  </div>
                  <p className="text-xs text-ethioGold-400 font-bold font-mono tracking-wider uppercase mt-1">
                    {scanResult.scientificName}
                  </p>
                </div>
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>

              {/* Status information flag regarding model connection */}
              <div className="bg-emerald-950/20 px-6 py-2 border-b border-forest-900/20 flex items-center justify-between text-xs text-abyssinian-400 font-mono font-semibold">
                <span>Verification Source:</span>
                <span className={`flex items-center gap-1.5 ${isServerPrediction ? 'text-ethioGold-400 font-bold' : 'text-emerald-400'}`}>
                  {isServerPrediction ? <Cpu className="w-3.5 h-3.5" /> : <Info className="w-3.5 h-3.5" />}
                  {isServerPrediction ? "InceptionResNetV2 Live" : "Research Archive Match"}
                </span>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-forest-900/20 text-xs bg-forest-950/30 font-semibold">
                <TabButton active={activeResultTab === 'overview'} onClick={() => setActiveResultTab('overview')}>Overview</TabButton>
                <TabButton active={activeResultTab === 'preparation'} onClick={() => setActiveResultTab('preparation')}>Traditional Prep</TabButton>
                <TabButton active={activeResultTab === 'science'} onClick={() => setActiveResultTab('science')}>Science & Safety</TabButton>
              </div>

              {/* Tab Content Window */}
              <div className="p-6 space-y-6 flex-grow min-h-[280px] text-left">
                {activeResultTab === 'overview' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-widest">Botanical Classification</h4>
                      <p className="text-sm text-abyssinian-300 leading-relaxed font-semibold">
                        Family: <span className="text-white">{scanResult.family}</span>
                      </p>
                      <p className="text-sm text-abyssinian-400 leading-relaxed">{scanResult.description}</p>
                    </div>

                    <div className="space-y-2 border-t border-forest-900/20 pt-4">
                      <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-widest">Primary Therapeutic Benefits</h4>
                      <ul className="space-y-2 text-sm text-abyssinian-300">
                        {scanResult.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex gap-2 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-ethioGold-500 shrink-0 mt-1.5"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeResultTab === 'preparation' && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/10 flex items-start gap-3">
                      <Droplet className="w-5.5 h-5.5 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-sm text-white">Traditional Preparation Method</h4>
                        <p className="text-sm text-abyssinian-300 leading-relaxed">{scanResult.preparation}</p>
                      </div>
                    </div>
                    <div className="bg-forest-950/50 p-4 rounded-xl border border-forest-900/30 text-xs text-abyssinian-400 leading-relaxed">
                      <span className="font-bold text-white block mb-1">Traditional Preservation Note:</span>
                      These procedures reflect records found in traditional manuscripts (Branna) and practiced heavily in indigenous Dega & Qolla villages.
                    </div>
                  </div>
                )}

                {activeResultTab === 'science' && (
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-widest">Modern Pharmacological Validation</h4>
                      <p className="text-sm text-abyssinian-300 leading-relaxed">{scanResult.clinicalValidation}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 flex items-start gap-3">
                      <ShieldAlert className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-sm text-white">Safety Warning & Ingestion limits</h4>
                        <p className="text-sm text-abyssinian-300 leading-relaxed">{scanResult.safetyWarnings}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom footer button to link catalog */}
              <div className="p-4 bg-forest-950/30 border-t border-forest-900/20 flex justify-end">
                <button 
                  onClick={() => {
                    setSelectedPlant(scanResult);
                    const rootContainer = document.getElementById('root');
                    if (rootContainer) rootContainer.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2.5 bg-forest-950 hover:bg-forest-900 border border-forest-800 text-ethioGold-400 hover:text-white rounded-lg text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>Open in Catalog</span>
                  <BookOpen className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>
          ) : (
            // Placeholder State before scan is complete
            <div className="glass-panel rounded-2xl border border-forest-800/20 p-10 text-center flex flex-col justify-center items-center h-full min-h-[350px] space-y-5">
              <div className="w-16 h-16 rounded-full bg-forest-950 border border-forest-900/30 flex items-center justify-center shadow-inner">
                <RefreshCw className={`w-8 h-8 text-forest-500 ${scanning ? 'animate-spin' : ''}`} />
              </div>
              <div className="space-y-2 max-w-xs">
                <h4 className="font-display font-extrabold text-base text-white">Awaiting Scan Input</h4>
                <p className="text-xs text-abyssinian-400 leading-relaxed">
                  {scanning 
                    ? "Executing deep pre-trained convolutional filters, comparing leaf shape descriptors..."
                    : "Select a real plant specimen cards below, or browse your own directory to parse photos."
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   VIEW 3: HERBAL ENCYCLOPEDIA (64 PLANTS searchable library)
   ============================================================================ */
function EncyclopediaView({ selectedPlant, setSelectedPlant }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Respiratory', 'Digestive', 'Skin & Wound', 'Pain Relief', 'Infections', 'General Well-being'];

  // Filtered plants matching search + category filter
  const filteredPlants = plantsData.filter(plant => {
    const matchesSearch = 
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.localNames.amharic.includes(searchQuery) ||
      plant.family.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.uses.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || plant.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-10 animate-fade-in text-left">
      
      {/* Search Header Banner - Scaled to screen */}
      <div className="glass-panel rounded-2xl p-8 border border-forest-800/20 bg-gradient-to-r from-emerald-950/20 via-abyssinian-950 to-forest-950/20 flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="space-y-3">
          <h2 className="font-display font-extrabold text-4xl text-white tracking-tight text-glow-green">Herbal Encyclopedia Database</h2>
          <p className="text-sm text-abyssinian-400 leading-relaxed max-w-xl">
            This database comprises the project dataset. Browse and search 64 traditional medicinal plant classes representing 24,000 documented images.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-forest-400" />
          <input 
            type="text" 
            placeholder="Search e.g. Damakesse, ጤና አዳም, Allium sativum..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3 bg-forest-950/80 border border-forest-800/60 focus:border-ethioGold-500 rounded-xl text-xs outline-none text-white transition-all placeholder-abyssinian-500 font-sans"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-4 top-3.5 text-abyssinian-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Chips Selection */}
      <div className="flex flex-wrap gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4.5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all ${
              activeCategory === cat 
                ? 'bg-ethioGold-500 text-black border border-ethioGold-500 shadow-md font-bold' 
                : 'bg-forest-950/60 hover:bg-forest-900 border border-forest-900 text-abyssinian-300 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Plants Grid */}
      {filteredPlants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPlants.map((plant) => (
            <div 
              key={plant.id} 
              onClick={() => setSelectedPlant(plant)}
              className="group rounded-2xl glass-panel glass-panel-hover border border-forest-900/30 overflow-hidden flex flex-col justify-between cursor-pointer shadow-lg shadow-black/10"
            >
              <div>
                {/* Visual Plant Header */}
                <div className="h-44 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/15 z-10 group-hover:bg-transparent transition-all"></div>
                  <img src={plant.image} alt={plant.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-3 right-3 z-20 text-[9px] font-extrabold bg-abyssinian-950/90 text-ethioGold-400 border border-ethioGold-500/30 px-2.5 py-1 rounded-full uppercase tracking-widest">
                    {plant.category}
                  </span>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-emerald-400 font-black font-mono tracking-widest uppercase block">{plant.scientificName}</span>
                    <h3 className="font-display font-extrabold text-xl text-white group-hover:text-ethioGold-400 transition-colors leading-tight flex items-center justify-between">
                      <span>{plant.name}</span>
                      <span className="text-xs text-abyssinian-400 font-semibold">{plant.localNames.amharic}</span>
                    </h3>
                  </div>
                  <p className="text-xs text-abyssinian-400 leading-relaxed line-clamp-3">
                    {plant.description}
                  </p>
                </div>
              </div>

              {/* Details link footer */}
              <div className="p-4 border-t border-forest-900/20 bg-forest-950/20 flex justify-end items-center gap-1 text-xs font-bold text-emerald-400 group-hover:text-ethioGold-400 transition-colors">
                <span>View Full Analysis</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Empty Search Results State
        <div className="glass-panel rounded-2xl border border-forest-800/20 py-20 text-center max-w-md mx-auto space-y-5">
          <div className="w-16 h-16 rounded-full bg-forest-950 border border-forest-900/30 flex items-center justify-center mx-auto">
            <Search className="w-8 h-8 text-forest-500" />
          </div>
          <div className="space-y-2">
            <h4 className="font-display font-extrabold text-base text-white">No matches found</h4>
            <p className="text-xs text-abyssinian-400 leading-relaxed font-semibold">
              We couldn't find matches for "{searchQuery}" under "{activeCategory}". Try spelling with English or Amharic search queries.
            </p>
          </div>
        </div>
      )}

      {/* DETAIL OVERLAY MODAL */}
      {selectedPlant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div 
            className="w-full max-w-4xl glass-panel bg-abyssinian-950 rounded-2xl border border-forest-800/30 overflow-hidden shadow-2xl flex flex-col md:flex-row relative animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPlant(null)}
              className="absolute top-4 right-4 z-40 p-2.5 bg-abyssinian-950/90 hover:bg-forest-950 rounded-full border border-forest-800/40 text-abyssinian-400 hover:text-white transition-all shadow-md active:scale-90"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            {/* Left side plant cover (Col 1) */}
            <div className="w-full md:w-5/12 h-64 md:h-auto overflow-hidden relative min-h-[300px]">
              <img src={selectedPlant.image} alt={selectedPlant.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-abyssinian-950 via-transparent to-transparent"></div>
              
              {/* Region Label Tag */}
              <div className="absolute bottom-5 left-5 bg-abyssinian-950/90 backdrop-blur-md px-4 py-2 rounded-xl border border-emerald-500/20 text-xs font-bold text-white flex items-center gap-1.5 shadow-lg">
                <MapPin className="w-4 h-4 text-ethioGold-400" />
                <span>Geographic: {selectedPlant.region}</span>
              </div>
            </div>

            {/* Right side information parameters (Col 2) */}
            <div className="w-full md:w-7/12 p-8 md:p-10 space-y-6 max-h-[85vh] md:max-h-[600px] overflow-y-auto custom-scrollbar">
              <div className="space-y-1">
                <span className="text-[10px] text-emerald-400 font-extrabold font-mono tracking-widest uppercase block">{selectedPlant.family}</span>
                <h3 className="font-display font-extrabold text-3xl text-white flex items-center gap-2 leading-none">
                  <span>{selectedPlant.name}</span>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-bold">
                    {selectedPlant.localNames.amharic}
                  </span>
                </h3>
                <span className="text-xs text-abyssinian-400 font-semibold block italic mt-1">{selectedPlant.scientificName}</span>
              </div>

              {/* Local Names detail line */}
              <div className="p-4 bg-forest-950/40 rounded-xl border border-forest-900/30 grid grid-cols-3 gap-3 text-xs font-bold text-center">
                <div>
                  <span className="text-abyssinian-500 block mb-0.5">Amharic</span>
                  <span className="text-white font-mono">{selectedPlant.localNames.amharic}</span>
                </div>
                <div className="border-x border-forest-900/30">
                  <span className="text-abyssinian-500 block mb-0.5">Afaan Oromoo</span>
                  <span className="text-white font-mono">{selectedPlant.localNames.oromoo}</span>
                </div>
                <div>
                  <span className="text-abyssinian-500 block mb-0.5">Tigrinya</span>
                  <span className="text-white font-mono">{selectedPlant.localNames.tigrinya}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-widest border-b border-forest-900/20 pb-1">Botanical Summary</h4>
                <p className="text-sm text-abyssinian-300 leading-relaxed">{selectedPlant.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-widest border-b border-forest-900/20 pb-1">Traditional Practice Instructions</h4>
                <p className="text-sm text-abyssinian-300 leading-relaxed font-sans">{selectedPlant.preparation}</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-widest border-b border-forest-900/20 pb-1">Safety Warnings</h4>
                <div className="p-4 bg-rose-950/20 border border-rose-500/20 rounded-xl flex gap-3 items-start text-xs text-abyssinian-300">
                  <ShieldAlert className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{selectedPlant.safetyWarnings}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================================
  VIEW 4: PROJECT STUDY INSIGHTS & COMPARISONS
  ============================================================================ */
function ResearchView() {
  return (
    <div className="space-y-16 animate-fade-in text-left">
      
      {/* 1. Academic Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ethioGold-500/10 border border-ethioGold-500/25 rounded-full text-xs font-black text-ethioGold-400 uppercase tracking-widest">
          <GraduationCap className="w-4 h-4" />
          <span>Research Study & Validation Metrics</span>
        </div>
        <h2 className="font-display font-extrabold text-4xl text-white tracking-tight leading-tight text-glow-green">
          Project Study & Insights
        </h2>
        <p className="text-sm sm:text-base text-abyssinian-400 leading-relaxed">
          Pioneering the application of Deep Learning to digitize and classify Ethiopian medicinal plants. Presented in <strong>April 2024</strong>.
        </p>
      </section>

      {/* 2. Abstract & Core Dataset Highlights */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Project Metadata Details (Col 1-4) */}
        <div className="lg:col-span-4 glass-panel rounded-2xl border border-forest-800/20 p-8 flex flex-col justify-between bg-gradient-to-b from-abyssinian-950 to-forest-950/10">
          <div className="space-y-6">
            <h4 className="font-display font-black text-xs text-ethioGold-400 tracking-wider uppercase">Project Metadata</h4>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-abyssinian-500 block text-xs font-bold uppercase tracking-wider">Candidate</span>
                <span className="text-white font-extrabold">YOSEPH AWOKE FENTIE</span>
              </div>
              <div>
                <span className="text-abyssinian-500 block text-xs font-bold uppercase tracking-wider">Major field</span>
                <span className="text-white font-semibold">Information and Communication Engineering</span>
              </div>
              <div>
                <span className="text-abyssinian-500 block text-xs font-bold uppercase tracking-wider">Institution</span>
                <span className="text-white font-semibold">Huazhong University of Science and Technology</span>
              </div>
              <div>
                <span className="text-abyssinian-500 block text-xs font-bold uppercase tracking-wider">Advisor / Supervisor</span>
                <span className="text-white font-semibold">Associate Researcher Zhenyu Liao</span>
              </div>
              <div>
                <span className="text-abyssinian-500 block text-xs font-bold uppercase tracking-wider">Defended Date</span>
                <span className="text-white font-semibold">April 15, 2024</span>
              </div>
            </div>
          </div>
          <div className="border-t border-forest-900/30 pt-6 mt-6">
            <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3.5 py-1.5 rounded-full font-bold font-mono">
              STATUS: PROJECT COMPLETED
            </span>
          </div>
        </div>

        {/* Abstract Highlights Panel (Col 5-12) */}
        <div className="lg:col-span-8 glass-panel rounded-2xl border border-forest-800/20 p-8 md:p-10 bg-gradient-to-br from-abyssinian-950 via-forest-950/10 to-abyssinian-950 space-y-6">
          <h4 className="font-display font-black text-xs text-ethioGold-400 tracking-wider uppercase">Research Abstract Overview</h4>
          <p className="text-sm text-abyssinian-300 leading-relaxed">
            "This project marks an innovative effort in deep learning-based image classification tailored to Ethiopian traditional medicinal plants. Focused on awareness, documentation gaps, and biodiversity preservation, the work emphasizes the significance of safeguarding traditional knowledge."
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-forest-900/30 pt-6">
            <StatCard number="24,000" label="Dataset Images" />
            <StatCard number="64" label="Species Classes" />
            <StatCard number="400" label="Avg Image / Class" />
            <StatCard number="97.6%" label="Top Model Accuracy" />
          </div>
        </div>
      </section>

      {/* 3. Pretrained CNN Model Comparison Chart (Stylized HTML/CSS Graph) */}
      <section className="glass-panel rounded-3xl border border-forest-800/20 p-8 md:p-12 space-y-10 bg-gradient-to-b from-abyssinian-950 to-forest-950/20">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h3 className="font-display font-extrabold text-3xl text-white tracking-tight">Pretrained CNN Transfer Learning Performance</h3>
          <p className="text-xs sm:text-sm text-abyssinian-400 leading-relaxed">
            Evaluating multiple architectures through fine-tuning on our unique dataset. **InceptionResNetV2** emerged as the standout performer.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {/* InceptionResNetV2 */}
          <ChartRow 
            name="InceptionResNetV2" 
            accuracy={97.62} 
            testAccuracy={90.11}
            barColor="bg-gradient-to-r from-emerald-500 to-ethioGold-500" 
            layers="164 Layers" 
            params="~55 Million Params"
            isActive={True}
          />
          {/* MobileNetV2 */}
          <ChartRow 
            name="MobileNetV2" 
            accuracy={95.60} 
            testAccuracy={87.78}
            barColor="bg-emerald-600/80" 
            layers="53 Layers" 
            params="~3.4 Million Params"
          />
          {/* VGG16 */}
          <ChartRow 
            name="VGG16" 
            accuracy={94.56} 
            testAccuracy={82.50}
            barColor="bg-forest-800/80" 
            layers="16 Layers" 
            params="~138 Million Params"
          />
          {/* InceptionV3 */}
          <ChartRow 
            name="InceptionV3" 
            accuracy={91.56} 
            testAccuracy={80.88}
            barColor="bg-forest-900/60" 
            layers="48 Layers" 
            params="~23.8 Million Params"
          />
          {/* Custom CNN */}
          <ChartRow 
            name="Custom CNN (CNN)" 
            accuracy={85.85} 
            testAccuracy={75.68}
            barColor="bg-abyssinian-700/50" 
            layers="5 Layers" 
            params="Custom Conv Node"
          />
        </div>
      </section>

      {/* 4. Methodology Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <MethodologyCard 
          icon={<Cpu className="w-6 h-6 text-ethioGold-400" />}
          title="Data Augmentation"
          desc="To resolve the threat of overfitting under limited class distribution constraints, the 24,000 datasets were subjected to rich augmentations: horizontal/vertical flipping, rotation, zooming, and normalization."
        />
        <MethodologyCard 
          icon={<Globe className="w-6 h-6 text-emerald-400" />}
          title="Model Quantization"
          desc="The project explored TensorFlow Lite quantization, compressing the large InceptionResNetV2 model to improve inference speed and support offline usage in remote environments."
        />
        <MethodologyCard 
          icon={<BarChart3 className="w-6 h-6 text-rose-400" />}
          title="Information Retrieval"
          desc="Beyond model training, the study implements an information retrieval system combining AI-based predictions with traditional databases, providing localized names, uses, and critical safety indexes."
        />
      </section>
    </div>
  );
}

// Subcomponents for Research View
function StatCard({ number, label }) {
  return (
    <div className="p-5 bg-forest-950/35 border border-forest-900/40 rounded-2xl text-center space-y-1">
      <span className="block font-display font-black text-2xl text-ethioGold-400 text-glow-gold">{number}</span>
      <span className="block text-[10px] text-abyssinian-400 font-extrabold uppercase tracking-widest">{label}</span>
    </div>
  );
}

function ChartRow({ name, accuracy, testAccuracy, barColor, layers, params, isActive = false }) {
  return (
    <div className={`p-5 rounded-2xl border text-left space-y-3 transition-all ${
      isActive 
        ? 'bg-emerald-950/20 border-ethioGold-500/50 shadow-lg shadow-ethioGold-500/5' 
        : 'bg-forest-950/20 border-forest-900/30'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div>
          <span className="font-display font-extrabold text-base text-white">{name}</span>
          <span className="text-[10px] text-abyssinian-500 font-bold block sm:inline sm:ml-3">
            {layers} • {params}
          </span>
        </div>
        <div className="flex gap-4 font-mono font-bold shrink-0">
          <span className="text-emerald-400">Train Acc: {accuracy.toFixed(2)}%</span>
          <span className="text-ethioGold-400">Test Acc: {testAccuracy.toFixed(2)}%</span>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-1.5">
        <div className="w-full h-3 bg-forest-950 rounded-full overflow-hidden border border-forest-900/35">
          <div className={`h-full ${barColor} rounded-full transition-all`} style={{ width: `${accuracy}%` }}></div>
        </div>
      </div>
    </div>
  );
}

function MethodologyCard({ icon, title, desc }) {
  return (
    <div className="glass-panel p-6 sm:p-8 rounded-2xl text-left space-y-4">
      <div className="w-12 h-12 rounded-xl bg-forest-950 border border-forest-900/40 flex items-center justify-center shadow-inner">
        {icon}
      </div>
      <h4 className="font-display font-extrabold text-base text-white">{title}</h4>
      <p className="text-xs text-abyssinian-400 leading-relaxed font-semibold">{desc}</p>
    </div>
  );
}

/* ============================================================================
   VIEW 5: AI WELLNESS ASSISTANT (CHATBOT UI)
   ============================================================================ */
function AssistantView() {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: 'Salam! I am the **Debtera Traditional Healing Assistant**, informed directly by the 64 medicinal plant database models. Ask me anything about traditional botanical names, preparations, research benchmarks, or toxicity parameters.'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [typing, setTyping] = useState(false);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const promptSuggestions = [
    "Recommend a plant for stomach diarrhea.",
    "Tell me about Echinops kebericho (ቀበሪቾ).",
    "Which plant helps treat tonsillitis?",
    "Is Tenadam safe during pregnancy?"
  ];

  const handleQuerySubmit = (queryText) => {
    if (!queryText.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: queryText }]);
    setInputValue('');
    setTyping(true);

    setTimeout(() => {
      let botResponse = '';
      const text = queryText.toLowerCase();

      if (text.includes('diarrhea') || text.includes('acacia') || text.includes('stomach') || text.includes('girar')) {
        botResponse = `For digestive issues and diarrhea, the project database lists **Acacia nilotica (Girar / ግራር)** as a core remedy.\n\n**Traditional Prep:** The fruits and leaflets of Girar are gathered and prepared. It is traditionally consumed to treat acute diarrhea, diabetes, stomach disorders, and loose teeth (strengthening gums).\n\n**Category:** Digestive wellness.`;
      } 
      else if (text.includes('tonsillitis') || text.includes('tonsil') || text.includes('acmella') || text.includes('berbere')) {
        botResponse = `For tonsillitis, your database indicates a highly effective local herb: **Acmella caulirhiza (Yemdir berbere / የምድር በርበሬ)**.\n\n**Traditional Preparation:** Local healers utilize the leaves and flowers of the plant. Chewing the flowers and applying them directly to the tonsil area is the primary traditional treatment.`;
      }
      else if (text.includes('kebericho') || text.includes('echinops') || text.includes('headache') || text.includes('vomit')) {
        botResponse = `**Echinops kebericho (Kebericho / ቀበሪቾ)** is one of the most famous, highly prized medicinal roots in the Ethiopian highlands.\n\n**Uses:** According to project data, Kebericho roots are pulverized and used for the treatment of severe toothaches, vomiting, and persistent headaches.\n\n**Category:** Respiratory & pain relief.`;
      } 
      else if (text.includes('tenadam') || text.includes('ruta') || text.includes('pregnancy') || text.includes('pregnant')) {
        botResponse = `**Ruta chalepensis (Tenadam / ጥናዳም)** is widely used for relieving stomach aches through cold water maceration and ingestion.\n\n**Critical Pregnancy Warning:** In traditional toxicology and modern pharmacology, Tenadam contains active quinoline alkaloids that act as uterine stimulants. It is **highly dangerous and strictly forbidden** for pregnant women. Phototoxic compounds in its sap can also cause blistering skin burns in sunlight.`;
      } 
      else if (text.includes('eret') || text.includes('aloe') || text.includes('anthrax')) {
        botResponse = `**Aloe monticola (Eret / እሬት)** grows on steep, bare mountain slopes and is traditionally used for severe infections like **Anthrax**.\n\n**Traditional Prep:** The root of Eret is pounded, mixed with cold water and traditional local alcohol (Katila/Araqi), and administered to the patient.`;
      }
      else if (text.includes('gesho') || text.includes('rhamnus')) {
        botResponse = `**Rhamnus prinoides (Gesho / ጌሽሖ)** is a vital highland plant.\n\n**Uses:** Beyond its extensive cultural significance as a bittering agent for fermenting traditional beer (Talla) and honey wine (Tej), it is traditionally used as a stomachic and antimicrobial agent for treating tonsillitis.`;
      }
      else if (text.includes('accuracy') || text.includes('inceptionresnetv2') || text.includes('hust') || text.includes('thesis')) {
        botResponse = `The project successfully trained **InceptionResNetV2** on 24,000 images representing all 64 classes, yielding an excellent **97.6% validation accuracy**.\n\nThis model outperforms VGG16 (82.5% test accuracy), MobileNetV2 (87.8% test accuracy), and InceptionV3 (80.9% test accuracy), demonstrating strong feature extraction in analyzing detailed plant leaves.`;
      }
      else {
        botResponse = `I can provide detailed information about any of the **64 traditional plants** in your database (like *Echinops kebericho* for headaches, *Acacia nilotica* for diarrhea, or *Acmella caulirhiza* for tonsillitis).\n\nAsk me about traditional preparations, what parts are used (leaves, roots, seeds), where they grow, or project model details!`;
      }

      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
      setTyping(false);
    }, 1100);
  };

  const renderMessageContent = (content) => {
    return content.split('\n\n').map((paragraph, pIdx) => {
      if (paragraph.startsWith('*') || paragraph.startsWith('-') || paragraph.match(/^\d\./)) {
        return (
          <ul key={pIdx} className="list-disc pl-4 space-y-1 text-sm text-left">
            {paragraph.split('\n').map((line, lIdx) => {
              const cleanedLine = line.replace(/^[\*\-\d\.\s]+/, '');
              return <li key={lIdx} dangerouslySetInnerHTML={{ __html: formatBoldText(cleanedLine) }} />;
            })}
          </ul>
        );
      }
      return (
        <p key={pIdx} className="text-sm leading-relaxed text-left" dangerouslySetInnerHTML={{ __html: formatBoldText(paragraph) }} />
      );
    });
  };

  const formatBoldText = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ethioGold-400 font-extrabold">$1</strong>');
  };

  return (
    <div className="max-w-[96vw] xl:max-w-[98vw] w-full mx-auto glass-panel rounded-2xl border border-forest-800/20 overflow-hidden flex flex-col h-[75vh] min-h-[500px] shadow-2xl animate-fade-in text-left">
      {/* Bot Chat Header */}
      <div className="p-5 bg-gradient-to-r from-emerald-950 via-forest-950 to-emerald-950 border-b border-forest-900/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-ethioGold-400 relative">
            <Bot className="w-7 h-7" />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-abyssinian-950 rounded-full"></span>
          </div>
          <div>
            <h4 className="font-display font-extrabold text-base text-white">Traditional Wellness Assistant</h4>
            <span className="text-xs text-emerald-400 font-semibold font-mono tracking-wider">Debtera-GPT • 64 Species Trained</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-abyssinian-400">
          <HeartPulse className="w-4.5 h-4.5 text-rose-500 animate-pulse" />
          <span>Academic Database Active</span>
        </div>
      </div>

      {/* Chat Messages Panel */}
      <div className="flex-grow p-6 overflow-y-auto space-y-5 bg-abyssinian-950/40 custom-scrollbar">
        {messages.map((msg, idx) => {
          const isBot = msg.role === 'bot';
          return (
            <div key={idx} className={`flex gap-4 max-w-[85%] ${isBot ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border shadow-inner ${
                isBot 
                  ? 'bg-emerald-950 border-emerald-500/20 text-ethioGold-400' 
                  : 'bg-forest-900 border-forest-800 text-white'
              }`}>
                {isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
              </div>

              <div className={`p-5 rounded-2xl space-y-3 border text-sm shadow-md ${
                isBot 
                  ? 'bg-emerald-950/30 border-emerald-500/10 text-abyssinian-200 rounded-tl-sm' 
                  : 'bg-forest-900/40 border-forest-800/50 text-white rounded-tr-sm'
              }`}>
                {renderMessageContent(msg.content)}
              </div>
            </div>
          );
        })}

        {/* Streaming/Typing indicator */}
        {typing && (
          <div className="flex gap-4 max-w-[80%] mr-auto items-center">
            <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/20 flex items-center justify-center text-ethioGold-400 shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div className="p-4 bg-emerald-950/20 border border-emerald-500/10 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
        <div ref={chatBottomRef} />
      </div>

      {/* Prompt Suggestions chips */}
      <div className="p-3.5 bg-forest-950/20 border-t border-forest-900/10 flex flex-wrap gap-2">
        {promptSuggestions.map((sug, idx) => (
          <button
            key={idx}
            onClick={() => handleQuerySubmit(sug)}
            className="px-4 py-2 bg-forest-950 hover:bg-forest-900/60 border border-forest-900/60 hover:border-forest-800 text-abyssinian-400 hover:text-white rounded-xl text-xs font-bold transition-all shadow-sm"
          >
            {sug}
          </button>
        ))}
      </div>

      {/* Input Form Box */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleQuerySubmit(inputValue);
        }}
        className="p-5 border-t border-forest-900/20 bg-forest-950/30 flex gap-4"
      >
        <input 
          type="text" 
          placeholder="Ask e.g. What plant is Acmella caulirhiza? Explain InceptionResNetV2 accuracy." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={typing}
          className="flex-grow px-5 py-3 bg-forest-950 border border-forest-800 focus:border-ethioGold-500 rounded-xl text-xs outline-none text-white transition-all placeholder-abyssinian-500 font-sans"
        />
        <button 
          type="submit" 
          disabled={typing || !inputValue.trim()}
          className="px-5 py-3 bg-gradient-to-r from-emerald-600 to-forest-700 text-white border border-emerald-500/20 rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none shadow-md shadow-emerald-950/60"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}

/* ============================================================================
   VIEW 6: WISDOM PRESERVATION & EDUCATION PAGE
   ============================================================================ */
function PreservationView() {
  return (
    <div className="space-y-16 animate-fade-in text-left">
      {/* Immersive Scroll Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ethioGold-500/10 border border-ethioGold-500/20 rounded-full text-xs font-black text-ethioGold-400 uppercase tracking-widest">
          <History className="w-4 h-4" />
          <span>Securing Ancestral Heritage</span>
        </div>
        <h2 className="font-display font-extrabold text-4xl text-white tracking-tight leading-tight text-glow-green">
          Digitizing the Branna Manuscripts
        </h2>
        <p className="text-sm sm:text-base text-abyssinian-400 leading-relaxed">
          For thousands of years, traditional knowledge regarding Ethiopia's rich biodiverse flora was threatened by physical manuscript decay, rapid deforestation, and generational transfer loss. EthioHerbal AI exists to build a digital bridge between ancestral records and future generations.
        </p>
      </section>

      {/* Detailed narrative cards grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="glass-panel rounded-2xl border border-forest-800/20 p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-forest-950 border border-forest-900/50 flex items-center justify-center shadow-inner">
              <History className="w-6 h-6 text-ethioGold-400" />
            </div>
            <h3 className="font-display font-extrabold text-xl text-white">The Legacy of the 'Debteras'</h3>
            <p className="text-sm text-abyssinian-400 leading-relaxed font-semibold">
              Traditional healers, particularly scholarly figures known as **Debteras**, compiled extensive medical manuals called **Metsihafe Suhur** on goat-skin parchment (Branna). These documents detailed intricate botanical catalogs, blending herbal chemistry, geographical locations, and spiritual healing methods.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/10 text-xs text-emerald-400 font-semibold font-mono">
            ARCHIVE FACT: The Fitha Negest (Law of Kings) and primary religious books also contain multiple clauses emphasizing standard medicinal plant protection laws.
          </div>
        </div>

        <div className="glass-panel rounded-2xl border border-forest-800/20 p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-forest-950 border border-forest-900/50 flex items-center justify-center shadow-inner">
              <ShieldAlert className="w-6 h-6 text-rose-400" />
            </div>
            <h3 className="font-display font-extrabold text-xl text-white">Deforestation and Biodiversity Threat</h3>
            <p className="text-sm text-abyssinian-400 leading-relaxed font-semibold">
              Ethiopia contains over 6,000 vascular plant species, of which roughly **10% are completely endemic**. However, high rates of habitat loss and timber clearing threaten to wipe out rare medicinal shrubs before they can be chemically validated. Preservation is an active race against time.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 text-xs text-rose-400 font-semibold font-mono">
            ECOLOGY STAT: Out of roughly 1,000 commonly recognized medicinal plants in Ethiopia, less than 15% have received rigorous modern clinical review.
          </div>
        </div>
      </section>

      {/* Preservation Process visual timeline */}
      <section className="glass-panel rounded-2xl border border-forest-800/20 p-10 md:p-12 text-center space-y-12">
        <h3 className="font-display font-extrabold text-2xl text-white">How EthioHerbal AI Preserves Wisdom</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-forest-900 -z-10"></div>

          <TimelineStep 
            number="1"
            title="Digitize & Catalog"
            desc="Translating and recording ancient Ge'ez / Amharic text scripts detailing traditional preparations into structured JSON tables."
          />
          <TimelineStep 
            number="2"
            title="AI Model Training"
            desc="Training neural networks on localized leaf shapes, textures, and venation markers to provide high-accuracy visual diagnosis."
          />
          <TimelineStep 
            number="3"
            title="Scientific Alignment"
            desc="Cross-referencing traditional benefits with modern PubMed/Medline research to establish biochemical profiles and safety limits."
          />
        </div>
      </section>
    </div>
  );
}

// Subcomponent for the timeline steps
function TimelineStep({ number, title, desc }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-14 h-14 rounded-full bg-forest-950 border-2 border-emerald-500/30 text-ethioGold-400 flex items-center justify-center font-display font-black text-xl shadow-lg relative">
        <span className="absolute inset-0.5 rounded-full border border-ethioGold-500/20 animate-ping"></span>
        {number}
      </div>
      <div className="space-y-2">
        <h4 className="font-display font-extrabold text-base text-white">{title}</h4>
        <p className="text-xs text-abyssinian-400 leading-relaxed max-w-xs font-semibold">{desc}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-8 text-left space-y-5">
      <div className="w-14 h-14 rounded-xl bg-forest-950 flex items-center justify-center border border-forest-900/50 shadow-inner">
        {icon}
      </div>
      <h3 className="font-display font-extrabold text-xl text-white">{title}</h3>
      <p className="text-sm text-abyssinian-400 leading-relaxed font-semibold">{desc}</p>
    </div>
  );
}
