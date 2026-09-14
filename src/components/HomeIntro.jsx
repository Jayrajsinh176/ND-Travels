import { useEffect, useRef, useState } from "react";

function CountUp({ end, suffix = "", duration = 2000 }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            {
                threshold: 0.5,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) {
                startTime = currentTime;
            }

            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            const easedProgress = 1 - Math.pow(1 - progress, 3);

            const currentValue = Math.floor(easedProgress * end);

            setCount(currentValue);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [started, end, duration]);

    return (
        <span ref={elementRef}>
            {count}
            {suffix}
        </span>
    );
}

function HomeIntro() {
    return (
        <section
            id="journey"
            className="relative overflow-hidden bg-white px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24"
        >
            <div className="relative mx-auto w-full max-w-7xl">

                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="reveal reveal-left">

                        {/* Label */}
                        <div className="mb-4 inline-flex rounded-full bg-slate-100 px-4 py-1.5">
                            <span className="text-[11px] font-medium uppercase tracking-wide text-slate-700">
                                About ND Tours and Travels
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="max-w-lg text-4xl font-medium leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                            Your Trusted Travel
                            <br />
                            Partner Across Gujarat
                        </h2>

                        {/* Description */}
                        <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500">
                            At ND Tours and Travels, we make travelling across
                            Gujarat simple, comfortable, and memorable. Whether
                            you are planning a family vacation, a temple tour,
                            a weekend getaway, or a business trip, we provide
                            reliable taxi services and thoughtfully planned
                            journeys to Gujarat's most beautiful destinations.
                        </p>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                            Explore destinations like the Statue of Unity,
                            Gir National Park, Somnath, Dwarka, Kutch, Saputara,
                            and more — with comfortable travel and dependable
                            service from start to finish.
                        </p>

                        {/* ================= STATS ================= */}
                        <div className="mt-14 grid max-w-md grid-cols-3 gap-5 sm:mt-16 sm:gap-6 lg:mt-20">

                            {/* Stat 1 */}
                            <div className="reveal reveal-up">
                                <div className="text-2xl font-light text-orange-500 sm:text-3xl">
                                    <CountUp
                                        end={2}
                                        suffix="+"
                                        duration={1800}
                                    />
                                </div>

                                <p className="mt-2 text-[12px] leading-4 text-slate-500">
                                    Years of
                                    <br />
                                    Experience
                                </p>
                            </div>

                            {/* Stat 2 */}
                            <div
                                className="reveal reveal-up"
                                style={{ transitionDelay: "100ms" }}
                            >
                                <div className="text-2xl font-light text-orange-500 sm:text-3xl">
                                    <CountUp
                                        end={5000}
                                        suffix="+"
                                        duration={2200}
                                    />
                                </div>

                                <p className="mt-2 text-[12px] leading-4 text-slate-500">
                                    Happy
                                    <br />
                                    Travelers
                                </p>
                            </div>

                            {/* Stat 3 */}
                            <div
                                className="reveal reveal-up"
                                style={{ transitionDelay: "200ms" }}
                            >
                                <div className="text-2xl font-light text-orange-500 sm:text-3xl">
                                    <CountUp
                                        end={10}
                                        suffix="+"
                                        duration={1500}
                                    />
                                </div>

                                <p className="mt-2 text-[12px] leading-4 text-slate-500">
                                    Gujarat
                                    <br />
                                    Destinations
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* ================= RIGHT IMAGE ================= */}
                    <div className="reveal reveal-right">

                        <div className="relative mx-auto w-full max-w-md">

                            <img
                                src="/images/homeintro.png"
                                alt="ND Tours and Travels Gujarat tour"
                                className="aspect-[4/5] w-full rounded-2xl object-cover"
                            />

                            {/* Quote */}
                            <div className="absolute bottom-5 left-4 right-4 rounded-xl bg-white px-5 py-4 shadow-xl sm:bottom-6 sm:left-5 sm:right-5">
                                <p className="text-xs leading-5 text-slate-600 sm:text-sm">
                                    "Travel with comfort, explore with
                                    confidence, and create memories that last
                                    a lifetime."
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HomeIntro;
