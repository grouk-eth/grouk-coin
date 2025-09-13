import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ====== QUICK SETTINGS ======
const CONTRACT = "0x000000000000000000000000000000000000dEaD"; // Dummy until live
const TG = "https://t.me/GroukCommunity";
const X = "https://x.com/TheCryptoIntelX";
const PANCAKE = "https://pancakeswap.finance/swap?outputCurrency=0x000000000000000000000000000000000000dEaD"; // Dummy pair
const BSCSCAN = "https://bscscan.com/token/0x000000000000000000000000000000000000dEaD"; // Dummy token page
const LPLOCK = "https://locker.example.com/tx/0xLOCKPLACEHOLDER"; // Dummy LP lock
const WHITEPAPER = "/whitepaper.pdf"; // Hosted in /public

const COLORS = {
  primary: "from-rose-500 via-red-500 to-amber-500",
  dark: "#0b0b0e",
};

export default function GROUKSite() {
  return (
    <div className="min-h-screen text-white bg-[radial-gradient(1200px_700px_at_50%_-100px,rgba(250,100,0,.35),transparent),radial-gradient(900px_600px_at_120%_20%,rgba(255,255,255,.06),transparent),radial-gradient(900px_600px_at_-20%_20%,rgba(255,255,255,.04),transparent)]" style={{backgroundColor: COLORS.dark}}>
      <NoiseLayer />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Ribbon />
        <PressStrip />
        <Stats />
        <Tokenomics />
        <Roadmap />
        <Proofs />
        <HowToBuy />
        <WhitepaperSection />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <CoffeeLogo className="h-8 w-8"/>
          <span className="text-xl font-semibold tracking-wide">GROUK</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#tokenomics" className="hover:opacity-80">Tokenomics</a>
          <a href="#roadmap" className="hover:opacity-80">Roadmap</a>
          <a href="#how" className="hover:opacity-80">How to Buy</a>
          <a href="#whitepaper" className="hover:opacity-80">Whitepaper</a>
          <a href={TG} target="_blank" className="hover:opacity-80">Telegram</a>
          <a href={X} target="_blank" className="hover:opacity-80">X</a>
          <GradientButton href={PANCAKE}>Buy on PancakeSwap</GradientButton>
        </nav>
        <button onClick={()=>setOpen(v=>!v)} className="md:hidden p-2 rounded-lg hover:bg-white/10" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0, opacity:0}} animate={{height:"auto", opacity:1}} exit={{height:0, opacity:0}} className="md:hidden border-t border-white/10">
            <div className="px-4 py-4 flex flex-col gap-3 text-sm">
              <a href="#tokenomics" onClick={()=>setOpen(false)} className="py-2">Tokenomics</a>
              <a href="#roadmap" onClick={()=>setOpen(false)} className="py-2">Roadmap</a>
              <a href="#how" onClick={()=>setOpen(false)} className="py-2">How to Buy</a>
              <a href="#whitepaper" onClick={()=>setOpen(false)} className="py-2">Whitepaper</a>
              <a href={TG} target="_blank" className="py-2">Telegram</a>
              <a href={X} target="_blank" className="py-2">X</a>
              <GradientButton href={PANCAKE} className="mt-2">Buy on PancakeSwap</GradientButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Hero(){
  return (
    <section id="top" className="pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <Aurora />
        <FloatingSteam />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:.6}}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/> Live on BSC • 0% Tax • 21,000,000 Fixed Supply
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Trader‑First. Scarce. <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-red-300 bg-clip-text text-transparent">Unstoppable.</span>
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl">
            $GROUK is a clean, transparent BEP‑20 token on Binance Smart Chain, built around discipline, community and the Monster Comeback vision.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <GradientButton href={PANCAKE}>Buy on PancakeSwap</GradientButton>
            <OutlineButton href={BSCSCAN}>View on BscScan</OutlineButton>
            <OutlineButton href={WHITEPAPER}>Whitepaper (PDF)</OutlineButton>
            <CopyCA />
          </div>
          <div className="mt-6 flex items-center gap-5 text-xs text-white/60">
            <span>CA copied with one click • LP lock + Renounced</span>
          </div>
        </motion.div>

        <motion.div initial={{scale:.9, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:.6, delay:.1}} className="relative">
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-amber-500/40 via-rose-500/40 to-red-500/40 blur-2xl"/>
            <div className="relative rounded-[28px] bg-white/5 border border-white/10 p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-4">
                <CoffeeLogo className="h-14 w-14" />
                <div>
                  <div className="text-2xl font-bold">GROUK</div>
                  <div className="text-white/70 text-sm">BEP‑20 • 21,000,000 Supply</div>
                </div>
              </div>
              <hr className="my-6 border-white/10"/>
              <ul className="grid grid-cols-2 gap-4 text-sm">
                <li className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-white/60">Tax</div>
                  <div className="text-lg font-semibold">0%</div>
                </li>
                <li className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-white/60">Decimals</div>
                  <div className="text-lg font-semibold">18</div>
                </li>
                <li className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-white/60">Chain</div>
                  <div className="text-lg font-semibold">BSC</div>
                </li>
                <li className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-white/60">Status</div>
                  <div className="text-lg font-semibold">Renounce → Planned</div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Ribbon(){
  const items = ["0% TAX", "FIXED SUPPLY", "LP LOCK", "RENOUNCED", "AUDITED BASE", "COMMUNITY FIRST"];
  return (
    <div className="overflow-hidden py-2 border-y border-white/10 bg-white/5">
      <div className="flex gap-8 animate-[marquee_22s_linear_infinite] whitespace-nowrap">
        {Array.from({length: 3}).map((_,k)=> (
          <div key={k} className="flex gap-8">
            {items.map((t,i)=> (
              <span key={i} className="tracking-wider text-sm text-white/80">• {t}</span>
            ))}
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

function PressStrip(){
  const tags = ["Featured Soon:", "DexTools", "CoinGecko", "CMC", "BNBChain", "PancakeSwap"];
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {tags.map((t,i)=> (
            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats(){
  const stats = [
    {label: "Total Supply", value: "21,000,000 GROUK"},
    {label: "Contract", value: shortAddress(CONTRACT)},
    {label: "Tax", value: "0%"},
    {label: "Chain", value: "BSC (BEP‑20)"},
  ];
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s,i)=> (
          <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <div className="text-white/60 text-sm">{s.label}</div>
            <div className="text-lg font-semibold mt-1">{s.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tokenomics(){
  const rows = [
    {name: "Liquidity Pool", value: "60%"},
    {name: "Community Incentives", value: "15%"},
    {name: "Marketing & Partnerships", value: "15%"},
    {name: "Team & Development", value: "10%"},
  ];
  return (
    <section id="tokenomics" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Economics" title="Tokenomics" subtitle="Simple, clean and transparent distribution"/>
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <table className="w-full text-sm">
              <tbody>
                {rows.map((r,i)=> (
                  <tr key={i} className="border-b border-white/10 last:border-0">
                    <td className="py-3 font-medium">{r.name}</td>
                    <td className="py-3 text-right">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className="mt-4 text-xs text-white/70 list-disc pl-5">
              <li>0% buy/sell tax</li>
              <li>Fixed supply: 21,000,000 GROUK</li>
              <li>Clean contract: no mint, no blacklist</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6">
            <h4 className="font-semibold">Contract Highlights</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>• OpenZeppelin v5 base, verified</li>
              <li>• Burnable by anyone</li>
              <li>• Events for rescue actions (transparency)</li>
              <li>• Ownership: to be renounced post-setup</li>
            </ul>
            <div className="mt-5 flex gap-3 flex-wrap">
              <CopyCA />
              <OutlineButton href={BSCSCAN}>View Contract</OutlineButton>
              <OutlineButton href={WHITEPAPER}>Whitepaper (PDF)</OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap(){
  const items = [
    {q: "Q3 2025", points: ["Deploy on BSC", "LP creation & lock", "Branding + Website + Socials", "Marketing kickoff"]},
    {q: "Q4 2025", points: ["Airdrops & rewards", "DexTools trending & listings", "Strategic partnerships"]},
    {q: "Q1 2026", points: ["Staking platform", "NFT drops (community)", "Cross‑chain feasibility"]},
    {q: "Q2 2026", points: ["Utilities expansion (DEX/Launchpad)", "Global community growth"]},
  ];
  return (
    <section id="roadmap" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Plan" title="Roadmap" subtitle="Clear milestones to execute with discipline"/>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {items.map((it, idx)=> (
            <motion.div key={idx} initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:.5, delay: idx*0.05}} className="rounded-3xl p-6 bg-white/5 border border-white/10">
              <div className="text-sm text-white/60">{it.q}</div>
              <div className="font-semibold text-lg mt-1">Milestones</div>
              <ul className="mt-3 text-sm text-white/80 space-y-2">
                {it.points.map((p,i)=> <li key={i}>• {p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proofs(){
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Trust" title="Proofs & Links" subtitle="Everything verifiable in one place"/>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="rounded-3xl p-6 bg-white/5 border border-white/10">
            <div className="text-sm text-white/60">Contract Address</div>
            <div className="mt-1 font-mono text-sm break-all">{CONTRACT}</div>
            <div className="mt-3 flex gap-3 flex-wrap">
              <OutlineButton href={BSCSCAN}>BscScan</OutlineButton>
              <OutlineButton href={PANCAKE}>Pancake Pair</OutlineButton>
              <OutlineButton href={WHITEPAPER}>Whitepaper</OutlineButton>
            </div>
          </div>
          <div className="rounded-3xl p-6 bg-white/5 border border-white/10">
            <div className="text-sm text-white/60">Liquidity Lock</div>
            <div className="mt-1 text-sm text-white/80 break-all">{LPLOCK}</div>
            <ul className="mt-3 text-xs text-white/70 list-disc pl-5">
              <li>Ownership: Renounce planned after allocations</li>
              <li>LP Lock link will be updated post‑launch</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowToBuy(){
  const steps = [
    {t:"Add BSC to MetaMask", d:"Select BNB Smart Chain network and fund with a bit of BNB for gas."},
    {t:"Import $GROUK", d:"Paste the contract address and add the token to your wallet."},
    {t:"Use PancakeSwap", d:"Open the GROUK pair, set slippage (0–1%), confirm swap."},
    {t:"Verify & Pin", d:"Verify CA on BscScan and pin official links from our socials."},
  ];
  return (
    <section id="how" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Guide" title="How to Buy" subtitle="Four quick steps to join the fam"/>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {steps.map((s,i)=> (
            <div key={i} className="rounded-3xl p-6 bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center font-semibold">{i+1}</div>
              <div className="mt-3 font-semibold">{s.t}</div>
              <div className="mt-1 text-sm text-white/80">{s.d}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <GradientButton href={PANCAKE}>Open PancakeSwap</GradientButton>
          <OutlineButton href={TG}>Join Telegram</OutlineButton>
          <OutlineButton href={X}>Follow on X</OutlineButton>
        </div>
      </div>
    </section>
  );
}

function WhitepaperSection(){
  return (
    <section id="whitepaper" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle kicker="Docs" title="Whitepaper" subtitle="Deep dive into GROUK’s vision and tokenomics"/>
        <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm">
          Our detailed whitepaper explains the project’s vision, tokenomics, security practices, and roadmap. Download it here:
        </p>
        <div className="mt-6 flex justify-center">
          <GradientButton href={WHITEPAPER}>Download Whitepaper (PDF)</GradientButton>
        </div>
      </div>
    </section>
  );
}

function FAQ(){
  const faqs = [
    {q:"Is there any tax?", a:"No. $GROUK is 0% buy/sell tax."},
    {q:"Will ownership be renounced?", a:"Yes. After LP lock and distributions, we will renounce ownership and share the tx."},
    {q:"Where is the contract verified?", a:"On BscScan, with OpenZeppelin v5 sources verified."},
    {q:"How can I trust liquidity?", a:"LP will be locked with a reputable locker, and the lock link will be posted publicly."},
  ];
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Help" title="FAQ" subtitle="Answers to the most common questions"/>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f,i)=> (
            <div key={i} className="rounded-3xl p-6 bg-white/5 border border-white/10">
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-white/80 text-sm">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="py-12 border-t border-white/10 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <CoffeeLogo className="h-8 w-8"/>
          <div className="text-sm text-white/70">© {new Date().getFullYear()} GROUK • Built for the Monster Comeback</div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:opacity-80" href={X} target="_blank">X</a>
          <a className="hover:opacity-80" href={TG} target="_blank">Telegram</a>
          <a className="hover:opacity-80" href="#tokenomics">Tokenomics</a>
        </div>
      </div>
    </footer>
  );
}

function GradientButton({href, children, className=""}:{href?: string; children: React.ReactNode; className?: string;}){
  const Comp: any = href ? "a" : "button";
  return <Comp href={href} target={href?"_blank":undefined} className={`inline-flex items-center justify-center px-5 py-3 rounded-2xl font-semibold shadow-lg shadow-rose-900/25 bg-gradient-to-r ${COLORS.primary} hover:opacity-95 transition ${className}`}>{children}</Comp>;
}
function OutlineButton({href, children, className=""}:{href?: string; children: React.ReactNode; className?: string;}){
  const Comp: any = href ? "a" : "button";
  return <Comp href={href} target={href?"_blank":undefined} className={`inline-flex items-center justify-center px-5 py-3 rounded-2xl font-semibold border border-white/20 bg-white/5 hover:bg-white/10 transition ${className}`}>{children}</Comp>;
}
function SectionTitle({kicker, title, subtitle}:{kicker: string; title: string; subtitle?: string;}){
  return (
    <div className="max-w-3xl">
      <div className="text-xs uppercase tracking-[0.2em] text-white/60">{kicker}</div>
      <h2 className="text-3xl sm:text-4xl font-bold mt-1">{title}</h2>
      {subtitle && <p className="text-white/70 mt-2">{subtitle}</p>}
    </div>
  );
}
function CopyCA(){
  const [copied, setCopied] = useState(false);
  const ca = CONTRACT;
  return (
    <button
      onClick={async ()=>{try{await navigator.clipboard.writeText(ca); setCopied(true); setTimeout(()=>setCopied(false), 1500);}catch(e){}}}
      className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-200 font-semibold"
      aria-label="Copy Contract Address"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 9h10v10H9z" stroke="currentColor" strokeWidth="2"/><path d="M5 5h10v10" stroke="currentColor" strokeWidth="2"/></svg>
      {copied? "Copied!" : "Copy CA"}
    </button>
  );
}
function CoffeeLogo({className=""}:{className?: string;}){
  return (
    <svg className={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F2C94C"/>
          <stop offset="50%" stopColor="#F2994A"/>
          <stop offset="100%" stopColor="#EB5757"/>
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#g)" opacity=".15"/>
      <path d="M20 38c0-6 6-10 12-10s12 4 12 10-6 10-12 10-12-4-12-10Z" fill="#6B3E2E"/>
      <rect x="36" y="28" width="8" height="6" rx="2" fill="#6B3E2E"/>
      <path d="M28 18c2-2 2-4 0-6M34 16c2-2 2-4 0-6" stroke="#fff" strokeOpacity=".8" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function Aurora(){
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-amber-500/10 via-rose-500/10 to-red-500/10 rounded-full blur-3xl"/>
    </div>
  );
}
function FloatingSteam(){
  return (
    <svg className="absolute -top-8 right-10 w-64 h-64 opacity-25" viewBox="0 0 200 200" fill="none">
      <path d="M60 160c40-30-40-40 0-80 40-40-40-50 0-90" stroke="white" strokeOpacity=".7" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="d" dur="6s" repeatCount="indefinite" values="M60 160c40-30-40-40 0-80 40-40-40-50 0-90; M60 160c50-35-50-45 5-85 45-40-30-60 10-90; M60 160c40-30-40-40 0-80 40-40-40-50 0-90"/>
      </path>
    </svg>
  );
}
function NoiseLayer(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] mix-blend-soft-light" style={{backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.6\"/></svg>')"}}/>
  );
}
function shortAddress(a?: string){
  if(!a || a.length < 12) return a || "";
  return a.slice(0,6)+"…"+a.slice(-4);
}
