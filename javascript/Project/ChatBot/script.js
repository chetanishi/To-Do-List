

let prompt=document.querySelector("#prompt");
let chatContainer=document.querySelector(".chat-container");
let ImageBtn=document.querySelector("#image");
let image=document.querySelector("#image img")
let ImageInput=document.querySelector("#image input");

const Api_Url="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyBOZQMahMZXs4GMaEMfkuTnAhsk_9cSUZA"

let user= {
    message:null,
    file : {
        mime_type: null,
            data : null
    }
}

async function generateResponse(aiChatBox)
{

    let text=aiChatBox.querySelector(".ai-chat-area")

   let RequestOption=
   {
     method:"POST",
     headers: {'Content-Type' : 'application/json'},
     body:JSON.stringify({
        
     "contents": [
       {
         "parts": [
          {"text": user.message },(user.file.data?[{"inline_data":user.file}]:[])
         ]
       }
     ]
  
      })
    }

    try{
        let response=await fetch(Api_Url,
            RequestOption)
            let data=await response.json()
            let apiResponse=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim()
           text.innerHTML=apiResponse;
    }
    catch(error){
        console.log(error)
    }
    finally{
        chatContainer.scrollTo({top : chatContainer.scrollHeight, behaviour:"smooth"})
          image.src=``
      image.classList.remove("chooseimg");
    }

}


function createChatBox(html,classes)
{
    let div=document.createElement("div");
    div.innerHTML=html;
    div.classList.add(classes);
    return div
}

function handlechatResponse(userMessage)
{
    user.message=userMessage;
    let html=` <img src="./user_icon.png" alt="" id="userImage">
            <div class="user-chat-area">
               ${user.message}
               ${user.file.data?`<img src="data:${user.file.mime_type};base64,${user.file.data}" class="chooseimg" />` : ""}
            </div>`
    prompt.value='';    
  let userChatBox=createChatBox(html,"user-chat-box"); 

   chatContainer.appendChild(userChatBox);
   
   chatContainer.scrollTo({top : chatContainer.scrollHeight, behaviour:"smooth"})

    setTimeout(() => {
        let html=`  <img src="./chatbot_icon.png" alt="" id="aiImage">
             <div class="ai-chat-area">
           <p>Processing your request...</p>
            </div>`

        let aiChatBox=createChatBox(html,"ai-chat-box")
        chatContainer.appendChild(aiChatBox);
        generateResponse(aiChatBox)
    }, 1000);
}

prompt.addEventListener("keydown",function(e){
    if(e.key === "Enter")
    {
       handlechatResponse(prompt.value);
    }
})

ImageInput.addEventListener("change",function(){
    const file=ImageInput.files[0]
    if(!file) return
    let reader=new FileReader()
    reader.onload=(e)=>{
        let base64string=e.target.result.split(",")[1]
        user. file = {
        mime_type: file.type,
            data : base64string
         }
      image.src=`data:${user.file.mime_type};base64,${user.file.data}`
      image.classList.add("chooseimg");
    }
    
    reader.readAsDataURL(file)
})

ImageBtn.addEventListener('click',function(){
    ImageBtn.querySelector('input').click();
})