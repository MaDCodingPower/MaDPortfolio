import React from 'react';
import randomMovie from '../assets/RandomMovie.PNG'
import dailyPlanner from '../assets/DailyPlanner.PNG'

export default function Project () {
    return (
        <div>
        <h3 id="projectImgScroll">Projects (More to come soon!)</h3>
        <section class="sectionHeader projects">
            <a href="https://reversedentistry.github.io/Random-Movie-Selector/" class="projectImgCard">
                <img src={randomMovie} alt="Random Movie Selector Preview" class="projectImg"/>
                <div class="cardLabel">IMDB Random Movie Generator!</div>
            </a>
            <a href="https://MaDCodingPower.github.io/DailyPlannerWeek5/" class="projectImgCard">
                <img src={dailyPlanner} alt="Daily Planner Preview" class="projectImg"/>
                <div class="cardLabel">Daily Planner with Local Storage!</div>
            </a>
        </section> 
        </div>
    );
};