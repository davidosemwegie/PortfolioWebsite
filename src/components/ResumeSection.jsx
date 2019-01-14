import React from 'react'

const ResumeSection = (props) => {
    return (
        <div>
            <h1 className="resumeSectionHeader">{props.sectionTitle}</h1>
            {props.children}
        </div>
    )
}

export default ResumeSection;