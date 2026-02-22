/**
 * MemberCard — reusable card for member spotlight and directory.
 * Props: name, category, description, icon, tier (optional), phone (optional)
 */
import { KCCButton } from "@/components/KCCButton";

export default function MemberCard({ member, variant = "spotlight" }) {
    const { name, category, description, icon, tier, phone } = member;

    if (variant === "directory") {
        return (
            <div className="bg-white border border-slate-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col gap-3">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-accent text-2xl">{icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-display font-bold text-primary text-base truncate">{name}</h3>
                        <p className="text-accent text-xs font-medium">{category}</p>
                    </div>
                    {tier && (
                        <span
                            className={`flex-shrink-0 text-xs font-bold px-2 py-1 rounded-full ${tier === "Premier"
                                ? "bg-accent/20 text-yellow-800"
                                : tier === "Business Builder"
                                    ? "bg-primary/10 text-primary"
                                    : "bg-slate-100 text-slate-600"
                                }`}
                        >
                            {tier}
                        </span>
                    )}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                {phone && (
                    <a
                        href={`tel:${phone.replace(/\D/g, "")}`}
                        className="text-primary text-sm font-medium hover:text-accent transition-colors flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-base">call</span>
                        {phone}
                    </a>
                )}
                <KCCButton variant="outline-dark" href="#">
                    View Profile
                </KCCButton>
            </div>
        );
    }

    // Spotlight variant (home page)
    return (
        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md border border-slate-100 flex flex-col items-center text-center transition-all">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
                <span className="material-symbols-outlined text-4xl">{icon}</span>
            </div>
            <h3 className="text-lg font-bold text-primary font-display">{name}</h3>
            <p className="text-accent text-sm font-medium mb-4">{category}</p>
            <p className="text-slate-500 text-sm mb-4">{description}</p>
            <KCCButton variant="outline-dark" href="#">
                View Profile
            </KCCButton>
        </div>
    );
}
