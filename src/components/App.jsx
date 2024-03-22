import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App () {
    return (
        <div>
        <Header/>
        {notes.map((noteData) =>
        <Note
        id = {noteData.id}
        key= {noteData.id}
        title={noteData.title}
        content={noteData.content}
        />
)}
        <Footer/>
        </div>
    )
}

export default App;