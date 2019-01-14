import React from 'react'

import ResumeSection from './ResumeSection'

const Resume = () => {
    return (
        <div>
            <h1 className="sectionTitle">RESUME</h1>
            <div id="resumePaper">
                <ResumeSection sectionTitle="EDUCATION">
                    
                </ResumeSection>
                <ResumeSection sectionTitle="EXPERIENCE">
                </ResumeSection>
            </div>
        </div>
    )
}

export default Resume;