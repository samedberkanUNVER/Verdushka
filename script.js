function sendMessage() {
    var message = document.getElementById("message").value;
    var responseElement = document.getElementById("response");

    if (message.trim() !== "") {
        responseElement.innerText = "Mesajınız alındı! Kediler de bunu çok sevdi!";
    } else {
        responseElement.innerText = "Lütfen bir mesaj yazın!";
    }
}
