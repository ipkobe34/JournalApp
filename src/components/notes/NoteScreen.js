import React from 'react';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off" 
                />

                <textarea
                    placeholder="what happened today"
                    className="notes__textarea"
                ></textarea>
                
                <div className="notes__image">
                    <img 
                        src="https://perro.shop/wp-content/uploads/pug.jpg" 
                        alt="JesseImagen" 
                    />
                </div>

            </div>

        </div>
    )
}

export default NoteScreen
