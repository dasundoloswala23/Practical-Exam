import { useState } from 'react';
import axios from 'axios';
import './AddCard.css'
import { InputLabel , Select , Input ,Chip , MenuItem} from '@mui/material';
import { OutlinedInput } from '@mui/material';
import { TextField } from '@mui/material';
import {useNavigate } from 'react-router-dom';


function AddCard() {
    const[name,setName]=useState("");
    const[parentCard,setParentCard]=useState("");
    const[description,setDescription]=useState("");
    const[date,setDate]=useState("");
    const[role,setRole]=useState("");
    const[languages,setLanguages]=useState([]);
    const navigate = useNavigate()

    async function add(event){
        event.preventDefault();
        const config = {
            headers: {
                "content-Type": "application/json"
            }
        };

        const newCard= {name,parentCard,description,date,role,languages}
        
        try {
            await axios.post("http://localhost:8070/card/add", newCard , config)
            alert("Card Added Successfully")  
            navigate(`/`)
        }catch (error) {         
            alert("Card can't be Added");
        }
    }
    const language = [
        'Sinhala', 'English', 'Tamil'
    ]

    const handleLanguageChange = (event) => {
        setLanguages(event.target.value);
    };
    
    return (
    <div className="container" align="center" >
        <div className="row">
            <div className="col-12">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>&nbsp;Add New Card</h2>
                </div>
            </div>
        </div>
        <br></br>
        <div className="create_card">
            <form onSubmit={add} className="addCard">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-xl-6 mb-3">
                                <div className="form-name">
                                    <OutlinedInput
                                        type="text" id="name" placeholder="Name" 
                                        required fullWidth
                                        onChange={(e)=>setName(e.target.value)}
                                        inputProps={{style: {padding: 12}}} 
                                    />
                                </div>
                            </div>
                            <div className="col-xl-6 mb-5">
                                <div className="form-name">
                                    <OutlinedInput
                                        type="text" id="name" placeholder="ParentID" 
                                        required fullWidth
                                        onChange={(e)=>setParentCard(e.target.value)}
                                        inputProps={{style: {padding: 12}}} 
                                    />
                                </div>
                            </div>
                             
                                <div className="col-xl-6 mb-5">
                                    <div className="form-date">
                                        <OutlinedInput 
                                            type="date" id="date" placeholder="Date" required fullWidth
                                            onChange={(e)=>setDate(e.target.value)}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>
                                                 
                           
                            <div className="col-xl-6 mb-4">
                                <div className="form-name">
                                    <OutlinedInput
                                        type="text" id="name" placeholder="Role" 
                                        required fullWidth
                                        onChange={(e)=>setRole(e.target.value)}
                                        inputProps={{style: {padding: 12}}} 
                                    />
                                </div>
                            </div>
                            <div className="col-md-8 mb-5">
                                <InputLabel id="demo-mutiple-chip-label">
                                    Languages
                                </InputLabel>
                                <Select
                                    id="demo-mutiple-chip"
                                    multiple fullWidth
                                    value={languages}
                                    onChange={handleLanguageChange}
                                    input={<Input id="select-multiple-chip"/>}
                                    renderValue={(selected) => (
                                        <div >
                                            {selected.map((value) => (
                                                <Chip key={value} label={value}  />
                                            ))}
                                        </div>
                                    )}
                                    >
                                    {language.map((language) => (
                                        <MenuItem key={language} value={language} >
                                            {language}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="col-md-10 mb-4 ">
                                <div className="form-description">
                                    <TextField
                                        multiline rows={3}
                                        id="description" placeholder="Description" 
                                        required fullWidth variant="outlined" 
                                        onChange={(e)=>setDescription(e.target.value)}
                                        inputProps={{style: {padding: 12}}}
                                    />
                                </div>
                            </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input className="form-submit-btn" type="submit" value="Add card" />
                        </div>
                    </div>
                </div>
            </form>            
        </div>                    
    </div>


        
    )
}

export default AddCard