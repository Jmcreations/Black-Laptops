import { Mail, Linkedin, Github, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-lg shadow-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ReNewTech
              </span>
            </div>
            <p className="text-sm text-gray-400">Premium factory-refurbished electronics for Arizona and Kenya.</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><a href="#laptops" className="hover:text-cyan-400 transition-colors">Laptops</a></li>
              <li><a href="#phones" className="hover:text-cyan-400 transition-colors">Phones</a></li>
              <li><a href="#tablets" className="hover:text-cyan-400 transition-colors">Tablets</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Refurbishment Process</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Quality Guarantee</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Locations</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Arizona, USA</li>
              <li className="text-gray-400">Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="relative overflow-hidden bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-pink-900/40 border-2 border-purple-500/30 rounded-xl p-6 mb-6 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  Need a High-Performance Website?
                </h3>
                <p className="text-sm text-gray-300">This site was built by a professional developer. Hire me for your next project.</p>
              </div>
              <Button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white shadow-lg shadow-purple-500/30 whitespace-nowrap">
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-500">© 2026 RenewTech. Developed with precision and care.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
