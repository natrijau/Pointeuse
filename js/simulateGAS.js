// Simulateur de google.script.run pour le test local.
// Chargé UNIQUEMENT hors Apps Script (quand google.script.run est absent) :
// s'il existe déjà un objet natif `google`, on ne fait rien.
if (typeof google !== "undefined" && google.script && google.script.run) return;

const google = {
  script: {
    run: {
      withSuccessHandler: function(callback) {
        return {
          getLastAction: function(userName){
            callback("Terminé");
          },
          recordStart: function(userName){
            callback("✅ Démarré pour " + userName + " à " + new Date().toLocaleTimeString());
          },
          recordStop: function(userName){
            callback("🛑 Terminé pour " + userName + " à " + new Date().toLocaleTimeString());
          },
          loadProfilePage: function(userName){
            const totalTimeWeek = "11:15:00";
            const dayTotals = [
              {day:"Lundi",time:"03:30:00"},
              {day:"Mardi",time:"03:45:00"},
              {day:"Mercredi",time:"04:00:00"}
            ];
            let table = `<table>
              <thead><tr><th>Jour</th><th>Temps</th></tr></thead>
              <tbody>${dayTotals.map(d=>`<tr><td>${d.day}</td><td>${d.time}</td></tr>`).join('')}</tbody>
            </table>`;
            callback(`<div class="card"><h2>Profil : ${userName}</h2><p>Total semaine : ${totalTimeWeek}</p>${table}
            <button onclick="goHome()">Retour</button></div>`);
          },
          loadHistoryPage: function(userName){
            const history = [
              { timestamp: "19/10/2025 09:00", action: "Démarré", duration: "" },
              { timestamp: "19/10/2025 12:30", action: "Terminé", duration: "03:30:00" },
            ];
            let table = `<table>
              <thead><tr><th>Date</th><th>Action</th><th>Durée</th></tr></thead>
              <tbody>${history.map(h=>`<tr><td>${h.timestamp}</td><td>${h.action}</td><td>${h.duration||'-'}</td></tr>`).join('')}</tbody>
            </table>`;
            callback(`<div class="card"><h2>Historique de ${userName}</h2>${table}
            <button onclick="goHome()">Retour</button></div>`);
          }
        };
      }
    }
  }
};