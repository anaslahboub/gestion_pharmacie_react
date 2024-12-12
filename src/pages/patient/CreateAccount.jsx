import React from 'react'
import "./styles/CreateAccount.css";

const CreateAccount = () => {
  return (
    <div className="container_CreateAccount">
        <h1>Créer un Compte</h1>
        
        <form >
            <label htmlFor="fullName">Nom  :</label>
            <input type="text" id="fullName" name="fullName" placeholder="Entrez votre nom " required />
            <label htmlFor="fullName">Prenom :</label>
            <input type="text" id="fullName" name="fullName" placeholder="Entrez votre prenom" required />
            <label htmlFor="email">Adresse Email :</label>
            <input type="email" id="email" name="email" placeholder="Entrez votre email" required/>

            <label htmlFor="password">Mot de Passe :</label>
            <input type="password" id="password" name="password" placeholder="Choisissez un mot de passe" required/>

            <label htmlFor="confirmPassword">Confirmer le Mot de Passe :</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirmez votre mot de passe" required/>

            <label htmlFor="phone">Numéro de Téléphone :</label>
            <input type="text" id="phone" name="phone" placeholder="Entrez votre numéro de téléphone"/>

            <label htmlFor="adresse">Adresse :</label>
            <input type="text" id="adresse" name="adresse" placeholder="Entrez votre adresse" required/>

            <button type="submit">Créer un Compte</button>
        </form>
    </div>
  )
}

export default CreateAccount
