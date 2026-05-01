import { ShoppingCart, Search, MapPin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import { getProductsByCategory } from '../data/products';

export function Header() {
  const laptops = getProductsByCategory('laptops');
  const phones = getProductsByCategory('phones');
  const tablets = getProductsByCategory('tablets');

  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-lg shadow-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                ReNewTech
              </span>
            </Link>

            <NavigationMenu className="hidden md:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Phones
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="mb-2 text-sm font-semibold text-gray-900">Browse Phones</div>
                      <div className="grid gap-2">
                        {phones.map((phone) => (
                          <Link key={phone.id} to={`/product/${phone.id}`}>
                            <NavigationMenuLink className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 transition-colors group">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded bg-gradient-to-br from-cyan-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <span className="text-lg">📱</span>
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{phone.name}</div>
                                  <div className="text-xs text-gray-600">From ${phone.price}</div>
                                </div>
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Laptops
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="mb-2 text-sm font-semibold text-gray-900">Browse Laptops</div>
                      <div className="grid gap-2">
                        {laptops.map((laptop) => (
                          <Link key={laptop.id} to={`/product/${laptop.id}`}>
                            <NavigationMenuLink className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 transition-colors group">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded bg-gradient-to-br from-cyan-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <span className="text-lg">💻</span>
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{laptop.name}</div>
                                  <div className="text-xs text-gray-600">From ${laptop.price}</div>
                                </div>
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Tablets
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="mb-2 text-sm font-semibold text-gray-900">Browse Tablets</div>
                      <div className="grid gap-2">
                        {tablets.map((tablet) => (
                          <Link key={tablet.id} to={`/product/${tablet.id}`}>
                            <NavigationMenuLink className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 transition-colors group">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded bg-gradient-to-br from-cyan-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <span className="text-lg">📲</span>
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{tablet.name}</div>
                                  <div className="text-xs text-gray-600">From ${tablet.price}</div>
                                </div>
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex-1 max-w-md mx-8 hidden lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search for products..."
                className="pl-10 border-gray-200 focus:border-purple-300 focus:ring-purple-200"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-purple-600" />
              <span>AZ & Kenya</span>
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-purple-50">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
