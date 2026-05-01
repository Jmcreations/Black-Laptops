import { Link } from 'react-router';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { ShoppingCart, Info, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const gradeColors = {
  Excellent: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  Good: 'bg-blue-100 text-blue-800 border-blue-200',
  Fair: 'bg-amber-100 text-amber-800 border-amber-200'
};

export function ProductCard({ product }: ProductCardProps) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-purple-200">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/30">
          <ImageWithFallback
            src={product.images[0]}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <Badge className={`absolute top-3 left-3 ${gradeColors[product.grade]} shadow-md`}>
            {product.grade}
          </Badge>
          {discount > 0 && (
            <Badge className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-md">
              -{discount}%
            </Badge>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white shadow-lg">
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 min-h-[2.5rem] group-hover:text-purple-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="space-y-1 mb-3">
          {product.specs.slice(0, 2).map((spec, idx) => (
            <p key={idx} className="text-xs text-gray-600">
              {spec.label}: <span className="font-medium">{spec.value}</span>
            </p>
          ))}
        </div>

        <div className="flex items-baseline gap-2 mb-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1 cursor-help">
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                    ${product.price}
                  </span>
                  <Info className="w-3 h-3 text-gray-400" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="text-xs">Price displayed in USD. Kenyan customers will receive a calculated KES transfer price upon inquiry.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>

        <Button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 shadow-md">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}
