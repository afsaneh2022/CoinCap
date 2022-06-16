//  show k for number>999

function kilo(num){
    num=num/1000;
     return num;
   }
//  show m for number>999999

function milion(num){
    num=num/1000000;
     return num;
   }

//    show b for number>999999999 
  function bilion(num){
   num=num/1000000000;
   return num
   }
   
//  show t for number>999999999999

 function trilion(num){
    num=num/1000000000000;
     return num;
   }
//   round  double number until 2 digit
  function round(x) {
    if ( x>0 && x<.01){
        return Number.parseFloat(x).toFixed(7);
    }else if( x>0 && x<.1) {return Number.parseFloat(x).toFixed(3);}
    else{
        return Number.parseFloat(x).toFixed(2);
        }
  }

//   separated number 3 digit  

  function separate(x) 
  { number=x;
  number=round(number);
  let snumber=String(number);
   number+= '';
   number= number.replace(',', '');
  x = number.split('.');
  y = x[0];
  z= x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(y))
  y= y.replace(rgx, '$1' + ',' + '$2');
  return y+ z ;
  }
   //   separated number 3 digit  And symbol
  function separate_symbol(big_number)
  {  let str="";
        number=big_number;
        if (number>999 &&  number<=999999){
            number=kilo(number) ;
            str="k";
            }
        if (number>999999 &&  number<=999999999){
            number=milion(number) ;
            str="m";
            }
            else if(number>999999999 &&  number<=999999999999){
                number=bilion(number);
                str="b";
            }else if(number>999999999999){
            number=bilion(number);
                str="t";
            }
    number=round(number);
    let snumber=String(number);
    number+= '';
    number= number.replace(',', '');
    x = number.split('.');
    y = x[0];
    z= x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
    y= y.replace(rgx, '$1' + ',' + '$2');
    return y+ z + str;
  }
 
