const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint pour enregistrer un lead
app.post('/api/lead', (req, res) => {
    const { firstName, lastName, email, leadcode } = req.body;
    const date = new Date().toLocaleDateString();
    const leadData = { date, firstName, lastName, email, leadcode };

    fs.appendFile('leads.json', JSON.stringify(leadData) + '\n', (err) => {
        if (err) return res.status(500).send('Erreur de stockage du lead');
        res.send('Lead enregistré avec succès');
    });
});

// Endpoint pour enregistrer une vente
app.post('/api/sale', (req, res) => {
    const { firstName, lastName, email, amount, salescode } = req.body;
    const date = new Date().toLocaleDateString();
    const saleData = { date, firstName, lastName, email, amount, salescode };

    fs.appendFile('sales.json', JSON.stringify(saleData) + '\n', (err) => {
        if (err) return res.status(500).send('Erreur de stockage de la vente');
        res.send('Vente enregistrée avec succès');
    });
});

app.listen(port, () => console.log(`Serveur en ligne sur le port ${port}`));
