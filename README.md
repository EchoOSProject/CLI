# Echo - Systems Manager

Echo est un gestionnaire de sous-systèmes personnalisés, créés par la communauté.

Il peut vous servir à développer votre créativité mais aussi à profiter d'un espace de travail personnalis**é** et personnalis**able**.

C'est un moyen simple de s'intéresser au fonctionnement d'un ou de plusieurs système(s) d'exploitation de manière créative et sans trop s'embêter avec tous ces langages de programmation tels que l'Assembleur, le C ou le C++.

---

# Lancer Echo

Installez le module CLI :

```sh
npm install -g echoos
```

Et démarrer un système avec cette commande :

```sh
echo-os <systemIdentifier>
```

---

# Compatibilité avec Electron

Le système que vous voulez utiliser requière la dépendance Electron ? Pas de problèmes! Démarrez votre système à partir de cette commande :

```sh
elec-os <systemIdentifier>
```

---

# Echo's ToDoList

## Boot Manager :

- Check : ✅ - Vérifier le fichier d'identification des systèmes à utiliser.
- Boot : ✅ - Charger un système | À utiliser après la vérification!
- Unload : ✅ - Décharger un système.
- Reboot : ✅ - Redémarrer le système.

## Controller

- Alert : ❌ - Afficher une boîte d'alerte.
- Info : ❌ - Afficher une boîte d'information.
- Prompt : ❌ - Afficher une boîte d'entrée.

## Frames Manager

- Move : ❌ - Déplacer la fenêtre active.
- Resize : ❌ - Changer la taille de la fenêtre active.
- Minimize : ❌ - Minimiser la fenêtre active.
- Maximize : ❌ - Maximiser une fenêtre.
