import React from 'react';

const TerminalEntry = (props) => {
    return (
        <div id="TerminalEntrySectionContainer">
            <ul>
                <li><code id="TerminalEntrySection"> > David.{props.section} :</code></li>
                <li><code id="TerminalEntrySectionDetails">{'=>'} {props.children}</code></li>
            </ul>
        </div>
    );
}

export default TerminalEntry;