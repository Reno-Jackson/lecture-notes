////////////////////////////////////////
////////Gold-Rush Coordinates///////////
///////////////////////////////////////

angular.module('GoldRush', []) // speaking in code: declare an angular module called GoldRush with no dependencies
    .controller('GoldStreakMarkers', function(){
        console.info('Gold Streak Markers loaded');

        var goldMarkers = this;

        goldMarkers.markers = [];

        // ng-click handler
        goldMarkers.addMarker = function($event) {
            console.log('Marker Event', $event);

            // $event.preventDefault();
            goldMarkers.markers.push({
                left: $event.pageX +'px',
                top:  $event.pageY +'px'
            });
        };

        goldMarkers.removeMarker = function($event, $index) {
            // console.log('Marker', $event, $index);
            console.log("Marker", $index);
            goldMarkers.markers.splice($index,1); (REMEMBER... for interviews)
        };
    });
