/**
 * EventCard — displays event in list or featured variant.
 * Props: event { id, title, category, date, location, time, description, featured, image }
 */
import { KCCButton } from "@/components/KCCButton";

export default function EventCard({ event }) {
    const { title, category, date, location, time, description, featured, image } = event;

    if (featured) {
        return (
            <div className="relative rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row col-span-1 md:col-span-2 lg:col-span-3 border border-accent/20 bg-white group">
                {/* Image */}
                <div className="relative w-full md:w-1/2 min-h-[250px] bg-slate-100 flex-shrink-0 overflow-hidden">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent/40 flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-white/50">event</span>
                        </div>
                    )}
                    <span className="absolute top-4 left-4 z-10 bg-accent text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow">
                        Featured Event
                    </span>
                </div>

                {/* Content */}
                <div className="flex flex-col p-8 flex-1">
                    <span className="text-xs text-accent font-bold uppercase tracking-widest mb-2">{category}</span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">{title}</h3>
                    <p className="text-slate-600 text-sm mb-6 flex-1">{description}</p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-8">
                        <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-base text-accent">calendar_month</span>
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-base text-accent">schedule</span>
                            <span>{time}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-base text-accent">location_on</span>
                            <span>{location}</span>
                        </div>
                    </div>

                    <KCCButton variant="primary" href="#">
                        Register Now
                    </KCCButton>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
            {/* Image / Color bar */}
            <div className="relative h-44 bg-slate-100 overflow-hidden flex-shrink-0">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent/40 flex items-center justify-center">
                        <span className="material-symbols-outlined text-5xl text-white/50">event</span>
                    </div>
                )}
                <span className="absolute top-3 left-3 z-10 bg-accent text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-display font-bold text-primary mb-3 leading-snug">{title}</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{description}</p>

                {/* Meta */}
                <div className="flex flex-col gap-1 text-xs text-slate-500 mb-5">
                    <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-accent">calendar_month</span>
                        <span>{date} · {time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-accent">location_on</span>
                        <span>{location}</span>
                    </div>
                </div>

                <div className="flex-grow" />
                <KCCButton variant="outline-dark" href="#">
                    Learn More & Register
                </KCCButton>
            </div>
        </div>
    );
}
