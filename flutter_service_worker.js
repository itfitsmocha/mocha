'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "173a47911faa854186118861e365419e",
"index.html": "5ec6ef295a312608b4fa561b3a046b48",
"/": "5ec6ef295a312608b4fa561b3a046b48",
"main.dart.js": "8b35e98c99839f713a738c86631edc1a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a9f73e946a54385070ad87b3c2218c22",
"assets/AssetManifest.json": "9fc4e024e578bee2343d9cbc45109350",
"assets/NOTICES": "cb781274bd01fac6c28694b1638a732d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6563e6b5325a5f622fa6a09997e1f45e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "5878b7c8187a01e1e5874d055254710b",
"assets/fonts/MaterialIcons-Regular.otf": "eb6a775dea96d8372ae2a62fdf550f70",
"assets/assets/contact/map.png": "485e211b60f27815de7da4e8516eaa6b",
"assets/assets/IMG_1782-Edit_Original.jpg": "cb1224bdfd5354bff67e547a37befe36",
"assets/assets/shophighlight/pricing.png": "14e757750443c10cc2474e8b7ac0b71a",
"assets/assets/shophighlight/safeHome.png": "a705862d7972147e58a4f9c4630611b1",
"assets/assets/shophighlight/truckFast.png": "dd7345730898eea53df53870cc719ddd",
"assets/assets/IMG_1628_Original.jpg": "0a7bf3e9fb9b69153a63e9b63eb3dfa9",
"assets/assets/0O3A8274.jpg": "dc371e14f06b8008363bf48b961a78e3",
"assets/assets/0O3A9965.jpg": "6b24aab52f78372fa05b33a5fb2dd509",
"assets/assets/product/mens/lofer/art_no_32/_DSC3209.jpg": "4a7384ff79689b4856fa47e8c862bc01",
"assets/assets/product/mens/lofer/art_no_32/_DSC3208.jpg": "2abfe35a47b363a4fd072af20e947354",
"assets/assets/product/mens/lofer/art_no_32/_DSC3210.jpg": "7cc8d6f9036ea22e99cc7e444eb5c638",
"assets/assets/product/mens/lofer/art_no_32/_DSC3207.jpg": "3dbaa151abf3ab7f2de68e7fee4158d7",
"assets/assets/product/mens/lofer/art_no_35/_DSC3224.jpg": "e5b506a83ba6ce295937449034375aec",
"assets/assets/product/mens/lofer/art_no_35/_DSC3222.jpg": "a6178eb86944a63f2050a7cfd7de64fd",
"assets/assets/product/mens/lofer/art_no_35/_DSC3221.jpg": "aca777f8795059fb736caf56635e776f",
"assets/assets/product/mens/lofer/art_no_35/_DSC3215.jpg": "7e3dc829f3d09061eb4390a0bc71e5a8",
"assets/assets/product/mens/lofer/art_no_34/_DSC3219.jpg": "6dbd154a0ed4a7c0f9ca8f27124469d8",
"assets/assets/product/mens/lofer/art_no_34/_DSC3217.jpg": "f829b8200382d21981c3b6df97a56610",
"assets/assets/product/mens/lofer/art_no_34/_DSC3216.jpg": "b6078b686ba7edada725727b301557ed",
"assets/assets/product/mens/lofer/art_no_34/_DSC3215.jpg": "7e3dc829f3d09061eb4390a0bc71e5a8",
"assets/assets/product/mens/lofer/art_no_33/_DSC3212.jpg": "f38946be8326010bc50d6e6de47ad8c7",
"assets/assets/product/mens/lofer/art_no_33/_DSC3213.jpg": "50696335bd9bf10b2fee74c526ae273b",
"assets/assets/product/mens/lofer/art_no_33/_DSC3214.jpg": "b308a7d730eff05aee1e8c425adbad2e",
"assets/assets/product/mens/lofer/art_no_33/_DSC3215.jpg": "7e3dc829f3d09061eb4390a0bc71e5a8",
"assets/assets/product/mens/lofer/art_no_8/_DSC3086.jpg": "79a21cf8432ba114a8a8a75723a1538b",
"assets/assets/product/mens/lofer/art_no_8/_DSC3087.jpg": "fef9d2592660344dbb7b55f9a4415ba7",
"assets/assets/product/mens/lofer/art_no_6/_DSC3076.jpg": "dd8603a34c2b2b657c591e9da95b6ade",
"assets/assets/product/mens/lofer/art_no_6/_DSC3077.jpg": "112499abcd7feee86640282ed22f48db",
"assets/assets/product/mens/lofer/art_no_6/_DSC3074.jpg": "9a191cd5a53fd13c3caae0dda5d578ef",
"assets/assets/product/mens/lofer/art_no_1/_DSC3041.jpg": "6779af7c36b4fd8f4a6baa8f6921bfbe",
"assets/assets/product/mens/lofer/art_no_1/_DSC3036.jpg": "41513c4c6bba70396cb055abd4dfc90b",
"assets/assets/product/mens/lofer/art_no_1/_DSC3039.jpg": "7189fcd444a30e40f13455b8959cabbc",
"assets/assets/product/mens/lofer/art_no_7/_DSC3079.jpg": "5cc9f970af01247fd352d950ef08acf0",
"assets/assets/product/mens/lofer/art_no_7/_DSC3085.jpg": "083b1285a7c7de8d4a59c2cee3ac3d1c",
"assets/assets/product/mens/lofer/art_no_7/_DSC3084.jpg": "ba7192341ea015933e80a4220fd6b469",
"assets/assets/product/mens/lofer/art_no_7/_DSC3080.jpg": "0ece6ff6e9748d317ee3bc5cb819eba2",
"assets/assets/product/mens/lofer/art_no_7/_DSC3081.jpg": "9aa61af6815ebe1bee5ff54048e0fc1b",
"assets/assets/product/mens/lofer/art_no_7/_DSC3083.jpg": "268f6e6ea125f4a652d31ea89950fbed",
"assets/assets/product/mens/lofer/art_no_9/_DSC3092.jpg": "ca949655024f1caed7d4ec8581719a9c",
"assets/assets/product/mens/lofer/art_no_9/_DSC3091.jpg": "f3a1da483c6a482d42687ded3d3bbca5",
"assets/assets/product/mens/lofer/art_no_9/_DSC3094.jpg": "afe615d8d2b0b93666bd467751c3ddd2",
"assets/assets/product/mens/lofer/art_no_9/_DSC3089.jpg": "a0d2354d93dc832a306bf5235d7a30fd",
"assets/assets/product/mens/lofer/art_no_20/_DSC3152.jpg": "bd7d5d8f2da694c9612de0ade407b759",
"assets/assets/product/mens/lofer/art_no_20/_DSC3151.jpg": "6ec007be96da94dd137669aa4a479112",
"assets/assets/product/mens/lofer/art_no_20/_DSC3150.jpg": "7d27dc7474f5eb74ffd21b45b9b56645",
"assets/assets/product/mens/lofer/art_no_20/_DSC3154.jpg": "c28bf53d5e8830889b7fa4116f4a7f86",
"assets/assets/product/mens/lofer/art_no_18/_DSC3141.jpg": "97449ea618e35c7756144d91d40b019b",
"assets/assets/product/mens/lofer/art_no_18/_DSC3143.jpg": "630fb8a056fdfba0521716f6a11b54a9",
"assets/assets/product/mens/lofer/art_no_18/_DSC3142.jpg": "760b0de129b65278f4712b24b56c8725",
"assets/assets/product/mens/lofer/art_no_18/_DSC3139.jpg": "0bcabec782cf0b0cf58766488ba5e47e",
"assets/assets/product/mens/lofer/art_no_27/_DSC3185.jpg": "4dde2f506f7d7c375132ecf98de490c2",
"assets/assets/product/mens/lofer/art_no_27/_DSC3184.jpg": "e1abcbca082494d9b6575759b1a9b064",
"assets/assets/product/mens/lofer/art_no_27/_DSC3183.jpg": "abc6b2d8b7a32966f84ce25f207f506e",
"assets/assets/product/mens/lofer/art_no_11/_DSC3104.jpg": "106839d77b8e11f648dd3fdd590d543c",
"assets/assets/product/mens/lofer/art_no_11/_DSC3102.jpg": "c94041e4caac57420a53e155b00f347b",
"assets/assets/product/mens/lofer/art_no_11/_DSC3103.jpg": "99c60e6e82f8ebdfc4c5adf190e95eb4",
"assets/assets/product/mens/lofer/art_no_11/_DSC3100.jpg": "7ba3a3dc9c26d347ea1648b695bbdecd",
"assets/assets/product/mens/lofer/art_no_29/_DSC3192.jpg": "8378a804b7a439001ffa55457bba889c",
"assets/assets/product/mens/lofer/art_no_29/_DSC3193.jpg": "df3d2b06f22f0c57b5ec9cae5d4c0932",
"assets/assets/product/mens/lofer/art_no_29/_DSC3194.jpg": "f93723d114f5cb9c5447486add3f6b17",
"assets/assets/product/mens/lofer/art_no_16/_DSC3125.jpg": "9cf95a9a3827fc27e62cb1de39675b4a",
"assets/assets/product/mens/lofer/art_no_16/_DSC3126.jpg": "8d0dddb2ea3d3de0f0667101bcc97df2",
"assets/assets/product/mens/lofer/art_no_16/_DSC3127.jpg": "bd7f8bf2ef774f3c2e0b963f88ed9ad9",
"assets/assets/product/mens/lofer/art_no_16/_DSC3123.jpg": "c80c54792053c6d73a9a2b3467e31e7d",
"assets/assets/product/mens/lofer/art_no_16/_DSC3137.jpg": "1d50b2d9c17939aaa311b5c559a77bf8",
"assets/assets/product/mens/lofer/art_no_16/_DSC3135.jpg": "9955f899aee261859a0eef2fb4c80098",
"assets/assets/product/mens/lofer/art_no_42/_DSC3247.jpg": "fdf4406756c605196d07dc47494055c0",
"assets/assets/product/mens/lofer/art_no_42/_DSC3246.jpg": "2ae58cfc61bc86115ea36a20861ffc9d",
"assets/assets/product/mens/lofer/art_no_42/_DSC3248.jpg": "f1c32524c1c48dda33fc9ade458471f7",
"assets/assets/product/mens/lofer/art_no_28/_DSC3190.jpg": "605873df2e52c6f761379e14f1cbc44a",
"assets/assets/product/mens/lofer/art_no_28/_DSC3187.jpg": "79f42630c4a60a96a9f4e8718c45fd52",
"assets/assets/product/mens/lofer/art_no_28/_DSC3189.jpg": "6104d1b4baa0b68b6e653a92e7bc7429",
"assets/assets/product/mens/lofer/art_no_28/_DSC3188.jpg": "3515da4b5652c87bc885b99ba175d39a",
"assets/assets/product/mens/lofer/art_no_17/_DSC3130.jpg": "999106e1e17861672f5636f83004ee44",
"assets/assets/product/mens/lofer/art_no_17/_DSC3133.jpg": "33371e7f2e12167a5609e4c99bc37627",
"assets/assets/product/mens/lofer/art_no_17/_DSC3129.jpg": "8911240e142fe3d75cc746ca011b4a3c",
"assets/assets/product/mens/lofer/art_no_10/_DSC3095.jpg": "d4d52d123731531242a20cba6afb443c",
"assets/assets/product/mens/lofer/art_no_10/_DSC3096.jpg": "b928d83a372b6eda64a757a2866c46f7",
"assets/assets/product/mens/lofer/art_no_10/_DSC3098.jpg": "5e689c4c7d24dc23fc42d75aedebf780",
"assets/assets/product/mens/lofer/art_no_19/_DSC3146.jpg": "222aff8eb2bc23857f3652b8b9082b55",
"assets/assets/product/mens/lofer/art_no_19/_DSC3147.jpg": "05ca9cd965ed7e1acd5f9ac0fdc949f6",
"assets/assets/product/mens/lofer/art_no_19/_DSC3145.jpg": "5cec6f2d004dcf92c69ef4bd4e36b993",
"assets/assets/product/mens/lofer/art_no_19/_DSC3149.jpg": "2b7192da770bd72ddd0fb0bf7aa22931",
"assets/assets/product/mens/lofer/art_no_26/_DSC3179.jpg": "20fb5185586fecada03fbccd6388a48d",
"assets/assets/product/mens/lofer/art_no_26/_DSC3182.jpg": "1e43e952eb1e0d8d31d1b45ee5a3d54d",
"assets/assets/product/mens/lofer/art_no_26/_DSC3180.jpg": "cfde3bbad2dd0681e37f56013688408b",
"assets/assets/product/mens/lofer/art_no_26/_DSC3181.jpg": "dba4040dd14a414260a13da5255c9abc",
"assets/assets/product/mens/lofer/art_no_21/_DSC3155.jpg": "6dd847d65347276c15956f885b5f4865",
"assets/assets/product/mens/lofer/art_no_21/_DSC3157.jpg": "b529bb0f15efbe5d187f9f91e37c2667",
"assets/assets/product/mens/lofer/art_no_21/_DSC3156.jpg": "11bd81867ab372b301dbc7e5c1db2695",
"assets/assets/product/mens/lofer/art_no_44/_DSC3253.jpg": "e4862d61ed8d7d4b1b2ca0c59f4cf80e",
"assets/assets/product/mens/lofer/art_no_44/_DSC3254.jpg": "d980fea859ea526a516544c68c4ade8c",
"assets/assets/product/mens/lofer/art_no_44/_DSC3256.jpg": "5fa3dce6bb7fc26b0e550266c463bd17",
"assets/assets/product/mens/lofer/art_no_43/_DSC3252.jpg": "e3a3d82560fad9d0bbee9721cf64366c",
"assets/assets/product/mens/lofer/art_no_43/_DSC3251.jpg": "c2a96d3cc935f129d99cdf578c18158b",
"assets/assets/product/mens/lofer/art_no_43/_DSC3249.jpg": "859ea147e2409ec7239d9bcbe719c895",
"assets/assets/product/mens/lofer/art_no_38/_DSC3233.jpg": "ad26f9529eecd830f8915cf7faf6afd1",
"assets/assets/product/mens/lofer/art_no_38/_DSC3234.jpg": "657bcb23aa1c1fda6dc16b089479c331",
"assets/assets/product/mens/lofer/art_no_36/_DSC3215.jpg": "7e3dc829f3d09061eb4390a0bc71e5a8",
"assets/assets/product/mens/lofer/art_no_31/_DSC3205.jpg": "6232041e8720407ef564f56948210266",
"assets/assets/product/mens/lofer/art_no_31/_DSC3206.jpg": "a5c0370c7ac780e20f76fd214515c5d0",
"assets/assets/product/mens/lofer/art_no_31/_DSC3203.jpg": "bb5be375b13c158d3836fba433f88305",
"assets/assets/product/mens/lofer/art_no_30/_DSC3197.jpg": "c25dfac8a936dcf94b897583a2d459d7",
"assets/assets/product/mens/lofer/art_no_30/_DSC3195.jpg": "ed9edd47932f3c68a2f3d25d34ce6e96",
"assets/assets/product/mens/lofer/art_no_30/_DSC3198.jpg": "9d2a324259504f4b18bfc5f74e109c21",
"assets/assets/product/mens/lofer/art_no_30/_DSC3200.jpg": "97d976bac75c69c6e891bf52420f7bad",
"assets/assets/product/mens/lofer/art_no_37/_DSC3230.jpg": "43cc1d96e3971e72a77e52a096455819",
"assets/assets/product/mens/lofer/art_no_37/_DSC3231.jpg": "324088df8f50f6aac4962937cf59c7ec",
"assets/assets/product/mens/lofer/art_no_37/_DSC3225.jpg": "e919a5ba02d0f2fe73f8f0beb9990da0",
"assets/assets/product/mens/lofer/art_no_37/_DSC3227.jpg": "530f31ca11a8a400270753f2224022b0",
"assets/assets/product/mens/lofer/art_no_37/_DSC3226.jpg": "a5b0245bf5a15d8878648164c17ea971",
"assets/assets/product/mens/lofer/art_no_37/_DSC3228.jpg": "6bf25877baa101ca8ad9c2ec1b8d04ea",
"assets/assets/product/mens/lofer/art_no_37/_DSC3229.jpg": "0bd9bfe8db446c8e15bf64fd0faf6ae4",
"assets/assets/product/mens/lofer/art_no_39/_DSC3236.jpg": "5d13f479dcc02909fe61c99dcb4153d3",
"assets/assets/product/mens/lofer/art_no_39/_DSC3237.jpg": "927a8071077c95093dbdfd6441179ad9",
"assets/assets/product/mens/lofer/art_no_39/_DSC3238.jpg": "be64d937c1ff846bbbcb62d0b9862cb0",
"assets/assets/product/mens/lofer/art_no_2/_DSC3051.jpg": "2b79e1cfcb8348e183500f924224c2a7",
"assets/assets/product/mens/lofer/art_no_2/_DSC3046.jpg": "4f421cd8717b9b7d03b648941a5a10cd",
"assets/assets/product/mens/lofer/art_no_2/_DSC3042.jpg": "02343c4d9f6d82e3f5aa5028d38d0f26",
"assets/assets/product/mens/lofer/art_no_2/_DSC3049.jpg": "aee42d7ecc873a039863388d0452b8ea",
"assets/assets/product/mens/lofer/art_no_5/_DSC3068.jpg": "560b2f7f4819b7433899ecc918ebb74d",
"assets/assets/product/mens/lofer/art_no_5/_DSC3069.jpg": "94841a2823b5a290a321c1bb42195efb",
"assets/assets/product/mens/lofer/art_no_5/_DSC3071.jpg": "132d470bdc3fcd1e616b07441fd89cdf",
"assets/assets/product/mens/lofer/art_no_5/_DSC3065.jpg": "bd8ac7632257c6e65873a8bc1368a271",
"assets/assets/product/mens/lofer/art_no_5/_DSC3067.jpg": "25053c2730d29887bd462729a58ed0c0",
"assets/assets/product/mens/lofer/art_no_5/_DSC3072.jpg": "2449189d58fb2e987f9ccbe3f7b12991",
"assets/assets/product/mens/lofer/art_no_4/_DSC3056.jpg": "9eaa1da0aa91cc2686b6373be2462530",
"assets/assets/product/mens/lofer/art_no_4/_DSC3062.jpg": "6dcaa754e858e0c4279d0d6d04468185",
"assets/assets/product/mens/lofer/art_no_4/_DSC3060.jpg": "a9f3fd2d1f5d9e7b6250bb039d38e757",
"assets/assets/product/mens/lofer/art_no_3/_DSC3053.jpg": "b2be0782149d953e76a010213ece60be",
"assets/assets/product/mens/lofer/art_no_3/_DSC3055.jpg": "1e2efa0b388eb75b1b25d07db822fe33",
"assets/assets/product/mens/lofer/art_no_41/_DSC3244.jpg": "42a83db7742462532ed1ab6a677199b7",
"assets/assets/product/mens/lofer/art_no_41/_DSC3245.jpg": "548e127ee555e002681b0acec0637d9f",
"assets/assets/product/mens/lofer/art_no_24/_DSC3173.jpg": "c51b2e4af0c4ef84f43885fcd10960d5",
"assets/assets/product/mens/lofer/art_no_24/_DSC3172.jpg": "831e6ffe4cdfd94c86621a827cc1e099",
"assets/assets/product/mens/lofer/art_no_24/_DSC3170.jpg": "cf36bf1f19da4b3f1b5767b53cc922a5",
"assets/assets/product/mens/lofer/art_no_24/_DSC3174.jpg": "0fbb393c7c37410b0fdf746b0f84a81b",
"assets/assets/product/mens/lofer/art_no_23/_DSC3168.jpg": "514e72872647c0412aeafd1eb03be54b",
"assets/assets/product/mens/lofer/art_no_23/_DSC3166.jpg": "70238d7567fdddf6369e168204dda747",
"assets/assets/product/mens/lofer/art_no_23/_DSC3164.jpg": "1d441d3522ad08914adc379c70724d92",
"assets/assets/product/mens/lofer/art_no_15/_DSC3119.jpg": "92f68662d6ee0ec4c25c61dc40bea148",
"assets/assets/product/mens/lofer/art_no_15/_DSC3120.jpg": "9393523439d8d2ddf44f7918a5dd23b8",
"assets/assets/product/mens/lofer/art_no_15/_DSC3121.jpg": "9eadf7eacb721d409ac2e32edf4e765d",
"assets/assets/product/mens/lofer/art_no_12/_DSC3108.jpg": "9042718a775b9e098081cdc7d621ed86",
"assets/assets/product/mens/lofer/art_no_12/_DSC3109.jpg": "9bd088ef09c48a640aa31ab97b4dab23",
"assets/assets/product/mens/lofer/art_no_12/_DSC3110.jpg": "3e4e8d012f6a48dedcd1867fd3788cad",
"assets/assets/product/mens/lofer/art_no_12/_DSC3105.jpg": "6273e1aaa31f168cc9b58fec98e83ae3",
"assets/assets/product/mens/lofer/art_no_12/_DSC3106.jpg": "f9d0cb3ab5b2905f45b1ac8011a198c4",
"assets/assets/product/mens/lofer/art_no_40/_DSC3241.jpg": "04dc7fc117367bff3f83e332aada2112",
"assets/assets/product/mens/lofer/art_no_40/_DSC3242.jpg": "5a992dfa595e2baea518dc7f8ccfcd02",
"assets/assets/product/mens/lofer/art_no_40/_DSC3239.jpg": "cf9a45e7d39fa37a0b08169ab1629106",
"assets/assets/product/mens/lofer/art_no_13/_DSC3112.jpg": "b4e8f5839e16ae42a678b458f8199e1f",
"assets/assets/product/mens/lofer/art_no_14/_DSC3118.jpg": "b47b4acc532d7974276a2195847d0233",
"assets/assets/product/mens/lofer/art_no_14/_DSC3117.jpg": "6fc77704313618ad1ae4dad2f147b747",
"assets/assets/product/mens/lofer/art_no_22/_DSC3159.jpg": "9142813691e552d57ef954934be7c17d",
"assets/assets/product/mens/lofer/art_no_22/_DSC3161.jpg": "af99750a19c9bf2ac9fceb149dfb5032",
"assets/assets/product/mens/lofer/art_no_22/_DSC3160.jpg": "38cc12b63df47aeabe23836c0a546075",
"assets/assets/product/mens/lofer/art_no_22/_DSC3163.jpg": "79bf67efc7e5a604d850a4d17f52c0ba",
"assets/assets/product/mens/lofer/art_no_25/_DSC3178.jpg": "c6d57d07ddbe99acb38f39dfd2fcf517",
"assets/assets/product/mens/lofer/art_no_25/_DSC3175.jpg": "17fe96c2d2d854632f3e8ae709ac01dc",
"assets/assets/product/mens/lofer/art_no_25/_DSC3176.jpg": "60de06933f927d9478a5cdeb6aca0b2b",
"assets/assets/product/mens/lofer/art_no_25/_DSC3177.jpg": "9ee9e7d8b86e97f671f19a858819dcb2",
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
