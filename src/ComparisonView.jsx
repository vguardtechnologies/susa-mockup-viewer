import React, { useState, useEffect } from 'react';
import SUSAOriginal from './susa-original';
import SUSASouthAfricanFusion from './susa-south-african-fusion';
import SUSAAuthenticFusion from './susa-authentic-fusion';
import SUSARichAfricanVibes from './susa-rich-african-vibes';
import SUSAVibrantRichVibes from './susa-vibrant-rich-vibes';

export default function ComparisonView() {
  const [isMobile, setIsMobile] = useState(false);
  const [viewMode, setViewMode] = useState('two-column');
  const [selectedVersions, setSelectedVersions] = useState(['authentic', 'vibrant']);
  const [singleVersion, setSingleVersion] = useState('south-african');

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile && viewMode !== 'single') {
        setViewMode('single');
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const versions = [
    { id: 'original', name: 'Original', component: SUSAOriginal, color: 'from-neutral-600 to-stone-700', desc: 'Stone/neutral' },
    { id: 'south-african', name: 'South African', component: SUSASouthAfricanFusion, color: 'from-emerald-600 to-teal-700', desc: 'Vibrant SA' },
    { id: 'authentic', name: 'Authentic', component: SUSAAuthenticFusion, color: 'from-amber-600 to-orange-700', desc: 'Soft brand' },
    { id: 'rich', name: 'Rich African', component: SUSARichAfricanVibes, color: 'from-rose-600 to-pink-700', desc: 'Brand + patterns' },
    { id: 'vibrant', name: 'Vibrant Rich', component: SUSAVibrantRichVibes, color: 'from-orange-500 to-amber-600', desc: 'Saturated' }
  ];

  const toggleVersion = (versionId) => {
    if (viewMode === 'two-column') {
      if (selectedVersions.includes(versionId)) {
        if (selectedVersions.length > 1) {
          setSelectedVersions(selectedVersions.filter(id => id !== versionId));
        }
      } else {
        if (selectedVersions.length < 2) {
          setSelectedVersions([...selectedVersions, versionId]);
        } else {
          setSelectedVersions([selectedVersions[1], versionId]);
        }
      }
    } else if (viewMode === 'three-column') {
      if (selectedVersions.includes(versionId)) {
        if (selectedVersions.length > 1) {
          setSelectedVersions(selectedVersions.filter(id => id !== versionId));
        }
      } else {
        if (selectedVersions.length < 3) {
          setSelectedVersions([...selectedVersions, versionId]);
        } else {
          setSelectedVersions([...selectedVersions.slice(1), versionId]);
        }
      }
    }
  };

  const getDisplayedVersions = () => {
    if (viewMode === 'single') {
      return versions.filter(v => v.id === singleVersion);
    }
    if (viewMode === 'all-five') {
      return versions;
    }
    return versions.filter(v => selectedVersions.includes(v.id));
  };

  const getGridCols = () => {
    if (viewMode === 'single') return 'grid-cols-1';
    if (viewMode === 'all-five') return 'grid-cols-5';
    if (viewMode === 'three-column') return 'grid-cols-3';
    return 'grid-cols-2';
  };

  const getScale = () => {
    // Balanced scale - fills containers without being too zoomed
    if (viewMode === 'single') return 1.0;
    if (viewMode === 'all-five') return 0.65;
    if (viewMode === 'three-column') return 1.05;
    return 1.5;
  };

  const displayedVersions = getDisplayedVersions();

  return (
    <div className="w-full h-screen bg-neutral-100 overflow-hidden">
      {/* Control Bar */}
      <div className="bg-gradient-to-r from-neutral-900 via-black to-neutral-900 text-white px-3 md:px-6 py-2 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-sm md:text-lg font-bold">SUSA Design Comparison</h1>
            {!isMobile && (
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('single')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    viewMode === 'single' ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  Single
                </button>
                <button
                  onClick={() => setViewMode('two-column')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    viewMode === 'two-column' ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  2 Column
                </button>
                <button
                  onClick={() => {
                    setViewMode('three-column');
                    if (selectedVersions.length < 3) {
                      setSelectedVersions(['authentic', 'rich', 'vibrant']);
                    }
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    viewMode === 'three-column' ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  3 Column
                </button>
                <button
                  onClick={() => setViewMode('all-five')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    viewMode === 'all-five' ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  All 5
                </button>
              </div>
            )}
          </div>

          {/* Version Selector */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-3 px-3 md:mx-0 md:px-0 md:flex-wrap scrollbar-hide">
            {versions.map(version => {
              const isSelected = viewMode === 'single'
                ? version.id === singleVersion
                : viewMode === 'all-five' || selectedVersions.includes(version.id);
              return (
                <button
                  key={version.id}
                  onClick={() => {
                    if (viewMode === 'single') {
                      setSingleVersion(version.id);
                    } else {
                      toggleVersion(version.id);
                    }
                  }}
                  disabled={viewMode === 'all-five'}
                  className={`flex-shrink-0 px-3 md:px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? `bg-gradient-to-r ${version.color} text-white shadow-lg`
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  } ${viewMode === 'all-five' ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="whitespace-nowrap">{version.name}</div>
                  <div className="text-[9px] opacity-80 font-normal whitespace-nowrap">{version.desc}</div>
                </button>
              );
            })}
          </div>

          {!isMobile && viewMode === 'single' && (
            <div className="mt-2 text-xs text-white/60">
              Click any version to view it full screen
            </div>
          )}
          {!isMobile && viewMode !== 'all-five' && viewMode !== 'single' && (
            <div className="mt-2 text-xs text-white/60">
              Click versions to compare • {viewMode === 'two-column' ? 'Select 2' : 'Select up to 3'}
            </div>
          )}
        </div>
      </div>

      {/* Grid Layout */}
      {isMobile ? (
        // Mobile: Full-screen mockup view (like a real app)
        <div className="h-[calc(100vh-5rem)] overflow-auto bg-white">
          {displayedVersions.map(({ id, component: Component }) => (
            <Component key={id} />
          ))}
        </div>
      ) : (
        // Desktop: Comparison grid view
        <div className={`h-[calc(100vh-7rem)] grid ${getGridCols()} gap-1 p-1 bg-neutral-200 overflow-hidden`}>
          {displayedVersions.map(({ id, name, component: Component, color, desc }) => (
            <div key={id} className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col">
              <div className={`bg-gradient-to-r ${color} text-white px-3 py-2 text-center`}>
                <h2 className="font-bold text-xs uppercase tracking-wider">{name}</h2>
                <p className="text-[9px] opacity-90 mt-0.5">{desc}</p>
              </div>
              <div className="flex-1 overflow-hidden relative bg-neutral-50">
                <div className="absolute inset-0 flex items-start justify-center">
                  <div style={{ transform: `scale(${getScale()})`, transformOrigin: 'top center', width: '448px', height: '100vh' }}>
                    <Component />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Legend - Hidden on mobile */}
      {!isMobile && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md text-white px-8 py-2.5 rounded-full shadow-2xl">
          <div className="flex items-center gap-6 text-[10px]">
            {displayedVersions.map(({ id, name, color }) => (
              <div key={id} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${color}`}></div>
                <span className="font-semibold">{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
