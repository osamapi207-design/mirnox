// MIRNOX i18n — Arabic / English with device-language auto detect
// lang stored in localStorage 'mirnox_lang' ('ar'|'en'); default from navigator.language
function detectLang(){
  try{
    const s=localStorage.getItem('mirnox_lang');
    if(s==='ar'||s==='en') return s;
    const n=(navigator.language||navigator.userLanguage||'en').toLowerCase();
    return n.indexOf('ar')===0 ? 'ar' : 'en';
  }catch(e){ return 'ar'; }
}
let LANG = detectLang();
function setLang(l){
  LANG=(l==='en')?'en':'ar';
  try{localStorage.setItem('mirnox_lang',LANG);}catch(e){}
  applyLang();
}
function toggleLang(){ setLang(LANG==='ar'?'en':'ar'); }
function applyLang(){
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG==='ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n');
    if(I18N[k] && I18N[k][LANG]!==undefined) el.innerHTML=I18N[k][LANG];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const k=el.getAttribute('data-i18n-ph');
    if(I18N[k] && I18N[k][LANG]!==undefined) el.placeholder=I18N[k][LANG];
  });
  document.querySelectorAll('.lang-btn').forEach(b=>{ b.textContent = LANG==='ar' ? 'EN' : 'عربي'; });
  if(document.title && document.title.indexOf('MIRNOX')>=0){
    const pg=(document.body||{}).getAttribute('data-page')||'';
    if(pg && I18N['title_'+pg]) document.title=I18N['title_'+pg][LANG]+' | MIRNOX';
  }
  if(typeof updateBadge==='function') updateBadge();
  if(typeof rerenderLang==='function'){ try{rerenderLang();}catch(e){} }
}
function t(k){ return (I18N[k]&&I18N[k][LANG]!==undefined)?I18N[k][LANG]:k; }

const I18N = {
// titles
title_home:{ar:'ساعات فاخرة بهوية تليق بيك',en:'Luxury watches that suit you'},
title_shop:{ar:'تسوق',en:'Shop'},
title_product:{ar:'المنتج',en:'Product'},
title_cart:{ar:'السلة',en:'Cart'},
title_checkout:{ar:'الدفع',en:'Checkout'},
title_track:{ar:'تتبع الشحنات',en:'Track Order'},
title_policy:{ar:'سياسة التعامل',en:'Store Policies'},
title_contact:{ar:'تواصل مع خدمة العملاء',en:'Customer Service'},
// nav
nav_home:{ar:'الرئيسية',en:'Home'},
nav_shop:{ar:'تسوق',en:'Shop'},
nav_track:{ar:'تتبع شحنتك',en:'Track Order'},
nav_policy:{ar:'سياسة التعامل',en:'Policies'},
nav_contact:{ar:'تواصل مع خدمة العملاء',en:'Customer Service'},
nav_buy:{ar:'اشتري دلوقتي',en:'Shop Now'},
// topbars
tb_home:{ar:'شحن مجاني للطلبات فوق 5000 ج • ضمان سنتين • إرجاع مجاني خلال 14 يوم',en:'Free shipping over 5000 EGP • 2-year warranty • 14-day free returns'},
tb_shop:{ar:'خصم إضافي 5% عند الدفع أونلاين بكود MIRNOX5',en:'Extra 5% off online payment with code MIRNOX5'},
// hero
hero_eye:{ar:'✦ الإصدار الجديد 2026 وصل',en:'✦ The 2026 collection has arrived'},
hero_h1:{ar:'وقتك يستاهل <span>MIRNOX</span><br>فخامة تتلبس',en:'Time deserves <span>MIRNOX</span><br>Luxury you wear'},
hero_p:{ar:'ساعات أصلية بماكينات يابانية وسويسرية، زجاج سافير، وضمان حقيقي سنتين. اختار لونك، وادفع بالطريقة اللي تريحك، وتتبع شحنتك لحد باب البيت.',en:'Original watches with Japanese and Swiss movements, sapphire glass and a genuine 2-year warranty. Pick your color, pay your way, and track your order to your doorstep.'},
hero_shop:{ar:'تسوق الساعات ⌚',en:'Shop Watches ⌚'},
hero_track:{ar:'تتبع شحنتك 📦',en:'Track Order 📦'},
hero_s1:{ar:'💳 دفع آمن 100%',en:'💳 100% secure payment'},
hero_s2:{ar:'🚚 شحن لكل مصر',en:'🚚 Ships across Egypt'},
hero_s3:{ar:'🎁 تغليف هدايا مجاني',en:'🎁 Free gift wrapping'},
stat_l1:{ar:'عميل سعيد',en:'Happy customers'},
stat_l2:{ar:'متوسط التقييم',en:'Average rating'},
stat_l3:{ar:'ضمان حقيقي',en:'Genuine warranty'},
stat_v3:{ar:'سنتين',en:'2 years'},
// home sections
sec_best_k:{ar:'تسوق حسب ذوقك',en:'Shop your style'},
sec_best_h:{ar:'الأكثر مبيعاً هذا الأسبوع',en:"This week's best sellers"},
sec_best_p:{ar:'كل منتج ليه صفحة خاصة: سعر، تقييم، وصف، واختيار اللون',en:'Every product has its own page: price, rating, description and color choice'},
view_all:{ar:'عرض الكل ←',en:'View all →'},
f1t:{ar:'ضمان سنتين',en:'2-Year Warranty'},
f1d:{ar:'ضمان مكتوب + صيانة مجانية أول سنة في فروعنا.',en:'Written warranty + free first-year maintenance.'},
f2t:{ar:'بوابة دفع آمنة',en:'Secure Checkout'},
f2d:{ar:'فيزا، ماستركارد، فوري، انستاباي، وكاش عند الاستلام.',en:'Visa, Mastercard, Fawry, InstaPay and cash on delivery.'},
f3t:{ar:'تتبع الشحنات',en:'Order Tracking'},
f3d:{ar:'رقم تتبع فوري SMS وواتساب + صفحة تتبع لحظي.',en:'Instant tracking number via SMS & WhatsApp + live tracking page.'},
f4t:{ar:'إرجاع 14 يوم',en:'14-Day Returns'},
f4d:{ar:'لو معجبتكش لأي سبب، نرجعهالك مجاناً حسب سياسة التعامل.',en:'Changed your mind? Free returns under our policy.'},
home_track_h:{ar:'تتبع شحنتك في ثانية',en:'Track your order in seconds'},
home_track_p:{ar:'دخل رقم الأوردر اللي وصلك (مثال: MNX-48291) وهيظهرلك مكان شحنتك بالظبط.',en:'Enter your order number and see exactly where your shipment is.'},
ph_order:{ar:'MNX-.....',en:'MNX-.....'},
btn_track:{ar:'تتبع',en:'Track'},
// footer
ft_about:{ar:'براند مصري للساعات الفاخرة. هوية خضراء زمردية وذهبية تعكس الفخامة والثقة. جميع الساعات أصلية 100%.',en:'An Egyptian luxury watch brand. Emerald-green and gold identity reflecting elegance and trust. 100% original watches.'},
ft_shop:{ar:'تسوق',en:'Shop'},
ft_all:{ar:'كل الساعات',en:'All watches'},
ft_cart:{ar:'سلة المشتريات',en:'Shopping cart'},
ft_pay:{ar:'الدفع',en:'Checkout'},
ft_help:{ar:'خدمة العملاء',en:'Customer Care'},
ft_contact:{ar:'تواصل مع خدمة العملاء',en:'Contact customer service'},
ft_policy:{ar:'سياسة التعامل',en:'Store policies'},
ft_return:{ar:'الاستبدال والإرجاع',en:'Exchange & returns'},
ft_warranty:{ar:'الضمان',en:'Warranty'},
ft_touch:{ar:'تواصل',en:'Contact'},
ft_phone:{ar:'📞 01000000000',en:'📞 01000000000'},
ft_wa:{ar:'💬 واتساب',en:'💬 WhatsApp'},
ft_addr:{ar:'📍 القاهرة، مصر',en:'📍 Cairo, Egypt'},
ft_hours:{ar:'⏰ يومياً 11ص - 11م',en:'⏰ Daily 11AM - 11PM'},
ft_copy:{ar:'© 2026 MIRNOX — جميع الحقوق محفوظة | صنع بحب في مصر',en:'© 2026 MIRNOX — All rights reserved | Made with love in Egypt'},
ft_copy_s:{ar:'© 2026 MIRNOX',en:'© 2026 MIRNOX'},
ft_tag:{ar:'هوية خضراء × ذهبية. أصلي 100%.',en:'Green × gold identity. 100% original.'},
ft_orig:{ar:'أصلي 100% • ضمان سنتين.',en:'100% original • 2-year warranty.'},
ft_secure:{ar:'© 2026 MIRNOX — دفع آمن 100%',en:'© 2026 MIRNOX — 100% secure payment'},
// shop
shop_k:{ar:'المتجر',en:'Store'},
shop_h:{ar:'كل ساعات MIRNOX',en:'All MIRNOX watches'},
cat_all:{ar:'كل الفئات',en:'All categories'},
sort_new:{ar:'الأحدث',en:'Newest'},
sort_low:{ar:'السعر: من الأقل',en:'Price: low to high'},
sort_high:{ar:'السعر: من الأعلى',en:'Price: high to low'},
sort_rate:{ar:'الأعلى تقييماً',en:'Top rated'},
shop_empty:{ar:'لا توجد منتجات.',en:'No products found.'},
shop_count:{ar:'منتج متاح • شحن سريع لكل المحافظات',en:'products available • fast shipping across Egypt'},
// product card
card_details:{ar:'التفاصيل',en:'Details'},
card_add:{ar:'+ سلة',en:'+ Cart'},
card_reviews:{ar:'تقييم',en:'reviews'},
// product page
pd_back:{ar:'← رجوع للمتجر',en:'Back to shop →'},
pd_color:{ar:'🎨 اللون:',en:'🎨 Color:'},
pd_qty:{ar:'الكمية',en:'Quantity'},
pd_avail:{ar:'✔ متاح — شحن خلال 24 ساعة',en:'✔ In stock — ships within 24 hours'},
pd_add:{ar:'أضف للسلة 🛒',en:'Add to Cart 🛒'},
pd_buy:{ar:'اشتري دلوقتي ⚡',en:'Buy Now ⚡'},
pd_trust:{ar:'<span>🚚 شحن سريع</span><span>🛡️ ضمان سنتين</span><span>↩️ إرجاع 14 يوم</span><span>💳 دفع آمن</span>',en:'<span>🚚 Fast shipping</span><span>🛡️ 2-year warranty</span><span>↩️ 14-day returns</span><span>💳 Secure payment</span>'},
tab_desc:{ar:'الوصف',en:'Description'},
tab_specs:{ar:'المواصفات والتفاصيل',en:'Specs & Details'},
tab_reviews:{ar:'التقييمات',en:'Reviews'},
pd_box:{ar:'📦 <b>محتويات العلبة:</b> الساعة + علبة MIRNOX الخضراء الفاخرة + كارت ضمان مختوم + كتيب تعليمات + منديل تلميع هدية.',en:'📦 <b>In the box:</b> the watch + luxury green MIRNOX box + stamped warranty card + manual + free polishing cloth.'},
pd_rate_h:{ar:'قيّم المنتج',en:'Rate this product'},
pd_rate_name:{ar:'اسمك',en:'Your name'},
pd_rate_ph:{ar:'اكتب رأيك...',en:'Write your review...'},
pd_rate_btn:{ar:'إرسال التقييم',en:'Submit review'},
pd_rate_ok:{ar:'شكراً! تقييمك اتسجل وهيظهر بعد المراجعة',en:'Thanks! Your review was recorded and will appear after moderation'},
rel_k:{ar:'ممكن يعجبك',en:'Recommended'},
rel_h:{ar:'منتجات مشابهة',en:'You may also like'},
verified:{ar:'مشتري موثق',en:'Verified buyer'},
save:{ar:'وفّر',en:'Save'},
// reviews (static samples)
rv1_n:{ar:'أحمد م.',en:'Ahmed M.'},
rv1_c:{ar:'القاهرة',en:'Cairo'},
rv1_t:{ar:'الخامة تحفة والتغليف شيك جداً. اللون الأخضر على الطبيعة أحلى من الصور.',en:'Amazing quality and very elegant packaging. The green looks even better in person.'},
rv2_n:{ar:'سارة خ.',en:'Sara K.'},
rv2_c:{ar:'الإسكندرية',en:'Alexandria'},
rv2_t:{ar:'جبتها هدية لجوزي، والضمان والتعامل محترم. الشحن وصل في يومين.',en:'Bought it as a gift for my husband — respectful service and warranty. Shipping arrived in two days.'},
// cart
cart_k:{ar:'سلة المشتريات',en:'Shopping Cart'},
cart_h:{ar:'راجع طلبك قبل الدفع',en:'Review your order before checkout'},
cart_empty:{ar:'سلتك فاضية 😅',en:'Your cart is empty 😅'},
cart_shop:{ar:'تسوق دلوقتي',en:'Shop now'},
cart_sum:{ar:'ملخص الطلب',en:'Order Summary'},
cart_sub:{ar:'المجموع الفرعي',en:'Subtotal'},
cart_ship:{ar:'الشحن',en:'Shipping'},
cart_free:{ar:'مجاني 🎉',en:'Free 🎉'},
cart_disc:{ar:'خصم',en:'Discount'},
cart_total:{ar:'الإجمالي',en:'Total'},
cart_coupon_ph:{ar:'كود الخصم',en:'Discount code'},
cart_apply:{ar:'تطبيق',en:'Apply'},
cart_checkout:{ar:'إتمام الشراء ←',en:'Checkout →'},
cart_continue:{ar:'كمل تسوق',en:'Continue shopping'},
cart_color:{ar:'اللون:',en:'Color:'},
cart_remove:{ar:'🗑️ احذف',en:'🗑️ Remove'},
cart_added:{ar:'اتضافت للسلة ✔',en:'Added to cart ✔'},
cart_disc_ok:{ar:'تم تطبيق خصم 5% 🎉',en:'5% discount applied 🎉'},
cart_bad:{ar:'الكود غير صالح',en:'Invalid code'},
cart_empty_go:{ar:'سلتك فاضية. <a href="shop.html">تسوق</a>',en:'Your cart is empty. <a href="shop.html">Shop</a>'},
// checkout
co_k:{ar:'بوابة الدفع الآمنة 🔒',en:'Secure Checkout 🔒'},
co_h:{ar:'إتمام الطلب',en:'Complete Your Order'},
co_step1:{ar:'1️⃣ بيانات التوصيل',en:'1️⃣ Shipping Details'},
co_name:{ar:'الاسم بالكامل *',en:'Full name *'},
co_phone:{ar:'رقم الموبايل *',en:'Mobile number *'},
co_gov:{ar:'المحافظة *',en:'City / Governorate *'},
co_addr:{ar:'العنوان بالتفصيل *',en:'Detailed address *'},
co_notes:{ar:'ملاحظات (اختياري)',en:'Notes (optional)'},
co_step2:{ar:'2️⃣ طريقة الدفع',en:'2️⃣ Payment Method'},
pay_card:{ar:'💳 فيزا / ماستركارد',en:'💳 Visa / Mastercard'},
pay_fawry:{ar:'🏪 فوري',en:'🏪 Fawry'},
pay_insta:{ar:'⚡ انستاباي',en:'⚡ InstaPay'},
pay_cod:{ar:'💵 كاش عند الاستلام',en:'💵 Cash on delivery'},
pay_card_n:{ar:'رقم البطاقة 1234 5678 ...',en:'Card number 1234 5678 ...'},
pay_card_h:{ar:'اسم حامل البطاقة',en:'Cardholder name'},
pay_card_e:{ar:'MM/YY',en:'MM/YY'},
pay_card_c:{ar:'CVV',en:'CVV'},
pay_fawry_t:{ar:'سيصلك كود فوري على موبايلك تدفع بيه من أي ماكينة فوري أو فرع. صالح 48 ساعة.',en:'You will receive a Fawry code on your mobile to pay at any Fawry machine or branch. Valid 48 hours.'},
pay_insta_t:{ar:'حوّل على عنوان انستاباي: <b dir="ltr">MIRNOX@instapay</b> وارفع سكرين التحويل على واتساب.',en:'Transfer to InstaPay address: <b dir="ltr">MIRNOX@instapay</b> and send the screenshot on WhatsApp.'},
pay_cod_t:{ar:'ادفع كاش أو بالبطاقة لمندوب الشحن عند الاستلام + 20 ج رسوم تحصيل.',en:'Pay cash or by card to the courier on delivery + 20 EGP collection fee.'},
co_agree:{ar:'🔒 الدفع مشفر ومؤمن عبر Paymob / Fawry. لا نحتفظ ببيانات بطاقتك. بالضغط على تأكيد أنت توافق على <a href="policy.html" style="font-weight:900">سياسة التعامل</a>.',en:'🔒 Payments are encrypted and secured via Paymob / Fawry. We never store your card data. By confirming you agree to our <a href="policy.html" style="font-weight:900">store policies</a>.'},
co_order:{ar:'طلبك',en:'Your Order'},
co_confirm:{ar:'تأكيد الطلب ✅',en:'Place Order ✅'},
co_fill:{ar:'كمّل بيانات التوصيل الأول ⚠️',en:'Please complete shipping details first ⚠️'},
co_empty:{ar:'سلتك فاضية',en:'Your cart is empty'},
co_done_t:{ar:'طلبك اتأكد!',en:'Order confirmed!'},
co_done_for:{ar:'يا',en:''},
co_done_keep:{ar:'بعتنا التفاصيل SMS وواتساب. احتفظ بالرقم عشان التتبع.',en:'We sent the details via SMS & WhatsApp. Keep your number for tracking.'},
co_done_track:{ar:'تتبع شحنتك 📦',en:'Track Order 📦'},
co_order_no:{ar:'رقم الأوردر:',en:'Order No.:'},
co_paym:{ar:'الدفع:',en:'Payment:'},
m_card:{ar:'بطاقة بنكية',en:'Bank card'},
m_fawry:{ar:'فوري',en:'Fawry'},
m_insta:{ar:'انستاباي',en:'InstaPay'},
m_cod:{ar:'كاش عند الاستلام',en:'Cash on delivery'},
// track
tr_k:{ar:'تتبع الشحنات 📦',en:'Track Shipments 📦'},
tr_h:{ar:'فين الأوردر بتاعي؟',en:'Where is my order?'},
tr_ph:{ar:'دخل رقم الأوردر MNX-.....',en:'Enter order number MNX-.....'},
tr_hint:{ar:'اكتب الرقم اللي اتبعتلك في ايميل تأكيد الأوردر.',en:'Enter the number sent to you in the order confirmation email.'},
tr_ship_h:{ar:'الشحن والتوصيل',en:'Shipping & Delivery'},
tr_ship_p:{ar:'Bosta • Aramex • J&T — التوصيل خلال 2-4 أيام عمل. القاهرة والجيزة 1-2 يوم. الشحن مجاني فوق 5000 ج.',en:'Bosta • Aramex • J&T — delivery in 2-4 business days. Cairo & Giza 1-2 days. Free shipping over 5000 EGP.'},
tr_notfound:{ar:'❌ مفيش أوردر بالرقم ده. اتأكد من الرقم أو كلم <a href="contact.html" style="font-weight:900">خدمة العملاء</a>.',en:'❌ No order with this number. Check the number or contact <a href="contact.html" style="font-weight:900">customer service</a>.'},
tr_total:{ar:'الإجمالي',en:'Total'},
tr_problem:{ar:'عندك مشكلة؟ كلم خدمة العملاء',en:'Having an issue? Contact customer service'},
tr_s1:{ar:'تم استلام الطلب',en:'Order received'},
tr_s2:{ar:'التجهيز والتغليف',en:'Preparing & packing'},
tr_s3:{ar:'مع شركة الشحن',en:'With the courier'},
tr_s4:{ar:'خارج للتوصيل',en:'Out for delivery'},
tr_s5:{ar:'تم التوصيل ✅',en:'Delivered ✅'},
tr_done:{ar:'تم ✔',en:'Done ✔'},
tr_wait:{ar:'في الانتظار...',en:'Pending...'},
// policy
pol_k:{ar:'الشفافية أولاً',en:'Transparency first'},
pol_h:{ar:'سياسة التعامل في MIRNOX',en:'MIRNOX Store Policies'},
pol_pay_h:{ar:'💳 الدفع',en:'💳 Payment'},
pol_pay_p:{ar:'بنقبل: فيزا / ماستركارد عبر Paymob، فوري، انستاباي، وكاش عند الاستلام. كل المعاملات مشفرة SSL ولا نحتفظ ببيانات البطاقات. الدفع المسبق بياخد خصم 5% بكود MIRNOX5.',en:'We accept: Visa / Mastercard via Paymob, Fawry, InstaPay and cash on delivery. All transactions are SSL-encrypted and we never store card data. Prepaid orders get 5% off with code MIRNOX5.'},
pol_ret_h:{ar:'↩️ الاستبدال والإرجاع (14 يوم)',en:'↩️ Exchange & Returns (14 days)'},
pol_ret_1:{ar:'إرجاع مجاني خلال 14 يوم من الاستلام بحالتها الأصلية (اللزقات + العلبة + الضمان).',en:'Free returns within 14 days of delivery in original condition (stickers + box + warranty).'},
pol_ret_2:{ar:'المنتج المُستخدم أو بدون علبة لا يُقبل إرجاعه إلا لعيب صناعة.',en:'Used products or ones without the box are only returnable for manufacturing defects.'},
pol_ret_3:{ar:'الفلوس بترجع خلال 3-7 أيام عمل بنفس طريقة الدفع.',en:'Refunds are issued within 3-7 business days via the same payment method.'},
pol_ret_4:{ar:'المقاس أو اللون غلط؟ الاستبدال مجاني وشحن علينا أول مرة.',en:'Wrong size or color? First exchange is free with shipping on us.'},
pol_war_h:{ar:'🛡️ الضمان',en:'🛡️ Warranty'},
pol_war_p:{ar:'سنتان ضد عيوب الصناعة (الماكينة + البطارية أول سنة). لا يشمل: الكسر، دخول الماء فوق المعدل المكتوب، أو الفك خارج مراكزنا. صيانة مجانية أول سنة + تلميع مجاني مدى الحياة في فروعنا.',en:'Two years against manufacturing defects (movement + first-year battery). Excludes: breakage, water beyond the stated rating, or opening outside our centers. Free first-year maintenance + lifetime free polishing in our branches.'},
pol_ship_h:{ar:'🚚 الشحن والتوصيل',en:'🚚 Shipping & Delivery'},
pol_ship_p:{ar:'القاهرة والجيزة 1-2 يوم (60 ج)، باقي المحافظات 2-4 أيام (60-90 ج)، ومجاني فوق 5000 ج. المعاينة قبل الاستلام متاحة للكاش. أي تأخير فوق 5 أيام = قسيمة 200 ج.',en:'Cairo & Giza 1-2 days (60 EGP), other governorates 2-4 days (60-90 EGP), free over 5000 EGP. Inspection before receipt available for cash orders. Any delay over 5 days = 200 EGP voucher.'},
pol_gift_h:{ar:'🎁 الهدايا والأصالة',en:'🎁 Gifts & Authenticity'},
pol_gift_p:{ar:'كل الساعات أصلية 100% بكارت ضمان مختوم وسيريال نمبر. تغليف الهدايا مجاني — اكتب كارت الإهداء في ملاحظات الطلب.',en:'All watches are 100% original with stamped warranty card and serial number. Gift wrapping is free — write your gift message in the order notes.'},
// contact
ct_k:{ar:'نرد خلال دقائق ⏱️',en:'We reply in minutes ⏱️'},
ct_h:{ar:'تواصل مع خدمة العملاء',en:'Contact Customer Service'},
ct_form:{ar:'ابعت رسالتك',en:'Send your message'},
ct_name:{ar:'اسمك *',en:'Your name *'},
ct_phone:{ar:'موبايلك *',en:'Your mobile *'},
ct_s1:{ar:'استفسار عن منتج',en:'Product inquiry'},
ct_s2:{ar:'مشكلة في أوردر',en:'Order issue'},
ct_s3:{ar:'استبدال / إرجاع',en:'Exchange / return'},
ct_s4:{ar:'صيانة وضمان',en:'Maintenance & warranty'},
ct_s5:{ar:'شراكة / جملة',en:'Partnership / wholesale'},
ct_order:{ar:'رقم الأوردر (لو موجود)',en:'Order number (if any)'},
ct_msg:{ar:'اكتب رسالتك...',en:'Write your message...'},
ct_send:{ar:'إرسال الرسالة 📩',en:'Send Message 📩'},
ct_need_name:{ar:'اكتب اسمك الأول',en:'Please enter your name first'},
ct_sent:{ar:'اتبعتت بنجاح ✔',en:'Sent successfully ✔'},
ct_ok:{ar:'رسالتك وصلت! هنرد عليك خلال ساعة في مواعيد العمل.',en:'message received! We will reply within an hour during working hours.'},
ct_direct:{ar:'قنوات مباشرة',en:'Direct Channels'},
ct_hours:{ar:'📞 <b dir="ltr">0100 000 0000</b> (يومياً 11ص - 11م)',en:'📞 <b dir="ltr">0100 000 0000</b> (Daily 11AM - 11PM)'},
ct_wa:{ar:'💬 <a href="https://wa.me/201000000000" style="color:#e9cf95;font-weight:900">واتساب — رد فوري</a>',en:'💬 <a href="https://wa.me/201000000000" style="color:#e9cf95;font-weight:900">WhatsApp — instant reply</a>'},
ct_addr:{ar:'📍 القاهرة، مصر — متاح معاينة في الفرع',en:'📍 Cairo, Egypt — in-store viewing available'},
ct_faq:{ar:'أسئلة شائعة',en:'FAQ'},
ct_q1:{ar:'الساعات أصلية؟',en:'Are the watches original?'},
ct_a1:{ar:'أيوه 100% بكارت ضمان مختوم وسيريال.',en:'Yes, 100% — with stamped warranty card and serial number.'},
ct_q2:{ar:'في معاينة؟',en:'Can I inspect before paying?'},
ct_a2:{ar:'أيوه للكاش، ولو معجبتكش المندوب بيرجعها مجاناً.',en:'Yes for cash orders — if you don’t like it, the courier returns it free.'},
ct_q3:{ar:'الشحن بياخد قد إيه؟',en:'How long is shipping?'},
ct_a3:{ar:'1-2 يوم القاهرة، 2-4 باقي المحافظات.',en:'1-2 days in Cairo, 2-4 for other governorates.'},
};

// ---- product catalog translations (by product id) ----
const PRODUCT_EN = {
'olevs-2900-steel':{name:'OLEVS 2900 — Luxury Stainless Steel Men\'s Watch',desc:'Original OLEVS 2900 men\'s watch — a stainless-steel masterpiece with classic luxurious design. Precise quartz movement, date display and 3BAR water resistance for daily wear. Scratch-resistant hardened glass with a comfortable hidden clasp. Perfect for work, occasions and gifts. From MIRNOX with 2-year warranty and luxury gift box.'},
'olevs-luxury-quartz':{name:'OLEVS Luxury — Premium Quartz Men\'s Watch',desc:'A refined OLEVS luxury watch for men — precise high-accuracy quartz movement, stainless-steel body and 3BAR water resistance for everyday use. Elegant dial with date display and a comfortable metal strap with secure clasp. A must-have for every elegant man, with luxury MIRNOX gift wrapping and 2-year warranty.'},
'olevs-5885-shine':{name:'OLEVS 5885 — Shiny Men\'s Watch with Gift Box',desc:'The shiny OLEVS 5885 men\'s watch — an eye-catching polished finish with precise quartz movement and 3BAR water resistance. Comes in an elegant ready-to-gift box with comfortable stainless strap. Ideal for occasions, gifts and refined daily wear. 2-year MIRNOX warranty.'},
'olevs-9970-couple':{name:'OLEVS 9970 — Stainless Couple Watch Set',desc:'OLEVS 9970 couple set — stainless steel with elegant design for him and her. 3BAR water resistance, precise quartz movement and a lasting refined finish. From MIRNOX with 2-year warranty and luxury gift box.'},
'olevs-2926-gold':{name:'OLEVS 2926 — Gold Quartz Men\'s Watch',desc:'The golden OLEVS 2926 — classic luxury with precise quartz movement and 3BAR water resistance. Shiny gold body with comfortable stainless strap. A perfect choice for occasions and gifts. 2-year MIRNOX warranty.'},
'olevs-2709-moonphase':{name:'OLEVS 2709 — Skeleton Moonphase Chronograph',desc:'The OLEVS 2709 masterpiece — skeleton design with moonphase indicator and chronograph. Solid steel strap and modern diamond-cut mirror. For true luxury mechanical watch lovers. 2-year MIRNOX warranty.'},
'olevs-2950-chrono':{name:'OLEVS 2950 — Luminous Chronograph, Night Hands',desc:'OLEVS 2950 sports watch — practical chronograph with luminous night hands for clear reading in the dark. Bold masculine design with durable build for daily use. 2-year MIRNOX warranty.'},
'olevs-9988-sport':{name:'OLEVS 9988 — Stainless Sports Chronograph',desc:'OLEVS 9988 sports watch — an elegant original chronograph in stainless steel, water resistant with night illumination. Practical design for sport and daily use. 2-year MIRNOX warranty.'},
'olevs-couple-lovers':{name:'OLEVS Couple — His & Hers Chronograph Set',desc:'OLEVS lovers\' set — two original quartz watches in a matching modern design for men and women. Chronograph, water resistance and night illumination. The loveliest engagement gift with a MIRNOX gift box.'},
'olevs-5609-dual':{name:'OLEVS 5609 — Sports Watch, Dual Calendar',desc:'OLEVS 5609 sports watch — stainless steel with dual calendar (day + date), precise quartz movement, water resistance and night illumination. Practical and elegant all day long. 2-year MIRNOX warranty.'},
'olevs-6691-auto':{name:'OLEVS 6691 — Automatic Skeleton Moonphase',desc:'The ultimate OLEVS 6691 luxury — automatic mechanical watch with skeleton design and moonphase indicator. Multi-function with a luxurious finish worthy of true watch enthusiasts. 2-year MIRNOX warranty.'},
'olevs-7018-gold-auto':{name:'OLEVS 7018 — Full-Gold Luxury Automatic',desc:'The full-gold OLEVS 7018 — original brand with multi-function automatic mechanical movement. Full golden luxury for grand occasions. 2-year MIRNOX warranty.'},
'olevs-7028-tourbillon':{name:'OLEVS 7028 — Tourbillon Automatic, Luminous',desc:'The OLEVS 7028 tourbillon — automatic mechanical movement with multi-function dial, date, water resistance and night illumination. A bold design for those who stand out. 2-year MIRNOX warranty.'}
};
function pname(p){ return (LANG==='en'&&(PRODUCT_EN[p.id]&&PRODUCT_EN[p.id].name))?PRODUCT_EN[p.id].name:p.name; }
function pdesc(p){ return (LANG==='en'&&(PRODUCT_EN[p.id]&&PRODUCT_EN[p.id].desc))?PRODUCT_EN[p.id].desc:p.desc; }

const CAT_EN = {'كلاسيك':'Classic','رياضية':'Sport','جلد':'Leather','نسائية':'Women','أوتوماتيك':'Automatic','أطقم':'Sets'};
function catName(c){ return LANG==='en'?(CAT_EN[c]||c):c; }

const COLOR_EN = {
'أزرق × ذهبي':'Blue × Gold','أسود':'Black','أبيض × ذهبي':'White × Gold',
'أسود × فضي':'Black × Silver','أخضر × فضي':'Green × Silver','أحمر × فضي':'Red × Silver',
'أزرق — طقم زوجين':'Blue — Couple Set','أخضر × ذهبي':'Green × Gold','أزرق × فضي':'Blue × Silver',
'أسود — ذهبي كامل':'Black — Full Gold','فضي × أبيض — طقم':'Silver × White — Set',
'فضي سكيلتون':'Silver Skeleton','ذهبي كامل':'Full Gold'
};
function cname(n){ return LANG==='en'?(COLOR_EN[n]||n):n; }

const BADGE_EN = {
'جديد':'New','الأكثر طلباً':'Best Seller','هدية مثالية':'Perfect Gift','الأكثر مبيعاً':'Best Seller',
'إصدار محدود':'Limited Edition','للعشاق 💑':'For Couples 💑','الأعلى تقييماً':'Top Rated','فاخرة':'Luxury','VIP':'VIP'
};
function badgeTx(b){ return LANG==='en'?(BADGE_EN[b]||b):b; }

const SPEC_K_EN = {'الماركة':'Brand','الحركة':'Movement','الخامة':'Material','الزجاج':'Glass','المقاومة':'Water Resistance','الوظائف':'Functions','القفل':'Clasp','الضمان':'Warranty','الحزام':'Strap','القطر':'Diameter','التغليف':'Packaging','المحتويات':'Contents','المميزات':'Highlights','التصميم':'Design'};
function skey(k){ return LANG==='en'?(SPEC_K_EN[k]||k):k; }
const SPEC_V_EN = {
'كوارتز ياباني':'Japanese quartz','فولاذ مقاوم للصدأ 316L':'316L stainless steel','مقوى مقاوم للخدش':'Hardened scratch-resistant glass','3BAR (30 متر)':'3BAR (30 m)','ساعة + تاريخ':'Time + date','مخفي ضغط':'Hidden push clasp','سنتان من MIRNOX':'2 years by MIRNOX',
'كوارتز عالي الدقة':'High-accuracy quartz','فولاذ مقاوم للصدأ':'Stainless steel','معدني مقوى':'Reinforced mineral glass','3BAR':'3BAR','ستانلس ستيل':'Stainless steel',
'كوارتز':'Quartz','ستانلس':'Stainless steel','ستانلس لامع':'Polished stainless','ستانلس ذهبي':'Gold stainless','فولاذ صلب':'Solid steel',
'كوارتز متعدد الوظائف':'Multi-function quartz','كوارتز كرونوغراف':'Quartz chronograph','ميكانيكية أوتوماتيك':'Automatic mechanical','ميكانيكية أوتوماتيك توربيون':'Automatic tourbillon','متعددة الوظائف':'Multi-function',
'كرونوغراف + مراحل القمر + هيكل عظمي':'Chronograph + moonphase + skeleton','كرونوغراف + إضاءة ليلية + مقاومة للماء':'Chronograph + night light + water resistance','تاريخ + متعدد الوظائف':'Date + multi-function',
'عقارب ليلية مضيئة':'Luminous night hands','إضاءة ليلية':'Night illumination','مقاومة للماء':'Water resistant','مقاومة للماء + إضاءة':'Water resistant + luminous','مقاومة للماء + مضيئة':'Water resistant + luminous','تقويم مزدوج':'Dual calendar',
'هيكل عظمي + مراحل القمر':'Skeleton + moonphase','صندوق هدايا':'Gift box','ساعتين (رجالي + حريمي)':'Two watches (men + women)',
'OLEVS 2900 أصلية':'Original OLEVS 2900','OLEVS 5885 أصلية':'Original OLEVS 5885','OLEVS 9970 أصلية':'Original OLEVS 9970','OLEVS 2926 أصلية':'Original OLEVS 2926','OLEVS 2709 أصلية':'Original OLEVS 2709','OLEVS 2950 أصلية':'Original OLEVS 2950','OLEVS 9988 أصلية':'Original OLEVS 9988','OLEVS 5609 أصلية':'Original OLEVS 5609','OLEVS 6691 أصلية':'Original OLEVS 6691','OLEVS 7018 أصلية':'Original OLEVS 7018','OLEVS 7028 أصلية':'Original OLEVS 7028','OLEVS أصلية':'Original OLEVS'
};
function sval(v){ return LANG==='en'?(SPEC_V_EN[v]||v):v; }
function money(n){ return LANG==='ar' ? n.toLocaleString('ar-EG')+' ج.م' : n.toLocaleString('en-US')+' EGP'; }
function num(n){ return LANG==='ar' ? n.toLocaleString('ar-EG') : n.toLocaleString('en-US'); }
