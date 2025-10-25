import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, User, ChevronLeft, Star } from 'lucide-react';

export default function SUSALuxuryApp() {
  const [currentScreen, setCurrentScreen] = useState('home');

  // Real SUSA products from the website
  const products = [
    {
      id: 1,
      name: "Ultimate Essential Strapless Bra",
      subtitle: "Minimizer Edition",
      price: 365,
      category: "Best Seller",
      image: "bg-gradient-to-br from-stone-200 to-stone-300",
      rating: 4.9
    },
    {
      id: 2,
      name: "Waterproof Breast Lift Pads",
      subtitle: "Reusable • Invisible Support",
      price: 95,
      salePrice: 165,
      category: "Essentials",
      image: "bg-gradient-to-br from-amber-100 to-stone-200",
      rating: 4.8
    },
    {
      id: 3,
      name: "High Waisted Core Control Shaper",
      subtitle: "Seamless Panty Collection",
      price: 272,
      category: "Top Rated",
      image: "bg-gradient-to-br from-stone-300 to-stone-400",
      rating: 5.0
    },
    {
      id: 4,
      name: "Back Smoothing Solutions Bra",
      subtitle: "Ultimate Lift & Support",
      price: 408,
      category: "Signature",
      image: "bg-gradient-to-br from-rose-100 to-stone-200",
      rating: 4.9
    },
    {
      id: 5,
      name: "Sculpting Bodysuit",
      subtitle: "Full Coverage Shaper",
      price: 442,
      category: "New Arrival",
      image: "bg-gradient-to-br from-stone-200 to-neutral-300",
      rating: 4.7
    },
    {
      id: 6,
      name: "Comfort Shaper Collection",
      subtitle: "Everyday Essentials",
      price: 325,
      category: "Featured",
      image: "bg-gradient-to-br from-amber-50 to-stone-200",
      rating: 4.8
    }
  ];

  // Screen Components
  const SplashScreen = () => (
    <div className="h-full bg-gradient-to-b from-stone-50 via-stone-100 to-stone-200 flex flex-col items-center justify-center p-8">
      <div className="space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-5xl font-serif text-stone-900 tracking-tight">SUSA</h1>
          <p className="text-sm text-stone-600 uppercase tracking-[0.3em]">Shapewear</p>
        </div>
        <div className="w-16 h-[1px] bg-stone-400 mx-auto"></div>
        <p className="text-stone-700 text-sm font-light leading-relaxed max-w-xs mx-auto">
          Sculpting elegance.<br/>Redefining confidence.
        </p>
      </div>
      <button 
        onClick={() => setCurrentScreen('home')}
        className="absolute bottom-12 px-12 py-3 bg-stone-900 text-white text-xs uppercase tracking-widest rounded-full hover:bg-stone-800 transition-colors"
      >
        Enter
      </button>
    </div>
  );

  const HomeScreen = () => (
    <div className="h-full overflow-y-auto bg-stone-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-serif text-stone-900">SUSA</h1>
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-stone-600" />
            <Heart className="w-5 h-5 text-stone-600" />
            <ShoppingBag className="w-5 h-5 text-stone-600" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300 flex items-end">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-stone-400 text-sm">[ Editorial Hero Image ]</p>
        </div>
        <div className="relative z-10 p-8 w-full bg-gradient-to-t from-black/40 to-transparent">
          <p className="text-white/90 text-xs uppercase tracking-[0.3em] mb-2">New Collection</p>
          <h2 className="text-4xl font-serif text-white mb-4">Sculpting<br/>Elegance</h2>
          <button 
            onClick={() => setCurrentScreen('catalog')}
            className="px-8 py-2.5 bg-white text-stone-900 text-xs uppercase tracking-wider rounded-full hover:bg-stone-100 transition-colors"
          >
            Explore
          </button>
        </div>
      </div>

      {/* Featured Category */}
      <div className="px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-serif text-stone-900 mb-1">Best Sellers</h3>
            <p className="text-sm text-stone-600">Curated favorites</p>
          </div>
          <button 
            onClick={() => setCurrentScreen('catalog')}
            className="text-xs text-stone-600 uppercase tracking-wider hover:text-stone-900"
          >
            View All
          </button>
        </div>

        {/* Product Cards - Horizontal Scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
          {products.slice(0, 3).map(product => (
            <div 
              key={product.id}
              onClick={() => setCurrentScreen('product')}
              className="flex-shrink-0 w-64 cursor-pointer"
            >
              <div className={`${product.image} aspect-[3/4] rounded-2xl mb-4 flex items-center justify-center`}>
                <p className="text-stone-500 text-xs">Product Image</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] text-stone-500 uppercase tracking-wider">{product.category}</p>
                <h4 className="text-base font-serif text-stone-900 leading-tight">{product.name}</h4>
                <p className="text-sm text-stone-600 font-light">{product.subtitle}</p>
                <p className="text-lg font-serif text-stone-900">${product.price} TTD</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary CTA */}
      <div className="mx-6 mb-12 bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 text-white">
        <p className="text-xs uppercase tracking-[0.3em] mb-3 text-white/70">Experience</p>
        <h3 className="text-2xl font-serif mb-4">Say Goodbye to<br/>Back Rolls</h3>
        <p className="text-sm text-white/80 mb-6 leading-relaxed">
          Ultimate back-smoothing solutions with unparalleled lift and support.
        </p>
        <button className="px-8 py-2.5 bg-white text-stone-900 text-xs uppercase tracking-wider rounded-full hover:bg-stone-100 transition-colors">
          Shop Now
        </button>
      </div>

      {/* Bottom Nav */}
      <div className="sticky bottom-0 bg-white border-t border-stone-200 px-6 py-4">
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center gap-1">
            <div className="w-1.5 h-1.5 bg-stone-900 rounded-full"></div>
            <span className="text-[10px] text-stone-900 uppercase tracking-wider">Home</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Search className="w-5 h-5 text-stone-400" />
            <span className="text-[10px] text-stone-400 uppercase tracking-wider">Search</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Heart className="w-5 h-5 text-stone-400" />
            <span className="text-[10px] text-stone-400 uppercase tracking-wider">Saved</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <User className="w-5 h-5 text-stone-400" />
            <span className="text-[10px] text-stone-400 uppercase tracking-wider">Account</span>
          </div>
        </div>
      </div>
    </div>
  );

  const CatalogScreen = () => (
    <div className="h-full overflow-y-auto bg-stone-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="flex items-center justify-between px-6 py-4">
          <button onClick={() => setCurrentScreen('home')}>
            <ChevronLeft className="w-6 h-6 text-stone-900" />
          </button>
          <h2 className="text-lg font-serif text-stone-900">Collection</h2>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="px-6 py-6 flex gap-2 overflow-x-auto no-scrollbar">
        <button className="px-5 py-2 bg-stone-900 text-white text-xs uppercase tracking-wider rounded-full whitespace-nowrap">
          All
        </button>
        <button className="px-5 py-2 bg-white text-stone-600 text-xs uppercase tracking-wider rounded-full border border-stone-200 whitespace-nowrap hover:border-stone-900">
          Bras
        </button>
        <button className="px-5 py-2 bg-white text-stone-600 text-xs uppercase tracking-wider rounded-full border border-stone-200 whitespace-nowrap hover:border-stone-900">
          Shapers
        </button>
        <button className="px-5 py-2 bg-white text-stone-600 text-xs uppercase tracking-wider rounded-full border border-stone-200 whitespace-nowrap hover:border-stone-900">
          Bodysuits
        </button>
      </div>

      {/* Product Grid - 2 columns max for luxury feel */}
      <div className="px-6 pb-24 grid grid-cols-2 gap-6">
        {products.map(product => (
          <div 
            key={product.id}
            onClick={() => setCurrentScreen('product')}
            className="cursor-pointer"
          >
            <div className={`${product.image} aspect-[3/4] rounded-2xl mb-3 flex items-center justify-center relative`}>
              <p className="text-stone-500 text-xs">Image</p>
              {product.salePrice && (
                <div className="absolute top-3 right-3 px-3 py-1 bg-stone-900 text-white text-[10px] uppercase tracking-wider rounded-full">
                  Sale
                </div>
              )}
            </div>
            <div className="space-y-1.5">
              <p className="text-[9px] text-stone-500 uppercase tracking-wider">{product.category}</p>
              <h4 className="text-sm font-serif text-stone-900 leading-tight">{product.name}</h4>
              <div className="flex items-center gap-2">
                {product.salePrice && (
                  <p className="text-xs text-stone-400 line-through">${product.salePrice}</p>
                )}
                <p className="text-base font-serif text-stone-900">${product.price}</p>
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
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => setCurrentScreen('catalog')}>
              <ChevronLeft className="w-6 h-6 text-stone-900" />
            </button>
            <div className="flex items-center gap-4">
              <Heart className="w-5 h-5 text-stone-600" />
              <ShoppingBag className="w-5 h-5 text-stone-600" />
            </div>
          </div>
        </div>

        {/* Product Images - Swipeable Gallery */}
        <div className="relative">
          <div className={`${product.image} aspect-square flex items-center justify-center`}>
            <p className="text-stone-400">[ Swipeable Product Gallery ]</p>
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-stone-900 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-stone-300 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-stone-300 rounded-full"></div>
          </div>
        </div>

        {/* Product Info */}
        <div className="px-6 py-8 space-y-6">
          <div className="space-y-3">
            <p className="text-xs text-stone-500 uppercase tracking-[0.3em]">{product.category}</p>
            <h1 className="text-3xl font-serif text-stone-900 leading-tight">{product.name}</h1>
            <p className="text-stone-600 leading-relaxed">{product.subtitle}</p>
            
            {/* Rating */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-stone-900 text-stone-900" />
                ))}
              </div>
              <span className="text-sm text-stone-600">{product.rating} • 847 reviews</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 pt-4 pb-6 border-b border-stone-200">
            <p className="text-4xl font-serif text-stone-900">${product.price}</p>
            <span className="text-sm text-stone-600">TTD</span>
          </div>

          {/* Size Selection */}
          <div className="space-y-3">
            <p className="text-sm text-stone-900 uppercase tracking-wider">Select Size</p>
            <div className="grid grid-cols-4 gap-2">
              {['XS', 'S', 'M', 'L'].map(size => (
                <button key={size} className="py-3 text-sm text-stone-600 border border-stone-200 rounded-lg hover:border-stone-900 hover:text-stone-900 transition-colors">
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3 pt-4">
            <h3 className="text-sm text-stone-900 uppercase tracking-wider">Description</h3>
            <p className="text-stone-600 leading-relaxed text-sm">
              Experience the perfect fusion of style, comfort, and functionality. Crafted with smooth, 
              high-quality fabric that gently sculpts your silhouette while providing ultimate support. 
              Designed for all-day confidence and effortless elegance.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3 pt-4">
            <h3 className="text-sm text-stone-900 uppercase tracking-wider">Features</h3>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-stone-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Seamless construction for invisible smoothing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-stone-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Breathable, premium fabric blend</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-stone-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>All-day comfort with targeted support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-stone-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Machine washable • Maintains shape</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sticky Add to Cart */}
        <div className="sticky bottom-0 bg-white border-t border-stone-200 px-6 py-4">
          <button className="w-full py-4 bg-stone-900 text-white text-sm uppercase tracking-widest rounded-full hover:bg-stone-800 transition-colors">
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
      
      {/* Screen Selector (for demo) */}
      <div className="bg-stone-100 px-4 py-2 flex gap-2 text-xs border-b border-stone-200">
        <button 
          onClick={() => setCurrentScreen('splash')}
          className={`px-3 py-1 rounded ${currentScreen === 'splash' ? 'bg-stone-900 text-white' : 'text-stone-600'}`}
        >
          Splash
        </button>
        <button 
          onClick={() => setCurrentScreen('home')}
          className={`px-3 py-1 rounded ${currentScreen === 'home' ? 'bg-stone-900 text-white' : 'text-stone-600'}`}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentScreen('catalog')}
          className={`px-3 py-1 rounded ${currentScreen === 'catalog' ? 'bg-stone-900 text-white' : 'text-stone-600'}`}
        >
          Catalog
        </button>
        <button 
          onClick={() => setCurrentScreen('product')}
          className={`px-3 py-1 rounded ${currentScreen === 'product' ? 'bg-stone-900 text-white' : 'text-stone-600'}`}
        >
          Product
        </button>
      </div>

      {/* App Screens */}
      <div className="h-[calc(100vh-2.5rem)]">
        {currentScreen === 'splash' && <SplashScreen />}
        {currentScreen === 'home' && <HomeScreen />}
        {currentScreen === 'catalog' && <CatalogScreen />}
        {currentScreen === 'product' && <ProductScreen />}
      </div>
    </div>
  );
}