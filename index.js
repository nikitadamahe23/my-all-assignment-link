let cards=[
    {
        image:"https://tse4.mm.bing.net/th?id=OIP.BT7LUFR3RaW01VT5z8rinQAAAA&pid=Api&P=0&w=300&h=300",
        value:1,
        status:"closed"
    },
    {
        image:"https://tse4.mm.bing.net/th?id=OIP.BT7LUFR3RaW01VT5z8rinQAAAA&pid=Api&P=0&w=300&h=300",
        value:1,
        status:"closed"
    },
    
    {
        image:"https://wallpaperaccess.com/full/3290092.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://wallpaperaccess.com/full/3290092.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://tse3.mm.bing.net/th?id=OIP.ws-dglxBQvjFCfntm25D2QHaO5&pid=Api&P=0&w=300&h=300",
        value:3,
        status:"closed"
    },
    {
        image:"https://tse3.mm.bing.net/th?id=OIP.ws-dglxBQvjFCfntm25D2QHaO5&pid=Api&P=0&w=300&h=300",
        value:3,
        status:"closed"
    },
    {
        image:"https://tse2.mm.bing.net/th?id=OIP.2vkSJGyTrKeLp5rzkJebqQHaPO&pid=Api&P=0&w=300&h=300",
        value:4,
        status:"closed"
    },
    {
        image:"https://tse2.mm.bing.net/th?id=OIP.2vkSJGyTrKeLp5rzkJebqQHaPO&pid=Api&P=0&w=300&h=300",
        value:4,
        status:"closed"
    },
    {
        image:"https://tse4.mm.bing.net/th?id=OIP.oD5RcylmotyOC_FX3DwBnQHaNK&pid=Api&P=0&w=300&h=300",
        value:5,
        status:"closed"
    },

    
   {
        image:"https://tse4.mm.bing.net/th?id=OIP.oD5RcylmotyOC_FX3DwBnQHaNK&pid=Api&P=0&w=300&h=300",
        value:5,
        status:"closed"
    }
]


//durnsten shuffle algo.(logic to shuffle cards)
  
let temp;

for(let i=cards.length-1;i>=0;i--){
   let j = Math.floor(Math.random()*(i+1));
   
    temp = cards[i];
    cards[i]= cards[j];
    cards[j]= temp;
}

let cardsCopy=cards;

function displayCards(data){
    
    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
           <div class="card" style="backgroung-image:url('${card.image}')">
              <div class="overlay ${card.status}" onclick="openCard(${index})">
              </div
           </div>

        
        `;
    });


  document.getElementById('cards').innerHTML=cardsString;



}




displayCards(cards);






let cardCount=1;
let val1=null , val=null;
let score=0;
function openCard(index){
    
    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;
         
            //reset
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            alert("game end");
            location.reload();

        }    

    }
 
  displayCards(cards);


}