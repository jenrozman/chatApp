(() =>{
const socket = io();

//hooking into the elements on the page to send messages back and forth
let messageList = document.querySelector('ul'),
    chatForm = document.querySelector('form'),
    nameInput = document.querySelector('.nickname');
    chatMessage = chatForm.querySelector('.message');
    nickName = null;

function setNickname(){
  nickName = this.value;
}

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
      nickName = ( nickName && nickName.length > 0) ? nickName : 'user';//turner shorthand. && check one condition and the second condition. so if its a nickname, and has a length
      // ^better version of if/else
      msg = `${nickName} says ${chatMessage.value}`; //takes what they say

      socket.emit('chat message', msg); //if it doesnt go thru, return error?
      chatMessage.value = "";
      return false;
      //debugger;
    }

    nameInput.addEventListener('change', setNickname, false);//whatever they write set as nickname
    chatForm.addEventListener('submit', handleSendMessage, false);//when you click submit
    socket.addEventListener('chat message', appendMessage, false);//listening for event from server
    socket.addEventListener('disconnect message', appendDescMessage, false);//listen for event from server
})();
