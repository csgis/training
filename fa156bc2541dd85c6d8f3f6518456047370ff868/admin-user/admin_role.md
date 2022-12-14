<!-- the Menu -->
<link rel="stylesheet" media="all" href="../styles.css" />
<div id="logo"><a href="https://csgis.de">© CSGIS 2022</a></div>
<div id="menu"></div>
<div id="jumpMenu"></div>
<script src="../menu.js"></script>
<script src="../jumpmenu.js"></script>
<!-- the Menu -->


# Die GeoNode Rollen

Nach der Installation von GeoNode kennt das System folgende Rollen:

- Anonym
  - Alle nicht angemeldeten Besucher
- Registriert
  - Nutzer mit einem Benutzer-Account
- Mitarbeiter
  - Registrierte Nutzer mit erweiterten Rechten
- Administratoren
  - Registrierte Nutzer mit vollständigen Rechten

Im folgenden betrachten wir die dritte und vierte Rolle Mitarbeiter und Administrator.

## Der Administrator im Frontend

> Frontend meint den für die Öffentlichkeit sichtbaren Bereich. Ihm gegenüber steht das Backend, welches das System im Hintergrund bezeichnet. Administratoren Rollen dürfen per se alles sehen, bearbeiten oder löschen.

Das erste Administratoren-Konto wird bei der Installation des Systems angelegt.  
Die Definition des Users befindet sich [hier](https://github.com/GeoNode/geonode/blob/master/.env#L107-L119).


### Zusätzliche Menüpunkte

Administratoren werden im Menü zusätzliche Optionen angezeigt:

![Erweitertes Menü für Administratoren](images/admin-menu.jpeg)

Dies sind:

- Invite User
  - Neue Benutzer einladen
- Add User
  - Neue User anlegen
- Create Group
  - Gruppen erstellen um User zu gruppieren.

### Invite User
Über die Maske Invite User besteht die Möglichkeit, eine E-Mail Einladung / Aufforderung an Dritte zu senden.  
Der E-Mail Text bittet um Registrierung.

![Maske Benutzer einladen](images/benutzer_einladen.jpeg)

#### Add User

Über die Maske "Add User" besteht die Möglichkeit, neue Nutzer anzulegen.

![Benutzer hinzufügen](images/add_user.jpeg)

### Create Group

Über die Maske "Create Group" können Gruppen angelegt werden.
![Gruppe erstellen](images/create_group.jpeg).

Gruppen sind eine Möglichkeit User zusammenzufassen. Dies ist sinnvoll um Datensätze schnell mit Rechten für einen größeren Personenkreis zu geben.

Standardmäßig dürfen nur Administratoren neue Gruppen anlegen sowie Gruppen Administratoren festlegen. Wie wir auch der Mitarbeiter-Rolle erlauben Gruppen anzulegen, sehen wir später.

Beim Anlegen einer neuen Gruppe stehen folgende Eingabefelder zur Verfügung:

- Titel der Gruppe
- Logo der Gruppe
  - Wird für die Übersicht verwendet
- Beschreibung der Gruppe
- E-Mail
  - E-Mail Adresse die verwendet wird, um ein oder alle Gruppenmitglieder, ähnlich einer Mailingliste, zu kontaktieren
- Schlüsselwörter
  - Eine durch Leerzeichen oder Kommas getrennte Stichwortliste
- Zugriff
  - Öffentlich: Jeder registrierte Nutzer kann eine öffentliche Gruppe betrachten und dieser beitreten
  - Öffentlich (nur auf Einladung): Jeder registrierte Benutzer kann die Gruppe betrachten. Nur eingeladene Benutzer können beitreten. 
  - Nur eingeladene Benutzer können teilnehmen
- Kategorien
  - Weitere Gruppierung der Gruppe. Funktioniert in GeoNode 4 nur fehlerbehaftet (Bug: Kann nicht mehr gelöscht werden) 
  
Nach dem Anlegen einer neuen Gruppe erscheint diese für alle User in der Gruppen-Übersicht:

![Übersicht der Gruppen](images/view_gropus.jpeg)

Weiterhin können Administratoren User hinzufügen sowie Details der Gruppe ändern.

![Gruppen verwalten](images/manage_groups.jpeg)

## Übungen

1. Legen Sie eine neue Gruppe an und weisen Sie der neuen Gruppe einige Mitglieder zu.


## Weiterführende Links

- [GeoNode Docs – Gruppen anlegen](https://docs.geonode.org/en/master/admin/admin_panel/index.html?highlight=group#managing-a-group).