
// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Instalación PWA
let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBtn = document.createElement("button");
    installBtn.textContent = "Instalar SoloMac.shop";
    installBtn.style.position = "fixed";
    installBtn.style.bottom = "20px";
    installBtn.style.right = "20px";
    installBtn.style.padding = "10px 20px";
    installBtn.style.backgroundColor = "#0a84ff";
    installBtn.style.color = "white";
    installBtn.style.border = "none";
    installBtn.style.borderRadius = "5px";
    installBtn.style.cursor = "pointer";
    document.body.appendChild(installBtn);

    installBtn.addEventListener("click", async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === "accepted") {
                console.log("App instalada");
            }
            deferredPrompt = null;
            installBtn.remove();
        }
    });
});
