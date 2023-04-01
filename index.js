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


// function of changing image to next image 

function nextimage() {
    document.getElementById("pic2").classList.add("visiblepic2")
    document.getElementById("firstimg").classList.add("visiblepic2")
    document.getElementById("next").classList.add("hidden")
    document.getElementById("previousimg").classList.add("hidden")
}

function previousimg() {
    document.getElementById("pic2").classList.remove("visiblepic2")
    document.getElementById("firstimg").classList.remove("visiblepic2")
    document.getElementById("next").classList.remove("hidden")
    document.getElementById("previousimg").classList.remove("hidden")
}

// Functions ends 