# Projet réseau social en Angular pour Julien D.

Pour un utilisateur non-connecté, le header affiche seulement les liens vers la page de connexion et d'inscription.
La page d'inscription permet de créer un nouvel utilisateur puis renvoie vers la page de connexion.
Toutes les requêtes vers l'API sont traitées par le service ApiService.

Lors de la connexion, on stocke le token dans le service TokenService, qui permettra de savoir à tout moment si l'utilisateur est connecté ou pas. On stocke aussi l'ID et le pseudo de l'utilisateur dans le service CurrentUserService pour par la suite identifier les profils, articles et commentaires dont l'utilisateur connecté est l'auteur pour permettre leur édition et suppression, ainsi que d'éventuellement afficher le pseudo de l'utilisateur connecté sans refaire une requête à l'API.

Une fois connecté, le header n'affiche plus les liens vers la connexion et l'inscription, mais vers les listes des utilisateurs et des articles, l'ajout d'un article, et la déconnexion.

La liste des utilisateurs liste les pseudos des utilisateurs avec un lien vers leur profil où l'on peut voir plus d'informations, ainsi que leurs 5 derniers articles et 5 derniers commentaires avec un lien vers la page des articles correspondant.
Si c'est le profil de l'utilisateur actuellement connecté, des liens vers la page de modification et suppression sont accessibles.

De la même façon la liste des articles liste tous les articles, avec un lien vers l'article en entier contenant les commentaires liés à celui-ci. Si l'utilisateur connecté est l'auteur de l'article ou de certains commentaires, des liens vers l'édition et la suppression de ceux-ci sont accessibles.

(Notons que la suppression d'un utilisateur possédant des articles ou des commentaires bloque au niveau de l'API ! (pas de suppression en cascade) De même pour les articles possédant des commentaires. Erreur : "`Cannot delete or update a parent row: a foreign key constraint fails (res_social.Commentaire, CONSTRAINT Commentaire_ibfk_1 FOREIGN KEY (id) REFERENCES utilisateur (id))`")

Toutes les pages nécessitant d'être authentifié sont protégées par le guard ConnectedGuard

Le composant header.component.ts et le service token.service.ts sont testés.