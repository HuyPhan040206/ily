const startButton = document.getElementById("start_button");
const gifLanding = document.querySelector(".gif");
const questionLanding = document.querySelector(".question");


var question = null;
var gifMain = null;
var yesButton = null;
var noButton = null;
var input = "Trúc Biện";
var count = 0;


startButton.addEventListener("click", () => {
   
        document.head.innerHTML = "<meta charset='UTF-8'>"+
        "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"+
        "<title>Do You Love Me?</title>"+
        "<link rel='stylesheet' href='styleMain.css'/>"

        document.body.innerHTML = "<div class='wrapper'><h2 class='question'>Ế nhô "+input+ " nghennn. Trúc Biện có iu anh hem dọoooo?</h2>"+
        "<img class='gif' alt='gif' src='https://media.giphy.com/media/0kDdAFAELmvvFNUKim/giphy.gif'/>"+
        "<div class='btn-group'><button class='yes-btn'>Yes</button>"+
        "<button class='no-btn'>No</button></div></div>"

        questionMain = document.querySelector(".question");
        gifMain = document.querySelector(".gif");
        yesButton = document.querySelector(".yes-btn");
        noButton = document.querySelector(".no-btn");

        yesButton.addEventListener("click", yesButtonListener);
        noButton.addEventListener("click", noButtonListener);
    
         noButton.style.position = "absolute"; // absolute positioning 
});

function yesButtonListener() {

const music = new Audio("nhacthinhphong.mp3"); 
    music.loop = true; 
    music.volume = 0.6; 
    music.play();


    document.body.innerHTML = `
    <div id="floating-container"></div>
    <div class='wrapper'>
        <h2 class='question'>Yayyyyy!!! 20/10 hạnh phúc nhó, cục cưng của anh boaaaa 🩷</h2>
        <p>💞Cảm ơn bbi đã ở bên cạnh anh suốt quãng thời gian qua nèee, vừa đáng iu vừa lì lợm mà còn ngoan răm xinh yêu nữa chớ💝😝</p>
        <p>💋Chúc bbi ngày càng xinh hơn, vui hơn, rạng rỡ hơn, nhiều may mắn hơn và luôn luôn hạnh phúc nhaaaa🫶😳</p>
        <p>💐Chúc cho nhiều điều tốt đẹp sẽ đến với em, và nhớ là dù cho có thế nào thì anh vẫn sẽ luôn ở đây với em iu, nên là nếu có mệt quá thì về đây với anh nhóoo😎❤️</p>
        <img class='gif' alt='gif' src='https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif'/>
        <p>💌Anh yêu em nhiều lắm đóa, zị mà dám bấm No á hennnn😛🍑</p>
    </div>
    `;
    gifMain.src = "https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif";
    // Add floating emojis dynamically
    const container = document.getElementById("floating-container");
    const emojis = ['💖','💞','💓','💗','💘','🩷','🌸','🌷','💐','🫶','🎀','🍬','🍭','🥰','🍑'];
    for(let i=0; i<30; i++){
        const span = document.createElement("span");
        span.innerText = emojis[Math.floor(Math.random()*emojis.length)];
        span.style.position = "absolute";
        span.style.left = Math.random() * window.innerWidth + "px";
        span.style.top = Math.random() * window.innerHeight + "px";
        span.style.fontSize = Math.random() * 30 + 20 + "px";
        span.style.opacity = Math.random() * 0.7 + 0.3;
        span.style.pointerEvents = "none"; // so user can click buttons
        container.appendChild(span);

        // Animate the emoji floating up
        let topPos = parseFloat(span.style.top);
        setInterval(()=>{
            topPos -= 0.5 + Math.random(); // floating speed
            if(topPos < -50) topPos = window.innerHeight + 50; // loop back
            span.style.top = topPos + "px";
        }, 30);
    }
}

function noButtonListener() {
    noButton.style.margin = "0";
    if (count < 3) {
        gifMain.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHJtdGoxc3h3eGs4emJjZ2prejNmdmc3cWxuZmV1azg3dTIyODZ1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/CotE0o3IU5ogwxjkYC/giphy.gif";
        questionMain.innerHTML = "Em nỡ lòng nèo😿...Anh cho iem eo bấm lại đóa😔😞!!!";
    } else if (count < 6) {
        gifMain.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOThkZ2Z0ZjdhOWJmNzd3NDVwZGdubGJrdXo2anptdmJ2c2xmYXhnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UvQFw2aGitoAlTvcbR/giphy.gif";
        questionMain.innerHTML = "😱🥀Từ chối tận 3 lần... Tui quá bùn đi mòaaa😭.. bít nói gì nữa aayyy..Em iu hỏng thương gì bo seo😟?";
    } else {
        gifMain.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWxjOGVpOGN1cmFwOHc0enhwaGszaGZuMWNtbnVoam9pOTdvYWRoeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fzCztgffWI2TnzfBzp/giphy.gif";
        questionMain.innerHTML = "Ngta thực sự bấm No tận " + count + " lun mè, bùn xịt kít lunnnn😭😭😭, Cơ hội cúi cho iem trl đóaaaaaa. Em thực sự hem iu anh boa seooo🥺?";
    }
    
    const padding = 10;
    //const noButtonRect = noButton.getBoundingClientRect();
    const maxX = window.innerWidth - noButton.offsetWidth - padding;
    const maxY = window.innerHeight - noButton.offsetHeight - padding;

    
    const randomX = Math.floor(Math.random() * maxX) + padding;
    const randomY = Math.floor(Math.random() * maxY) + padding;

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    count = count+1;
}













