// - When the user clicks on the map, create a new DOM element and position it where they clicked.
// You can render a styled div or an image for the marker element.
// You can access the mouse coordinates with the pageX and pageY properties of the event object.
// You can position the marker by setting it to position: absolute, its container to position: relative,
// and its left and top css properties to a calculated value based on the mouse coordinate.
angular.module('goldRush', [])
    .controller('goldCtrl', function() {
        var gold = this;
        console.log('Gold Found');
        // - When the user clicks on the map, create a new DOM element and position it where they clicked.
        gold.markers = [];

        // You can access the mouse coordinates with the pageX and pageY properties of the event object.
        gold.addMarker = function($event) {
            console.log('Marker Event', $event);
            // $event.preventDefault();
            gold.markers.push({
                left: $event.pageX + 'px',
                top: $event.pageY + 'px'
            });
        };

        gold.removeMarker = function($event, $index) {
            // console.log('Marker', $event, $index);
            console.log("Marker", $index);
            gold.markers.splice($index, 1);
        };
    });
