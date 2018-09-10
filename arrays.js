// movie1 = "Pacific Rim"
// movies = ["Pacfic","L&S"]

//Example Kirsten used to explain arrays in Class

const movies = ["Lilo and Stitch","Hawaii 5-0","Jarrasic Park"];
// store different types of elements

const elements = ["Hello", 7,{message:"Howzit mom" }, true];

console.log(movies.length);
console.log(elements.length);
console.log(movies[1]);

//*Iterating over an array */

for(i = 0; i < movies.length; i++)
{
console.log(movies[i]);
}

//using the for-of method 
let ofMovies;
for(ofMovie of movies)
{
console.log(ofMovie); //doesn't catch the index
                        
}

movies.forEach(myElement =>{
    console.log(`For Loop ${myElement}`); // fat arrow (=>) makes it an anonymous function
});

//********ADDING TO AN ARRAY */

movies.push("Magnum PI"); // goes to the heap.

console.log(movies[movies.length-1]);


// add to beginning of an array use unshift

movies.unshift("50 First Dates");
console.log(movies[0]);

//remove the last element from an array
movies.pop();

// put it into a new variable 
let theEndElement = movies.pop();

// splice (index to start , number of elements to remove)

movies.splice(1,2); // removes two elements from the array