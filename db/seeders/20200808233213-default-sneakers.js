'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sneakers', [
    {
      "id": "331e4f50-ea2e-457a-9d7a-f32cd911213b",
            "brand": "Jordan",
            "colorway": "Washed Denim/Sail-Varsity Red-Black",
            "gender": "men",
            "name": "Washed Denim",
            "releaseDate": "2019-12-28 23:59:59",
            "retailPrice": 200,
            "shoe": "Jordan 6 Retro",
            "styleId": "CT5350-401",
            "title": "Jordan 6 Retro Washed Denim",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-6-Retro-Washed-Denim-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1577992775",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-6-Retro-Washed-Denim-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1577992775",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-6-Retro-Washed-Denim-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1577992775"
            }
          },
          {
            "id": "593cd541-09c5-4a2f-be6a-203d5216c037",
            "brand": "Jordan",
            "colorway": "White/White-University Blue-Midnight Navy",
            "gender": "men",
            "name": "UNC",
            "releaseDate": "2019-12-28 23:59:59",
            "retailPrice": 140,
            "shoe": "Jordan Team Showcase",
            "styleId": "CD4150-104",
            "title": "Jordan Team Showcase UNC",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Team-Showcase-UNC.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1578035963",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Team-Showcase-UNC.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1578035963",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Team-Showcase-UNC.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1578035963"
            }
          },
          {
            "id": "8587a6d1-2f89-4b48-a829-480748eb39ec",
            "brand": "Jordan",
            "colorway": "Gym Red/Black-White",
            "gender": "men",
            "name": "Gym Red Black",
            "releaseDate": "2019-12-28 23:59:59",
            "retailPrice": 140,
            "shoe": "Jordan Team Showcase",
            "styleId": "CD4150-600",
            "title": "Jordan Team Showcase Gym Red Black",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Team-Showcase-Gym-Red-Black.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1578035963",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Team-Showcase-Gym-Red-Black.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1578035963",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Team-Showcase-Gym-Red-Black.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1578035963"
            }
          },
          {
            "id": "5b03d74c-512b-4386-8ad9-0b1c5afbc435",
            "brand": "Jordan",
            "colorway": "Green/Red-White",
            "gender": "men",
            "name": "Wrapping Paper PE",
            "releaseDate": "2019-12-25 23:59:59",
            "retailPrice": null,
            "shoe": "Jordan XXXIV",
            "styleId": null,
            "title": "Jordan XXXIV Wrapping Paper PE",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1585938877",
              "smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1585938877",
              "thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1585938877"
            }
          },
          {
            "id": "75d43dc2-894d-4b6c-9957-7f476a47263b",
            "brand": "Jordan",
            "colorway": "White/Varsity Maize-Midnight Navy",
            "gender": "men",
            "name": "Michigan PE",
            "releaseDate": "2019-12-25 23:59:59",
            "retailPrice": null,
            "shoe": "Jordan 1 Retro High",
            "styleId": null,
            "title": "Jordan 1 Retro High Michigan PE",
            "year": 2019,
            "media": {
              "imageUrl": null,
              "smallImageUrl": null,
              "thumbUrl": null
            }
          },
          {
            "id": "acf79f20-76f6-4a47-8b3d-80e87fa4316f",
            "brand": "Jordan",
            "colorway": "Black/White-Noble Red",
            "gender": "men",
            "name": "Black Noble Red",
            "releaseDate": "2019-12-24 23:59:59",
            "retailPrice": 170,
            "shoe": "Jordan 1 High React",
            "styleId": "AR5321-006",
            "title": "Jordan 1 High React Black Noble Red",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-High-React-Black-Noble-Red.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1577723511",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-High-React-Black-Noble-Red.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1577723511",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-High-React-Black-Noble-Red.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1577723511"
            }
          },
          {
            "id": "d1e2718d-b96b-4350-a697-7429db023987",
            "brand": "Jordan",
            "colorway": "Black/Gym Red-White",
            "gender": "men",
            "name": "Bloodline Athlete PE",
            "releaseDate": "2019-12-21 23:59:59",
            "retailPrice": null,
            "shoe": "Jordan 1 Retro High",
            "styleId": null,
            "title": "Jordan 1 Retro High Bloodline Athlete PE",
            "year": 2019,
            "media": {
              "imageUrl": null,
              "smallImageUrl": null,
              "thumbUrl": null
            }
          },
          {
            "id": "f8b0aa1e-b435-42ac-97ad-c71fb4d0cdee",
            "brand": "Jordan",
            "colorway": "Loyal Blue/White-Habanero Red-Black",
            "gender": "men",
            "name": "Winterized Loyal Blue",
            "releaseDate": "2019-12-21 23:59:59",
            "retailPrice": 200,
            "shoe": "Jordan 4 Retro",
            "styleId": "CQ9597-401",
            "title": "Jordan 4 Retro Winterized Loyal Blue",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-4-Retro-Winter-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-4-Retro-Winter-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-4-Retro-Winter-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585"
            }
          },
          {
            "id": "25d5a313-b126-48f1-baf9-0170ca3733f1",
            "brand": "Jordan",
            "colorway": "Black/Metallic Silver-White-Digital Pink",
            "gender": "men",
            "name": "Chinese New Year",
            "releaseDate": "2019-12-20 23:59:59",
            "retailPrice": 180,
            "shoe": "Jordan XXXIV",
            "styleId": "AR3240-016",
            "title": "Jordan XXXIV Chinese New Year",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Black-Digital-Pink-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1579298154",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Black-Digital-Pink-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1579298154",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Black-Digital-Pink-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1579298154"
            }
          },
          {
            "id": "3a8d89b5-d8dd-4ce7-a79b-bbb058dd1b25",
            "brand": "Jordan",
            "colorway": "Black/Black-Black",
            "gender": "men",
            "name": "Triple Black",
            "releaseDate": "2019-12-20 23:59:59",
            "retailPrice": 160,
            "shoe": "Jordan Dub Zero",
            "styleId": "311046-003",
            "title": "Jordan Dub Zero Triple Black",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Dub-Zero-Triple-Black-1.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576792902",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Dub-Zero-Triple-Black-1.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576792902",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Dub-Zero-Triple-Black-1.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576792902"
            }
          },
          {
            "id": "45128f0a-b4c3-4529-8a25-767bf5ee0334",
            "brand": "Jordan",
            "colorway": "Black/Sail/Gum Light Brown/Multi-Color",
            "gender": "men",
            "name": "Animal Instinct",
            "releaseDate": "2019-12-19 23:59:59",
            "retailPrice": 225,
            "shoe": "Jordan 3 Retro SE",
            "styleId": "CK4344-002",
            "title": "Jordan 3 Retro SE Animal Instinct",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-3-Retro-Animal-Pack-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-3-Retro-Animal-Pack-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-3-Retro-Animal-Pack-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585"
            }
          },
          {
            "id": "325cca21-9d71-4ab8-a5ad-458fed096d1b",
            "brand": "Jordan",
            "colorway": "Pure Platinum/Pure Platinum-Sail-White",
            "gender": "men",
            "name": "Sneakersnstuff 20th Anniversary",
            "releaseDate": "2019-12-18 23:59:59",
            "retailPrice": 200,
            "shoe": "Jordan Proto Max 720",
            "styleId": "CT3444-001",
            "title": "Jordan Proto Max 720 Sneakersnstuff 20th Anniversary",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Proto-Max-720-Sneakersnstuff-20th-Anniversary-Regular-Box-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1578691530",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Proto-Max-720-Sneakersnstuff-20th-Anniversary-Regular-Box-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1578691530",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Proto-Max-720-Sneakersnstuff-20th-Anniversary-Regular-Box-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1578691530"
            }
          },
          {
            "id": "ca4d82bf-2624-4161-b448-ef95c1395191",
            "brand": "Jordan",
            "colorway": "Sail/Wolf Grey-Gym Red-White",
            "gender": "men",
            "name": "Sneakersnstuff 20th Anniversary",
            "releaseDate": "2019-12-18 23:59:59",
            "retailPrice": 140,
            "shoe": "Jordan 1 Mid",
            "styleId": "CT3443-100",
            "title": "Jordan 1 Mid Sneakersnstuff 20th Anniversary",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Sneakersnstuff-20th-Anniversary-Regular-Box-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1577992775",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Sneakersnstuff-20th-Anniversary-Regular-Box-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1577992775",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Sneakersnstuff-20th-Anniversary-Regular-Box-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1577992775"
            }
          },
          {
            "id": "f99cc91e-f417-43aa-97fc-fbe3413c9226",
            "brand": "Jordan",
            "colorway": "Sail/White-Pure Platinum-Wolf Grey",
            "gender": "men",
            "name": "Sneakersnstuff 20th Anniversary",
            "releaseDate": "2019-12-18 23:59:59",
            "retailPrice": 160,
            "shoe": "Jordan Mars 270",
            "styleId": "CT3445-100",
            "title": "Jordan Mars 270 Sneakersnstuff 20th Anniversary",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Sneakersnstuff-20th-Anniversary-Regular-Box-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1577992775",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Sneakersnstuff-20th-Anniversary-Regular-Box-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1577992775",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Sneakersnstuff-20th-Anniversary-Regular-Box-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1577992775"
            }
          },
          {
            "id": "97abd082-288d-47e1-9cad-13110774933d",
            "brand": "Jordan",
            "colorway": "Black/White-Varsity Red",
            "gender": "men",
            "name": "Playoffs Bred (2019)",
            "releaseDate": "2019-12-14 23:59:59",
            "retailPrice": 220,
            "shoe": "Jordan 11 Retro",
            "styleId": "378037-061",
            "title": "Jordan 11 Retro Playoffs Bred (2019)",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-11-Retro-Playoffs-2019-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574092689",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-11-Retro-Playoffs-2019-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574092689",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-11-Retro-Playoffs-2019-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574092689"
            }
          },
          {
            "id": "3c8a554c-d35e-45df-a554-f1bd18ce941e",
            "brand": "Jordan",
            "colorway": "Noble Red/Black-White-Noble Red",
            "gender": "men",
            "name": "Noble Red",
            "releaseDate": "2019-12-10 23:59:59",
            "retailPrice": 90,
            "shoe": "Jordan 1 Low",
            "styleId": "553558-604",
            "title": "Jordan 1 Low Noble Red",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-Noble-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1584757351",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-Noble-Red-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1584757351",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-Noble-Red-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1584757351"
            }
          },
          {
            "id": "66a056fa-ebae-44ed-9bc6-db279f106677",
            "brand": "Jordan",
            "colorway": "Black/Gym Red-White-Pine Green",
            "gender": "men",
            "name": "Green Toe",
            "releaseDate": "2019-12-10 23:59:59",
            "retailPrice": 110,
            "shoe": "Jordan 1 Mid",
            "styleId": "554724-067",
            "title": "Jordan 1 Mid Green Toe",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Green-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1581110770",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Green-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1581110770",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Green-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1581110770"
            }
          },
          {
            "id": "d28ab5ac-fde1-48f2-a8d4-fc975ded1b42",
            "brand": "Jordan",
            "colorway": "Yellow Strike/Green Apple-Black-White",
            "gender": "men",
            "name": "Oregon Ducks PE",
            "releaseDate": "2019-12-10 23:59:59",
            "retailPrice": null,
            "shoe": "Jordan 7 Retro",
            "styleId": null,
            "title": "Jordan 7 Retro Oregon Ducks PE",
            "year": 2019,
            "media": {
              "imageUrl": null,
              "smallImageUrl": null,
              "thumbUrl": null
            }
          },
          {
            "id": "6656075a-cbd3-4a25-82bf-cf7c1e127969",
            "brand": "Jordan",
            "colorway": "Desert Ore/Royal Blue-Dark Powder Blue",
            "gender": "men",
            "name": "Lance Mountain Desert Ore",
            "releaseDate": "2019-12-09 23:59:59",
            "retailPrice": 120,
            "shoe": "Jordan 1 Low SB QS",
            "styleId": "CJ7891-200",
            "title": "Jordan 1 Low SB QS Lance Mountain Desert Ore",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-SB-Desert-Ore-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576082456",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-SB-Desert-Ore-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576082456",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-SB-Desert-Ore-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576082456"
            }
          },
          {
            "id": "197d59a8-99de-4773-9cc0-5d34bc26d45d",
            "brand": "Jordan",
            "colorway": "White/Black-Red",
            "gender": "men",
            "name": "Fearless Edison Chen CLOT",
            "releaseDate": "2019-12-07 23:59:59",
            "retailPrice": 130,
            "shoe": "Jordan 1 Mid SE",
            "styleId": "CU2804-100",
            "title": "Jordan 1 Mid SE Fearless Edison Chen CLOT",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-SE-Fearless-Edison-Chen-CLOT-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-SE-Fearless-Edison-Chen-CLOT-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-SE-Fearless-Edison-Chen-CLOT-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585"
            }
          },
          {
            "id": "346f844e-9064-4189-8898-4126701fc13e",
            "brand": "Jordan",
            "colorway": "Black/Multi-Color",
            "gender": "men",
            "name": "Doernbecher (2019)",
            "releaseDate": "2019-12-07 23:59:59",
            "retailPrice": 200,
            "shoe": "Jordan 14 Retro",
            "styleId": "CV2469-001",
            "title": "Jordan 14 Retro Doernbecher (2019)",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-14-Retro-Doernbecher-2019-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576268776",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-14-Retro-Doernbecher-2019-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576268776",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-14-Retro-Doernbecher-2019-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576268776"
            }
          },
          {
            "id": "e4941a3d-33ea-4313-b08f-fe63c8e48759",
            "brand": "Jordan",
            "colorway": "Multi-Color/Black-Lucky Green-Varsity Red",
            "gender": "men",
            "name": "Zoom Fearless",
            "releaseDate": "2019-12-07 23:59:59",
            "retailPrice": 175,
            "shoe": "Jordan 1 Retro High",
            "styleId": "BV0006-900",
            "title": "Jordan 1 Retro High Zoom Fearless",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Fearless-Zoom-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574449122",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Fearless-Zoom-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574449122",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Fearless-Zoom-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574449122"
            }
          },
          {
            "id": "214c9c35-9736-4857-9a62-dcc1d2d71b17",
            "brand": "Jordan",
            "colorway": "Black/Anthracite-Sail",
            "gender": "men",
            "name": "Satin Grey Toe",
            "releaseDate": "2019-12-05 23:59:59",
            "retailPrice": 120,
            "shoe": "Jordan 1 Mid",
            "styleId": "852542-011",
            "title": "Jordan 1 Mid Satin Grey Toe",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Satin-Grey-Toe.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574719854",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Satin-Grey-Toe.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574719854",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Satin-Grey-Toe.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574719854"
            }
          },
          {
            "id": "a796e9ac-1e51-4413-8991-49a2064a8a45",
            "brand": "Jordan",
            "colorway": "Multi-Color/Black-White",
            "gender": "men",
            "name": "TNT",
            "releaseDate": "2019-12-05 23:59:59",
            "retailPrice": 150,
            "shoe": "Jordan Why Not Zer0.2 SE",
            "styleId": "CW6565-900",
            "title": "Jordan Why Not Zer0.2 SE TNT",
            "year": 2019,
            "media": {
              "imageUrl": null,
              "smallImageUrl": null,
              "thumbUrl": null
            }
          },
          {
            "id": "b52d872e-5ea0-46b7-827c-9ce49e0b8aae",
            "brand": "Jordan",
            "colorway": "White/Dark Grey-Gym Red",
            "gender": "men",
            "name": "White Dark Grey",
            "releaseDate": "2019-12-02 23:59:59",
            "retailPrice": 190,
            "shoe": "Jordan 12 Retro",
            "styleId": "130690-160",
            "title": "Jordan 12 Retro White Dark Grey",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-12-Retro-White-Dark-Grey.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574940815",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-12-Retro-White-Dark-Grey.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574940815",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-12-Retro-White-Dark-Grey.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574940815"
            }
          },
          {
            "id": "d2e95412-9f16-48e9-afd8-665313491572",
            "brand": "Jordan",
            "colorway": "Black/Anthracite-Varsity Red-Black",
            "gender": "men",
            "name": "Black Anthracite",
            "releaseDate": "2019-12-02 23:59:59",
            "retailPrice": 200,
            "shoe": "Jordan 14 Retro SE",
            "styleId": "BQ3685-001",
            "title": "Jordan 14 Retro SE Black Anthracite",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-14-Retro-SE-Black-Anthracite-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-14-Retro-SE-Black-Anthracite-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-14-Retro-SE-Black-Anthracite-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585"
            }
          },
          {
            "id": "b9404064-2b56-42d5-b08b-d1af9e82e286",
            "brand": "Jordan",
            "colorway": "Black/Metallic Silver-Fire Red-White-Black",
            "gender": "men",
            "name": "Black Metallic Silver",
            "releaseDate": "2019-12-01 23:59:59",
            "retailPrice": 160,
            "shoe": "Jordan Mars 270",
            "styleId": "CD7070-010",
            "title": "Jordan Mars 270 Black Metallic Silver",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Black-Metallic-Silver-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1580507684",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Black-Metallic-Silver-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1580507684",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Black-Metallic-Silver-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1580507684"
            }
          },
          {
            "id": "dbe8db62-2ac0-4f9e-bcf1-40e1efe326fb",
            "brand": "Jordan",
            "colorway": "Pale Vanilla/Cinnamon",
            "gender": "men",
            "name": "Fearless Maison Chateau Rouge",
            "releaseDate": "2019-11-30 23:59:59",
            "retailPrice": 130,
            "shoe": "Jordan 1 Mid SE",
            "styleId": "CU2803-200",
            "title": "Jordan 1 Mid SE Fearless Maison Chateau Rouge",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-SE-Fearless-Maison-Chateau-Rouge-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-SE-Fearless-Maison-Chateau-Rouge-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-SE-Fearless-Maison-Chateau-Rouge-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585"
            }
          },
          {
            "id": "1d034d09-da78-42fe-9280-2e7f1adcff43",
            "brand": "Jordan",
            "colorway": "Black/Gym Red-White",
            "gender": "men",
            "name": "Bloodline",
            "releaseDate": "2019-11-29 23:59:59",
            "retailPrice": 160,
            "shoe": "Jordan 1 Retro High",
            "styleId": "555088-062",
            "title": "Jordan 1 Retro High Bloodline",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Bloodlines.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573759145",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Bloodlines.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573759145",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Bloodlines.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573759145"
            }
          },
          {
            "id": "6974bbfc-7c29-425b-9ec8-9ccb8ea017bb",
            "brand": "Jordan",
            "colorway": "Amber Rise/Black-Sail-Metallic Silver",
            "gender": "men",
            "name": "Amber Rise",
            "releaseDate": "2019-11-28 23:59:59",
            "retailPrice": 180,
            "shoe": "Jordan XXXIV",
            "styleId": "AR3240-800",
            "title": "Jordan XXXIV Amber Rise",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Amber-Rise-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1578691530",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Amber-Rise-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1578691530",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Amber-Rise-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1578691530"
            }
          },
          {
            "id": "64ebe466-ee30-42b4-9baf-b1891f4d26f9",
            "brand": "Jordan",
            "colorway": "White/Military Blue-Fire Red-Black-Cement Grey",
            "gender": "men",
            "name": "What The",
            "releaseDate": "2019-11-23 23:59:59",
            "retailPrice": 200,
            "shoe": "Jordan 4 Retro",
            "styleId": "CI1184-146",
            "title": "Jordan 4 Retro What The",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-4-Retro-What-The.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574110847",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-4-Retro-What-The.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574110847",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-4-Retro-What-The.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574110847"
            }
          },
          {
            "id": "15fd40de-583c-42cf-b5bc-b7721c4054fb",
            "brand": "Jordan",
            "colorway": "White/Black-Multi",
            "gender": "men",
            "name": "Facetasm",
            "releaseDate": "2019-11-22 23:59:59",
            "retailPrice": 130,
            "shoe": "Jordan 1 Mid Fearless",
            "styleId": "CU2802-100",
            "title": "Jordan 1 Mid Fearless Facetasm",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Facetasm-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Facetasm-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Facetasm-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585"
            }
          },
          {
            "id": "97023fdb-45cf-4e29-b8c4-9b3aa8769dd8",
            "brand": "Jordan",
            "colorway": "Medium Grey/Gunsmoke-White",
            "gender": "men",
            "name": "Cool Grey",
            "releaseDate": "2019-11-22 23:59:59",
            "retailPrice": 220,
            "shoe": "Jordan 11 Retro Low Golf",
            "styleId": "AQ0963-002",
            "title": "Jordan 11 Retro Low Golf Cool Grey",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-11-Retro-Low-Golf-Cool-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-11-Retro-Low-Golf-Cool-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-11-Retro-Low-Golf-Cool-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585"
            }
          },
          {
            "id": "c5db43e7-3ba2-413d-8147-54a1e4ad3b9b",
            "brand": "Jordan",
            "colorway": "Grey/Orange-Black",
            "gender": "men",
            "name": "Dress Code PE",
            "releaseDate": "2019-11-20 23:59:59",
            "retailPrice": null,
            "shoe": "Jordan 4 Retro",
            "styleId": null,
            "title": "Jordan 4 Retro Dress Code PE",
            "year": 2019,
            "media": {
              "imageUrl": null,
              "smallImageUrl": null,
              "thumbUrl": null
            }
          },
          {
            "id": "930944b3-6075-4136-bb05-c7778666cf98",
            "brand": "Jordan",
            "colorway": "Black/Team Red",
            "gender": "men",
            "name": "Fearless Ghetto Gastro",
            "releaseDate": "2019-11-14 23:59:59",
            "retailPrice": 160,
            "shoe": "Jordan 1 Low React",
            "styleId": "CT6416-001",
            "title": "Jordan 1 Low React Fearless Ghetto Gastro",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-React-Fearless-Ghetto-Gastro.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588566300",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-React-Fearless-Ghetto-Gastro.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588566300",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-React-Fearless-Ghetto-Gastro.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588566300"
            }
          },
          {
            "id": "d184b1eb-ca39-49ad-beb4-cecf5a693d9a",
            "brand": "Jordan",
            "colorway": "White/Aurora-Metallic Silver",
            "gender": "men",
            "name": "Guo Ailun",
            "releaseDate": "2019-11-13 23:59:59",
            "retailPrice": 180,
            "shoe": "Jordan XXXIV",
            "styleId": "BQ3381-103",
            "title": "Jordan XXXIV Guo Ailun",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Guo-Ailun.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573672106",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Guo-Ailun.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573672106",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Guo-Ailun.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573672106"
            }
          },
          {
            "id": "eccc7968-99c1-403c-ba46-faef57145300",
            "brand": "Jordan",
            "colorway": "Black/Flash Crimson-Amarillo-Vast Grey",
            "gender": "men",
            "name": "Birthday \"Scorpio\"",
            "releaseDate": "2019-11-12 23:59:59",
            "retailPrice": 130,
            "shoe": "Jordan Why Not Zer0.2 SE",
            "styleId": "AV4126-002/AQ3562-002",
            "title": "Jordan Why Not Zer0.2 SE Birthday \"Scorpio\"",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Why-Not-Zer0-2-SE-Scorpio.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573105410",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Why-Not-Zer0-2-SE-Scorpio.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573105410",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Why-Not-Zer0-2-SE-Scorpio.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573105410"
            }
          },
          {
            "id": "ec386fdb-f4c1-4495-bc02-31807dd87cd0",
            "brand": "Jordan",
            "colorway": "White/Black-White-Island Green",
            "gender": "men",
            "name": "Island Green",
            "releaseDate": "2019-11-11 23:59:59",
            "retailPrice": 225,
            "shoe": "Jordan 5 Retro",
            "styleId": "CN2932-100",
            "title": "Jordan 5 Retro Island Green",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-5-Retro-Island-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1575076215",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-5-Retro-Island-Green-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1575076215",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-5-Retro-Island-Green-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1575076215"
            }
          },
          {
            "id": "8579550f-d21a-4f33-b245-55330767b5ed",
            "brand": "Jordan",
            "colorway": "Muslin/Varsity Red-Royal-Taxi-Black",
            "gender": "men",
            "name": "Fearless Blue the Great",
            "releaseDate": "2019-11-09 23:59:59",
            "retailPrice": 130,
            "shoe": "Jordan 1 Mid SE",
            "styleId": "CU2805-100",
            "title": "Jordan 1 Mid SE Fearless Blue the Great",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-SE-Fearless-Blue-the-Great-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573576818",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-SE-Fearless-Blue-the-Great-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573576818",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-SE-Fearless-Blue-the-Great-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573576818"
            }
          },
          {
            "id": "f6f2433b-a0be-47e1-9933-a313cc1bde32",
            "brand": "Jordan",
            "colorway": "Black/Metallic Silver-Island Green",
            "gender": "men",
            "name": "Black Island Green",
            "releaseDate": "2019-11-09 23:59:59",
            "retailPrice": 200,
            "shoe": "Jordan 13 Retro",
            "styleId": "414571-030",
            "title": "Jordan 13 Retro Black Island Green",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-13-Retro-Black-Island-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-13-Retro-Black-Island-Green-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-13-Retro-Black-Island-Green-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731"
            }
          },
          {
            "id": "6c6ec5c0-be2d-4112-80b4-8ebe76c3f768",
            "brand": "Jordan",
            "colorway": "Blue/Orange-Yellow-Teal",
            "gender": "men",
            "name": "Sea Life PE",
            "releaseDate": "2019-11-08 23:59:59",
            "retailPrice": null,
            "shoe": "Jordan Why Not Zer0.2 SE",
            "styleId": null,
            "title": "Jordan Why Not Zer0.2 SE Sea Life PE",
            "year": 2019,
            "media": {
              "imageUrl": null,
              "smallImageUrl": null,
              "thumbUrl": null
            }
          },
          {
            "id": "30c64b7b-1edf-4223-89e7-a9c63913f4a2",
            "brand": "Jordan",
            "colorway": "Thunder Grey/Light Graphite-Gold Suede-Black",
            "gender": "men",
            "name": "N7 (2019)",
            "releaseDate": "2019-11-07 23:59:59",
            "retailPrice": 200,
            "shoe": "Jordan 8 Retro",
            "styleId": "CQ9601-001",
            "title": "Jordan 8 Retro N7 (2019)",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-8-Retro-N7-2019-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574449122",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-8-Retro-N7-2019-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574449122",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-8-Retro-N7-2019-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574449122"
            }
          },
          {
            "id": "ca79c1d7-19da-479b-915f-79a34cc0ca43",
            "brand": "Jordan",
            "colorway": "Black/Black-Metallic Silver",
            "gender": "men",
            "name": "Eclipse",
            "releaseDate": "2019-11-07 23:59:59",
            "retailPrice": 180,
            "shoe": "Jordan XXXIV",
            "styleId": "AR3240-001",
            "title": "Jordan XXXIV Eclipse",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Eclipse-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Eclipse-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Eclipse-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585"
            }
          },
          {
            "id": "bb48b0f1-531c-4ac0-8157-6831b4b595ea",
            "brand": "Jordan",
            "colorway": "White/University Blue-Varsity Red-Black",
            "gender": "men",
            "name": "Fearless UNC Chicago",
            "releaseDate": "2019-11-02 23:59:59",
            "retailPrice": 160,
            "shoe": "Jordan 1 Retro High",
            "styleId": "CK5666-100",
            "title": "Jordan 1 Retro High Fearless UNC Chicago",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Fearless-UNC-Chicago-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Fearless-UNC-Chicago-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Fearless-UNC-Chicago-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731"
            }
          },
          {
            "id": "65b2ff86-044e-49c8-8e0c-cea473efef0f",
            "brand": "Jordan",
            "colorway": "Black/Gym Red-White",
            "gender": "men",
            "name": "Bred White Toe",
            "releaseDate": "2019-11-01 23:59:59",
            "retailPrice": 140,
            "shoe": "Jordan 1 Flyease",
            "styleId": "CQ3835-001",
            "title": "Jordan 1 Flyease Bred White Toe",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Flyease-Bred-White-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Flyease-Bred-White-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Flyease-Bred-White-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731"
            }
          },
          {
            "id": "7f8c8e38-4581-401c-9c83-939472a3fc00",
            "brand": "Jordan",
            "colorway": "Black/Anthracite-White-Court Purple",
            "gender": "men",
            "name": "Black Court Purple",
            "releaseDate": "2019-11-01 23:59:59",
            "retailPrice": 175,
            "shoe": "Jordan Spizike",
            "styleId": "315371-051",
            "title": "Jordan Spizike Black Court Purple",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Spizike-Black-Court-Purple.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1592897930",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Spizike-Black-Court-Purple.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1592897930",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Spizike-Black-Court-Purple.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1592897930"
            }
          },
          {
            "id": "951ec6db-4c58-496f-9535-c412aebf6efd",
            "brand": "Jordan",
            "colorway": "Black/White-Taxi-Black",
            "gender": "men",
            "name": "Reverse Taxi",
            "releaseDate": "2019-10-31 23:59:59",
            "retailPrice": 190,
            "shoe": "Jordan 12 Retro",
            "styleId": "130690-017",
            "title": "Jordan 12 Retro Reverse Taxi",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-12-Retro-Reverse-Taxi-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1575076215",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-12-Retro-Reverse-Taxi-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1575076215",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-12-Retro-Reverse-Taxi-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1575076215"
            }
          },
          {
            "id": "dd55cba5-d742-4a43-9ab2-c8cba75da08f",
            "brand": "Jordan",
            "colorway": "Lime Blast/Light Cream-Sail-Vast Grey",
            "gender": "men",
            "name": "Mummy",
            "releaseDate": "2019-10-31 23:59:59",
            "retailPrice": 125,
            "shoe": "Jordan Why Not Zer0.2 SE",
            "styleId": "CW6566-300",
            "title": "Jordan Why Not Zer0.2 SE Mummy",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Why-Not-Zer0-2-SE-Mummy.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1572581161",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Why-Not-Zer0-2-SE-Mummy.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1572581161",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Why-Not-Zer0-2-SE-Mummy.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1572581161"
            }
          },
          {
            "id": "26a61da3-347b-4e98-ab13-6b2a83590f4b",
            "brand": "Jordan",
            "colorway": "Black/Pale Vanilla-Starfish",
            "gender": "men",
            "name": "Shattered Backboard 3.0",
            "releaseDate": "2019-10-26 23:59:59",
            "retailPrice": 160,
            "shoe": "Jordan 1 Retro High",
            "styleId": "555088-028",
            "title": "Jordan 1 Retro High Shattered Backboard 3.0",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Shattered-Backboard-3-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570215764",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Shattered-Backboard-3-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570215764",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Shattered-Backboard-3-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570215764"
            }
          },
          {
            "id": "02d23a87-896e-498a-9173-4c11da00d594",
            "brand": "Jordan",
            "colorway": "White/Black-Court Purple",
            "gender": "men",
            "name": "Court Purple",
            "releaseDate": "2019-10-24 23:59:59",
            "retailPrice": 90,
            "shoe": "Jordan 1 Low",
            "styleId": "553558-125",
            "title": "Jordan 1 Low Court Purple",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-Court-Purple-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569617843",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-Court-Purple-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569617843",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-Court-Purple-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569617843"
            }
          },
          {
            "id": "130312fd-f038-48a0-b0cd-cd8420ab83ab",
            "brand": "Jordan",
            "colorway": "Black/Gym Red-White",
            "gender": "men",
            "name": "Fearless Come Fly With Me",
            "releaseDate": "2019-10-23 23:59:59",
            "retailPrice": 130,
            "shoe": "Jordan 1 Mid",
            "styleId": "CK5665-062",
            "title": "Jordan 1 Mid Fearless Come Fly With Me",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Fearless-Come-Fly-With-Me-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Fearless-Come-Fly-With-Me-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Fearless-Come-Fly-With-Me-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731"
            }
          },
          {
            "id": "555a3b69-52a3-4ee2-b8c2-24b8294da3e6",
            "brand": "Jordan",
            "colorway": "Black/Red",
            "gender": "men",
            "name": "Come Fly With Me (GS)",
            "releaseDate": "2019-10-22 23:59:59",
            "retailPrice": 100,
            "shoe": "Jordan 1 Mid SE",
            "styleId": "CU6617-062",
            "title": "Jordan 1 Mid SE Come Fly With Me (GS)",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-SE-Come-Fly-With-Me-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-SE-Come-Fly-With-Me-GS-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-SE-Come-Fly-With-Me-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1573502731"
            }
          },
          {
            "id": "fefe4c40-d6d9-4c6e-9430-073fec3f409e",
            "brand": "Jordan",
            "colorway": "White/Black-Green-Yellow",
            "gender": "men",
            "name": "Seattle",
            "releaseDate": "2019-10-19 23:59:59",
            "retailPrice": 190,
            "shoe": "Jordan 10 Retro",
            "styleId": "310805-137",
            "title": "Jordan 10 Retro Seattle",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-10-Retro-Seattle-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571668892",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-10-Retro-Seattle-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571668892",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-10-Retro-Seattle-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571668892"
            }
          },
          {
            "id": "4a13c50e-3f37-4edc-802e-673374f44887",
            "brand": "Jordan",
            "colorway": "Icicle/Light Crimson-Sequoia-River Rock",
            "gender": "men",
            "name": "Patta Icicle",
            "releaseDate": "2019-10-18 23:59:59",
            "retailPrice": 200,
            "shoe": "Jordan 7 Retro",
            "styleId": "AT3375-100",
            "title": "Jordan 7 Retro Patta Icicle",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-7-Retro-Patta-Icicle-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570822581",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-7-Retro-Patta-Icicle-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570822581",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-7-Retro-Patta-Icicle-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570822581"
            }
          },
          {
            "id": "4802243f-da84-4cb4-bda2-b44486150dfc",
            "brand": "Jordan",
            "colorway": "Black/White-White",
            "gender": "men",
            "name": "Black White",
            "releaseDate": "2019-10-14 23:59:59",
            "retailPrice": 110,
            "shoe": "Jordan Alpha 360 Tr",
            "styleId": "AV1937-001",
            "title": "Jordan Alpha 360 Tr Black White",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Alpha-360-Tr-Black-White.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571374408",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Alpha-360-Tr-Black-White.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571374408",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Alpha-360-Tr-Black-White.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571374408"
            }
          },
          {
            "id": "e777c89d-1ab9-4a44-b0c4-6699ce6f2f1a",
            "brand": "Jordan",
            "colorway": "White/Light Smoke Grey-Black-Infrared 23",
            "gender": "men",
            "name": "White Light Smoke Grey Black",
            "releaseDate": "2019-10-14 23:59:59",
            "retailPrice": 110,
            "shoe": "Jordan Alpha 360 Tr",
            "styleId": "AV1937-100",
            "title": "Jordan Alpha 360 Tr White Light Smoke Grey Black",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Alpha-360-Tr-White-Light-Smoke-Grey-Black.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571374407",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Alpha-360-Tr-White-Light-Smoke-Grey-Black.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571374407",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Alpha-360-Tr-White-Light-Smoke-Grey-Black.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571374407"
            }
          },
          {
            "id": "9488abea-f022-4973-92e4-3f72cc6e50e2",
            "brand": "Jordan",
            "colorway": "Medium Olive/Black-Sail-University Red",
            "gender": "men",
            "name": "Travis Scott",
            "releaseDate": "2019-10-11 23:59:59",
            "retailPrice": 250,
            "shoe": "Jordan 6 Retro",
            "styleId": "CN1084-200",
            "title": "Jordan 6 Retro Travis Scott",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-6-Retro-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570475122",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-6-Retro-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570475122",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-6-Retro-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570475122"
            }
          },
          {
            "id": "27a1a6db-27e4-4e96-addb-c46660b9bbf9",
            "brand": "Jordan",
            "colorway": "Black/Black-Black",
            "gender": "men",
            "name": "Triple Black (2019)",
            "releaseDate": "2019-10-10 23:59:59",
            "retailPrice": 90,
            "shoe": "Jordan 1 Low",
            "styleId": "553558-056",
            "title": "Jordan 1 Low Triple Black (2019)",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-Triple-Black-2019.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569858041",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-Triple-Black-2019.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569858041",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-Triple-Black-2019.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569858041"
            }
          },
          {
            "id": "52c29a6c-c4ec-455b-8fea-d1686017cd9c",
            "brand": "Jordan",
            "colorway": "White/Black-Red Orbit",
            "gender": "men",
            "name": "White Black Red",
            "releaseDate": "2019-10-10 23:59:59",
            "retailPrice": 180,
            "shoe": "Jordan XXXIV",
            "styleId": "AR3240-100",
            "title": "Jordan XXXIV White Black Red",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-White-Black-Red.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570561249",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-White-Black-Red.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570561249",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-White-Black-Red.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570561249"
            }
          },
          {
            "id": "42e52c63-cc54-4aeb-a31f-bc8ac2ca8318",
            "brand": "Jordan",
            "colorway": "Grey/Black-Red",
            "gender": "men",
            "name": "Corporate",
            "releaseDate": "2019-10-05 23:59:59",
            "retailPrice": 90,
            "shoe": "Jordan CP3.XII",
            "styleId": null,
            "title": "Jordan CP3.XII Corporate",
            "year": 2019,
            "media": {
              "imageUrl": null,
              "smallImageUrl": null,
              "thumbUrl": null
            }
          },
          {
            "id": "8da80d94-f429-45dd-851e-1b4c9172d209",
            "brand": "Jordan",
            "colorway": "White/Black-Gym Red",
            "gender": "men",
            "name": "White Gym Red",
            "releaseDate": "2019-10-05 23:59:59",
            "retailPrice": 190,
            "shoe": "Jordan 9 Retro",
            "styleId": "302370-160",
            "title": "Jordan 9 Retro White Gym Red",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-9-Retro-White-Gym-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570215866",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-9-Retro-White-Gym-Red-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570215866",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-9-Retro-White-Gym-Red-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570215866"
            }
          },
          {
            "id": "000c1868-1002-4ff7-a731-424bca1d6304",
            "brand": "Jordan",
            "colorway": "Black/University Red-Gum Light Brown",
            "gender": "men",
            "name": "Black Gum",
            "releaseDate": "2019-10-01 23:59:59",
            "retailPrice": 150,
            "shoe": "Jordan 1 High Zip",
            "styleId": "AR4833-002",
            "title": "Jordan 1 High Zip Black Gum",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-High-Zip-Black-Gum.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1579490098",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-High-Zip-Black-Gum.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1579490098",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-High-Zip-Black-Gum.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1579490098"
            }
          },
          {
            "id": "16002be3-7301-414e-bca3-432f0b6daf11",
            "brand": "Jordan",
            "colorway": "Metallic Silver/Gym Red-Black",
            "gender": "men",
            "name": "Johnny Kilroy",
            "releaseDate": "2019-10-01 23:59:59",
            "retailPrice": 200,
            "shoe": "Jordan Proto Max 720",
            "styleId": "BQ6623-002",
            "title": "Jordan Proto Max 720 Johnny Kilroy",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Proto-Max-720-Johnny-Kilroy-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1583533502",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Proto-Max-720-Johnny-Kilroy-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1583533502",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Proto-Max-720-Johnny-Kilroy-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1583533502"
            }
          },
          {
            "id": "65404ecc-641f-4ce5-88eb-5fb247ccb477",
            "brand": "Jordan",
            "colorway": "University Red/University Red-Black",
            "gender": "men",
            "name": "Red Black",
            "releaseDate": "2019-10-01 23:59:59",
            "retailPrice": 150,
            "shoe": "Jordan Proto React",
            "styleId": "BV1654-600",
            "title": "Jordan Proto React Red Black",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Proto-React-Red-Black.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568173737",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Proto-React-Red-Black.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568173737",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Proto-React-Red-Black.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568173737"
            }
          },
          {
            "id": "8e804dc2-c57b-4618-aaba-0827ee9ec0e5",
            "brand": "Jordan",
            "colorway": "Wolf Grey/Pure Platinum-Total Orange",
            "gender": "men",
            "name": "Wolf Grey Total Orange",
            "releaseDate": "2019-10-01 23:59:59",
            "retailPrice": 150,
            "shoe": "Jordan Proto React",
            "styleId": "BV1654-008",
            "title": "Jordan Proto React Wolf Grey Total Orange",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Proto-React-Wolf-Grey-Total-Orange.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568173737",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Proto-React-Wolf-Grey-Total-Orange.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568173737",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Proto-React-Wolf-Grey-Total-Orange.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568173737"
            }
          },
          {
            "id": "9b00c998-abcb-4b33-a657-a31438999893",
            "brand": "Jordan",
            "colorway": "Black/Black-Metallic Gold-Anthracite",
            "gender": "men",
            "name": "Black Gum",
            "releaseDate": "2019-10-01 23:59:59",
            "retailPrice": 200,
            "shoe": "Jordan Proto Max 720",
            "styleId": "BQ6623-070",
            "title": "Jordan Proto Max 720 Black Gum",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Proto-Max-720-Black-Gum.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568173736",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Proto-Max-720-Black-Gum.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568173736",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Proto-Max-720-Black-Gum.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568173736"
            }
          },
          {
            "id": "cc3fe1c3-52c6-492c-9030-395db8588f9d",
            "brand": "Jordan",
            "colorway": "White/Black-Varsity Red",
            "gender": "men",
            "name": "Chicago",
            "releaseDate": "2019-10-01 23:59:59",
            "retailPrice": 115,
            "shoe": "Jordan 1 TD Low",
            "styleId": "AV5292-106",
            "title": "Jordan 1 TD Low Chicago",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-TD-Low-Chicago.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1582094505",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-TD-Low-Chicago.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1582094505",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-TD-Low-Chicago.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1582094505"
            }
          },
          {
            "id": "e2b987b2-a756-4c30-986a-9608f0b74259",
            "brand": "Jordan",
            "colorway": "White/White-Grey Fog-White",
            "gender": "men",
            "name": "Triple White Fog Grey",
            "releaseDate": "2019-10-01 23:59:59",
            "retailPrice": 90,
            "shoe": "Jordan 1 Low",
            "styleId": "553558-126",
            "title": "Jordan 1 Low Triple White Fog Grey",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-Triple-White-Fog-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1583360568",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-Triple-White-Fog-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1583360568",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Low-Triple-White-Fog-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1583360568"
            }
          },
          {
            "id": "197b1fae-857a-40b5-9ca8-ffcc5f8d2b80",
            "brand": "Jordan",
            "colorway": "White/Dynamic Yellow-Black",
            "gender": "men",
            "name": "First Class Flight",
            "releaseDate": "2019-09-28 23:59:59",
            "retailPrice": 160,
            "shoe": "Jordan 1 Retro High",
            "styleId": "555088-170",
            "title": "Jordan 1 Retro High First Class Flight",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-First-Class-Flight-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568402477",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-First-Class-Flight-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568402477",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-First-Class-Flight-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568402477"
            }
          },
          {
            "id": "ba6e6918-be3c-406e-a1b9-c55efc15ad9e",
            "brand": "Jordan",
            "colorway": "Obsidian/Sanded Purple-White",
            "gender": "men",
            "name": "Obsidian Sanded Purple",
            "releaseDate": "2019-09-28 23:59:59",
            "retailPrice": 110,
            "shoe": "Jordan 1 Mid",
            "styleId": "554724-445",
            "title": "Jordan 1 Mid Obsidian Sanded Purple",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Obsidian-Sanded-Purple-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569010569",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Obsidian-Sanded-Purple-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569010569",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Obsidian-Sanded-Purple-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569010569"
            }
          },
          {
            "id": "3cf2f6e7-5449-403e-9939-2af6d2abadf2",
            "brand": "Jordan",
            "colorway": "White/Black-Red Orbit-Metallic Silver",
            "gender": "men",
            "name": "White Black Red Orbit",
            "releaseDate": "2019-09-25 23:59:59",
            "retailPrice": 110,
            "shoe": "Jordan Jumpman 2020",
            "styleId": "BQ3449-100",
            "title": "Jordan Jumpman 2020 White Black Red Orbit",
            "year": 2019,
            "media": {
              "imageUrl": null,
              "smallImageUrl": null,
              "thumbUrl": null
            }
          },
          {
            "id": "418dbd28-94da-403e-9820-c42082f22fd8",
            "brand": "Jordan",
            "colorway": "Black/Electric Green-White",
            "gender": "men",
            "name": "Black White",
            "releaseDate": "2019-09-25 23:59:59",
            "retailPrice": 110,
            "shoe": "Jordan Jumpman 2020",
            "styleId": "BQ3449-001",
            "title": "Jordan Jumpman 2020 Black White",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Jumpman-2020-Black-White.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571374409",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Jumpman-2020-Black-White.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571374409",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Jumpman-2020-Black-White.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571374409"
            }
          },
          {
            "id": "6aa4f81d-b687-4e5c-b720-293045ccee33",
            "brand": "Jordan",
            "colorway": "Particle Grey/White-Metallic Silver",
            "gender": "men",
            "name": "Particle Grey",
            "releaseDate": "2019-09-25 23:59:59",
            "retailPrice": 110,
            "shoe": "Jordan Jumpman 2020",
            "styleId": "BQ3449-002",
            "title": "Jordan Jumpman 2020 Particle Grey",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Jumpman-2020-Particle-Grey.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571506873",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Jumpman-2020-Particle-Grey.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571506873",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Jumpman-2020-Particle-Grey.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571506873"
            }
          },
          {
            "id": "eaebdb77-92cc-4e34-9de6-8ab339be645a",
            "brand": "Jordan",
            "colorway": "Blue Void/Green Glow-Black-Metallic Silver",
            "gender": "men",
            "name": "Blue Void",
            "releaseDate": "2019-09-25 23:59:59",
            "retailPrice": 180,
            "shoe": "Jordan XXXIV",
            "styleId": "AR3240-400",
            "title": "Jordan XXXIV Blue Void",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Blue-Void-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570216142",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Blue-Void-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570216142",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-XXXIV-Blue-Void-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570216142"
            }
          },
          {
            "id": "5e346c12-b4b1-48ac-bf47-07e8e207fe72",
            "brand": "Jordan",
            "colorway": "White/Old Royal-University Orange-Tech Grey",
            "gender": "men",
            "name": "Knicks",
            "releaseDate": "2019-09-21 23:59:59",
            "retailPrice": 190,
            "shoe": "Jordan 3 Retro",
            "styleId": "136064-148",
            "title": "Jordan 3 Retro Knicks",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-3-Retro-Knicks-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568402496",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-3-Retro-Knicks-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568402496",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-3-Retro-Knicks-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568402496"
            }
          },
          {
            "id": "89502874-6fee-418b-998b-5fc6f6747ae5",
            "brand": "Jordan",
            "colorway": "Black/Game Royal-Black",
            "gender": "men",
            "name": "Black Game Royal",
            "releaseDate": "2019-09-21 23:59:59",
            "retailPrice": 190,
            "shoe": "Jordan 12 Retro",
            "styleId": "130690-014",
            "title": "Jordan 12 Retro Black Game Royal",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-12-Retro-Black-Game-Royal-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568402587",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-12-Retro-Black-Game-Royal-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568402587",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-12-Retro-Black-Game-Royal-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568402587"
            }
          },
          {
            "id": "93d05f63-974f-4d8b-9e7e-9eb045dde63b",
            "brand": "Jordan",
            "colorway": "Black/Metallic Gold",
            "gender": "men",
            "name": "Black Gold",
            "releaseDate": "2019-09-20 23:59:59",
            "retailPrice": 160,
            "shoe": "Jordan Mars 270",
            "styleId": "CD7070-007",
            "title": "Jordan Mars 270 Black Gold",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Black-Gold-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Black-Gold-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Black-Gold-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585"
            }
          },
          {
            "id": "34863f1b-7053-40ee-9436-c4689e76b0cc",
            "brand": "Jordan",
            "colorway": "White/Reflective Silver/New Emerald/Grape Ice",
            "gender": "men",
            "name": "Grape",
            "releaseDate": "2019-09-19 23:59:59",
            "retailPrice": 160,
            "shoe": "Jordan Mars 270",
            "styleId": "CD7070-135",
            "title": "Jordan Mars 270 Grape",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Grape-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Grape-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Grape-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576006585"
            }
          },
          {
            "id": "dee92208-0e36-4e53-bb0b-c8ce9ea2d3ab",
            "brand": "Jordan",
            "colorway": "White/Black-Red Orbit",
            "gender": "men",
            "name": "White Multicolor",
            "releaseDate": "2019-09-18 23:59:59",
            "retailPrice": 225,
            "shoe": "Jordan 8 SP Retro SE",
            "styleId": "BQ7666-100",
            "title": "Jordan 8 SP Retro SE White Multicolor",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-8-SP-Retro-SE-White-Multi-DSM-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569617843",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-8-SP-Retro-SE-White-Multi-DSM-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569617843",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-8-SP-Retro-SE-White-Multi-DSM-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569617843"
            }
          },
          {
            "id": "b8a9bb19-8be2-40b9-a2cd-2726257d6af5",
            "brand": "Jordan",
            "colorway": "White/Black-Starfish",
            "gender": "men",
            "name": "Shattered Backboard",
            "releaseDate": "2019-09-17 23:59:59",
            "retailPrice": 160,
            "shoe": "Jordan Mars 270",
            "styleId": "CD7070-008",
            "title": "Jordan Mars 270 Shattered Backboard",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Shattered-Backboard-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1579298154",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Shattered-Backboard-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1579298154",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Shattered-Backboard-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1579298154"
            }
          },
          {
            "id": "63566369-c22e-451f-a885-8f77a099e8a1",
            "brand": "Jordan",
            "colorway": "White/Team Crimson-Light Smoke Grey-Metallic Silver",
            "gender": "men",
            "name": "Oklahoma",
            "releaseDate": "2019-09-16 23:59:59",
            "retailPrice": 130,
            "shoe": "Jordan React Havoc",
            "styleId": "CJ6746-106",
            "title": "Jordan React Havoc Oklahoma",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-React-Havoc-Oklahoma.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568774628",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-React-Havoc-Oklahoma.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568774628",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-React-Havoc-Oklahoma.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568774628"
            }
          },
          {
            "id": "274ca1e1-95a4-4bae-9c18-39d883883d19",
            "brand": "Jordan",
            "colorway": "Black/White-White",
            "gender": "men",
            "name": "Black White",
            "releaseDate": "2019-09-15 23:59:59",
            "retailPrice": 95,
            "shoe": "Jordan 1 Retro MCS Low",
            "styleId": "CJ8524-001",
            "title": "Jordan 1 Retro MCS Low Black White",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-MCS-Low-Black-White.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568774627",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-MCS-Low-Black-White.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568774627",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-MCS-Low-Black-White.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568774627"
            }
          },
          {
            "id": "5221bdb2-32cd-4b23-820a-6eaca4e1ee53",
            "brand": "Jordan",
            "colorway": "White/Black-Black",
            "gender": "men",
            "name": "White Black",
            "releaseDate": "2019-09-15 23:59:59",
            "retailPrice": 95,
            "shoe": "Jordan 1 Retro MCS Low",
            "styleId": "CJ8524-100",
            "title": "Jordan 1 Retro MCS Low White Black",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-MCS-Low-White-Black.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568774627",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-MCS-Low-White-Black.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568774627",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-MCS-Low-White-Black.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568774627"
            }
          },
          {
            "id": "0921cd68-67b9-46c2-b80d-e0068401ae40",
            "brand": "Jordan",
            "colorway": "White/White-White",
            "gender": "men",
            "name": "Comme des Garcons White",
            "releaseDate": "2019-09-14 23:59:59",
            "retailPrice": 350,
            "shoe": "Jordan 1 Retro High",
            "styleId": "CN5738-100",
            "title": "Jordan 1 Retro High Comme des Garcons White",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Comme-des-Garcons-White-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568056886",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Comme-des-Garcons-White-1.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568056886",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Comme-des-Garcons-White-1.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568056886"
            }
          },
          {
            "id": "d20feff8-05af-4fe6-9449-54d3fb4d29f0",
            "brand": "Jordan",
            "colorway": "Black/Black-Black",
            "gender": "men",
            "name": "Comme des Garcons Black",
            "releaseDate": "2019-09-14 23:59:59",
            "retailPrice": 350,
            "shoe": "Jordan 1 Retro High",
            "styleId": "CN5738-001",
            "title": "Jordan 1 Retro High Comme des Garcons Black",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Comme-des-Garcons-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569010107",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Comme-des-Garcons-Black-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569010107",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Comme-des-Garcons-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569010107"
            }
          },
          {
            "id": "51c40234-f3ff-445c-9aa4-0a9c4dcd0a8c",
            "brand": "Jordan",
            "colorway": "Amber/Metallic Gold-Black-White",
            "gender": "men",
            "name": "Game Ball NFL PE",
            "releaseDate": "2019-09-12 23:59:59",
            "retailPrice": null,
            "shoe": "Jordan 12 Retro",
            "styleId": null,
            "title": "Jordan 12 Retro Game Ball NFL PE",
            "year": 2019,
            "media": {
              "imageUrl": null,
              "smallImageUrl": null,
              "thumbUrl": null
            }
          },
          {
            "id": "8aefc6f4-9d05-4bd2-adc2-4d8ef92dbac3",
            "brand": "Jordan",
            "colorway": "Black/Blue-Pink-Sail",
            "gender": "men",
            "name": "SE Black Vast Grey",
            "releaseDate": "2019-09-12 23:59:59",
            "retailPrice": 125,
            "shoe": "Jordan Why Not Zer0.2",
            "styleId": "AV4126-001/AQ3562-001",
            "title": "Jordan Why Not Zer0.2 SE Black Vast Grey",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Why-Not-Zer0-2-SE-Black-Pink-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574449122",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Why-Not-Zer0-2-SE-Black-Pink-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574449122",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Why-Not-Zer0-2-SE-Black-Pink-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574449122"
            }
          },
          {
            "id": "1f54b9ad-beed-4d43-b23b-a0483f072381",
            "brand": "Jordan",
            "colorway": "Black/White-Starfish",
            "gender": "men",
            "name": "Shattered Backboard",
            "releaseDate": "2019-09-07 23:59:59",
            "retailPrice": 110,
            "shoe": "Jordan 1 Mid",
            "styleId": "554724-058",
            "title": "Jordan 1 Mid Shattered Backboard",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Shattered-Backboard-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1567801617",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Shattered-Backboard-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1567801617",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Shattered-Backboard-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1567801617"
            }
          },
          {
            "id": "ba2917ec-732a-4b6c-b297-acde03e92cf5",
            "brand": "Jordan",
            "colorway": "Rattan/Black-Black-Dusted Clay",
            "gender": "men",
            "name": "Duck Camo",
            "releaseDate": "2019-09-05 23:59:59",
            "retailPrice": 190,
            "shoe": "Jordan 10 Retro",
            "styleId": "310805-200",
            "title": "Jordan 10 Retro Duck Camo",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-10-Retro-Duck-Camo-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1567802081",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-10-Retro-Duck-Camo-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1567802081",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-10-Retro-Duck-Camo-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1567802081"
            }
          },
          {
            "id": "f834206e-802e-4068-9f1b-bafbf70d698c",
            "brand": "Jordan",
            "colorway": "Summit White/Black-Varsity Red-Sail",
            "gender": "men",
            "name": "Chicago",
            "releaseDate": "2019-09-05 23:59:59",
            "retailPrice": 140,
            "shoe": "Jordan Legacy 312 Low",
            "styleId": "CD7069-106",
            "title": "Jordan Legacy 312 Low Chicago",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Legacy-312-Low-Chicago-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569010792",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Legacy-312-Low-Chicago-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569010792",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Legacy-312-Low-Chicago-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1569010792"
            }
          },
          {
            "id": "da3e07a1-b543-4d75-8b37-b0f3abfe5bc2",
            "brand": "Jordan",
            "colorway": "Multi-Color/Multi-Color-Multi-Color",
            "gender": "men",
            "name": "Own The Chaos",
            "releaseDate": "2019-09-03 23:59:59",
            "retailPrice": 150,
            "shoe": "Jordan Why Not Zer0.2",
            "styleId": "CT5786-900",
            "title": "Jordan Why Not Zer0.2 Own The Chaos",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Why-Not-Zer0-2-Own-The-Chaos-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568402865",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Why-Not-Zer0-2-Own-The-Chaos-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568402865",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Why-Not-Zer0-2-Own-The-Chaos-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568402865"
            }
          },
          {
            "id": "307a4bc6-bd53-4a1e-bd07-dc2fcedf5d16",
            "brand": "Jordan",
            "colorway": "Black/Gym Red-Metallic Silver",
            "gender": "men",
            "name": "Johnny Kilroy",
            "releaseDate": "2019-09-01 23:59:59",
            "retailPrice": 110,
            "shoe": "Jordan 1 Mid",
            "styleId": "554724-057",
            "title": "Jordan 1 Mid Johnny Kilroy",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Johnny-Kilroy-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574449122",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Johnny-Kilroy-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574449122",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Mid-Johnny-Kilroy-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1574449122"
            }
          },
          {
            "id": "8a731fe9-44c3-4b4c-8725-636fb758a3d7",
            "brand": "Jordan",
            "colorway": "Brown/Black-Sail",
            "gender": "men",
            "name": "Brown",
            "releaseDate": "2019-09-01 23:59:59",
            "retailPrice": 170,
            "shoe": "Jordan 1 High React",
            "styleId": "AR5321-200",
            "title": "Jordan 1 High React Brown",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-High-React-Brown.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1565707315",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-High-React-Brown.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1565707315",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-High-React-Brown.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1565707315"
            }
          },
          {
            "id": "92b4dd01-0440-453f-aff8-e3d4f0d7cf52",
            "brand": "Jordan",
            "colorway": "Black/Gym Red-Metallic Silver",
            "gender": "men",
            "name": "Patent Bred",
            "releaseDate": "2019-09-01 23:59:59",
            "retailPrice": 160,
            "shoe": "Jordan Mars 270",
            "styleId": "CD7070-006",
            "title": "Jordan Mars 270 Patent Bred",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Patent-Bred-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576877270",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Patent-Bred-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576877270",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-Patent-Bred-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1576877270"
            }
          },
          {
            "id": "2d4313be-189e-491e-9dfa-4404693882f3",
            "brand": "Jordan",
            "colorway": "Sail/Obsidian-University Blue",
            "gender": "men",
            "name": "Obsidian UNC",
            "releaseDate": "2019-08-31 23:59:59",
            "retailPrice": 160,
            "shoe": "Jordan 1 Retro High",
            "styleId": "555088-140",
            "title": "Jordan 1 Retro High Obsidian UNC",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-UNC-Leather.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1565708126",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-UNC-Leather.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1565708126",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-UNC-Leather.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1565708126"
            }
          },
          {
            "id": "8e0a8b7c-374a-4a85-a892-aacdada6ab72",
            "brand": "Jordan",
            "colorway": "Medium Olive/Black-Dark Army-Dark Cinder",
            "gender": "men",
            "name": "Woodland Camo",
            "releaseDate": "2019-08-31 23:59:59",
            "retailPrice": 190,
            "shoe": "Jordan 10 Retro",
            "styleId": "310805-201",
            "title": "Jordan 10 Retro Woodland Camo",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-10-Retro-Woodland-Camo.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1565840709",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-10-Retro-Woodland-Camo.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1565840709",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-10-Retro-Woodland-Camo.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1565840709"
            }
          },
          {
            "id": "53274e53-b419-437a-bf03-a08c39257d77",
            "brand": "Jordan",
            "colorway": "Game Royal/University Orange-White-Metallic Silver",
            "gender": "men",
            "name": "Florida",
            "releaseDate": "2019-08-29 23:59:59",
            "retailPrice": 130,
            "shoe": "Jordan React Havoc",
            "styleId": "CJ6747-408",
            "title": "Jordan React Havoc Florida",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-React-Havoc-Florida.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1567186497",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-React-Havoc-Florida.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1567186497",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-React-Havoc-Florida.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1567186497"
            }
          },
          {
            "id": "417ce0d7-6caa-42d8-a0d6-29a461b5121e",
            "brand": "Jordan",
            "colorway": "Infrared 23/Reflect Silver-Black",
            "gender": "men",
            "name": "PSG Paris Saint-Germain",
            "releaseDate": "2019-08-27 23:59:59",
            "retailPrice": 175,
            "shoe": "Jordan Mars 270",
            "styleId": "CN2218-600",
            "title": "Jordan Mars 270 PSG Paris Saint-Germain",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-PSG-Paris-Saint-Germain.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1564512543",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-PSG-Paris-Saint-Germain.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1564512543",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Mars-270-PSG-Paris-Saint-Germain.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1564512543"
            }
          },
          {
            "id": "62461908-cb88-4c2f-a1b5-663a0a8d2b36",
            "brand": "Jordan",
            "colorway": "College Navy/Metallic Silver-White-Amarillo",
            "gender": "men",
            "name": "Michigan",
            "releaseDate": "2019-08-26 23:59:59",
            "retailPrice": 130,
            "shoe": "Jordan React Havoc",
            "styleId": "CJ6748-407",
            "title": "Jordan React Havoc Michigan",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-React-Havoc-Michigan.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566886707",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-React-Havoc-Michigan.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566886707",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-React-Havoc-Michigan.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566886707"
            }
          },
          {
            "id": "1db02985-b2c7-41c8-b834-7cebebfba8a6",
            "brand": "Jordan",
            "colorway": "Black/Midnight Navy-University Gold-Hyper Violet",
            "gender": "men",
            "name": "Rivals",
            "releaseDate": "2019-08-24 23:59:59",
            "retailPrice": 125,
            "shoe": "Jordan Defy",
            "styleId": "CJ7698-004",
            "title": "Jordan Defy Rivals",
            "year": 2019,
            "media": {
              "imageUrl": "https://stockx.imgix.net/Air-Jordan-Defy-Rivals.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1567012293",
              "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Defy-Rivals.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1567012293",
              "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Defy-Rivals.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1567012293"
            }
          }
        ]

    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sneakers', {
      id: { [Sequelize.Op.gt]: 0 }
    });
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
