//set main namespace 
goog.provide('zoo');   
//get requirements 
goog.require('lime.Director'); 
goog.require('lime.Scene'); 
goog.require('lime.Layer');   
goog.require('lime.GlossyButton');
goog.require('zoo.Map');

//entrypoint 
zoo.start = function(){     

   //game object
   var gameObj = {
      width: 1280,
      height: 720,
      tile_type: 0,
      tile_size: 64,
      num_tiles_x: 32,
      num_tiles_y: 18,
      controlsLayer_w: 1280,
      controlsLayer_h: 64*1.5      
   }

   //player object
   var playerObj = {
      spawn_x: 300,
      spawn_y: 300,
      counter: 0
   }

   var director = new lime.Director(document.body,gameObj.width,gameObj.height);     
   director.makeMobileWebAppCapable();     
   director.setDisplayFPS(false);        

   var gameScene = new lime.Scene().setRenderer(lime.Renderer.CANVAS);
   var mapLayer = new lime.Layer().setAnchorPoint(0, 0);
   var controlsLayer = new lime.Layer().setAnchorPoint(0, 0);

   gameScene.appendChild(mapLayer);
   gameScene.appendChild(controlsLayer);

    //controls area
   var controlArea = new lime.Sprite().setAnchorPoint(0, 0).setPosition(0, 0)
                     .setSize(gameObj.controlsLayer_w, gameObj.controlsLayer_h)
                     .setFill('#0D0D0D')
   controlsLayer.appendChild(controlArea);

   //menu button
   var menuButton = new lime.GlossyButton().setColor('#133242').setText('Menu')
                  .setPosition(60, gameObj.controlsLayer_h/2)
                  .setSize(80, 40);
   controlsLayer.appendChild(menuButton); 

   //counter
   var counterLabel = new lime.Label().setText('#'+playerObj.counter).setFontColor('#E8FC08')
                     .setPosition(gameObj.controlsLayer_w-50, gameObj.controlsLayer_h/2);
   controlsLayer.appendChild(counterLabel); 

   //create map elements
   for(var i=0; i<gameObj.num_tiles_x; i++) {   
      for(var j=0; j<gameObj.num_tiles_y; j++) {
        if (j===0) { 
            gameObj.tile_type = 0;
            var mapElementS = new zoo.Map(gameObj, playerObj).setPosition(-i*gameObj.tile_size+gameObj.tile_size/2, -j*gameObj.tile_size+gameObj.tile_size/2);
            mapLayer.appendChild(mapElementS);
         } else {
            gameObj.tile_type = 0;
            var mapElement = new zoo.Map(gameObj, playerObj).setPosition(i*gameObj.tile_size, j*gameObj.tile_size);
            gameObj.tile_type = 1;
            var mapElement2 = new zoo.Map(gameObj, playerObj).setPosition(i*gameObj.tile_size+gameObj.tile_size/2, j*gameObj.tile_size+gameObj.tile_size/2);
            mapLayer.appendChild(mapElement);
            mapLayer.appendChild(mapElement2);
         }          
      }
    }

   director.replaceScene(gameScene); 
}