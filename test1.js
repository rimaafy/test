function convertSecondsToTime() {
    var seconds = prompt("Masukkan jumlah detik:");
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;
  
    console.log("Jumlah jam: " + hours);
    console.log("Jumlah menit: " + minutes);
    console.log("Jumlah detik: " + remainingSeconds);
  }
  
  // memanggil number of seconds
  convertSecondsToTime();
  