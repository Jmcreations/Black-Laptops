import { ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export function TrustBanner() {
  return (
    <div className="bg-gradient-to-r from-cyan-50 via-purple-50 to-pink-50 border-b border-purple-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-8 flex-wrap text-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
              100% Online Shop
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Truck className="w-4 h-4 text-purple-600" />
            <span className="font-medium">Free Shipping</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <RotateCcw className="w-4 h-4 text-pink-600" />
            <span className="font-medium">30-Day Returns</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-medium">Quality Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
