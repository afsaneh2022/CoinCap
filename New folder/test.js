
let coin_site="https://api.coincap.io/v2/assets/bitcoin/history?interval=d1";
let fech_coin=[];
let xValues=[];
let yValues=[];
function show_data(asset){
    
        
          
          
    console.log(asset.date);


}



async function get_coin(){
    let respons=await fetch(coin_site);
    let json = await respons.json();
    return json;
    }
    
    // ---  render CoinData to Page -----
    
    get_coin().then(function(json){
        let i=0
        let list=json.data ;
        list.forEach(element => {
           show_data(element)
        fech_coin[i]=element;
        i++;
       });
       
    });

fech_coin.forEach(element => {
    show_data(element);
   });
   console.log(xValues[9]);

// new Chart("myChart", {
//   type: "line",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: "rgba(238,130,238,0.5)",
//       borderColor: "rgba(255,0,0,1)",
//       data: yValues
//     }]
//   },
//   options:{xValues}
// });
