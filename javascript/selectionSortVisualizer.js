var drawCanvas = function(size, x, y) {
    rect(x, y, size*32, size*29); 
};


var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

//xoffset and yoffset are used to create a margin (distance betweeen the canvas and the numbers displayed in the table)

var xoffset = 20; 
var yoffset = 25; 
/*  displayArray prints an array as a row inside canvas - shows the state of the array in the current loop of the selection sort algorithm
	ARGS: (array) - the array to display, 
		  (loop) - current iteration within the algorithm  - determines where should the numbers be displayed relative to the table 
		  (x, y)  - initial coordinates that situate the displayed array on the screen 
 */ 
var displayArray = function(array, loop, x, y) {
    textFont(createFont("monospace"), 12);
   
    for (var i = 0; i < array.length; i++ ) {
        fill(77, 1, 1);
        text(array[i],  ( x + xoffset + (i*29) ) , (y + yoffset + (loop*28) ) );   
        

    } 
};
/* Selection sort sorts the array, visualizes swapping of number within the array. 
    ARGS: (array) - array to sort
          (x, y ) -  coordinates of where the table should be drawn on the screen 
*/ 
var selectionSort = function(array, x, y) {
    var min = 0; 
    drawCanvas(array.length, x, y); 
    for (var i = 0; i < array.length; i++) {
        min = indexOfMinimum(array, i); 
        displayArray(array, i, x, y);
		//if statent prevents drawing the circles and lines for the last loop
        if (i < array.length - 1) { 
        line(
             x + 25 + i  * 29, y + 9 + (i + 1) * 28,
             x + 24 + min * 29, y + (i + 1) * 28
             ); 
        noFill(); 
        ellipse(x + 28 + i  * 29, y + 19 + (i + 1) * 28, 30, 21); //circles around numbers
        ellipse(x + 29 + min * 29, y + -9 + (i + 1) * 28, 30, 20);
        }
        
        swap(array, i, min); 
        
    }
};

//random array to sort 
var array = [floor(random(0, 999)), floor(random(0, 999)),floor(random(0, 999)),floor(random(0, 954)),floor(random(0, 999)),floor(random(0, 999)),floor(random(0, 999)),floor(random(0, 999)),floor(random(0, 999))];

array = selectionSort(array, 62, 62);
