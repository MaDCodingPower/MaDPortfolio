import React from 'react';
import linkedInLogo from'../assets/LinkedIn.png';
import githubLogo from '../assets/Github.png';
import gmailLogo from '../assets/Gmail.png';
import phoneLogo from '../assets/phone.png'
import twitterLogo from '../assets/twitter.png'
import instagramLogo from '../assets/instagram.png'

export default function Contact () {
    return (
        <div>
            <h3 id="contactScroll">Contacts</h3>
            <section class="contact">
                <section class="contactGroup">
                    <a href="mailto:matthewdavis1372@gmail.com">
                        <img src={gmailLogo} alt="gmail logo" class="logos"/>
                    </a>
                    <a href="mailto:matthewdavis1372@gmail.com" class="contactLink">matthewdavis1372</a>
                </section>              
                <section class="contactGroup">
                    <a href="https://www.instagram.com/mashu_chashu/" target="_blank" rel="noreferrer">
                        <img src={instagramLogo} alt="instagram emblem" class="logos"/>
                    </a>
                    <a href="https://www.instagram.com/mashu_chashu/"  target="_blank" class="contactLink" rel="noreferrer">Mashu_Chashu</a>
                </section>                
                <section class="contactGroup">
                    <a href="tel:317-941-8538">
                        <img src={phoneLogo} href="317-941-8538" alt="phone" class="logos"/>
                    </a>
                    <a href="tel:317-941-8538" class="contactLink">317-941-8538</a>
                </section>                
                <section class="contactGroup">
                    <a href="https://twitter.com/MaDCodingPower"  target="_blank" rel="noreferrer">
                        <img src={twitterLogo} alt="twitter logo" class="logos"/>
                    </a>    
                    <a href="https://twitter.com/MaDCodingPower" target="_blank" class="contactLink" rel="noreferrer">MaDCodingPower</a>
                </section>
                <section class="contactGroup">
                    <a href="https://github.com/MaDCodingPower" target="_blank" rel="noreferrer">
                        <img src={githubLogo} alt="github logo" class="logos github"/>
                    </a>
                    <a href="https://github.com/MaDCodingPower" class="contactLink" target="_blank" rel="noreferrer">MaDCodingPower</a>
                </section>
                <section class="contactGroup">
                    <a href="https://www.linkedin.com/in/matthew-d-240494b6/" target="_blank" rel="noreferrer">
                        <img src={linkedInLogo} alt="Linked in logo" class="logos"/>
                    </a>    
                    <a href="https://www.linkedin.com/in/matthew-d-240494b6/" class="contactLink" target="_blank" rel="noreferrer">matthew_d</a>
                </section>
            </section>
        </div>
    );
};