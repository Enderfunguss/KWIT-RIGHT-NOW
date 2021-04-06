function addUser(){
    userName = document.getElementById('User_name').value;
    localStorage.setItem("user name" , userName);
    window.location = "kwitter_room.html";
}