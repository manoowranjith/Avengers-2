
const characters=["Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"]
const character_obj=[]
var l=0,d=0;
var lcount=0,dcount=0;
for(let loop=0;loop<5;loop++)
{
    lcount=0,dcount=0;
    initPlayers()
    function initPlayers()
    {
        for(let i=1;i<=20;i++)
        {
            var number=Math.ceil(Math.random()*100)

            var template = {
                name:"",
                strength:"",
                image:"",
                type:""
            }

            template.name=characters[i-1]
            // template.strength=number
            template.image="super-"+i+".png"
            if(number%2==0)
            {
                template.type="hero"
            }
            else{
                template.type="villain"
            }
            character_obj.push(template)
        }
    }

    getRandomStrength(character_obj)
    function getRandomStrength(character_obj)
    {
        for(let i=0;i<20;i++)
        {
            var number=Math.ceil(Math.random()*100)
            character_obj[i].strength=number
            if(i<10)
            {
                lcount+=character_obj[i].strength;
            }
            else{
                dcount+=character_obj[i].strength;
            }
        }
    }
    buildPlayers(character_obj)
    function buildPlayers(character_obj)
    {
        const lucas=document.getElementById('lucas-characters')
        const dustin=document.getElementById('dustin-characters')
        lucas.innerHTML=""
        dustin.innerHTML=""
        for(let i=0;i<10;i++)
        {
            var msgContainer = document.createDocumentFragment();
            var option = msgContainer.appendChild(document.createElement("div"));

            var img=document.createElement("img")
            var h3=document.createElement("h3")
            var h1=document.createElement("h1")
            img.src="./images/"+character_obj[i].image
            // img.width="100"
            // img.height="100"

            h3.innerHTML=character_obj[i].name
            h1.innerHTML=character_obj[i].strength
        
            option.appendChild(img)
            option.appendChild(h3)
            option.appendChild(h1)
            option.style.border = "solid #000";
        
            lucas.appendChild(msgContainer);
            // dustin.appendChild(msgContainer);
            // console.log(character_obj[i])
        }

        for(let i=10;i<20;i++)
        {
            var msgContainer = document.createDocumentFragment();
            var option = msgContainer.appendChild(document.createElement("div"));

            var img=document.createElement("img")
            var h3=document.createElement("h3")
            var h1=document.createElement("h1")

            img.src="./images/"+character_obj[i].image
            img.width="100"
            img.height="100"

            h3.innerHTML=character_obj[i].name
            h1.innerHTML=character_obj[i].strength
        
            option.appendChild(img)
            option.appendChild(h3)
            option.appendChild(h1)
            option.style.border = "solid #000";
            
            // lucas.appendChild(msgContainer);
            dustin.appendChild(msgContainer);
            // console.log(character_obj[i])
        }
        // console.log(character_obj[0].name)
    }
    if(lcount>dcount)
    {
        l++;
    }
    else{
        d++;
    }
    document.getElementById('score').innerHTML=l+' - '+d
}

