# React E-Commerce Store (Work in Progress)  
https://novamart-alpha.vercel.app

<img width="1920" height="923" alt="image" src="https://github.com/user-attachments/assets/2a53e545-e96f-4cbf-8930-d4a1c39a0b6b" />
<img width="1919" height="922" alt="image" src="https://github.com/user-attachments/assets/42a4190f-2a52-4727-a68e-07fd4c0040f1" />

A modern, responsive e-commerce store built with React featuring dynamic product listings, detailed product views, smooth animations, seamless client-side routing, and full cart functionality. The app fetches product data from a public API and showcases curated top-selling products with real-time star ratings, discounts, and a fully functional shopping cart.

---

## Project Overview

This React e-commerce application provides a clean, user-friendly shopping experience, featuring:

- Dynamic product cards showing images, names, prices, and discount badges.
- Accurate star ratings using full, half, and empty star icons.
- Animated entrance and interaction effects for an engaging UI.
- Clickable product cards navigating to detailed product pages with full product info.
- Add to cart functionality with global cart state management.
- Responsive layouts optimized for desktops, tablets, and mobile devices.
- Integration with React Router for smooth client-side navigation and deep linking.
- Product filters by category and dynamic product loading.
- Cart management with item quantity adjustment and removal.
- Accessible keyboard navigation and ARIA labels.

---

## Current Status

✅ **Core features implemented and stable:**  
- Product listing with category filtering  
- Product details page with dynamic routing  
- Add to cart functionality with isolated button clicks  
- Responsive design with Tailwind CSS  
- Smooth animations using Framer Motion  
- Fully functional cart with item management  
- API integration with DummyJSON for product data  
- Error handling and loading states throughout the app  

⚠️ **Upcoming improvements:**  
- User authentication and profiles  
- Search, sorting, and advanced filtering  
- Payment gateway integration  
- Wishlist and user reviews  
- Unit and integration tests for robustness  

---

## Features Implemented

- Custom React hooks for fetching top products and category-based products.  
- Product cards with fallback images and discount badges.  
- Dynamic star rating display supporting half-stars.  
- Animated page and component transitions with Framer Motion.  
- React Router v6 for navigation between home, category, product details, and cart pages.  
- Add to cart button with event propagation handling to prevent unwanted navigation.  
- Global cart context for state management across components.  
- Responsive grid and flex layouts using Tailwind CSS.  
- Keyboard accessible interactive elements with proper ARIA roles.  

---

## Tech Stack

- React (Functional Components & Hooks)  
- React Router v6 for routing  
- Axios for API requests  
- Framer Motion for animation  
- Tailwind CSS for styling  
- React Icons for UI icons  
- Context API for global cart state  

---

## Project Structure

- `src/components`: Reusable UI components (product cards, categories, navbar, cart, etc.)  
- `src/hooks`: Custom hooks for fetching and managing API data  
- `src/context`: Context providers (e.g., CartContext)  
- `src/pages`: Page components (Home, Products, Categories, ProductDetail, Cart)  
- `src/api`: API utility functions for data fetching  
- `src/App.jsx`: Main app container with routing setup  
- `src/index.jsx`: Entry point  

---

## Getting Started

1. Clone the repo to your local machine.  
2. Run `npm install` or `yarn install` to install dependencies.  
3. Start the development server with `npm start` or `yarn start`.  
4. Open [http://localhost:3000](http://localhost:3000) in your browser.  

---

## Future Plans

- User authentication and profiles  
- Payment processing with gateways like Stripe or PayPal  
- Enhanced product search and sorting  
- Wishlist and product reviews  
- Loading skeletons and better UX for slow network  
- Unit and integration tests  

---

## Contribution

Contributions are welcome! Open issues or submit pull requests to help improve the project.

---

## Credits

- Product images courtesy of **[Unsplash](https://unsplash.com/)**  
- Product data and API from **[DummyJSON](https://dummyjson.com/)**  

---

## License

This project is licensed under the MIT License.

---

## Homepage Sections & API Categories Mapping

| Homepage Section             | API Categories to Use                                                                          |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| **Top Sellers**              | Mix of all high-rated items                                                                    |
| **Men’s Collection**         | mens-shirts, mens-shoes, mens-watches, sunglasses, sports-accessories                          |
| **Women’s Collection**       | womens-dresses, womens-bags, womens-jewellery, womens-shoes, womens-watches, beauty, skin-care |
| **Trending Electronics**     | smartphones, tablets, laptops                                                                  |
| **Accessories & Essentials** | mobile-accessories, sunglasses, womens-jewellery, sports-accessories                           |
| **Home & Lifestyle**         | furniture, home-decoration, kitchen-accessories, groceries                                     |
| **Beauty & Care**            | beauty, skin-care, fragrances                                                                  |
| **Vehicles & Outdoor Gear**  | motorcycle, vehicle                                                                            |

