(() =>{
const socket = io();

//hooking into the elements on the page to send messages back and forth
let messageList = document.querySelector('ul'),
    chatForm = document.querySelector('form'),
    chatMessage = chatForm.querySelector('message');


    function appendMessage(msg) {
      //debugger;
      let newMsg = `<li>${msg.message}</li>`;
      messageList.innerHTML += newMsg; //listen for it and add it
    }

    function appendDescMessage(msg) {
      //debugger;
      let newMsg = `<li>${msg}</li>`;
      messageList.innerHTML += newMsg; //adding to the bottom of the list
    }

    function handleSendMessage(e) {
      e.preventDefault();//block default pg refresh
      debugger;
    }

    chatForm.addEventListener('submit', handleSendMessage, false);//when you click submit
    socket.addEventListener('chat message', appendMessage, false);//listening for event from server
    socket.addEventListener('disconnect message', appendDescMessage, false);//listen for event from server
})();
