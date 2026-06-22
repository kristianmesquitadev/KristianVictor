const cards = document.querySelectorAll(".info-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.1
});

cards.forEach((card,index)=>{

    card.style.transitionDelay = `${index * 120}ms`;

    observer.observe(card);

});