import React,{useState, useEffect} from 'react'
import Button from './Button'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {FaUserPlus,FaUsers} from "react-icons/fa"
import {IoClose} from "react-icons/io5"
import {CgProfile} from "react-icons/cg"
import {BiDotsVerticalRounded} from "react-icons/bi"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./task.css"

const BigTask = ({form,onClose}) => {

  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty()
  );

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  
  const [showAllUsers, setShowAllUsers] = React.useState(false)
  const [showAddUsers, setShowAddUsers] = React.useState(false)
  const [showEditor, setShowEditor] = React.useState(false)
  const [startDate, setStartDate] = useState(new Date());

  return (

    <div style={{border:'1px solid black', width: '70%', margin:'auto', marginTop:'6vh',height: '800px'}}>
      {!showEditor && <div style={{display:'flex',padding:'2vh'}}>
        <Button
          fun={() => {setShowEditor(true)}}
          width_p={'15%'}
          marginesTop={'auto'}
          margines={'20px'}
          text={"Edytuj"} />
        <FaUserPlus onClick={()=>setShowAddUsers(!showAddUsers)} style={{fontSize:'4vh', margin:'10px', marginTop:'auto', marginBottom:'auto', width:'10%'}}/>
        <FaUsers onClick={()=>setShowAllUsers(!showAllUsers)} style={{fontSize:'4vh', margin:'10px', marginTop:'auto', marginBottom:'auto', width:'10%'}}/>
        <h1 style={{margin:'auto',marginRight:'10px', width:'100%'}}>Tytuł</h1>
        <h1 style={{margin:'auto',marginRight:'20px', width:'15%'}}>Data</h1>
         {form ==='tablica' && <IoClose onClick={onClose} style={{fontSize:'5vh', margin:'auto',marginRight:'20px', width:'10%'}}/>}
      </div>}
      
      {!showEditor && <div style={{display:'flex',maxHeight: '800px'}}>

        {showAllUsers &&<div style={{border: '1px solid black', margin: '25px'}}>
          <div style={{border: '1px solid black', width:'300px', margin: '10px',display:'flex'}}>
            <CgProfile style ={{fontSize:'4vh', margin: 'auto', marginLeft:'10px'}}/>
            <p style={{fontSize:'20px', fontWeight:'bold'}}>Nick</p>
            <BiDotsVerticalRounded style={{fontSize:'4vh', margin:'auto', marginRight:'10px'}}/>
          </div>
          <div style={{border: '1px solid black', width:'300px', margin: '10px',display:'flex'}}>
            <CgProfile style ={{fontSize:'4vh', margin: 'auto', marginLeft:'10px'}}/>
            <p style={{fontSize:'20px', fontWeight:'bold'}}>Nick</p>
            <BiDotsVerticalRounded style={{fontSize:'4vh', margin:'auto', marginRight:'10px'}}/>
          </div>
          <div style={{border: '1px solid black', width:'300px', margin: '10px',display:'flex'}}>
            <CgProfile style ={{fontSize:'4vh', margin: 'auto', marginLeft:'10px'}}/>
            <p style={{fontSize:'20px', fontWeight:'bold'}}>Nick</p>
            <BiDotsVerticalRounded style={{fontSize:'4vh', margin:'auto', marginRight:'10px'}}/>
          </div>
        </div>}

        {showAddUsers && <div style={{border: '1px solid black', padding:'5px', height: '200px', backgroundColor:'white', margin: '25px'}}>
          <input style={{width:'90%', fontSize:'20px'}}placeholder="Search"/>
          <div style={{border: '1px solid black', width:'300px', margin: '10px',display:'flex'}}>
            <CgProfile style ={{fontSize:'4vh', margin: 'auto', marginLeft:'10px'}}/>
            <p style={{fontSize:'20px', fontWeight:'bold'}}>Nick</p>
            <BiDotsVerticalRounded style={{fontSize:'4vh', margin:'auto', marginRight:'10px'}}/>
          </div>
        </div>}

        <div style={{padding:'5vh', textAlign:'justify', fontSize:'20px', overflowY: 'scroll',maxHeight: '600px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Egestas egestas fringilla phasellus faucibus scelerisque. Augue lacus viverra vitae congue eu consequat ac. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Morbi blandit cursus risus at ultrices. Iaculis urna id volutpat lacus. Orci sagittis eu volutpat odio. Neque viverra justo nec ultrices dui. Sit amet nulla facilisi morbi tempus. Diam phasellus vestibulum lorem sed risus ultricies tristique. Ultrices eros in cursus turpis massa tincidunt. Dictum at tempor commodo ullamcorper a. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Nulla facilisi cras fermentum odio eu feugiat. Amet justo donec enim diam vulputate ut pharetra sit. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Ultrices neque ornare aenean euismod elementum nisi. Placerat vestibulum lectus mauris ultrices eros in. Facilisis volutpat est velit egestas dui id ornare arcu. Elementum integer enim neque volutpat ac tincidunt vitae semper. Semper risus in hendrerit gravida rutrum quisque non tellus. Arcu dictum varius duis at consectetur lorem donec massa. Ipsum dolor sit amet consectetur. Scelerisque viverra mauris in aliquam sem fringilla ut. Lacus laoreet non curabitur gravida arcu ac tortor. Lacus suspendisse faucibus interdum posuere lorem ipsum.
        </div>
      </div>}

      { 
        showEditor && <div>
        <div style={{display:'flex'}}>
          <Button
            fun={() => {setShowEditor(false)}}
            width_p={'25%'}
            marginesTop={'15px'}
            margines={'50px'}
            text={"Cofnij"}
          />
          <input style={{fontSize:'30px', width:'100%',margin:'20px'}}placeholder="Tytuł"/>
          <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
          <input 
          style={{fontSize:'20px', height:'30px', margin:'auto', marginRight:'50px', width:'50px', textAlign:'center'}}
            type="number" 
            name="age" 
        />
        </div>
        <div style={{ border: "1px solid black", padding: '2px', minHeight: '600px', width:'90%', margin:'auto'}}>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>
        <input style={{fontSize:'20px', width:'90%', marginTop:'10px'}}placeholder="Tagi"/>
        <Button
          fun={() => {setShowEditor(false)}}
          width_p={'15%'}
          marginesTop={'15px'}
          margines={'auto'}
          text={"Edytuj"}
        />
      </div>
      }
    </div>
  )
}

export default BigTask