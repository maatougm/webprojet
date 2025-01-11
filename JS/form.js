document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      let isValid = true;
  
      // Validation du prénom
      const firstName = document.getElementById('first_name');
      if (firstName.value.trim() === '') {
        alert('Veuillez entrer votre prénom.');
        isValid = false;
        firstName.focus(); 
      }
      
  
      // Validation du nom
      const lastName = document.getElementById('last_name');
      if (lastName.value.trim() === '') {
        alert('Veuillez entrer votre nom.');
        isValid = false;
        lastName.focus();
      }
  
      // Validation de l'âge
      const age = document.getElementById('age');
      if (age.value.trim() === '' || parseInt(age.value) <= 0) {
        alert('Veuillez entrer un âge valide.');
        isValid = false;
        age.focus();
      }
  
      // Validation du genre
      const gender = document.getElementById('gender');
      if (gender.value === '') {
        alert('Veuillez sélectionner votre genre.');
        isValid = false;
        gender.focus();
      }
  
      // Validation de la photo
      const photo = document.getElementById('photo');
      if (photo.value === '') {
        alert('Veuillez télécharger votre photo.');
        isValid = false;
        photo.focus();
      } else {
        const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(photo.value)) {
            alert('Veuillez télécharger un fichier image valide (jpg, jpeg, png).');
            isValid = false;
            photo.value = ''; 
            photo.focus();
        }
      }
  
      // Validation du numéro de téléphone
      const contact = document.getElementById('contact');
      if (contact.value.trim() === '' || !/^\d{8}$/.test(contact.value)) {
        alert('Veuillez entrer un numéro de téléphone valide (8 chiffres).');
        isValid = false;
        contact.focus();
      }
  
      // Validation de l'adresse e-mail
      const email = document.getElementById('email');
      if (email.value.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert('Veuillez entrer une adresse e-mail valide.');
        isValid = false;
        email.focus();
      }
  
      // Validation du contact d'urgence
      const emergencyContact = document.getElementById('emergency_contact');
      if (emergencyContact.value.trim() === '' || !/^\d{8}$/.test(emergencyContact.value)) {
        alert('Veuillez entrer un numéro de contact d\'urgence valide (8 chiffres).');
        isValid = false;
        emergencyContact.focus();
      }
  
      // Validation de l'adresse
      const address = document.getElementById('address');
      if (address.value.trim() === '') {
        alert('Veuillez entrer votre adresse.');
        isValid = false;
        address.focus();
      }
  
      // Validation de la taille
      const height = document.getElementById('height');
      if (height.value.trim() === '' || parseInt(height.value) <= 0) {
        alert('Veuillez entrer une taille valide.');
        isValid = false;
        height.focus();
      }
  
      // Validation du poids
      const weight = document.getElementById('weight');
      if (weight.value.trim() === '' || parseInt(weight.value) <= 0) {
        alert('Veuillez entrer un poids valide.');
        isValid = false;
        weight.focus();
      }
      
      // Validation du reçu de paiement
      const paymentReceipt = document.getElementById('payment_receipt');
      if (paymentReceipt.value === '') {
        alert('Veuillez télécharger le reçu de paiement.');
        isValid = false;
        paymentReceipt.focus();
      } else {
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
        if (!allowedExtensions.exec(paymentReceipt.value)) {
            alert('Veuillez télécharger un fichier valide (jpg, jpeg, png, pdf).');
            isValid = false;
            paymentReceipt.value = '';
            paymentReceipt.focus();
        }
      }
      // Empêcher la soumission du formulaire si invalide
      if (!isValid) {
        event.preventDefault();
      }
    });
  });