/*
 * Category templates. One entry per business type.
 * Text can use {name} (business name) and {town} (town) placeholders.
 * Images are Unsplash photo IDs (free to use). Swap with real photos when the client signs up.
 */
(function () {
  const img = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

  const C = {};

  /* ───────────────────────── Beauty salon & bridal makeup ───────────────────────── */
  C.salon = {
    label: "Beauty Salon & Bridal Studio",
    short: "Salon",
    sampleName: "Aura Bridal Studio",
    theme: { accent: "#b0486b", accent2: "#f6e3ea", bg: "#fffaf7", surface: "#ffffff", ink: "#2a1b20", muted: "#7b6a70", line: "#efe2e6", heading: "Cormorant Garamond", body: "Jost", dark: false },
    hours: "Mon–Sat 9:30 AM – 7:30 PM · Sun 10 AM – 4 PM",
    nav: ["Services", "Gallery", "About", "Book"],
    hero: {
      eyebrow: "Bridal & beauty studio · {town}",
      title: "Bridal looks that turn heads in {town}",
      sub: "HD & airbrush bridal makeup, hair styling, skin care and nail art by trained artists who understand Kerala brides.",
      primary: "Book a bridal trial",
      secondary: "See our work",
      image: img("1487412947147-5cebf100ffc2")
    },
    highlights: [
      { icon: "sparkle", title: "Bridal specialists", text: "Hindu, Christian & Muslim bridal looks" },
      { icon: "shield", title: "Hygienic & private", text: "Sanitised kits, private bridal room" },
      { icon: "car", title: "On-location makeup", text: "We come to your home or venue" },
      { icon: "heart", title: "Skin-first products", text: "Premium, long-wear, sweat-proof" }
    ],
    services: {
      title: "Services & packages",
      sub: "Indicative starting prices – every bride gets a personal quote.",
      items: [
        { name: "HD Bridal Makeup", desc: "Makeup, hairdo, draping & accessories setting", price: "₹12,000" },
        { name: "Airbrush Bridal Makeup", desc: "Flawless, lightweight, lasts all day", price: "₹18,000" },
        { name: "Engagement / Reception Look", desc: "Soft glam with hairstyle", price: "₹6,500" },
        { name: "Party Makeup", desc: "For functions, photoshoots & events", price: "₹2,500" },
        { name: "Glow Facial", desc: "Deep cleanse, mask & massage", price: "₹1,500" },
        { name: "Hair Spa & Styling", desc: "Repair treatment with blow-dry", price: "₹1,200" },
        { name: "Manicure & Pedicure", desc: "Classic care with polish", price: "₹900" },
        { name: "Bridal Mehendi", desc: "Hands & feet, intricate designs", price: "₹2,500" }
      ]
    },
    gallery: { title: "Our recent work", images: [img("1600948836101-f9ffda59d250", 800), img("1516975080664-ed2fc6a32937", 800), img("1562322140-8baeececf3df", 800), img("1457972729786-0411a3b2b626", 800), img("1519415510236-718bdfcd89c8", 800), img("1595476108010-b4d1f102b1b1", 800)] },
    about: {
      title: "Every bride is different. Your look should be too.",
      text: "At {name}, we start with a relaxed consultation to understand your outfit, jewellery, skin and the feel you want. Then we create a look that photographs beautifully and still feels like you – from the muhurtham to the last reception photo.",
      points: ["Free consultation before booking", "Trial session available", "Team for bride + family packages"],
      image: img("1560066984-138dadb4c035")
    },
    testimonials: [
      { text: "My wedding makeup lasted from morning till the reception. Everyone asked who did it!", who: "Bride, Thalassery" },
      { text: "They came home early morning for my sister's wedding and were super patient with all of us.", who: "Customer, Kannur" },
      { text: "Loved the soft, natural look for my engagement. Booking on WhatsApp was so easy.", who: "Customer, Payyanur" }
    ],
    form: {
      title: "Book your date",
      sub: "Tell us about your event and we'll confirm availability on WhatsApp.",
      fields: [
        { label: "Your name", type: "text", required: true },
        { label: "Phone", type: "tel", required: true },
        { label: "Service", type: "select", options: ["Bridal makeup", "Engagement / reception", "Party makeup", "Skin / hair care", "Mehendi"] },
        { label: "Event date", type: "date" },
        { label: "Message", type: "textarea" }
      ],
      submit: "Send booking request",
      intro: "Hi {name}, I'd like to book an appointment."
    },
    faq: [
      { q: "How early should I book for my wedding?", a: "Popular wedding dates fill fast – we recommend booking 1–3 months ahead. Send us your date to check availability." },
      { q: "Do you do a trial before the wedding?", a: "Yes. A trial helps finalise your look and is adjusted against your package if you book with us." },
      { q: "Can you come to our home or venue?", a: "Yes, we travel across Kannur district. A small travel charge may apply for distant venues." },
      { q: "How do I confirm my booking?", a: "A small advance via UPI confirms your date. The balance is paid on the day." }
    ]
  };

  /* ───────────────────────── Boutique & custom tailoring ───────────────────────── */
  C.boutique = {
    label: "Designer Boutique & Tailoring",
    short: "Boutique",
    sampleName: "Meera Designer Boutique",
    theme: { accent: "#7a3b2e", accent2: "#f3e6dc", bg: "#fbf7f2", surface: "#ffffff", ink: "#2b211c", muted: "#7a6d64", line: "#eadfd4", heading: "Cormorant Garamond", body: "Jost", dark: false },
    hours: "Mon–Sat 10 AM – 7 PM · Sunday closed",
    nav: ["Collections", "Gallery", "About", "Order"],
    hero: {
      eyebrow: "Designer boutique · {town}",
      title: "Designer wear, stitched to fit you perfectly",
      sub: "Bridal blouses, lehengas, churidars and party wear – designed with you and finished with care. NRI customers welcome with online measurements.",
      primary: "Book a design consultation",
      secondary: "View collections",
      image: img("1617627143750-d86bc21e42bb")
    },
    highlights: [
      { icon: "scissors", title: "Perfect fitting", text: "Measured, stitched & finished in-house" },
      { icon: "sparkle", title: "Bridal specialists", text: "Hand embroidery, aari & zardosi work" },
      { icon: "globe", title: "Online measurements", text: "Order from the Gulf, UK or anywhere" },
      { icon: "clock", title: "On-time delivery", text: "Express stitching available" }
    ],
    services: {
      title: "Collections & stitching",
      sub: "Indicative starting prices – final price depends on fabric and work.",
      items: [
        { name: "Bridal Blouse Designing", desc: "Custom design with embroidery work", price: "₹2,500" },
        { name: "Custom Lehenga / Half Saree", desc: "Designed to match your theme", price: "₹8,000" },
        { name: "Churidar / Salwar Stitching", desc: "With lining & neck design", price: "₹650" },
        { name: "Party & Reception Gowns", desc: "Designed from your idea or photo", price: "₹4,500" },
        { name: "Kids' Frocks & Ethnic Wear", desc: "Matching family outfits too", price: "₹900" },
        { name: "Saree Pre-pleating & Draping", desc: "Ready-to-wear in minutes", price: "₹350" },
        { name: "Alterations", desc: "Quick fixes and resizing", price: "₹150" },
        { name: "Readymade Collection", desc: "Kurtis, sarees & dupattas in store", price: "₹799" }
      ]
    },
    gallery: { title: "From our studio", images: [img("1583391733956-3750e0ff4e8b", 800), img("1610030469983-98e550d6193c", 800), img("1445205170230-053b83016050", 800), img("1441986300917-64674bd600d8", 800), img("1490481651871-ab68de25d43d", 800), img("1617627143750-d86bc21e42bb", 800)] },
    about: {
      title: "Made for you, not off a rack",
      text: "{name} was started to give women in {town} a boutique experience close to home: a designer who listens, fabrics you love and fittings that are right the first time. From your first sketch to the final trial, we stay with you.",
      points: ["Design consultation with sketches", "Fitting trial before delivery", "Courier delivery across Kerala & abroad"],
      image: img("1610030469983-98e550d6193c")
    },
    testimonials: [
      { text: "I sent my measurements from Dubai and the blouse fit perfectly – no alteration needed!", who: "Customer, UAE" },
      { text: "They understood exactly what I wanted for my engagement dress and delivered before the date.", who: "Bride, Kannur" },
      { text: "Neat stitching, friendly staff and fair prices. My go-to boutique now.", who: "Customer, Taliparamba" }
    ],
    form: {
      title: "Start your order",
      sub: "Share your requirement – we'll reply on WhatsApp with ideas and a quote.",
      fields: [
        { label: "Your name", type: "text", required: true },
        { label: "Phone", type: "tel", required: true },
        { label: "Looking for", type: "select", options: ["Bridal blouse", "Lehenga / half saree", "Churidar / salwar", "Party gown", "Kids wear", "Alterations"] },
        { label: "Needed by", type: "date" },
        { label: "Design idea / message", type: "textarea" }
      ],
      submit: "Send enquiry",
      intro: "Hi {name}, I'd like to place a stitching order."
    },
    faq: [
      { q: "How long does stitching take?", a: "Regular orders take 5–7 days; bridal work 2–4 weeks depending on embroidery. Express options are available." },
      { q: "I live abroad. Can I still order?", a: "Yes! Send a well-fitting sample or follow our measurement guide on a video call. We courier worldwide." },
      { q: "Do I need to bring my own fabric?", a: "You can bring your fabric or choose from our in-store collection." },
      { q: "Is a trial fitting included?", a: "Yes, one trial and small adjustments are included." }
    ]
  };

  /* ───────────────────────── Bakery & cake shop ───────────────────────── */
  C.bakery = {
    label: "Bakery & Cake Shop",
    short: "Bakery",
    sampleName: "Sugar Bloom Cakes",
    theme: { accent: "#c2551f", accent2: "#fde8d7", bg: "#fffaf3", surface: "#ffffff", ink: "#2f1d12", muted: "#81695a", line: "#f1e2d3", heading: "Fraunces", body: "Nunito", dark: false },
    hours: "Open daily 8 AM – 10 PM",
    nav: ["Menu", "Gallery", "About", "Order"],
    hero: {
      eyebrow: "Cakes & bakes · {town}",
      title: "Fresh cakes, baked with love in {town}",
      sub: "Custom birthday, wedding and photo cakes, plus warm puffs, cutlets and Kerala snacks every day. Order online for pickup or delivery.",
      primary: "Order a cake",
      secondary: "View menu",
      image: img("1578985545062-69928b1d9587")
    },
    highlights: [
      { icon: "cake", title: "Custom designs", text: "Theme, photo & tiered cakes" },
      { icon: "truck", title: "Doorstep delivery", text: "Across {town} & nearby" },
      { icon: "globe", title: "Order from abroad", text: "Surprise family back home" },
      { icon: "leaf", title: "Baked fresh daily", text: "No day-old cakes, ever" }
    ],
    services: {
      title: "Our menu",
      sub: "Sample prices – ask us about eggless options and custom designs.",
      items: [
        { name: "Chocolate Truffle Cake", desc: "Rich ganache, our bestseller", price: "₹750/kg" },
        { name: "Red Velvet Cake", desc: "Cream cheese frosting", price: "₹850/kg" },
        { name: "Tender Coconut Cake", desc: "A Kerala favourite", price: "₹800/kg" },
        { name: "Butterscotch Cake", desc: "Caramel crunch & cream", price: "₹650/kg" },
        { name: "Photo Cake", desc: "Your photo, printed on cake", price: "₹950/kg" },
        { name: "Cupcakes (box of 6)", desc: "Mixed flavours, party ready", price: "₹360" },
        { name: "Puffs & Cutlets", desc: "Egg, chicken, veg – fresh hourly", price: "₹20" },
        { name: "Party Snack Box", desc: "For birthdays & office parties", price: "₹1,200" }
      ]
    },
    gallery: { title: "Fresh from our oven", images: [img("1535141192574-5d4897c12636", 800), img("1486427944299-d1955d23e34d", 800), img("1563729784474-d77dbb933a9e", 800), img("1464349095431-e9a21285b5f3", 800), img("1607478900766-efe13248b125", 800), img("1517433670267-08bbd4be890f", 800)] },
    about: {
      title: "A neighbourhood bakery with a big heart",
      text: "{name} bakes everything fresh each morning in {town}. From a simple birthday cake to a three-tier wedding showstopper, we design it with you, bake it fresh and deliver it on time – even when you're ordering from the other side of the world.",
      points: ["Same-day orders before 2 PM", "Eggless options available", "Pay by UPI, card or cash"],
      image: img("1509440159596-0249088772ff")
    },
    testimonials: [
      { text: "Ordered a birthday cake for my mother from Qatar. Delivered on time and she loved it!", who: "Customer, Qatar" },
      { text: "The tender coconut cake is the best in town. Always fresh.", who: "Customer, Thalassery" },
      { text: "They made a custom theme cake for my son in one day. Super friendly team.", who: "Customer, Kannur" }
    ],
    form: {
      title: "Order a cake",
      sub: "Send your order and we'll confirm the design and price on WhatsApp.",
      fields: [
        { label: "Your name", type: "text", required: true },
        { label: "Phone", type: "tel", required: true },
        { label: "Cake", type: "select", options: ["Chocolate truffle", "Red velvet", "Tender coconut", "Butterscotch", "Photo cake", "Custom design"] },
        { label: "Weight", type: "select", options: ["1 kg", "1.5 kg", "2 kg", "3 kg+"] },
        { label: "Delivery date", type: "date" },
        { label: "Message on cake / address", type: "textarea" }
      ],
      submit: "Send order on WhatsApp",
      intro: "Hi {name}, I'd like to order a cake."
    },
    faq: [
      { q: "How early should I order a custom cake?", a: "Simple cakes can be done the same day if ordered before 2 PM. Custom and tiered cakes need 1–3 days." },
      { q: "Do you deliver?", a: "Yes, we deliver across {town} and nearby areas. Delivery charges depend on distance." },
      { q: "Can I order from abroad?", a: "Of course. Order here, pay by UPI or card link, and we'll deliver to your family with a message." },
      { q: "Do you have eggless cakes?", a: "Yes, most of our cakes can be made eggless on request." }
    ]
  };

  /* ───────────────────────── Restaurant & catering ───────────────────────── */
  C.restaurant = {
    label: "Restaurant & Catering",
    short: "Restaurant",
    sampleName: "Malabar Kitchen",
    theme: { accent: "#9a3412", accent2: "#fbe7d3", bg: "#fdf8f1", surface: "#ffffff", ink: "#241812", muted: "#7c6a5c", line: "#eee0cf", heading: "Playfair Display", body: "Inter", dark: false },
    hours: "Open daily 11 AM – 11 PM",
    nav: ["Menu", "Catering", "About", "Book"],
    hero: {
      eyebrow: "Authentic Malabar cuisine · {town}",
      title: "Real Malabar flavours, from our kitchen to your table",
      sub: "Thalassery dum biryani, Malabar seafood and homestyle meals – dine in, take away or let us cater your wedding and family events.",
      primary: "Book a table",
      secondary: "See the menu",
      image: img("1631515243349-e0cb75fb8d3a")
    },
    highlights: [
      { icon: "flame", title: "Dum-cooked biryani", text: "Kaima rice, slow-cooked daily" },
      { icon: "users", title: "Event catering", text: "From 50 to 2,000 guests" },
      { icon: "truck", title: "Takeaway & delivery", text: "Order on WhatsApp in a tap" },
      { icon: "leaf", title: "Fresh, local catch", text: "Seafood bought every morning" }
    ],
    services: {
      title: "Popular dishes",
      sub: "A taste of our menu – sample prices.",
      items: [
        { name: "Thalassery Chicken Biryani", desc: "Kaima rice, dum-cooked, with raita & pickle", price: "₹180" },
        { name: "Mutton Biryani", desc: "Tender mutton, slow-cooked", price: "₹260" },
        { name: "Malabar Parotta & Beef Roast", desc: "Flaky parottas, spicy roast", price: "₹160" },
        { name: "Fish Curry Meals", desc: "Rice, fish curry, thoran & more", price: "₹150" },
        { name: "Kozhi Nirachathu", desc: "Stuffed whole chicken, Malabar special", price: "₹480" },
        { name: "Seafood Platter", desc: "Prawns, squid & fish fry", price: "₹550" },
        { name: "Pathiri with Chicken Curry", desc: "Soft rice pathiri, homestyle curry", price: "₹140" },
        { name: "Wedding Catering", desc: "Full menu, service & setup", price: "₹250/plate" }
      ]
    },
    extra: {
      type: "cards",
      title: "Catering packages",
      sub: "Weddings, nikah, house warmings, birthdays & office events.",
      items: [
        { title: "Family Function", text: "50–150 guests · biryani, starters & dessert", price: "From ₹220/plate" },
        { title: "Wedding Feast", text: "300+ guests · full Malabar spread with service staff", price: "From ₹280/plate" },
        { title: "Corporate & Office", text: "Packed meals and buffets delivered on time", price: "From ₹160/box" }
      ]
    },
    gallery: { title: "From our kitchen", images: [img("1585937421612-70a008356fbe", 800), img("1589302168068-964664d93dc0", 800), img("1555939594-58d7cb561ad1", 800), img("1606491956689-2ea866880c84", 800), img("1555244162-803834f70033", 800), img("1517248135467-4c7edcad34c4", 800)] },
    about: {
      title: "Cooking the Malabar way since day one",
      text: "At {name}, our recipes come from family kitchens across Malabar. We cook in small batches with fresh spices and the day's catch, so every plate tastes like a home feast in {town}.",
      points: ["Family-friendly dining & parking", "AC dining hall for groups", "Clean, hygienic open kitchen"],
      image: img("1414235077428-338989a2e8c0")
    },
    testimonials: [
      { text: "The biryani reminds me of my grandmother's. We come every weekend.", who: "Guest, Kannur" },
      { text: "They catered my daughter's wedding for 600 people. Food and service were excellent.", who: "Customer, Iritty" },
      { text: "Fresh seafood and generous portions. Must try the kozhi nirachathu!", who: "Guest, Bengaluru" }
    ],
    form: {
      title: "Book a table or catering",
      sub: "Reserve a table or tell us about your event – we'll reply on WhatsApp.",
      fields: [
        { label: "Your name", type: "text", required: true },
        { label: "Phone", type: "tel", required: true },
        { label: "Booking type", type: "select", options: ["Table reservation", "Takeaway order", "Event catering"] },
        { label: "Date", type: "date" },
        { label: "Number of guests", type: "number" },
        { label: "Message", type: "textarea" }
      ],
      submit: "Send on WhatsApp",
      intro: "Hi {name}, I'd like to make a booking."
    },
    faq: [
      { q: "Do you take table reservations?", a: "Yes, especially recommended for groups and weekends. Book here or call us." },
      { q: "What is the minimum for catering?", a: "We cater events from 50 guests. Menus can be customised to your budget." },
      { q: "Do you deliver?", a: "Yes, through WhatsApp orders nearby and on popular delivery apps." },
      { q: "Is parking available?", a: "Yes, there is parking space for customers." }
    ]
  };

  /* ───────────────────────── Dental / medical clinic ───────────────────────── */
  C.clinic = {
    label: "Dental & Medical Clinic",
    short: "Clinic",
    sampleName: "SmileCare Dental Clinic",
    theme: { accent: "#0e7490", accent2: "#e0f2f6", bg: "#f7fbfc", surface: "#ffffff", ink: "#11262d", muted: "#5f7680", line: "#dde9ed", heading: "Plus Jakarta Sans", body: "Plus Jakarta Sans", dark: false },
    hours: "Mon–Sat 9 AM – 8 PM · Sun by appointment",
    nav: ["Treatments", "Clinic", "Doctor", "Appointment"],
    hero: {
      eyebrow: "Family dental care · {town}",
      title: "Gentle, modern dental care for the whole family",
      sub: "Painless treatments, digital X-rays and clear pricing – so you can smile with confidence. Book your appointment online in seconds.",
      primary: "Book an appointment",
      secondary: "Our treatments",
      image: img("1629909613654-28e377c37b09")
    },
    highlights: [
      { icon: "shield", title: "Strict sterilisation", text: "Autoclave & single-use kits" },
      { icon: "heart", title: "Painless treatment", text: "Gentle care for kids & seniors" },
      { icon: "scan", title: "Digital X-ray", text: "Quick, low-radiation imaging" },
      { icon: "calendar", title: "Online booking", text: "Less waiting, more care" }
    ],
    services: {
      title: "Treatments",
      sub: "Indicative starting prices. Final cost is confirmed after consultation.",
      items: [
        { name: "Consultation & Check-up", desc: "Full oral examination", price: "₹300" },
        { name: "Scaling & Polishing", desc: "Remove stains & tartar", price: "₹1,200" },
        { name: "Tooth-coloured Fillings", desc: "Natural-looking composite", price: "₹1,000" },
        { name: "Root Canal Treatment", desc: "Single-sitting options available", price: "₹4,500" },
        { name: "Crowns & Bridges", desc: "Metal-free ceramic crowns", price: "₹5,000" },
        { name: "Braces & Clear Aligners", desc: "Straighten teeth discreetly", price: "Consult" },
        { name: "Teeth Whitening", desc: "Brighter smile in one visit", price: "₹6,000" },
        { name: "Dental Implants", desc: "Permanent tooth replacement", price: "Consult" }
      ]
    },
    gallery: { title: "Inside our clinic", images: [img("1598256989800-fe5f95da9787", 800), img("1588776814546-1ffcf47267a5", 800), img("1606811971618-4486d14f3f99", 800), img("1609840114035-3c981b782dfe", 800), img("1519494026892-80bbd2d6fd0d", 800), img("1631217868264-e5b90bb7e133", 800)] },
    about: {
      title: "Care you can trust, close to home",
      text: "{name} brings modern dentistry to {town} with a calm, clean clinic and a team that explains every step before we begin. No surprises, no pressure – just honest advice and gentle treatment.",
      points: ["Experienced BDS / MDS dentists", "Kids-friendly, anxious-patient friendly", "Transparent treatment plans"],
      image: img("1629909613654-28e377c37b09")
    },
    testimonials: [
      { text: "My root canal was completely painless. The doctor explained everything clearly.", who: "Patient, Payyanur" },
      { text: "Very clean clinic and no waiting since I booked online.", who: "Patient, Kannur" },
      { text: "My kids are no longer scared of the dentist. Thank you!", who: "Parent, Thalassery" }
    ],
    form: {
      title: "Book an appointment",
      sub: "Choose a preferred date and we'll confirm your slot on WhatsApp.",
      fields: [
        { label: "Patient name", type: "text", required: true },
        { label: "Phone", type: "tel", required: true },
        { label: "Concern", type: "select", options: ["Check-up / cleaning", "Tooth pain", "Root canal", "Braces / aligners", "Cosmetic / whitening", "Other"] },
        { label: "Preferred date", type: "date" },
        { label: "Preferred time", type: "select", options: ["Morning", "Afternoon", "Evening"] }
      ],
      submit: "Request appointment",
      intro: "Hi {name}, I'd like to book an appointment."
    },
    faq: [
      { q: "Do you handle dental emergencies?", a: "Yes. Call us directly for severe pain, swelling or broken teeth and we'll fit you in as soon as possible." },
      { q: "Is root canal treatment painful?", a: "With modern techniques and anaesthesia, most patients feel little to no pain." },
      { q: "Do you treat children?", a: "Yes, we see children from age 3 and keep visits friendly and calm." },
      { q: "What payment methods do you accept?", a: "Cash, UPI and cards. EMI options are available for larger treatments." }
    ]
  };

  /* ───────────────────────── Gym & fitness ───────────────────────── */
  C.gym = {
    label: "Gym & Fitness Centre",
    short: "Gym",
    sampleName: "Iron Pulse Fitness",
    theme: { accent: "#e11d48", accent2: "#2a1218", bg: "#0e0e10", surface: "#17171a", ink: "#f5f5f4", muted: "#a8a29e", line: "#2a2a2e", heading: "Oswald", body: "Inter", dark: true },
    hours: "Mon–Sat 5 AM – 10 PM · Sun 6 AM – 11 AM",
    nav: ["Programs", "Plans", "About", "Join"],
    hero: {
      eyebrow: "Gym & fitness · {town}",
      title: "Stronger every day, right here in {town}",
      sub: "Modern equipment, certified trainers and programs for weight loss, strength and fitness – with a dedicated ladies batch.",
      primary: "Book a free trial",
      secondary: "See plans",
      image: img("1534438327276-14e5300c3a48")
    },
    highlights: [
      { icon: "dumbbell", title: "Modern equipment", text: "Strength, cardio & functional zone" },
      { icon: "award", title: "Certified trainers", text: "Personal plans that work" },
      { icon: "users", title: "Ladies batch", text: "Separate timings & trainer" },
      { icon: "flame", title: "Diet guidance", text: "Simple Kerala-friendly meal plans" }
    ],
    services: {
      title: "Programs",
      sub: "Pick a goal – we'll build the plan.",
      items: [
        { name: "Weight Loss", desc: "Cardio + strength + diet support", price: "12 weeks" },
        { name: "Muscle & Strength", desc: "Progressive strength training", price: "16 weeks" },
        { name: "Ladies Fitness", desc: "Toning, mobility & confidence", price: "Ongoing" },
        { name: "Personal Training", desc: "1-on-1 coaching with your trainer", price: "₹4,000/mo" },
        { name: "Zumba & Cardio", desc: "High-energy group classes", price: "3x weekly" },
        { name: "Senior Fitness", desc: "Joint-friendly, guided workouts", price: "Ongoing" }
      ]
    },
    extra: {
      type: "plans",
      title: "Membership plans",
      sub: "Sample pricing – no hidden fees.",
      items: [
        { title: "Monthly", price: "₹1,200", text: "Full gym access · trainer guidance", tag: "" },
        { title: "Quarterly", price: "₹3,200", text: "Full access · diet chart · body assessment", tag: "Popular" },
        { title: "Annual", price: "₹10,000", text: "Best value · 2 PT sessions free · progress tracking", tag: "Best value" }
      ]
    },
    gallery: { title: "Inside the gym", images: [img("1540497077202-7c8a3999166f", 800), img("1517836357463-d25dfeac3438", 800), img("1583454110551-21f2fa2afe61", 800), img("1581009146145-b5ef050c2e1e", 800), img("1571019613454-1cb2f99b2d8b", 800), img("1574680096145-d05b474e2155", 800)] },
    about: {
      title: "No ego. Just progress.",
      text: "{name} is a friendly, no-judgement gym in {town}. Whether it's your first day or you're chasing a new PR, our trainers set goals with you, track your progress and keep you showing up.",
      points: ["Free body assessment on joining", "Clean changing rooms & lockers", "Morning, evening & ladies batches"],
      image: img("1605296867304-46d5465a13f1")
    },
    testimonials: [
      { text: "Lost 9 kg in 4 months with the trainer's plan. The diet tips were practical for home food.", who: "Member, Thalassery" },
      { text: "The ladies batch made me comfortable to start. Great trainers.", who: "Member, Kannur" },
      { text: "Clean gym, good equipment and never too crowded in the morning.", who: "Member, Mattannur" }
    ],
    form: {
      title: "Book your free trial",
      sub: "Pick a time and walk in for a free session with a trainer.",
      fields: [
        { label: "Your name", type: "text", required: true },
        { label: "Phone", type: "tel", required: true },
        { label: "Goal", type: "select", options: ["Weight loss", "Muscle gain", "General fitness", "Ladies fitness", "Personal training"] },
        { label: "Preferred batch", type: "select", options: ["Early morning", "Morning", "Evening", "Ladies batch"] },
        { label: "Trial date", type: "date" }
      ],
      submit: "Book free trial",
      intro: "Hi {name}, I'd like to book a free trial session."
    },
    faq: [
      { q: "Is the first session really free?", a: "Yes – come for a free trial workout and a quick body assessment, no commitment." },
      { q: "Do you have a separate ladies batch?", a: "Yes, with dedicated timings and a lady trainer." },
      { q: "I'm a complete beginner. Is that okay?", a: "Absolutely. Most of our members started as beginners – your trainer will guide you from day one." },
      { q: "Can I pay monthly?", a: "Yes, monthly, quarterly and annual plans are available. Pay by UPI or cash." }
    ]
  };

  /* ───────────────────────── Wedding photography ───────────────────────── */
  C.photography = {
    label: "Wedding Photography & Films",
    short: "Photography",
    sampleName: "Golden Hour Studios",
    theme: { accent: "#b08947", accent2: "#2b2418", bg: "#121110", surface: "#1b1a18", ink: "#f4efe6", muted: "#b3a993", line: "#2f2c27", heading: "Cormorant Garamond", body: "Inter", dark: true },
    hours: "Studio: Mon–Sat 10 AM – 7 PM · Shoots all week",
    nav: ["Packages", "Portfolio", "About", "Enquire"],
    hero: {
      eyebrow: "Wedding photography & films · {town}",
      title: "Your wedding story, told beautifully",
      sub: "Candid photography, cinematic films and albums you'll treasure – for weddings, engagements, save-the-dates and baby shoots across Kerala.",
      primary: "Check your date",
      secondary: "View portfolio",
      image: img("1583939003579-730e3918a45a")
    },
    highlights: [
      { icon: "camera", title: "Candid & traditional", text: "Every ritual, every smile" },
      { icon: "film", title: "Cinematic films", text: "Highlight reels & full films" },
      { icon: "drone", title: "Drone coverage", text: "Stunning aerial shots" },
      { icon: "book", title: "Premium albums", text: "Handcrafted, archival quality" }
    ],
    services: {
      title: "Packages",
      sub: "Sample packages – we tailor every quote to your events.",
      items: [
        { name: "Save the Date / Pre-wedding", desc: "Half-day outdoor shoot + reel", price: "₹25,000" },
        { name: "Engagement Coverage", desc: "Candid photos + highlight video", price: "₹30,000" },
        { name: "Wedding Photography", desc: "Candid + traditional, edited gallery", price: "₹45,000" },
        { name: "Photo + Cinematic Film", desc: "Two teams, highlight + full film", price: "₹85,000" },
        { name: "Premium Wedding Story", desc: "Drone, album, reels, 2 days", price: "₹1,50,000" },
        { name: "Baby & Family Shoots", desc: "Studio or home, edited photos", price: "₹8,000" }
      ]
    },
    gallery: { title: "Selected work", images: [img("1519741497674-611481863552", 800), img("1511285560929-80b456fea0bc", 800), img("1465495976277-4387d4b0b4c6", 800), img("1606216794074-735e91aa2c92", 800), img("1537633552985-df8429e8048b", 800), img("1520854221256-17451cc331bf", 800)] },
    about: {
      title: "We don't just take photos. We keep memories.",
      text: "{name} is a small, passionate team based in {town}. We blend into your day, capture the real emotions and deliver photos and films you'll want to watch again and again – on time, every time.",
      points: ["Online gallery within 3 weeks", "Same-day teaser reel", "Travel across Kerala & abroad"],
      image: img("1502635385003-ee1e6a1a742d")
    },
    testimonials: [
      { text: "They captured moments we didn't even notice on the day. The film made us cry happy tears.", who: "Couple, Kannur" },
      { text: "So calm and professional during the rush of the wedding. Album quality is superb.", who: "Bride, Thalassery" },
      { text: "The teaser reel was ready the same night – our families loved it!", who: "Groom, Dubai" }
    ],
    form: {
      title: "Check availability",
      sub: "Dates book out early – tell us yours and we'll reply on WhatsApp.",
      fields: [
        { label: "Your name", type: "text", required: true },
        { label: "Phone", type: "tel", required: true },
        { label: "Event", type: "select", options: ["Wedding", "Engagement", "Save the date", "Baby / family shoot", "Other event"] },
        { label: "Event date", type: "date" },
        { label: "Venue / location", type: "text" }
      ],
      submit: "Check my date",
      intro: "Hi {name}, I'd like to check availability for a shoot."
    },
    faq: [
      { q: "How far in advance should we book?", a: "Wedding season dates book 3–6 months ahead. Send your date to check availability." },
      { q: "When will we get our photos?", a: "A teaser on the day, the online gallery in about 3 weeks and the album after you select your photos." },
      { q: "Do you travel outside Kannur?", a: "Yes, we shoot across Kerala, India and abroad." },
      { q: "How do we confirm the booking?", a: "An advance payment confirms your date; the balance is paid before delivery." }
    ]
  };

  /* ───────────────────────── Furniture & interiors ───────────────────────── */
  C.furniture = {
    label: "Furniture & Interiors",
    short: "Furniture",
    sampleName: "Teakwood Living",
    theme: { accent: "#8a5a2b", accent2: "#f1e7da", bg: "#faf7f2", surface: "#ffffff", ink: "#26201a", muted: "#776b5e", line: "#e9e0d4", heading: "DM Serif Display", body: "DM Sans", dark: false },
    hours: "Mon–Sat 9:30 AM – 8 PM · Sun 10 AM – 6 PM",
    nav: ["Products", "Projects", "About", "Quote"],
    hero: {
      eyebrow: "Furniture & interiors · {town}",
      title: "Furniture & interiors crafted for Kerala homes",
      sub: "Solid wood furniture, modular kitchens and complete home interiors – designed for your space, built to last generations.",
      primary: "Get a free quote",
      secondary: "Browse products",
      image: img("1618221195710-dd6b41faaea6")
    },
    highlights: [
      { icon: "tree", title: "Seasoned solid wood", text: "Teak, rosewood & mahogany" },
      { icon: "ruler", title: "Made to measure", text: "Fits your rooms perfectly" },
      { icon: "truck", title: "Free delivery", text: "& installation in the district" },
      { icon: "shield", title: "Warranty", text: "On workmanship & hardware" }
    ],
    services: {
      title: "Products & services",
      sub: "Sample starting prices – visit our showroom or ask for a quote.",
      items: [
        { name: "Sofa Sets", desc: "Fabric, leatherette & wooden frames", price: "₹28,000" },
        { name: "Teak Wood Cots", desc: "Queen & king size, with storage", price: "₹32,000" },
        { name: "Dining Sets", desc: "4, 6 & 8 seaters", price: "₹24,000" },
        { name: "Wardrobes", desc: "Custom sizes, sliding or hinged", price: "₹1,400/sq ft" },
        { name: "Modular Kitchens", desc: "Moisture-resistant, soft-close fittings", price: "₹1.8 lakh" },
        { name: "Full Home Interiors", desc: "Design, 3D views & execution", price: "Free site visit" }
      ]
    },
    gallery: { title: "Recent projects", images: [img("1555041469-a586c61ea9bc", 800), img("1586023492125-27b2c045efd7", 800), img("1556228453-efd6c1ff04f6", 800), img("1616486338812-3dadae4b4ace", 800), img("1556911220-bff31c812dba", 800), img("1600210492486-724fe5c67fb0", 800)] },
    about: {
      title: "Built by craftsmen. Designed for living.",
      text: "{name} combines traditional Kerala carpentry with modern design. Visit our showroom in {town}, or invite us home – we'll measure, design in 3D and deliver furniture that suits your space and budget.",
      points: ["Free home measurement & 3D design", "Showroom with 200+ pieces", "Easy EMI options"],
      image: img("1493663284031-b7e3aefcae8e")
    },
    testimonials: [
      { text: "Our modular kitchen came out exactly like the 3D design. Finished on time too.", who: "Customer, Taliparamba" },
      { text: "Solid teak cot and dining set – excellent finish, fair price.", who: "Customer, Iritty" },
      { text: "They designed interiors for our whole house while we were in the Gulf. Smooth process.", who: "NRI customer, Oman" }
    ],
    form: {
      title: "Get a free quote",
      sub: "Tell us what you need – we'll call back or arrange a free site visit.",
      fields: [
        { label: "Your name", type: "text", required: true },
        { label: "Phone", type: "tel", required: true },
        { label: "Interested in", type: "select", options: ["Sofa / living room", "Bedroom / cots", "Dining", "Wardrobes", "Modular kitchen", "Full home interiors"] },
        { label: "Location", type: "text" },
        { label: "Requirement / budget", type: "textarea" }
      ],
      submit: "Request quote",
      intro: "Hi {name}, I'd like a quote."
    },
    faq: [
      { q: "Do you make custom sizes?", a: "Yes, almost everything can be made to your measurements and finish." },
      { q: "Is delivery and installation included?", a: "Free within the district for most orders; small charges apply further away." },
      { q: "How long does a modular kitchen take?", a: "Typically 3–5 weeks from design approval to installation." },
      { q: "Do you offer EMI?", a: "Yes, EMI options are available on purchases above a minimum amount." }
    ]
  };

  /* ───────────────────────── Homestay & resort ───────────────────────── */
  C.homestay = {
    label: "Homestay & Resort",
    short: "Homestay",
    sampleName: "Coconut Grove Homestay",
    theme: { accent: "#0f766e", accent2: "#dcf0ec", bg: "#f8faf6", surface: "#ffffff", ink: "#16241f", muted: "#64756f", line: "#dfe8e2", heading: "Fraunces", body: "Inter", dark: false },
    hours: "Check-in 12 PM · Check-out 11 AM · Reception 24×7",
    nav: ["Rooms", "Experiences", "About", "Book"],
    hero: {
      eyebrow: "Homestay in {town}, Kannur",
      title: "Slow mornings, Malabar food and the real Kerala",
      sub: "Cosy rooms, home-cooked meals and warm hosts – minutes from beaches, theyyam shrines and Kannur airport. Book direct for our best rate.",
      primary: "Check availability",
      secondary: "View rooms",
      image: img("1602216056096-3b40cc0c9944")
    },
    highlights: [
      { icon: "tag", title: "Best rate, direct", text: "Lower than booking apps" },
      { icon: "plane", title: "Airport pickup", text: "From Kannur International Airport" },
      { icon: "leaf", title: "Home-cooked meals", text: "Authentic Malabar breakfast" },
      { icon: "map", title: "Local experiences", text: "Theyyam, beaches & backwaters" }
    ],
    services: {
      title: "Rooms",
      sub: "Sample nightly rates incl. breakfast. Discounts for longer stays.",
      items: [
        { name: "Deluxe Double Room", desc: "AC, garden view, ensuite · 2 guests", price: "₹2,500/night" },
        { name: "Family Suite", desc: "Two rooms, sit-out · up to 4 guests", price: "₹3,800/night" },
        { name: "Garden Cottage", desc: "Private cottage with verandah", price: "₹3,200/night" },
        { name: "Whole Home Booking", desc: "Perfect for families & groups", price: "₹9,500/night" }
      ]
    },
    extra: {
      type: "cards",
      title: "Experiences around us",
      sub: "Our hosts will help you plan everything.",
      items: [
        { title: "Theyyam nights", text: "Witness Kannur's famous ritual art in season (Nov–May)", price: "Guided visits" },
        { title: "Beach drives", text: "Muzhappilangad drive-in beach & Payyambalam sunsets", price: "Car with driver" },
        { title: "Backwater kayaking", text: "Mangroves and quiet rivers at sunrise", price: "Half-day trips" }
      ]
    },
    gallery: { title: "Around the stay", images: [img("1582719478250-c89cae4dc85b", 800), img("1590490360182-c33d57733427", 800), img("1520250497591-112f2f40a3f4", 800), img("1593693397690-362cb9666fc2", 800), img("1507525428034-b723cf961d3e", 800), img("1566073771259-6a8506099945", 800)] },
    about: {
      title: "A home away from home in {town}",
      text: "{name} is a family-run stay where guests are treated like relatives. Wake up to birdsong, enjoy appam and stew on the verandah and let us show you the Kannur that most travellers miss.",
      points: ["Free Wi-Fi & parking", "Clean, sanitised rooms", "Hosts who speak English, Malayalam & Hindi"],
      image: img("1590490360182-c33d57733427")
    },
    testimonials: [
      { text: "Felt like staying with family. The breakfast alone is worth the trip!", who: "Guest, Bengaluru" },
      { text: "They arranged a theyyam visit at night – an unforgettable experience.", who: "Guest, Germany" },
      { text: "Spotless rooms, warm hosts and an easy airport pickup.", who: "Guest, Mumbai" }
    ],
    form: {
      title: "Check availability",
      sub: "Send your dates – we'll confirm rooms and the best direct rate on WhatsApp.",
      fields: [
        { label: "Your name", type: "text", required: true },
        { label: "Phone", type: "tel", required: true },
        { label: "Check-in", type: "date" },
        { label: "Check-out", type: "date" },
        { label: "Guests", type: "number" },
        { label: "Room", type: "select", options: ["Deluxe double", "Family suite", "Garden cottage", "Whole home"] }
      ],
      submit: "Check availability",
      intro: "Hi {name}, I'd like to check room availability."
    },
    faq: [
      { q: "Why book direct instead of booking apps?", a: "Booking direct gets you our best rate and lets you talk to us about pickups, meals and plans." },
      { q: "Do you offer airport pickup?", a: "Yes, from Kannur International Airport and railway stations on request." },
      { q: "Are meals included?", a: "Breakfast is included. Lunch and dinner with home-cooked Malabar dishes are available on request." },
      { q: "What is the cancellation policy?", a: "Free cancellation up to 7 days before check-in. Contact us for details." }
    ]
  };

  /* ───────────────────────── Taxi, cabs & tours ───────────────────────── */
  C.taxi = {
    label: "Taxi, Cabs & Tours",
    short: "Taxi",
    sampleName: "Malabar Cabs & Tours",
    theme: { accent: "#ca8a04", accent2: "#fdf3d7", bg: "#fbfaf6", surface: "#ffffff", ink: "#1c1a14", muted: "#6f6a5c", line: "#ece7d8", heading: "Sora", body: "Inter", dark: false },
    hours: "24 × 7 · Advance & instant bookings",
    nav: ["Fares", "Fleet", "About", "Book"],
    hero: {
      eyebrow: "Taxi & airport transfers · {town}",
      title: "Reliable cabs & airport transfers across Kannur",
      sub: "Clean cars, verified drivers and fixed fares – Kannur airport pickups, outstation trips and Wayanad & Coorg tours, 24×7.",
      primary: "Book a cab",
      secondary: "See fares",
      image: img("1449965408869-eaa3f722e40d")
    },
    highlights: [
      { icon: "plane", title: "Airport transfers", text: "Flight-tracked pickups" },
      { icon: "tag", title: "Fixed fares", text: "No surge, no surprises" },
      { icon: "shield", title: "Verified drivers", text: "Experienced & courteous" },
      { icon: "clock", title: "24×7 service", text: "Early flights? No problem" }
    ],
    services: {
      title: "Popular routes",
      sub: "Sample one-way sedan fares – SUVs & travellers on request.",
      items: [
        { name: "Kannur Airport ↔ Kannur Town", desc: "Approx. 30 km · 45 min", price: "₹1,100" },
        { name: "Kannur Airport ↔ Thalassery", desc: "Approx. 25 km · 40 min", price: "₹1,000" },
        { name: "Kannur Airport ↔ Payyanur", desc: "Approx. 60 km · 1 hr 20 min", price: "₹2,200" },
        { name: "Kannur → Calicut Airport", desc: "Approx. 120 km · 3 hr", price: "₹4,000" },
        { name: "Kannur → Mangaluru Airport", desc: "Approx. 150 km · 3.5 hr", price: "₹4,800" },
        { name: "Wayanad Day Tour", desc: "Full day with driver", price: "₹4,500" }
      ]
    },
    extra: {
      type: "plans",
      title: "Our fleet",
      sub: "AC vehicles, cleaned before every trip.",
      items: [
        { title: "Sedan", price: "4 seats", text: "Ideal for airport runs & city trips", tag: "" },
        { title: "SUV", price: "7 seats", text: "Families, luggage & hill roads", tag: "Popular" },
        { title: "Tempo Traveller", price: "12–17 seats", text: "Group tours, weddings & pilgrimages", tag: "" }
      ]
    },
    gallery: { title: "On the road", images: [img("1469854523086-cc02fe5d8800", 800), img("1436491865332-7a61a109cc05", 800), img("1544620347-c4fd4a3d5957", 800), img("1485291571150-772bcfc10da5", 800)] },
    about: {
      title: "Your trusted ride in Kannur",
      text: "{name} has been driving locals and travellers around {town} for years. We know every route, track your flight and wait for you – so your journey starts and ends stress-free.",
      points: ["Free waiting for delayed flights", "Child seats on request", "Pay by UPI, card or cash"],
      image: img("1494976388531-d1058494cdd8")
    },
    testimonials: [
      { text: "4 AM airport pickup, driver was there before me. Very professional.", who: "Traveller, Kannur" },
      { text: "Booked a Wayanad trip for our family – safe driving and fair price.", who: "Customer, Kochi" },
      { text: "Our go-to cab service every time we fly home from the Gulf.", who: "NRI family, Kuwait" }
    ],
    form: {
      title: "Book your ride",
      sub: "Send trip details and we'll confirm the fare and driver on WhatsApp.",
      fields: [
        { label: "Your name", type: "text", required: true },
        { label: "Phone", type: "tel", required: true },
        { label: "Pickup location", type: "text", required: true },
        { label: "Drop location", type: "text" },
        { label: "Date", type: "date" },
        { label: "Vehicle", type: "select", options: ["Sedan (4)", "SUV (7)", "Tempo Traveller (12–17)"] }
      ],
      submit: "Book on WhatsApp",
      intro: "Hi {name}, I'd like to book a cab."
    },
    faq: [
      { q: "What if my flight is delayed?", a: "We track your flight and adjust pickup time. Waiting for delays is free." },
      { q: "Are tolls and parking included?", a: "Fixed fares include fuel. Tolls and parking are charged at actuals." },
      { q: "Do you do outstation trips?", a: "Yes – Wayanad, Coorg, Mangaluru, Kozhikode and anywhere in South India." },
      { q: "How do I pay?", a: "UPI, card or cash at the end of the trip." }
    ]
  };

  /* ───────────────────────── Driving school ───────────────────────── */
  C.driving = {
    label: "Driving School",
    short: "Driving school",
    sampleName: "Safe Wheels Driving School",
    theme: { accent: "#1d4ed8", accent2: "#e3ebfd", bg: "#f7f9fd", surface: "#ffffff", ink: "#131c33", muted: "#5d6880", line: "#dfe5f1", heading: "Sora", body: "Inter", dark: false },
    hours: "Classes daily 6 AM – 7 PM",
    nav: ["Courses", "Gallery", "About", "Enrol"],
    hero: {
      eyebrow: "Driving school · {town}",
      title: "Learn to drive with confidence",
      sub: "Patient instructors, dual-control cars and full licence support – from your learner's test to the final road test. Lady instructors available.",
      primary: "Enrol now",
      secondary: "See courses",
      image: img("1485291571150-772bcfc10da5")
    },
    highlights: [
      { icon: "steering", title: "Dual-control cars", text: "Safe learning from day one" },
      { icon: "users", title: "Lady instructors", text: "Comfortable for women learners" },
      { icon: "file", title: "Licence assistance", text: "LL, test booking & paperwork" },
      { icon: "clock", title: "Flexible timings", text: "Morning & evening slots" }
    ],
    services: {
      title: "Courses",
      sub: "Sample fees – includes practice sessions and test preparation.",
      items: [
        { name: "Car (LMV) Full Course", desc: "Theory, road practice & H-test prep", price: "₹7,500" },
        { name: "Two-wheeler Course", desc: "Balance, traffic & test practice", price: "₹4,000" },
        { name: "Car + Two-wheeler Combo", desc: "Both licences, one course", price: "₹10,500" },
        { name: "Refresher Course", desc: "10 sessions for licence holders", price: "₹3,500" },
        { name: "Licence Assistance", desc: "LL application, slot booking & documents", price: "Included" },
        { name: "Heavy Vehicle Training", desc: "For transport licence", price: "Enquire" }
      ]
    },
    gallery: { title: "Training in action", images: [img("1485291571150-772bcfc10da5", 800), img("1469854523086-cc02fe5d8800", 800), img("1449965408869-eaa3f722e40d", 800)] },
    about: {
      title: "Hundreds of confident drivers on {town}'s roads",
      text: "At {name}, we teach more than how to pass the test. You'll learn road sense, safe habits and how to handle real Kerala traffic – step by step, with an instructor who never rushes you.",
      points: ["High first-attempt pass rate", "Pick-up from home for sessions", "Classes in Malayalam & English"],
      image: img("1485291571150-772bcfc10da5")
    },
    testimonials: [
      { text: "I was very nervous, but the instructor was so patient. Passed my test in the first attempt!", who: "Student, Kannur" },
      { text: "Lady instructor made it easy for me to learn. Highly recommend.", who: "Student, Payyanur" },
      { text: "They handled all the licence paperwork. Smooth from start to end.", who: "Student, Iritty" }
    ],
    form: {
      title: "Enrol today",
      sub: "Choose a course and preferred timing – we'll call you back.",
      fields: [
        { label: "Your name", type: "text", required: true },
        { label: "Phone", type: "tel", required: true },
        { label: "Course", type: "select", options: ["Car (LMV)", "Two-wheeler", "Car + two-wheeler", "Refresher", "Heavy vehicle"] },
        { label: "Preferred time", type: "select", options: ["Early morning", "Morning", "Evening"] },
        { label: "Need a lady instructor?", type: "select", options: ["No preference", "Yes"] }
      ],
      submit: "Send enrolment",
      intro: "Hi {name}, I'd like to join a driving course."
    },
    faq: [
      { q: "How long does the car course take?", a: "Usually 3–4 weeks with daily sessions, depending on your pace." },
      { q: "Do you help with the learner's licence?", a: "Yes, we guide you through the LL application, test preparation and booking." },
      { q: "Do you have lady instructors?", a: "Yes, lady instructors are available on request." },
      { q: "Can I pay in instalments?", a: "Yes, fees can be paid in two instalments." }
    ]
  };

  /* ───────────────────────── Coaching & tuition ───────────────────────── */
  C.coaching = {
    label: "Coaching & Tuition Centre",
    short: "Coaching",
    sampleName: "Bright Path Academy",
    theme: { accent: "#6d28d9", accent2: "#ede7fb", bg: "#faf9fe", surface: "#ffffff", ink: "#1d1530", muted: "#6a6080", line: "#e6e1f2", heading: "Plus Jakarta Sans", body: "Plus Jakarta Sans", dark: false },
    hours: "Mon–Sat 7 AM – 8 PM · Weekend batches",
    nav: ["Courses", "Gallery", "About", "Join"],
    hero: {
      eyebrow: "Coaching centre · {town}",
      title: "Crack your exam with focused coaching",
      sub: "Kerala PSC, entrance, spoken English, IELTS & OET – small batches, experienced faculty, regular mock tests and online classes for working students.",
      primary: "Book a free demo class",
      secondary: "View courses",
      image: img("1509062522246-3755977927d7")
    },
    highlights: [
      { icon: "users", title: "Small batches", text: "Personal attention for every student" },
      { icon: "award", title: "Expert faculty", text: "Years of teaching experience" },
      { icon: "file", title: "Weekly mock tests", text: "Exam-pattern practice & analysis" },
      { icon: "monitor", title: "Online classes", text: "Live + recorded sessions" }
    ],
    services: {
      title: "Courses",
      sub: "Sample fees – scholarships and instalments available.",
      items: [
        { name: "Kerala PSC – LDC / LGS", desc: "Complete syllabus + mock tests", price: "₹12,000" },
        { name: "PSC Degree Level Prelims", desc: "Concept classes & previous papers", price: "₹15,000" },
        { name: "Spoken English", desc: "2 months, confidence & fluency", price: "₹4,500" },
        { name: "IELTS Coaching", desc: "All 4 modules, practice tests", price: "₹9,000" },
        { name: "OET for Nurses", desc: "Healthcare-focused preparation", price: "₹14,000" },
        { name: "School Tuition (8–12)", desc: "Maths, science, English", price: "₹1,500/mo" }
      ]
    },
    gallery: { title: "Life at the academy", images: [img("1503676260728-1c00da094a0b", 800), img("1427504494785-3a9ca7044f45", 800), img("1509062522246-3755977927d7", 800)] },
    about: {
      title: "Guiding students in {town} towards their goals",
      text: "{name} focuses on clear concepts, regular practice and honest feedback. Our faculty track every student's progress, so you know exactly where you stand before exam day.",
      points: ["Study materials included", "Doubt-clearing sessions every week", "Morning, evening & weekend batches"],
      image: img("1503676260728-1c00da094a0b")
    },
    testimonials: [
      { text: "The mock tests were exactly like the real PSC exam. Got into the rank list!", who: "Student, Kannur" },
      { text: "I got the OET score I needed for the UK in my first attempt.", who: "Nurse, Thalassery" },
      { text: "My spoken English improved so much – I'm confident in interviews now.", who: "Student, Iritty" }
    ],
    form: {
      title: "Book a free demo class",
      sub: "Try a class before you join – we'll share the schedule on WhatsApp.",
      fields: [
        { label: "Student name", type: "text", required: true },
        { label: "Phone", type: "tel", required: true },
        { label: "Course", type: "select", options: ["Kerala PSC", "Degree level PSC", "Spoken English", "IELTS", "OET", "School tuition"] },
        { label: "Mode", type: "select", options: ["Classroom", "Online"] },
        { label: "Preferred batch", type: "select", options: ["Morning", "Evening", "Weekend"] }
      ],
      submit: "Book demo class",
      intro: "Hi {name}, I'd like to attend a free demo class."
    },
    faq: [
      { q: "Is the demo class really free?", a: "Yes, attend one free class to experience our teaching before joining." },
      { q: "Do you have online classes?", a: "Yes, live online classes with recordings for revision." },
      { q: "Are study materials included?", a: "Yes, printed and digital materials are included in the course fee." },
      { q: "Can I pay in instalments?", a: "Yes, most courses can be paid in 2–3 instalments." }
    ]
  };

  /* ───────────────────────── Mobile phone store & repair ───────────────────────── */
  C.mobile = {
    label: "Mobile Store & Repair",
    short: "Mobile shop",
    sampleName: "PhoneHub Mobiles",
    theme: { accent: "#2563eb", accent2: "#e4ecfd", bg: "#f7f9fc", surface: "#ffffff", ink: "#111a2e", muted: "#5d6880", line: "#dfe5f0", heading: "Sora", body: "Inter", dark: false },
    hours: "Open daily 9:30 AM – 9:30 PM",
    nav: ["Services", "Gallery", "About", "Contact"],
    hero: {
      eyebrow: "Mobiles, accessories & repairs · {town}",
      title: "New phones, genuine accessories & same-day repairs",
      sub: "Latest smartphones on easy EMI, original accessories and expert repairs for screens, batteries and charging issues – most fixed while you wait.",
      primary: "Book a repair",
      secondary: "Our services",
      image: img("1580910051074-3eb694886505")
    },
    highlights: [
      { icon: "clock", title: "Same-day repair", text: "Most repairs in under an hour" },
      { icon: "shield", title: "Repair warranty", text: "On parts and workmanship" },
      { icon: "tag", title: "Easy EMI", text: "On new phones & accessories" },
      { icon: "sparkle", title: "Genuine parts", text: "Quality-tested replacements" }
    ],
    services: {
      title: "Repairs & services",
      sub: "Sample starting prices – exact price depends on the model.",
      items: [
        { name: "Screen Replacement", desc: "Cracked or dead display, most models", price: "₹1,200" },
        { name: "Battery Replacement", desc: "Fast drain or swollen battery", price: "₹900" },
        { name: "Charging Port Repair", desc: "Loose or not charging", price: "₹500" },
        { name: "Water Damage Service", desc: "Cleaning and diagnosis", price: "₹600" },
        { name: "Software & Data Transfer", desc: "Updates, unlocking help, backups", price: "₹300" },
        { name: "New Smartphones", desc: "All popular brands on EMI", price: "₹7,999" },
        { name: "Accessories", desc: "Chargers, cases, earbuds, tempered glass", price: "₹199" },
        { name: "Exchange Offers", desc: "Trade in your old phone", price: "Best value" }
      ]
    },
    gallery: { title: "In store", images: [img("1585060544812-6b45742d762f", 800), img("1567581935884-3349723552ca", 800), img("1597740985671-2a8a3b80502e", 800), img("1592899677977-9c10ca588bbd", 800)] },
    about: {
      title: "Your trusted phone shop in {town}",
      text: "{name} helps {town} buy the right phone and keep it running. Honest advice, fair prices and skilled technicians who show you what's wrong before fixing it.",
      points: ["Free diagnosis", "Repairs done in front of you", "Pick-up & drop for bulk repairs"],
      image: img("1511707171634-5f897ff02aa9")
    },
    testimonials: [
      { text: "Screen replaced in 40 minutes and it works perfectly. Fair price too.", who: "Customer, Panoor" },
      { text: "Got a new phone on EMI with all the data transferred from my old one.", who: "Customer, Kannur" },
      { text: "They told me honestly it only needed a cleaning, not a new port. Trustworthy shop.", who: "Customer, Kuthuparamba" }
    ],
    form: {
      title: "Book a repair or ask for a price",
      sub: "Tell us your phone model and problem – we'll reply with a quote on WhatsApp.",
      fields: [
        { label: "Your name", type: "text", required: true },
        { label: "Phone", type: "tel", required: true },
        { label: "Phone model", type: "text", required: true },
        { label: "Need", type: "select", options: ["Screen replacement", "Battery", "Charging issue", "Water damage", "Software", "Buy a new phone", "Accessories"] },
        { label: "Describe the issue", type: "textarea" }
      ],
      submit: "Get a quote",
      intro: "Hi {name}, I need help with my phone."
    },
    faq: [
      { q: "How long does a screen replacement take?", a: "Usually 30–60 minutes for common models if the part is in stock." },
      { q: "Is there a warranty on repairs?", a: "Yes, repairs come with a warranty on parts and workmanship." },
      { q: "Do you offer EMI?", a: "Yes, EMI is available on new phones through popular finance partners." },
      { q: "Will I lose my data?", a: "Most repairs don't affect data, but we recommend a backup – we can help with that." }
    ]
  };

  /* ───────────────────────── Car & bike service centre ───────────────────────── */
  C.auto = {
    label: "Car & Bike Service Centre",
    short: "Auto service",
    sampleName: "Precision Auto Care",
    theme: { accent: "#ea580c", accent2: "#2a1a10", bg: "#0f1011", surface: "#18191b", ink: "#f4f4f5", muted: "#a1a1aa", line: "#2a2b2e", heading: "Oswald", body: "Inter", dark: true },
    hours: "Mon–Sat 8:30 AM – 7 PM · Sun emergency only",
    nav: ["Services", "Gallery", "About", "Book"],
    hero: {
      eyebrow: "Multi-brand car & bike service · {town}",
      title: "Honest service for your car & bike in {town}",
      sub: "Periodic service, engine work, AC repair, denting & painting and detailing for all brands – with transparent estimates and free pick-up & drop.",
      primary: "Book a service",
      secondary: "Our services",
      image: img("1504222490345-c075b6008014")
    },
    highlights: [
      { icon: "car", title: "All brands", text: "Cars & two-wheelers" },
      { icon: "truck", title: "Free pick-up & drop", text: "Within {town} limits" },
      { icon: "file", title: "Upfront estimates", text: "No surprise bills" },
      { icon: "shield", title: "Service warranty", text: "On parts & labour" }
    ],
    services: {
      title: "Services",
      sub: "Sample starting prices – final estimate after inspection.",
      items: [
        { name: "Periodic Car Service", desc: "Oil, filters, 40-point check", price: "₹2,999" },
        { name: "Bike General Service", desc: "Oil change, tuning, wash", price: "₹799" },
        { name: "AC Service & Repair", desc: "Gas top-up, cooling check", price: "₹1,499" },
        { name: "Denting & Painting", desc: "Per panel, colour matched", price: "₹2,500" },
        { name: "Wheel Alignment & Balancing", desc: "Smoother, safer drive", price: "₹600" },
        { name: "Car Wash & Detailing", desc: "Foam wash, interior cleaning, polish", price: "₹499" },
        { name: "Battery & Tyres", desc: "Replacement with warranty", price: "Best price" },
        { name: "Breakdown Assistance", desc: "Towing & on-spot help", price: "Call us" }
      ]
    },
    gallery: { title: "At the workshop", images: [img("1625047509248-ec889cbff17f", 800), img("1487754180451-c456f719a1fc", 800), img("1619642751034-765dfdf7c58e", 800), img("1607860108855-64acf2078ed9", 800), img("1486262715619-67b85e0b08d3", 800), img("1530046339160-ce3e530c7d2f", 800)] },
    about: {
      title: "A workshop you can trust",
      text: "{name} is run by experienced mechanics in {town} who explain the problem, share the estimate and only do the work you approve. Your vehicle gets the care we'd give our own.",
      points: ["Genuine & OEM-quality parts", "Photo/video updates on WhatsApp", "Old parts returned to you"],
      image: img("1625047509248-ec889cbff17f")
    },
    testimonials: [
      { text: "They picked up my car, sent photos of the issue and delivered it the same evening.", who: "Customer, Thalassery" },
      { text: "Much cheaper than the showroom service and the car runs smoother.", who: "Customer, Kannur" },
      { text: "Quick bike service and honest advice. Recommended.", who: "Customer, Mattannur" }
    ],
    form: {
      title: "Book a service",
      sub: "Share your vehicle details and we'll confirm a slot on WhatsApp.",
      fields: [
        { label: "Your name", type: "text", required: true },
        { label: "Phone", type: "tel", required: true },
        { label: "Vehicle model", type: "text", required: true },
        { label: "Service", type: "select", options: ["Periodic service", "Bike service", "AC repair", "Denting & painting", "Wash & detailing", "Breakdown / other"] },
        { label: "Preferred date", type: "date" },
        { label: "Need pick-up?", type: "select", options: ["Yes, please pick up", "No, I'll drop it"] }
      ],
      submit: "Book service",
      intro: "Hi {name}, I'd like to book a vehicle service."
    },
    faq: [
      { q: "Do you service all brands?", a: "Yes, we service all major car and two-wheeler brands." },
      { q: "Will my warranty be affected?", a: "We use quality parts and follow manufacturer service schedules. Ask us about your specific warranty." },
      { q: "Do you offer pick-up and drop?", a: "Yes, free within town limits for periodic services." },
      { q: "How do I pay?", a: "UPI, card or cash after you inspect the work." }
    ]
  };

  const NAV_CTA = { mobile: "Get a quote", auto: "Book service", salon: "Book now", boutique: "Order now", bakery: "Order a cake", restaurant: "Book a table", clinic: "Appointment", gym: "Free trial", photography: "Check date", furniture: "Free quote", homestay: "Book direct", taxi: "Book a cab", driving: "Enrol now", coaching: "Free demo" };
  Object.keys(NAV_CTA).forEach((k) => { if (C[k]) C[k].navCta = NAV_CTA[k]; });

  window.CATEGORIES = C;

  /* Keyword map: used by the link builder and lead list to pick a template automatically */
  window.CATEGORY_KEYWORDS = {
    salon: ["salon", "parlour", "parlor", "beauty", "makeup", "make up", "mehendi", "mehndi", "henna", "spa", "grooming", "unisex"],
    boutique: ["boutique", "tailor", "stitch", "designer", "fashion", "textile", "saree", "sari", "silks"],
    bakery: ["bake", "bakery", "cake", "cafe", "café", "falooda", "dessert", "sweets", "halwa", "juice", "ice cream", "coffee"],
    restaurant: ["restaurant", "hotel", "biryani", "biriyani", "mandhi", "catering", "caters", "kitchen", "food", "meals"],
    clinic: ["dental", "dent", "clinic", "physio", "hospital", "skin", "hair", "homoeo", "homeo", "ayur", "lab", "diagnostic", "optical", "eye", "vet", "pet"],
    gym: ["gym", "fitness", "fit", "crossfit", "zumba", "yoga"],
    photography: ["photo", "studio", "wedding", "film", "frames", "click", "events", "event"],
    furniture: ["furniture", "interior", "kitchen", "decor", "tiles", "ceramic", "sanitary", "builders", "construction", "wood"],
    mobile: ["mobile", "mobiles", "phone", "5g", "electronics", "gadget", "smartphone"],
    auto: ["workshop", "garage", "auto", "automobile", "car wash", "car care", "multi brand car", "bike", "riders", "motors", "tyre", "service centre", "service center"],
    homestay: ["homestay", "home stay", "resort", "villa", "cottage", "holiday", "stay", "lodge", "inn", "heritage", "mana"],
    taxi: ["taxi", "cab", "cabs", "travel", "tour", "tours", "rent", "car rental", "holidays", "transport"],
    driving: ["driving", "motor training", "licence", "license"],
    coaching: ["academy", "coaching", "tuition", "psc", "institute", "training", "classes", "ielts", "oet", "computer", "dance", "music", "school of"]
  };
})();
