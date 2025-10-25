import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, User, ChevronLeft, Star, Sparkles } from 'lucide-react';

export default function SUSAAuthenticFusion() {
  const [currentScreen, setCurrentScreen] = useState('home');

  // SUSA products with AUTHENTIC brand colors (nudes, beiges, soft pinks)
  const products = [
    {
      id: 1,
      name: "Ultimate Essential Strapless Bra",
      subtitle: "Minimizer Edition",
      price: 365,
      category: "Best Seller",
      image: "bg-gradient-to-br from-amber-50 via-stone-100 to-neutral-100",
      accentColor: "from-neutral-800 to-stone-900",
      rating: 4.9
    },
    {
      id: 2,
      name: "Waterproof Breast Lift Pads",
      subtitle: "Reusable • Invisible Support",
      price: 95,
      salePrice: 165,
      category: "Essentials",
      image: "bg-gradient-to-br from-rose-50 via-pink-50 to-stone-50",
      accentColor: "from-rose-900 to-pink-900",
      rating: 4.8
    },
    {
      id: 3,
      name: "High Waisted Core Control Shaper",
      subtitle: "Seamless Panty Collection",
      price: 272,
      category: "Top Rated",
      image: "bg-gradient-to-br from-stone-100 via-neutral-100 to-zinc-100",
      accentColor: "from-stone-800 to-neutral-900",
      rating: 5.0
    },
    {
      id: 4,
      name: "Back Smoothing Solutions Bra",
      subtitle: "Ultimate Lift & Support",
      price: 408,
      category: "Signature",
      image: "bg-gradient-to-br from-amber-100 via-orange-50 to-stone-100",
      accentColor: "from-amber-900 to-orange-900",
      rating: 4.9
    },
    {
      id: 5,
      name: "Sculpting Bodysuit",
      subtitle: "Full Coverage Shaper",
      price: 442,
      category: "New Arrival",
      image: "bg-gradient-to-br from-neutral-100 via-stone-100 to-zinc-100",
      accentColor: "from-neutral-800 to-zinc-900",
      rating: 4.7
    },
    {
      id: 6,
      name: "Comfort Shaper Collection",
      subtitle: "Everyday Essentials",
      price: 325,
      category: "Featured",
      image: "bg-gradient-to-br from-pink-50 via-rose-50 to-stone-50",
      accentColor: "from-pink-900 to-rose-900",
      rating: 4.8
    }
  ];

  const SplashScreen = () => (
    <div className="h-full bg-gradient-to-br from-stone-50 via-amber-50 to-rose-50 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Decorative circles - South African inspired but in SUSA colors */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-stone-300/30 to-neutral-300/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 left-10 w-40 h-40 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-2xl"></div>
      
      <div className="space-y-8 text-center relative z-10">
        <div className="space-y-3">
          <h1 className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-stone-800 via-neutral-800 to-stone-900 tracking-tight">
            SUSA
          </h1>
          <p className="text-sm text-stone-700 uppercase tracking-[0.3em] font-light">Shapewear</p>
        </div>
        
        <div className="flex items-center gap-3 justify-center">
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          <Sparkles className="w-4 h-4 text-rose-400" />
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
        </div>
        
        <p className="text-stone-700 text-sm font-light leading-relaxed max-w-xs mx-auto">
          Sculpting elegance.<br/>
          <span className="text-rose-700 font-medium">Celebrating confidence.</span>
        </p>
      </div>
      
      <button 
        onClick={() => setCurrentScreen('home')}
        className="absolute bottom-12 px-12 py-3.5 bg-gradient-to-r from-stone-800 to-neutral-900 text-white text-xs uppercase tracking-widest rounded-full hover:from-stone-900 hover:to-black transition-all shadow-lg hover:shadow-xl"
      >
        Enter
      </button>
    </div>
  );

  const HomeScreen = () => (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-stone-50/50 to-white">
      {/* Header with gradient */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-serif bg-gradient-to-r from-stone-800 to-neutral-900 bg-clip-text text-transparent">
            SUSA
          </h1>
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-stone-700" />
            <Heart className="w-5 h-5 text-rose-600" />
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-stone-700" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - SUSA colors but vibrant layout */}
      <div className="relative h-[520px] bg-gradient-to-br from-stone-200 via-neutral-200 to-rose-100 flex items-end overflow-hidden">
        {/* Decorative pattern overlay - South African energy */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-24 h-24 border-4 border-stone-800 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border-4 border-stone-800 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 border-4 border-stone-800 rounded-full"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-stone-400 text-sm">[ Editorial Hero Image ]</p>
        </div>
        
        <div className="relative z-10 p-8 w-full bg-gradient-to-t from-black/50 via-black/30 to-transparent">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-rose-300" />
            <p className="text-stone-100 text-xs uppercase tracking-[0.3em]">New Collection</p>
          </div>
          <h2 className="text-5xl font-serif text-white mb-4 leading-tight">
            Sculpting<br/>
            <span className="text-rose-200">Elegance</span>
          </h2>
          <p className="text-white/90 mb-6 text-sm leading-relaxed max-w-xs">
            Experience the perfect fusion of comfort and confidence
          </p>
          <button 
            onClick={() => setCurrentScreen('catalog')}
            className="px-10 py-3 bg-white text-stone-900 text-xs uppercase tracking-wider rounded-full hover:bg-stone-50 transition-all shadow-lg font-medium"
          >
            Explore Collection
          </button>
        </div>
      </div>

      {/* Featured Category */}
      <div className="px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-[3px] bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
              <h3 className="text-2xl font-serif bg-gradient-to-r from-stone-800 to-neutral-900 bg-clip-text text-transparent">
                Best Sellers
              </h3>
            </div>
            <p className="text-sm text-stone-600">Curated with love</p>
          </div>
          <button 
            onClick={() => setCurrentScreen('catalog')}
            className="text-xs text-rose-600 uppercase tracking-wider hover:text-rose-800 font-medium"
          >
            View All →
          </button>
        </div>

        {/* Product Cards - Vibrant layout, SUSA colors */}
        <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
          {products.slice(0, 3).map(product => (
            <div 
              key={product.id}
              onClick={() => setCurrentScreen('product')}
              className="flex-shrink-0 w-72 cursor-pointer group"
            >
              <div className={`${product.image} aspect-[3/4] rounded-3xl mb-4 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-xl transition-all`}>
                <p className="text-stone-400 text-xs font-medium">Product Image</p>
                <div className="absolute top-3 right-3 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-md">
                  <p className="text-[10px] text-stone-800 uppercase tracking-wider font-medium">{product.category}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-serif text-stone-900 leading-tight group-hover:text-rose-700 transition-colors">
                  {product.name}
                </h4>
                <p className="text-sm text-stone-600 font-light">{product.subtitle}</p>
                <div className="flex items-center justify-between pt-1">
                  <p className="text-2xl font-serif bg-gradient-to-r from-stone-800 to-neutral-900 bg-clip-text text-transparent">
                    ${product.price}
                  </p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-rose-500 text-rose-500" />
                    <span className="text-xs text-stone-700 font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary CTA - SUSA colors, vibrant energy */}
      <div className="mx-6 mb-12 bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/20 rounded-full -ml-20 -mb-20"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-rose-300" />
            <p className="text-xs uppercase tracking-[0.3em] text-stone-300">Experience</p>
          </div>
          <h3 className="text-3xl font-serif mb-4 leading-tight">
            Say Goodbye to<br/>
            <span className="text-rose-300">Back Rolls</span>
          </h3>
          <p className="text-sm text-stone-300 mb-6 leading-relaxed max-w-sm">
            Ultimate back-smoothing solutions with unparalleled lift and support that celebrates your curves.
          </p>
          <button className="px-8 py-3 bg-white text-stone-900 text-xs uppercase tracking-wider rounded-full hover:bg-stone-100 transition-all shadow-lg font-medium">
            Shop Collection
          </button>
        </div>
      </div>

      {/* Color Story Section - SUSA palette */}
      <div className="mx-6 mb-12 grid grid-cols-3 gap-4">
        <div className="aspect-square bg-gradient-to-br from-stone-300 to-neutral-400 rounded-2xl flex items-center justify-center shadow-lg">
          <p className="text-white text-xs font-medium">Nude</p>
        </div>
        <div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-300 rounded-2xl flex items-center justify-center shadow-lg">
          <p className="text-stone-800 text-xs font-medium">Blush</p>
        </div>
        <div className="aspect-square bg-gradient-to-br from-stone-800 to-neutral-900 rounded-2xl flex items-center justify-center shadow-lg">
          <p className="text-white text-xs font-medium">Black</p>
        </div>
      </div>

      {/* Bottom Nav - Vibrant */}
      <div className="sticky bottom-0 bg-white/95 backdrop-blur-sm border-t border-stone-200 px-6 py-4">
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>
            <span className="text-[10px] text-stone-900 uppercase tracking-wider font-medium">Home</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Search className="w-5 h-5 text-stone-600" />
            <span className="text-[10px] text-stone-600 uppercase tracking-wider">Search</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Heart className="w-5 h-5 text-rose-500" />
            <span className="text-[10px] text-rose-500 uppercase tracking-wider">Saved</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <User className="w-5 h-5 text-stone-600" />
            <span className="text-[10px] text-stone-600 uppercase tracking-wider">Account</span>
          </div>
        </div>
      </div>
    </div>
  );

  const CatalogScreen = () => (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-stone-50/30 to-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="flex items-center justify-between px-6 py-4">
          <button onClick={() => setCurrentScreen('home')}>
            <ChevronLeft className="w-6 h-6 text-stone-900" />
          </button>
          <h2 className="text-lg font-serif bg-gradient-to-r from-stone-800 to-neutral-900 bg-clip-text text-transparent">
            Collection
          </h2>
          <Search className="w-5 h-5 text-stone-700" />
        </div>
      </div>

      {/* Filter Pills - Vibrant style, SUSA colors */}
      <div className="px-6 py-6 flex gap-3 overflow-x-auto no-scrollbar">
        <button className="px-6 py-2.5 bg-gradient-to-r from-stone-800 to-neutral-900 text-white text-xs uppercase tracking-wider rounded-full whitespace-nowrap shadow-md font-medium">
          All
        </button>
        <button className="px-6 py-2.5 bg-white text-stone-700 text-xs uppercase tracking-wider rounded-full border-2 border-stone-200 whitespace-nowrap hover:border-rose-400 transition-all font-medium">
          Bras
        </button>
        <button className="px-6 py-2.5 bg-white text-stone-700 text-xs uppercase tracking-wider rounded-full border-2 border-stone-200 whitespace-nowrap hover:border-rose-400 transition-all font-medium">
          Shapers
        </button>
        <button className="px-6 py-2.5 bg-white text-stone-700 text-xs uppercase tracking-wider rounded-full border-2 border-stone-200 whitespace-nowrap hover:border-rose-400 transition-all font-medium">
          Bodysuits
        </button>
      </div>

      {/* Product Grid - 2 columns with vibrant layout */}
      <div className="px-6 pb-24 grid grid-cols-2 gap-5">
        {products.map(product => (
          <div 
            key={product.id}
            onClick={() => setCurrentScreen('product')}
            className="cursor-pointer group"
          >
            <div className={`${product.image} aspect-[3/4] rounded-2xl mb-3 flex items-center justify-center relative overflow-hidden shadow-md group-hover:shadow-xl transition-all`}>
              <p className="text-stone-400 text-xs font-medium">Image</p>
              {product.salePrice && (
                <div className="absolute top-3 right-3 px-3 py-1.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] uppercase tracking-wider rounded-full shadow-lg font-medium">
                  Sale
                </div>
              )}
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full shadow-sm">
                <p className="text-[9px] text-stone-800 uppercase tracking-wider font-medium">{product.category}</p>
              </div>
            </div>
            <div className="space-y-1.5">
              <h4 className="text-sm font-serif text-stone-900 leading-tight group-hover:text-rose-700 transition-colors">
                {product.name}
              </h4>
              <div className="flex items-center justify-between pt-0.5">
                <div className="flex items-center gap-2">
                  {product.salePrice && (
                    <p className="text-xs text-stone-400 line-through">${product.salePrice}</p>
                  )}
                  <p className="text-base font-serif bg-gradient-to-r from-stone-800 to-neutral-900 bg-clip-text text-transparent">
                    ${product.price}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-rose-500 text-rose-500" />
                  <span className="text-xs text-stone-700">{product.rating}</span>
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
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-stone-200">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => setCurrentScreen('catalog')}>
              <ChevronLeft className="w-6 h-6 text-stone-900" />
            </button>
            <div className="flex items-center gap-4">
              <Heart className="w-5 h-5 text-rose-500" />
              <ShoppingBag className="w-5 h-5 text-stone-700" />
            </div>
          </div>
        </div>

        {/* Product Images - Vibrant Gallery, SUSA colors */}
        <div className="relative">
          <div className={`${product.image} aspect-square flex items-center justify-center shadow-lg`}>
            <p className="text-stone-400 font-medium">[ Swipeable Product Gallery ]</p>
          </div>
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            <div className="w-2 h-2 bg-stone-900 rounded-full shadow-lg"></div>
            <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
            <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
          </div>
        </div>

        {/* Product Info */}
        <div className="px-6 py-8 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-12 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
              <p className="text-xs text-stone-700 uppercase tracking-[0.3em] font-medium">{product.category}</p>
            </div>
            <h1 className="text-4xl font-serif text-stone-900 leading-tight">{product.name}</h1>
            <p className="text-stone-600 leading-relaxed">{product.subtitle}</p>
            
            {/* Rating - Vibrant */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-rose-500 text-rose-500" />
                ))}
              </div>
              <span className="text-sm text-stone-700 font-medium">{product.rating} • 847 reviews</span>
            </div>
          </div>

          {/* Price - Gradient */}
          <div className="flex items-center gap-4 pt-4 pb-6 border-b-2 border-stone-200">
            <p className="text-5xl font-serif bg-gradient-to-r from-stone-800 to-neutral-900 bg-clip-text text-transparent">
              ${product.price}
            </p>
            <span className="text-sm text-stone-600 font-medium">TTD</span>
          </div>

          {/* Size Selection - Colorful style */}
          <div className="space-y-4">
            <p className="text-sm text-stone-900 uppercase tracking-wider font-medium">Select Size</p>
            <div className="grid grid-cols-4 gap-3">
              {['XS', 'S', 'M', 'L'].map((size, idx) => (
                <button 
                  key={size} 
                  className={`py-3.5 text-sm font-medium border-2 rounded-xl transition-all ${
                    idx === 2 
                      ? 'bg-gradient-to-r from-stone-800 to-neutral-900 text-white border-transparent shadow-lg' 
                      : 'text-stone-700 border-stone-200 hover:border-rose-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options - SUSA palette */}
          <div className="space-y-4">
            <p className="text-sm text-stone-900 uppercase tracking-wider font-medium">Available Colors</p>
            <div className="flex gap-3">
              <button className="w-12 h-12 bg-gradient-to-br from-amber-100 to-stone-200 rounded-xl shadow-md ring-2 ring-stone-400 ring-offset-2 border border-stone-300"></button>
              <button className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-200 rounded-xl shadow-md hover:ring-2 hover:ring-rose-400 hover:ring-offset-2 transition-all border border-rose-200"></button>
              <button className="w-12 h-12 bg-gradient-to-br from-stone-200 to-neutral-300 rounded-xl shadow-md hover:ring-2 hover:ring-stone-400 hover:ring-offset-2 transition-all border border-stone-300"></button>
              <button className="w-12 h-12 bg-gradient-to-br from-stone-800 to-neutral-900 rounded-xl shadow-md hover:ring-2 hover:ring-stone-900 hover:ring-offset-2 transition-all"></button>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3 pt-4">
            <h3 className="text-sm text-stone-900 uppercase tracking-wider font-medium">Description</h3>
            <p className="text-stone-700 leading-relaxed text-sm">
              Experience the perfect fusion of style, comfort, and functionality. Crafted with smooth, 
              high-quality fabric that gently sculpts your silhouette while providing ultimate support. 
              <span className="text-rose-700 font-medium"> Designed for all-day confidence and effortless elegance.</span>
            </p>
          </div>

          {/* Features - With colorful icons */}
          <div className="space-y-3 pt-4">
            <h3 className="text-sm text-stone-900 uppercase tracking-wider font-medium">Features</h3>
            <ul className="space-y-3 text-sm text-stone-700">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-stone-300 to-neutral-400 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 bg-stone-800 rounded-full"></div>
                </div>
                <span>Seamless construction for invisible smoothing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 bg-rose-700 rounded-full"></div>
                </div>
                <span>Breathable, premium fabric blend</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                </div>
                <span>All-day comfort with targeted support</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-stone-800 to-neutral-900 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Machine washable • Maintains shape</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sticky Add to Cart - SUSA colors, vibrant style */}
        <div className="sticky bottom-0 bg-white border-t-2 border-stone-200 px-6 py-5">
          <button className="w-full py-4 bg-gradient-to-r from-stone-800 via-neutral-900 to-zinc-900 text-white text-sm uppercase tracking-widest rounded-full hover:from-stone-900 hover:via-black hover:to-black transition-all shadow-lg hover:shadow-xl font-medium">
            Add to Cart — ${product.price} TTD
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
      
      {/* Screen Selector */}
      <div className="bg-gradient-to-r from-stone-100 via-rose-50 to-pink-50 px-4 py-2 flex gap-2 text-xs border-b-2 border-stone-200">
        <button 
          onClick={() => setCurrentScreen('splash')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            currentScreen === 'splash' 
              ? 'bg-gradient-to-r from-stone-800 to-neutral-900 text-white shadow-md' 
              : 'text-stone-700 hover:bg-white/50'
          }`}
        >
          Splash
        </button>
        <button 
          onClick={() => setCurrentScreen('home')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            currentScreen === 'home' 
              ? 'bg-gradient-to-r from-stone-800 to-neutral-900 text-white shadow-md' 
              : 'text-stone-700 hover:bg-white/50'
          }`}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentScreen('catalog')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            currentScreen === 'catalog' 
              ? 'bg-gradient-to-r from-stone-800 to-neutral-900 text-white shadow-md' 
              : 'text-stone-700 hover:bg-white/50'
          }`}
        >
          Catalog
        </button>
        <button 
          onClick={() => setCurrentScreen('product')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            currentScreen === 'product' 
              ? 'bg-gradient-to-r from-stone-800 to-neutral-900 text-white shadow-md' 
              : 'text-stone-700 hover:bg-white/50'
          }`}
        >
          Product
        </button>
      </div>

      {/* App Screens */}
      <div className="h-[calc(100vh-3rem)]">
        {currentScreen === 'splash' && <SplashScreen />}
        {currentScreen === 'home' && <HomeScreen />}
        {currentScreen === 'catalog' && <CatalogScreen />}
        {currentScreen === 'product' && <ProductScreen />}
      </div>
    </div>
  );
}