const form = document.querySelector("form"),
    fullName = document.querySelector("#name"), 
    email = document.querySelector("#email"),
    message = document.querySelector("#message"),
    tel = document.querySelector('#phone'),
    nombre = document.querySelector('#number'),
    date = document.querySelector('#date'),
    title =  document.querySelector('#tour-title') || "Contact Page"
form.addEventListener("submit", async e => {
    e.preventDefault();
    let a = fullName.value,
        r = nombre.value,
        n = email.value,
        o = message.value,
        g = date.value,
        b = title.value,
        p = tel.value;
    try {
        await axios.post("/.netlify/functions/sendEmail", {
            fullNames: a,
            nombres: r,
            emails: n,
            messages: o,
            tele: p,
            dates : g,
            titles: b
        }), fullName.value = "", nombre.value = "", email.value = "", message.value = "", tel.value ="",date.value="",title.value=""
    } catch (s) {
        console.error("oups! elle y a une erreur:", s)
    }
});