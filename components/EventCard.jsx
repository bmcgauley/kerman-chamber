/**
 * EventCard — reusable card for events grid.
 * Props: id, title, date, month, day, time, location, category, image, description, featured
 */
export default function EventCard({ event }) {
    const { title, month, day, time, location, category, image, description, featured } = event;

    if (featured) {
        return (
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <div className="group relative flex flex-col md:flex-row bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url('${image}')` }}
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-accent text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                                Featured Annual Event
                            </span>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="md:w-3/5 p-8 flex flex-col justify-center gap-4">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-3xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                    {title}
                                </h3>
                                <div className="flex items-center gap-6 text-slate-600 mb-4 flex-wrap">
                                    <span className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-accent">calendar_month</span>
                                        <span className="font-medium">{event.date}</span>
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-accent">schedule</span>
                                        <span className="font-medium">{time}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="hidden md:flex flex-col items-center justify-center bg-primary text-white p-3 rounded-lg min-w-[80px] ml-4 flex-shrink-0">
                                <span className="text-xs uppercase font-medium">{month}</span>
                                <span className="text-2xl font-bold font-display">{day}</span>
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-4">{description}</p>
                        <div className="flex flex-wrap items-center gap-4 mt-auto">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <span className="material-symbols-outlined text-lg">location_on</span>
                                <span>{location}</span>
                            </div>
                            <div className="flex-grow" />
                            <button className="flex items-center justify-center rounded-full h-12 px-8 bg-accent text-primary text-sm font-bold hover:bg-accent-hover transition-all shadow-lg">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${image}')` }}
                />
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center shadow-md min-w-[60px]">
                    <span className="block text-xs font-bold text-slate-400 uppercase">{month}</span>
                    <span className="block text-2xl font-display font-bold text-primary">{day}</span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary/80 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                        {category}
                    </span>
                </div>
            </div>
            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-auto">
                    <h3 className="text-xl font-bold text-primary mb-2 font-display group-hover:text-accent transition-colors leading-tight">
                        {title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{description}</p>
                    <div className="flex items-center text-slate-500 text-sm gap-4 mb-4 flex-wrap">
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-base text-accent">schedule</span>
                            {time}
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-base text-accent">location_on</span>
                            {location}
                        </span>
                    </div>
                </div>
                <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2.5 rounded-full transition-colors mt-4 text-sm">
                    Learn More &amp; Register
                </button>
            </div>
        </div>
    );
}
