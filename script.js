// Cotação das moedas do dia 23/10/2024
const USD = 5.72
const EUR = 6.14
const GBP = 7.41

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber apenas números.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})


// Adicionando evento de submit ao formulário.
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break;
    }
}

// Funcion para converter
function convertCurrency(amount, price, symbol) {

    try {
        description.textContent = `${symbol} 1 = R$ ${price}`
        let total = amount * price
        result.textContent = `${formatCurrencyBRL(total).replace("R$", "")} Reais`

        // Adicionando a class "show-result" pois ela contem o display block para mostrar o footer.
        footer.classList.add("show-result")

    } catch (error) {
        // Mostrará o erro e ocutará o footer.
        footer.classList.remove("show-result")
        console.log("Error: " + error)
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

function formatCurrencyBRL (value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    }) 
}