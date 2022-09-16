import React from 'react';
import matthewHead from '../assets/IMG_1414.jpg';
import shadowHead from '../assets/IMG_3891.jpg';

export default function About () {
    return (
        <div>
        <h3 id="aboutScroll">About Me</h3>
        <section class="sectionHeader aboutMe">
            <img src={matthewHead} alt="Matthew's Headshot" class="matthewHeadshot"/>
            <img src={shadowHead} alt="Matthews Pet dog" class="shadow"/>
            <p id="bio">My name is Matthew. I was born in Manchester, New York and when I was 8 years old moved to Indianapolis where I still live now.
                Currently, my occupation is serving and bartending at a fine-dining establishment. While it is a great job, I have long wished to change 
                careers into web development. So, I am taking a chance on me!
                I currently have little coding experience and am learning through the University of Washington Full stack bootcamp. I am already
                growing a deep passion for coding and web development, as I have always adored the process of problem solving. 
                In my free time, I love being outdoors and playing sports such as volleyball and soccer. I enjoy spending time with my puppy You
                should hover over my face for a surprise! The most important thing to me is my family, who has supported me through everything.
            </p>         
        </section>
        </div>
    );
};