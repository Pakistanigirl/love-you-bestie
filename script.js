document.addEventListener("DOMContentLoaded", function () {
    const gif = document.getElementById("excited");

    gif.addEventListener("load", function () {
        // Create a function to reload the GIF
        setTimeout(function () {
            gif.src = gif.src.split("?")[0] + "?" + new Date().getTime();
        }, 1000); // Assuming the GIF duration is 3 seconds, adjust if necessary
    });

    // Trigger the load event on page load
    gif.dispatchEvent(new Event("load"));

  
    const messages = ['Soch lo achae sae', 'Aik or baar soch lo!', 'Manjao! maaf kr doen gi','Abhi b waqt hai manjao!'];
   
    const imageId = ['cry.gif', 'sad.gif', 'angry.gif','drag.gif'];
    let imageNo = 0;
    const paras=['Mujh jesa or koi nhi milna','Agar aqal hoi to na nhi kro gae','Ho na Pakistani wohi krtae ho jis sae mna kia jae','Na kr kae to dekhao zara']
    let para=0;
    let index = 0;

    function handleClickNo() {
        document.getElementById("text").textContent = messages[index];
        index++;
        document.getElementById('excited').src = imageId[imageNo];
        imageNo++;
        document.getElementById('paraLines').textContent=paras[para];
        para++;

        if (index >= messages.length) {
            document.getElementById("no").removeEventListener("click", handleClickNo);
            makeButtonUnhoverable();
            if (isMobile()) {
                document.getElementById("no").style.display = "none";
            }
        }
    }

    document.getElementById("no").addEventListener("click", handleClickNo);
    
    function makeButtonUnhoverable() {
        const noButton = document.getElementById("no");
        const container = noButton.parentElement;

        container.addEventListener("mousemove", (event) => {
            const containerRect = container.getBoundingClientRect();
            const buttonRect = noButton.getBoundingClientRect();
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Calculate the distance between the mouse and the button center
            const distanceX = mouseX - (buttonRect.left + buttonRect.width / 2);
            const distanceY = mouseY - (buttonRect.top + buttonRect.height / 2);
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            // Move the button if the mouse is too close (e.g., within 50px)
            if (distance < 50) {
                const offsetX = Math.random() * (containerRect.width - buttonRect.width);
                const offsetY = Math.random() * (containerRect.height - buttonRect.height);

                noButton.style.left = `${offsetX}px`;
                noButton.style.top = `${offsetY}px`;
            }
        });
    }
    function handleClickYes(){
        document.getElementById("text").textContent ='I know you love me. Huraeee !!!';
       
        document.getElementById('excited').src ='dancing.gif';
        
        document.getElementById('paraLines').textContent='Dear Bestie I love you toooo';
        
    }
    document.getElementById("yes").addEventListener("click", handleClickYes);
    function isMobile() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }
});