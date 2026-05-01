import { Link } from 'react-router';
import { TrustBanner } from '../components/TrustBanner';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Laptop, Smartphone, Tablet, ArrowRight, Sparkles, Shield, Truck } from 'lucide-react';
import { Button } from '../components/ui/button';

export function HomePage() {
  const laptops = products.filter(p => p.category === 'laptops');
  const phones = products.filter(p => p.category === 'phones');
  const tablets = products.filter(p => p.category === 'tablets');

  return (
    <>
      <TrustBanner />

      <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Premium Refurbished Electronics</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Top Tech. Half the Price.
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Zero Compromise.
              </span>
            </h1>

            <p className="text-xl mb-8 text-white/90">
              Factory-certified devices at unbeatable prices. Serving Arizona & Kenya with free shipping and 30-day returns.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl">
                Shop Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Quality Certified</div>
                <div className="text-sm text-white/80">Tested & Guaranteed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                <Truck className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Free Shipping</div>
                <div className="text-sm text-white/80">On All Orders</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                <Sparkles className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">30-Day Returns</div>
                <div className="text-sm text-white/80">No Questions Asked</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-white to-cyan-50/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Laptop className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Laptops
              </h2>
            </div>
            <Link to="/category/laptops">
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {laptops.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-purple-50/30 to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Phones
              </h2>
            </div>
            <Link to="/category/phones">
              <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phones.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-blue-50/30 to-teal-50/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Tablet className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Tablets
              </h2>
            </div>
            <Link to="/category/tablets">
              <Button variant="ghost" className="text-teal-600 hover:text-teal-700">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tablets.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
