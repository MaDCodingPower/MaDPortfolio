import React from 'react';
import pika from './assets/pikachu-running.gif'

export default function NavTabs () {
    return (
        <footer>
            <img src={pika} alt="pikachu running gif" class="footerImage"/>
            <div>MaDCodingPowered Website</div>
            <img src={pika} alt="pikachu running gif" class="footerImage"/>
        </footer>
    )
}
