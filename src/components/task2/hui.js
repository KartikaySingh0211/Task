const tooltip = document.getElementById("tooltip");
	const tooltipTitle = document.getElementById("tooltip-title");
	const tooltipContent = document.getElementById("tooltip-content");
	const areas = document.querySelectorAll("area");

	function setTooltipPosition(event) {
		const img = document.getElementById("image");
		const imgRect = img.getBoundingClientRect();

		// Set tooltip near the hovered area
		tooltip.style.left = `${imgRect.left + event.target.coords.split(",")[0] - 50}px`;
		tooltip.style.top = `${imgRect.top + parseInt(event.target.coords.split(",")[1], 10) + 20}px`;
	}

	areas.forEach((area) => {
		area.addEventListener("mouseenter", (event) => {
			// Cast event.target to HTMLAreaElement
			const target = event.target as HTMLAreaElement;

			setTooltipPosition(event);

			// Update tooltip content based on area hovered
			tooltipTitle.innerText = target.getAttribute("data-title");
			tooltipContent.innerText = target.getAttribute("data-content");

			tooltip.style.opacity = "1"; // Fade in
			tooltip.classList.add("z-50");
		});

		area.addEventListener("mouseleave", () => {
			tooltip.style.opacity = "0"; // Fade out
		});
	});

	// Optional: Re-hide tooltip if the window resizes
	window.addEventListener("resize", () => {
		tooltip.style.opacity = "0";
	});