// ============================================================
// YOUR PORTFOLIO DATA — Edit this file to update everything
// ============================================================

export const portfolio = {

  personal: {
    name: 'Shah Rajan',
    title: 'React Native Engineer',
    tagline: 'Mobile apps that work anywhere.',
    description: "4 years building offline-first React Native apps for enterprise clients across India and the MENA region. I architect, I ship, I maintain — then I improve what nobody asked me to.",
    available: true,
    location: 'Ahmedabad, Gujarat, India',
    email: 'shahrajansuresh@gmail.com',
    phone: '+91 8735059045',

    // 📸 Add your photo: put the image file inside /public/ folder and update the name below
    photo: '/photo.jpeg',         // → place your photo at: public/photo.jpg

    // 📄 Add your resume: put the PDF inside /public/ folder
    resumeUrl: '/resume.pdf',    // → place your resume at: public/resume.pdf

    // 🔗 Update your social links
    linkedinUrl: 'https://www.linkedin.com/in/rajan-shah-suresh',
    githubUrl:   'https://github.com/shahrajansuresh',      // 🔗 Update if different
    playStoreUrl: 'https://play.google.com/store/apps/developer?id=YOUR+NAME', // 🔗 Update
  },

  stats: [
    { value: '4+',    label: 'Years Exp'       },
    { value: '5+',    label: 'Apps Shipped'    },
    { value: '1K+',   label: 'SKUs / Order'    },
    { value: '6',     label: 'Roles, One App'  },
  ],

  skills: [
    {
      category: 'Languages',
      tags: [
        { label: 'JavaScript ES6+', primary: true },
        { label: 'TypeScript',      primary: true },
        { label: 'HTML5' },
        { label: 'CSS3'  },
      ],
    },
    {
      category: 'React Native Ecosystem',
      tags: [
        { label: 'React Native 0.83',        primary: true },
        { label: 'React Navigation',         primary: true },
        { label: 'React Native Reanimated',  primary: true },
        { label: 'Gesture Handler' },
        { label: 'Flash List'      },
        { label: 'Vision Camera'   },
        { label: 'Lottie'          },
        { label: 'Bottom Sheet'    },
        { label: 'Linear Gradient' },
        { label: 'React.js'        },
        { label: 'Vue.js'          },
      ],
    },
    {
      category: 'State, Storage & Data',
      tags: [
        { label: 'Redux Toolkit',  primary: true },
        { label: 'Realm DB',       primary: true },
        { label: 'MMKV',           primary: true },
        { label: 'Redux Persist' },
        { label: 'AsyncStorage'  },
        { label: 'Axios'         },
        { label: 'REST API'      },
        { label: 'SOAP API'      },
      ],
    },
    {
      category: 'Firebase & Monitoring',
      tags: [
        { label: 'Firebase Firestore',   primary: true },
        { label: 'Firebase Messaging',   primary: true },
        { label: 'Firebase Crashlytics' },
        { label: 'Firebase Analytics'   },
        { label: 'Sentry'               },
        { label: 'Notifee'              },
      ],
    },
    {
      category: 'Architecture',
      tags: [
        { label: 'Offline-First',       primary: true },
        { label: 'Custom Sync Engines', primary: true },
        { label: 'Legacy Modernization' },
        { label: 'Zero-Downtime Migrations' },
        { label: 'Multi-environment builds' },
      ],
    },
    {
      category: 'Dev Tools & Platforms',
      tags: [
        { label: 'Xcode',          primary: true },
        { label: 'Android Studio', primary: true },
        { label: 'Git / TFS'    },
        { label: 'ESLint'       },
        { label: 'Prettier'     },
        { label: 'Patch Package'},
        { label: 'i18next'      },
        { label: 'date-fns'     },
      ],
    },
  ],

  projects: [
    {
      id: 'hawak',
      name: 'Hawak',
      eyebrow: 'Enterprise · B2B Field Sales · MENA',
      stack: 'React Native · iOS & Android · Arabic / English · Multi-Tenant',
      impactLabel: 'Instant UX · Any catalog size · Zero loaders',
      description: 'A comprehensive B2B field sales platform built for distribution businesses across the MENA region. Sales reps, supervisors, and customers all operate from one unified app — in the field, in the warehouse, or without any internet connection. It replaces paper order forms, manual cash reconciliation, and disconnected spreadsheets with a single digital operation.',
      challenge: "A distribution enterprise had field reps working in areas with no internet coverage, logging orders on paper, tracking payments manually, and giving supervisors zero visibility into daily team activity. Every hour offline was a potential lost sale or reconciliation error.",
      built: "Delivered an end-to-end field sales digitization platform built to stay fast at any scale. Today the catalog holds 10,000+ products, 40,000+ images, and 1,000+ active deals — the app still launches in under 5 seconds. That number won't change at 100,000 products or 500,000 images either, because the performance is guaranteed by design, not by data size. Once open, users never see a loader: the entire catalog, cart, payments, and order history are instantly available. Sales reps browse, scan barcodes, and place orders fully offline. Supervisors get GPS-based live visibility of their team. Payments are logged digitally with receipts. A built-in loyalty rewards program incentivises repeat purchases and faster payments. Full bilingual Arabic/English support with RTL layout throughout.",
      metrics: [
        { value: '10K+', label: 'Products today'     },
        { value: '40K+', label: 'Images today'       },
        { value: '<5s',  label: 'Launch — always'    },
        { value: 'Zero', label: 'Loaders — always'   },
      ],
      features: [
        'Launch time and zero-loader UX are guaranteed by design — holds at 100K products or 500K images',
        'Works fully offline — every feature available with zero internet',
        'GPS geofencing auto-tracks field rep visits and shifts in real time',
        'Integrated payments: cash, terminal, and bank transfer with digital receipts',
        'Customer loyalty rewards that drive repeat purchases and faster payments',
        'Multi-tenant — one platform serving multiple enterprise businesses independently',
      ],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hawak&pcampaignid=web_share',
      color: '#60a5fa',
    },
    {
      id: 'bookonbluestar',
      name: 'BookOnBluestar',
      eyebrow: 'Travel · B2C · Multi-transport',
      stack: 'React Native · Payment Gateways · Multiple SDKs',
      impactLabel: 'Flights · Trains · Buses · Multi-payment',
      description: 'End-to-end travel booking app built from zero — intuitive UX, three transport modes, and reliable payment integration across multiple providers.',
      challenge: "Build a full travel booking platform from zero, integrating multiple payment providers across flights, trains, and buses on a tight timeline.",
      built: "Designed and delivered the complete mobile app with booking flows, multiple payment SDK integrations, and a white-label architecture reused across the Common Travel platform.",
      metrics: [
        { value: '3',     label: 'Transport modes' },
        { value: 'Multi', label: 'Payment SDKs'    },
        { value: '1',     label: 'Engineer, full ship' },
      ],
      features: [
        'Flight, train & bus booking in a single app',
        'Multiple payment SDK integrations',
        'White-label architecture reused across brands',
        'Delivered concept-to-Play Store as junior engineer',
      ],
      playStoreUrl: '#', // 🔗 Update with real Play Store link
      color: '#fbbf24',
    },
  ],

  experience: [
    {
      company: 'Openxcell Technolabs',
      role: 'Mobile Team Head · Dedicated Engineer',
      location: 'Ahmedabad, India',
      period: 'Jan 2024 – Present',
      highlights: [
        'Sole engineer owning a live enterprise B2B field sales platform across the MENA region — full product ownership from roadmap to release.',
        'Designed and shipped a complete offline-first field sales experience: product catalog, cart, payments, order tracking, GPS shift management, and customer loyalty — all working with zero internet.',
        'Built geofence-based auto clock-in/clock-out so supervisors get real-time visibility of every field rep visit without manual check-ins.',
        'Delivered a bilingual (Arabic/English) platform with full RTL layout support and multi-tenant architecture serving independent enterprise clients.',
        'Rebuilt bulk order flow to handle 1,000+ SKU orders per customer under 10 minutes. Executed architecture upgrades on a live production app — zero downtime.',
      ],
    },
    {
      company: 'Malay Infotech Pvt. Ltd.',
      role: 'Junior Software Engineer',
      location: 'Ahmedabad, India',
      period: 'Apr 2022 – Jan 2024',
      highlights: [
        'Led all frontend development across React and React Native — three projects shipped to production.',
        'Built "Common Travel App" — a white-label platform for rapid multi-brand travel app deployment.',
        'Designed and launched BookOnBluestar\'s original mobile version with multiple payment SDK integrations.',
      ],
    },
  ],

  approach: [
    { icon: '🎯', title: 'Business Outcomes, Not Just Tickets',   body: "When a client asks for a feature, I ask: what business outcome does this serve? I build for the outcome — not just the spec. That's how a 10-minute order flow saved field reps hours every day." },
    { icon: '🔭', title: 'I Always Deliver Beyond',              body: "Proactive risk flags, architectural improvements, ideas the client hadn't considered. Every engagement ends with clients getting more than they paid for." },
    { icon: '💡', title: 'I Communicate Like a Partner',         body: "No radio silence. Regular updates, honest blockers, early warnings. You shouldn't have to chase your developer." },
    { icon: '⚙️', title: 'I Own the Product, Not Just the Code', body: "Owned a live enterprise product end-to-end for 2+ years — roadmap, architecture, zero-downtime migrations. I think like a product owner." },
  ],

  education: {
    degree: 'B.Tech in Computer Science',
    university: 'Parul University',
    year: '2022',
    gpa: '8.18 CGPA',
  },
}

export type Portfolio = typeof portfolio
