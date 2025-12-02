import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Cpu, 
  Code2, 
  Binary, 
  Wrench, 
  Zap,
  ExternalLink,
  ChevronRight
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Assets
import heroBg from "@assets/generated_images/abstract_low-level_systems_programming_visualization_with_binary_code_and_glowing_circuits_in_dark_blue_and_grey.png";
import project1 from "@assets/generated_images/modern_server_rack_architecture_visualization_in_dark_minimal_style.png";
import project2 from "@assets/generated_images/abstract_geometric_shapes_representing_optimization_and_performance_in_dark_monochrome.png";
import project3 from "@assets/generated_images/abstract_low-level_systems_programming_visualization_with_binary_code_and_glowing_circuits_in_dark_blue_and_grey.png"; // Reusing one for 3rd project

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-white/20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background z-10" />
          <img 
            src={heroBg} 
            alt="Background Texture" 
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <motion.div 
          className="relative z-10 max-w-4xl mx-auto space-y-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="space-y-2">
            <h2 className="text-sm md:text-base font-mono text-muted-foreground tracking-widest uppercase">
              Portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-white/60">
              Sahil Bhandari
            </h1>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground/90">
              Systems & Assembly Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
              Low-level programming • OS internals • Performance-focused
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="flex gap-4 justify-center pt-8">
            <Button variant="outline" size="lg" className="rounded-full px-8 border-white/10 hover:bg-white/5 hover:text-white transition-all group">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 border-white/10 hover:bg-white/5 hover:text-white transition-all">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
            <Button variant="default" size="lg" className="rounded-full px-8 bg-white text-black hover:bg-white/90">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-[1px] h-16 bg-linear-to-b from-transparent via-muted-foreground/50 to-transparent" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Technical Arsenal</h2>
            <Separator className="flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, idx) => (
              <Card key={idx} className="bg-card/50 border-white/5 backdrop-blur-xs hover:border-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-md bg-white/5 text-white group-hover:bg-white/10 transition-colors">
                      {category.icon}
                    </div>
                    <CardTitle className="font-mono text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge key={item} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-secondary-foreground/90 rounded-sm px-3 py-1 font-normal">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Repositories Section */}
      <section className="py-24 px-4 md:px-8 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Separator className="w-12 bg-white/10" />
            <h2 className="text-3xl font-bold tracking-tight">Core Repositories</h2>
            <Separator className="flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {repos.map((repo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full flex flex-col bg-black border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                  <CardHeader>
                    <CardTitle className="font-mono text-xl flex items-center justify-between">
                      {repo.title}
                      <Code2 className="h-5 w-5 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground leading-relaxed">
                      {repo.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full justify-between group hover:bg-white/5 text-muted-foreground hover:text-white">
                      View Source <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <Separator className="flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
              <Card className="overflow-hidden bg-card border-0 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <CardHeader className="relative z-20 -mt-12 pt-12 bg-linear-to-t from-background to-transparent">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="font-mono text-xs text-primary/80 mt-2">
                    {project.tech}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 relative z-20 bg-background">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="relative z-20 bg-background pt-0">
                  <Button size="sm" className="w-full gap-2" variant="secondary">
                    View Demo <ChevronRight className="h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 md:px-8 bg-secondary/10 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="text-muted-foreground text-lg">
            Always open to discussing low-level systems, performance optimization, 
            and new opportunities in systems programming.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="group flex items-center gap-3 px-6 py-4 bg-background border border-white/10 rounded-lg hover:border-white/30 transition-all hover:-translate-y-1">
              <Github className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform" />
              <span className="font-mono font-medium">GitHub</span>
            </a>
            <a href="#" className="group flex items-center gap-3 px-6 py-4 bg-background border border-white/10 rounded-lg hover:border-white/30 transition-all hover:-translate-y-1">
              <Linkedin className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform" />
              <span className="font-mono font-medium">LinkedIn</span>
            </a>
            <a href="#" className="group flex items-center gap-3 px-6 py-4 bg-background border border-white/10 rounded-lg hover:border-white/30 transition-all hover:-translate-y-1">
              <Mail className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform" />
              <span className="font-mono font-medium">Email Me</span>
            </a>
          </div>

          <footer className="pt-16 text-sm text-muted-foreground/40 font-mono">
            © 2025 Sahil Bhandari. Built with React & Tailwind.
          </footer>
        </div>
      </section>
    </div>
  );
}

// Data Structures
const skills = [
  {
    title: "Systems Programming",
    icon: <Terminal className="h-5 w-5" />,
    items: ["C Programming", "C++ Standards", "Memory Management", "Pointers & Refs"]
  },
  {
    title: "Low-Level & Arch",
    icon: <Cpu className="h-5 w-5" />,
    items: ["x86-64 Assembly", "NASM", "Computer Architecture", "Instruction Sets"]
  },
  {
    title: "Optimization & RE",
    icon: <Wrench className="h-5 w-5" />,
    items: ["Performance Tuning", "Reverse Engineering", "GDB Debugging", "Profiling Tools"]
  }
];

const repos = [
  {
    title: "Kernel-C-Modules",
    description: "A collection of custom Linux kernel modules written in C demonstrating character device drivers and memory allocation."
  },
  {
    title: "CPP-Game-Engine",
    description: "A lightweight 2D game engine built from scratch using C++17 and OpenGL, focusing on efficient memory pooling."
  },
  {
    title: "ASM-Bootloader",
    description: "A minimal 16-bit bootloader written in x86 Assembly that loads a basic kernel into protected mode."
  }
];

const projects = [
  {
    title: "Custom Memory Allocator",
    tech: "C • Systems • Performance",
    description: "Implemented a high-performance malloc/free replacement using segregated free lists and coalesce strategies, achieving 20% speedup over libc in specific workloads.",
    image: project1
  },
  {
    title: "Packet Sniffer & Analyzer",
    tech: "C++ • Networking • Linux API",
    description: "A raw socket packet analyzer that captures and decodes TCP/IP traffic in real-time, featuring a custom CLI interface for filtering packets.",
    image: project2
  },
  {
    title: "OS Scheduler Simulation",
    tech: "C • Algorithms • OS Internals",
    description: "A simulation of Round Robin and Completely Fair Scheduler algorithms, visualizing context switching overhead and process states.",
    image: project3
  }
];
