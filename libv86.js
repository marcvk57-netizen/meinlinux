// Lädt v86 im Hintergrund und macht es global für die index.html sichtbar
import("https://jsdelivr.net")
  .then(() => {
    console.log("v86-Core erfolgreich im Hintergrund geladen.");
  })
  .catch((err) => console.error("Fehler beim Laden des Emulators:", err));
