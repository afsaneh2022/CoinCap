
let fech_exchanges =[];

let table_body=document.querySelector(".tbody");

//  Rendering  coin page 

function render_exchanges(exchange){
//     each row 
    let row =document.createElement("div") ; 
        row.classList.add("trow");
        row.classList.add("links");
//   Rank 
    let rank=document.createElement("a");
        rank.classList.add("trow-align");
        rank.setAttribute("href","#");
        rank.textContent= exchange.rank;
   
//   Name  & Logo
    let base=document.createElement("a");
        base.classList.add("trow-align2");
        base.setAttribute("href","#");
        base.textContent=exchange.name;

//  Trading Pairs
    let Trading_pairs=document.createElement("a");
        Trading_pairs.classList.add("trow-align");
        Trading_pairs.setAttribute("href","#");
        Trading_pairs.textContent= separate(exchange.tradingPairs);
  
//   Top Pair
    let Top_Pair=document.createElement("a");
        Top_Pair.classList.add("trow-align");
        Top_Pair.setAttribute("href","#");
        Top_Pair.textContent= "BTC/USTD";
//  Volume (24Hr)
let  Volume24=document.createElement("a");
         Volume24.classList.add("trow-align");
         Volume24.setAttribute("href","#");
         Volume24.textContent= separate_symbol(exchange.volumeUsd);
//Total (%)	
let  Total=document.createElement("a");
         Total.classList.add("trow-align");
         Total.setAttribute("href","#");
         Total.textContent=separate( exchange.percentTotalVolume);

// Status
let  Status=document.createElement("a");
         Status.classList.add("trow-align");
         Status.setAttribute("href","#");
let status_circle=document.createElement("div");
    status_circle.classList.add("circle");

    let status_true=exchange.socket;
         if (status_true==true) {
            status_circle.classList.add("circle-green");
         }else 
         if (status_true==false) 
         {status_circle.classList.add("circle-red"); 
        } ;
         

// Append Childe to row 

    row.appendChild(rank);
    row.appendChild(base);
    row.appendChild(Trading_pairs);
    row.appendChild(Top_Pair);
    row.appendChild(Volume24);
    row.appendChild(Total);
    Status.appendChild(status_circle)
    row.appendChild(Status);
    table_body.appendChild(row);
   
 }


//   fech   data from asset for coin page 
async function get_exchanges(){
let respons=await fetch("https://api.coincap.io/v2/exchanges");
let json = await respons.json();
return json;
}
get_exchanges().then(function(json){
   let list=json.data ;
   console.log(list);
   list.forEach(element => {
    render_exchanges(element);
      
   });
});


