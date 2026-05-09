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
    { value: '4+',    label: 'Years Exp'      },
    { value: '5+',    label: 'Apps Shipped'   },
    { value: '1K+',   label: 'SKUs / Order'   },
    { value: '100%',  label: 'Data Integrity' },
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
      eyebrow: 'Enterprise · B2B · MENA',
      stack: 'React Native · Custom Sync Engine · Redux · Realm DB',
      impactLabel: '1,000+ SKUs per order · < 10 min cycle',
      description: 'A B2B sales automation app for field reps visiting retail outlets and malls. Rebuilt from the inside out to work flawlessly with zero internet connectivity.',
      challenge: "Realm Atlas Device Sync was deprecated overnight. A 5-year-old live enterprise codebase, MENA field reps depending on it daily, zero downtime allowed.",
      built: "Architected a custom offline-first sync engine from scratch. Rebuilt the bulk order flow for 1,000+ SKUs per session. Executed React Native architecture upgrades on a live production app.",
      metrics: [
        { value: '1,000+', label: 'SKUs per order'   },
        { value: '< 10m',  label: 'Full order cycle' },
        { value: '100%',   label: 'Data integrity'   },
      ],
      features: [
        'True offline-first — zero data loss on reconnect',
        'Custom sync engine replacing deprecated Realm Atlas',
        'Full lifecycle ownership of a 5-year-old codebase',
        'Serves enterprise clients across the MENA region',
      ],
      playStoreUrl: '#', // 🔗 Update with real Play Store link
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
        'Sole engineer owning a 5-year-old live enterprise product for a MENA client — drove the full product roadmap.',
        'Architected a custom Sync Engine replacing deprecated Realm Atlas Device Sync — 100% data integrity in offline conditions.',
        'Executed React Native architecture upgrades and dependency migrations on a live production app — zero downtime.',
        'Rebuilt bulk order flow: 1,000+ SKU orders per customer in under 10 minutes.',
        'Proactively resolved native breaking changes on every Android & iOS release cycle.',
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
