setTimeout(function countPrimeNumbers()
{
    return 25;
}, 0);
let startTime = performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
let endTime = performance.now();
let finalTime = (endTime - startTime);

console.log('Execution time of calculating prime numbers 100 times was ' + finalTime + ' milliseconds.');
