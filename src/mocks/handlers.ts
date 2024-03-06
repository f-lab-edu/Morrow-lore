import { http, HttpResponse } from 'msw';
import { createApi } from 'unsplash-js';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
  sales: number;
}

const cart: Product[] = [];

const unsplash = createApi({
  accessKey: 'L1S4NmQPsA447oKCupFLPRMEEVxgu0HAodjESrpsxZQ',
});

const response = await unsplash.search.getPhotos({
  query: 'sneakers',
  perPage: 41,
});

const photoUrls =
  response.response?.results.map((photo) => photo.urls.small) || [];

const products = [
  {
    id: 0,
    name: `MORROWLORE-SB1100`,
    price: 278000,
    photo: photoUrls[1],
    sales: 15,
  },
  {
    id: 1,
    name: `MORROWLORE-SB1101`,
    price: 340000,
    photo: photoUrls[2],
    sales: 30,
  },
  {
    id: 2,
    name: `MORROWLORE-SB1102`,
    price: 210000,
    photo: photoUrls[3],
    sales: 20,
  },
  {
    id: 3,
    name: `MORROWLORE-SB1103`,
    price: 145000,
    photo: photoUrls[4],
    sales: 10,
  },
  {
    id: 4,
    name: `MORROWLORE-SB1104`,
    price: 197000,
    photo: photoUrls[5],
    sales: 10,
  },
  {
    id: 5,
    name: `MORROWLORE-SB1105`,
    price: 200000,
    photo: photoUrls[6],
    sales: 16,
  },
  {
    id: 6,
    name: `MORROWLORE-SB1106`,
    price: 340000,
    photo: photoUrls[7],
    sales: 24,
  },
  {
    id: 7,
    name: `MORROWLORE-SB1107`,
    price: 300000,
    photo: photoUrls[8],
    sales: 50,
  },
  {
    id: 8,
    name: `MORROWLORE-SB1108`,
    price: 158000,
    photo: photoUrls[9],
    sales: 25,
  },
  {
    id: 9,
    name: `MORROWLORE-SB1109`,
    price: 340000,
    photo: photoUrls[10],
    sales: 40,
  },
  {
    id: 10,
    name: `MORROWLORE-SB11010`,
    price: 270000,
    photo: photoUrls[11],
    sales: 5,
  },
  {
    id: 11,
    name: `MORROWLORE-SB11011`,
    price: 250000,
    photo: photoUrls[12],
    sales: 10,
  },
  {
    id: 12,
    name: `MORROWLORE-SB11012`,
    price: 300000,
    photo: photoUrls[13],
    sales: 10,
  },
  {
    id: 13,
    name: `MORROWLORE-SB11013`,
    price: 158000,
    photo: photoUrls[14],
    sales: 10,
  },
  {
    id: 14,
    name: `MORROWLORE-SB11014`,
    price: 55000,
    photo: photoUrls[15],
    sales: 10,
  },
  {
    id: 15,
    name: `MORROWLORE-SB11015`,
    price: 250000,
    photo: photoUrls[16],
    sales: 30,
  },
  {
    id: 16,
    name: `MORROWLORE-SB11016`,
    price: 310000,
    photo: photoUrls[17],
    sales: 17,
  },
  {
    id: 17,
    name: `MORROWLORE-SB11017`,
    price: 185000,
    photo: photoUrls[18],
    sales: 5,
  },
  {
    id: 18,
    name: `MORROWLORE-SB11018`,
    price: 200000,
    photo: photoUrls[19],
    sales: 10,
  },
  {
    id: 19,
    name: `MORROWLORE-SB11019`,
    price: 198000,
    photo: photoUrls[20],
    sales: 15,
  },
  {
    id: 20,
    name: `MORROWLORE-SB11020`,
    price: 210000,
    photo: photoUrls[21],
    sales: 10,
  },
  {
    id: 21,
    name: `MORROWLORE-SB11021`,
    price: 420000,
    photo: photoUrls[22],
    sales: 24,
  },
  {
    id: 22,
    name: `MORROWLORE-SB11022`,
    price: 245000,
    photo: photoUrls[23],
    sales: 15,
  },
  {
    id: 23,
    name: `MORROWLORE-SB11023`,
    price: 330000,
    photo: photoUrls[24],
    sales: 6,
  },
  {
    id: 24,
    name: `MORROWLORE-SB11024`,
    price: 179000,
    photo: photoUrls[25],
    sales: 30,
  },
  {
    id: 25,
    name: `MORROWLORE-SB11025`,
    price: 200000,
    photo: photoUrls[26],
    sales: 25,
  },
  {
    id: 26,
    name: `MORROWLORE-SB11026`,
    price: 287000,
    photo: photoUrls[27],
    sales: 10,
  },
  {
    id: 27,
    name: `MORROWLORE-SB11027`,
    price: 345000,
    photo: photoUrls[28],
    sales: 25,
  },
  {
    id: 28,
    name: `MORROWLORE-SB11028`,
    price: 452000,
    photo: photoUrls[29],
    sales: 42,
  },
  {
    id: 29,
    name: `MORROWLORE-SB11029`,
    price: 325000,
    photo: photoUrls[30],
    sales: 10,
  },
  {
    id: 30,
    name: `MORROWLORE-SB11030`,
    price: 278000,
    photo: photoUrls[31],
    sales: 25,
  },
  {
    id: 31,
    name: `MORROWLORE-SB11031`,
    price: 200000,
    photo: photoUrls[32],
    sales: 10,
  },
  {
    id: 32,
    name: `MORROWLORE-SB11032`,
    price: 66000,
    photo: photoUrls[33],
    sales: 10,
  },
  {
    id: 33,
    name: `MORROWLORE-SB11033`,
    price: 280000,
    photo: photoUrls[34],
    sales: 15,
  },
  {
    id: 34,
    name: `MORROWLORE-SB11034`,
    price: 390000,
    photo: photoUrls[35],
    sales: 25,
  },
  {
    id: 35,
    name: `MORROWLORE-SB11035`,
    price: 200000,
    photo: photoUrls[36],
    sales: 25,
  },
  {
    id: 36,
    name: `MORROWLORE-SB11036`,
    price: 350000,
    photo: photoUrls[37],
    sales: 20,
  },
  {
    id: 37,
    name: `MORROWLORE-SB11037`,
    price: 185000,
    photo: photoUrls[38],
    sales: 10,
  },
  {
    id: 38,
    name: `MORROWLORE-SB11038`,
    price: 200000,
    photo: photoUrls[39],
    sales: 25,
  },
  {
    id: 39,
    name: `MORROWLORE-SB11039`,
    price: 390000,
    photo: photoUrls[40],
    sales: 25,
  },
  {
    id: 40,
    name: `MORROWLORE-SB11040`,
    price: 440000,
    photo: photoUrls[41],
    sales: 45,
  },
];

export const handlers = [
  http.get('/api/products', () => {
    try {
      return HttpResponse.json(products);
    } catch (error) {
      return HttpResponse.error();
    }
  }),
  http.get(`/api/products/:productId`, ({ params }) => {
    const { productId } = params;
    try {
      const id = parseInt(productId);
      const product = products.find((x) => x.id === id);
      return HttpResponse.json(product);
    } catch (error) {
      return HttpResponse.error();
    }
  }),
  http.put(`/api/cart`, async ({ request }) => {
    const productData = await request.json();

    if (
      typeof productData === 'object' &&
      productData !== null &&
      'product' in productData
    ) {
      try {
        cart.push(productData.product);
        localStorage.setItem('myCart', JSON.stringify(cart));
        return HttpResponse.json(cart);
      } catch (error) {
        return HttpResponse.error();
      }
    } else {
      return HttpResponse.error();
    }
  }),
  http.get(`/api/cart`, () => {
    try {
      const itemInCarts = JSON.parse(localStorage.getItem('myCart') ?? '[]');
      return HttpResponse.json(itemInCarts);
    } catch (error) {
      return HttpResponse.error();
    }
  }),
  http.delete(`/api/cart`, async ({ request }) => {
    const productData = (await request.json()) as { id: number } | null;

    if (productData && typeof productData.id === 'number') {
      try {
        const cart: Product[] = JSON.parse(
          localStorage.getItem('myCart') ?? '[]',
        );
        const newCart = cart.filter((item) => item.id !== productData.id);
        localStorage.setItem('myCart', JSON.stringify(newCart));
        return HttpResponse.json({ newCart });
      } catch (error) {
        return HttpResponse.error();
      }
    } else {
      return HttpResponse.error();
    }
  }),
];
