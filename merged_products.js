
let all_product = [
    // Men's Products
    {
            id: 937252,  // Using index + 1 as ID
            name: "Men Polo Collar T-shirt",
            category: "men",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17127398/2022/7/18/08493478-e964-4123-80ff-6cc3f6c89e591658140431340-Being-Human-Men-Tshirts-191658140430878-1.jpg",
            new_price: 1999.0,
            old_price: 1999.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/tshirts/being-human/being-human-men-green-polo-collar-t-shirt-with-contrast-tipping/17127398/buy"  // Assuming there's a 'purl' column
        },
{
            id: 451922,  // Using index + 1 as ID
            name: "Men T-shirt",
            category: "men",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16196862/2021/11/22/5d77284c-119e-4a94-8655-9181aeb728af1637583259459ObaanMenOrangePocketsT-shirt1.jpg",
            new_price: 395.0,
            old_price: 899.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/tshirts/obaan/obaan-men-orange-t-shirt/16196862/buy"  // Assuming there's a 'purl' column
        },
{
            id: 225322,  // Using index + 1 as ID
            name: "Men Colourblocked Polo Collar T-shirt",
            category: "men",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14540710/2021/6/28/4f483ff1-ffd4-4975-971c-3b21d96422f51624876278546-Allen-Solly-Sport-Men-Tshirts-8061624876278317-1.jpg",
            new_price: 1449.0,
            old_price: 1449.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/tshirts/allen-solly-sport/allen-solly-sport-men-yellow--white-colourblocked-polo-collar-t-shirt/14540710/buy"  // Assuming there's a 'purl' column
        },
{
            id: 578125,  // Using index + 1 as ID
            name: "Men Woven Design Broad Tie",
            category: "men",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19241580/2022/7/25/a45e9175-3b2f-4305-8cd2-cf4cf54b57b21658732502759MenLightBluePatternedWeaveSilkTie1.jpg",
            new_price: 989.0,
            old_price: 1799.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/ties/arrow/arrow-men-blue--white-woven-design-broad-tie/19241580/buy"  // Assuming there's a 'purl' column
        },
{
            id: 872018,  // Using index + 1 as ID
            name: "Men Slim Fit T-shirt",
            category: "men",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21086364/2023/1/3/ef41d02e-0f60-430b-8970-c1444ee32f861672747520657-Calvin-Klein-Jeans-Men-Tshirts-1971672747520221-1.jpg",
            new_price: 4599.0,
            old_price: 4599.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/tshirts/calvin-klein-jeans/calvin-klein-jeans-men-polo-collar-slim-fit-t-shirt-with-applique-detail/21086364/buy"  // Assuming there's a 'purl' column
        },
{
            id: 913026,  // Using index + 1 as ID
            name: "Men Striped Calf Length Socks",
            category: "men",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21045662/2022/12/3/8c68f0d6-ef4a-4745-9be0-374f760140201670053844068Socks1.jpg",
            new_price: 229.0,
            old_price: 229.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/socks/lindbergh/lindbergh-men-striped-calf-length-socks/21045662/buy"  // Assuming there's a 'purl' column
        },
{
            id: 309364,  // Using index + 1 as ID
            name: "Men Cotton Hooded T-shirt",
            category: "men",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16998062/2022/11/2/5b6b99c9-7b22-4527-8ae7-2c1c5dad06de1667373327396-Roadster-Men-Khaki--White-Striped-T-shirt-2381667373326871-1.jpg",
            new_price: 389.0,
            old_price: 1299.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/tshirts/roadster/the-roadster-lifestyle-co-men-khaki--white-pure-cotton-striped-hooded-t-shirt/16998062/buy"  // Assuming there's a 'purl' column
        },
{
            id: 716785,  // Using index + 1 as ID
            name: "Men 14KT Rose Gold Ring-3.03gm",
            category: "men",
            image: "-",
            new_price: 16031.0,
            old_price: 21094.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/ring-gold/candere-a-kalyan-jewellers-company/candere-a-kalyan-jewellers-company-men-14kt-bis-hallmark-rose-gold-finger-ring-303gm/22318060/buy"  // Assuming there's a 'purl' column
        },
{
            id: 947547,  // Using index + 1 as ID
            name: "Men Pack Of 2 Bamboo Ankle Length Socks",
            category: "men",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22013836/2023/3/9/50d0389c-33c2-445a-b1ed-f64bae8de79f1678360300551-Almo-Wear-Men-Pack-Of-2-Anti-Microbial-Lightweight-Bamboo-An-1.jpg",
            new_price: 598.0,
            old_price: 598.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/socks/almo-wear/almo-wear-men-pack-of-2-anti-microbial-lightweight-bamboo-ankle-length-socks/22013836/buy"  // Assuming there's a 'purl' column
        },
{
            id: 418186,  // Using index + 1 as ID
            name: "Men Round Neck Cotton T-shirt",
            category: "men",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19175926/2022/7/19/513d7f4f-8e4e-4323-a9e4-e1791146cffd1658244762100Tshirts1.jpg",
            new_price: 594.0,
            old_price: 699.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/tshirts/the-daily-outfits/the-daily-outfits-men-aqua-blue-solid-round-neck-cotton-t-shirt/19175926/buy"  // Assuming there's a 'purl' column
        },
    
    // Women's Products
    {
            id: 629359,  // Using index + 1 as ID
            name: "Women Pack Of 2 Mojaris",
            category: "women",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22239222/2023/3/6/5346a016-76d4-4160-a075-b6cea897b4271678106604446DESICOLOURWomenMulticolouredTexturedLeatherEthnicBallerinasF1.jpg",
            new_price: 1890.0,
            old_price: 7000.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/flats/desi-colour/desi-colour-women-pack-of-2-embellished-ethnic-mojaris-/22239222/buy"  // Assuming there's a 'purl' column
        },
{
            id: 636403,  // Using index + 1 as ID
            name: "Plus Size Women Wrap Top",
            category: "women",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18844834/2022/6/23/b951a1ee-9eec-45f8-9333-2906bc4fc0cd1655991398432Tops1.jpg",
            new_price: 799.0,
            old_price: 1499.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/tops/fazzn/fazzn--plus-size-women-blue-wrap-top/18844834/buy"  // Assuming there's a 'purl' column
        },
{
            id: 771908,  // Using index + 1 as ID
            name: "Women Geometric Printed Kurta",
            category: "women",
            image: "-",
            new_price: 599.0,
            old_price: 599.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/kurtas/rangmanch-by-pantaloons/rangmanch-by-pantaloons-women-peach-coloured-geometric-printed-mirror-work-kurta/21651056/buy"  // Assuming there's a 'purl' column
        },
{
            id: 649481,  // Using index + 1 as ID
            name: "Women Halter Neck Baby Doll",
            category: "women",
            image: "-",
            new_price: 599.0,
            old_price: 799.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/baby-dolls/klamotten/klamotten-women-black-halter-neck-baby-doll/20044464/buy"  // Assuming there's a 'purl' column
        },
{
            id: 759951,  // Using index + 1 as ID
            name: "Women Pure Cotton Sweatshirt",
            category: "women",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16810794/2022/1/13/0dc7884b-c67c-4a83-babf-af95af19cd031642065267458DeMozaWomenBluePrintedSweatshirt1.jpg",
            new_price: 749.0,
            old_price: 1499.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/sweatshirts/de-moza/de-moza-women-blue--white-tie--dye-pure-cotton-sweatshirt/16810794/buy"  // Assuming there's a 'purl' column
        },
{
            id: 736357,  // Using index + 1 as ID
            name: "Plus Size Women Printed Kurta",
            category: "women",
            image: "-",
            new_price: 898.0,
            old_price: 2899.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/kurtas/sringam/sringam-plus-size-women-mustard-yellow-floral-printed-kurta/17210522/buy"  // Assuming there's a 'purl' column
        },
{
            id: 464105,  // Using index + 1 as ID
            name: "Women Faux Fur Winter Boots",
            category: "women",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21163526/2022/12/12/3e9c146d-c19b-480f-aceb-79d5644d893d1670843305983Boots1.jpg",
            new_price: 2499.0,
            old_price: 4999.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/boots/sapatos/sapatos-women-faux-fur-trim-winter-boots/21163526/buy"  // Assuming there's a 'purl' column
        },
{
            id: 773494,  // Using index + 1 as ID
            name: "Women Printed Regular Top",
            category: "women",
            image: "-",
            new_price: 649.0,
            old_price: 1299.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/tops/van-heusen-woman/van-heusen-woman-women-multicoloured-geometric-print-v-neck-regular-top/16442582/buy"  // Assuming there's a 'purl' column
        },
{
            id: 708236,  // Using index + 1 as ID
            name: "Women Set Of 7 Finger Rings",
            category: "women",
            image: "-",
            new_price: 314.0,
            old_price: 1745.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/ring/shining-diva-fashion/shining-diva-fashion-women-set-of-7-black-enamelled-boho-style-midi-finger-rings/19355502/buy"  // Assuming there's a 'purl' column
        },
{
            id: 125916,  // Using index + 1 as ID
            name: "Women Sweatshirt",
            category: "women",
            image: "-",
            new_price: 1424.0,
            old_price: 1899.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/sweatshirts/trend-alacati-stili/trend-alacati-stili-women-sweatshirt/22822502/buy"  // Assuming there's a 'purl' column
        },
    
    // Kids' Products
    {
            id: 72674,  // Using index + 1 as ID
            name: "Boys Pack of 2 Sports Shorts",
            category: "kids",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18161192/2022/5/5/394f27c5-0497-4c45-a26c-3bb910b76d921651744220851Shorts1.jpg",
            new_price: 399.0,
            old_price: 999.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/shorts/chimprala/chimprala-boys-pack-of-2-green--grey-solid-regular-sports-shorts/18161192/buy"  // Assuming there's a 'purl' column
        },
{
            id: 491045,  // Using index + 1 as ID
            name: "Boys Zip-Through Hoodie",
            category: "kids",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21470390/2023/1/9/94ab3bfd-2d36-4480-ab8a-874e6dd910091673257598625Zip-throughhoodie1.jpg",
            new_price: 1999.0,
            old_price: 1999.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/sweatshirts/hm/hm-boys-zip-through-hoodie/21470390/buy"  // Assuming there's a 'purl' column
        },
{
            id: 504889,  // Using index + 1 as ID
            name: "Girls Printed Kurta with Palazzos",
            category: "kids",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/4/21/06c21e76-4deb-43ca-a711-791f9efcea501619005268741-1.jpg",
            new_price: 993.0,
            old_price: 3549.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/kurta-sets/bitiya-by-bhama/bitiya-by-bhama-girls-pink--red-floral-printed-kurta-with-palazzos/14161970/buy"  // Assuming there's a 'purl' column
        },
{
            id: 942993,  // Using index + 1 as ID
            name: "Boys Kurta with Salwar",
            category: "kids",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19592710/2022/8/22/0a00d296-6a3d-4c2c-bd49-1d1c694723921661154751422SGYUVRAJBoysSeaGreenRawSilkKurtawithSalwar1.jpg",
            new_price: 857.0,
            old_price: 1749.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/kurta-sets/sg-yuvraj/sg-yuvraj-boys-sea-green-raw-silk-kurta-with-salwar/19592710/buy"  // Assuming there's a 'purl' column
        },
{
            id: 1028100,  // Using index + 1 as ID
            name: "Boys Night suit",
            category: "kids",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15041792/2021/8/5/7d8791c7-0c09-4751-9876-a5038fc47d961628167661133INYHUGYELLOWPONY21.jpg",
            new_price: 1299.0,
            old_price: 1299.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/night-suits/tiny-hug/tiny-hug-boys-yellow--red-printed-night-suit/15041792/buy"  // Assuming there's a 'purl' column
        },
{
            id: 36842,  // Using index + 1 as ID
            name: "Kids Printed Cotton T-shirt",
            category: "kids",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21066486/2022/12/5/35e83dd3-da05-4ed6-b62b-8bb27e9009581670206454919MinicultKidsBlueMickeyMousePrintedV-NeckT-shirt1.jpg",
            new_price: 363.0,
            old_price: 1299.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/tshirts/minicult/minicult-kids-printed-cotton-t-shirt/21066486/buy"  // Assuming there's a 'purl' column
        },
{
            id: 560752,  // Using index + 1 as ID
            name: "Boys Pack of 3 Printed Pure Cotton T-shirt",
            category: "kids",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11762468/2020/3/30/9b6e32c8-2353-46a6-b438-5121d0b1bda61585569924497LukeLilymulti1.jpg",
            new_price: 679.0,
            old_price: 1699.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/tshirts/luke--lilly/luke--lilly-boys-pack-of-3-printed-round-neck-pure-cotton-t-shirts/11762468/buy"  // Assuming there's a 'purl' column
        },
{
            id: 503630,  // Using index + 1 as ID
            name: "Girls Cotton Sheath Dress",
            category: "kids",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22449444/2023/3/21/c5fa8973-f67c-4d79-9a8e-02b0c23ab6f31679387555667Dresses1.jpg",
            new_price: 1999.0,
            old_price: 1999.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/dresses/hopscotch/hopscotch-girls-embellished-sequined-cotton-sheath-dress-with-belt/22449444/buy"  // Assuming there's a 'purl' column
        },
{
            id: 597892,  // Using index + 1 as ID
            name: "Kids Pure Cotton Night Suit",
            category: "kids",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22666272/2023/4/5/3999065c-54a8-4f66-8e37-455e84178a931680708967958Nightsuits1.jpg",
            new_price: 1499.0,
            old_price: 1499.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/night-suits/fluffalump/fluffalump-kids-conversational-printed-pure-cotton-night-suit/22666272/buy"  // Assuming there's a 'purl' column
        },
{
            id: 23588,  // Using index + 1 as ID
            name: "Kids Twitch Twist AC Run Shoes",
            category: "kids",
            image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22164090/2023/3/23/8d5fb501-f385-470e-bece-459dfa78553a1679574330663-Twitch-Runner-Twist-AC-Kids-Shoes-6691679574330203-1.jpg",
            new_price: 2849.0,
            old_price: 4999.0,  // Assuming 'mrp' is the old price column
            purl: "https://www.myntra.com/sports-shoes/puma/puma-unisex-kids-solid-twitch-twist-ac-running-shoes/22164090/buy"  // Assuming there's a 'purl' column
        }
];
export default all_product;
