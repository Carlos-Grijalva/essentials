export const dropdown = () => {
    let dropdowns = document.getElementsByTagName('ess-dropdown');
    for (let i = 0; i < dropdowns.length; i++) {
        let essActivator = dropdowns[i].querySelector("[ess-type='on/off']");
        let essContent = dropdowns[i].querySelector("[ess-type='content']");
        essContent.style.display = 'none';
        essActivator.addEventListener("click", () => {
            if (essContent.style.display == 'none') {
                essContent.style.display = 'block';
            } else {
                essContent.style.display = 'none';
            }
        })
    }
};

export const tooltip = () => {
    let tooltips = document.getElementsByTagName('ess-tooltip');
    for (let i = 0; i < tooltips.length; i++) {
        let essActivator = tooltips[i].querySelector("[ess-type='on/off']");
        let essContent = tooltips[i].querySelector("[ess-type='content']");
        essContent.style.display = 'none';
        essActivator.addEventListener("mouseenter", () => {
            essContent.style.display = 'block';
        });
        essActivator.addEventListener("mouseleave", () => {
            essContent.style.display = 'none';
        })
    }
};

export const modal = () => {
    let modal = document.getElementsByTagName('ess-modal');
    for (let i = 0; i < modal.length; i++) {
        let essActivator = modal[i].querySelector("[ess-type='on']");
        let essDeactivator = modal[i].querySelectorAll("[ess-type='off']");
        let essContent = modal[i].querySelector("[ess-type='content']");
        essContent.style.display = 'none';
        essActivator.addEventListener("click", () => {
            essContent.style.position = 'fixed';
            essContent.style.display = 'none';
            essContent.style.top = '50%';
            essContent.style.left = '50%';
            essContent.style.transform = 'translate(-50%, -50%)';
            essContent.style.display = 'block';
        });
        for (let i = 0; i < essDeactivator.length; i++) {
            essDeactivator[i].addEventListener("click", () => {
                essContent.style.display = 'none';
            });
        }
    }
};

export const carrousel = () => {
    let carrousels = document.getElementsByTagName('ess-carrousel');
    for (let i = 0; i < carrousels.length; i++) {
        let essContent = carrousels[i].querySelector("[ess-type='content']");
        let crLeft = carrousels[i].querySelectorAll("[ess-type='cr/left']");
        let crRight = carrousels[i].querySelectorAll("[ess-type='cr/right']");
        let position = 0;

        for (let j = 0; j < essContent.children.length; j++) {
            essContent.children[j].style.display = 'none';
        }
        essContent.children[0].style.display = 'block';

        for (let j = 0; j < crLeft.length; j++) {
            crLeft[j].addEventListener("click", () => {
                let index = essContent.children.length;
                position = (position - 1 + index) % index;
                for (let j = 0; j < essContent.children.length; j++) {
                    essContent.children[j].style.display = 'none';
                }
                essContent.children[position].style.display = 'block';
            });
        }

        for (let j = 0; j < crRight.length; j++) {
            crRight[j].addEventListener("click", () => {
                let index = essContent.children.length;
                position = (position + 1) % index;
                for (let j = 0; j < essContent.children.length; j++) {
                    essContent.children[j].style.display = 'none';
                }
                essContent.children[position].style.display = 'block';
            });
        }
    }
};