import React, { useState, useMemo } from 'react';
import { Flame, Search, X, UtensilsCrossed } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuItems';
import { useCart } from '../context/CartContext';
import MenuCard from './MenuCard';

export default function MenuSection() {
  const { activeCategory, setActiveCategory } = useCart();
  const [dietFilter, setDietFilter] = useState('all'); // 'all' | 'veg' | 'spicy'
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'All Items' || item.category === activeCategory;

      const matchesDiet =
        dietFilter === 'all' ||
        (dietFilter === 'veg' &&
          (item.isVeg || (item.variants && item.variants.some((v) => v.isVeg)))) ||
        (dietFilter === 'spicy' && item.isSpicy);

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [activeCategory, dietFilter, searchQuery]);

  const handleResetFilters = () => {
    setActiveCategory('All Items');
    setDietFilter('all');
    setSearchQuery('');
  };

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-eyebrow">
            <UtensilsCrossed size={15} />
            <span>IROKI STREET MENU</span>
            <span className="eyebrow-jp" aria-hidden="true">
              お品書き
            </span>
          </div>
          <h2 className="section-heading">WHAT&apos;S COOKING?</h2>
          <p className="section-subheading">Find your next favorite bite.</p>
        </div>

        {/* Category Filter Tabs */}
        <div className="menu-controls-wrapper">
          <div className="category-tabs-scroll" role="tablist" aria-label="Menu Categories">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`category-tab-btn ${isActive ? 'category-tab-active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="tab-label-main">{cat.label}</span>
                  <span className="tab-count-badge">{cat.count}</span>
                </button>
              );
            })}
          </div>

          {/* Secondary Quick Filters & Search */}
          <div className="menu-subfilters">
            <div className="diet-toggle-group" role="group" aria-label="Dietary and spice filters">
              <button
                type="button"
                className={`diet-chip ${dietFilter === 'all' ? 'diet-chip-active' : ''}`}
                onClick={() => setDietFilter('all')}
              >
                All Dishes
              </button>
              <button
                type="button"
                className={`diet-chip diet-chip-veg ${
                  dietFilter === 'veg' ? 'diet-chip-active' : ''
                }`}
                onClick={() => setDietFilter(dietFilter === 'veg' ? 'all' : 'veg')}
              >
                <span className="mini-diet-dot dot-veg" aria-hidden="true" />
                Veg Options
              </button>
              <button
                type="button"
                className={`diet-chip diet-chip-spicy ${
                  dietFilter === 'spicy' ? 'diet-chip-active' : ''
                }`}
                onClick={() => setDietFilter(dietFilter === 'spicy' ? 'all' : 'spicy')}
              >
                <Flame size={14} />
                Spicy Picks
              </button>
            </div>

            <div className="menu-search-box">
              <Search size={16} className="search-icon" aria-hidden="true" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ramen, sushi, karaage..."
                aria-label="Search menu items"
                className="menu-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Active Category Summary Banner */}
        <div className="menu-results-bar">
          <span className="results-count-text">
            Showing <strong>{filteredItems.length}</strong>{' '}
            {filteredItems.length === 1 ? 'dish' : 'dishes'} in{' '}
            <strong>{activeCategory}</strong>
          </span>
          {(activeCategory !== 'All Items' || dietFilter !== 'all' || searchQuery) && (
            <button type="button" className="reset-filter-link" onClick={handleResetFilters}>
              Reset all filters
            </button>
          )}
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="menu-cards-grid">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="menu-empty-state">
            <p className="empty-state-title">No dishes match your current filter.</p>
            <p className="empty-state-sub">
              Try switching to &ldquo;All Items&rdquo; or clearing your search query.
            </p>
            <button type="button" className="btn btn-primary" onClick={handleResetFilters}>
              Show All 30 Menu Items
            </button>
          </div>
        )}

        {/* Illustrative Menu Note */}
        <p className="menu-disclaimer-note">
          * Illustrative sample menu &amp; pricing (in ₹ INR). Please inform your server of any food
          allergies prior to ordering.
        </p>
      </div>
    </section>
  );
}
