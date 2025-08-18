import NewsFeed from "./NewsFeed";
import Services from "./Services";

export default function ServicesAndNews() {
    return (
        <section className="py-16 sm:py-24">
            <div className="container max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <Services />
                    <NewsFeed />
                </div>
            </div>
        </section>
    );
}
