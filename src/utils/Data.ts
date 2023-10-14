import { CategoriesProps, dataProps,  } from "./constants/Interface";
import { minMaxImg } from "./constants/Type";

export const imagesT: minMaxImg = [
    require("../../assets/img/pfe/9bb254fc-866e-41de-9aa7-17fd19a541a0.webp"),
    require("../../assets/img/pfe/1000x620xc.webp"),
    require("../../assets/img/pfe/dc006023-a4c2-449a-adc3-de5480c46d54.webp"),
    require("../../assets/img/pfe/img4.png"),
    require("../../assets/img/pfe/img5.jpg"),
    require("../../assets/img/pfe/dc006023-a4c2-449a-adc3-de5480c46d54.webp"),
    require("../../assets/img/pfe/dc006023-a4c2-449a-adc3-de5480c46d54.webp"),
    require("../../assets/img/pfe/dc006023-a4c2-449a-adc3-de5480c46d54.webp"),
    require("../../assets/img/pfe/img4.png"),
    require("../../assets/img/pfe/img5.jpg"),
    require("../../assets/img/pfe/dc006023-a4c2-449a-adc3-de5480c46d54.webp"),
    require("../../assets/img/pfe/dc006023-a4c2-449a-adc3-de5480c46d54.webp"),
  ];


  export const CATEGORIES: CategoriesProps[] = [
    { id: '1', name: 'All', icon: 'menu' },
    { id: '2', name: 'Student', icon: 'school' },
    { id: '3', name: 'luxury', icon: 'hot-tub'},
    { id: '4', name: 'duplex', icon: 'apartment' },
    { id: '5', name: 'couple', icon: 'people' },
    { id: '6', name: 's+0', icon: 'single-bed' },
    { id: '7', name: 's+1', icon: 'weekend' },
    { id: '8', name: 's+2', icon: 'king-bed' },
    { id: '9', name: 's+3', icon: 'meeting-room' },
    { id: '10', name: 's+4', icon: 'hotel' },
    // Ajoutez d'autres catégories si nécessaire
  ];
  
  
  
  export const data: dataProps[] = [
      {
          id: '1',
          location : 'Tunis, Tunisie',
          title: 'Single Appart',
          date: '10 Oct 2023',
          rent: 'Month',
          description: [
              'Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.',
              'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"'
          ],
          price: '418 dt',
          image: imagesT,
          fav: false,

        },
        {
          id: '1',
          location : 'Monastir, Tunisie',
          title: 'Couple Appart',
          date: '10 Oct 2023',
          rent: 'Month',
          description: [
              'Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.',
              'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"'
          ],
          price: '718 dt',
          image: imagesT,
          fav: false,

        },
        {
          id: '1',
          location : 'Ariana , Tunis',
          title: 'Student Appart',
          date: '10 Oct 2023',
          rent: 'Month',
          description: [
              'Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.',
              'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"'
          ],
          price: '518 dt',
          image: imagesT,
          fav: true,
        },     
  ];



  /*const reviews: Review[] = [
    {
      imageUser: 'user1.jpg',
      comment: 'Excellent service. Highly recommended!',
      star: 5,
      date: '2023-07-31',
    },
    {
      imageUser: 'user2.jpg',
      comment: 'Great product! Will buy again.',
      star: 4,
      date: '2023-07-30',
    },
    {
      imageUser: 'user3.jpg',
      comment: 'Fast shipping and good packaging.',
      star: 4,
      date: '2023-07-29',
    },
    {
      imageUser: 'user4.jpg',
      comment: 'Not as expected. Disappointed.',
      star: 2,
      date: '2023-07-28',
    },
    {
      imageUser: 'user5.jpg',
      comment: 'Good quality. Happy with my purchase.',
      star: 4,
      date: '2023-07-27',
    },
    {
      imageUser: 'user6.jpg',
      comment: 'Beautiful design. Love it!',
      star: 5,
      date: '2023-07-26',
    },
    {
      imageUser: 'user7.jpg',
      comment: 'Average product. Could be better.',
      star: 3,
      date: '2023-07-25',
    },
    {
      imageUser: 'user8.jpg',
      comment: 'Amazing customer service!',
      star: 5,
      date: '2023-07-24',
    },
    {
      imageUser: 'user9.jpg',
      comment: 'Not worth the price.',
      star: 2,
      date: '2023-07-23',
    },
    {
      imageUser: 'user10.jpg',
      comment: 'Great value for money.',
      star: 4,
      date: '2023-07-22',
    },
  ];*/