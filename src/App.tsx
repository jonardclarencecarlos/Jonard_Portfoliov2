import { useEffect, useState, type ReactNode } from 'react'
import { toolIcons } from './toolIcons'
import heroHolo from './assets/hero-holo.jpg'
import profilePic from './assets/profile.jpg'
import citrackerImg from './assets/projects/citracker.jpg'
import inventoryImg from './assets/projects/inventory.jpg'
import sleepImg from './assets/projects/shallow-sleep.jpg'
import vest1 from './assets/projects/vest-1.jpg'
import vest2 from './assets/projects/vest-2.jpg'
import vest3 from './assets/projects/vest-3.jpg'
import vest4 from './assets/projects/vest-4.jpg'

const I = ({ d, className = 'w-5 h-5', fill = false }: { d: ReactNode; className?: string; fill?: boolean }) => (
  <svg viewBox="0 0 24 24" className={className} fill={fill ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
)
const ic = {
  bank: <path d="M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  cal: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M8 3v4M16 3v4" /></>,
  dl: <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />,
  send: <path d="M21 3L10 14M21 3l-7 18-4-7-7-4z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  pin: <><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></>,
  ext: <path d="M14 4h6v6M20 4l-9 9M18 14v5H5V6h5" />,
  up: <path d="M12 20V5M6 11l6-6 6 6" />,
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 5l-4 14" />,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.600 5.600l2.100 2.100M16.300 16.300l2.100 2.100M18.400 5.600l-2.100 2.100M7.700 16.300l-2.100 2.100" /></>,
  cap: <path d="M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5" />,
  db: <><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.700 3.600 3 8 3s8-1.300 8-3V6M4 12c0 1.700 3.600 3 8 3s8-1.300 8-3" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.500 3-6 6-6s6 2.500 6 6M16 5a3 3 0 010 6M18 14c2 .7 3 2.700 3 5" /></>,
  trophy: <path d="M7 4h10v5a5 5 0 01-10 0zM7 6H4v1a3 3 0 003 3M17 6h3v1a3 3 0 01-3 3M12 14v4M8 21h8M10 18h4" />,
  search: <><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.500-4.500" /></>,
  moon: <path d="M20 14.500A8 8 0 019.500 4 8 8 0 1020 14.500z" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.500 1.500M17.500 17.500L19 19M19 5l-1.500 1.500M6.500 17.500L5 19" /></>,
  folder: <path d="M3 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z" />,
  quote: <path d="M7 7c-2 1-3 3-3 6v4h5v-5H6.500C6.500 10 7.500 9 9 8.500zM17 7c-2 1-3 3-3 6v4h5v-5h-2.500c0-2 1-3 2.500-3.500z" />,
  rocket: <><path d="M5 19c0-3 1-4 3-4l1 1c0 2-1 3-4 3zM9 15l-1-1c1-5 5-9 12-10-1 7-5 11-10 11z" /><circle cx="15" cy="9" r="1.200" /></>,
  layers: <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" />,
  test: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 12l3 3 5-6" /></>,
  bulb: <><path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.500c.700.700 1 1.500 1 2.500h6c0-1 .300-1.800 1-2.500A6 6 0 0012 3z" /></>,
  phone: <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></>,
  brief: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" /></>,
  phone2: <path d="M5 4h4l2 5-2.500 1.500a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  medal: <><circle cx="12" cy="9" r="5" /><path d="M9 13l-2 8 5-3 5 3-2-8" /></>,
}
const gh = <path d="M12 2a10 10 0 00-3.200 19.500c.500.100.700-.200.700-.500v-1.800c-2.800.600-3.400-1.200-3.400-1.200-.500-1.200-1.100-1.500-1.100-1.500-.900-.600.100-.600.100-.600 1 .100 1.500 1 1.500 1 .900 1.500 2.300 1.100 2.900.800.100-.700.400-1.100.600-1.400-2.200-.300-4.600-1.100-4.600-5 0-1.100.400-2 1-2.700-.100-.300-.400-1.300.100-2.700 0 0 .800-.300 2.800 1a9.500 9.500 0 015 0c1.900-1.300 2.800-1 2.800-1 .500 1.400.200 2.400.100 2.700.600.700 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .400.300.700.900.700 1.800v2.700c0 .300.200.600.700.500A10 10 0 0012 2z" />
const li = <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm3 6v9h2.500V9zm1.200-3.500a1.400 1.400 0 100 2.800 1.400 1.400 0 000-2.800zM11 9v9h2.500v-4.600c0-1.300 1.800-1.400 1.800 0V18H18v-5c0-3-3.200-2.900-4.500-1.500V9z" />

const EMAIL = 'jonardclarencecarlos@gmail.com'
const GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent('OJT Inquiry')}`
const GH = 'https://github.com/jonardclarencecarlos'
const LINKEDIN = 'https://www.linkedin.com/in/jonard-clarence-carlos-a04506369/'
const nav = ['Home', 'About', 'Skills', 'Projects', 'Certifications']

const skillTabs: Record<string, [string, 'Primary' | 'Growing', string][]> = {
  'Front-End & Core Web': [['HTML5', 'Primary', '#e44d26'], ['CSS3', 'Primary', '#2965f1'], ['JavaScript', 'Growing', '#f7df1e'], ['PHP', 'Growing', '#777bb3'], ['MySQL', 'Growing', '#00758f'], ['Responsive Web Design', 'Primary', '#5eead4'], ['React', 'Primary', '#61dafb'], ['SQL', 'Growing', '#f29111'], ['PostgreSQL', 'Growing', '#336791'], ['Supabase', 'Growing', '#3ecf8e'], ['Python', 'Growing', '#3776ab'], ['Android', 'Growing', '#3ddc84']],
  'Tools & Platforms': [['Git & GitHub', 'Primary', '#f1502f'], ['VS Code', 'Primary', '#007acc'], ['XAMPP', 'Growing', '#fb7a24'], ['ChatGPT / Claude', 'Primary', '#10a37f'], ['Cursor', 'Growing', '#94a3b8'], ['GitHub Copilot', 'Growing', '#a78bfa']],
  'Design & Digital Media': [['Figma', 'Primary', '#a259ff'], ['UI Design', 'Primary', '#5eead4'], ['Wireframing', 'Growing', '#2dd4bf'], ['Layout Prototyping', 'Growing', '#34d399'], ['Asset Optimization', 'Growing', '#fbbf24'], ['Vector Icons', 'Growing', '#f472b6']],
  'Industrial & Technical': [['Computer Hardware', 'Primary', '#5eead4'], ['Networking', 'Growing', '#2dd4bf'], ['Troubleshooting', 'Primary', '#34d399'], ['Technical Interface Design', 'Growing', '#a78bfa'], ['System Configuration', 'Growing', '#fbbf24']],
}
const tools: [string, keyof typeof toolIcons][] = [['VS Code', 'VSCode'], ['GitHub', 'Github'], ['Figma', 'Figma'], ['XAMPP', 'Xampp'], ['MySQL', 'Mysql'], ['ChatGPT', 'ChatGPT'], ['GitHub Copilot', 'Githubcopilot'], ['React', 'React'], ['Supabase', 'Supabase'], ['PostgreSQL', 'Postgresql'], ['Python', 'Python'], ['Android', 'Android']]
const edu = [
  ['2023 – Present', 'Bulacan State University', 'Bachelor of Industrial Technology (Ongoing)', 'College of Industrial Technology · Malolos, Philippines', 'Present'],
  ['2021 – 2023', 'Malolos Marine Fishery School and Laboratory', 'Senior High School · GAS Strand', 'Balite, City of Malolos', 'Graduated'],
  ['2017 – 2020', 'City of Malolos Integrated School – Sto. Rosario', 'Secondary', 'Sto. Rosario, Malolos, Bulacan', 'Graduated'],
  ['2011 – 2016', 'Panasahan Elementary School', 'Primary', 'Panasahan, Malolos, Bulacan', 'Graduated'],
]
const work = [
  {
    role: 'Production Worker and Quality Control Assistant',
    place: 'AP Global',
    period: 'May 2025 – February 2026',
    points: ['Assisted in the production and assembly of bags intended for international shipment', 'Inspected finished products for defects, including incorrect stitching, damaged materials, and manufacturing inconsistencies', "Helped ensure that completed products met the company's quality standards before packing", 'Sorted, packed, labeled, and prepared finished bags for overseas shipment', 'Reported and separated defective products for correction or further inspection', 'Maintained an organized and safe work area while supporting daily production targets'],
  },
  {
    role: 'Accounting Assistant (Work Immersion)',
    place: "Malolos City Hall – Mayor's Office, Malolos, Bulacan",
    period: 'October 2022 – March 2023',
    points: ['Assisted in handling financial documents, checks, and budget reports', 'Managed filing systems and organized accounting records', 'Helped prepare and monitor basic budgeting and office expenses', 'Provided administrative support to the finance and accounting staff'],
  },
]
const certs = [
  ['Introduction to SQL', 'Sololearn', 'Aug 2025', 'Certificate CC-MLNO3Y7I', '/certificates/intro-sql.jpg'],
  ['SQL Basics', 'LearnSQL.com', 'Nov 2025', 'Certificate CE51A8/11/2025', '/certificates/sql-basics.jpg'],
  ['SQL Intermediate', 'Sololearn', 'Oct 2025', 'Certificate CC-V41ULBYC', '/certificates/sql-intermediate.jpg'],
  ['Introduction to C++', 'Sololearn', 'Mar 2025', 'Certificate CC-GRHGKFJL', '/certificates/intro-cpp.jpg'],
]
type Project = { title: string; tagline: string; desc: string; features: string[]; tech: string[]; contributions?: string[]; images: string[]; cover?: string; fit?: 'cover' | 'contain'; rows?: number; category: 'Web' | 'Hardware' | 'Creative'; demo: string; code: string }
// Add new projects here — each one becomes a slide in the Featured Projects carousel.
const projects: Project[] = [
  { title: 'CiTracker', tagline: 'Role: Front-End Developer and Mobile Application Contributor (Thesis)', desc: 'CiTracker is an integrated classroom attendance and student performance management system designed to streamline attendance monitoring, grading, assessments, and academic performance tracking. The system uses NFC technology to validate student attendance and provides web and mobile access for professors and students. Its centralized dashboards allow users to manage classroom records, review academic progress, and access relevant information through a responsive and user-friendly interface.', features: ['NFC-based attendance validation', 'Professor and student dashboards', 'Grade and assessment management', 'Academic performance tracking', 'Responsive web and mobile access', 'Centralized classroom records'], contributions: ['Developed responsive user interfaces using React', 'Designed dedicated dashboards for professors and students', 'Implemented attendance, grading, assessment, and performance-tracking screens', 'Integrated front-end components with Supabase services', 'Contributed to Android application development for NFC-based attendance validation', 'Participated in debugging, functional testing, and user-interface improvements'], tech: ['React', 'JavaScript', 'Supabase', 'Android', 'NFC', 'HTML', 'CSS'], images: [citrackerImg], category: 'Web', demo: '', code: '' },
  { title: 'CIT Laboratory Inventory System', tagline: 'Role: Lead Environment, Character Design Developer and Narrative Designer', desc: 'Designed to support the growing inventory-management needs of the College of Industrial Technology. It provides a centralized platform for monitoring laboratory equipment, tracking maintenance needs, managing room inventories, and assigning access based on user roles.', features: ['Monitors laboratory equipment and technology resources across different rooms', 'Identifies equipment that requires maintenance, repair, or replacement', 'Role-based access for professors, students, and laboratory technicians', 'Centralized inventory record for every laboratory room', 'Records equipment details, availability, condition, and assigned location', 'Helps laboratory personnel manage resources more efficiently'], tech: ['Figma'], images: [inventoryImg], category: 'Web', demo: '', code: '' },
  { title: 'Shallow Sleep', tagline: 'Role: Lead Gameplay Programmer and Narrative Designer', desc: '2D narrative visual novel developed using Python and the Pygame library. It combines character-driven storytelling, interactive dialogue, and gameplay mechanics, with chapter-based progression, custom pixel-art environments, player interactions, and narrative choices that guide the story.', features: ['Chapter-based progression', 'Custom pixel-art environments', 'Interactive dialogue and narrative choices', 'Core gameplay functionality and narrative structure'], tech: ['Python', 'Pygame', 'LibreSprite', 'Visual Studio Code'], images: [sleepImg], fit: 'cover', category: 'Creative', demo: '', code: '' },
  { title: 'Posture Correction Vest', tagline: 'Wearable embedded-system project', desc: 'A wearable technology project designed to address posture-related concerns through embedded system integration. The vest monitors posture and assists users in maintaining proper body alignment, providing a practical solution for posture correction and ergonomic awareness.', features: ['Lead embedded system development', 'Assisted on 3D models and design prototypes', 'Assembly and testing', 'Troubleshooting and refinement', 'Problem addressed: poor posture habits and posture-related physical strain'], tech: ['Thonny', 'Embedded Systems', 'AutoCAD', 'Ultimaker', '3D Modeling'], images: [vest1, vest2, vest3, vest4], cover: vest4, rows: 3, category: 'Hardware', demo: '', code: '' },
]

const Chip = ({ children }: { children: ReactNode }) => <span className="px-2.5 py-1 rounded border border-teal-500/40 bg-slate-900/80 text-[11px] text-slate-100">{children}</span>
const Title = ({ icon, title, sub, dark }: { icon: ReactNode; title: string; sub: string; dark?: boolean }) => (
  <div className="flex items-start gap-3 mb-5">
    <I d={icon} className="w-7 h-7 text-teal-400 dark:text-teal-400 shrink-0 mt-0.5" />
    <div><h2 className={`text-xl font-bold ${dark ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{title}</h2><p className={`text-xs mt-0.5 ${dark ? 'text-slate-400' : 'text-slate-400'}`}>{sub}</p></div>
  </div>
)

function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const tile = 'w-full h-full object-cover border border-teal-400/30 bg-white'
  if (images.length === 1) return <div className="min-h-[260px]"><img src={images[0]} alt={alt} className="w-full h-full min-h-[260px] object-contain border border-teal-400/30 bg-[#041e21]" /></div>
  return (
    <div className="grid grid-cols-2 gap-2">
      {images.map((src, i) => <img key={src} src={src} alt={`${alt} ${i + 1}`} className={`${tile} aspect-[4/3]`} />)}
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState('Home')
  const [tab, setTab] = useState(Object.keys(skillTabs)[0])
  const [copied, setCopied] = useState(false)
  const [filter, setFilter] = useState<'All' | Project['category']>('All')
  const [open, setOpen] = useState<number | null>(null)
  const cats = ['All', 'Web', 'Hardware', 'Creative'] as const
  const shown = projects.map((p, i) => ({ p, i })).filter(({ p }) => filter === 'All' || p.category === filter)
  const pr = open !== null ? projects[open] : null
  useEffect(() => {
    if (open === null) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const ob = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.getAttribute('data-nav')!)), { rootMargin: '-40% 0px -55% 0px' })
    document.querySelectorAll('[data-nav]').forEach((n) => ob.observe(n))
    return () => ob.disconnect()
  }, [])

  const panel = 'rounded-xl bg-[#07272a] border border-teal-900/60 shadow-sm'
  const darkPanel = 'rounded-xl bg-[#07272a] border border-teal-900/70'
  const btnP = 'flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm transition'
  const btnO = 'flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-500 hover:border-teal-400 hover:bg-white/5 text-white font-semibold text-sm transition'

  return (
    <div>
      <div className="bg-[#03181a] dark:bg-slate-950 text-slate-800 dark:text-slate-200 min-h-screen">
        <header className="sticky top-0 z-30 h-16 bg-[#03181a]/95 backdrop-blur flex items-center justify-between px-5 lg:px-12 text-white">
          <a href="#home" className="flex items-center gap-3"><span className="hidden sm:block text-sm font-semibold">Jonard Clarence P. Carlos</span></a>
          <nav className="hidden lg:flex gap-7 text-xs font-medium">
            {nav.map((n) => <a key={n} href={'#' + n.toLowerCase()} className={`py-6 border-b-2 transition ${active === n ? 'text-teal-400 border-teal-400' : 'border-transparent hover:text-teal-300'}`}>{n}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="px-5 py-2 rounded-full bg-teal-500 hover:bg-teal-400 text-sm font-semibold transition">Let's Connect</a>
          </div>
        </header>

        {/* Hero */}
        <section id="home" data-nav="Home" className="relative overflow-hidden flex items-end min-h-[max(640px,min(56.25vw,880px))] bg-gradient-to-br from-[#0a3b3e] via-[#051f21] to-[#020f11] text-white">
          <><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroHolo})` }} /><div className="absolute inset-0 bg-gradient-to-r from-[#020f11]/80 via-[#020f11]/20 to-transparent" /><div className="tv-bar pointer-events-none absolute inset-x-0 top-0 h-28" /><div className="tv-flicker pointer-events-none absolute inset-0" /></>
          <div className="relative w-full px-5 lg:px-10 pt-16 pb-5 bg-gradient-to-t from-[#020f11]/90 via-[#020f11]/60 to-transparent grid lg:grid-cols-[120px_minmax(0,440px)_minmax(0,1fr)_auto] gap-4 items-stretch">
            {/* Profile holder */}
            <div className="relative w-full max-w-[120px] mx-auto lg:mx-0 min-h-[150px]">
              <div className="absolute -inset-1 bg-teal-400/30 blur-lg" />
              <div className="relative h-full overflow-hidden border border-teal-400/60 bg-[#0a3b3e] shadow-[0_0_30px_rgba(45,212,191,0.3)]">
                <img src={profilePic} alt="Jonard Clarence P. Carlos" className="absolute inset-0 w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020f11]/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 top-0 h-px bg-teal-300 shadow-[0_0_12px_#2dd4bf]" />
              </div>
            </div>

            {/* Name plate */}
            <div className="self-start">
              <div className="bg-white text-[#04201f] px-5 py-3 shadow-xl" style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 0 100%)' }}>
                <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-none whitespace-nowrap">Jonard Clarence P. Carlos</h1>
                <p className="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wide">CIT Student | Future IT Professional</p>
              </div>
              <div className="bg-gradient-to-r from-orange-600 to-amber-500 px-5 py-1.5 w-[94%] border-l-4 border-amber-200" style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 0 100%)' }}>
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wide">Junior Front-End Web Developer Intern</p>
              </div>
              <p className="mt-2 text-[11px] italic text-teal-100/90 border-l-2 border-teal-400 pl-2">“Better Systems for a Brighter Tomorrow.”</p>
            </div>

            {/* Info */}
            <div className="self-start">
              <div className="grid sm:grid-cols-2 gap-2">
                {[[ic.cap, 'College of Industrial Technology', 'Bulacan State University'], [ic.clock, '500 Hours', 'OJT Required'], [ic.cal, 'Available Starting', '2nd Semester, A.Y. 2026 – 2027'], [ic.pin, 'Malolos, Bulacan', '(Open for Hybrid / Remote)']].map(([i, a, b], k) => (
                  <div key={k} className="flex gap-2.5 items-center rounded-lg bg-[#0b3b3d]/60 border border-teal-400/30 p-2">
                    <div className="w-9 h-9 shrink-0 rounded-md bg-teal-600/40 border border-teal-300/30 grid place-items-center text-white"><I d={i as ReactNode} className="w-5 h-5" /></div>
                    <div className="min-w-0"><div className="text-[11px] font-semibold leading-tight">{a as string}</div><div className="text-[10px] text-teal-200/80">{b as string}</div></div>
                  </div>
                ))}
              </div>
              <div className="mt-2 h-1 w-full rounded-full bg-white/10 overflow-hidden" title="486 of 500 OJT hours"><div className="h-full bg-teal-400" style={{ width: '97.2%' }} /></div>
            </div>

            {/* Actions */}
            <div className="flex lg:flex-col gap-2.5 flex-wrap lg:items-stretch self-start">
              <a href="/cv/Jonard_Clarence_Carlos_CV.pdf" download="Jonard_Clarence_Carlos_CV.pdf" className={btnP}><I d={ic.dl} className="w-4 h-4" />Download CV / Resume</a>
              <a href={GMAIL} target="_blank" rel="noreferrer" className={btnO}><I d={ic.send} className="w-4 h-4" />Contact / Inquire</a>
              <div className="flex gap-5 justify-center text-teal-300">
                <a href={GH} target="_blank" rel="noreferrer" aria-label="GitHub"><I d={gh} className="w-6 h-6" fill /></a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><I d={li} className="w-6 h-6 text-teal-400" fill /></a>
                <a href={GMAIL} target="_blank" rel="noreferrer" aria-label="Email"><I d={ic.mail} className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
        </section>

        {/* Separate page sections */}
        <div className="bg-[#03181a]">
          <div className="max-w-6xl mx-auto px-5 lg:px-12 py-12">
<section id="about" data-nav="About" className="grid gap-8 items-start">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-teal-700 dark:text-teal-400"><span className="w-4 h-px bg-current" />About Me</div>
                <h2 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white">Driven by Curiosity,<br />Built on Purpose.</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">CIT student and aspiring front-end web developer with experience in responsive interface design, classroom management systems, database integration, and interactive applications. I have a strong interest in computer hardware, embedded systems, device assembly, troubleshooting, and hardware-software integration. I am seeking an OJT opportunity where I can apply my technical and creative skills while gaining practical industry experience.</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs"><span className="px-3 py-1 rounded-full bg-teal-400/15 text-teal-200">Nickname: Jc</span><span className="px-3 py-1 rounded-full bg-teal-400/15 text-teal-200">Nationality: Filipino</span></div>
              </div>
            </section>
          </div>
        </div>

        <div className="bg-[#041e21]">
          <div className="max-w-6xl mx-auto px-5 lg:px-12 py-12">
<section id="education" className={`${panel} p-6`}>
              <Title icon={ic.cap} title="Education Journey" sub="" />
              <ol className="relative border-l-2 border-teal-500 ml-2 space-y-6">
                {edu.map(([y, s, d, c, b]) => (
                  <li key={y} className="pl-6 relative flex justify-between gap-3 items-start">
                    <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white dark:bg-[#041e21] border-[3px] border-teal-500" />
                    <div className="flex gap-3"><I d={ic.cap} className="w-7 h-7 text-slate-800 dark:text-slate-200 shrink-0" /><div><div className="text-xs text-slate-400">{y}</div><div className="font-bold text-sm">{s}</div>{d && <div className="text-xs text-slate-600 dark:text-slate-400">{d}</div>}{c && <div className="text-xs text-slate-400">{c}</div>}</div></div>
                    <span className={`text-xs px-3 py-1 rounded ${b === 'Present' ? 'bg-teal-400/15 text-teal-200' : 'bg-slate-100 text-slate-600 dark:bg-[#0b3b3d] dark:text-slate-300'}`}>{b}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 italic text-slate-400 text-sm">Bulacan State University · “A strong foundation today, a greater tomorrow.”</p>
            </section>
          </div>
        </div>

        <div className="bg-[#03181a]">
          <div className="max-w-6xl mx-auto px-5 lg:px-12 py-12">
<section id="work" className={`${panel} p-6`}>
              <Title icon={ic.brief} title="Work History" sub="Work and work immersion experience." />
              <div className="space-y-6">
                {work.map((w) => (
                  <div key={w.role} className="border-l-2 border-teal-500 pl-5">
                    <div className="flex justify-between gap-3 items-start flex-wrap">
                      <div>
                        <h3 className="font-bold text-sm">{w.role}</h3>
                        <p className="text-xs text-slate-400 mt-0.5">{w.place}</p>
                      </div>
                      <span className="text-xs px-3 py-1 rounded bg-teal-400/15 text-teal-200 whitespace-nowrap">{w.period}</span>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      {w.points.map((t) => <li key={t} className="flex gap-2.5 items-start"><I d={ic.check} className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />{t}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="bg-[#052225]">
          <div className="max-w-6xl mx-auto px-5 lg:px-12 py-12">
<section id="skills" data-nav="Skills">
              <Title icon={ic.cap} title="Technical Skills" sub="Primary skills are what I use most; growing skills are what I am actively learning." />
              <div className="flex flex-wrap gap-1 text-xs font-medium">
                {Object.keys(skillTabs).map((t) => (
                  <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-t-md transition ${tab === t ? 'bg-teal-700 text-white' : 'bg-[#0b3b3d] text-teal-200 hover:bg-[#0f4a4c]'}`}>{t}</button>
                ))}
              </div>
              <div className={`${panel} rounded-tl-none p-5 space-y-3.5`}>
                {skillTabs[tab].map(([n, v, c]) => (
                  <div key={n} className="flex items-center justify-between gap-3 text-sm border-b border-teal-900/50 last:border-0 pb-3 last:pb-0">
                    <span className="flex items-center gap-3 font-semibold"><span className="w-3 h-3 rounded-sm" style={{ background: c }} />{n}</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${v === 'Primary' ? 'bg-orange-500/15 text-orange-300 border-orange-400/40' : 'bg-teal-400/10 text-teal-200 border-teal-400/30'}`}>{v}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="bg-[#041e21]">
          <div className="max-w-6xl mx-auto px-5 lg:px-12 py-12">
<section>
              <Title icon={ic.gear} title="Tools I've Used Throughout the Years" sub="Tools and platforms I've worked with while learning, building, and designing." />
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                {tools.map(([n, key]) => {
                  const ic2 = toolIcons[key]
                  return (
                    <div key={n} className={`${panel} py-3 flex flex-col items-center gap-2 hover:-translate-y-1 transition`}>
                      <div className="w-11 h-11 rounded-lg bg-white/5 border border-teal-400/20 grid place-items-center">
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill={ic2.color} aria-hidden="true"><path d={ic2.path} /></svg>
                      </div>
                      <span className="text-[10px] text-center leading-tight">{n}</span>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        </div>

        <div className="bg-[#03181a]">
          <div className="max-w-6xl mx-auto px-5 lg:px-12 py-12">
<section id="certifications" data-nav="Certifications">
              <Title icon={ic.medal} title="Certifications" sub="Relevant certifications and online courses." />
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {certs.map(([n, o, y, id, f]) => (
                  <a key={n} href={f} target="_blank" rel="noreferrer" className={`${panel} overflow-hidden hover:-translate-y-1 hover:border-teal-400/70 transition block group`}>
                    <div className="aspect-[4/3] overflow-hidden bg-white"><img src={f} alt={`${n} certificate`} loading="lazy" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" /></div>
                    <div className="p-3">
                      <div className="text-xs font-bold leading-tight">{n}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{o} · {y}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{id}</div>
                      <div className="text-[10px] text-teal-400 font-semibold mt-2 flex items-center gap-1">View certificate <I d={ic.ext} className="w-3 h-3" /></div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Projects */}
        <div id="projects" data-nav="Projects" className="bg-[#03181a] text-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-12 py-14">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="font-extrabold uppercase tracking-tighter leading-[0.85] text-6xl sm:text-8xl lg:text-[9.5rem] text-white">Projects</h2>
              <p className="max-w-xs text-sm text-slate-400 pb-3">Academic and self-directed products built where design, technology, and utility meet.</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-[11px] uppercase tracking-wider">
              {cats.map((c) => {
                const n = c === 'All' ? projects.length : projects.filter((p) => p.category === c).length
                return (
                  <button key={c} onClick={() => setFilter(c)} className={`px-4 py-1.5 rounded-full border transition ${filter === c ? 'bg-orange-600 border-orange-600 text-white' : 'border-teal-400/30 text-slate-300 hover:border-teal-300'}`}>
                    {c} <span className="opacity-60 ml-1">{n}</span>
                  </button>
                )
              })}
            </div>

            {/* Bento layout */}
            <div className="mt-8 md:grid md:grid-cols-12 md:auto-rows-[120px] gap-2 flex flex-col p-2 bg-black border border-teal-400/20">
              {shown.map(({ p, i }, k) => {
                const n = shown.length
                const rowSpans = ['md:row-span-1', 'md:row-span-2', 'md:row-span-3']
                const side = shown.slice(1).reduce((t, x) => t + (x.p.rows ?? 2), 0) + 1
                const leftRows = ['', 'md:row-span-1', 'md:row-span-2', 'md:row-span-3', 'md:row-span-4', 'md:row-span-5', 'md:row-span-6', 'md:row-span-7', 'md:row-span-8', 'md:row-span-9'][Math.min(side, 9)]
                const span = n === 1 ? 'md:col-span-12 md:row-span-5' : n === 2 ? 'md:col-span-6 md:row-span-5' : k === 0 ? `md:col-span-7 ${leftRows}` : `md:col-span-5 ${rowSpans[(p.rows ?? 2) - 1]}`
                return (
                  <button key={p.title} onClick={() => setOpen(i)} className={`group relative text-left overflow-hidden rounded-md border border-teal-400/25 bg-[#041e21] min-h-[280px] md:min-h-0 ${span}`}>
                    {p.fit === 'cover' ? (
                      <img src={p.images[0]} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                    ) : (
                      <>
                        <img src={p.cover ?? p.images[0]} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40" />
                        <div className="absolute inset-0 flex items-center justify-center px-3 pt-12 pb-20">
                          <img src={p.cover ?? p.images[0]} alt={p.title} className="max-w-full max-h-full object-contain rounded shadow-2xl transition duration-700 group-hover:scale-[1.03]" />
                        </div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <span className="absolute left-3 top-3 w-9 h-9 rounded-full border border-white/70 bg-black/40 backdrop-blur grid place-items-center text-[11px] font-semibold">{String(i + 1).padStart(2, '0')}</span>
                    <span className="absolute right-3 top-3 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-600">{p.category}</span>
                    <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className={`font-black uppercase leading-[0.95] tracking-tight ${k === 0 || n < 3 ? 'text-2xl sm:text-4xl' : 'text-lg sm:text-xl'}`}>{p.title}</h3>
                        <p className="mt-1.5 text-[11px] text-teal-300 line-clamp-1">{p.tagline.replace(/^Role: /, '')}</p>
                      </div>
                      <span className="shrink-0 w-9 h-9 rounded-full border border-white/50 grid place-items-center group-hover:bg-orange-600 group-hover:border-orange-600 transition"><I d={ic.ext} className="w-4 h-4" /></span>
                    </div>
                  </button>
                )
              })}

              {shown.length >= 3 && (
                <div className="md:col-span-5 md:row-span-1 rounded-md bg-orange-600 text-[#03181a] p-4 flex items-center justify-between min-h-[110px] md:min-h-0">
                  <div className="text-5xl font-black leading-none">{String(projects.length).padStart(2, '0')}</div>
                  <div className="text-right text-xs font-bold uppercase tracking-wide leading-tight">Selected<br />Projects<br />→</div>
                </div>
              )}

              <div className="md:col-span-7 md:row-span-1 rounded-md bg-teal-400 text-[#03181a] p-4 flex items-center justify-between gap-4 min-h-[110px] md:min-h-0">
                <p className="text-sm sm:text-base font-extrabold uppercase leading-tight">Design · Build<br />Test · Improve</p>
                <p className="hidden sm:block text-xs max-w-[14rem] text-right font-medium">Academic and self-directed products built where design, technology, and utility meet.</p>
              </div>

              <div className="md:col-span-5 md:row-span-1 rounded-md border border-teal-400/25 bg-[#041e21] p-4 flex flex-wrap content-center gap-1.5 min-h-[110px] md:min-h-0">
                {Array.from(new Set(projects.flatMap((p) => p.tech))).slice(0, 8).map((t) => <Chip key={t}>{t}</Chip>)}
              </div>
            </div>
          </div>
        </div>

        {pr && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto p-3 sm:p-8" onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-label={pr.title}>
            <div className="max-w-6xl mx-auto bg-[#03181a] border border-teal-400/30 p-4 sm:p-6 animate-[fadein_.3s_ease]" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-teal-200">
                <span><span className="text-orange-400">{String((open ?? 0) + 1).padStart(2, '0')}</span> / {String(projects.length).padStart(2, '0')} · {pr.category}</span>
                <button onClick={() => setOpen(null)} aria-label="Close" className="w-9 h-9 rounded-full border border-teal-400/40 grid place-items-center hover:bg-orange-600 hover:border-orange-600 transition"><I d={<path d="M6 6l12 12M18 6L6 18" />} className="w-4 h-4" /></button>
              </div>
              <div className="mt-2 h-px bg-teal-400/40" />
              <h3 className="mt-4 font-bold uppercase leading-[0.95] tracking-tight text-3xl sm:text-5xl text-white">{pr.title}</h3>
              <p className="mt-2 text-sm text-teal-300">{pr.tagline}</p>
              <div className="mt-5 grid lg:grid-cols-[1.15fr_1fr] gap-2">
                <Gallery images={pr.images} alt={pr.title} />
                <div className="grid gap-2 content-start">
                  <div className="border border-teal-400/30 bg-[#041e21] p-4">
                    <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-orange-400 ">Overview</h4>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{pr.desc}</p>
                  </div>
                  {pr.contributions && (
                    <div className="border border-teal-400/30 bg-[#041e21] p-4">
                      <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-orange-400">My Key Contributions</h4>
                      <ul className="mt-2 space-y-1.5 text-xs">{pr.contributions.map((f) => <li key={f} className="flex gap-2 items-start"><I d={ic.check} className="w-4 h-4 text-teal-400 shrink-0" />{f}</li>)}</ul>
                    </div>
                  )}
                  <div className="border border-teal-400/30 bg-[#041e21] p-4">
                    <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-orange-400 ">Key Features</h4>
                    <ul className="mt-2 space-y-1.5 text-xs">{pr.features.map((f) => <li key={f} className="flex gap-2 items-start"><I d={ic.check} className="w-4 h-4 text-teal-400 shrink-0" />{f}</li>)}</ul>
                  </div>
                  <div className="border border-teal-400/30 bg-[#041e21] p-4">
                    <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-orange-400 ">Technologies Used</h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">{pr.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
                  </div>
                  {(pr.demo || pr.code) && (
                    <div className="grid grid-cols-2 gap-2">
                      {pr.demo && <a href={pr.demo} className={btnP}><I d={ic.ext} className="w-4 h-4" />Live Demo</a>}
                      {pr.code && <a href={pr.code} className={btnO}><I d={gh} className="w-4 h-4" fill />Source Code</a>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <section id="contact" data-nav="Contact" className="bg-[#020f11] px-3 sm:px-5 pb-3 sm:pb-5 pt-10">
          <div className="max-w-7xl mx-auto rounded-[28px] bg-gradient-to-br from-[#0a3b3e] via-[#07272a] to-[#041e21] border border-teal-400/30 text-white overflow-hidden shadow-[0_0_40px_rgba(45,212,191,0.12)]">
            <div className="px-6 sm:px-10 lg:px-14 pt-10 pb-8 grid lg:grid-cols-[1.25fr_0.8fr_1fr] gap-8 lg:gap-10 items-center">
              <h2 className="uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tighter font-extrabold">Let's <span className="text-teal-300">Keep in Touch</span></h2>

              <div>
                <p className="text-base leading-relaxed text-slate-300">I'm available for OJT opportunities, internships and collaborations. Let's build something meaningful together.</p>
                <a href={GMAIL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white text-[11px] font-semibold tracking-[0.18em] uppercase px-5 py-3 rounded-lg transition">
                  Send an Email
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16M14 6l6 6-6 6" /></svg>
                </a>
              </div>

              <ul className="rounded-xl border border-teal-400/30 bg-[#0b3b3d]/50 p-5 space-y-3 text-sm">
                <li><button onClick={() => { navigator.clipboard?.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 1500) }} className="flex items-center gap-3 text-left hover:text-teal-300 transition" title="Click to copy"><I d={ic.mail} className="w-4 h-4 shrink-0 text-teal-400" /><span className="break-all">{copied ? 'Copied to clipboard!' : EMAIL}</span></button></li>
                <li><a href="tel:09219008557" className="flex items-center gap-3 hover:text-teal-300 transition"><I d={ic.phone2} className="w-4 h-4 shrink-0" />09219008557 / 09693591016</a></li>
                <li><a href={LINKEDIN} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-teal-300 transition"><I d={li} className="w-4 h-4 shrink-0" fill />linkedin.com/in/jonard-clarence-carlos</a></li>
                <li><a href={GH} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-teal-300 transition"><I d={gh} className="w-4 h-4 shrink-0" fill />github.com/jonardclarencecarlos</a></li>
                <li className="flex items-center gap-3"><I d={ic.pin} className="w-4 h-4 shrink-0" />Panasahan, Malolos, Bulacan · Open for Hybrid / Remote</li>
              </ul>
            </div>

            <div className="border-t border-teal-400/20 px-6 sm:px-10 lg:px-14 py-4 flex flex-wrap gap-2 justify-between items-center text-[10px] tracking-[0.18em] uppercase text-slate-400">
              <span>© 2026 Jonard Clarence P. Carlos</span>
              <span>College of Industrial Technology, Bulacan State University</span>
              <a href="#home" className="flex items-center gap-1.5 hover:text-teal-300"><I d={ic.up} className="w-3.5 h-3.5" />Back to top</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
