console.log("Initializing Script....");

function createCard(titleName,channelName,viewsNumber,monthsOld,durationTime,url)
{
        let cont=document.querySelector(".container");

        let card=document.createElement("div");
        card.className="card";// card.setAttribute("class","card");

        let thumbnail=document.createElement("div");
        thumbnail.className="thumbnail";

        let about=document.createElement("div");
        about.className="about";

        let details=document.createElement("div");
        details.className="details";

        let channel=document.createElement("p");
        channel.innerHTML=channelName;
        
        let modifiedViews="";
        if(viewsNumber>=1000 && viewsNumber<1000000){
            modifiedViews=(viewsNumber/1000)+"K";
        }
        else if(viewsNumber>=1000000){
            modifiedViews=(viewsNumber/1000000)+"M";
        }
        else{
            modifiedViews=viewsNumber;
        }
        let views=document.createElement("p");
        views.innerHTML=modifiedViews+" views";

        let months=document.createElement("p");
        months.innerHTML=monthsOld+" months ago";

        let title=document.createElement("h1");
        title.innerHTML=titleName;

        let image=document.createElement("img");
        image.src=url;
        image.alt="Thumbnail";

        let duration=document.createElement("p");
        duration.innerHTML=durationTime;

        details.append(channel);
        details.append(views);
        details.append(months);

        about.append(title);
        about.append(details);

        thumbnail.append(image);
        thumbnail.append(duration);

        card.append(thumbnail);
        card.append(about);

        cont.append(card);
}

createCard("Video #1","Devaansh Jaiswal",10,5,"11:00","image.jpg");
createCard("Video #2","Devaansh Jaiswal",1000,4,"11:00","image.jpg");
createCard("Video #3","Devaansh Jaiswal",123400,3,"11:00","image.jpg");
createCard("Video #4","Devaansh Jaiswal",10300000,2,"11:00","image.jpg");