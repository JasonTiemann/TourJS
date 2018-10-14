# TourJS

A minimal javascript framework for making 2d tours of any place

## How to instantiate a tour

To set up a tour use the below code
```
window.addEventListener("load",function(){
	tour = new window.tour.tourMaster(tourDiv, imagePath, tourJSON, heightToWidthRatio);
});
```

## TourDiv

The tourDiv is a css selector for the div you want to turn into a tour  
The div you are turning into a tour can be sized and placed anywhere, you may also opt to put a border on it or padding.

## imagePath

The path to the room and direction images in the style of "./path/to/img"

## TourJSON

To stitch the tour together all the rooms need to be in a JSON string with all the necessary information, below is the way to set it up

```
tourJSON = {
	"Room Name":{
		image:"Name_of_room_image_in_imagepath.jpg",
		connections:{
			forwards:"Name of Room (not image) forwards from this image (if applicable)",
			left:"Name of Room (not image) left from this image (if applicable)",
			right:"Name of Room (not image) right from this image (if applicable)",
			backwards:"Name of Room (not image) forwards from this image (if applicable)"
		}
	},
	"Room 2 Name":{
		image:"example.png",
		connections:{
			forwards:"Room 3",
			backwards:"Room 1",
			left:"Room 2 Left"
		}
	}
}
```

## heightToWidthRatio

This is the height to width ratio of your tour images, for example if your images are 1000x500, then it should be 0.5
