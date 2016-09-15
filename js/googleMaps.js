
                  

  /*Reload the map when mouse enters the element*/                          
    $("#button_click").on("click", function() {

                                var locations = [
                                  ['Victoria BC', 48.4267596, -123.3934356, 1 ],
                                  ['Kelowna BC', 49.9184761, -119.4077215, 1 ],
                            
                                ];

                                var map = new google.maps.Map(document.getElementById('map'), {
                                  zoom: 7,
                                  center: new google.maps.LatLng(50.3667002, -126.2089337),
                                  mapTypeId: google.maps.MapTypeId.ROADMAP
                                });

                                var infowindow = new google.maps.InfoWindow();

                                var marker, i;

                                for (i = 0; i < locations.length; i++) {  
                                  marker = new google.maps.Marker({
                                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                                    map: map
                                  });

                                  google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                    return function() {
                                      infowindow.setContent(locations[i][0]);
                                      infowindow.open(map, marker);
                                    }
                                  })(marker, i));
                            }
    });
