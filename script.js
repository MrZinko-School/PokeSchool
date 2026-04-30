let name = "";
let gen = "";

// Load saved name when page opens
window.onload = function() {
    name = localStorage.getItem("username") || "";
    gen = localStorage.getItem("genero") || "";

    if (name) {
        const span = document.getElementById("username");
        if (span) {
            span.textContent = name;
        }
    }
    if (gen) {
        const span = document.getElementById("genero");
        if (span) {
            span.textContent = gen;
        }
    }
};

function saveName() {
    name = document.getElementById("nome").value;
    localStorage.setItem("username", name);
}

function saveGen() {
    gen = document.getElementById("gen").value;
    localStorage.setItem("genero", gen);
}