function countPrimeNumbers()
{
    return 25;
}
let startTime = performance.now();
countPrimeNumbers();
let Time = performance.now();
let finalTime = (Time - startTime);
console.log('Execution time of printing countPrimeNumbers was ' + finalTime + ' milliseconds');
