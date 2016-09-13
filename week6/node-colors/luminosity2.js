function color(){
    var luminosity= 0;
    var r = process.argv[2]
    var g = process.argv[3]
    var b = process.argv[4]
    var luminosity= 0.2126*r + 0.7152*g + 0.0722*b;
    console.log(process.argv[2], process.argv[3], process.argv[4]);
    console.log(luminosity);
    return(luminosity)
};
var light =color()

function islight(light){
    if (light >=155){
    console.log('light');
}
else{
    console.log('dark')
    }
}
islight(light);
