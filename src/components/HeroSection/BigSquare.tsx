"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent as ReactMouseEvent, PointerEvent as ReactPointerEvent } from "react";

/**
 * BigSquare — animated 2x2 hero artwork (sparkle / cloud / cat / code).
 *
 * - Desktop: hover a tile to play its scene.
 * - Mobile / touch: tap a tile to play its scene; tap it again, tap another tile,
 *   or tap anywhere outside to stop it.
 * - All animation is CSS. React only tracks which tile is active (class "bsq-on").
 * - Every class and keyframe is prefixed "bsq-" so nothing leaks into the rest of the site.
 * - Size it from outside with `className` (default: w-48 md:w-64, same as the old grid).
 */

type TileId = "star" | "cloud" | "cat" | "code";

type BigSquareProps = {
    className?: string;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
};

export default function BigSquare({ className = "w-48 md:w-64", onHoverStart, onHoverEnd }: BigSquareProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState<TileId | null>(null);

    // Touch: a tap outside the widget closes whatever scene is playing.
    useEffect(() => {
        const onDown = (e: PointerEvent) => {
            if (rootRef.current && !rootRef.current.contains(e.target as Node)) setActive(null);
        };
        document.addEventListener("pointerdown", onDown);
        return () => document.removeEventListener("pointerdown", onDown);
    }, []);

    // A click only counts as a "tap" when it did not come from a mouse (mouse uses hover).
    const isTap = (e: ReactMouseEvent) => {
        const type = (e.nativeEvent as PointerEvent).pointerType;
        return type ? type !== "mouse" : window.matchMedia("(hover: none)").matches;
    };

    const bind = (id: TileId) => ({
        onPointerEnter: (e: ReactPointerEvent) => {
            if (e.pointerType === "mouse" || e.pointerType === "pen") setActive(id);
        },
        onPointerLeave: (e: ReactPointerEvent) => {
            if (e.pointerType === "mouse" || e.pointerType === "pen") setActive((a) => (a === id ? null : a));
        },
        onClick: (e: ReactMouseEvent) => {
            if (isTap(e)) setActive((a) => (a === id ? null : id));
        },
    });
    const on = (id: TileId) => (active === id ? "bsq-on" : "");

    return (
        <div
            ref={rootRef}
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className={`bsq relative mx-auto aspect-[830/835] touch-manipulation select-none [-webkit-tap-highlight-color:transparent] ${className}`}
            role="img"
            aria-label="Illustration: a sparkle, a cloud, a black cat and a code symbol"
        >
            <style dangerouslySetInnerHTML={{ __html: css }} />

            {/* Hover targets (tiles). The artwork SVG below is their later sibling,
          so ".bsq-t-star.bsq-on ~ svg .part" lets each tile drive its own artwork. */}
            <div
                className={`bsq-t-star absolute cursor-pointer rounded-[11%] bg-[#646464] transition-colors duration-300 ${on("star")}`}
                {...bind("star")}
                style={{ left: "3.614%", top: "0.958%", width: "46.386%", height: "46.108%" }}
            />
            <div
                className={`bsq-t-cloud bsq-tile absolute box-border cursor-pointer rounded-[13%] border-black bg-white transition-colors duration-300 ${on("cloud")}`}
                {...bind("cloud")}
                style={{ left: "53.373%", top: "0%", width: "46.024%", height: "47.186%" }}
            />
            <div
                className={`bsq-t-cat bsq-tile absolute box-border cursor-pointer rounded-[13%] border-black bg-white ${on("cat")}`}
                {...bind("cat")}
                style={{ left: "3.494%", top: "50.659%", width: "45.904%", height: "45.629%" }}
            />
            <div
                className={`bsq-t-code absolute cursor-pointer rounded-[10%] bg-[#646464] transition-colors duration-300 ${on("code")}`}
                {...bind("code")}
                style={{ left: "53.253%", top: "50.539%", width: "46.506%", height: "46.347%" }}
            />

            {/* Artwork layer: drawn in the original 1200x1200 space, shifted/scaled so the tiles
          fill the component. It ignores the pointer so hovers reach the tiles. */}
            <svg
                className="pointer-events-none absolute max-w-none overflow-visible"
                style={{ width: "144.578%", height: "143.713%", left: "-22.892%", top: "-22.036%" }}
                viewBox="0 0 1200 1200"
                aria-hidden="true"
            >
                {/* Star */}
                <g className="bsq-star-scale">
                    <path className="bsq-star-spin" fill="#fff"
                        d="M412 314 L433 359 L480 381 L433 403 L412 448 L391 403 L345 381 L391 359 Z" />
                </g>

                <path className="bsq-cloud-a" fill="#fff" stroke="#000" strokeWidth="3" strokeLinejoin="round"
                    d="M215 460 Q207 475 218 484 Q222 488 240 488 L335 485 Q350 483 351 470 Q350 460 335 461 Q326 462 323 455 Q316 452 312 456 Q305 436 280 434 Q258 433 247 445 Q240 452 237 460 Q225 458 215 460 Z" />

                <path className="bsq-cloud-b" fill="#fff" stroke="#000" strokeWidth="3" strokeLinejoin="round"
                    d="M505 400 Q494 408 497 420 Q502 431 520 431 L630 428 Q652 425 653 410 Q652 402 640 402 Q630 404 624 398 Q618 396 612 400 Q608 372 582 372 Q568 373 566 380 Q545 368 530 385 Q525 392 524 399 Q514 396 505 400 Z" />

                {/* Africa + Madagascar (revealed on hover over the cloud square) */}
                <g transform="translate(633 187) scale(.72)">
                    <path className="bsq-geo" pathLength="1"
                        d="M148 55 C154.2 52.8 158.8 57.5 165 57 C171.2 56.5 177.5 53.2 185 52 C192.5 50.8 201.5 50.0 210 50 C218.5 50.0 232.3 49.0 236 52 C239.7 55.0 231.3 64.7 232 68 C232.7 71.3 235.0 69.2 240 72 C245.0 74.8 255.7 81.7 262 85 C268.3 88.3 274.2 92.8 278 92 C281.8 91.2 281.7 82.3 285 80 C288.3 77.7 293.8 77.3 298 78 C302.2 78.7 304.7 82.8 310 84 C315.3 85.2 323.3 84.7 330 85 C336.7 85.3 344.7 85.5 350 86 C355.3 86.5 359.5 84.8 362 88 C364.5 91.2 366.3 103.8 365 105 C363.7 106.2 355.2 94.2 354 95 C352.8 95.8 355.7 105.0 358 110 C360.3 115.0 364.7 120.0 368 125 C371.3 130.0 375.2 134.5 378 140 C380.8 145.5 382.2 152.7 385 158 C387.8 163.3 391.7 167.5 395 172 C398.3 176.5 401.7 180.3 405 185 C408.3 189.7 411.7 196.2 415 200 C418.3 203.8 421.7 206.0 425 208 C428.3 210.0 430.8 212.0 435 212 C439.2 212.0 444.5 209.5 450 208 C455.5 206.5 464.7 201.8 468 203 C471.3 204.2 471.0 210.5 470 215 C469.0 219.5 464.5 225.0 462 230 C459.5 235.0 458.7 239.7 455 245 C451.3 250.3 445.0 257.0 440 262 C435.0 267.0 430.0 270.3 425 275 C420.0 279.7 413.8 285.0 410 290 C406.2 295.0 402.8 299.2 402 305 C401.2 310.8 404.0 318.3 405 325 C406.0 331.7 408.0 337.8 408 345 C408.0 352.2 406.7 362.5 405 368 C403.3 373.5 401.3 374.7 398 378 C394.7 381.3 389.3 384.7 385 388 C380.7 391.3 374.5 393.5 372 398 C369.5 402.5 370.7 410.0 370 415 C369.3 420.0 370.0 425.2 368 428 C366.0 430.8 360.2 429.2 358 432 C355.8 434.8 358.0 439.5 355 445 C352.0 450.5 345.8 459.2 340 465 C334.2 470.8 326.7 476.2 320 480 C313.3 483.8 305.8 486.3 300 488 C294.2 489.7 289.2 491.0 285 490 C280.8 489.0 277.5 485.7 275 482 C272.5 478.3 272.2 472.5 270 468 C267.8 463.5 265.3 459.7 262 455 C258.7 450.3 252.8 445.8 250 440 C247.2 434.2 247.5 427.0 245 420 C242.5 413.0 237.2 404.7 235 398 C232.8 391.3 231.2 386.0 232 380 C232.8 374.0 238.3 367.8 240 362 C241.7 356.2 242.3 351.2 242 345 C241.7 338.8 240.0 330.8 238 325 C236.0 319.2 233.3 315.5 230 310 C226.7 304.5 220.8 297.8 218 292 C215.2 286.2 213.0 280.7 213 275 C213.0 269.3 218.2 262.2 218 258 C217.8 253.8 215.0 251.3 212 250 C209.0 248.7 203.7 252.0 200 250 C196.3 248.0 193.7 240.0 190 238 C186.3 236.0 182.2 237.2 178 238 C173.8 238.8 169.7 241.7 165 243 C160.3 244.3 155.8 245.5 150 246 C144.2 246.5 135.8 245.7 130 246 C124.2 246.3 120.0 249.0 115 248 C110.0 247.0 105.0 243.8 100 240 C95.0 236.2 89.7 230.8 85 225 C80.3 219.2 75.3 210.8 72 205 C68.7 199.2 65.7 195.0 65 190 C64.3 185.0 66.8 180.0 68 175 C69.2 170.0 72.0 164.5 72 160 C72.0 155.5 67.5 152.2 68 148 C68.5 143.8 71.7 140.5 75 135 C78.3 129.5 83.8 120.8 88 115 C92.2 109.2 95.5 104.2 100 100 C104.5 95.8 110.3 95.0 115 90 C119.7 85.0 122.5 75.8 128 70 C133.5 64.2 141.8 57.2 148 55 Z" />
                    <path className="bsq-geo bsq-mada" pathLength="1"
                        d="M458 354 C460.3 354.0 463.7 362.8 464 368 C464.3 373.2 462.0 378.8 460 385 C458.0 391.2 454.5 399.2 452 405 C449.5 410.8 447.3 415.0 445 420 C442.7 425.0 440.8 432.0 438 435 C435.2 438.0 431.0 438.8 428 438 C425.0 437.2 421.0 433.8 420 430 C419.0 426.2 420.7 419.7 422 415 C423.3 410.3 427.7 406.5 428 402 C428.3 397.5 424.0 392.3 424 388 C424.0 383.7 425.3 378.7 428 376 C430.7 373.3 436.3 373.3 440 372 C443.7 370.7 447.0 371.0 450 368 C453.0 365.0 455.7 354.0 458 354 Z" />
                </g>

                {/* Big cloud */}
                <path className="bsq-big-cloud" fill="#fff" stroke="#000" strokeWidth="5" strokeLinejoin="round"
                    d="M645 535 Q640 552 655 568 Q670 576 690 576 L965.3 576 C991.6 576 1013 554 1013 526.8 Q1013 509 975 508 Q955 508 942 513 Q938 495 910 492 Q915 450 865 438 Q835 436 812 460 Q780 440 745 445 Q712 458 710 503 Q690 495 672 498 Q650 505 645 535 Z" />

                <text x="543" y="671" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="32" fill="#000">AI</text>

                {/* Cat */}
                <g className="bsq-cat">
                    <path fill="#000"
                        d="M268 905 C265 840 285 790 322 742 Q333 728 345 735 Q362 748 372 760 L412 760 Q425 745 435 735 Q447 727 458 740 C500 785 525 850 525 940 C525 985 480 1018 395 1018 C330 1018 295 995 285 975 C275 955 268 930 268 905 Z" />
                    <path className="bsq-tail" fill="#000"
                        d="M290 990 L262 990 C222 990 191 956 191 918 C191 888 208 866 232 867 C255 868 263 890 252 903 C246 910 237 915 237 928 C237 945 252 955 275 957 L290 957 Z" />

                    {/* Eyes + black lids (lids rise for the smile and the blinks) */}
                    <g className="bsq-eyes">
                        <ellipse cx="351" cy="827" rx="9" ry="18" fill="#fff" />
                        <ellipse cx="440" cy="824" rx="9" ry="18" fill="#fff" />
                        <ellipse className="bsq-lid" cx="351" cy="827" rx="13" ry="18" fill="#000" />
                        <ellipse className="bsq-lid" cx="440" cy="824" rx="13" ry="18" fill="#000" />
                    </g>

                    <g stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none">
                        <path className="bsq-whisker bsq-l" d="M312 845 L325 852" />
                        <path className="bsq-whisker bsq-l" d="M308 862 L322 858" />
                        <path className="bsq-whisker bsq-r" d="M470 839 L483 838" />
                        <path className="bsq-whisker bsq-r" d="M468 855 L483 857" />
                    </g>
                </g>

                {/* </> icon (always white) */}
                <g className="bsq-code-icon" stroke="#fff" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <path d="M778 770 L750 798 L778 826" />
                    <path d="M843 754 L808 846" />
                    <path d="M872 770 L900 798 L872 826" />
                </g>


                {/* Blue sprout that unfurls beside the cat (cloud-square hover, after the map is drawn) */}
                <ellipse className="bsq-mound" cx="110" cy="990" rx="22" ry="6" fill="#2563eb" />
                <g className="bsq-sprout">
                    <path className="bsq-stem" d="M110 988 L110 878" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" fill="none" />
                    <g className="bsq-tip">
                        <path className="bsq-leaf bsq-l" fill="#2563eb" d="M110 878 C90 872 68 852 60 832 C86 830 106 846 110 878 Z" />
                        <path className="bsq-leaf bsq-r" fill="#2563eb" d="M110 878 C132 866 156 842 166 818 C138 818 114 838 110 878 Z" />
                    </g>
                </g>

                {/* Star finale decorations (hidden until the star hover finishes spinning) */}
                <path className="bsq-fx bsq-twinkle bsq-t1" fill="#2563eb" d="M1068.0 1010.0 L1076.4 1031.6 L1098.0 1040.0 L1076.4 1048.4 L1068.0 1070.0 L1059.6 1048.4 L1038.0 1040.0 L1059.6 1031.6 Z" />
                <path className="bsq-fx bsq-twinkle bsq-t2" fill="#2563eb" d="M1112.0 967.0 L1117.0 980.0 L1130.0 985.0 L1117.0 990.0 L1112.0 1003.0 L1107.0 990.0 L1094.0 985.0 L1107.0 980.0 Z" />
                <g className="bsq-fx bsq-firework bsq-f1" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" fill="#2563eb">
                    <line x1="129.0" y1="790.0" x2="149.0" y2="790.0" />
                    <circle cx="157.5" cy="807.6" r="3" stroke="none" />
                    <line x1="124.9" y1="799.9" x2="139.0" y2="814.0" />
                    <circle cx="132.6" cy="832.5" r="3" stroke="none" />
                    <line x1="115.0" y1="804.0" x2="115.0" y2="824.0" />
                    <circle cx="97.4" cy="832.5" r="3" stroke="none" />
                    <line x1="105.1" y1="799.9" x2="91.0" y2="814.0" />
                    <circle cx="72.5" cy="807.6" r="3" stroke="none" />
                    <line x1="101.0" y1="790.0" x2="81.0" y2="790.0" />
                    <circle cx="72.5" cy="772.4" r="3" stroke="none" />
                    <line x1="105.1" y1="780.1" x2="91.0" y2="766.0" />
                    <circle cx="97.4" cy="747.5" r="3" stroke="none" />
                    <line x1="115.0" y1="776.0" x2="115.0" y2="756.0" />
                    <circle cx="132.6" cy="747.5" r="3" stroke="none" />
                    <line x1="124.9" y1="780.1" x2="139.0" y2="766.0" />
                    <circle cx="157.5" cy="772.4" r="3" stroke="none" />
                </g>
                <g className="bsq-fx bsq-firework bsq-f2" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" fill="#2563eb">
                    <line x1="1104.0" y1="135.0" x2="1124.0" y2="135.0" />
                    <circle cx="1132.5" cy="152.6" r="3" stroke="none" />
                    <line x1="1099.9" y1="144.9" x2="1114.0" y2="159.0" />
                    <circle cx="1107.6" cy="177.5" r="3" stroke="none" />
                    <line x1="1090.0" y1="149.0" x2="1090.0" y2="169.0" />
                    <circle cx="1072.4" cy="177.5" r="3" stroke="none" />
                    <line x1="1080.1" y1="144.9" x2="1066.0" y2="159.0" />
                    <circle cx="1047.5" cy="152.6" r="3" stroke="none" />
                    <line x1="1076.0" y1="135.0" x2="1056.0" y2="135.0" />
                    <circle cx="1047.5" cy="117.4" r="3" stroke="none" />
                    <line x1="1080.1" y1="125.1" x2="1066.0" y2="111.0" />
                    <circle cx="1072.4" cy="92.5" r="3" stroke="none" />
                    <line x1="1090.0" y1="121.0" x2="1090.0" y2="101.0" />
                    <circle cx="1107.6" cy="92.5" r="3" stroke="none" />
                    <line x1="1099.9" y1="125.1" x2="1114.0" y2="111.0" />
                    <circle cx="1132.5" cy="117.4" r="3" stroke="none" />
                </g>



                {/* Slow twinkling stars beside the sprout (stay until hover ends) */}
                <g className="bsq-sstar" style={{ transformOrigin: "48px 905px", "--d": "2.3s" } as CSSProperties}><path className="bsq-sstar-p" fill="#2563eb" style={{ transformOrigin: "48px 905px", "--d": "2.3s" } as CSSProperties} d="M48.0 891.0 L51.9 901.1 L62.0 905.0 L51.9 908.9 L48.0 919.0 L44.1 908.9 L34.0 905.0 L44.1 901.1 Z" /></g>
                <g className="bsq-sstar" style={{ transformOrigin: "175px 875px", "--d": "2.8s" } as CSSProperties}><path className="bsq-sstar-p" fill="#2563eb" style={{ transformOrigin: "175px 875px", "--d": "2.8s" } as CSSProperties} d="M175.0 863.0 L178.4 871.6 L187.0 875.0 L178.4 878.4 L175.0 887.0 L171.6 878.4 L163.0 875.0 L171.6 871.6 Z" /></g>
                <g className="bsq-sstar" style={{ transformOrigin: "88px 805px", "--d": "3.2s" } as CSSProperties}><path className="bsq-sstar-p" fill="#2563eb" style={{ transformOrigin: "88px 805px", "--d": "3.2s" } as CSSProperties} d="M88.0 795.0 L90.8 802.2 L98.0 805.0 L90.8 807.8 L88.0 815.0 L85.2 807.8 L78.0 805.0 L85.2 802.2 Z" /></g>

            </svg>
        </div>
    );
}

const css = `
    /* Root = size container, so tile borders scale with the widget */
    .bsq { container-type: inline-size; }
    .bsq-tile { border-width: max(1.5px, calc(100cqw * 4 / 830)); }
    /* active tile background (same blue as before) */
    .bsq-t-star.bsq-on, .bsq-t-cloud.bsq-on, .bsq-t-code.bsq-on { background-color: #2563eb; }

    /* The artwork SVG is a later sibling of the tiles, so
       "#tile:hover ~ svg .bsq-part" lets each tile drive its own artwork. */
    svg .bsq-whisker, svg .bsq-tail, svg .bsq-code-icon { transform-box: fill-box; }

    /* ---- Star square: grow + 360° spin over 2s, stay big while hovered ---- */
    svg .bsq-star-scale, svg .bsq-star-spin { transform-box: view-box; transform-origin: 412px 381px; }
    svg .bsq-star-scale { transition: transform .4s ease-out; }
    .bsq-t-star.bsq-on ~ svg .bsq-star-scale { transform: scale(1.35); transition: transform 2s ease-in-out; }
    .bsq-t-star.bsq-on ~ svg .bsq-star-spin  { animation: bsq-spin 2s ease-in-out 1; }
    @keyframes bsq-spin { to { transform: rotate(360deg); } }

    svg .bsq-cloud-a, svg .bsq-cloud-b { transition: transform .8s cubic-bezier(.34,1.56,.64,1); }
    .bsq-t-star.bsq-on ~ svg .bsq-cloud-a { transform: translateX(-40px); } /* bottom-left cloud moves left */
    .bsq-t-star.bsq-on ~ svg .bsq-cloud-b { transform: translateX(40px); }  /* top-right cloud moves right */

    /* ---- Cat square: crescent eyes, wiggling whiskers and tail ---- */
    svg .bsq-lid { transform: translateY(42px); transition: transform .3s ease-out; }
    svg .bsq-whisker.bsq-l { transform-origin: right center; }
    svg .bsq-whisker.bsq-r { transform-origin: left center; }
    svg .bsq-tail { transform-origin: 92% 88%; }
    .bsq-t-cat.bsq-on ~ svg .bsq-lid { transform: translateY(13px); }
    .bsq-t-cat.bsq-on ~ svg .bsq-whisker { animation: bsq-wiggle .4s ease-in-out infinite; }
    .bsq-t-cat.bsq-on ~ svg .bsq-whisker.bsq-r { animation-delay: .1s; }
    .bsq-t-cat.bsq-on ~ svg .bsq-tail { animation: bsq-wag .55s ease-in-out infinite; }
    @keyframes bsq-wiggle { 0%,100% { transform: rotate(0); } 25% { transform: rotate(-16deg); } 75% { transform: rotate(16deg); } }
    @keyframes bsq-wag    { 0%,100% { transform: rotate(0); } 25% { transform: rotate(-9deg); }  75% { transform: rotate(9deg); } }

    /* ---- Code square: icon grows ---- */
    svg .bsq-code-icon { transform-origin: center; transition: transform .45s cubic-bezier(.34,1.56,.64,1); }
    .bsq-t-code.bsq-on ~ svg .bsq-code-icon { transform: scale(1.3); }

    /* ---- Cloud square: big cloud fades out, Africa + Madagascar are outlined, then filled white ---- */
    svg .bsq-big-cloud { transition: opacity .35s ease, transform .35s ease; }
    .bsq-t-cloud.bsq-on ~ svg .bsq-big-cloud { opacity: 0; transform: translateY(30px); }

    svg .bsq-geo {
      fill: #fff; fill-opacity: 0; stroke: #fff; stroke-width: 7; stroke-linejoin: round; stroke-linecap: round;
      stroke-dasharray: 1 1; stroke-dashoffset: 1; opacity: 0;
      transition: opacity .15s, fill-opacity .15s, stroke-dashoffset .15s;
    }
    .bsq-t-cloud.bsq-on ~ svg .bsq-geo {
      opacity: 1; fill-opacity: 1; stroke-dashoffset: 0;
      transition: opacity .1s .1s, stroke-dashoffset .8s ease-in-out .15s, fill-opacity .4s ease-in .95s;
    }
    .bsq-t-cloud.bsq-on ~ svg .bsq-geo.bsq-mada {
      transition: opacity .1s .5s, stroke-dashoffset .6s ease-in-out .5s, fill-opacity .4s ease-in 1.1s;
    }

    /* ---- Star finale: 2s after the star hover begins (spin done), play for 2s ---- */
    .bsq-t-star.bsq-on ~ .bsq-t-code { animation: bsq-code-blue 2s ease 2s 1 both; }
    .bsq-t-star.bsq-on ~ svg .bsq-lid { animation: bsq-smile 2s ease 2s 1 both; }
    @keyframes bsq-code-blue { 0%,100% { background-color: #646464; } 15%,85% { background-color: #2563eb; } }
    @keyframes bsq-smile     { 0%,100% { transform: translateY(42px); } 15%,85% { transform: translateY(13px); } }

    svg .bsq-fx { opacity: 0; transform-box: fill-box; transform-origin: center; }
    .bsq-t-star.bsq-on ~ svg .bsq-twinkle    { animation: bsq-twinkle 1.8s ease-in-out 2s 1 both; }
    .bsq-t-star.bsq-on ~ svg .bsq-twinkle.bsq-t2 { animation: bsq-twinkle 1.7s ease-in-out 2.3s 1 both; }
    .bsq-t-star.bsq-on ~ svg .bsq-firework    { animation: bsq-burst 1s ease-out 2s 2 both; }
    .bsq-t-star.bsq-on ~ svg .bsq-firework.bsq-f2 { animation: bsq-burst 1s ease-out 2.25s 2 both; }
    @keyframes bsq-twinkle {
      0%   { opacity: 0; transform: scale(0) rotate(0deg); }
      20%  { opacity: 1; transform: scale(1.25) rotate(20deg); }
      40%  { opacity: .6; transform: scale(.7) rotate(40deg); }
      60%  { opacity: 1; transform: scale(1.2) rotate(60deg); }
      80%  { opacity: .6; transform: scale(.7) rotate(80deg); }
      100% { opacity: 0; transform: scale(0) rotate(90deg); }
    }
    @keyframes bsq-burst {
      0%   { opacity: 0; transform: scale(.15); }
      15%  { opacity: 1; }
      60%  { opacity: 1; transform: scale(1); }
      100% { opacity: 0; transform: scale(1.35); }
    }

    /* ---- Cloud square epilogue (starts once Africa is drawn, ~1.5s): cat watches a sprout unfurl ---- */
    svg .bsq-cat  { transition: transform .3s ease-out; }
    svg .bsq-eyes { transition: transform .3s ease-out; }
    .bsq-t-cloud.bsq-on ~ svg .bsq-cat  { transform: translateX(-5px); transition: transform .5s ease-in-out 1.5s; }
    .bsq-t-cloud.bsq-on ~ svg .bsq-eyes { transform: translateX(-7px); transition: transform .5s ease-in-out 1.5s; }

    svg .bsq-sprout, svg .bsq-stem, svg .bsq-leaf, svg .bsq-mound { transform-box: view-box; }
    svg .bsq-sprout { transform-origin: 110px 988px; }
    svg .bsq-stem   { transform-origin: 110px 988px; transform: scaleY(0); }
    svg .bsq-tip    { transform: translateY(110px); }
    svg .bsq-leaf   { transform-origin: 110px 878px; transform: scale(0); }
    svg .bsq-mound  { transform-origin: 110px 990px; transform: scaleX(0); }

    .bsq-t-cloud.bsq-on ~ svg .bsq-sprout { animation: bsq-sprout-bend 1.8s ease-out 1.8s 1 both; }  /* leans toward the cat, then stands */
    .bsq-t-cloud.bsq-on ~ svg .bsq-stem   { animation: bsq-stem-grow 1.8s ease-out 1.8s 1 both; }
    .bsq-t-cloud.bsq-on ~ svg .bsq-tip    { animation: bsq-tip-rise 1.8s ease-out 1.8s 1 both; }
    .bsq-t-cloud.bsq-on ~ svg .bsq-leaf.bsq-l { animation: bsq-leaf-l .9s cubic-bezier(.34,1.4,.64,1) 2.7s 1 both; }  /* leaves unfurl */
    .bsq-t-cloud.bsq-on ~ svg .bsq-leaf.bsq-r { animation: bsq-leaf-r .9s cubic-bezier(.34,1.4,.64,1) 2.8s 1 both; }
    .bsq-t-cloud.bsq-on ~ svg .bsq-mound  { animation: bsq-mound-pop .4s ease-out 1.7s 1 both; }
    .bsq-t-cloud.bsq-on ~ svg .bsq-lid    { animation: bsq-blink .7s ease-in-out 3s 1; }  /* blink just before the sprout stands (~3.6s) */

    @keyframes bsq-sprout-bend { 0% { transform: rotate(34deg); } 60% { transform: rotate(14deg); } 100% { transform: rotate(0); } }
    @keyframes bsq-stem-grow   { from { transform: scaleY(0); } to { transform: scaleY(1); } }
    @keyframes bsq-tip-rise    { from { transform: translateY(110px); } to { transform: translateY(0); } }
    @keyframes bsq-leaf-l      { from { transform: scale(0) rotate(60deg); }  to { transform: scale(1) rotate(0); } }
    @keyframes bsq-leaf-r      { from { transform: scale(0) rotate(-60deg); } to { transform: scale(1) rotate(0); } }
    @keyframes bsq-mound-pop   { from { transform: scaleX(0); } to { transform: scaleX(1); } }
    @keyframes bsq-blink {
      0%, 100% { transform: translateY(42px); }
      15%      { transform: translateY(0); }
      30%      { transform: translateY(42px); }
      55%      { transform: translateY(0); }
      75%      { transform: translateY(42px); }
    }

    /* ---- Sprout companions: slow twinkling stars (stay while hovered) ---- */
    svg .bsq-sstar, svg .bsq-sstar-p { transform-box: view-box; opacity: 0; }
    .bsq-t-cloud.bsq-on ~ svg .bsq-sstar   { animation: bsq-star-in .8s ease-out var(--d) 1 both; }
    .bsq-t-cloud.bsq-on ~ svg .bsq-sstar-p { animation: bsq-slow-twinkle 3.6s ease-in-out var(--d) infinite; }
    @keyframes bsq-star-in { from { opacity: 0; transform: scale(0); } to { opacity: 1; transform: scale(1); } }
    @keyframes bsq-slow-twinkle {
      0%, 100% { opacity: 1;   transform: scale(1)   rotate(0deg); }
      50%      { opacity: .3;  transform: scale(.65) rotate(25deg); }
    }

    @media (prefers-reduced-motion: reduce) {
      .bsq svg *, .bsq-t-code { animation: none !important; }
    }
  `;