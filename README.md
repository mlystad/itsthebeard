# itsthebeard.com — Near Employee-Free Merch & Grooming Store

Premium merch and grooming goods for the bearded brotherhood.
Sister brand to [Original Beard King](https://www.originalbeardking.com).

The store is designed to run with **zero staff** by routing all fulfillment
through automated platforms: Shopify + Printful for apparel, dropship suppliers
for grooming products, and Amazon Merch on Demand as a second sales channel.

---

## How the Automation Stack Works

```
Customer orders
      │
      ├─── Shopify Store ──────────────────────────────────────────────────┐
      │         │                                                           │
      │    Apparel products?                                                │
      │         ├── YES → Printful (print-on-demand, auto-ships)           │
      │         └── NO  → DSers/Dropship supplier (auto-ships)             │
      │                                                                     │
      └─── Amazon Merch on Demand ─────────────────────────────────────────┘
                    │
                    └── Amazon prints + ships (Prime-eligible, zero stock)
```

### Platforms Used

| Platform | Role | Cost Model |
|---|---|---|
| **Shopify** | Storefront, cart, checkout, payments | Monthly plan + transaction fees |
| **Printful** | Print-on-demand fulfillment for all apparel | Per-order (no upfront stock) |
| **Printify** | Alternate print-on-demand (lower cost on some SKUs) | Per-order |
| **DSers** | Dropship grooming products from AliExpress/suppliers | Free tier available |
| **Amazon Merch on Demand** | Second sales channel, Prime fulfillment | Royalty per sale, Amazon handles everything |
| **Klaviyo** | Email automations (abandoned cart, post-purchase, drops) | Free up to 250 contacts |
| **Google Forms** | Pre-launch email capture (already live) | Free |
| **GitHub Pages** | Hosts this landing/marketing site | Free |

---

## Files

```
index.html   ← Full marketing site + product storefront (single file)
README.md    ← This file
CNAME        ← itsthebeard.com (GitHub Pages custom domain)
```

---

## Setup Checklist

### 1 — Shopify Store

1. Sign up at [shopify.com](https://www.shopify.com)
2. Choose a subdomain: `itsthebeard.myshopify.com`
3. Add a custom domain: `shop.itsthebeard.com` (CNAME → `shops.myshopify.com`)
4. Install the **Printful** app from the Shopify App Store
5. Create products in Shopify, sync designs via Printful
6. Set prices (Printful base cost + your margin)
7. Enable payments: Shopify Payments or Stripe

**Update `index.html`:** Replace every `https://shop.itsthebeard.com/products/...`
link with your actual Shopify product URLs.

---

### 2 — Printful (Apparel Fulfillment)

1. Create a free account at [printful.com](https://www.printful.com)
2. Connect Printful to your Shopify store
3. Upload your designs (the crest, wordmark, etc.)
4. Create products:
   - **Brotherhood Tee** — Bella+Canvas 3001 Unisex Jersey Tee
   - **Brotherhood Hoodie** — Gildan 18500 Heavy Blend Hoodie
5. Sync products to Shopify — Printful auto-fills product images, variants, and shipping

When a Shopify order comes in, Printful automatically:
- Receives the order
- Prints the item
- Ships it directly to the customer
- Sends tracking info back to Shopify

**Zero manual work required after setup.**

---

### 3 — Grooming Products (Dropship)

Option A — **DSers + AliExpress supplier**
1. Find a beard oil/balm supplier on AliExpress with good reviews and fast shipping
2. Install DSers on Shopify, import the product
3. When an order comes in, DSers auto-places the order with the supplier

Option B — **Private label 3PL**
1. Source a beard oil manufacturer (white-label)
2. Send a batch to a 3PL (ShipBob, ShipMonk)
3. Shopify connects to the 3PL via app — orders auto-fulfil

**Update `index.html`:** Replace the `YOUR_ASIN_X` and Shopify grooming product URLs.

---

### 4 — Amazon Merch on Demand

1. Apply at [merch.amazon.com](https://merch.amazon.com) (invite-based, may take weeks)
2. Upload designs — Amazon creates the product listings automatically
3. Set your royalty price
4. Amazon handles printing, shipping, returns, and customer service
5. You receive royalty payments automatically

Once live, create a **Brand Storefront** on Amazon:
- Amazon Seller Central → Stores → Create Store
- Your storefront URL becomes: `https://www.amazon.com/stores/ItsTheBeard/...`

**Update `index.html`:** Replace the Amazon storefront URLs and `YOUR_ASIN_X` placeholders.

---

### 5 — Activate Shopify Buy Buttons (Optional Upgrade)

The product cards currently link to the Shopify product pages. To embed
**Add to Cart** functionality directly on this GitHub Pages site:

1. In Shopify Admin → **Sales Channels → Buy Button → Create a Buy Button**
2. Select a product → copy the generated embed code
3. In `index.html`, find each product card and:
   - Replace `<a href="..." class="btn-shopify">Shopify</a>`
   - With: `<div id="shopify-buy-btn-X"></div>`
4. Scroll to the bottom of `index.html` and **uncomment the Shopify Buy Button SDK block**
5. Fill in your values:
   - `YOUR-STORE.myshopify.com`
   - `YOUR_STOREFRONT_TOKEN` (Shopify Admin → Apps → Develop Apps → Storefront API)
   - `YOUR_PRODUCT_ID_X` (numeric ID from each product URL in Shopify Admin)

---

### 6 — Email Marketing Automation (Klaviyo)

The email capture form already posts to Google Sheets via Google Forms.
To upgrade to automated email flows:

1. Create a free account at [klaviyo.com](https://www.klaviyo.com)
2. Install Klaviyo on Shopify
3. Replace the Google Form in `index.html` with a Klaviyo embedded form snippet
4. Set up flows:
   - **Welcome series** — triggered on signup
   - **Abandoned cart** — triggered by Shopify
   - **Drop announcement** — manual campaign for new products
   - **Post-purchase** — review request + upsell

---

### 7 — Deploy to GitHub Pages

The marketing site (`index.html`) is hosted free on GitHub Pages.

1. Push to `main` branch of this repo
2. GitHub → Settings → Pages → Deploy from `main` / root
3. Custom domain: `itsthebeard.com`

DNS A records (at your registrar):
```
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
```
CNAME for www:
```
CNAME  www  YOUR_GITHUB_USERNAME.github.io
```

Enable **Enforce HTTPS** in GitHub Pages settings after DNS propagates.

---

## Revenue Model

```
Apparel (Tee $34.99)
  − Printful base cost:  ~$14–16
  = Gross margin:        ~$19–21  (54–60%)

Hoodie ($59.99)
  − Printful base cost:  ~$26–30
  = Gross margin:        ~$30–34  (50–57%)

Beard Oil ($24.99)
  − Dropship cost:       ~$8–12
  = Gross margin:        ~$13–17  (52–68%)

Full Kit ($64.99)
  − Bundled cost:        ~$22–28
  = Gross margin:        ~$37–43  (57–66%)

Amazon Merch (Tee at $34.99)
  − Amazon takes:        ~$21–24 (printing + fee)
  = Royalty:             ~$11–14  (31–40%) — passive, no effort
```

---

## Brand Notes

- **Fonts:** Cinzel, Crimson Text, Oswald
- **Palette:** Ink (`#0e0b07`), Amber (`#c8882a`), Parchment (`#f5efe3`)
- **Sister brand:** [originalbeardking.com](https://www.originalbeardking.com)
- **Tone:** Brotherhood, earned, premium, unapologetic
