
import { type Destinations } from './types';

export const INITIAL_BOT_MESSAGE_HTML = `
<strong>Namaste! 🙏</strong><br><br>
I'm <strong>MITRA</strong>, your AI-powered smart travel companion for Indian travelers!<br><br>
I'll help you plan, book, and enjoy personalized trips based on your preferences, budget, and real-time context.<br><br>
Where are you in your travel journey?
`;

export const DESTINATIONS: Destinations = {
    kerala: {
        season: 'October to March',
        highlights: ['Backwaters', 'Beaches', 'Hill Stations', 'Wildlife'],
        packages: [
            { name: 'Beach Retreat in Varkala', price: 15000, duration: '3 nights', description: 'Tranquil seaside relaxation with cliffside views' },
            { name: 'Munnar Trek', price: 5000, duration: '1 day', description: 'Scenic hiking through tea plantations' },
            { name: 'Alleppey Houseboat', price: 10000, duration: '2 nights', description: 'Unique backwater experience' }
        ]
    },
    goa: {
        season: 'November to February',
        highlights: ['Beaches', 'Nightlife', 'Portuguese Heritage', 'Water Sports'],
        packages: [
            { name: 'North Goa Beach Stay', price: 12000, duration: '3 nights', description: 'Vibrant beaches and party scene' },
            { name: 'South Goa Relaxation', price: 18000, duration: '4 nights', description: 'Peaceful beaches and luxury resorts' },
            { name: 'Adventure Water Sports', price: 3000, duration: '1 day', description: 'Parasailing, jet skiing, and more' }
        ]
    },
    rajasthan: {
        season: 'October to March',
        highlights: ['Palaces', 'Forts', 'Desert Safari', 'Culture'],
        packages: [
            { name: 'Jaipur Heritage Tour', price: 8000, duration: '2 nights', description: 'Pink City forts and palaces' },
            { name: 'Jaisalmer Desert Safari', price: 12000, duration: '3 nights', description: 'Golden fort and sand dunes' },
            { name: 'Udaipur Lake Palace', price: 25000, duration: '3 nights', description: 'Romantic city of lakes' }
        ]
    },
    himachal: {
        season: 'March to June, September to November',
        highlights: ['Mountains', 'Adventure', 'Monasteries', 'Nature'],
        packages: [
            { name: 'Manali Adventure', price: 15000, duration: '4 nights', description: 'Trekking, rafting, and mountain views' },
            { name: 'Dharamshala Retreat', price: 10000, duration: '3 nights', description: 'Peaceful monasteries and Tibetan culture' },
            { name: 'Kasol Backpacking', price: 8000, duration: '3 nights', description: 'Hippie village and nature trails' }
        ]
    },
    uttarakhand: {
        season: 'April to June, September to November',
        highlights: ['Yoga', 'Pilgrimage', 'Mountains', 'Adventure'],
        packages: [
            { name: 'Rishikesh Yoga Retreat', price: 12000, duration: '4 nights', description: 'Spiritual experience with yoga and meditation' },
            { name: 'Nainital Lake Stay', price: 10000, duration: '3 nights', description: 'Colonial charm and lake views' },
            { name: 'Valley of Flowers Trek', price: 8000, duration: '3 days', description: 'UNESCO World Heritage alpine meadow' }
        ]
    }
};

export const BACKGROUND_SVG_URL = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%234682B4;stop-opacity:1" /><stop offset="50%" style="stop-color:%2387CEEB;stop-opacity:1" /><stop offset="100%" style="stop-color:%23B0E0E6;stop-opacity:1" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23sky)"/><ellipse cx="200" cy="600" rx="300" ry="80" fill="%23FFFFFF" opacity="0.4"/><ellipse cx="600" cy="500" rx="400" ry="100" fill="%23FFFFFF" opacity="0.5"/><ellipse cx="1000" cy="550" rx="350" ry="90" fill="%23FFFFFF" opacity="0.45"/><ellipse cx="400" cy="650" rx="250" ry="70" fill="%23FFFFFF" opacity="0.35"/><ellipse cx="800" cy="600" rx="280" ry="75" fill="%23FFFFFF" opacity="0.4"/><path d="M 0 700 Q 200 650 400 680 T 800 660 T 1200 700 L 1200 800 L 0 800 Z" fill="%23778899" opacity="0.6"/><path d="M 100 720 L 180 600 L 260 720 Z" fill="%23708090" opacity="0.7"/><path d="M 900 750 L 1000 620 L 1100 750 Z" fill="%236B7B8C" opacity="0.65"/></svg>`;
