import React, { useEffect } from 'react';
import styles from './StarryBackground.module.css';

const StarryBackground: React.FC = () => {
    useEffect(() => {
        const generateStarShadows = (count: number): string => {
            let shadows = '';
            for (let i = 0; i < count; i++) {
                const x = Math.floor(Math.random() * 2000);
                const y = Math.floor(Math.random() * 2000);
                shadows += `${x}px ${y}px #FFF${i < count - 1 ? ', ' : ''}`;
            }
            return shadows;
        };

        const smallStars = generateStarShadows(700);
        const mediumStars = generateStarShadows(200);
        const bigStars = generateStarShadows(100);

        document.documentElement.style.setProperty('--stars-small', smallStars);
        document.documentElement.style.setProperty('--stars-medium', mediumStars);
        document.documentElement.style.setProperty('--stars-big', bigStars);
    }, []);

    return (
        <div className={styles.starsContainer}>
            <div className={styles.stars}></div>
            <div className={styles.stars2}></div>
            <div className={styles.stars3}></div>
        </div>
    );
};

export default StarryBackground; 