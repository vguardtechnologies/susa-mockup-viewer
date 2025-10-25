import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, User, ChevronLeft, Star, Sparkles } from 'lucide-react';

export default function SUSASouthAfricanFusion() {
  const [currentScreen, setCurrentScreen] = useState('home');

  // SUSA products with South African color energy
  const products = [
    {
      id: 1,
      name: "Ultimate Essential Strapless Bra",
      subtitle: "Minimizer Edition",
      price: 365,
      category: "Best Seller",
      image: "bg-gradient-to-br from-amber-400 via-orange-300 to-amber-200",
      accentColor: "from-amber-600 to-orange-700",
      rating: 4.9
    },
    {
      id: 2,
      name: "Waterproof Breast Lift Pads",
      subtitle: "Reusable • Invisible Support",
      price: 95,
      salePrice: 165,
      category: "Essentials",
      image: "bg-gradient-to-br from-emerald-400 via-teal-300 to-cyan-400",
      accentColor: "from-emerald-600 to-teal-700",
      rating: 4.8
    },
    {
      id: 3,
      name: "High Waisted Core Control Shaper",
      subtitle: "Seamless Panty Collection",
      price: 272,
      category: "Top Rated",
      image: "bg-gradient-to-br from-rose-400 via-pink-300 to-rose-300",
      accentColor: "from-rose-600 to-pink-700",
      rating: 5.0
    },
    {
      id: 4,
      name: "Back Smoothing Solutions Bra",
      subtitle: "Ultimate Lift & Support",
      price: 408,
      category: "Signature",
      image: "bg-gradient-to-br from-violet-400 via-purple-300 to-fuchsia-300",
      accentColor: "from-violet-600 to-purple-700",
      rating: 4.9
    },
    {
      id: 5,
      name: "Sculpting Bodysuit",
      subtitle: "Full Coverage Shaper",
      price: 442,
      category: "New Arrival",
      image: "bg-gradient-to-br from-yellow-400 via-amber-300 to-orange-300",
      accentColor: "from-yellow-600 to-amber-700",
      rating: 4.7
    },
    {
      id: 6,
      name: "Comfort Shaper Collection",
      subtitle: "Everyday Essentials",
      price: 325,
      category: "Featured",
      image: "bg-gradient-to-br from-blue-400 via-cyan-300 to-teal-300",
      accentColor: "from-blue-600 to-cyan-700",
      rating: 4.8
    }
  ];

  const SplashScreen = () => (
    <div className="h-full bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Decorative circles - South African inspired */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 left-10 w-40 h-40 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
      
      <div className="space-y-8 text-center relative z-10">
        <div className="space-y-3">
          <h1 className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 tracking-tight">
            SUSA
          </h1>
          <p className="text-sm text-amber-900 uppercase tracking-[0.3em] font-light">Shapewear</p>
        </div>
        
        <div className="flex items-center gap-3 justify-center">
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          <Sparkles className="w-4 h-4 text-amber-600" />
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        </div>
        
        <p className="text-amber-900 text-sm font-light leading-relaxed max-w-xs mx-auto">
          Sculpting elegance.<br/>
          <span className="text-orange-700 font-medium">Celebrating confidence.</span>
        </p>
      </div>
      
      <button 
        onClick={() => setCurrentScreen('home')}
        className="absolute bottom-12 px-12 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs uppercase tracking-widest rounded-full hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
      >
        Enter
      </button>
    </div>
  );

  const HomeScreen = () => (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-amber-50/50 to-white">
      {/* Header with gradient */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-amber-200/50">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-serif bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            SUSA
          </h1>
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-amber-700" />
            <Heart className="w-5 h-5 text-rose-600" />
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-amber-700" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Vibrant */}
      <div className="relative h-[520px] bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 flex items-end overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-24 h-24 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white/40 text-sm">[ Editorial Hero Image ]</p>
        </div>
        
        <div className="relative z-10 p-8 w-full bg-gradient-to-t from-black/50 via-black/30 to-transparent">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <p className="text-amber-100 text-xs uppercase tracking-[0.3em]">New Collection</p>
          </div>
          <h2 className="text-5xl font-serif text-white mb-4 leading-tight">
            Sculpting<br/>
            <span className="text-amber-200">Elegance</span>
          </h2>
          <p className="text-white/90 mb-6 text-sm leading-relaxed max-w-xs">
            Experience the perfect fusion of comfort and confidence
          </p>
          <button 
            onClick={() => setCurrentScreen('catalog')}
            className="px-10 py-3 bg-white text-amber-900 text-xs uppercase tracking-wider rounded-full hover:bg-amber-50 transition-all shadow-lg font-medium"
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
              <div className="w-8 h-[3px] bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
              <h3 className="text-2xl font-serif bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent">
                Best Sellers
              </h3>
            </div>
            <p className="text-sm text-amber-700">Curated with love</p>
          </div>
          <button 
            onClick={() => setCurrentScreen('catalog')}
            className="text-xs text-orange-600 uppercase tracking-wider hover:text-orange-800 font-medium"
          >
            View All →
          </button>
        </div>

        {/* Product Cards - Vibrant */}
        <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
          {products.slice(0, 3).map(product => (
            <div 
              key={product.id}
              onClick={() => setCurrentScreen('product')}
              className="flex-shrink-0 w-72 cursor-pointer group"
            >
              <div className={`${product.image} aspect-[3/4] rounded-3xl mb-4 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-xl transition-all`}>
                <p className="text-white/60 text-xs font-medium">Product Image</p>
                <div className="absolute top-3 right-3 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full">
                  <p className="text-[10px] text-amber-900 uppercase tracking-wider font-medium">{product.category}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-serif text-amber-900 leading-tight group-hover:text-orange-700 transition-colors">
                  {product.name}
                </h4>
                <p className="text-sm text-amber-700 font-light">{product.subtitle}</p>
                <div className="flex items-center justify-between pt-1">
                  <p className="text-2xl font-serif bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent">
                    ${product.price}
                  </p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span className="text-xs text-amber-700 font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary CTA - Rich colors */}
      <div className="mx-6 mb-12 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-fuchsia-200" />
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-100">Experience</p>
          </div>
          <h3 className="text-3xl font-serif mb-4 leading-tight">
            Say Goodbye to<br/>
            <span className="text-fuchsia-200">Back Rolls</span>
          </h3>
          <p className="text-sm text-purple-100 mb-6 leading-relaxed max-w-sm">
            Ultimate back-smoothing solutions with unparalleled lift and support that celebrates your curves.
          </p>
          <button className="px-8 py-3 bg-white text-purple-900 text-xs uppercase tracking-wider rounded-full hover:bg-purple-50 transition-all shadow-lg font-medium">
            Shop Collection
          </button>
        </div>
      </div>

      {/* Color Story Section */}
      <div className="mx-6 mb-12 grid grid-cols-3 gap-4">
        <div className="aspect-square bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
          <p className="text-white text-xs font-medium">Warm</p>
        </div>
        <div className="aspect-square bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
          <p className="text-white text-xs font-medium">Fresh</p>
        </div>
        <div className="aspect-square bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
          <p className="text-white text-xs font-medium">Bold</p>
        </div>
      </div>

      {/* Bottom Nav - Vibrant */}
      <div className="sticky bottom-0 bg-white/95 backdrop-blur-sm border-t border-amber-200/50 px-6 py-4">
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            <span className="text-[10px] text-amber-900 uppercase tracking-wider font-medium">Home</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Search className="w-5 h-5 text-amber-600" />
            <span className="text-[10px] text-amber-600 uppercase tracking-wider">Search</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Heart className="w-5 h-5 text-rose-500" />
            <span className="text-[10px] text-rose-500 uppercase tracking-wider">Saved</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <User className="w-5 h-5 text-amber-600" />
            <span className="text-[10px] text-amber-600 uppercase tracking-wider">Account</span>
          </div>
        </div>
      </div>
    </div>
  );

  const CatalogScreen = () => (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-amber-50/30 to-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-amber-200/50">
        <div className="flex items-center justify-between px-6 py-4">
          <button onClick={() => setCurrentScreen('home')}>
            <ChevronLeft className="w-6 h-6 text-amber-900" />
          </button>
          <h2 className="text-lg font-serif bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent">
            Collection
          </h2>
          <Search className="w-5 h-5 text-amber-700" />
        </div>
      </div>

      {/* Filter Pills - Vibrant */}
      <div className="px-6 py-6 flex gap-3 overflow-x-auto no-scrollbar">
        <button className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs uppercase tracking-wider rounded-full whitespace-nowrap shadow-md font-medium">
          All
        </button>
        <button className="px-6 py-2.5 bg-white text-amber-700 text-xs uppercase tracking-wider rounded-full border-2 border-amber-200 whitespace-nowrap hover:border-amber-500 transition-all font-medium">
          Bras
        </button>
        <button className="px-6 py-2.5 bg-white text-amber-700 text-xs uppercase tracking-wider rounded-full border-2 border-amber-200 whitespace-nowrap hover:border-amber-500 transition-all font-medium">
          Shapers
        </button>
        <button className="px-6 py-2.5 bg-white text-amber-700 text-xs uppercase tracking-wider rounded-full border-2 border-amber-200 whitespace-nowrap hover:border-amber-500 transition-all font-medium">
          Bodysuits
        </button>
      </div>

      {/* Product Grid - 2 columns with vibrant accents */}
      <div className="px-6 pb-24 grid grid-cols-2 gap-5">
        {products.map(product => (
          <div 
            key={product.id}
            onClick={() => setCurrentScreen('product')}
            className="cursor-pointer group"
          >
            <div className={`${product.image} aspect-[3/4] rounded-2xl mb-3 flex items-center justify-center relative overflow-hidden shadow-md group-hover:shadow-xl transition-all`}>
              <p className="text-white/70 text-xs font-medium">Image</p>
              {product.salePrice && (
                <div className="absolute top-3 right-3 px-3 py-1.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] uppercase tracking-wider rounded-full shadow-lg font-medium">
                  Sale
                </div>
              )}
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full">
                <p className="text-[9px] text-amber-900 uppercase tracking-wider font-medium">{product.category}</p>
              </div>
            </div>
            <div className="space-y-1.5">
              <h4 className="text-sm font-serif text-amber-900 leading-tight group-hover:text-orange-700 transition-colors">
                {product.name}
              </h4>
              <div className="flex items-center justify-between pt-0.5">
                <div className="flex items-center gap-2">
                  {product.salePrice && (
                    <p className="text-xs text-amber-500 line-through">${product.salePrice}</p>
                  )}
                  <p className="text-base font-serif bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent">
                    ${product.price}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span className="text-xs text-amber-700">{product.rating}</span>
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
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-amber-200/50">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => setCurrentScreen('catalog')}>
              <ChevronLeft className="w-6 h-6 text-amber-900" />
            </button>
            <div className="flex items-center gap-4">
              <Heart className="w-5 h-5 text-rose-500" />
              <ShoppingBag className="w-5 h-5 text-amber-700" />
            </div>
          </div>
        </div>

        {/* Product Images - Vibrant Gallery */}
        <div className="relative">
          <div className={`${product.image} aspect-square flex items-center justify-center shadow-lg`}>
            <p className="text-white/60 font-medium">[ Swipeable Product Gallery ]</p>
          </div>
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full shadow-lg"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>

        {/* Product Info */}
        <div className="px-6 py-8 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className={`w-12 h-1 bg-gradient-to-r ${product.accentColor} rounded-full`}></div>
              <p className="text-xs text-amber-700 uppercase tracking-[0.3em] font-medium">{product.category}</p>
            </div>
            <h1 className="text-4xl font-serif text-amber-900 leading-tight">{product.name}</h1>
            <p className="text-amber-700 leading-relaxed">{product.subtitle}</p>
            
            {/* Rating - Vibrant */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-sm text-amber-700 font-medium">{product.rating} • 847 reviews</span>
            </div>
          </div>

          {/* Price - Gradient */}
          <div className="flex items-center gap-4 pt-4 pb-6 border-b-2 border-amber-200">
            <p className="text-5xl font-serif bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
              ${product.price}
            </p>
            <span className="text-sm text-amber-600 font-medium">TTD</span>
          </div>

          {/* Size Selection - Colorful */}
          <div className="space-y-4">
            <p className="text-sm text-amber-900 uppercase tracking-wider font-medium">Select Size</p>
            <div className="grid grid-cols-4 gap-3">
              {['XS', 'S', 'M', 'L'].map((size, idx) => (
                <button 
                  key={size} 
                  className={`py-3.5 text-sm font-medium border-2 rounded-xl transition-all ${
                    idx === 2 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-transparent shadow-lg' 
                      : 'text-amber-700 border-amber-200 hover:border-amber-500'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div className="space-y-4">
            <p className="text-sm text-amber-900 uppercase tracking-wider font-medium">Available Colors</p>
            <div className="flex gap-3">
              <button className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-md ring-2 ring-orange-500 ring-offset-2"></button>
              <button className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl shadow-md hover:ring-2 hover:ring-pink-500 hover:ring-offset-2 transition-all"></button>
              <button className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-xl shadow-md hover:ring-2 hover:ring-purple-500 hover:ring-offset-2 transition-all"></button>
              <button className="w-12 h-12 bg-gradient-to-br from-stone-800 to-stone-900 rounded-xl shadow-md hover:ring-2 hover:ring-stone-900 hover:ring-offset-2 transition-all"></button>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3 pt-4">
            <h3 className="text-sm text-amber-900 uppercase tracking-wider font-medium">Description</h3>
            <p className="text-amber-800 leading-relaxed text-sm">
              Experience the perfect fusion of style, comfort, and functionality. Crafted with smooth, 
              high-quality fabric that gently sculpts your silhouette while providing ultimate support. 
              <span className="text-orange-700 font-medium"> Designed for all-day confidence and effortless elegance.</span>
            </p>
          </div>

          {/* Features - With icons */}
          <div className="space-y-3 pt-4">
            <h3 className="text-sm text-amber-900 uppercase tracking-wider font-medium">Features</h3>
            <ul className="space-y-3 text-sm text-amber-800">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Seamless construction for invisible smoothing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Breathable, premium fabric blend</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>All-day comfort with targeted support</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Machine washable • Maintains shape</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sticky Add to Cart - Vibrant gradient */}
        <div className="sticky bottom-0 bg-white border-t-2 border-amber-200 px-6 py-5">
          <button className="w-full py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white text-sm uppercase tracking-widest rounded-full hover:from-amber-600 hover:via-orange-600 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl font-medium">
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
      <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-rose-100 px-4 py-2 flex gap-2 text-xs border-b-2 border-amber-200">
        <button 
          onClick={() => setCurrentScreen('splash')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            currentScreen === 'splash' 
              ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md' 
              : 'text-amber-700 hover:bg-white/50'
          }`}
        >
          Splash
        </button>
        <button 
          onClick={() => setCurrentScreen('home')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            currentScreen === 'home' 
              ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md' 
              : 'text-amber-700 hover:bg-white/50'
          }`}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentScreen('catalog')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            currentScreen === 'catalog' 
              ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md' 
              : 'text-amber-700 hover:bg-white/50'
          }`}
        >
          Catalog
        </button>
        <button 
          onClick={() => setCurrentScreen('product')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            currentScreen === 'product' 
              ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md' 
              : 'text-amber-700 hover:bg-white/50'
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