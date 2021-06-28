import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";
import CreateArea from "./createArea";

//"Arrow '=>' " functions has made it simpler
// function createNotes(noteItems){
//     return <Note 
//         key={noteItems.key}
//         title={noteItems.title}
//         content={noteItems.content}
//     />
// }


// function App(){
//     return <div>
//         <Header />
//       {notes.map(noteItem =>
//         <Note 
//             key={noteItem.key}
//             title={noteItem.title}
//             content={noteItem.content}
//         />
// )}
//         <Footer />
//     </div>
// };

//final part.all from createArea component and app.
function App() {
    const [notes, setNotes]=useState([]);
    //newNote is received from creatArea's submitNote function.
    function addNote(newNote){
       setNotes(prevNotes =>{
           //spread operator here adds new notes after previous notes in array,
           //which is empty array declared in useState
       return [...prevNotes,newNote];


       });

    }
    function deleteNote(id){
        setNotes(prevNotes=>{
           return prevNotes.filter((noteItem,index)=>{
                return index !==id;
            });
        });
    }

    return (
      <div>
        <Header />
        <CreateArea onAdd={addNote}   />
        {notes.map((noteItem, index) => {
            return <Note 
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote} 
            />;
        })}
        <Footer />
      </div>
    );
  }

export default App;