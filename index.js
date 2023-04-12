const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();

    const paragraphs = document.getElementsByTagName("p");


    for (let i = 0; i < paragraphs.length; i++) {
        const text = paragraphs[i].textContent.toLowerCase();

        if (text.includes(searchTerm)) {
            paragraphs[i].scrollIntoView({
                block: 'center'
            });
            paragraphs[i].style.textDecoration = "underline";
            setTimeout(() => {
                paragraphs[i].style.textDecoration = "none";
            }, 2500);
            break;
        }
    }
});

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // prevent form submission
      searchButton.click(); // simulate a click on the search button
    }
  });


var countdown = new Date("July 1, 2025 14:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdown - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d" + "&nbsp"  +  hours + "h" + "&nbsp"  +  minutes + "m" + "&nbsp"  +  seconds + "s";

    if(distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Meri ksm abhi call kr 🥹 "
    }
}, 1000);

// functions
  

function openPopup() {
    document.getElementById("text").classList.add("visible");
    document.getElementById("body").classList.add("visible");
    
}   

function openPopup1() {
    document.getElementById("text1").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup2() {
    document.getElementById("text2").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup3() {
    document.getElementById("text3").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup4() {
    document.getElementById("text4").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup5() {
    document.getElementById("text5").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup6() {
    document.getElementById("text6").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup7() {
    document.getElementById("text7").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup8() {
    document.getElementById("text8").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup9() {
    document.getElementById("text9").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup10() {
    document.getElementById("text10").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup11() {
    document.getElementById("text11").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup12() {
    document.getElementById("text12").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup13() {
    document.getElementById("text13").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup14() {
    document.getElementById("text14").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup15() {
    document.getElementById("text15").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup16() {
    document.getElementById("text16").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup17() {
    document.getElementById("text17").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup18() {
    document.getElementById("text18").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup19() {
    document.getElementById("text19").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup20() {
    document.getElementById("text20").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup21() {
    document.getElementById("text21").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup22() {
    document.getElementById("text22").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup23() {
    document.getElementById("text23").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup24() {
    document.getElementById("text24").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup25() {
    document.getElementById("text25").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup26() {
    document.getElementById("text26").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup27() {
    document.getElementById("text27").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup28() {
    document.getElementById("text28").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup29() {
    document.getElementById("text29").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup30() {
    document.getElementById("text30").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup31() {
    document.getElementById("text31").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup32() {
    document.getElementById("text32").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup33() {
    document.getElementById("text33").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup34() {
    document.getElementById("text34").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup35() {
    document.getElementById("text35").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup36() {
    document.getElementById("text36").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup37() {
    document.getElementById("text37").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup38() {
    document.getElementById("text38").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup39() {
    document.getElementById("text39").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup40() {
    document.getElementById("text40").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup41() {
    document.getElementById("text41").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup42() {
    document.getElementById("text42").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup43() {
    document.getElementById("text43").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup44() {
    document.getElementById("text44").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   
function openPopup45() {
    document.getElementById("text45").classList.add("visible");
    document.getElementById("body").classList.add("visible");
   
}   


function closePopup() {
    document.getElementById("text").classList.remove("visible");
    document.getElementById("text1").classList.remove("visible");
    document.getElementById("text2").classList.remove("visible");
    document.getElementById("text3").classList.remove("visible");
    document.getElementById("text4").classList.remove("visible");
    document.getElementById("text5").classList.remove("visible");
    document.getElementById("text6").classList.remove("visible");
    document.getElementById("text7").classList.remove("visible");
    document.getElementById("text8").classList.remove("visible");
    document.getElementById("text9").classList.remove("visible");
    document.getElementById("text10").classList.remove("visible");
    document.getElementById("text11").classList.remove("visible");
        document.getElementById("text12").classList.remove("visible");
        var video = document.getElementById("video");
        video.pause();
        var video2 = document.getElementById("video2");
        video2.pause();
    document.getElementById("text13").classList.remove("visible");
    document.getElementById("text14").classList.remove("visible");
    document.getElementById("text15").classList.remove("visible");
    document.getElementById("text16").classList.remove("visible");
    document.getElementById("text17").classList.remove("visible");
    document.getElementById("text18").classList.remove("visible");
    document.getElementById("text19").classList.remove("visible");
    document.getElementById("text20").classList.remove("visible");
    document.getElementById("text21").classList.remove("visible");
    document.getElementById("text22").classList.remove("visible");
    document.getElementById("text23").classList.remove("visible");
    document.getElementById("text24").classList.remove("visible");
    document.getElementById("text25").classList.remove("visible");
    document.getElementById("text26").classList.remove("visible");
    document.getElementById("text27").classList.remove("visible");
    document.getElementById("text28").classList.remove("visible");
    document.getElementById("text29").classList.remove("visible");
    document.getElementById("text30").classList.remove("visible");
    document.getElementById("text31").classList.remove("visible");
    document.getElementById("text32").classList.remove("visible");
    document.getElementById("text33").classList.remove("visible");
    document.getElementById("text34").classList.remove("visible");
    document.getElementById("text35").classList.remove("visible");
    document.getElementById("text36").classList.remove("visible");
    document.getElementById("text37").classList.remove("visible");
    document.getElementById("text38").classList.remove("visible");
    document.getElementById("text39").classList.remove("visible");
    document.getElementById("text40").classList.remove("visible");
    document.getElementById("text41").classList.remove("visible");
    document.getElementById("text42").classList.remove("visible");
    document.getElementById("text43").classList.remove("visible");
    document.getElementById("text44").classList.remove("visible");
    document.getElementById("text45").classList.remove("visible");
    document.getElementById("body").classList.remove("visible");
}

// function of changing video to the next video 

function nextvideo() {
    document.getElementById("video2").classList.add("visiblevideo");
    document.getElementById("video").classList.add("visiblevideo");
    document.getElementById("nextvideo2").classList.add("hidden");
    document.getElementById("previousvideo").classList.add("hidden");
    var video = document.getElementById("video");
        video.pause();

}

function previousvideo() {
    document.getElementById("video2").classList.remove("visiblevideo");
    document.getElementById("video").classList.remove("visiblevideo");
    document.getElementById("nextvideo2").classList.remove("hidden");
    document.getElementById("previousvideo").classList.remove("hidden");
    var video2 = document.getElementById("video2");
        video2.pause();
}



// function of changing image to next image 

function nextimage() {
    document.getElementById("pic2").classList.add("visiblepic2")
    document.getElementById("firstimg").classList.add("visiblepic2")
    document.getElementById("next").classList.add("hidden")
    document.getElementById("previousimg").classList.add("hidden")
    document.getElementById("pic3next").classList.add("visiblepic3")
    
}

function previousimg() {
    document.getElementById("pic2").classList.remove("visiblepic2")
    document.getElementById("firstimg").classList.remove("visiblepic2")
    document.getElementById("next").classList.remove("hidden")
    document.getElementById("previousimg").classList.remove("hidden")
    document.getElementById("pic3next").classList.remove("visiblepic3")

}

// image3

function pic3() {
    document.getElementById("pic3").classList.add("visiblepic3");
    document.getElementById("pic2").classList.add("visiblepic3");
    document.getElementById("pic3previous").classList.add("visiblepic3")
    document.getElementById("pic3next").classList.add("hidden")
    document.getElementById("pic4next").classList.add("visiblepic4")

}

function pic2(){
    document.getElementById("pic3").classList.remove("visiblepic3");
    document.getElementById("pic2").classList.remove("visiblepic3");
    document.getElementById("pic3previous").classList.remove("visiblepic3")
    document.getElementById("pic3next").classList.remove("hidden")
    document.getElementById("pic4next").classList.remove("visiblepic4");
}

// image4

function pic4(){
    document.getElementById("pic4").classList.add("visiblepic4");
    document.getElementById("pic3").classList.add("visiblepic4");
    document.getElementById("pic4previous").classList.add("visiblepic4");
    document.getElementById("pic4next").classList.add("hidden");
    document.getElementById("pic5next").classList.add("visiblepic5");
}

function pic3previous(){
    document.getElementById("pic4").classList.remove("visiblepic4");
    document.getElementById("pic3").classList.remove("visiblepic4");
    document.getElementById("pic4previous").classList.remove("visiblepic4");
    document.getElementById("pic4next").classList.remove("hidden");
    document.getElementById("pic5next").classList.remove("visiblepic5");
}

// image5

function pic5(){
    document.getElementById("pic5").classList.add("visiblepic5");
    document.getElementById("pic4").classList.add("visiblepic5");
    document.getElementById("pic5previous").classList.add("visiblepic5");
    document.getElementById("pic5next").classList.add("hidden");
    document.getElementById("pic6next").classList.add("visiblepic6");
}

function pic4previous(){
    document.getElementById("pic5").classList.remove("visiblepic5");
    document.getElementById("pic4").classList.remove("visiblepic5");
    document.getElementById("pic5previous").classList.remove("visiblepic5");
    document.getElementById("pic5next").classList.remove("hidden");
    document.getElementById("pic6next").classList.remove("visiblepic6");
}

// image6

function pic6(){
    document.getElementById("pic6").classList.add("visiblepic6");
    document.getElementById("pic5").classList.add("visiblepic6");
    document.getElementById("pic6previous").classList.add("visiblepic6");
    document.getElementById("pic6next").classList.add("hidden");
    document.getElementById("pic7next").classList.add("visiblepic7");
}

function pic5previous(){
    document.getElementById("pic6").classList.remove("visiblepic6");
    document.getElementById("pic5").classList.remove("visiblepic6");
    document.getElementById("pic6previous").classList.remove("visiblepic6");
    document.getElementById("pic6next").classList.remove("hidden");
    document.getElementById("pic7next").classList.remove("visiblepic7");
}

// image7

function pic7(){
    document.getElementById("pic7").classList.add("visiblepic7");
    document.getElementById("pic6").classList.add("visiblepic7");
    document.getElementById("pic7previous").classList.add("visiblepic7");
    document.getElementById("pic7next").classList.add("hidden");
    document.getElementById("pic8next").classList.add("visiblepic8");
}

function pic6previous(){
    document.getElementById("pic7").classList.remove("visiblepic7");
    document.getElementById("pic6").classList.remove("visiblepic7");
    document.getElementById("pic7previous").classList.remove("visiblepic7");
    document.getElementById("pic7next").classList.remove("hidden");
    document.getElementById("pic8next").classList.remove("visiblepic8");
}

// image8

function pic8(){
    document.getElementById("pic8").classList.add("visiblepic8");
    document.getElementById("pic7").classList.add("visiblepic8");
    document.getElementById("pic8previous").classList.add("visiblepic8");
    document.getElementById("pic8next").classList.add("hidden");
    document.getElementById("pic9next").classList.add("visiblepic9");
}

function pic7previous(){
    document.getElementById("pic8").classList.remove("visiblepic8");
    document.getElementById("pic7").classList.remove("visiblepic8");
    document.getElementById("pic8previous").classList.remove("visiblepic8");
    document.getElementById("pic8next").classList.remove("hidden");
    document.getElementById("pic9next").classList.remove("visiblepic9");
}

// image9

function pic9(){
    document.getElementById("pic9").classList.add("visiblepic9");
    document.getElementById("pic8").classList.add("visiblepic9");
    document.getElementById("pic9previous").classList.add("visiblepic9");
    document.getElementById("pic9next").classList.add("hidden");
    document.getElementById("pic10next").classList.add("visiblepic10");
}

function pic8previous(){
    document.getElementById("pic9").classList.remove("visiblepic9");
    document.getElementById("pic8").classList.remove("visiblepic9");
    document.getElementById("pic9previous").classList.remove("visiblepic9");
    document.getElementById("pic9next").classList.remove("hidden");
    document.getElementById("pic10next").classList.remove("visiblepic10");
}

// image10

function pic10(){
    document.getElementById("pic10").classList.add("visiblepic10");
    document.getElementById("pic9").classList.add("visiblepic10");
    document.getElementById("pic10previous").classList.add("visiblepic10");
    document.getElementById("pic10next").classList.add("hidden");
    document.getElementById("pic11next").classList.add("visiblepic11");
}

function pic9previous(){
    document.getElementById("pic10").classList.remove("visiblepic10");
    document.getElementById("pic9").classList.remove("visiblepic10");
    document.getElementById("pic10previous").classList.remove("visiblepic10");
    document.getElementById("pic10next").classList.remove("hidden");
    document.getElementById("pic11next").classList.remove("visiblepic11");
}

// image11

function pic11(){
    document.getElementById("pic11").classList.add("visiblepic11");
    document.getElementById("pic10").classList.add("visiblepic11");
    document.getElementById("pic11previous").classList.add("visiblepic11");
    document.getElementById("pic11next").classList.add("hidden");
    document.getElementById("pic12next").classList.add("visiblepic12");
}

function pic10previous(){
    document.getElementById("pic11").classList.remove("visiblepic11");
    document.getElementById("pic10").classList.remove("visiblepic11");
    document.getElementById("pic11previous").classList.remove("visiblepic11");
    document.getElementById("pic11next").classList.remove("hidden");
    document.getElementById("pic12next").classList.remove("visiblepic12");
}

// image12

function pic12(){
    document.getElementById("pic12").classList.add("visiblepic12");
    document.getElementById("pic11").classList.add("visiblepic12");
    document.getElementById("pic12previous").classList.add("visiblepic12");
    document.getElementById("pic12next").classList.add("hidden");
    document.getElementById("pic13next").classList.add("visiblepic13");
}

function pic11previous(){
    document.getElementById("pic12").classList.remove("visiblepic12");
    document.getElementById("pic11").classList.remove("visiblepic12");
    document.getElementById("pic12previous").classList.remove("visiblepic12");
    document.getElementById("pic12next").classList.remove("hidden");
    document.getElementById("pic13next").classList.remove("visiblepic13");
}

// image13

function pic13(){
    document.getElementById("pic13").classList.add("visiblepic13");
    document.getElementById("pic12").classList.add("visiblepic13");
    document.getElementById("pic13previous").classList.add("visiblepic13");
    document.getElementById("pic13next").classList.add("hidden");
    document.getElementById("pic14next").classList.add("visiblepic14");
}

function pic12previous(){
    document.getElementById("pic13").classList.remove("visiblepic13");
    document.getElementById("pic12").classList.remove("visiblepic13");
    document.getElementById("pic13previous").classList.remove("visiblepic13");
    document.getElementById("pic13next").classList.remove("hidden");
    document.getElementById("pic14next").classList.remove("visiblepic14");
}

// image14

function pic14(){
    document.getElementById("pic14").classList.add("visiblepic14");
    document.getElementById("pic13").classList.add("visiblepic14");
    document.getElementById("pic14previous").classList.add("visiblepic14");
    document.getElementById("pic14next").classList.add("hidden");
    document.getElementById("pic15next").classList.add("visiblepic15");
}

function pic13previous(){
    document.getElementById("pic14").classList.remove("visiblepic14");
    document.getElementById("pic13").classList.remove("visiblepic14");
    document.getElementById("pic14previous").classList.remove("visiblepic14");
    document.getElementById("pic14next").classList.remove("hidden");
    document.getElementById("pic15next").classList.remove("visiblepic15");
}

// image15

function pic15(){
    document.getElementById("pic15").classList.add("visiblepic15");
    document.getElementById("pic14").classList.add("visiblepic15");
    document.getElementById("pic15previous").classList.add("visiblepic15");
    document.getElementById("pic15next").classList.add("hidden");
}

function pic14previous(){
    document.getElementById("pic15").classList.remove("visiblepic15");
    document.getElementById("pic14").classList.remove("visiblepic15");
    document.getElementById("pic15previous").classList.remove("visiblepic15");
    document.getElementById("pic15next").classList.remove("hidden");
}

// Functions ends 