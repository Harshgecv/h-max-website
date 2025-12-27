document.addEventListener("DOMContentLoaded", () => {
  fetch("https://script.google.com/macros/s/AKfycbzSGPJSh37whbZwYLQmhFUfWaNbhdGzqG7DZUhpPYGDi7kORguEDpJau_Lo_ATMsWnz/exec")
    .then(res => res.json())
    .then(data => {
      const id = data.consultantId;

      // Google Sheet ke liye
      document.getElementById("consultantId").value = id;

      // Thank You page ke liye
      localStorage.setItem("CONSULTANT_ID", id);
    });




});
