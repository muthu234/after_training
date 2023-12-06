function generateQRCode()
{
    var url = document.getElementById("UrlInput").value;
    var qrcodeDiv=document.getElementById("qrcode");
    //clear new QR code
    qrcodeDiv.innerHTML="";
    //Generate New QR code
    var qrcode = new QRCode(qrcodeDiv,{
        text:url,
        width:128,
        Height:128
    });
}


