import { useParams, Link } from 'react-router';
import { useState } from 'react';
import { getProductById } from '../data/products';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';
import {
  ShoppingCart,
  Heart,
  Share2,
  Shield,
  Truck,
  RotateCcw,
  Check,
  ChevronLeft,
  Info,
  Sparkles
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const gradeColors = {
  Excellent: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  Good: 'bg-blue-100 text-blue-800 border-blue-200',
  Fair: 'bg-amber-100 text-amber-800 border-amber-200'
};

const gradeDescriptions = {
  Excellent: 'Like new with minimal to no signs of wear',
  Good: 'Light signs of use, fully functional',
  Fair: 'Moderate wear, excellent value'
};

export function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id || '');
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 py-4 border-b">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 mb-4 shadow-xl">
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="object-cover w-full h-full"
              />
              {discount > 0 && (
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-600 text-white text-lg px-4 py-2 shadow-lg">
                  Save {discount}%
                </Badge>
              )}
              <Badge className={`absolute top-4 left-4 ${gradeColors[product.grade]} text-sm px-3 py-1.5 shadow-lg`}>
                {product.grade} Condition
              </Badge>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? 'border-purple-500 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} view ${idx + 1}`}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4">
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {product.name}
              </h1>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 cursor-help">
                      <span className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                        ${product.price}
                      </span>
                      <Info className="w-4 h-4 text-gray-400" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-sm">Price displayed in USD. Kenyan customers will receive a calculated KES transfer price upon inquiry.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {product.originalPrice > product.price && (
                <div className="flex items-center gap-2">
                  <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                  <span className="text-lg font-semibold text-green-600">Save ${product.originalPrice - product.price}</span>
                </div>
              )}
            </div>

            <Card className="p-4 mb-6 bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-emerald-900 mb-1">
                    {product.grade} Condition
                  </div>
                  <div className="text-sm text-emerald-800">
                    {gradeDescriptions[product.grade]}
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Truck className="w-4 h-4 text-blue-600" />
                </div>
                <span>Free shipping on all orders</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <RotateCcw className="w-4 h-4 text-purple-600" />
                </div>
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-pink-600" />
                </div>
                <span>100% quality guaranteed</span>
              </div>
            </div>

            <div className="flex gap-3 mb-8">
              <Button size="lg" className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white shadow-lg shadow-purple-500/30">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-pink-50">
                <Heart className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-blue-50">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            <Card className="p-6 bg-gradient-to-br from-gray-50 to-white">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {product.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50/30 hover:from-cyan-50 hover:to-purple-50 transition-colors"
                >
                  <span className="font-medium text-gray-700">{spec.label}</span>
                  <span className="text-gray-900 font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
