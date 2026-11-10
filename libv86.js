// Automatischer Fallback-Loader für v86
import("https://jsdelivr.net")
  .then(() => {
    console.log("v86-Core erfolgreich geladen.");
  })
  .catch((err) => console.error("Fehler beim Laden des Emulators:", err));

