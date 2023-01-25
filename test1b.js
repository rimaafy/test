function convertTimeToSeconds() {
    var hours = prompt("Masukkan jumlah jam:");
    var minutes = prompt("Masukkan jumlah menit:");
    var seconds = prompt("Masukkan jumlah detik:");
    return (hours * 3600) + (minutes * 60) + seconds;
  }
  
  // Example usage
  var totalSeconds = convertTimeToSeconds();
  console.log("Nilai desimalnya adalah " + totalSeconds);
  