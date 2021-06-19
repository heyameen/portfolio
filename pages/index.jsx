import React from 'react'

const Home = () => {
    return (
        <div>
            <span className="container text-6xl font-bold text-sentence">Hello</span>    
            <a href={process.env.HELP_APP_URL}>Google</a>        
        </div>
    )
}

export default Home;
