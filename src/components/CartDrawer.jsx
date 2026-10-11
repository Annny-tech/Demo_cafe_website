import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  X,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  CheckCircle2,
  UtensilsCrossed,
  Sparkles,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { createFallbackFoodImage } from '../data/menuItems';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    subtotal,
    toasts,
    dismissToast,
  } = useCart();

  const [demoCheckoutComplete, setDemoCheckoutComplete] = useState(false);
  const [orderSnapshot, setOrderSnapshot] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Reset checkout confirmation screen when drawer closes
  useEffect(() => {
    if (!isCartOpen) {
      const t = setTimeout(() => {
        setDemoCheckoutComplete(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isCartOpen]);

  const handleDemoCheckout = () => {
    setOrderSnapshot({
      itemCount: totalItems,
      subtotal,
      items: [...cartItems],
      referenceCode: `IRK-${Math.floor(1000 + Math.random() * 9000)}`,
    });
    setDemoCheckoutComplete(true);
    clearCart();
  };

  const handleBrowseMenu = () => {
    closeCart();
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Toast Notification Stack */}
      <div className="toast-container" aria-live="polite" aria-atomic="true">
        {toasts.map((toast) => (
          <div key={toast.id} className="cart-toast" role="status">
            <div className="toast-icon-badge" aria-hidden="true">
              <ShoppingBag size={16} />
            </div>
            <div className="toast-text">
              <strong>{toast.message}</strong>
              {toast.subtitle && <span>{toast.subtitle}</span>}
            </div>
            <button
              type="button"
              className="toast-close"
              onClick={() => dismissToast(toast.id)}
              aria-label="Dismiss notification"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Cart Drawer Backdrop & Slide-Over Panel */}
      {isCartOpen && (
        <div
          className="cart-drawer-backdrop"
          onClick={closeCart}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-drawer-title"
        >
          <aside className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
            {/* Drawer Header */}
            <div className="cart-drawer-header">
              <div className="cart-header-title-wrap">
                <span className="cart-bag-icon" aria-hidden="true">
                  <ShoppingBag size={20} />
                </span>
                <div>
                  <h2 id="cart-drawer-title">Your Order Bag</h2>
                  <span className="cart-header-sub">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                  </span>
                </div>
              </div>

              <div className="cart-header-actions">
                {cartItems.length > 0 && !demoCheckoutComplete && (
                  <button
                    type="button"
                    className="clear-cart-text-btn"
                    onClick={clearCart}
                    aria-label="Clear all items from cart"
                  >
                    <Trash2 size={14} />
                    <span>Clear Cart</span>
                  </button>
                )}
                <button
                  type="button"
                  className="cart-close-btn"
                  onClick={closeCart}
                  aria-label="Close shopping cart"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Drawer Body */}
            <div className="cart-drawer-body">
              {demoCheckoutComplete && orderSnapshot ? (
                /* Demo Checkout Confirmation View */
                <div className="demo-checkout-confirmation">
                  <div className="demo-confirm-badge">
                    <Sparkles size={14} />
                    <span>FRONTEND DEMO CONFIRMATION</span>
                  </div>
                  <div className="demo-confirm-icon">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3>Arigato! Demo Order Previewed</h3>
                  <p className="demo-confirm-note">
                    This is an interactive frontend preview for <strong>Iroki Cafe</strong>. No
                    real payment was processed and no live kitchen order was placed.
                  </p>

                  <div className="demo-order-summary-card">
                    <div className="demo-summary-row">
                      <span>Demo Ref ID</span>
                      <strong>#{orderSnapshot.referenceCode}</strong>
                    </div>
                    <div className="demo-summary-row">
                      <span>Items in Preview</span>
                      <strong>{orderSnapshot.itemCount} dishes</strong>
                    </div>
                    <div className="demo-summary-items">
                      {orderSnapshot.items.map((item) => (
                        <div key={item.cartKey} className="demo-summary-line">
                          <span>
                            {item.quantity}x {item.name}
                          </span>
                          <span>₹{item.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="demo-summary-total">
                      <span>Estimated Total</span>
                      <strong>₹{orderSnapshot.subtotal}</strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary btn-full"
                    onClick={handleBrowseMenu}
                  >
                    <UtensilsCrossed size={17} />
                    <span>Back to Menu</span>
                  </button>
                </div>
              ) : cartItems.length === 0 ? (
                /* Empty Cart State */
                <div className="cart-empty-state">
                  <div className="empty-bag-illustration" aria-hidden="true">
                    <ShoppingBag size={42} strokeWidth={1.6} />
                    <span className="empty-jp">お腹すいた？</span>
                  </div>
                  <h3>Your bag is feeling light!</h3>
                  <p>
                    From steaming bowls of ramen to crispy golden karaage and hand-rolled sushi,
                    add your favorites to start building your feast.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleBrowseMenu}
                  >
                    <UtensilsCrossed size={17} />
                    <span>Explore the Menu</span>
                  </button>
                </div>
              ) : (
                /* Active Cart Items List */
                <ul className="cart-items-list">
                  {cartItems.map((item) => {
                    const lineTotal = item.price * item.quantity;
                    return (
                      <li key={item.cartKey} className="cart-line-item">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-item-thumb"
                          onError={(e) => {
                            e.currentTarget.src = createFallbackFoodImage(
                              item.name,
                              item.category
                            );
                          }}
                        />

                        <div className="cart-item-details">
                          <div className="cart-item-top">
                            <div>
                              <span className="cart-item-cat">{item.category}</span>
                              <h4 className="cart-item-title">{item.name}</h4>
                            </div>
                            <button
                              type="button"
                              className="cart-item-remove"
                              onClick={() => removeFromCart(item.cartKey)}
                              aria-label={`Remove ${item.name} from cart`}
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>

                          <div className="cart-item-unit-price">₹{item.price} each</div>

                          <div className="cart-item-bottom">
                            <div
                              className="qty-stepper"
                              role="group"
                              aria-label={`Quantity controls for ${item.name}`}
                            >
                              <button
                                type="button"
                                className="qty-btn"
                                onClick={() => updateQuantity(item.cartKey, -1)}
                                aria-label={`Decrease quantity of ${item.name}`}
                              >
                                <Minus size={14} />
                              </button>
                              <span className="qty-value">{item.quantity}</span>
                              <button
                                type="button"
                                className="qty-btn"
                                onClick={() => updateQuantity(item.cartKey, 1)}
                                aria-label={`Increase quantity of ${item.name}`}
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            <strong className="cart-item-line-total">₹{lineTotal}</strong>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Drawer Footer */}
            {cartItems.length > 0 && !demoCheckoutComplete && (
              <div className="cart-drawer-footer">
                <div className="cart-summary-rows">
                  <div className="cart-summary-line">
                    <span>Items Subtotal ({totalItems})</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="cart-summary-line cart-summary-muted">
                    <span>Taxes &amp; Cafe Packaging</span>
                    <span>Calculated at counter</span>
                  </div>
                  <div className="cart-summary-total">
                    <span>Total Payable</span>
                    <strong>₹{subtotal}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-full cart-checkout-btn"
                  onClick={handleDemoCheckout}
                >
                  <span>Checkout (Demo Order Preview)</span>
                  <ArrowRight size={18} />
                </button>

                <p className="cart-demo-disclaimer">
                  Demo mode only — no real payment or live order is processed.
                </p>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
