
//  --------------------------------------
 
 let params = new URLSearchParams(document.location.search);

 let coin_name = params.get("coin");

 console.log(coin_name);
function coin_url(name) {
  return `https://api.coincap.io/v2/assets/${name}/history?interval=d1`;
}


function coin_dtl(name) {
  return `https://api.coincap.io/v2/assets/${name}`;
}


async function get_coin_dtl(){
  let dtl=coin_dtl(coin_name);
  let respons=await fetch(dtl);
  let json=await respons.json();

  let data = json.data;
  return data;
}

get_coin_dtl().then( (element)=>{
  let valu= element;

  render_coin_dtl(valu);
});

// --------------------------------

function render_coin_dtl(asset){
  
  //   Rank 
      let rank=document.querySelector(".details_coins_rank .green-box h1");
          rank.textContent= asset.rank;
      let base=document.querySelector(".details_coins_price h1");
        
         let coin_dt=asset.name+ "(" +asset.symbol + ")";
         base.textContent=coin_dt;
        
      let  price=document.querySelector(".details_coins_price_down  h2");
           price.textContent="$"+round(asset.priceUsd);
        
        
      let  percent=document.querySelector(".details_coins_price_down  h3");
            percent.textContent=round(asset.changePercent24Hr);
      

      let market=document.querySelector(".market-m");
          market.textContent="$"+separate_symbol(asset.marketCapUsd);

      let Volume=document.querySelector(".volume-coin");
        Volume.textContent="$"+separate_symbol(asset.volumeUsd24Hr);
      

        let suply=document.querySelector(".Supply");
            suply.textContent=separate_symbol(asset.supply)+" "+ asset.symbol;
      
        let image_logo=document.querySelector(".chat-logo-img");
        
        let img_str="";
        img_str=asset.symbol.toLowerCase();
        let image_name="https://assets.coincap.io/assets/icons/"+img_str+"@2x.png";
        image_logo.setAttribute("src",image_name);

      let head_name=document.querySelector(".head-chart-coin-name");
          head_name.textContent=asset.name;
        


    }

  
// --------------------------------


async function get_coin() {
  let url = coin_url(coin_name);
  let respons = await fetch(url);
  let json = await respons.json();

  let data = json.data;

  let yValues = [];
  let xValues = [];

  data.forEach((item) => {
    yValues.push(item.priceUsd);
    xValues.push(item.time);
  });

  return {
    x: xValues,
    y: yValues,
  };
}

// ---  render CoinData to Page -----

get_coin().then(function (values) {
  new Chart("myChart", {
    type: "bar",
    data: {
      labels: values.x,
      datasets: [
        {
          backgroundColor: "rgba(238,130,238,0.5)",
          borderColor: "rgba(255,0,0,1)",
          data: values.y,
        },
      ],
    },
    options: { Values: values.y },
  });
});
