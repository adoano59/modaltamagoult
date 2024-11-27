# Modal-by-Tamagoult-Anouar

**Modal-by-Tamagoult-Anouar** est une bibliothèque React simple et personnalisable pour afficher des modales dans vos projets. 
Elle prend en charge des sections personnalisables pour le contenu, l'en-tête et le pied de page.

## 🚀 Installation

Installez la bibliothèque avec npm  :

```bash
npm install modal-by-tamagoultanouar
```


## ✨ Fonctionnalités

- **Facile à utiliser et à personnaliser**
- **Gestion du clic extérieur** pour fermer la modale
- Prend en charge les sections **header**, **body**, et **footer**
- Design par défaut avec possibilité de personnalisation via CSS

## 📦 Utilisation

Voici un exemple simple pour intégrer **Modal-by-Tamagoult-Anouar** dans votre projet React :

```jsx
import React from 'react';
import Modal from 'modal-by-tamagoultanouar';
import 'modal-by-tamagoultanouar/modal.css';

const App = () => {
  const closeModal = () => {
    console.log('Modal closed');
  };

  return (
    <div>
      <Modal
        header="Success!"
        body={<p>Employee has been successfully added.</p>}
        footer={<button onClick={closeModal}>Close</button>}
      >
      </Modal>
    </div>
  );
};

export default App;
```

## 🛠️ Propriétés

| Prop          | Type        | Requis | Description                                                   |
|---------------|-------------|--------|---------------------------------------------------------------|
| `header`      | React.Node  | Non    | Contenu de l'en-tête de la modale                             |
| `body`        | React.Node  | Oui    | Contenu principal de la modale                                |
| `footer`      | React.Node  | Non    | Contenu du pied de page de la modale                          |
| `isOpen`      | React.bool  | Non    | Etat de la modale fermer ou ouverte                          |
| `children`    | React.Node  | Non    | Élément déclenchant l'ouverture de la modale                  |

## 🎨 Personnalisation

Vous pouvez personnaliser le style de la modale en modifiant ou en surchargeant le fichier CSS par défaut : **modal.css**.

### Classes principales personnalisables

- `.modal` : Style général de la modale
- `.modal-visible` : Style appliqué lorsque la modale est ouverte
- `.modal-content` : Conteneur principal du contenu
- `.modal-header` : En-tête de la modale
- `.modal-body` : Corps de la modale
- `.modal-footer` : Pied de page de la modale
- `.close-button` : Bouton de fermeture

### Exemple de personnalisation

```css
.modal {
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}

.close-button {
  color: red;
}
```

## ❤️ Remerciements

Merci d'utiliser **Modal-by-Tamagoult-Anouar** ! Si vous avez des questions ou des retours, n'hésitez pas à me contacter.

## 📄 Licence

Ce projet est sous licence MIT.