var names=[
    "2. My Father (VIVEK RAGHAVENDRA)",
    "3. My Mother (SUSHMA VIVEK)",
    "4. Me (SAATVIK VIVEK)"
    ];
  var images=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnjeTodK4XxOrUEX471jP3DNq_Anp7Nse5Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbUSsCDCOPfiyOUmGkT1DuMRiyWSbeuaI-g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtY0C93K-8NUiTgeGObxdZqo33ql6EO52Ig&usqp=CAU"
  ];
  var i=0;
  function family(){
    document.getElementById("one").innerHTML=names[i];
    document.getElementById("family_img").src=images[i];
    i++;
    if(i==4){
      i=0;
    }}