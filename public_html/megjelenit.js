var index = 0;

var kep1 = {
    eleresiut:"kepek/1.jpg",
    cim:"1. képcím",
    leiras:"1. leírás"
};/*objektum, leírja egyetlen kép tulajdonságait*/

var kep2 = {
    eleresiut:"kepek/2.jpg",
    cim:"2. képcím",
    leiras:"2. leírás"
};

var kep3 = {
    eleresiut:"kepek/3.jpg",
    cim:"3. képcím",
    leiras:"3. leírás"
};

var kepTomb=[kep1, kep2, kep3];

$(function(){
    for (var i = 0; i < kepTomb.length; i++) {
        var elem='<div><h3></h3><img id="'+i+'" src="" alt=""/><p></p></div>';
        $("article").eq(0).append(elem);
    }
    
    var kepElemTomb=$("article div img");
    var cimElemTomb=$("article div h3");
    var leirasElemTomb=$("article div p");
    console.log(kepTomb);
    
    for (var i = 0; i < kepElemTomb.length; i++) {
        //kepElemTomb[i].src=kepTomb[i]["eleresiut"];
        kepElemTomb.eq(i).attr("src",kepTomb[i].eleresiut);
        cimElemTomb.eq(i).html(kepTomb[i].cim);
        leirasElemTomb.eq(i).html(kepTomb[i].leiras);
//        kepElemTomb[i].src=kepek[i];
//        cimElemTomb[i].innerHTML=kepCimek[i];
    }   
    
    //kell egy kattintás eseménykezelő a kisképre
    for (var i = 0; i < kepElemTomb.length; i++) {
        kepElemTomb.eq(i).click(kepCsere);
    }
    
    //ki kell cserélni a kattintott kép elérési útvonalára a nagykép elérése útvonalát
    
    $("#bal").eq(0).click(kepValtasBalra);
    
    $("#jobb").eq(0).click(kepValtasJobbra);
});

function showtime() {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
}

function kepCsere(){
    //itt cserélek képet
    var i = this.id;
    megjelenes(i);
}

function kepValtasBalra(){
//    $("#nagykepTarolo img")[0].src=kepTomb[index].eleresiut;
//    $("#nagykepTarolo h3")[0].innerHTML=kepTomb[index].cim;
//    $("#nagykepTarolo p")[0].innerHTML=kepTomb[index].leiras;
    megjelenes(index);
    index--;
    if(index<0){
        index=kepTomb.length-1;
    }
}
function kepValtasJobbra(){
//    $("#nagykepTarolo img")[0].src=kepTomb[index].eleresiut;
//    $("#nagykepTarolo h3")[0].innerHTML=kepTomb[index].cim;
//    $("#nagykepTarolo p")[0].innerHTML=kepTomb[index].leiras;
    megjelenes(index);
    index++;
    if(index>kepTomb.length-1){
        index=0;
    }
}

function megjelenes(x) {
    $("#nagykepTarolo img").fadeIn("slow");
    $("#nagykepTarolo img").attr("src",kepTomb[x].eleresiut);
    $("#nagykepTarolo img").fadeIn("slow");
    $("#nagykepTarolo h3").eq(0).html(kepTomb[x].cim);
    $("#nagykepTarolo p").eq(0).html(kepTomb[x].leiras);
}