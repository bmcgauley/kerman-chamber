import { siteConfig } from "@/config/site";

const stats = [
    { icon: "history_edu", value: siteConfig.yearsServing, label: `Years Serving ${siteConfig.city}` },
    { icon: "storefront", value: siteConfig.memberCount, label: "Member Businesses" },
    { icon: "event_available", value: siteConfig.eventCount, label: "Annual Events" },
    { icon: "handshake", value: "One", label: "Strong Community" },
];

export default function StatsBar() {
    return (
        <div className="bg-white relative z-20 -mt-16 mx-4 md:mx-auto max-w-6xl rounded-xl shadow-xl p-8 border-b-4 border-accent">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="flex flex-col items-center justify-center text-center p-2"
                    >
                        <span className="material-symbols-outlined text-accent text-4xl mb-3">
                            {stat.icon}
                        </span>
                        <span className="text-3xl font-display font-bold text-primary">
                            {stat.value}
                        </span>
                        <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
