import { useState, useMemo } from "react";
import ProductCard from "../components/shop/ProductCard";
import ProductGrid from "../components/shop/ProductGrid";
import DropCard from "../components/drops/DropCard";
import EmailSignup from "../components/common/EmailSignup";
import productsData from "../data/products.json";
import dropsData from "../data/drops.json";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showArchive, setShowArchive] = useState(false);

  // Organize drops by status
  const { upcomingDrops, activeDrops, archivedDrops } = useMemo(() => {
    return {
      upcomingDrops: dropsData.drops.filter((d) => d.status === "upcoming"),
      activeDrops: dropsData.drops.filter((d) => d.status === "active"),
      archivedDrops: dropsData.drops.filter((d) => d.status === "archived"),
    };
  }, []);

  // Get products for active drops
  const dropProducts = useMemo(() => {
    return productsData.products.filter((p) => p.collection === "drop");
  }, []);

  // Get permanent collection products, filtered by category
  const permanentProducts = useMemo(() => {
    const permanent = productsData.products.filter(
      (p) => p.collection === "permanent"
    );
    if (activeCategory === "all") return permanent;
    return permanent.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="page page--shop">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero__title">two pals who make stuff</h1>
        <p className="hero__tagline">
          Hey there, we're cow-boys collab. We make upcycled clothing apparel,
          art prints, and other stuff &lt;3
        </p>
      </section>

      {/* Drops Section */}
      <section className="shop-section shop-section--drops">
        <h2 className="section-title">drops</h2>

        {/* Upcoming Drops */}
        {upcomingDrops.length > 0 && (
          <div className="drops-upcoming">
            {upcomingDrops.map((drop) => (
              <div key={drop.id} className="upcoming-drop">
                <DropCard drop={drop} />
                <div className="upcoming-drop__countdown">
                  <span className="upcoming-drop__label">drops in:</span>
                  <CountdownTimer targetDate={drop.dropDate} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Active Drops */}
        {activeDrops.length > 0 && (
          <div className="drops-active">
            {activeDrops.map((drop) => (
              <div key={drop.id} className="active-drop">
                <DropCard drop={drop} />
                <ProductGrid
                  products={dropProducts.filter((p) => p.dropId === drop.id)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Email Signup */}
        <EmailSignup context="drops" />

        {/* Archive Toggle */}
        {archivedDrops.length > 0 && (
          <div className="drops-archive">
            <button
              className="archive-toggle"
              onClick={() => setShowArchive(!showArchive)}
            >
              {showArchive ? "− hide archive" : "+ show archive"}
            </button>
            {showArchive && (
              <div className="archive-grid">
                {archivedDrops.map((drop) => (
                  <DropCard key={drop.id} drop={drop} />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Permanent Collection Section */}
      <section className="shop-section shop-section--permanent">
        <h2 className="section-title">permanent collection</h2>

        {/* Category Filters */}
        <div className="category-filters">
          <button
            className={`category-filter ${
              activeCategory === "all" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("all")}
          >
            all
          </button>
          {productsData.categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-filter ${
                activeCategory === cat.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <ProductGrid products={permanentProducts} />
      </section>
    </div>
  );
}
