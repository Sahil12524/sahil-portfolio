import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Cpu, 
  Code2, 
  Binary, 
  Wrench, 
  Zap,
  ExternalLink,
  ChevronRight,
  Power,
  Wifi,
  Battery,
  HardDrive,
  Monitor,
  Youtube,
  Mail,
  Github,
  MessageSquare,
  DollarSign
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Assets
import matrixBg from "@assets/generated_images/digital_rain_matrix_code_background_in_green_and_black.png";

// Boot Sequence Data
const bootSequence = [
  "BIOS DATE 01/09/98 14:22:52 VER: 08.00.15",
  "CPU: INTEL(R) PENTIUM(R) II PROCESSOR",
  "640K RAM SYSTEM... OK",
  "INITIALIZING VIDEO ADAPTER... OK",
  "CHECKING PERIPHERALS...",
  "KEYBOARD DETECTED",
  "MOUSE DETECTED",
  "LOADING KERNEL...",
  "MOUNTING FILESYSTEM [ROOT]...",
  "SYSTEM READY."
];

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [bootIndex, setBootIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  
  // Boot Animation Effect
  useEffect(() => {
    if (bootIndex < bootSequence.length) {
      const timeout = setTimeout(() => {
        setBootIndex(prev => prev + 1);
      }, Math.random() * 300 + 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setBooted(true);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [bootIndex]);

  if (!booted) {
    return (
      <div className="min-h-screen bg-black text-[#00ff00] font-mono p-8 flex flex-col justify-start items-start">
        <div className="crt-overlay" />
        <div className="crt-vignette" />
        {bootSequence.slice(0, bootIndex).map((line, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-1"
          >
            {`> ${line}`}
          </motion.div>
        ))}
        <div className="animate-blink mt-2">_</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-mono selection:bg-[#00ff00] selection:text-black overflow-hidden flex flex-col">
      {/* CRT Effects */}
      <div className="crt-overlay" />
      <div className="crt-vignette" />

      {/* Background Matrix Effect */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src={matrixBg} 
          alt="Matrix Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Status Bar */}
      <header className="relative z-10 border-b border-[#004400] bg-black/90 p-2 flex justify-between items-center text-xs md:text-sm uppercase tracking-wider">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            root@sahil-dev:~#
          </span>
        </div>
        <div className="flex items-center gap-4 text-[#00aa00]">
          <span className="flex items-center gap-1"><Wifi className="w-3 h-3" /> ONLINE</span>
          <span className="flex items-center gap-1"><Battery className="w-3 h-3" /> 100%</span>
          <span className="hidden md:inline">UPTIME: 4096h 12m</span>
        </div>
      </header>

      {/* Main Layout */}
      <main className="flex-1 relative z-10 overflow-y-auto p-4 md:p-8 container mx-auto max-w-6xl">
        
        {/* Hero Section - Terminal Style */}
        <section className="mb-16 border border-[#00ff00] bg-black/80 p-6 md:p-10 relative shadow-[0_0_15px_rgba(0,255,0,0.15)]">
          <div className="absolute top-0 left-0 bg-[#00ff00] text-black px-2 py-1 text-xs font-bold">
            ./WELCOME.sh
          </div>
          
          <div className="space-y-4 mt-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-shadow-glow"
            >
              SAHIL BHANDARI
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-[#00cc00] flex items-center gap-2"
            >
              <span className="animate-blink">&gt;</span> Systems & Assembly Developer
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-[#00aa00] leading-relaxed"
            >
              Specializing in low-level programming, OS internals, and performance optimization. 
              Bridging the gap between hardware and software.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-6 flex flex-wrap gap-4"
            >
              <Button 
                variant="outline" 
                asChild
                className="border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black rounded-none transition-all font-bold uppercase"
              >
                <a href="mailto:sahilshailu7977460287@gmail.com">
                  [ Initialize Contact ]
                </a>
              </Button>
              
              {/* Social Links */}
              <div className="flex items-center gap-2 ml-auto md:ml-4">
                <SocialButton href="https://youtube.com/@Sahil_Bhandari" icon={<Youtube className="w-5 h-5" />} label="YouTube" />
                <SocialButton href="https://discord.com/invite/rgJrCWfQ9u" icon={<MessageSquare className="w-5 h-5" />} label="Discord" />
                <SocialButton href="https://github.com/Sahil12524" icon={<Github className="w-5 h-5" />} label="GitHub" />
                <SocialButton href="https://razorpay.me/@Sahil12524" icon={<DollarSign className="w-5 h-5" />} label="Donate" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#004400] mb-8 overflow-x-auto">
          {["overview", "skills", "repositories", "projects"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-mono text-sm md:text-base uppercase tracking-widest transition-all
                ${activeTab === tab 
                  ? "bg-[#00ff00] text-black font-bold" 
                  : "text-[#00aa00] hover:bg-[#001100] hover:text-[#00ff00]"}`}
            >
              {`./${tab}`}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "overview" && <OverviewSection />}
            {activeTab === "skills" && <SkillsSection />}
            {activeTab === "repositories" && <ReposSection />}
            {activeTab === "projects" && <ProjectsSection />}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-[#004400] text-center text-[#006600] text-xs">
          <p>SYSTEM_HALTED_SUCCESSFULLY. MEMORY_DUMP_SAVED.</p>
          <p className="mt-2">© 2025 SAHIL BHANDARI. ALL RIGHTS RESERVED.</p>
        </footer>
      </main>
    </div>
  );
}

function SocialButton({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 text-[#00aa00] hover:text-[#00ff00] hover:bg-[#001100] transition-colors border border-transparent hover:border-[#004400]"
      title={label}
    >
      {icon}
    </a>
  );
}

// --- SECTIONS COMPONENTS ---

function OverviewSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="border border-[#004400] bg-black/50 p-6">
        <h3 className="text-xl font-bold text-[#00ff00] mb-4 border-b border-[#004400] pb-2 flex items-center gap-2">
          <HardDrive className="w-5 h-5" /> SYSTEM_STATS
        </h3>
        <ul className="space-y-3 text-[#00cc00]">
          <li className="flex justify-between">
            <span>ARCH:</span> <span>x86_64</span>
          </li>
          <li className="flex justify-between">
            <span>KERNEL:</span> <span>Windows NT / Linux</span>
          </li>
          <li className="flex justify-between">
            <span>SHELL:</span> <span>PowerShell / Bash</span>
          </li>
          <li className="flex justify-between">
            <span>EDITOR:</span> <span>VS Code / VIM</span>
          </li>
          <li className="flex justify-between">
            <span>STATUS:</span> <span className="text-[#00ff00] animate-pulse">READY FOR WORK</span>
          </li>
        </ul>
      </div>

      <div className="border border-[#004400] bg-black/50 p-6">
        <h3 className="text-xl font-bold text-[#00ff00] mb-4 border-b border-[#004400] pb-2 flex items-center gap-2">
          <Monitor className="w-5 h-5" /> CURRENT_FOCUS
        </h3>
        <p className="text-[#00cc00] mb-4">
          Currently focused on creating high-quality educational content for low-level programming and building system utilities for Windows.
        </p>
        <div className="bg-[#001100] p-3 border border-[#004400] font-mono text-xs text-[#00aa00]">
          $ git commit -m "Added WinUI 3 cleanup tool"<br/>
          [master 8f3a2c1] Added WinUI 3 cleanup tool<br/>
           2 files changed, 150 insertions(+), 12 deletions(-)
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  const skills = [
    {
      category: "LANGUAGES",
      items: ["C", "C++", "C#", "x86 Assembly (NASM)", "Python", "VB .NET"]
    },
    {
      category: "SYSTEMS",
      items: ["Windows Internals", "Win32 API", "WinUI 3", "Docker"]
    },
    {
      category: "TOOLS",
      items: ["GDB", "Make/CMake", "Git", "Visual Studio", "MSYS2"]
    }
  ];

  return (
    <div className="space-y-8">
      {skills.map((skillGroup, idx) => (
        <div key={idx} className="relative">
          <h3 className="text-[#00ff00] font-bold mb-4 flex items-center gap-2">
            <span className="text-[#006600]">[{idx + 1}]</span> {skillGroup.category}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillGroup.items.map((item) => (
              <div 
                key={item}
                className="border border-[#004400] bg-black/40 p-3 text-center hover:bg-[#00ff00] hover:text-black transition-colors cursor-default group"
              >
                <span className="group-hover:font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ReposSection() {
  const repos = [
    {
      title: "nasm-x86_64-windows-cheatsheets",
      lang: "Assembly",
      desc: "Comprehensive cheat sheets for x86_64 Assembly on Windows.",
      link: "https://github.com/Sahil12524/nasm-x86_64-windows-cheatsheets"
    },
    {
      title: "Cpp_Tutorial",
      lang: "C++",
      desc: "C++ and Assembly Win32 only. (Msys2 + NASM).",
      link: "https://github.com/Sahil12524/Cpp_Tutorial"
    },
    {
      title: "C_Tutorial",
      lang: "C",
      desc: "Basic C programming covering most of the things for beginners and revision.",
      link: "https://github.com/Sahil12524/C_Tutorial"
    },
    {
      title: "Minecraft-Launch-Script-VB-WinForms",
      lang: "VB .NET",
      desc: "Minecraft Bedrock Edition For Windows Trial Bypass.",
      link: "https://github.com/Sahil12524/Minecraft-Launch-Script-VB-WinForms"
    },
    {
      title: "Windows_Cleanup_WinUI_3",
      lang: "C#",
      desc: "Makes your Windows PC smooths and faster built on WinUI 3.",
      link: "https://github.com/Sahil12524/Windows_Cleanup_WinUI_3_Fail"
    },
    {
      title: "pihole-doh-wireguard",
      lang: "Docker",
      desc: "Self-hosted privacy stack: Pi-hole, Cloudflared (DoH), and WireGuard.",
      link: "https://github.com/Sahil12524/pihole-doh-wireguard"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {repos.map((repo, idx) => (
        <a 
          key={idx} 
          href={repo.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#004400] bg-black/60 p-5 hover:border-[#00ff00] transition-colors group block"
        >
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-lg font-bold text-[#00ff00] group-hover:underline decoration-2 underline-offset-4 break-all">
              {repo.title}
            </h4>
            <Badge variant="outline" className="border-[#006600] text-[#00aa00] rounded-none text-xs whitespace-nowrap ml-2">
              {repo.lang}
            </Badge>
          </div>
          <p className="text-[#00aa00] text-sm mb-4 min-h-[2.5rem]">{repo.desc}</p>
          <div className="flex justify-end">
            <Button size="sm" variant="ghost" className="text-[#006600] hover:text-[#00ff00] hover:bg-transparent p-0 h-auto">
              &lt;git_clone&gt; <ExternalLink className="ml-2 w-3 h-3" />
            </Button>
          </div>
        </a>
      ))}
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Linked List Implementation",
      tags: ["DSA", "C"],
      desc: "Ready to use Linked List implementation in C. Part of the C Tutorial series covering Data Structures and Algorithms.",
      link: "https://github.com/Sahil12524/C_Tutorial/tree/main/DSA/Linked_List"
    }
  ];

  return (
    <div className="space-y-12">
      {projects.map((project, i) => (
        <div key={i} className="flex flex-col md:flex-row gap-6 border-l-2 border-[#004400] pl-6 hover:border-[#00ff00] transition-colors">
          <div className="md:w-1/3 aspect-video bg-[#001100] border border-[#004400] flex items-center justify-center relative overflow-hidden group">
             {/* Placeholder for project image - using CSS pattern instead of images for raw feel */}
             <div className="absolute inset-0 bg-[linear-gradient(45deg,#002200_1px,transparent_1px),linear-gradient(-45deg,#002200_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
             <Binary className="w-16 h-16 text-[#004400] group-hover:text-[#00ff00] transition-colors" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#00ff00] mb-2">{project.title}</h3>
            <div className="flex gap-2 mb-4 text-xs">
              {project.tags.map(tag => (
                <span key={tag} className="bg-[#002200] text-[#00aa00] px-2 py-1">{tag}</span>
              ))}
            </div>
            <p className="text-[#00cc00] mb-4">
              {project.desc}
            </p>
            <Button 
              variant="outline" 
              asChild
              className="border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black rounded-none h-8 text-xs"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                [ ACCESS_SOURCE ]
              </a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
