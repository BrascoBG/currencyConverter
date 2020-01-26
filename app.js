function currencyConvert([arg1,arg2]){
  let amount = parseInt(arg1);
  let to = arg2.toLowerCase();
  let sum;

  if(to == "usd"){
    sum = amount * 1.64;
    console.log(amount + " leva is " + sum + " " + to);
  }
  else if(to == "eur"){
    sum = amount * 1.95;
    console.log(amount + " leva is " + sum + " " + to);
  }
  else if(to == "gbp"){
    sum = amount * 2.22;
    console.log(amount + " leva is " + sum + " " + to);
  }
}

currencyConvert([1,'gbp']);
