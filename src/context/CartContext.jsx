import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'iroki_cafe_cart_v1';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All Items');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, [cartItems]);

  const showToast = useCallback((message, subtitle = '') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev.slice(-2), { id, message, subtitle }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  /**
   * Builds a unique cart key so items with selectable variants
   * (e.g. Shoyu Ramen - Veg vs Chicken) are tracked accurately.
   */
  const getCartKey = (itemId, variantLabel) =>
    variantLabel ? `${itemId}__${variantLabel.toLowerCase()}` : `${itemId}`;

  const addToCart = useCallback(
    (item, selectedVariant = null) => {
      const variantLabel = selectedVariant ? selectedVariant.label : null;
      const isVeg = selectedVariant ? selectedVariant.isVeg : item.isVeg;
      const cartKey = getCartKey(item.id, variantLabel);
      const displayName = variantLabel ? `${item.name} (${variantLabel})` : item.name;

      setCartItems((prev) => {
        const existingIndex = prev.findIndex((entry) => entry.cartKey === cartKey);
        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + 1,
          };
          return updated;
        }
        return [
          ...prev,
          {
            cartKey,
            id: item.id,
            name: displayName,
            baseName: item.name,
            variantLabel,
            price: item.price,
            image: item.image,
            category: item.category,
            isVeg,
            quantity: 1,
          },
        ];
      });

      showToast(`Added ${displayName}`, `₹${item.price} • Added to your order bag`);
    },
    [showToast]
  );

  const updateQuantity = useCallback((cartKey, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartKey !== cartKey) return item;
          const nextQty = item.quantity + delta;
          return nextQty > 0 ? { ...item, quantity: nextQty } : null;
        })
        .filter(Boolean)
    );
  }, []);

  const removeFromCart = useCallback((cartKey) => {
    setCartItems((prev) => prev.filter((item) => item.cartKey !== cartKey));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getItemQuantity = useCallback(
    (itemId, variantLabel = null) => {
      const key = getCartKey(itemId, variantLabel);
      const found = cartItems.find((i) => i.cartKey === key);
      return found ? found.quantity : 0;
    },
    [cartItems]
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const navigateToCategory = useCallback((categoryName) => {
    setActiveCategory(categoryName);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getItemQuantity,
        totalItems,
        subtotal,
        toasts,
        dismissToast,
        activeCategory,
        setActiveCategory,
        navigateToCategory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
