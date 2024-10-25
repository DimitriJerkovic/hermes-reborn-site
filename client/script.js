// Fonction pour générer le Salescode en fonction des sélections
function updateSalescode() {
    const partnerCode = document.getElementById('partnerCodeSales').value;
    const contactType = document.getElementById('contactTypeSales').value;
    const originNewsletter = document.getElementById('originNewsletterSales').value;
    const productFunnel = document.getElementById('productFunnelSales').value;

    // Base du Salescode sans occurrence
    const baseSalescode = `${partnerCode}${contactType}${originNewsletter}${productFunnel}`;
    
    // Récupère ou initialise le nombre d'occurrences pour ce code
    const occurrences = JSON.parse(localStorage.getItem('occurrences_sales')) || {};
    const occurrence = occurrences[baseSalescode] || 1;

    // Crée le Salescode complet avec occurrence
    const salescode = `${baseSalescode}${occurrence.toString().padStart(2, '0')}`;
    document.getElementById('generatedSalescode').value = salescode;
}

// Fonction pour sauvegarder le Salescode avec date et commentaire
function saveSalescode() {
    const salescode = document.getElementById('generatedSalescode').value;
    const comment = document.getElementById('commentSales').value;
    const dateCreated = new Date().toLocaleDateString();

    // Récupère ou initialise la liste des Salescodes
    const salescodes = JSON.parse(localStorage.getItem('salescodes')) || [];
    salescodes.push({ salescode, comment, dateCreated });
    localStorage.setItem('salescodes', JSON.stringify(salescodes));

    // Met à jour les occurrences
    let occurrences = JSON.parse(localStorage.getItem('occurrences_sales')) || {};
    const baseSalescode = salescode.slice(0, -2);
    occurrences[baseSalescode] = (occurrences[baseSalescode] || 1) + 1;
    localStorage.setItem('occurrences_sales', JSON.stringify(occurrences));

    alert("Salescode sauvegardé !");
    displaySalescodes();
}

// Fonction pour afficher les Salescodes sauvegardés
function displaySalescodes() {
    const salescodes = JSON.parse(localStorage.getItem('salescodes')) || [];
    const tableBody = document.getElementById('salescodeList');
    tableBody.innerHTML = '';

    salescodes.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.dateCreated}</td>
            <td>${item.salescode}</td>
            <td>${item.comment}</td>
            <td><button onclick="deleteSalescode(${index})">Supprimer</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Fonction pour supprimer un Salescode
function deleteSalescode(index) {
    const salescodes = JSON.parse(localStorage.getItem('salescodes')) || [];
    salescodes.splice(index, 1);
    localStorage.setItem('salescodes', JSON.stringify(salescodes));
    displaySalescodes();
}

// Initialiser l'affichage des Salescodes au chargement de la page
window.onload = () => {
    updateSalescode();
    displaySalescodes();
};
// Fonction pour générer le Leadcode basé sur les sélections
function updateLeadcode() {
    const partnerCode = document.getElementById('partnerCodeLead').value;
    const contactType = document.getElementById('contactTypeLead').value;
    const originNewsletter = document.getElementById('originNewsletterLead').value;
    const targetNewsletter = document.getElementById('targetNewsletterLead').value;

    // Base du Leadcode sans occurrence
    const baseLeadcode = `${partnerCode}${contactType}${originNewsletter}${targetNewsletter}`;
    
    // Récupère ou initialise le nombre d'occurrences pour ce code
    const occurrences = JSON.parse(localStorage.getItem('occurrences_lead')) || {};
    const occurrence = occurrences[baseLeadcode] || 1;

    // Crée le Leadcode complet avec occurrence
    const leadcode = `${baseLeadcode}${occurrence.toString().padStart(2, '0')}`;
    document.getElementById('generatedLeadcode').value = leadcode;
}

// Fonction pour sauvegarder le Leadcode avec date et commentaire
function saveLeadcode() {
    const leadcode = document.getElementById('generatedLeadcode').value;
    const comment = document.getElementById('commentLead').value;
    const dateCreated = new Date().toLocaleDateString();

    // Récupère ou initialise la liste des Leadcodes
    const leadcodes = JSON.parse(localStorage.getItem('leadcodes')) || [];
    leadcodes.push({ leadcode, comment, dateCreated });
    localStorage.setItem('leadcodes', JSON.stringify(leadcodes));

    // Met à jour les occurrences
    let occurrences = JSON.parse(localStorage.getItem('occurrences_lead')) || {};
    const baseLeadcode = leadcode.slice(0, -2);
    occurrences[baseLeadcode] = (occurrences[baseLeadcode] || 1) + 1;
    localStorage.setItem('occurrences_lead', JSON.stringify(occurrences));

    alert("Leadcode sauvegardé !");
    displayLeadcodes();
}

// Fonction pour afficher les Leadcodes sauvegardés
function displayLeadcodes() {
    const leadcodes = JSON.parse(localStorage.getItem('leadcodes')) || [];
    const tableBody = document.getElementById('leadcodeList');
    tableBody.innerHTML = '';

    leadcodes.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.dateCreated}</td>
            <td>${item.leadcode}</td>
            <td>${item.comment}</td>
            <td><button onclick="deleteLeadcode(${index})">Supprimer</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Fonction pour supprimer un Leadcode
function deleteLeadcode(index) {
    const leadcodes = JSON.parse(localStorage.getItem('leadcodes')) || [];
    leadcodes.splice(index, 1);
    localStorage.setItem('leadcodes', JSON.stringify(leadcodes));
    displayLeadcodes();
}

// Initialiser l'affichage des Leadcodes au chargement de la page
window.onload = () => {
    updateLeadcode();
    displayLeadcodes();
};
