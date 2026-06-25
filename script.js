document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let text =
        "Name: " + name +
        "\nPhone: " + phone +
        "\nEmail: " + email +
        "\nMessage: " + message;

    let whatsappUrl =
        "https://wa.me/93772166757?text=" +
        encodeURIComponent(text);

    window.open(whatsappUrl, "_blank");

});