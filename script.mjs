document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner");

  for (let i = 1; i <= 100; i++) {
    const circleContainer = document.createElement("div");
    circleContainer.className = "circle-container";

    const circle = document.createElement("div");
    circle.className = "circle";

    // Set circle size and animation details
    const particleBaseSize = 8;
    const circleSize = Math.random() * particleBaseSize;
    circleContainer.style.width = `${circleSize}px`;
    circleContainer.style.height = `${circleSize}px`;

    const startPositionY = Math.random() * 8 + 20;
    const moveDuration = 28000 + Math.random() * 9000;
    const animationDelay = Math.random() * 35000;

    const keyframes = `
            @keyframes move-frames-${i} {
                from {
                    transform: translate3d(${
                      Math.random() * 100
                    }vw, ${startPositionY}vh, 0);
                }
                to {
                    transform: translate3d(${Math.random() * 100}vw, ${
      -startPositionY - Math.random() * 30
    }vh, 0);
                }
            }
        `;
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    circleContainer.style.animationName = `move-frames-${i}`;
    circleContainer.style.animationDuration = `${moveDuration}ms`;
    circleContainer.style.animationDelay = `${animationDelay}ms`;

    circle.style.animationDelay = `${Math.random() * 4000}ms`;

    circleContainer.appendChild(circle);
    banner.appendChild(circleContainer);
  }
});
