import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, User, ChevronLeft, Star, Sparkles, Circle } from 'lucide-react';

export default function SUSAVibrantRichVibes() {
  const [currentScreen, setCurrentScreen] = useState('home');

  // SUSA products with VIBRANT rich colors
  const products = [
    {
      id: 1,
      name: "Ultimate Essential Strapless Bra",
      subtitle: "Minimizer Edition",
      price: 365,
      category: "Best Seller",
      image: "bg-gradient-to-br from-amber-200 via-orange-100 to-yellow-100",
      accentColor: "from-neutral-900 to-black",
      rating: 4.9
    },
    {
      id: 2,
      name: "Waterproof Breast Lift Pads",
      subtitle: "Reusable • Invisible Support",
      price: 95,
      salePrice: 165,
      category: "Essentials",
      image: "bg-gradient-to-br from-rose-300 via-pink-200 to-rose-200",
      accentColor: "from-rose-700 to-pink-800",
      rating: 4.8
    },
    {
      id: 3,
      name: "High Waisted Core Control Shaper",
      subtitle: "Seamless Panty Collection",
      price: 272,
      category: "Top Rated",
      image: "bg-gradient-to-br from-stone-300 via-neutral-200 to-stone-200",
      accentColor: "from-stone-900 to-neutral-900",
      rating: 5.0
    },
    {
      id: 4,
      name: "Back Smoothing Solutions Bra",
      subtitle: "Ultimate Lift & Support",
      price: 408,
      category: "Signature",
      image: "bg-gradient-to-br from-amber-300 via-orange-200 to-yellow-200",
      accentColor: "from-amber-800 to-orange-900",
      rating: 4.9
    },
    {
      id: 5,
      name: "Sculpting Bodysuit",
      subtitle: "Full Coverage Shaper",
      price: 442,
      category: "New Arrival",
      image: "bg-gradient-to-br from-neutral-300 via-stone-200 to-zinc-200",
      accentColor: "from-neutral-900 to-zinc-900",
      rating: 4.7
    },
    {
      id: 6,
      name: "Comfort Shaper Collection",
      subtitle: "Everyday Essentials",
      price: 325,
      category: "Featured",
      image: "bg-gradient-to-br from-pink-300 via-rose-200 to-pink-200",
      accentColor: "from-pink-800 to-rose-900",
      rating: 4.8
    }
  ];

  const SplashScreen = () => (
    <div className="h-full bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* RICH African-inspired pattern overlays - VIBRANT */}
      <div className="absolute inset-0 opacity-20">
        {/* Multiple decorative circles */}
        <div className="absolute top-10 right-16 w-40 h-40 border-[6px] border-orange-600 rounded-full"></div>
        <div className="absolute top-16 right-20 w-28 h-28 border-4 border-rose-500 rounded-full"></div>
        
        <div className="absolute bottom-20 left-12 w-48 h-48 border-[6px] border-neutral-800 rounded-full"></div>
        <div className="absolute bottom-28 left-20 w-32 h-32 border-4 border-pink-500 rounded-full"></div>
        
        <div className="absolute top-1/3 right-10 w-24 h-24 border-4 border-amber-600 rounded-full"></div>
        <div className="absolute bottom-1/3 left-8 w-20 h-20 border-[3px] border-rose-600 rounded-full"></div>
        
        {/* Geometric accent lines */}
        <div className="absolute top-1/4 left-1/4 w-32 h-[3px] bg-orange-600 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-[3px] bg-rose-600 -rotate-45"></div>
      </div>
      
      {/* Glowing orbs - VIBRANT */}
      <div className="absolute top-24 right-12 w-36 h-36 bg-gradient-to-br from-amber-400/50 to-orange-400/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-16 w-44 h-44 bg-gradient-to-br from-rose-400/50 to-pink-400/50 rounded-full blur-3xl"></div>
      
      <div className="space-y-10 text-center relative z-10">
        <div className="space-y-4">
          {/* Decorative top element */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Circle className="w-2 h-2 fill-rose-600 text-rose-600" />
            <Circle className="w-3 h-3 fill-orange-600 text-orange-600" />
            <Circle className="w-2 h-2 fill-rose-600 text-rose-600" />
          </div>
          
          <h1 className="text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-stone-900 to-black tracking-tight drop-shadow-md">
            SUSA
          </h1>
          <div className="relative">
            <p className="text-sm text-neutral-900 uppercase tracking-[0.4em] font-bold">Shapewear</p>
            {/* Decorative underline - VIBRANT */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-gradient-to-r from-transparent via-rose-600 to-transparent"></div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 justify-center py-4">
          <div className="w-16 h-[3px] bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
          <Sparkles className="w-5 h-5 text-rose-600" />
          <div className="w-16 h-[3px] bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
        </div>
        
        <div className="space-y-2">
          <p className="text-neutral-900 text-base font-light leading-relaxed max-w-xs mx-auto">
            Sculpting elegance.
          </p>
          <p className="text-rose-700 text-base font-bold">
            Celebrating confidence.
          </p>
          <p className="text-orange-700 text-sm font-semibold italic">
            Embrace your curves
          </p>
        </div>
      </div>
      
      <button 
        onClick={() => setCurrentScreen('home')}
        className="absolute bottom-16 px-14 py-4 bg-gradient-to-r from-neutral-900 via-black to-neutral-900 text-white text-xs uppercase tracking-[0.3em] rounded-full hover:from-black hover:to-black transition-all shadow-2xl hover:shadow-3xl font-semibold relative overflow-hidden group"
      >
        <span className="relative z-10">Enter</span>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-700/30 to-pink-700/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
    </div>
  );

  const HomeScreen = () => (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-amber-100/60 via-orange-50/40 to-white">
      {/* Header - VIBRANT */}
      <div className="sticky top-0 z-10 bg-white/98 backdrop-blur-md border-b-2 border-orange-300 shadow-sm">
        <div className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-0.5">
              <div className="w-1 h-1 bg-rose-600 rounded-full"></div>
              <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
            </div>
            <h1 className="text-2xl font-serif bg-gradient-to-r from-neutral-900 via-stone-900 to-black bg-clip-text text-transparent">
              SUSA
            </h1>
          </div>
          <div className="flex items-center gap-5">
            <Search className="w-5 h-5 text-neutral-800" />
            <Heart className="w-5 h-5 text-rose-600" />
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-neutral-800" />
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gradient-to-br from-rose-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-[8px] text-white font-bold">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - VIBRANT patterns */}
      <div className="relative h-[540px] bg-gradient-to-br from-amber-300 via-orange-200 to-rose-200 flex items-end overflow-hidden">
        {/* African-inspired pattern overlay - VIBRANT */}
        <div className="absolute inset-0 opacity-[0.15]">
          <div className="absolute top-8 right-12 w-32 h-32 border-[5px] border-neutral-900 rounded-full"></div>
          <div className="absolute top-16 right-20 w-20 h-20 border-[3px] border-rose-700 rounded-full"></div>
          
          <div className="absolute bottom-16 left-8 w-40 h-40 border-[5px] border-black rounded-full"></div>
          <div className="absolute bottom-24 left-16 w-28 h-28 border-[3px] border-pink-600 rounded-full"></div>
          
          <div className="absolute top-1/2 left-1/2 w-56 h-56 border-[6px] border-orange-700 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-44 h-44 border-[3px] border-rose-600 rounded-full"></div>
          
          {/* Geometric lines - VIBRANT */}
          <div className="absolute top-20 left-20 w-40 h-[3px] bg-neutral-900 rotate-45"></div>
          <div className="absolute bottom-32 right-24 w-32 h-[3px] bg-rose-700 -rotate-45"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-neutral-700 text-sm mb-2 font-medium">[ Editorial Hero Image ]</p>
            <p className="text-orange-600 text-xs font-semibold">High-fashion photography</p>
          </div>
        </div>
        
        <div className="relative z-10 p-8 w-full bg-gradient-to-t from-black/60 via-black/40 to-transparent">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
            </div>
            <p className="text-amber-100 text-xs uppercase tracking-[0.35em] font-bold">New Collection</p>
          </div>
          <h2 className="text-6xl font-serif text-white mb-3 leading-[1.1]">
            Sculpting<br/>
            <span className="text-rose-300 italic">Elegance</span>
          </h2>
          <p className="text-white/95 mb-8 text-sm leading-relaxed max-w-xs font-light">
            Experience the perfect fusion of comfort and confidence.<br/>
            <span className="text-rose-300 font-bold">Celebrate your curves.</span>
          </p>
          <button 
            onClick={() => setCurrentScreen('catalog')}
            className="px-12 py-3.5 bg-white text-neutral-900 text-xs uppercase tracking-[0.25em] rounded-full hover:bg-amber-50 transition-all shadow-2xl font-bold relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Collection</span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-200/50 to-pink-200/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>

      {/* Featured Category - VIBRANT */}
      <div className="px-6 py-14 relative">
        {/* Background pattern - VIBRANT */}
        <div className="absolute top-8 right-8 w-24 h-24 border-2 border-orange-400 rounded-full opacity-60"></div>
        
        <div className="flex items-center justify-between mb-8">
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex flex-col gap-1">
                <div className="w-10 h-[3px] bg-gradient-to-r from-rose-600 to-pink-600 rounded-full"></div>
                <div className="w-6 h-[2px] bg-orange-600 rounded-full"></div>
              </div>
              <h3 className="text-3xl font-serif bg-gradient-to-r from-neutral-900 to-black bg-clip-text text-transparent">
                Best Sellers
              </h3>
            </div>
            <p className="text-sm text-orange-700 font-medium italic">Curated with love & confidence</p>
          </div>
          <button 
            onClick={() => setCurrentScreen('catalog')}
            className="text-xs text-rose-700 uppercase tracking-[0.2em] hover:text-rose-900 font-bold flex items-center gap-2 group"
          >
            View All 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Product Cards - VIBRANT */}
        <div className="flex gap-6 overflow-x-auto pb-6 -mx-6 px-6 no-scrollbar">
          {products.slice(0, 3).map((product, idx) => (
            <div 
              key={product.id}
              onClick={() => setCurrentScreen('product')}
              className="flex-shrink-0 w-80 cursor-pointer group"
            >
              <div className={`${product.image} aspect-[3/4] rounded-3xl mb-5 flex items-center justify-center relative overflow-hidden shadow-xl group-hover:shadow-2xl transition-all border-2 border-orange-300 group-hover:border-rose-400`}>
                {/* Decorative pattern overlay - VIBRANT */}
                <div className="absolute inset-0 opacity-[0.1]">
                  <div className="absolute top-4 right-4 w-16 h-16 border-[3px] border-neutral-900 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 border-[3px] border-rose-700 rounded-full"></div>
                </div>
                
                <p className="text-orange-600 text-xs font-bold">Product Image</p>
                
                <div className="absolute top-4 right-4 px-4 py-2 bg-white/98 backdrop-blur-sm rounded-full shadow-lg border-2 border-orange-300">
                  <p className="text-[10px] text-neutral-900 uppercase tracking-[0.2em] font-bold">{product.category}</p>
                </div>
                
                {/* Decorative corner accent - VIBRANT */}
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-rose-600/30 to-transparent rounded-tl-3xl"></div>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-serif text-neutral-900 leading-tight group-hover:text-rose-700 transition-colors">
                  {product.name}
                </h4>
                <p className="text-sm text-orange-700 font-medium leading-relaxed">{product.subtitle}</p>
                <div className="flex items-center justify-between pt-2 border-t-2 border-orange-200">
                  <p className="text-3xl font-serif bg-gradient-to-r from-neutral-900 to-black bg-clip-text text-transparent">
                    ${product.price}
                  </p>
                  <div className="flex items-center gap-2 bg-rose-100 px-3 py-1.5 rounded-full border border-rose-300">
                    <Star className="w-3.5 h-3.5 fill-rose-700 text-rose-700" />
                    <span className="text-xs text-neutral-900 font-bold">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary CTA - VIBRANT */}
      <div className="mx-6 mb-14 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 rounded-[2rem] p-10 text-white relative overflow-hidden shadow-2xl">
        {/* Rich pattern overlay - VIBRANT */}
        <div className="absolute inset-0 opacity-[0.2]">
          <div className="absolute top-0 right-0 w-40 h-40 border-[5px] border-orange-500 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 border-[5px] border-rose-600 rounded-full -ml-24 -mb-24"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 border-[3px] border-pink-500 rounded-full"></div>
        </div>
        
        {/* Glowing accents - VIBRANT */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-rose-600/40 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-600/40 rounded-full -ml-24 -mb-24 blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200 font-bold">Experience</p>
          </div>
          <h3 className="text-4xl font-serif mb-5 leading-tight">
            Say Goodbye to<br/>
            <span className="text-rose-400 italic">Back Rolls</span>
          </h3>
          <p className="text-sm text-amber-100 mb-8 leading-relaxed max-w-md">
            Ultimate back-smoothing solutions with unparalleled lift and support that celebrates your curves.
            <span className="block mt-2 text-rose-300 font-bold">Feel confident. Feel beautiful.</span>
          </p>
          <button className="px-10 py-3.5 bg-white text-neutral-900 text-xs uppercase tracking-[0.25em] rounded-full hover:bg-amber-50 transition-all shadow-xl font-bold">
            Shop Collection
          </button>
        </div>
      </div>

      {/* Color Story Section - VIBRANT */}
      <div className="mx-6 mb-14">
        <h4 className="text-sm text-orange-700 uppercase tracking-[0.25em] mb-6 font-bold text-center">Our Vibrant Palette</h4>
        <div className="grid grid-cols-3 gap-5">
          <div className="relative group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all border-2 border-orange-400">
              <p className="text-white text-sm font-bold uppercase tracking-wider drop-shadow-md">Nude</p>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-[3px] border-orange-700 rounded-full"></div>
          </div>
          <div className="relative group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all border-2 border-rose-400">
              <p className="text-white text-sm font-bold uppercase tracking-wider drop-shadow-md">Blush</p>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-[3px] border-rose-700 rounded-full"></div>
          </div>
          <div className="relative group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-neutral-800 to-black rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all border-2 border-neutral-900">
              <p className="text-white text-sm font-bold uppercase tracking-wider drop-shadow-md">Black</p>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-[3px] border-amber-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bottom Nav - VIBRANT */}
      <div className="sticky bottom-0 bg-white/98 backdrop-blur-md border-t-2 border-orange-300 px-6 py-5 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center gap-2">
            <div className="w-2.5 h-2.5 bg-gradient-to-br from-rose-600 to-pink-600 rounded-full shadow-md"></div>
            <span className="text-[10px] text-neutral-900 uppercase tracking-[0.2em] font-bold">Home</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Search className="w-5 h-5 text-orange-700" />
            <span className="text-[10px] text-orange-700 uppercase tracking-[0.2em] font-medium">Search</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Heart className="w-5 h-5 text-rose-600" />
            <span className="text-[10px] text-rose-600 uppercase tracking-[0.2em] font-medium">Saved</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <User className="w-5 h-5 text-orange-700" />
            <span className="text-[10px] text-orange-700 uppercase tracking-[0.2em] font-medium">Account</span>
          </div>
        </div>
      </div>
    </div>
  );

  const CatalogScreen = () => (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-amber-50/50 to-white">
      {/* Header - VIBRANT */}
      <div className="sticky top-0 z-10 bg-white/98 backdrop-blur-md border-b-2 border-orange-300 shadow-sm">
        <div className="flex items-center justify-between px-6 py-5">
          <button onClick={() => setCurrentScreen('home')}>
            <ChevronLeft className="w-6 h-6 text-neutral-900" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-rose-600 rounded-full"></div>
            <h2 className="text-lg font-serif bg-gradient-to-r from-neutral-900 to-black bg-clip-text text-transparent">
              Collection
            </h2>
            <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
          </div>
          <Search className="w-5 h-5 text-orange-700" />
        </div>
      </div>

      {/* Filter Pills - VIBRANT */}
      <div className="px-6 py-7 flex gap-3 overflow-x-auto no-scrollbar">
        <button className="px-7 py-3 bg-gradient-to-r from-neutral-900 to-black text-white text-xs uppercase tracking-[0.25em] rounded-full whitespace-nowrap shadow-lg font-bold">
          All
        </button>
        <button className="px-7 py-3 bg-white text-orange-700 text-xs uppercase tracking-[0.25em] rounded-full border-2 border-orange-400 whitespace-nowrap hover:border-rose-600 hover:text-rose-700 transition-all font-semibold">
          Bras
        </button>
        <button className="px-7 py-3 bg-white text-orange-700 text-xs uppercase tracking-[0.25em] rounded-full border-2 border-orange-400 whitespace-nowrap hover:border-rose-600 hover:text-rose-700 transition-all font-semibold">
          Shapers
        </button>
        <button className="px-7 py-3 bg-white text-orange-700 text-xs uppercase tracking-[0.25em] rounded-full border-2 border-orange-400 whitespace-nowrap hover:border-rose-600 hover:text-rose-700 transition-all font-semibold">
          Bodysuits
        </button>
      </div>

      {/* Product Grid - VIBRANT */}
      <div className="px-6 pb-28 grid grid-cols-2 gap-6">
        {products.map(product => (
          <div 
            key={product.id}
            onClick={() => setCurrentScreen('product')}
            className="cursor-pointer group relative"
          >
            {/* Decorative corner element - VIBRANT */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className={`${product.image} aspect-[3/4] rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-all border-2 border-orange-300 group-hover:border-rose-400`}>
              {/* Pattern overlay - VIBRANT */}
              <div className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity">
                <div className="absolute top-2 right-2 w-12 h-12 border-[2px] border-neutral-900 rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-10 h-10 border-[2px] border-rose-700 rounded-full"></div>
              </div>
              
              <p className="text-orange-600 text-xs font-bold">Image</p>
              
              {product.salePrice && (
                <div className="absolute top-3 right-3 px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-[10px] uppercase tracking-[0.2em] rounded-full shadow-xl font-bold">
                  Sale
                </div>
              )}
              <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-white/98 backdrop-blur-sm rounded-full shadow-md border-2 border-orange-300">
                <p className="text-[9px] text-neutral-900 uppercase tracking-[0.2em] font-bold">{product.category}</p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-serif text-neutral-900 leading-tight group-hover:text-rose-700 transition-colors">
                {product.name}
              </h4>
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  {product.salePrice && (
                    <p className="text-xs text-orange-600 line-through font-semibold">${product.salePrice}</p>
                  )}
                  <p className="text-lg font-serif bg-gradient-to-r from-neutral-900 to-black bg-clip-text text-transparent">
                    ${product.price}
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-rose-100 px-2 py-1 rounded-full border border-rose-300">
                  <Star className="w-3 h-3 fill-rose-700 text-rose-700" />
                  <span className="text-[10px] text-neutral-900 font-bold">{product.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProductScreen = () => {
    const product = products[0];
    return (
      <div className="h-full overflow-y-auto bg-white">
        {/* Header - VIBRANT */}
        <div className="sticky top-0 z-10 bg-white/98 backdrop-blur-md border-b-2 border-orange-300 shadow-sm">
          <div className="flex items-center justify-between px-6 py-5">
            <button onClick={() => setCurrentScreen('catalog')}>
              <ChevronLeft className="w-6 h-6 text-neutral-900" />
            </button>
            <div className="flex items-center gap-5">
              <Heart className="w-5 h-5 text-rose-600" />
              <ShoppingBag className="w-5 h-5 text-orange-700" />
            </div>
          </div>
        </div>

        {/* Product Images - VIBRANT */}
        <div className="relative">
          <div className={`${product.image} aspect-square flex items-center justify-center shadow-xl border-b-2 border-orange-300 relative`}>
            {/* Pattern overlay - VIBRANT */}
            <div className="absolute inset-0 opacity-[0.1]">
              <div className="absolute top-8 right-8 w-24 h-24 border-[4px] border-neutral-900 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-28 h-28 border-[4px] border-rose-700 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-[5px] border-orange-700 rounded-full"></div>
            </div>
            
            <p className="text-orange-600 font-bold">[ Swipeable Product Gallery ]</p>
          </div>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-neutral-900 rounded-full shadow-lg border-2 border-white"></div>
            <div className="w-2.5 h-2.5 bg-orange-400 rounded-full shadow-sm"></div>
            <div className="w-2.5 h-2.5 bg-orange-400 rounded-full shadow-sm"></div>
          </div>
        </div>

        {/* Product Info - VIBRANT */}
        <div className="px-6 py-10 space-y-7">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-1">
                <div className="w-14 h-[3px] bg-gradient-to-r from-rose-600 to-pink-600 rounded-full"></div>
                <div className="w-8 h-[2px] bg-orange-600 rounded-full"></div>
              </div>
              <p className="text-xs text-orange-700 uppercase tracking-[0.35em] font-bold">{product.category}</p>
            </div>
            
            <h1 className="text-5xl font-serif text-neutral-900 leading-[1.1]">{product.name}</h1>
            <p className="text-orange-700 leading-relaxed text-base font-medium">{product.subtitle}</p>
            
            {/* Rating - VIBRANT */}
            <div className="flex items-center gap-4 pt-3 pb-4 border-b-2 border-orange-200">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-rose-700 text-rose-700" />
                ))}
              </div>
              <span className="text-sm text-neutral-900 font-bold">{product.rating}</span>
              <span className="text-sm text-orange-600">•</span>
              <span className="text-sm text-orange-700 font-medium">847 reviews</span>
            </div>
          </div>

          {/* Price - VIBRANT */}
          <div className="flex items-center gap-5 py-6 border-b-2 border-orange-200">
            <p className="text-6xl font-serif bg-gradient-to-r from-neutral-900 to-black bg-clip-text text-transparent">
              ${product.price}
            </p>
            <div className="flex flex-col">
              <span className="text-sm text-neutral-900 font-bold">TTD</span>
              <span className="text-xs text-rose-700 font-bold">Free Shipping</span>
            </div>
          </div>

          {/* Size Selection - VIBRANT */}
          <div className="space-y-5">
            <p className="text-sm text-neutral-900 uppercase tracking-[0.25em] font-bold">Select Size</p>
            <div className="grid grid-cols-4 gap-3">
              {['XS', 'S', 'M', 'L'].map((size, idx) => (
                <button 
                  key={size} 
                  className={`py-4 text-sm font-bold border-2 rounded-2xl transition-all ${
                    idx === 2 
                      ? 'bg-gradient-to-r from-neutral-900 to-black text-white border-transparent shadow-xl' 
                      : 'text-orange-700 border-orange-400 hover:border-rose-600 hover:text-rose-700'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options - VIBRANT */}
          <div className="space-y-5">
            <p className="text-sm text-neutral-900 uppercase tracking-[0.25em] font-bold">Available Colors</p>
            <div className="flex gap-4">
              <button className="w-14 h-14 bg-gradient-to-br from-amber-300 to-orange-400 rounded-2xl shadow-lg ring-2 ring-orange-600 ring-offset-2 border-2 border-orange-500 relative">
                <div className="absolute -top-1 -right-1 w-3 h-3 border-2 border-orange-800 rounded-full"></div>
              </button>
              <button className="w-14 h-14 bg-gradient-to-br from-rose-300 to-pink-400 rounded-2xl shadow-md hover:ring-2 hover:ring-rose-600 hover:ring-offset-2 transition-all border-2 border-rose-300"></button>
              <button className="w-14 h-14 bg-gradient-to-br from-stone-400 to-neutral-500 rounded-2xl shadow-md hover:ring-2 hover:ring-stone-600 hover:ring-offset-2 transition-all border-2 border-stone-400"></button>
              <button className="w-14 h-14 bg-gradient-to-br from-neutral-800 to-black rounded-2xl shadow-md hover:ring-2 hover:ring-neutral-900 hover:ring-offset-2 transition-all"></button>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 pt-4">
            <h3 className="text-sm text-neutral-900 uppercase tracking-[0.25em] font-bold">Description</h3>
            <p className="text-orange-800 leading-relaxed text-base">
              Experience the perfect fusion of style, comfort, and functionality. Crafted with smooth, 
              high-quality fabric that gently sculpts your silhouette while providing ultimate support. 
              <span className="text-rose-700 font-bold"> Designed for all-day confidence and effortless elegance.</span>
            </p>
          </div>

          {/* Features - VIBRANT bullets */}
          <div className="space-y-4 pt-4">
            <h3 className="text-sm text-neutral-900 uppercase tracking-[0.25em] font-bold">Features</h3>
            <ul className="space-y-4 text-sm text-orange-800">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center shadow-md border-2 border-orange-500">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                </div>
                <span className="leading-relaxed">Seamless construction for invisible smoothing under any outfit</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center shadow-md border-2 border-rose-500">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                </div>
                <span className="leading-relaxed">Breathable, premium fabric blend for all-day comfort</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center shadow-md border-2 border-amber-400">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                </div>
                <span className="leading-relaxed">Targeted support zones that enhance your natural curves</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-neutral-800 to-black rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="leading-relaxed">Machine washable • Maintains shape wash after wash</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sticky Add to Cart - VIBRANT */}
        <div className="sticky bottom-0 bg-white border-t-2 border-orange-300 px-6 py-6 shadow-[0_-8px_24px_rgba(0,0,0,0.1)]">
          <button className="w-full py-5 bg-gradient-to-r from-neutral-900 via-black to-neutral-900 text-white text-sm uppercase tracking-[0.3em] rounded-full hover:from-black hover:to-black transition-all shadow-2xl hover:shadow-3xl font-bold relative overflow-hidden group">
            <span className="relative z-10">Add to Cart — ${product.price} TTD</span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-700/30 to-pink-700/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto h-screen bg-white shadow-2xl overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {/* Screen Selector - VIBRANT */}
      <div className="bg-gradient-to-r from-amber-200 via-orange-100 to-rose-100 px-4 py-2.5 flex gap-3 text-xs border-b-2 border-orange-300">
        <button 
          onClick={() => setCurrentScreen('splash')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${
            currentScreen === 'splash' 
              ? 'bg-gradient-to-r from-neutral-900 to-black text-white shadow-lg' 
              : 'text-orange-800 hover:bg-white/70'
          }`}
        >
          Splash
        </button>
        <button 
          onClick={() => setCurrentScreen('home')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${
            currentScreen === 'home' 
              ? 'bg-gradient-to-r from-neutral-900 to-black text-white shadow-lg' 
              : 'text-orange-800 hover:bg-white/70'
          }`}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentScreen('catalog')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${
            currentScreen === 'catalog' 
              ? 'bg-gradient-to-r from-neutral-900 to-black text-white shadow-lg' 
              : 'text-orange-800 hover:bg-white/70'
          }`}
        >
          Catalog
        </button>
        <button 
          onClick={() => setCurrentScreen('product')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${
            currentScreen === 'product' 
              ? 'bg-gradient-to-r from-neutral-900 to-black text-white shadow-lg' 
              : 'text-orange-800 hover:bg-white/70'
          }`}
        >
          Product
        </button>
      </div>

      {/* App Screens */}
      <div className="h-[calc(100vh-3.25rem)]">
        {currentScreen === 'splash' && <SplashScreen />}
        {currentScreen === 'home' && <HomeScreen />}
        {currentScreen === 'catalog' && <CatalogScreen />}
        {currentScreen === 'product' && <ProductScreen />}
      </div>
    </div>
  );
}