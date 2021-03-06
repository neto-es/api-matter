let emailUserSend = [];
export default class API {
    feedbackRecived(id) {
        fetch(`https://matter-app.herokuapp.com/api/v1/users/${id}/feedback-invitations`)
        .then(response => response.json() ) 
        .then (json => printCards(json)) 
    }        
}
//feedback-recived
function printCards(feedbacks){
    const container = document.getElementById('feedback-recived');
    container.innerHTML = '';
    feedbacks.forEach(feedback => {
        fetch(`https://matter-app.herokuapp.com/api/v1/users/`+ feedback.user_id)
        .then(response => response.json() ) 
        .then (json => {
            emailUserSend = json.email
            const card = `<div class="card">
                        <div class="card-body "> 
                            <div class="row">
                                <div class="col-8 col-md-9">
                                    <h5 class="card-title">Invitation from : ${emailUserSend} </h5>
                                </div>
                            <div class="col-2">
                            <button onclick="sendIdInvitations(${feedback.id})" class="btn btn-info"> Select </button>
                            </div>
                        </div>`
        container.innerHTML += card; 
             })      
        });   
    }

function sendIdInvitations(number) {
    localStorage.setItem('answerId', number);
    console.log(number)
    location.href ="./answer.html";
}

window.sendIdInvitations = sendIdInvitations
