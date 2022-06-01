import { useState } from 'react';
import axios from 'axios';
import './AddCard.css'
import Button from '@mui/material/Button';
import { OutlinedInput } from '@mui/material';
import { TextField } from '@mui/material';


function AddCard() {
    const[name,setName]=useState(""); 
    const[description,setDescription]=useState("");
    const[date,setDate]=useState("");

    async function add(event){
        event.preventDefault();
        const config = {
            headers: {
                "content-Type": "application/json"
            }
        };

        const newCard= {name,description,date}
        
        try {
            await axios.post("http://localhost:8070/card/add", newCard , config)
            alert("Card Added Successfully")  
            event.target.reset(); 
        }catch (error) {         
            alert("Card can't be Added");
        }
    }
    
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
                            <div className="col-md-8 mb-4">
                                <div className="form-name">
                                    <OutlinedInput
                                        type="text" id="name" placeholder="Name" 
                                        required fullWidth
                                        onChange={(e)=>setName(e.target.value)}
                                        inputProps={{style: {padding: 12}}} 
                                    />
                                </div>
                            </div>
                            <div> 
                                <div className="col-md-8 mb-4">
                                    <div className="form-date">
                                        <OutlinedInput 
                                            type="date" id="date" placeholder="Date" required fullWidth
                                            onChange={(e)=>setDate(e.target.value)}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>
                            </div>                       
                            <div className="col-md-10 mb-4">
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
                        </div>
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