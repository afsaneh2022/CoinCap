
let fech_coin =[];
var click_link="#";
var coin_click_name="";
let table_body=document.querySelector(".tbody");

//  Rendering  coin page 

function render_coin(asset){
//     each row 
    let row =document.createElement("div") ; 
        row.classList.add("trow");
        row.classList.add("links");
//   Rank 
    let rank=document.createElement("a");
        rank.classList.add("trow-align");
        rank.setAttribute("href","#");
        rank.textContent= asset.rank;
   
//   Name  & Logo
    let base=document.createElement("a");
        base.classList.add("logo-name");
        base.classList.add("trow-align2");
        coin_click_name=asset.name.toLowerCase();
        base.setAttribute("href",`/coinsdetail.html?coin=${coin_click_name}`);
       
    let image_logo=document.createElement("img");
        image_logo.classList.add("logo");
        //let image_name="./logo/"+asset.symbol+"@2x.png";
        let img_str="";
        img_str=asset.symbol.toLowerCase();
        let image_name="https://assets.coincap.io/assets/icons/"+img_str+"@2x.png";
        image_logo.setAttribute("src",image_name);

    let base_id_span=document.createElement("span");
        base_id_span.textContent=asset.name;
        
      
    let base_id_p=document.createElement("p");    
        base_id_p.textContent=asset.symbol;

//   Price 
    let price=document.createElement("a");
        price.classList.add("trow-align");
        price.setAttribute("href","#");
        price.textContent= separate(asset.priceUsd);
  
//   Marketcap
    let market_cap=document.createElement("a");
        market_cap.classList.add("trow-align");
        market_cap.setAttribute("href","#");
        market_cap.textContent= separate_symbol(asset.marketCapUsd);
// VWAP(24HR)
        let  VWAP=document.createElement("a");
                VWAP.classList.add("trow-align");
                VWAP.setAttribute("href","#");
                VWAP.textContent= separate(asset.vwap24Hr);
    //Suplly
    let  Suplly=document.createElement("a");
            Suplly.classList.add("trow-align");
            Suplly.setAttribute("href","#");
            Suplly.textContent=separate_symbol( asset.supply);
    // Volume(24hr)
    let  Volume=document.createElement("a");
            Volume.classList.add("trow-align");
            Volume.setAttribute("href","#");
            Volume.textContent= separate_symbol(asset.volumeUsd24Hr);
    // Change (24hr) 
    let  Change=document.createElement("a");
            Change.classList.add("trow-align");
            Change.setAttribute("href","#");
            
    let  Change_span=document.createElement("span");

        let percent=asset.changePercent24Hr;
        if (percent<=0) {
            Change_span.classList.add("text-red");
        }else {Change_span.classList.add("text-green"); } ;
        Change_span.textContent=separate( asset.changePercent24Hr);

// Append Childe to row 

        row.appendChild(rank);
        base_id_span.appendChild(base_id_p);
        base.appendChild(image_logo);
        base.appendChild(base_id_span);
        row.appendChild(base);
        row.appendChild(price);
        row.appendChild(market_cap);
        row.appendChild(VWAP);
        row.appendChild(Suplly);
        row.appendChild(Volume);
        Change.appendChild(Change_span);
        row.appendChild(Change);
    
        table_body.appendChild(row);
    
 }


// ---  fech   data from asset for coin page -----

async function get_coin(){
let respons=await fetch("https://api.coincap.io/v2/assets");
let json = await respons.json();
return json;
}

// ---  render CoinData to Page -----

get_coin().then(function(json){
    let i=0
    let list=json.data ;
    list.forEach(element => {
    render_coin(element);
    fech_coin[i]=element;
    i++;
   });
   
});
// ----------------Reset Page -------
let reset= document.querySelector(".tbody");
 function reset_page(){
   reset.innerHTML="";
 }



// -----------------Sort Data ------

let click_rank=document.querySelector(".asending");
click_rank.addEventListener("click", function sort_rank( ){
   
    fech_coin.sort((Item1, Item2) => Item2.rank- Item1.rank);
    reset_page() 
    fech_coin.forEach(element => {
        render_coin(element);
 
       });

  });

 let click_row_coin=document.querySelector(".trow-align") ;

 click_row_coin.addEventListener("click",function coin_details(){
    click_link=`https://api.coincap.io/v2/assets/${coin_click_name}/history?interval=d1`

    console.log("horaaaa");
    console.log(click_link);
 });


//  let open_btn = document.querySelector(".open");
//       let close_btn = document.querySelector(".close");
//       let modal = document.querySelector(".modal");

//       function toggle_modal() {
//         modal.classList.toggle("show");
//       }

//       open_btn.addEventListener("click", toggle_modal);
//       close_btn.addEventListener("click", toggle_modal);

