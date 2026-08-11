import React from 'react';
import { Sun, Github, Twitter, Linkedin, Disc as Discord } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-amber-500/20 bg-[#06070a] pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#F59E0B] via-[#FF7E1D] to-[#EF4444] p-[2px]">
                <div className="w-full h-full bg-[#090a0f] rounded-[10px] flex items-center justify-center">
                  <Sun className="w-4 h-4 text-[#F59E0B]" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white">
                Brand<span className="gradient-text">mefy</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Autonomous AI website creation and workflow automation platform. Create your website. Automate the rest.
            </p>
            <div className="flex items-center gap-4 text-slate-400 pt-2">
              <a href="#" className="hover:text-[#F59E0B] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#F59E0B] transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#F59E0B] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#F59E0B] transition-colors"><Discord className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">AI Studio Generator</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Automation Canvas</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Lead Intelligence CRM</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Global Edge Hosting</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#faq" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#stories" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Community Forum</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#contact" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>© {new Date().getFullYear()} Brandmefy Inc. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-slate-400 font-mono">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
