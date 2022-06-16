

let coin_site="https://api.coincap.io/v2/assets/bitcoin/history?interval=d1";
let fech_coin=[];
async function get_coin(){
    let respons=await fetch(coin_site);
    let json = await respons.json();
    return json;
    }
    
    // ---  render CoinData to Page -----
let xValues =[];
let yValues=[];
    get_coin().then(function(json){
      
         let list=json.data ;
    for (let i=0 ; i<5 ; i++){
        xValues[i]=i;
        yValues[i]=round(list[i].priceUsd);
    }

        //  list.forEach(element => {
        //  fech_coin[i]=element;
        //  xValues[i]=i;
        //  yValues[i]=round(element.priceUsd);
        //  i++;
       
        // });
     
     });

     console.log(xValues)  ;
     console.log(yValues);
  console.log(yValues[1])  ;

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: "rgba(238,130,238,0.5)",
      borderColor: "rgba(255,0,0,1)",
      data: yValues
    }]
  },
  options:{xValues}
});
