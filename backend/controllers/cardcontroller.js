const Card  = require("../models/card");

//add new Card
exports.addCard = async (req, res) => {
 
  //constant variables for the attributes
  const {name,parentCard, description, date,role,languages} = req.body;

  try {
    const tempCard = await Card.findOne({parentCard});

    const card = await Card.create({name, parentCard, description, date, role, languages});

    const updateCard = {parentCard: card._id}

    await Card.findByIdAndUpdate(tempCard._id, updateCard);

    //success message
    res.status(200).json({success: true,message: "Card added"})
    
  }catch(error){
    //error message
    res.status(500).json({success: false, message: error.message})
  }
}

//view Card
exports.viewAllCard = async (req, res) => { 
 
    //calling Card model
    Card.find().then((cards) => {

      let cardArray = [];

      const parentCard = cards.find(card => card.parentCard == null)
      cardArray.push(parentCard)
      cards.splice(cards.indexOf(parentCard),1)

      let parentId = parentCard._id;
      while(cards.length > 0){
        const child = cards.find(card => card.parentCard.equals(parentId))
       
        cardArray.push(child)
        cards.splice(cards.indexOf(child),1)
        parentId = child._id
      }

      res.status(200).json(cardArray)
    }).catch((error) => {
      res.status(500).json({ message: "Error with fetching Card", error: error.message });
    })
  }