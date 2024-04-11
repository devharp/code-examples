function calculateCoordinates(degrees$, radius) {
    
    degrees$ = degrees$ % 360;
    const quadrantDegrees = degrees$ % 90;
    const quadrant = ((degrees$ - quadrantDegrees) / 90);
    const beta = ( quadrant & 1 );
    const alpha = ( quadrant & 2 ) >> 1 ^ ( beta );
    
    const degrees = ( beta ? 90 : 0 ) + ( quadrantDegrees * (beta ? -1 : 1) );
    var radians = (degrees) * Math.PI / 180;

    // Calculate the opposite and adjacent sides
    const opposite = Math.sin(radians) * radius;
    const adjacent = Math.cos(radians) * radius;
    
    // Calculate x and y coordinates
    const x = 0 + radius + ( adjacent * ( alpha ? 1 : -1 ) );
    const y = 0 + radius + ( opposite * ( ( quadrant > 1 ) ? 1 : -1 ) );
    Object.entries(
        { 
            opposite,
            adjacent,
            quadrantDegrees,
            degrees,
            quadrant,
            alpha, beta,
            x, y,

        }
    ).map(([key, value]) => console.log(key, ': ', value))
    
    return { x, y };
}

// Example usage
var degrees = 270 + 90; // Angle in degrees
var radius = 4; // Radius of the circle
var { x, y } = calculateCoordinates(degrees, radius);