import React,{useEffect, useState} from 'react'
import {useNavigate,useLocation } from 'react-router-dom';
import {blue} from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import './AllCards.css'
import axios from 'axios'


function AllCards() {
  
  const [cards, setCards] = useState([])
  const navigate = useNavigate()

    async function getAllProgress() {
      axios.get(`http://localhost:8070/card`).then((res) => {
        setCards(res.data)  
      }).catch((error) => {
        alert("Failed to fetch Cards Refresh ")
      })
    };
      getAllProgress();

      function addCard(){
        navigate(`/addCard`)
      }
    


    return (
      <div className="container">
        <div>
        <div className="row">
              <div className="col-4">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>All Cards</h2>
                </div>
              </div>
              <div className="col-3"></div>
              
              <div className="col-5">
                <div> 
                  <Button  className="mx-2 cardBtn" style={{backgroundColor:blue[400],color:'white'}} onClick={()=>addCard()}>
                    Add Card <AddIcon/>
                  </Button>
                </div>
              </div>
          </div>
        </div>
        <div className="detailGrid" > 
          {cards.map((Card,key)=>( 
                <div key={key}> 
                    <div className="detailCard" >
                        <div className="p-3">
                            <h2>{Card.name}</h2>
                            <h6>Parent Card : {Card.parentCard}</h6>
                            <h6>Time : {Card.date}</h6>
                            <h6>Role : {Card.role}</h6>
                            <h6>Languages   : {Card.languages}</h6>
                            <h7>Description : <br></br>{Card.description}</h7>
                            <div align="right">
                            </div>
                        </div>
                    </div>
                </div>
          ))} 
        </div>
      </div>
        
    )      
}

export default AllCards