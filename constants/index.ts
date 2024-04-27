// NAVIGATION
export const NAV_LINKS = [
  { path: '/', key: 'home', label: 'Home' },
  { path: '#schedule', key: 'Schedule', label: 'Schedule' },
  { path: '#cta01', key: 'Explore', label: 'Explore' },
  { path: '#upcoming', key: 'Events', label: 'Events' },
];

// SCHEDULE SECTION
export const SCHEDULES = [
  {
    date: '01 January 2024',
    title: 'Opening Concert',
    bgImage: '/schedulebg001.webp',
    sessions: [
      {
        time: '09:00 am - 11:00 am',
        description:
          'Kick-start the festival by resonating with the powerful rhythms of our diverse and dynamic rock bands.',
      },
      {
        time: '02:00 pm - 04:00 pm',
        description:
          'Feel the energy of pop music as it intertwines with your spirit, coloring every note with your passion.',
      },
      {
        time: '06:00 pm - 08:30 pm',
        description:
          'Let your soul dance to the beat of the headlining act that will wrap the day with courageous harmonic explorations.',
      },
    ],
  },
  {
    date: '02 January 2024',
    title: 'Workshop & Jams',
    bgImage: '/schedulebg002.webp',
    sessions: [
      {
        time: '09:00 am - 11:00 am',
        description:
          'Join us as budding rock and pop talents jam together, matching notes, and molding melodies.',
      },
      {
        time: '02:00 pm - 04:00 pm',
        description:
          'Witness soulful renditions by our top artists, playing fresh tunes enriched with vibrant pop elements.',
      },
      {
        time: '06:00 pm - 08:30 pm',
        description:
          "Catch the finale's immersive adventure - an unforgettable journey through rock and pop music.",
      },
    ],
  },
  {
    date: '03 January 2024',
    title: 'Performances',
    bgImage: '/schedulebg003.webp',
    sessions: [
      {
        time: '09:00 am - 11:00 am',
        description:
          'Experience pure, unadulterated rock music, effortlessly flowing from our stages, giving you the tracks you love the most.',
      },
      {
        time: '02:00 pm - 04:00 pm',
        description:
          'On stage, experience transformative pop music acts that boldly break norms and stir the soul deeply.',
      },
      {
        time: '06:00 pm - 08:30 pm',
        description:
          'Dive into the night with a dynamic mix of rock and pop, ending the day on a high note.',
      },
    ],
  },
];

// PERFORMERS SECTION

export const PERFORMERS = [
  {
    name: 'Atomic Fury',
    intro: "Explosive sound waves ignite Atomic Fury's stage",
    img: '/artist004.webp',
  },
  {
    name: 'DJ Diva',
    intro: "Get ready to dance all night with DJ Diva's beats",
    img: '/artist001.webp',
  },
  {
    name: 'Funk Groove',
    intro: 'Feel the funk as Funk Groove takes control',
    img: '/artist002.webp',
  },
  {
    name: 'Emi Suzuki',
    intro: 'The electrifying guitar virtuoso, sets the stage ablaze',
    img: '/artist003.webp',
  },
];

// UPCOMING EVENTS SECTION
export const UPCOMINGEVENTS = [
  {
    image: '/event006.webp',
    date: '10 March, 2024',
    time: '10:30 AM - 11:30 PM',
    name: 'Oceanic Sonic Waves',
    intro:
      'Barcelona presents a vibrant blend of rhythm, culture, and beautiful beachside views.',
    location: 'Spain, Barcelona',
  },
  {
    image: '/event007.webp',
    date: '12 May, 2024',
    time: '11:30 AM - 11:30 PM',
    name: 'Tropical Rhythms',
    intro:
      'Escape to the tropical paradise of Rio de Janeiro and dance to the infectious rhythms of samba and bossa nova.',
    location: 'Brazil, Rio de Janeiro',
  },
  {
    image: '/event008.webp',
    date: '8 July, 2024',
    time: '11:00 AM - 11:00 PM',
    name: 'Mystic Melodies',
    intro:
      'Embark on a musical journey through the ancient temples and mystical landscapes of Kyoto.',
    location: 'Japan, Kyoto',
  },
  {
    image: '/event009.webp',
    date: '5 September, 2024',
    time: '10:30 AM - 11:00 PM',
    name: 'Celestial Serenade',
    intro:
      'Be enchanted by celestial serenades under the starry skies of Florence, the birthplace of Renaissance music.',
    location: 'Italy, Florence',
  },
  {
    image: '/event010.webp',
    date: '20 December, 2024',
    time: '10:0 AM - 11:30 PM',
    name: 'Enchanted Woods',
    intro:
      'Get lost in the enchanting melodies and hidden groves of the Black Forest in Germany.',
    location: 'Germany, Black Forest',
  },
];

// LASTEST EVENTS SECTION
export const LASTESTEVENTS = [
  {
    image: '/event001.webp',
    date: '22 December, 2023',
    name: 'Harmonic Jubilee',
    intro: "Experience exhilarating melodies in heart of America's music city.",
    location: 'USA, Nashville',
  },
  {
    image: '/event002.webp',
    date: '25 October, 2023',
    name: 'Urban Beats Unleashed',
    intro:
      "Discover ground-breaking tracks and soundscapes in London's thriving music scene.",
    location: 'England, London',
  },
  {
    image: '/event003.webp',
    date: '24 August, 2023',
    name: 'Rhythmic Rapture',
    intro: "Dive into diverse music genres under Sydney's stunning skyline.",
    location: 'Australia, Sydney',
  },
];
