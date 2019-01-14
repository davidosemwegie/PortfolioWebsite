import React from 'react';

import TerminalEntry from './TerminalEntry'

const Terminal = (props) => {
    return (
        <div>
            <h1 className="sectionTitle">HELLO, WORLD! I'M A DEVELOPER.</h1>
            <div id="TerminalWindow">
            <TerminalEntry section="education">"University Of British Columbia"</TerminalEntry>
            <TerminalEntry section="major">"Honours in Computer Science"</TerminalEntry>
            <TerminalEntry section="expectedGraduation">"June 2019"</TerminalEntry>
            <TerminalEntry section="intrests">["UI/UX", "Coding", "Photography", "Basketball"]</TerminalEntry>
            <TerminalEntry section="github">"<a target="_blank" href="https://github.com/davidosemwegie">@davidosemwegie</a>"</TerminalEntry>
            <TerminalEntry section="socialMedia">
            {'{'} 
            "Instagram": "<a target="_blank" href="https://www.instagram.com/osazi/">@osazi</a>",
            "LinkedIn": "<a target="_blank" href="https://www.linkedin.com/in/david-osemwegie-299314112/">David Osemwegie</a>",
            "Twitter": "<a target="_blank" href="https://twitter.com/osazi_">@osazi_</a>"
            
            {'}'}
            </TerminalEntry>
            <TerminalEntry section="email"><a href="mailto: dosemwegie@gmail.com">dosemwegie@gmail.com</a></TerminalEntry>
        </div>
        </div>
    );
}

export default Terminal;