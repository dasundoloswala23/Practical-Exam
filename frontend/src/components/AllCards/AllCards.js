import React,{useEffect, useState} from 'react'
import {useLocation } from 'react-router-dom';
import './AllCards.css'
import axios from 'axios'


function AllCards() {
  const [cards, setCards] = useState([])
  const location = useLocation()


    async function getAllCard() {
      axios.get(`http://localhost:8070/card`).then((res) => {
        setCards(res.data)  
      }).catch((error) => {
        alert("Failed to fetch All Cards")
      })
    }
    getAllCard();

    return (
        <div className="container">
          <div className="row">
              <div className="col-4">
                <div className="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>All Cards</h2>
                </div>
              </div>
              <div className="col-3">
              </div>
              <div className="col-5">
          </div>
        </div>
        <div className="cardGrid"  > 
          
          {cards.map((Card,key)=>( 
                <div key={key}> 
                    <div className="detailCard" >
                        <div className="p-3">
                            <h7>{Card.name}</h7>
                            <h6>{Card.date}</h6>
                            <h7>{Card.description}</h7>
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