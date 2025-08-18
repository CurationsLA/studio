import NewsFeed from "./NewsFeed";
import Services from "./Services";

export default function ServicesAndNews() {
    return (
        <section className="py-16 sm:py-24">
            <div className="container max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <Services />
                    </div>
                    <div className="md:col-span-1">
                        <NewsFeed />
                    </div>
                </div>
            </div>
        </section>
    );
}
