// import React, { useEffect, useState } from 'react';

// const SplashScreen = ({ onComplete }) => {
//     const [displayedText, setDisplayedText] = useState('');
//     const [fadeOut, setFadeOut] = useState(false);

//     // ✅ Ensure fullText is hardcoded and correctly spelled
//     const fullText = 'ENABLED';
//     const typingSpeed = 100;

//     useEffect(() => {
//         let currentIndex = 0;

//         const typeNextChar = () => {
//             if (currentIndex < fullText.length) {
//                 const nextChar = fullText[currentIndex];
//                 setDisplayedText((prevText) => prevText + nextChar);
//                 currentIndex++;
//                 setTimeout(typeNextChar, typingSpeed);
//             } else {
//                 // After typing is done, fade out splash
//                 setTimeout(() => {
//                     setFadeOut(true);
//                     setTimeout(onComplete, 1000); // wait for fade animation
//                 }, 1000);
//             }
//         };

//         typeNextChar();
//     }, [onComplete]);

//     return (
//         <div
//             className={`fixed inset-0 bg-red-700 flex items-center justify-center z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'
//                 }`}
//         >
//             <h1 className="text-white text-5xl font-bold font-mono ">
//                 {displayedText}
//                 <span className="animate-pulse">|</span>
//             </h1>
//         </div>
//     );
// };

// export default SplashScreen;



import React, { useEffect, useState, useRef } from 'react';

const SplashScreen = ({ onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [fadeOut, setFadeOut] = useState(false);
    const started = useRef(false); // 🛡️ guard against double effect

    const fullText = 'ENABLED';
    const typingSpeed = 100;

    useEffect(() => {
        if (started.current) return;
        started.current = true;

        let currentIndex = 0;

        const typeNextChar = () => {
            if (currentIndex < fullText.length) {
                const nextChar = fullText[currentIndex];
                setDisplayedText((prevText) => prevText + nextChar);
                currentIndex++;
                setTimeout(typeNextChar, typingSpeed);
            } else {
                setTimeout(() => {
                    setFadeOut(true);
                    setTimeout(onComplete, 1000);
                }, 1000);
            }
        };

        typeNextChar();
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 bg-red-700 flex items-center justify-center z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <h1 className="text-white text-5xl font-bold font-mono">
                {displayedText}
                <span className="animate-pulse">|</span>
            </h1>
        </div>
    );
};

export default SplashScreen;
