/*
Calculate average
Write a function which calculates the average of the numbers in a given list.

    Note: Empty arrays should return 0.*/

function findAverage(array) {
    return (array.reduce((sum, acc)=> sum+acc, 0)/array.length);
}