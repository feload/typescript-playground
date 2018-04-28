// Enums.

enum Volume {
  min = 1,
  med, // => 2   ??
  max = 10
}

console.log(Volume.min, Volume[0]); // => 1, 1

function getVolume (volume: string) : number {
  return Volume["min"];
}