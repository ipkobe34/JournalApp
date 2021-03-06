import React from 'react';

const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            
            <div 
                className="journal__entry-picture"
                style={{ 
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://t1.ea.ltmcdn.com/es/images/2/1/9/nombres_para_perros_pug_23912_600_square.jpg)'
                 }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>


        </div>
    )
}

export default JournalEntry
