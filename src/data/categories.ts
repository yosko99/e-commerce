import ICategory from '../interfaces/ICategory';

const categories: ICategory[] = [
  {
    _id: {
      $oid: '5172d1daffdd81f3234d5f88'
    },
    categories: [
      {
        categories: [
          {
            id: 'mens-clothing-suits',
            image: 'categories/mens-clothing-suits.webp',
            name: 'Suits',
            page_description:
              "Shop Men's suits for business or pleasure. Enjoy from a variety of different styles and cuts.",
            page_title: 'Mens Suits for Business and Casual',
            parent_category_id: 'mens-clothing',
            c_showInMenu: true
          },
          {
            id: 'mens-clothing-jackets',
            image: 'categories/mens-clothing-sportscoats.webp',
            name: 'Jackets & Coats',
            page_description:
              "Shop Men's Jackets, Coats & Outerwear. Classic outdoor-tested garments with traditional styling details that provide comfort, insulation and ease of movement, whatever the weather.",
            page_title: "Men's Jackets Including Jackets & Blazzers",
            parent_category_id: 'mens-clothing',
            c_showInMenu: true
          },
          {
            id: 'mens-clothing-dress-shirts',
            image: 'categories/mens-clothing-dress-shirts.webp',
            name: 'Dress Shirts',
            page_description:
              "Shop Men's dress shirts in a variety of colors and styles including striped, button down, non-iron & more",
            page_title:
              "Men's Dress Shirts including Striped, Button Down, Non-Iron & More",
            parent_category_id: 'mens-clothing',
            c_showInMenu: true
          },
          {
            id: 'mens-clothing-shorts',
            image: 'categories/mens-clothing-shorts.webp',
            name: 'Shorts',
            page_description:
              "Shop Men's spring shorts in cotton. Variety of different fits.",
            page_title: "Men's Spring Shorts",
            parent_category_id: 'mens-clothing',
            c_showInMenu: true
          },
          {
            id: 'mens-clothing-pants',
            image: 'categories/mens-clothing-pants.webp',
            name: 'Pants',
            page_description:
              "Shop Men's Trousers. Practical, easy-to-wear styles wherever you're headed. Check out famous rugged, long-lasting trousers, jeans, cargo pants and more.",
            page_title:
              "Men's Pants Including Khakis, Cargos, Trousers, Jeans & More",
            parent_category_id: 'mens-clothing',
            c_showInMenu: true
          }
        ],
        id: 'mens-clothing',
        image: 'categories/mens-clothing-accessories.webp',
        name: 'Clothing',
        page_description:
          "Shop Men's Clothing. Relaxed, timeless classics you can rely on; from denim to corduroys and sweaters to shirts. Huge range of contemporary colours and eco-aware designs: great casualwear.",
        page_title: 'Mens Clothing Including Suits, Tops, Bottoms & More',
        parent_category_id: 'mens',
        c_showInMenu: true
      },
      {
        categories: [
          {
            id: 'mens-accessories-ties',
            image: 'categories/mens-accessories-ties.webp',
            name: 'Ties',
            page_description:
              "Shop Mens's Ties for all occasions including business or casual.",
            page_title: "Men's Casual and Business Ties",
            parent_category_id: 'mens-accessories',
            c_showInMenu: true
          },
          {
            id: 'mens-accessories-gloves',
            name: 'Gloves',
            image: 'categories/mens-gloves.webp',
            page_description:
              "Shop Men'sGloves. Versatile, commuter, boot, oxford, deer and resolve gloves. All with famous long-lasting quality.",
            page_title: "Men's Gloves",
            parent_category_id: 'mens-accessories',
            c_showInMenu: true
          },
          {
            id: 'mens-accessories-luggage',
            image: 'categories/mens-accessories-luggage.webp',
            name: 'Luggage',
            page_description:
              "Shop Men's Wheeled Luggage. Versatile, rugged suitcases, baggage, holdalls and shoulder bags. All with famous long-lasting quality.",
            page_title: "Men's Wheeled Luggage",
            parent_category_id: 'mens-accessories',
            c_showInMenu: true
          }
        ],
        id: 'mens-accessories',
        name: 'Accessories',
        image: 'categories/mens-accessories.webp',
        page_description:
          'Shop mens accessories including belts, wallets. gloves, hats, watches, luggage & more.',
        page_title:
          "Men's Accessories Belts, Wallets. Gloves, Hats, Watches, Luggage & More",
        parent_category_id: 'mens',
        c_showInMenu: true
      }
    ],
    id: 'mens',
    name: 'Mens',
    page_description:
      "Men's range. Hard-wearing boots, jackets and clothing for unbeatable comfort day in, day out. Practical, easy-to-wear styles wherever you're headed.",
    page_title: "Men's Footwear, Outerwear, Clothing & Accessories",
    parent_category_id: 'root',
    c_showInMenu: true
  },
  {
    _id: {
      $oid: '5172d1daffdd81f3234d5f89'
    },
    categories: [
      {
        categories: [
          {
            id: 'womens-outfits',
            name: "Women's Outfits",
            image: 'categories/womens-clothing-banner.webp',
            page_description:
              "Shop Women's outfits for all occasions including formal, evening and casual in a variety of colors",
            page_title: "Women's Outfits for all Occasions",
            parent_category_id: 'womens-clothing',
            c_showInMenu: true
          },
          {
            id: 'womens-clothing-tops',
            image: 'categories/womens-clothing-tops.webp',
            name: 'Tops',
            page_description:
              "Shop Women's Shirts. Short and long sleeve, Oxford, smart, casual and classic styles for unbeatable comfort from your desk to the great outdoors.",
            page_title:
              "Women's Tops including Short & Long Sleeve, Casual, Classic & More",
            parent_category_id: 'womens-clothing',
            c_showInMenu: true
          },
          {
            id: 'womens-clothing-dresses',
            image: 'categories/womens-clothing-dresses.webp',
            name: 'Dresses',
            page_description:
              "Shop Women's dresses for all occasions including formal, evening and casual in a variety of colors",
            page_title: "Women's Dresses for all Occasions",
            parent_category_id: 'womens-clothing',
            c_showInMenu: true
          },
          {
            id: 'womens-clothing-bottoms',
            image: 'categories/womens-clothing-bottoms.webp',
            name: 'Bottoms',
            page_description:
              "Shop Women's Trousers. Practical, easy-to-wear styles wherever you're headed. Check out Timberland's famous rugged, long-lasting trousers, jeans, cargo pants and more.",
            page_title:
              "Women's Bottoms Including Khakis, Cargos, Trousers, Jeans & More",
            parent_category_id: 'womens-clothing',
            c_showInMenu: true
          },
          {
            id: 'womens-clothing-jackets',
            image: 'categories/womens-clothing-jackets.webp',
            name: 'Jackets & Coats',
            page_description:
              "Shop Women's Jackets, Coats & Outerwear. Classic outdoor-tested garments with traditional styling details that provide comfort, insulation and ease of movement, whatever the weather.",
            page_title: "Women's Outerwear Including Jackets & Collections",
            parent_category_id: 'womens-clothing',
            c_showInMenu: true
          }
        ],
        id: 'womens-clothing',
        image: 'categories/womens-clothing.webp',
        name: 'Clothing',
        page_description:
          "Shop Women's Clothing. Relaxed, timeless classics you can rely on; from denim to corduroys and sweaters to shirts. Huge range of contemporary colours and eco-aware designs: great casualwear.",
        page_title: 'Womens Clothing Including Outerwear, Tops, Bottoms & More',
        parent_category_id: 'womens',
        c_showInMenu: true
      },
      {
        categories: [
          {
            id: 'womens-jewelry-earrings',
            image: 'categories/womens-jewelry-earrings.webp',
            name: 'Earrings',
            page_description:
              "Shop Women's earrings in a variety of colors and styles including button, clip on and curved.",
            page_title:
              "Women's Earrings including Button Clip-on, Curved & More",
            parent_category_id: 'womens-jewelry',
            c_showInMenu: true
          },
          {
            id: 'womens-jewlery-bracelets',
            name: 'Bracelets',
            image: 'categories/womens-jewlery-bracelets.webp',
            page_description:
              "Shop Women's bracelets in a variety of colors and styles including stretched, beaded, cuff & more.",
            page_title:
              "Women's Bracelets including Stretched, Cuff, Beaded & More",
            parent_category_id: 'womens-jewelry',
            c_showInMenu: true
          },
          {
            id: 'womens-jewelry-necklaces',
            image: 'categories/womens-jewelry-necklaces.webp',
            name: 'Necklaces',
            page_description:
              "Shop Women's neclaces in a variety of colors and styles including drop, dangled & more.",
            page_title: "Women's Necklaces including Drop, Dangle & More",
            parent_category_id: 'womens-jewelry',
            c_showInMenu: true
          }
        ],
        id: 'womens-jewelry',
        image: 'categories/womens-jewelry.webp',
        name: 'Jewelry',
        page_description:
          "Shop Women's jewelery including earrings, bracelets and necklaces in a variety of colors and sizes",
        page_title:
          "Women's Jewelry including Earrings, Bracelets and Necklaces.",
        parent_category_id: 'womens',
        c_showInMenu: true
      },
      {
        categories: [
          {
            id: 'womens-accessories-scarves',
            image: 'categories/womens-accessories-ties.webp',
            name: 'Scarves',
            page_description:
              "Shop Women's Scarves inclduing tweed, pale, basket and spin all.",
            page_title: "Women's Scarves",
            parent_category_id: 'womens-accessories',
            c_showInMenu: true
          },
          {
            id: 'womens-accessories-shoes',
            image: 'categories/womens-accessories-footwear.webp',
            name: 'Shoes',
            page_description:
              'Shop for womens shoes including casual, flat, mid heel and high heels for any occassion',
            page_title:
              'Womens Shoes Including Casual, Flat, Mid Heels & High Heels',
            parent_category_id: 'womens-accessories',
            c_showInMenu: true
          }
        ],
        id: 'womens-accessories',
        image: 'categories/womens-accessories.webp',
        name: 'Accessories',
        page_description:
          'Shop womens accessories including belts, wallets. gloves, hats, watches, luggage & more.',
        page_title:
          "Women's Accessories Belts, Wallets. Gloves, Hats, Watches, Luggage & More",
        parent_category_id: 'womens',
        c_showInMenu: true
      }
    ],
    id: 'womens',
    name: 'Womens',
    page_description:
      "Women's range. Fashionable and stylish Shoes, jackets and  all other clothing for unbeatable comfort day in, day out. Practical and fashionable styles wherever the occasion.",
    page_title: "Women's Footwear, Outerwear, Clothing & Accessories",
    parent_category_id: 'root',
    c_showInMenu: true
  }
];

export default categories;
