
import switchImg   from "../assets/products/switch.jpg";
import ledImg      from "../assets/products/led.jpg";
import wireImg     from "../assets/products/wire.jpg";
import mcbImg      from "../assets/products/mcb.jpg";

import tapImg      from "../assets/products/tap.jpg";
import showerImg   from "../assets/products/shower.jpg";
import pipeImg     from "../assets/products/pipe.jpg";

const categories = [
  {
    id: "electrical",
    label: "Electrical",
    products: [
      { name: "Switch", img: switchImg },
      { name: "LED",    img: ledImg    },
      { name: "Wire",   img: wireImg   },
      { name: "MCB",    img: mcbImg    },
    ],
  },
  {
    id: "plumbing",
    label: "Plumbing",
    products: [
      { name: "Tap",    img: tapImg    },
      { name: "Shower", img: showerImg },
      { name: "Pipe",   img: pipeImg   },
    ],
  },
];

function Store() {
  return (
    <section  id="store" className="ps-section">

      <div className="ps-title-wrap">
        <h2 className="ps-section-title">Product Store</h2>
        <span className="ps-title-underline" />
        <p className="ps-section-subtitle">
          Quality products for your electrical &amp; plumbing needs
        </p>
      </div>

      <div className="ps-categories">
        {categories.map((cat) => (
          <div className="ps-category-card" key={cat.id}>

            {/* Category header */}
            <div className="ps-category-header">
              <span className="ps-category-icon">{cat.icon}</span>
              <h3 className="ps-category-title">{cat.label}</h3>
            </div>

            {/* Products grid */}
            <div className="ps-products-grid">
              {cat.products.map((product) => (
                <div className="ps-product-card" key={product.name}>
                  <div className="ps-product-img-wrap">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <span className="ps-product-name">{product.name}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="ps-cta-wrap">
        <button className="ps-cta-btn">Visit Store →</button>
      </div>

    </section>
  );
}

export default Store;