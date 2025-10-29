
export type Stage = 'dreaming' | 'planning' | 'booking' | 'traveling' | 'reflecting' | null;
export type TravelStyle = 'adventure' | 'relaxation' | 'luxury' | 'culture' | null;

export interface Message {
    id: string;
    text: string;
    isUser: boolean;
    isHtml?: boolean;
}

export interface ConversationContext {
    stage: Stage;
    destination: string | null;
    budget: number | null;
    companions: string[];
    travelStyle: TravelStyle;
    dates: string | null;
    duration: number | null;
    history: { role: 'user' | 'model'; parts: { text: string }[] }[];
}

export interface DestinationPackage {
    name: string;
    price: number;
    duration: string;
    description: string;
}

export interface Destination {
    season: string;
    highlights: string[];
    packages: DestinationPackage[];
}

export interface Destinations {
    [key: string]: Destination;
}
