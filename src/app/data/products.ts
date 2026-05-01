export type QualityGrade = 'Excellent' | 'Good' | 'Fair';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  images: string[];
  grade: QualityGrade;
  specs: { label: string; value: string }[];
  description: string;
  category: 'laptops' | 'phones' | 'tablets';
  highlights: string[];
}

export const products: Product[] = [
  {
    id: 'macbook-pro-14-m1',
    name: 'MacBook Pro 14" M1 Pro',
    price: 1299,
    originalPrice: 1999,
    images: [
      'https://images.unsplash.com/photo-1624899195688-81fa68eff47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtYWNib29rJTIwbGFwdG9wJTIwcHJlbWl1bXxlbnwxfHx8fDE3Nzc2MjUwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1080',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=1080'
    ],
    grade: 'Excellent',
    category: 'laptops',
    description: 'Powerful performance meets stunning display in this premium refurbished MacBook Pro.',
    highlights: [
      'M1 Pro chip delivers exceptional performance',
      'Stunning 14-inch Liquid Retina XDR display',
      'All-day battery life',
      'Professionally refurbished with quality guarantee'
    ],
    specs: [
      { label: 'Processor', value: 'Apple M1 Pro Chip' },
      { label: 'Memory', value: '16GB Unified RAM' },
      { label: 'Storage', value: '512GB SSD' },
      { label: 'Display', value: '14.2" Liquid Retina XDR' },
      { label: 'Graphics', value: 'Integrated 16-core GPU' },
      { label: 'Battery', value: 'Up to 17 hours' }
    ]
  },
  {
    id: 'macbook-air-m2',
    name: 'MacBook Air M2',
    price: 899,
    originalPrice: 1199,
    images: [
      'https://images.unsplash.com/flagged/photo-1590183030142-efad5a97612f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtYWNib29rJTIwbGFwdG9wJTIwcHJlbWl1bXxlbnwxfHx8fDE3Nzc2MjUwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1080'
    ],
    grade: 'Good',
    category: 'laptops',
    description: 'Ultra-thin and lightweight with the power of M2 chip.',
    highlights: [
      'M2 chip for incredible speed',
      'Fanless design for silent operation',
      'Lightweight and portable',
      'Full day battery life'
    ],
    specs: [
      { label: 'Processor', value: 'Apple M2 Chip' },
      { label: 'Memory', value: '8GB Unified RAM' },
      { label: 'Storage', value: '256GB SSD' },
      { label: 'Display', value: '13.6" Liquid Retina' },
      { label: 'Graphics', value: 'Integrated 8-core GPU' },
      { label: 'Weight', value: '2.7 lbs' }
    ]
  },
  {
    id: 'dell-xps-15',
    name: 'Dell XPS 15',
    price: 1099,
    originalPrice: 1699,
    images: [
      'https://images.unsplash.com/photo-1702865053708-be5f974d5e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwbGFwdG9wJTIwcHJlbWl1bXxlbnwxfHx8fDE3Nzc2MjUwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1080'
    ],
    grade: 'Excellent',
    category: 'laptops',
    description: 'Premium Windows laptop with stunning display and powerful performance.',
    highlights: [
      'InfinityEdge display with minimal bezels',
      '11th Gen Intel Core performance',
      'Premium build quality',
      'Ideal for creators and professionals'
    ],
    specs: [
      { label: 'Processor', value: 'Intel Core i7-11800H' },
      { label: 'Memory', value: '16GB DDR4 RAM' },
      { label: 'Storage', value: '512GB NVMe SSD' },
      { label: 'Display', value: '15.6" FHD+ InfinityEdge' },
      { label: 'Graphics', value: 'NVIDIA GeForce GTX 1650' },
      { label: 'Battery', value: 'Up to 8 hours' }
    ]
  },
  {
    id: 'macbook-pro-16-intel',
    name: 'MacBook Pro 16" Intel',
    price: 1199,
    originalPrice: 2399,
    images: [
      'https://images.unsplash.com/photo-1702865053715-f567a44163e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYWNib29rJTIwbGFwdG9wJTIwcHJlbWl1bXxlbnwxfHx8fDE3Nzc2MjUwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1080'
    ],
    grade: 'Fair',
    category: 'laptops',
    description: 'Large screen powerhouse for demanding workflows.',
    highlights: [
      'Massive 16-inch Retina display',
      'Powerful Intel i9 processor',
      'Large storage capacity',
      'Great for video editing and development'
    ],
    specs: [
      { label: 'Processor', value: 'Intel Core i9-9880H' },
      { label: 'Memory', value: '16GB DDR4 RAM' },
      { label: 'Storage', value: '1TB SSD' },
      { label: 'Display', value: '16" Retina Display' },
      { label: 'Graphics', value: 'AMD Radeon Pro 5500M' },
      { label: 'Ports', value: '4x Thunderbolt 3' }
    ]
  },
  {
    id: 'iphone-14-pro-max',
    name: 'iPhone 14 Pro Max',
    price: 899,
    originalPrice: 1199,
    images: [
      'https://images.unsplash.com/photo-1743677351173-07e6c162af96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpcGhvbmUlMjBzbWFydHBob25lfGVufDF8fHx8MTc3NzYyNTA3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1696446702183-cbd50dba3c8f?w=1080'
    ],
    grade: 'Excellent',
    category: 'phones',
    description: 'The ultimate iPhone with advanced camera system and Dynamic Island.',
    highlights: [
      'A16 Bionic chip - fastest iPhone ever',
      'Pro camera system with 48MP main',
      'Always-On Retina display',
      'All-day battery life'
    ],
    specs: [
      { label: 'Storage', value: '256GB' },
      { label: 'Display', value: '6.7" Super Retina XDR' },
      { label: 'Chip', value: 'A16 Bionic' },
      { label: 'Camera', value: '48MP Main + 12MP Ultra Wide' },
      { label: '5G', value: 'Yes' },
      { label: 'Battery', value: 'Up to 29 hours video' }
    ]
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    price: 549,
    originalPrice: 799,
    images: [
      'https://images.unsplash.com/photo-1743677323363-109c7e9719a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpcGhvbmUlMjBzbWFydHBob25lfGVufDF8fHx8MTc3NzYyNTA3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1592286927505-c4d8481c8b3a?w=1080'
    ],
    grade: 'Good',
    category: 'phones',
    description: 'Great all-around iPhone with excellent camera and performance.',
    highlights: [
      'A15 Bionic chip',
      'Advanced dual-camera system',
      'Ceramic Shield front cover',
      'Excellent battery life'
    ],
    specs: [
      { label: 'Storage', value: '128GB' },
      { label: 'Display', value: '6.1" Super Retina XDR' },
      { label: 'Chip', value: 'A15 Bionic' },
      { label: 'Camera', value: 'Dual 12MP system' },
      { label: '5G', value: 'Yes' },
      { label: 'Battery', value: 'Up to 19 hours video' }
    ]
  },
  {
    id: 'iphone-12-pro',
    name: 'iPhone 12 Pro',
    price: 499,
    originalPrice: 999,
    images: [
      'https://images.unsplash.com/photo-1603732133854-4eb5f41d1fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBzbWFydHBob25lfGVufDF8fHx8MTc3NzYyNTA3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=1080'
    ],
    grade: 'Excellent',
    category: 'phones',
    description: 'Pro-level features with triple camera system and premium design.',
    highlights: [
      'Pro camera system with LiDAR',
      'Stainless steel design',
      'Night mode on all cameras',
      'HDR video recording'
    ],
    specs: [
      { label: 'Storage', value: '256GB' },
      { label: 'Display', value: '6.1" Super Retina XDR' },
      { label: 'Chip', value: 'A14 Bionic' },
      { label: 'Camera', value: 'Triple 12MP + LiDAR' },
      { label: '5G', value: 'Yes' },
      { label: 'Build', value: 'Stainless Steel' }
    ]
  },
  {
    id: 'iphone-11',
    name: 'iPhone 11',
    price: 349,
    originalPrice: 699,
    images: [
      'https://images.unsplash.com/photo-1697898706680-5e1dcc9b50fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpcGhvbmUlMjBzbWFydHBob25lfGVufDF8fHx8MTc3NzYyNTA3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1080'
    ],
    grade: 'Fair',
    category: 'phones',
    description: 'Reliable iPhone with great cameras at an affordable price.',
    highlights: [
      'Dual-camera system',
      'All-day battery life',
      'Water and dust resistant',
      'A13 Bionic chip'
    ],
    specs: [
      { label: 'Storage', value: '64GB' },
      { label: 'Display', value: '6.1" Liquid Retina' },
      { label: 'Chip', value: 'A13 Bionic' },
      { label: 'Camera', value: 'Dual 12MP system' },
      { label: 'Water Resistance', value: 'IP68' },
      { label: 'Battery', value: 'Up to 17 hours video' }
    ]
  },
  {
    id: 'ipad-pro-12-m1',
    name: 'iPad Pro 12.9" M1',
    price: 799,
    originalPrice: 1099,
    images: [
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGFkJTIwdGFibGV0JTIwZGV2aWNlfGVufDF8fHx8MTc3NzYyNTA3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1585790050230-5dd28404f805?w=1080'
    ],
    grade: 'Excellent',
    category: 'tablets',
    description: 'The ultimate iPad experience with M1 chip and Liquid Retina XDR display.',
    highlights: [
      'M1 chip - desktop-class performance',
      'Stunning Liquid Retina XDR display',
      'Compatible with Apple Pencil & Magic Keyboard',
      'Perfect for creative professionals'
    ],
    specs: [
      { label: 'Storage', value: '256GB' },
      { label: 'Display', value: '12.9" Liquid Retina XDR' },
      { label: 'Chip', value: 'Apple M1' },
      { label: 'Camera', value: '12MP Wide + 10MP Ultra Wide' },
      { label: 'Connectivity', value: 'Wi-Fi 6 + 5G' },
      { label: 'Battery', value: 'Up to 10 hours' }
    ]
  },
  {
    id: 'ipad-air-5',
    name: 'iPad Air 5th Gen',
    price: 499,
    originalPrice: 599,
    images: [
      'https://images.unsplash.com/photo-1702479743984-1906e40e5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpcGFkJTIwdGFibGV0JTIwZGV2aWNlfGVufDF8fHx8MTc3NzYyNTA3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1080'
    ],
    grade: 'Good',
    category: 'tablets',
    description: 'Powerful and versatile with M1 chip in a stunning design.',
    highlights: [
      'M1 chip performance',
      'Beautiful 10.9" Liquid Retina display',
      'Works with Apple Pencil 2',
      'Available in vibrant colors'
    ],
    specs: [
      { label: 'Storage', value: '64GB' },
      { label: 'Display', value: '10.9" Liquid Retina' },
      { label: 'Chip', value: 'Apple M1' },
      { label: 'Camera', value: '12MP Wide' },
      { label: 'Connectivity', value: 'Wi-Fi 6' },
      { label: 'Touch ID', value: 'Top button' }
    ]
  },
  {
    id: 'ipad-9',
    name: 'iPad 9th Gen',
    price: 249,
    originalPrice: 329,
    images: [
      'https://images.unsplash.com/photo-1702479744193-5c5056cf0436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpcGFkJTIwdGFibGV0JTIwZGV2aWNlfGVufDF8fHx8MTc3NzYyNTA3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1080'
    ],
    grade: 'Excellent',
    category: 'tablets',
    description: 'The essential iPad with great value and performance.',
    highlights: [
      'A13 Bionic chip',
      'Retina display',
      'Works with Apple Pencil',
      'Perfect for everyday tasks'
    ],
    specs: [
      { label: 'Storage', value: '64GB' },
      { label: 'Display', value: '10.2" Retina' },
      { label: 'Chip', value: 'A13 Bionic' },
      { label: 'Camera', value: '8MP Wide' },
      { label: 'Connectivity', value: 'Wi-Fi 5' },
      { label: 'Battery', value: 'Up to 10 hours' }
    ]
  },
  {
    id: 'ipad-mini-6',
    name: 'iPad Mini 6th Gen',
    price: 399,
    originalPrice: 499,
    images: [
      'https://images.unsplash.com/photo-1702479744048-0351261e1ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpcGFkJTIwdGFibGV0JTIwZGV2aWNlfGVufDF8fHx8MTc3NzYyNTA3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1589739900243-c0e5dae8e27c?w=1080'
    ],
    grade: 'Good',
    category: 'tablets',
    description: 'Compact powerhouse with A15 Bionic chip and all-screen design.',
    highlights: [
      'Ultra-portable 8.3" design',
      'A15 Bionic chip',
      'Supports Apple Pencil 2',
      'Perfect for reading and gaming'
    ],
    specs: [
      { label: 'Storage', value: '64GB' },
      { label: 'Display', value: '8.3" Liquid Retina' },
      { label: 'Chip', value: 'A15 Bionic' },
      { label: 'Camera', value: '12MP Wide' },
      { label: 'Connectivity', value: 'Wi-Fi 6 + 5G' },
      { label: 'USB-C', value: 'Yes' }
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: 'laptops' | 'phones' | 'tablets'): Product[] {
  return products.filter(p => p.category === category);
}
