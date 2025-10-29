import React from 'react';
import { type Stage } from '../types';

interface QuickActionsProps {
    onSelectStage: (stage: Stage) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onSelectStage }) => {
    const actions: { label: string; stage: Stage; icon: string }[] = [
        { label: 'Dreaming', stage: 'dreaming', icon: '🌟' },
        { label: 'Planning', stage: 'planning', icon: '📋' },
        { label: 'Booking', stage: 'booking', icon: '🎫' },
        { label: 'Traveling', stage: 'traveling', icon: '✈️' },
        { label: 'Reflecting', stage: 'reflecting', icon: '💭' },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-4">
            {actions.map(({ label, stage, icon }) => (
                <button
                    key={stage}
                    onClick={() => onSelectStage(stage)}
                    className="quick-action bg-gradient-to-br from-[#4682B4] to-[#5F9EA0] text-white p-3 rounded-lg text-center cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 text-sm font-semibold"
                >
                    {icon} {label}
                </button>
            ))}
        </div>
    );
};

export default QuickActions;
