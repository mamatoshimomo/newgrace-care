// ======================================
// NEW GRACE CARE+
// Version 1.0
// ======================================

// ------------------------------
// Store Details
// ------------------------------

const PHONE = "9867629429";

const WHATSAPP =
`https://wa.me/91${PHONE}`;

const ORDER_MESSAGE =
`Hi New Grace Medical,

I'd like to order medicines.

Please let me know the next steps.`;

const REVIEW_LINK =
"https://g.page/r/CfdNSjbIXUs_EBM/review";

const INSTAGRAM =
"https://instagram.com/newgracemedical";

const MAPS =
"https://maps.google.com/?q=New+Grace+Medical+and+General+Stores+Powai";


// ======================================
// STORE STATUS
// ======================================

function updateStoreStatus(){

    const title=document.getElementById("statusTitle");
    const text=document.getElementById("statusText");

    if(!title || !text) return;

    const now=new Date();

    const hour=now.getHours();

    if(hour>=10 && hour<22){

        title.innerHTML="🟢 Open Now";
        text.innerHTML="Free Home Delivery Available";

    }else{

        title.innerHTML="🔴 Currently Closed";
        text.innerHTML="Opens Daily at 10:00 AM";

    }

}


// ======================================
// BUTTONS
// ======================================

function orderMedicines(){

    window.open(

        `${WHATSAPP}?text=${encodeURIComponent(ORDER_MESSAGE)}`,

        "_blank"

    );

}

function openWhatsApp(){

    window.open(

        WHATSAPP,

        "_blank"

    );

}

function callStore(){

    window.location.href=`tel:${PHONE}`;

}

function openDirections(){

    window.open(

        MAPS,

        "_blank"

    );

}

function openInstagram(){

    window.open(

        INSTAGRAM,

        "_blank"

    );

}


// ======================================
// REVIEW POPUP
// ======================================

function leaveReview(){

    document.getElementById("reviewModal").style.display="flex";

}

function closeReview(){

    document.getElementById("reviewModal").style.display="none";

}


// ======================================
// REVIEW GENERATOR
// ======================================

function generateReview(type){

    let review="";

    switch(type){

        case "delivery":

        review=
`Excellent service! Medicines were delivered quickly and the staff was very helpful. Highly recommended for anyone looking for a reliable pharmacy in Powai.`;

        break;

        case "staff":

        review=
`The staff at New Grace Medical is extremely friendly, knowledgeable and always ready to help. Great customer service every time I visit.`;

        break;

        case "medicine":

        review=
`Genuine medicines, excellent stock availability and very reasonable service. I always trust New Grace Medical for my family's healthcare needs.`;

        break;

        default:

        review=
`I've had a wonderful experience with New Grace Medical. Friendly staff, genuine medicines, fast service and reliable home delivery. Highly recommended!`;

    }

    document.getElementById("reviewText").value=review;

}


// ======================================
// COPY REVIEW
// ======================================

function copyReview(){

    const text=document.getElementById("reviewText").value;

    if(text===""){

        alert("Please choose a review category first.");

        return;

    }

    navigator.clipboard.writeText(text);

    closeReview();

    setTimeout(()=>{

        window.open(

            REVIEW_LINK,

            "_blank"

        );

    },500);

}


// ======================================
// CLOSE POPUP IF USER CLICKS OUTSIDE
// ======================================

window.onclick=function(e){

    const modal=document.getElementById("reviewModal");

    if(e.target===modal){

        closeReview();

    }

};


// ======================================
// PAGE LOAD
// ======================================

window.onload=function(){

    updateStoreStatus();

};