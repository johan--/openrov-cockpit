
        


(function (window, $, undefined) {
    'use strict';

    var Touchcontroller;
    
    var is_touch_device = 'ontouchstart' in document.documentElement;
    /*
     *
     *	GAMEPAD.DPAD_UP 	= {BUTTON_DOWN: function(){cockpitEventEmitter.emit('rovpilot.adjustLights',.1)} };
	GAMEPAD.DPAD_DOWN	= {BUTTON_DOWN: function(){cockpitEventEmitter.emit('rovpilot.adjustLights',-.1)} };
	GAMEPAD.Y		= {BUTTON_DOWN: function(){cockpitEventEmitter.emit('rovpilot.adjustCameraTilt',.1)} };	
	GAMEPAD.B		= {BUTTON_DOWN: function(){cockpitEventEmitter.emit('rovpilot.setCameraTilt',0)} };
	GAMEPAD.A		= {BUTTON_DOWN: function(){cockpitEventEmitter.emit('rovpilot.adjustCameraTilt',-.1)} };
	GAMEPAD.RB		= {BUTTON_DOWN: function(){cockpitEventEmitter.emit('toggleAllTrimHold')} };
	GAMEPAD.START		= {BUTTON_DOWN: function(){cockpitEventEmitter.emit('incrimentPowerLevel')} };
    
	GAMEPAD.LEFT_STICK_X	= {AXIS_CHANGED: function(v){cockpitEventEmitter.emit('setYaw',v)} };
	GAMEPAD.LEFT_STICK_Y	= {AXIS_CHANGED: function(v){cockpitEventEmitter.emit('setThrottle',-1*v)} };
	GAMEPAD.RIGHT_STICK_Y	= {AXIS_CHANGED: function(v){cockpitEventEmitter.emit('setLift',-1*v)} };
	
	*/
    //if (!is_touch_device) return;
    
          $( function() {
        $("#outter-videocontainer").append('<canvas id="touchcontroller" class="row-fluid full-height testoverlay"></canvas>');
        GameController.init( {
            canvas: 'touchcontroller',
            left: {
                type: 'joystick', 
                position: { left: '15%', bottom: '15%' },
                touchMove: function( details ) {
                    cockpitEventEmitter.emit('setThrottle',details.normalizedY);
                    cockpitEventEmitter.emit('setYaw',details.normalizedX);
                    
                    console.log( details.dx );
                    console.log( details.dy );
                    console.log( details.max );
                    console.log( details.normalizedX );
                    console.log( details.normalizedY );
                }
            }, 
            right: { 
                type: 'joystick', 
                position: { right: '15%', bottom: '15%' } ,
                touchMove: function( details ) {
                    cockpitEventEmitter.emit('setLift',details.normalizedY);
                }
            }
        })
         }); 

    Touchcontroller = function Touchcontroller(cockpit) {
        console.log("Loading Touchcontroller plugin in the browser.");
        //if (!is_touch_device) return;
        // Instance variables
        this.cockpit = cockpit;
        
 

        // Add required UI elements
        //$("#menu").prepend('<div id="example" >[GameController]</div>');
    };

    window.Cockpit.plugins.push(Touchcontroller);

}(window, jQuery));
