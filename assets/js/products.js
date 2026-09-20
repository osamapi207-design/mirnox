// MIRNOX products — المنتجات الحقيقية فقط
// كل منتج: id, name, price, old, rating, reviews, badge, colors[{name,hex,img}], images[], desc, specs{}
const PRODUCTS = [
  {
    id:"olevs-2900-steel",
    name:"OLEVS 2900 — ساعة رجالي ستانلس فاخرة مقاومة للماء",
    price:2450, old:3200, rating:4.6, reviews:139, badge:"جديد",
    cat:"كلاسيك",
    colors:[
      {name:"أزرق × ذهبي", hex:"#1e3a5f", img:"https://ae-pic-a1.aliexpress-media.com/kf/S5ff4b5bc3c9a4bd4a64c3b0793263eb80.jpg"},
      {name:"أسود", hex:"#111111", img:"https://ae-pic-a1.aliexpress-media.com/kf/S7d5932e8cacf407bbd07b49d16bc2310R.jpg"},
      {name:"أبيض × ذهبي", hex:"#e8e4da", img:"https://ae-pic-a1.aliexpress-media.com/kf/Sc1e3c9ab7af34e3fa95090a2ade429d7q.jpg"},
    ],
    images:[
      "https://ae-pic-a1.aliexpress-media.com/kf/S5ff4b5bc3c9a4bd4a64c3b0793263eb80.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sbd48abecaae544a78fb3853a3ec563caF.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S7d5932e8cacf407bbd07b49d16bc2310R.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sc1e3c9ab7af34e3fa95090a2ade429d7q.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sa7e50934c4504dfd93e1bbbd88fa3e006.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S2aa52a8a2525405696b357d25e5663d8I.jpg"
    ],
    desc:"ساعة OLEVS 2900 الرجالية الأصلية — تحفة من الفولاذ المقاوم للصدأ بتصميم كلاسيكي فاخر. ماكينة كوارتز دقيقة، عرض التاريخ، ومقاومة للماء 3BAR للاستخدام اليومي. زجاج مقوى مقاوم للخدش + قفل مخفي مريح. اختيار مثالي للشغل والمناسبات والهدايا. متوفرة في MIRNOX بضمان سنتين وعلبة هدية فاخرة.",
    specs:{"الماركة":"OLEVS 2900 أصلية","الحركة":"كوارتز ياباني","الخامة":"فولاذ مقاوم للصدأ 316L","الزجاج":"مقوى مقاوم للخدش","المقاومة":"3BAR (30 متر)","الوظائف":"ساعة + تاريخ","القفل":"مخفي ضغط","الضمان":"سنتان من MIRNOX"}
  },
  {
    id:"olevs-luxury-quartz",
    name:"OLEVS Luxury — ساعة رجالي فاخرة كوارتز مقاومة للماء",
    price:2250, old:2950, rating:4.7, reviews:379, badge:"الأكثر طلباً",
    cat:"كلاسيك",
    colors:[
      {name:"أسود × فضي", hex:"#111111", img:"https://ae-pic-a1.aliexpress-media.com/kf/Sedbcd7bb43b24d82932b85ff020a40f8L.jpg"},
    ],
    images:[
      "https://ae-pic-a1.aliexpress-media.com/kf/Sedbcd7bb43b24d82932b85ff020a40f8L.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S45b37918dca64759863e584003b7876d1.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sbfd137bf6025479ead03877796015215l.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Scb80aecf885b4fadbc6fa83eca45ce05t.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sf67d60d1fb5640369a7cf80f85d25cfbc.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S02b05c951c0d411fb7e2ec8cddf23e30n.jpg"
    ],
    desc:"ساعة OLEVS الفاخرة للرجال — تصميم راقٍ يجمع بين الفخامة والعملية. ماكينة كوارتز عالية الدقة، هيكل من الفولاذ المقاوم للصدأ، ومقاومة للماء 3BAR تناسب الاستخدام اليومي. مينا أنيقة مع عرض التاريخ، وحزام معدني مريح بقفل آمن. قطعة أساسية لكل رجل أنيق، وتغليف هدية فاخر من MIRNOX مع ضمان سنتين.",
    specs:{"الماركة":"OLEVS أصلية","الحركة":"كوارتز عالي الدقة","الخامة":"فولاذ مقاوم للصدأ","الزجاج":"معدني مقوى","المقاومة":"3BAR","الوظائف":"ساعة + تاريخ","الحزام":"ستانلس ستيل","الضمان":"سنتان من MIRNOX"}
  },
  {
    id:"olevs-5885-shine",
    name:"OLEVS 5885 — ساعة رجالي لامعة مع صندوق هدايا",
    price:2350, old:3100, rating:4.8, reviews:371, badge:"هدية مثالية",
    cat:"كلاسيك",
    colors:[
      {name:"أسود × فضي", hex:"#111111", img:"https://ae-pic-a1.aliexpress-media.com/kf/Sacd0e223596d430b9052743baa9ee94dH.jpg"},
      {name:"أخضر × فضي", hex:"#1a7a4c", img:"https://ae-pic-a1.aliexpress-media.com/kf/Sfbeeaa138e9242beb82808a4b41444ebL.jpg"},
      {name:"أحمر × فضي", hex:"#b03030", img:"https://ae-pic-a1.aliexpress-media.com/kf/Sd2ca738bae194a17944e7239b1ba74a2k.jpg"},
    ],
    images:[
      "https://ae-pic-a1.aliexpress-media.com/kf/Sacd0e223596d430b9052743baa9ee94dH.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S899bc0dce0db46ba93cdc01f61f8bfb7j.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sfbeeaa138e9242beb82808a4b41444ebL.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sd2ca738bae194a17944e7239b1ba74a2k.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sc1fceaf8696b4f219918538468528ed8d.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sb6bea98cc4034ccd9f5466b822711eeeS.jpg"
    ],
    desc:"ساعة OLEVS 5885 الرجالية اللامعة — تشطيب براق يخطف العين مع ماكينة كوارتز دقيقة ومقاومة للماء 3BAR. بتيجي مع صندوق هدايا شيك جاهز للإهداء، وحزام ستانلس مريح. مثالية للمناسبات والهدايا والاستخدام اليومي الراقي. ضمان سنتين من MIRNOX.",
    specs:{"الماركة":"OLEVS 5885 أصلية","الحركة":"كوارتز","الخامة":"ستانلس لامع","المقاومة":"3BAR","الوظائف":"ساعة + تاريخ","التغليف":"صندوق هدايا","الضمان":"سنتان من MIRNOX"}
  },
  {
    id:"olevs-9970-couple",
    name:"OLEVS 9970 — ساعة زوجين ستانلس مقاومة للماء",
    price:1980, old:2600, rating:4.6, reviews:45, badge:"",
    cat:"أطقم",
    colors:[
      {name:"أزرق — طقم زوجين", hex:"#1e3a5f", img:"https://ae-pic-a1.aliexpress-media.com/kf/S903db2da3a444862a59c25bd7eb7698cw.jpg"},
    ],
    images:[
      "https://ae-pic-a1.aliexpress-media.com/kf/S903db2da3a444862a59c25bd7eb7698cw.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sa558450010c94713b5aba20d229539ff6.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sce832e00df9d4503b2b2f57b969d69397.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sd59e73a90d80410295d834fb2d7055fc2.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S0e5ef76a65a145678e5335938101054bX.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S898e684cf5f14f14875b45894c9b27b8C.jpg"
    ],
    desc:"ساعة الزوجين OLEVS 9970 — فولاذ مقاوم للصدأ بتصميم أنيق يناسب الرجال والنساء. مقاومة للماء 3BAR، ماكينة كوارتز دقيقة، وتشطيب راقٍ يدوم. متوفرة في MIRNOX بضمان سنتين وعلبة هدية فاخرة.",
    specs:{"الماركة":"OLEVS 9970 أصلية","الحركة":"كوارتز","الخامة":"فولاذ مقاوم للصدأ","المقاومة":"3BAR","الوظائف":"ساعة + تاريخ","الضمان":"سنتان من MIRNOX"}
  },
  {
    id:"olevs-2926-gold",
    name:"OLEVS 2926 — ساعة رجالي ذهبية كوارتز مقاومة للماء",
    price:2380, old:3100, rating:4.7, reviews:42, badge:"",
    cat:"كلاسيك",
    colors:[
      {name:"أخضر × ذهبي", hex:"#1a7a4c", img:"https://ae-pic-a1.aliexpress-media.com/kf/S846b5511fcbb45e2bb024b880cfb4d0bp.jpg"},
      {name:"أزرق × ذهبي", hex:"#1e3a5f", img:"https://ae-pic-a1.aliexpress-media.com/kf/S813cfd9a79554b48be5ac739e4bdac3b7.jpg"},
    ],
    images:[
      "https://ae-pic-a1.aliexpress-media.com/kf/S846b5511fcbb45e2bb024b880cfb4d0bp.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S813cfd9a79554b48be5ac739e4bdac3b7.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Se7d0a1e9c9c541c0817c9539610ed5f4V.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sf19b020d4b2a49a787edabe5493bb8f42.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S7a485c1813104c68824e984939bc521dC.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S737ff28cbdcf4f658f1e84641f60eff99.jpg"
    ],
    desc:"ساعة OLEVS 2926 الذهبية — فخامة كلاسيكية بماكينة كوارتز دقيقة ومقاومة للماء 3BAR. هيكل ذهبي لامع وحزام ستانلس مريح. اختيار مثالي للمناسبات والهدايا. ضمان سنتين من MIRNOX.",
    specs:{"الماركة":"OLEVS 2926 أصلية","الحركة":"كوارتز","الخامة":"ستانلس مطلي ذهب","المقاومة":"3BAR","الوظائف":"ساعة + تاريخ","الضمان":"سنتان من MIRNOX"}
  },
  {
    id:"olevs-2709-moonphase",
    name:"OLEVS 2709 — سكيلتون مراحل القمر وكرونوغراف",
    price:9950, old:11900, rating:4.8, reviews:12, badge:"إصدار محدود",
    cat:"أوتوماتيك",
    colors:[
      {name:"أبيض × ذهبي", hex:"#e8e4da", img:"https://ae-pic-a1.aliexpress-media.com/kf/S4f5ea0c733e147d08275d2bf7c7279953.jpg"},
    ],
    images:[
      "https://ae-pic-a1.aliexpress-media.com/kf/S4f5ea0c733e147d08275d2bf7c7279953.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S3d5a528e621446b08ca833bb5c4cf824y.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S2bf427dc50c24002a41c24608d5addb06.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Scd1c6083a37841ea849eea2f86e5b857p.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sd41cb5175f25476ab31e9f341c577cf9W.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sc331550db58149f2a2b58bf16b2b48feH.jpg"
    ],
    desc:"تحفة OLEVS 2709 — تصميم هيكل عظمي (سكيلتون) مع مؤشر مراحل القمر وكرونوغراف. حزام فولاذي صلب ومرآة بتصميم معين عصري. لعشاق الساعات الميكانيكية الفاخرة. ضمان سنتين من MIRNOX.",
    specs:{"الماركة":"OLEVS 2709 أصلية","الحركة":"كوارتز متعدد الوظائف","الخامة":"فولاذ صلب","الوظائف":"كرونوغراف + مراحل القمر + هيكل عظمي","الضمان":"سنتان من MIRNOX"}
  },
  {
    id:"olevs-2950-chrono",
    name:"OLEVS 2950 — كرونوغراف مضيء بعقارب ليلية",
    price:1950, old:2500, rating:4.6, reviews:14, badge:"",
    cat:"رياضية",
    colors:[
      {name:"أزرق × فضي", hex:"#1e3a5f", img:"https://ae-pic-a1.aliexpress-media.com/kf/S9141dcc7db134f31a7008ba35b451bf4T.png"},
    ],
    images:[
      "https://ae-pic-a1.aliexpress-media.com/kf/S9141dcc7db134f31a7008ba35b451bf4T.png",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sec95ae5a71fd4241b8af629cbbdbb902l.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S384ea2bab9e744b4bddd256c2c36a69bq.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Secb6b54704754e4493315519aa09f6a34.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sdf99ad87104a4f6bb8cf5e4d02e6b4bbz.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sfd37310f37d34eaf86e9002d4061dd2eH.jpg"
    ],
    desc:"ساعة OLEVS 2950 الرياضية — كرونوغراف عملي مع عقارب ليلية مضيئة لرؤية واضحة في الظلام. تصميم رجالي جريء وخامة متينة للاستخدام اليومي. ضمان سنتين من MIRNOX.",
    specs:{"الماركة":"OLEVS 2950 أصلية","الحركة":"كوارتز كرونوغراف","الخامة":"ستانلس","المميزات":"عقارب ليلية مضيئة","الضمان":"سنتان من MIRNOX"}
  },
  {
    id:"olevs-9988-sport",
    name:"OLEVS 9988 — ساعة رياضية كرونوغراف ستانلس",
    price:2550, old:3300, rating:4.7, reviews:18, badge:"جديد",
    cat:"رياضية",
    colors:[
      {name:"أسود × ذهبي", hex:"#111111", img:"https://ae-pic-a1.aliexpress-media.com/kf/Sf029395401cf4a0faa78b0c1f9ae99d5e.jpg"},
      {name:"أسود — ذهبي كامل", hex:"#c9a45c", img:"https://ae-pic-a1.aliexpress-media.com/kf/S1578f40e6da14a529625ef6f4a33e48et.jpg"},
      {name:"أخضر × ذهبي", hex:"#1a7a4c", img:"https://ae-pic-a1.aliexpress-media.com/kf/S253ccaa4ba314695bf5cc3b7bc5fd1339.jpg"},
    ],
    images:[
      "https://ae-pic-a1.aliexpress-media.com/kf/Sf029395401cf4a0faa78b0c1f9ae99d5e.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S1578f40e6da14a529625ef6f4a33e48et.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S253ccaa4ba314695bf5cc3b7bc5fd1339.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sbb6808c154e844ee97c686331a86542db.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S4132202483c844588025d0fb190b913eX.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S4d16d187f3ae4cbb985a73972f76ade38.jpg"
    ],
    desc:"ساعة OLEVS 9988 الرياضية — كرونوغراف أصلي أنيق من الفولاذ المقاوم للصدأ، مقاومة للماء، وإضاءة ليلية. تصميم عملي للرياضة والاستخدام اليومي. ضمان سنتين من MIRNOX.",
    specs:{"الماركة":"OLEVS 9988 أصلية","الحركة":"كوارتز كرونوغراف","الخامة":"فولاذ مقاوم للصدأ","المقاومة":"مقاومة للماء","المميزات":"إضاءة ليلية","الضمان":"سنتان من MIRNOX"}
  },
  {
    id:"olevs-couple-lovers",
    name:"OLEVS Couple — طقم ساعات العشاق كرونوغراف",
    price:2700, old:3500, rating:4.7, reviews:18, badge:"للعشاق 💑",
    cat:"أطقم",
    colors:[
      {name:"فضي × أبيض — طقم", hex:"#c0c0c0", img:"https://ae-pic-a1.aliexpress-media.com/kf/Sf2efdaae6c60476cbb50bae44233a9f8d.png"},
    ],
    images:[
      "https://ae-pic-a1.aliexpress-media.com/kf/Sf2efdaae6c60476cbb50bae44233a9f8d.png",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sdafa6a9e65dd4e86a20e22ea92a96839D.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S0a94f80517334dfebabd54158d3f386b8.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S5bc1f78c72bf420390aa9c8ec9cbed30r.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S25833c33d78542389b1886f2b5c10469P.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sa341d58bb6c9498fa0621057b7bd53f5q.jpg"
    ],
    desc:"طقم ساعات OLEVS للعشاق — ساعتين كوارتز أصليتين بتصميم عصري موحد للرجال والنساء. كرونوغراف، مقاومة للماء، وإضاءة ليلية. أجمل هدية للخطوبة والمناسبات مع علبة هدية من MIRNOX.",
    specs:{"الماركة":"OLEVS أصلية","المحتويات":"ساعتين (رجالي + حريمي)","الحركة":"كوارتز","المميزات":"كرونوغراف + إضاءة ليلية + مقاومة للماء","الضمان":"سنتان من MIRNOX"}
  },
  {
    id:"olevs-5609-dual",
    name:"OLEVS 5609 — ساعة رياضية بتقويم مزدوج",
    price:2600, old:3400, rating:4.6, reviews:15, badge:"جديد",
    cat:"رياضية",
    colors:[
      {name:"أزرق × فضي", hex:"#1e3a5f", img:"https://ae-pic-a1.aliexpress-media.com/kf/S0c277c88087a42c1b1ef41a87dcdbc9d1.jpg"},
      {name:"أخضر × ذهبي", hex:"#1a7a4c", img:"https://ae-pic-a1.aliexpress-media.com/kf/Sb6152f26b6694ef6abd58e72c9fb4a8ce.jpg"},
      {name:"أزرق × ذهبي", hex:"#2a4a7a", img:"https://ae-pic-a1.aliexpress-media.com/kf/S0de2e77feaa748669b31bf18f9044d8c8.jpg"},
    ],
    images:[
      "https://ae-pic-a1.aliexpress-media.com/kf/S0c277c88087a42c1b1ef41a87dcdbc9d1.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S65e7671b2f524d789f458855967d74ca1.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sb6152f26b6694ef6abd58e72c9fb4a8ce.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S2c75dd99a9534ae9bd799b97909b44a15.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S0de2e77feaa748669b31bf18f9044d8c8.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S057f636b05c64fc1bdaf222d4cd68818d.jpg"
    ],
    desc:"ساعة OLEVS 5609 الرياضية — فولاذ مقاوم للصدأ مع تقويم مزدوج (يوم + تاريخ)، ماكينة كوارتز دقيقة ومقاومة للماء مع إضاءة ليلية. عملية وأنيقة لليوم كله. ضمان سنتين من MIRNOX.",
    specs:{"الماركة":"OLEVS 5609 أصلية","الحركة":"كوارتز","الخامة":"فولاذ مقاوم للصدأ","الوظائف":"تقويم مزدوج","المميزات":"مقاومة للماء + إضاءة","الضمان":"سنتان من MIRNOX"}
  },
  {
    id:"olevs-6691-auto",
    name:"OLEVS 6691 — أوتوماتيك سكيلتون مراحل القمر",
    price:8750, old:9900, rating:4.9, reviews:9, badge:"VIP",
    cat:"أوتوماتيك",
    colors:[
      {name:"أزرق × ذهبي", hex:"#1e3a5f", img:"https://ae-pic-a1.aliexpress-media.com/kf/Sb324455599d84426ae1f6af3cae21a7ab.jpg"},
    ],
    images:[
      "https://ae-pic-a1.aliexpress-media.com/kf/Sb324455599d84426ae1f6af3cae21a7ab.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sb4b7035e2dc947448570efce6b9a36f8q.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S5a4395de8a3e44cb843d3b2c5e75c184u.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sf5b12ffb98c04c59889603e73d2519c15.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sae1106c39ca64c64aeb1f0a5490a80a6L.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S630c9cecebf54fbd8fb610238f6c59a1K.jpg"
    ],
    desc:"قمة الفخامة OLEVS 6691 — ساعة ميكانيكية أوتوماتيكية بتصميم هيكل عظمي ومؤشر مراحل القمر. متعددة الوظائف بتشطيب فاخر يليق بهواة الساعات الحقيقية. ضمان سنتين من MIRNOX.",
    specs:{"الماركة":"OLEVS 6691 أصلية","الحركة":"ميكانيكية أوتوماتيك","التصميم":"هيكل عظمي + مراحل القمر","الوظائف":"متعددة الوظائف","الضمان":"سنتان من MIRNOX"}
  },
  {
    id:"olevs-7018-gold-auto",
    name:"OLEVS 7018 — ساعة ذهبية أوتوماتيك فاخرة",
    price:4800, old:5900, rating:4.7, reviews:14, badge:"فاخرة",
    cat:"أوتوماتيك",
    colors:[
      {name:"ذهبي كامل", hex:"#c9a45c", img:"https://ae-pic-a1.aliexpress-media.com/kf/S3ed870b4346c42628d1ba0d57cebee195.png"},
    ],
    images:[
      "https://ae-pic-a1.aliexpress-media.com/kf/S3ed870b4346c42628d1ba0d57cebee195.png",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sc23606c8d492474489c47d39d9c441baI.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S69dc95ab307b43d38042da0849d1e12bv.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S590781fffb0f41619a8e5047337a5cebV.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sb82090f5799843a5b20f0cef9571f3b4R.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S3f1dd0db418941e3b3aa7df839dea410t.jpg"
    ],
    desc:"ساعة OLEVS 7018 الذهبية الكاملة — ماركة أصلية بحركة ميكانيكية أوتوماتيك متعددة الوظائف. فخامة ذهبية كاملة تناسب المناسبات الكبيرة. ضمان سنتين من MIRNOX.",
    specs:{"الماركة":"OLEVS 7018 أصلية","الحركة":"ميكانيكية أوتوماتيك","الخامة":"ستانلس ذهبي","الوظائف":"متعددة الوظائف","الضمان":"سنتان من MIRNOX"}
  },
  {
    id:"olevs-7028-tourbillon",
    name:"OLEVS 7028 — توربيون أوتوماتيك مضيئة",
    price:4950, old:6200, rating:4.8, reviews:55, badge:"الأعلى تقييماً",
    cat:"أوتوماتيك",
    colors:[
      {name:"فضي سكيلتون", hex:"#c0c0c0", img:"https://ae-pic-a1.aliexpress-media.com/kf/Sd8c8725054634e418588493fd287b6cbB.jpg"},
    ],
    images:[
      "https://ae-pic-a1.aliexpress-media.com/kf/Sd8c8725054634e418588493fd287b6cbB.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S3b51f45be7574344b66d32a81a23ef4ax.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sa3077c955a834faaa09ee80ee4bf46cdW.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S0966949c234446cf8493f1da135141e1o.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S25ab95c7ed764e1fa4e60ee5fb15f643U.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S1bd1612660844f3087ab17d2f5303507H.jpg"
    ],
    desc:"ساعة OLEVS 7028 التوربيون — حركة ميكانيكية أوتوماتيك بمينا متعدد الوظائف مع التاريخ ومقاومة للماء وإضاءة ليلية. تصميم جريء لهواة التميز. ضمان سنتين من MIRNOX.",
    specs:{"الماركة":"OLEVS 7028 أصلية","الحركة":"ميكانيكية أوتوماتيك توربيون","الوظائف":"تاريخ + متعدد الوظائف","المميزات":"مقاومة للماء + مضيئة","الضمان":"سنتان من MIRNOX"}
  }
];
