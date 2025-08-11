const QRText = document.querySelector('#qrText');
const size = document.querySelector('#size');
const generateBtn = document.getElementById('generateBtn');
const DownloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');






DownloadBtn.addEventListener('click',()=>{
   let img= document.querySelector('.qr-body img');
   if(img!==null)
   {
     let Attribute = img.getAttribute('src');
     DownloadBtn.setAttribute('href',Attribute);
   }
   else{
    alert("There is not any QR Code");
   }
})


function createQRCode() {
    qrContainer.innerHTML = ""; // Clear previous QR code
    let selectedSize = size.value  // or parseInt(size.value); // Convert string to number
    new QRCode(qrContainer, {
        text: QRText.value,
        height: selectedSize,
        width: selectedSize,
        colorLight: "#155e75",
        colorDark: "#DC143C",
    });
}

generateBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Stops page from refreshing
    Size();
});

size.addEventListener('change',(e)=>{
        selectedSize=e.target.value;
        
        Size();
})

 function Size(){
    //   if(QRText.value.length>0)
    // {
    //     createQRCode();
    // }
    // else{
    //     alert("Please Enter Text or URL");
    // }

        //OR

    QRText.value.length > 0 ? createQRCode() :  alert("Please Enter Text or URL");
 }
