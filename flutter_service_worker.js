'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "173a47911faa854186118861e365419e",
"index.html": "e493f0678e637d5a2c20a5fb8c43c9e1",
"/": "e493f0678e637d5a2c20a5fb8c43c9e1",
"main.dart.js": "ffbc8f95f63a1a269738fab661c08363",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a9f73e946a54385070ad87b3c2218c22",
"assets/AssetManifest.json": "8079c015791fa4029331ed759c4503d9",
"assets/NOTICES": "cb781274bd01fac6c28694b1638a732d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6563e6b5325a5f622fa6a09997e1f45e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "d8d25c620375763e4ef348aabddc6a1e",
"assets/fonts/MaterialIcons-Regular.otf": "eb6a775dea96d8372ae2a62fdf550f70",
"assets/assets/contact/map.png": "485e211b60f27815de7da4e8516eaa6b",
"assets/assets/IMG_1782-Edit_Original.jpg": "cb1224bdfd5354bff67e547a37befe36",
"assets/assets/shophighlight/pricing.png": "14e757750443c10cc2474e8b7ac0b71a",
"assets/assets/shophighlight/safeHome.png": "a705862d7972147e58a4f9c4630611b1",
"assets/assets/shophighlight/truckFast.png": "dd7345730898eea53df53870cc719ddd",
"assets/assets/IMG_1628_Original.jpg": "0a7bf3e9fb9b69153a63e9b63eb3dfa9",
"assets/assets/0O3A8274.jpg": "dc371e14f06b8008363bf48b961a78e3",
"assets/assets/0O3A9965.jpg": "6b24aab52f78372fa05b33a5fb2dd509",
"assets/assets/product/mens/lofer/art_no_32/_DSC3209.JPG": "d72ed112e799132a41d5d6336045ad1d",
"assets/assets/product/mens/lofer/art_no_32/_DSC3208.JPG": "6c7d991d1f94071fe62f6ef71a4fcd40",
"assets/assets/product/mens/lofer/art_no_32/_DSC3210.JPG": "5513e00d90196699d3e92bf52509fd4a",
"assets/assets/product/mens/lofer/art_no_32/_DSC3207.JPG": "23291f96b0bdb0e271ca11fce2b3a01b",
"assets/assets/product/mens/lofer/art_no_35/_DSC3224.JPG": "92c329eb74fbe5816e42cf918359bfed",
"assets/assets/product/mens/lofer/art_no_35/_DSC3222.JPG": "98fc0adc7a8bbee5ce9da37fdd3509f1",
"assets/assets/product/mens/lofer/art_no_35/_DSC3221.JPG": "05b696dbbfdf67b4de1ffd405ce0aaa6",
"assets/assets/product/mens/lofer/art_no_35/_DSC3215.JPG": "f2c16677b6c8ffc566afc9de1aabb2af",
"assets/assets/product/mens/lofer/art_no_34/_DSC3219.JPG": "a45ca447379d6fa77a8d0a58624c9e11",
"assets/assets/product/mens/lofer/art_no_34/_DSC3217.JPG": "54b6d0cd614c99ee88bdf39b6e8ec1e5",
"assets/assets/product/mens/lofer/art_no_34/_DSC3216.JPG": "75ca3bd2f65a7c770dcb2c9a2553ac63",
"assets/assets/product/mens/lofer/art_no_34/_DSC3215.JPG": "f2c16677b6c8ffc566afc9de1aabb2af",
"assets/assets/product/mens/lofer/art_no_33/_DSC3212.JPG": "2f3b72d4e6e4c433f26c3037432c836e",
"assets/assets/product/mens/lofer/art_no_33/_DSC3213.JPG": "77c982cb62128178b33bbef2cb5dea93",
"assets/assets/product/mens/lofer/art_no_33/_DSC3214.JPG": "3504b02f386866c738ca5291410821c0",
"assets/assets/product/mens/lofer/art_no_33/_DSC3215.JPG": "f2c16677b6c8ffc566afc9de1aabb2af",
"assets/assets/product/mens/lofer/art_no_8/_DSC3086.JPG": "96ac58fef6637eb191afb31998f59abe",
"assets/assets/product/mens/lofer/art_no_8/_DSC3087.JPG": "e89a788fc6152a0c4c3759e2aa1bbc53",
"assets/assets/product/mens/lofer/art_no_6/_DSC3076.JPG": "fd544ffd18ae975d4f734c0f33f92437",
"assets/assets/product/mens/lofer/art_no_6/_DSC3077.JPG": "51dfa4e273ee358b2bf0e8436234f7b9",
"assets/assets/product/mens/lofer/art_no_6/_DSC3074.JPG": "10d6a8b5ff407ddb0eac160ed208c45f",
"assets/assets/product/mens/lofer/art_no_1/_DSC3041.JPG": "03b40c3587bf92808bb8211548a0471e",
"assets/assets/product/mens/lofer/art_no_1/_DSC3036.JPG": "5010a418b3d49676e5340c80f44489c0",
"assets/assets/product/mens/lofer/art_no_1/_DSC3039.JPG": "5daf7020c23abc4bb346a546a197a815",
"assets/assets/product/mens/lofer/art_no_7/_DSC3079.jpg": "bad1d85775561e00401160693947c918",
"assets/assets/product/mens/lofer/art_no_7/_DSC3085.JPG": "c4426926af2a5dd4ab62c71df65b07f5",
"assets/assets/product/mens/lofer/art_no_7/_DSC3084.JPG": "8fbd8e947be54fb6a81f92b05ea719e8",
"assets/assets/product/mens/lofer/art_no_7/_DSC3080.JPG": "9a560ebf679fe68291e8bc18dcaa60df",
"assets/assets/product/mens/lofer/art_no_7/_DSC3081.JPG": "f99325f95cb001ac3c97d162318e4a55",
"assets/assets/product/mens/lofer/art_no_7/_DSC3083.JPG": "96bf217af51ae8b2a97c1af25aeedf43",
"assets/assets/product/mens/lofer/art_no_9/_DSC3092.JPG": "b1a216c8f2d8ddd0a4523025c6d424cc",
"assets/assets/product/mens/lofer/art_no_9/_DSC3091.JPG": "34126e49d523ff621f96e34c2691f984",
"assets/assets/product/mens/lofer/art_no_9/_DSC3094.JPG": "3a9217d9c6174fa9fd68058715032a37",
"assets/assets/product/mens/lofer/art_no_9/_DSC3089.JPG": "c50e93a2064a43ed3e9d3c9553ec3fa1",
"assets/assets/product/mens/lofer/art_no_20/_DSC3152.JPG": "6f8a568214889cfab5fd131c1725a6be",
"assets/assets/product/mens/lofer/art_no_20/_DSC3151.JPG": "5670bec5dea23422213e8a7e5868870a",
"assets/assets/product/mens/lofer/art_no_20/_DSC3150.JPG": "67dc6efadaf459367e0367d7b38f21a9",
"assets/assets/product/mens/lofer/art_no_20/_DSC3154.JPG": "a5babe922025143c1a4d5d8e9f1d2527",
"assets/assets/product/mens/lofer/art_no_18/_DSC3141.JPG": "34b5a99bee048415cac7a72e19b68256",
"assets/assets/product/mens/lofer/art_no_18/_DSC3143.JPG": "bda708987f2e8de052197a8273140c08",
"assets/assets/product/mens/lofer/art_no_18/_DSC3142.JPG": "2b42199a2276da83c698def32a4ce243",
"assets/assets/product/mens/lofer/art_no_18/_DSC3139.JPG": "e03cdc61096530087e20c5030dfa9d30",
"assets/assets/product/mens/lofer/art_no_27/_DSC3185.JPG": "5d9ea4c8647090d8d31778086fb65699",
"assets/assets/product/mens/lofer/art_no_27/_DSC3184.JPG": "e979d468e6d88d493c6be7b00a07088d",
"assets/assets/product/mens/lofer/art_no_27/_DSC3183.JPG": "0c9c3bae4b9c4b5ded23346088fcbcd8",
"assets/assets/product/mens/lofer/art_no_11/_DSC3104.JPG": "a8114c05b75786b5a1761f22cba376b5",
"assets/assets/product/mens/lofer/art_no_11/_DSC3102.JPG": "4899f8f1f94b98c9eeb526144bc8e7ca",
"assets/assets/product/mens/lofer/art_no_11/_DSC3103.JPG": "2d115ef1243a25af0975c1f7af7716ab",
"assets/assets/product/mens/lofer/art_no_11/_DSC3100.JPG": "627627f66a12fab8c28f05b6b876ebcd",
"assets/assets/product/mens/lofer/art_no_29/_DSC3192.JPG": "496303556f69555ca5a4311f75ff4214",
"assets/assets/product/mens/lofer/art_no_29/_DSC3193.JPG": "9a92d7a0aa50cbb1876706adccf7e3b4",
"assets/assets/product/mens/lofer/art_no_29/_DSC3194.JPG": "a6eabec593adf7e0e5be6f3f57dd9c7e",
"assets/assets/product/mens/lofer/art_no_16/_DSC3125.JPG": "706862289fe11d273bdc52e22f65ef3d",
"assets/assets/product/mens/lofer/art_no_16/_DSC3126.JPG": "31cb7ee84a6ffb83893170720bfe54e0",
"assets/assets/product/mens/lofer/art_no_16/_DSC3127.JPG": "234114ba44459f9d7c5a4cb430376681",
"assets/assets/product/mens/lofer/art_no_16/_DSC3123.JPG": "b481ac96652bd4ffd6713a5baf0cdda4",
"assets/assets/product/mens/lofer/art_no_16/_DSC3137.JPG": "1198bfbe9db7406c3dd2f4323ca6c66b",
"assets/assets/product/mens/lofer/art_no_16/_DSC3135.JPG": "a48230e0ebf467eab9e6bf89d1ca7c14",
"assets/assets/product/mens/lofer/art_no_42/_DSC3247.JPG": "1d942a28f723f0a4b4ae16b7f548eae0",
"assets/assets/product/mens/lofer/art_no_42/_DSC3246.JPG": "c2119be4587fc339da7eb7b94d3bc64d",
"assets/assets/product/mens/lofer/art_no_42/_DSC3248.JPG": "880bd4279e3b182a1f9a950404a2a262",
"assets/assets/product/mens/lofer/art_no_28/_DSC3190.JPG": "b76f9562edbf30d533941f693ecb377e",
"assets/assets/product/mens/lofer/art_no_28/_DSC3187.JPG": "8d547eb87797c6225ba406c9bf6aa9f6",
"assets/assets/product/mens/lofer/art_no_28/_DSC3189.JPG": "7b89a6e9569ceb233f786a121d89df3b",
"assets/assets/product/mens/lofer/art_no_28/_DSC3188.JPG": "fb1d562857bae0b7a7bc6143ce351575",
"assets/assets/product/mens/lofer/art_no_17/_DSC3130.JPG": "868f483cee4991603bbca7b8ae805e37",
"assets/assets/product/mens/lofer/art_no_17/_DSC3133.JPG": "899162a8bda204080354603929d7e754",
"assets/assets/product/mens/lofer/art_no_17/_DSC3129.JPG": "51410268780af4ff59f0ee43181a1fb0",
"assets/assets/product/mens/lofer/art_no_10/_DSC3095.JPG": "92b42d38f48c445dee6be3f9cbb0df3d",
"assets/assets/product/mens/lofer/art_no_10/_DSC3096.JPG": "8045ac34af9040d68f871d333201baff",
"assets/assets/product/mens/lofer/art_no_10/_DSC3098.JPG": "08e87c9f4eda7b69f5846cecde40a629",
"assets/assets/product/mens/lofer/art_no_19/_DSC3146.JPG": "508934c72f7c890883e0a2c5fcfaf812",
"assets/assets/product/mens/lofer/art_no_19/_DSC3147.JPG": "d098fb2518e72767d27014b577594747",
"assets/assets/product/mens/lofer/art_no_19/_DSC3145.JPG": "9dea1107f9b8a5192f4c5390442b1537",
"assets/assets/product/mens/lofer/art_no_19/_DSC3149.JPG": "f3d93909c5058985719fa65f3b9d8244",
"assets/assets/product/mens/lofer/art_no_26/_DSC3179.JPG": "54d6c002631ca4d919faaed4f12bb47f",
"assets/assets/product/mens/lofer/art_no_26/_DSC3182.JPG": "9cb40f38c22b27f83ff55d311851e221",
"assets/assets/product/mens/lofer/art_no_26/_DSC3180.JPG": "b1e2d5dc028da70e4d8018f486009d7a",
"assets/assets/product/mens/lofer/art_no_26/_DSC3181.JPG": "dae092e13acb479961b2aa1d56e5590c",
"assets/assets/product/mens/lofer/art_no_21/_DSC3155.JPG": "d74c8957a7a01d06f517f971d6d56a83",
"assets/assets/product/mens/lofer/art_no_21/_DSC3157.JPG": "c0a0e83c817f50f83c9f57630a87c36a",
"assets/assets/product/mens/lofer/art_no_21/_DSC3156.JPG": "c5800ce4e5eeba03d0d1ebc794a92139",
"assets/assets/product/mens/lofer/art_no_44/_DSC3253.JPG": "1e4e32d8c35d5bd05a85fab80c9351d1",
"assets/assets/product/mens/lofer/art_no_44/_DSC3254.JPG": "8e66258251ea7ed7085eb7e88fd168ca",
"assets/assets/product/mens/lofer/art_no_44/_DSC3256.JPG": "88ee1acb4302a7e821250b0dce69ab9a",
"assets/assets/product/mens/lofer/art_no_43/_DSC3252.JPG": "01cf1611c5c7fdd0e899bf543b7cf0c5",
"assets/assets/product/mens/lofer/art_no_43/_DSC3251.JPG": "92cbee5960eaabc9f76a9851e32a6c77",
"assets/assets/product/mens/lofer/art_no_43/_DSC3249.JPG": "39499b7b6eaf5284a61c1f6d5548afb2",
"assets/assets/product/mens/lofer/art_no_38/_DSC3233.JPG": "5cb4f9ebb1fa4018d027326e9df7baf1",
"assets/assets/product/mens/lofer/art_no_38/_DSC3234.JPG": "ba0195347e97908484e6e57bba26cece",
"assets/assets/product/mens/lofer/art_no_36/_DSC3215.JPG": "f2c16677b6c8ffc566afc9de1aabb2af",
"assets/assets/product/mens/lofer/art_no_31/_DSC3205.JPG": "8ca0d9396e9d015085c9b3e8654a9084",
"assets/assets/product/mens/lofer/art_no_31/_DSC3206.JPG": "fb3c5985141cc06fdf0ee8c0ba7e6aa3",
"assets/assets/product/mens/lofer/art_no_31/_DSC3203.JPG": "8abb18ff1bbc5ceef2ba0978de707d35",
"assets/assets/product/mens/lofer/art_no_30/_DSC3197.JPG": "b6ff60a984539c8af8b9839066d67792",
"assets/assets/product/mens/lofer/art_no_30/_DSC3195.JPG": "36190f88c64967f2c0ad511953dce500",
"assets/assets/product/mens/lofer/art_no_30/_DSC3198.JPG": "01a6be388081e80072536bbe58330333",
"assets/assets/product/mens/lofer/art_no_30/_DSC3200.JPG": "1a15ff02a6a0fb8cd2b6f3d110486cb5",
"assets/assets/product/mens/lofer/art_no_37/_DSC3230.JPG": "29ba96a445aa30f11d64ae4ac51ef026",
"assets/assets/product/mens/lofer/art_no_37/_DSC3231.JPG": "881151ec0edd48673e637cea2944bfba",
"assets/assets/product/mens/lofer/art_no_37/_DSC3225.JPG": "9b3e001da575615f36dc583fbc6419aa",
"assets/assets/product/mens/lofer/art_no_37/_DSC3227.JPG": "f665085b50f66a35f1fd785b3555d346",
"assets/assets/product/mens/lofer/art_no_37/_DSC3226.JPG": "32885fb5cbd7bfdd5b9ddd2612af2cb8",
"assets/assets/product/mens/lofer/art_no_37/_DSC3228.JPG": "9e2583e058fa5ddd350a492e1b400517",
"assets/assets/product/mens/lofer/art_no_37/_DSC3229.JPG": "1406d15b4f2099f6789a44ee5f85fe68",
"assets/assets/product/mens/lofer/art_no_39/_DSC3236.JPG": "84de8f851892162a32ab8cde2c8d1ea4",
"assets/assets/product/mens/lofer/art_no_39/_DSC3237.JPG": "02be03dfa27b78f73c993f6fcb066721",
"assets/assets/product/mens/lofer/art_no_39/_DSC3238.JPG": "69c3209a5257108875177a972df81355",
"assets/assets/product/mens/lofer/art_no_2/_DSC3051.JPG": "63358b1106bc6003ff5a0f64559d82b4",
"assets/assets/product/mens/lofer/art_no_2/_DSC3046.JPG": "8546a64399015628e3dbcad02aefa635",
"assets/assets/product/mens/lofer/art_no_2/_DSC3042.JPG": "571b7aa3c9b449586056b8f4ac257026",
"assets/assets/product/mens/lofer/art_no_2/_DSC3049.JPG": "3393589a4faa571dfceeacb9d0c4a2f3",
"assets/assets/product/mens/lofer/art_no_5/_DSC3068.JPG": "5eccb370e1eb4f0d33e409081aebe532",
"assets/assets/product/mens/lofer/art_no_5/_DSC3069.JPG": "573b5a269524ffd1b03c400dbbdb275d",
"assets/assets/product/mens/lofer/art_no_5/_DSC3071.JPG": "0a2a0632ebb78e9bde1b5a71fb97727e",
"assets/assets/product/mens/lofer/art_no_5/_DSC3065.JPG": "226e7bc329ecf62605b7830719aa7e11",
"assets/assets/product/mens/lofer/art_no_5/_DSC3067.JPG": "a68009c04e3f8dd6e0cab2a0b6d1ed7a",
"assets/assets/product/mens/lofer/art_no_5/_DSC3072.JPG": "c5ce9e51a54edf278a9fd4477930484c",
"assets/assets/product/mens/lofer/art_no_4/_DSC3056.JPG": "5f0e5c514d30845f3c95900d6524cbec",
"assets/assets/product/mens/lofer/art_no_4/_DSC3062.JPG": "39018ae19c6851c5935df12617a9de26",
"assets/assets/product/mens/lofer/art_no_4/_DSC3060.JPG": "eb128d087f7b7bcbe9a6e739489a1cfc",
"assets/assets/product/mens/lofer/art_no_3/_DSC3053.JPG": "4b151ea3b6a1d5f7e12425839b5cb141",
"assets/assets/product/mens/lofer/art_no_3/_DSC3055.JPG": "3d9446c2327e8b362d3aabc2b35e0ae8",
"assets/assets/product/mens/lofer/art_no_41/_DSC3244.JPG": "5b4905f82c1513a5de897c23096af325",
"assets/assets/product/mens/lofer/art_no_41/_DSC3245.JPG": "d7dfea0193546b8b43171e69b65eae65",
"assets/assets/product/mens/lofer/art_no_24/_DSC3173.JPG": "67df4faf6c6aa0393b5ba82211b44235",
"assets/assets/product/mens/lofer/art_no_24/_DSC3172.JPG": "fff53227e9c0879fb93773600a90e803",
"assets/assets/product/mens/lofer/art_no_24/_DSC3170.JPG": "35a4e9d6360f64944f8d43ca2f82b2bb",
"assets/assets/product/mens/lofer/art_no_24/_DSC3174.JPG": "4999d4cee72793d4e4b5fc56136e7103",
"assets/assets/product/mens/lofer/art_no_23/_DSC3168.JPG": "84d19513e54825f9031b0c51457c9fec",
"assets/assets/product/mens/lofer/art_no_23/_DSC3166.JPG": "7080e1c94d0d54d3a6c8854b2692b08c",
"assets/assets/product/mens/lofer/art_no_23/_DSC3164.JPG": "13ba6bc65a9709c98e0569dcb80396fd",
"assets/assets/product/mens/lofer/art_no_15/_DSC3119.JPG": "c9a0b439ce01d2b28d71e8ba830a6261",
"assets/assets/product/mens/lofer/art_no_15/_DSC3120.JPG": "e75060e2548b1b999a9a911309c4e135",
"assets/assets/product/mens/lofer/art_no_15/_DSC3121.JPG": "9d92fb1c0d7c69f96f5241985a816cba",
"assets/assets/product/mens/lofer/art_no_12/_DSC3108.JPG": "1dead7c1a5a3de82ab7220127d9e1d6a",
"assets/assets/product/mens/lofer/art_no_12/_DSC3109.JPG": "2cd7730d2ba5a7e628a83c4699da099c",
"assets/assets/product/mens/lofer/art_no_12/_DSC3110.JPG": "c5faf90d88fa30781155f644d9169d3b",
"assets/assets/product/mens/lofer/art_no_12/_DSC3105.JPG": "b02103307512cf65eea55f9d6cc84bf0",
"assets/assets/product/mens/lofer/art_no_12/_DSC3106.JPG": "96ef9ca98f1c22411ec90cd2bb61b351",
"assets/assets/product/mens/lofer/art_no_40/_DSC3241.JPG": "40326023b3c0386e0ad3826550c2322b",
"assets/assets/product/mens/lofer/art_no_40/_DSC3242.JPG": "8428331e6b06e954783239832a021c9e",
"assets/assets/product/mens/lofer/art_no_40/_DSC3239.JPG": "81cbc8310c4a2d900ff8804edd165ba7",
"assets/assets/product/mens/lofer/art_no_13/_DSC3112.JPG": "4857e028ba425bff8eec8a1ada37c178",
"assets/assets/product/mens/lofer/art_no_14/_DSC3118.JPG": "d88583cd1a4c4a6d427f277e360e7ff8",
"assets/assets/product/mens/lofer/art_no_14/_DSC3117.JPG": "09d8dfdcfb45df9271de41f5c97580c8",
"assets/assets/product/mens/lofer/art_no_22/_DSC3159.JPG": "961f10974ea9a338ffb24ab76552a899",
"assets/assets/product/mens/lofer/art_no_22/_DSC3161.JPG": "b3f15ffca4f2b7635389121d11b51cc3",
"assets/assets/product/mens/lofer/art_no_22/_DSC3160.JPG": "1243f9b051ca215b109d74135663e144",
"assets/assets/product/mens/lofer/art_no_22/_DSC3163.JPG": "17d56ad9956663cc146d83bf2b4bd222",
"assets/assets/product/mens/lofer/art_no_25/_DSC3178.JPG": "a544aa7a63a9f595699e1743580b1b26",
"assets/assets/product/mens/lofer/art_no_25/_DSC3175.JPG": "c9b7378476fab8f549c9f7ecdf53beea",
"assets/assets/product/mens/lofer/art_no_25/_DSC3176.JPG": "279b6ae319d10e8c6733b7d6e35d02f4",
"assets/assets/product/mens/lofer/art_no_25/_DSC3177.JPG": "d9f22f17801c1aba9821e6e96847e9cf",
"assets/assets/logo-white.jpg": "fb697c30896508c2484fe834af2b5d43",
"assets/assets/favicon.png": "c7848993a0c459b2b343e53af35c2c63",
"assets/assets/0O3A8456%25202.jpg": "8fd57917f0e3b333b26fcb195cb47740",
"assets/assets/woman.jpeg": "822458db509481533943e00310f6bd79",
"assets/assets/icons/instagram.png": "df9abc00ff73661c469a9d8060d3764a",
"assets/assets/icons/facebook.png": "e8f888da6ae04eff5452e0028f0608c3",
"assets/assets/0O3A8871.jpg": "9ba94566f3ae3c592375f18e75cd0741",
"assets/assets/0O3A8087.jpg": "bd4f79640969b7c87640c711c5297994",
"assets/assets/IMG_1757_Original.jpg": "62af7deaa43120fef6b3815a2a87f46e",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
