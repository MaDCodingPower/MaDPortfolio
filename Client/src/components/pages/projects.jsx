import React from 'react';
import randomMovie from '../assets/RandomMovie.PNG';
import dailyPlanner from '../assets/DailyPlanner.PNG';
import buttget from '../assets/buttget.PNG';
import randumbizer from '../assets/randumbizer.PNG'

export default function Project () {
    return (
        <div>
        <h3 id="projectImgScroll">Projects (More to come soon!)</h3>
        <section class="sectionHeader projects">
            <a href="https://reversedentistry.github.io/Random-Movie-Selector/" class="projectImgCard" target="_blank" rel="noreferrer">
                <img src={randomMovie} alt="Random Movie Selector Preview" class="projectImg"/>
                <div class="cardLabel">IMDB Random Movie Generator!</div>
            </a>
            <a href="https://MaDCodingPower.github.io/DailyPlannerWeek5/" class="projectImgCard" target="_blank" rel="noreferrer">
                <img src={dailyPlanner} alt="Daily Planner Preview" class="projectImg"/>
                <div class="cardLabel">Daily Planner with Local Storage!</div>
            </a>
        </section> 
        <section class="sectionHeader projects">
            <a href="https://the-buttget.herokuapp.com/" class="projectImgCard" target="_blank" rel="noreferrer">
                <img src={buttget} alt="Budgeting App" class="projectImg"/>
                <div class="cardLabel">Financial Budgetting Application!</div>
            </a>
            <a href="https://the-randumbizer.herokuapp.com/" class="projectImgCard" target="_blank" rel="noreferrer">
                <img src={randumbizer} alt="Random List Selector" class="projectImg"/>
                <div class="cardLabel">Random List Decision Maker!</div>
            </a>
        </section> 
        </div>
    );
};