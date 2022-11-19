import React from 'react'

function Section({children}) {
    return (
        <section class="probootstrap-section">
            <div class="container">
                {children}
            </div>
        </section>
    )
}

export default Section