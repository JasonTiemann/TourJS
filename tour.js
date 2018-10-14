(function(tour){
	tour.tourMaster = function(tourSelector, fullPathToImages, tourImageJSON, tourHeightRatio){
		currentPlace = Object.keys(tourImageJSON)[0];
		tourJSON = tourImageJSON;
		tourId = tourSelector;
		pathToImages = fullPathToImages;
		if (!pathToImages.endsWith("/")){pathToImages+="/";}
		heightRatio = tourHeightRatio;
		preloadedImages={};
		tourDiv = document.querySelector(tourSelector);
		tourDiv.style.position = "absolute";
		tourDiv.style.backgroundSize = "cover";

		// Create Input Arrows

		leftImg = document.createElement("img");
		leftImg.src = pathToImages+"leftTurn.png";
		leftDirectionDiv = document.createElement("div");
		leftDirectionDiv.appendChild(leftImg)
		leftDirection = tourDiv.appendChild(leftDirectionDiv);
		leftDirection.id = "tourLeft";
		leftDirection.className = "tourDirection";
		
		rightImg = document.createElement("img");
		rightImg.src = pathToImages+"leftTurn.png";
		rightDirectionDiv = document.createElement("div");
		rightDirectionDiv.appendChild(rightImg);
		rightDirection = tourDiv.appendChild(rightDirectionDiv);
		rightDirection.id = "tourRight";
		rightDirection.className = "tourDirection";
		

		forwardsImg = document.createElement("img");
		forwardsImg.src = pathToImages+"forwards.png";
		forwardsDirectionDiv = document.createElement("div");
		forwardsDirectionDiv.appendChild(forwardsImg);
		forwardsDirection = tourDiv.appendChild(forwardsDirectionDiv);
		forwardsDirection.id = "tourForwards";
		forwardsDirection.className = "tourDirection";
		
		backwardsImg = document.createElement("img");
		backwardsImg.src = pathToImages+"forwards.png";
		backwardsDirectionDiv = document.createElement("div");
		backwardsDirectionDiv.appendChild(backwardsImg);
		backwardsDirection = tourDiv.appendChild(backwardsDirectionDiv);
		backwardsDirection.id = "tourBackwards";
		backwardsDirection.className = "tourDirection";

		tourRooms = Object.keys(tourJSON);

		tourContainer = document.querySelector(tourId);
		resizeTour();
		window.addEventListener("resize", resizeTour);
		showTourImage();
		function resizeTour(){
			this.tourContainer.style.height = (this.tourContainer.offsetWidth*this.heightRatio)+"px";
		}
		function showTourImage(){
			this.tourContainer.style.backgroundImage = "url("+this.pathToImages+this.tourJSON[this.currentPlace]["image"];
			hideAllDirections();
			var possibleDirections = Object.keys(this.tourJSON[this.currentPlace]["connections"]);
			for (i=0;i<possibleDirections.length;i++){
				var directionGoTo = this.tourJSON[currentPlace]["connections"][possibleDirections[i]];
				showDirection(possibleDirections[i]);
				linkDirection(possibleDirections[i],directionGoTo);
				// Preload unloaded images
				if(Object.keys(this.preloadedImages).indexOf(possibleDirections[i])==-1){
					this.preloadedImages[directionGoTo] = new Image();
					this.preloadedImages[directionGoTo].src = this.pathToImages + this.tourJSON[directionGoTo]["image"];
				}
			}
		}
		function linkDirection(direction, newPlace1){
			var newPlace = newPlace1
			var controller = this;
			function clickPlace(){
				controller.currentPlace = newPlace;
				showTourImage();
			}
			switch (direction){
				case "forwards":
					this.forwardsDirection.onclick = clickPlace;
					break;
				case "backwards":
					this.backwardsDirection.onclick = clickPlace;
					break;
				case "left":
					this.leftDirection.onclick = clickPlace;
					break;
				case "right":
					this.rightDirection.onclick = clickPlace;
					break;
			}
		}
		function showDirection(direction){
			switch (direction){
				case "forwards":
					this.forwardsDirection.style.display = "flex";
					break;
				case "backwards":
					this.backwardsDirection.style.display = "flex";
					break;
				case "left":
					this.leftDirection.style.display = "flex";
					break;
				case "right":
					this.rightDirection.style.display = "flex";
					break;
			}
		}
		function hideAllDirections(){
			this.forwardsDirection.style.display = "none";
			this.backwardsDirection.style.display = "none";
			this.leftDirection.style.display = "none";
			this.rightDirection.style.display = "none";
		}
	}
})(window.tour = window.tour || {})