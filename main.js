
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Interactive SVG Drawing Tool</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 30px;
    }
    h2 {
      margin-bottom: 10px;
    }
    svg {
      border: 2px solid #333;
      background: #f9f9f9;
      cursor: crosshair;
    }
  </style>
</head>
<body>
  <h2>Interactive SVG Drawing Tool</h2>
  <svg id="drawingArea" width="600" height="400"></svg>

  <script>
    const svg = document.getElementById("drawingArea");
    let drawing = false;
    let rect = null;
    let startX, startY;

    // When mouse button pressed
    svg.addEventListener("mousedown", (e) => {
      drawing = true;
      startX = e.offsetX;
      startY = e.offsetY;

      // Create a new rectangle
      rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", startX);
      rect.setAttribute("y", startY);
      rect.setAttribute("width", 0);
      rect.setAttribute("height", 0);
      rect.setAttribute("fill", "rgba(0, 150, 255, 0.3)");
      rect.setAttribute("stroke", "blue");
      rect.setAttribute("stroke-width", 2);
      svg.appendChild(rect);
    });

    // When mouse moves
    svg.addEventListener("mousemove", (e) => {
      if (!drawing) return;
      const currentX = e.offsetX;
      const currentY = e.offsetY;

      const width = currentX - startX;
      const height = currentY - startY;

      rect.setAttribute("width", Math.abs(width));
      rect.setAttribute("height", Math.abs(height));
      rect.setAttribute("x", width < 0 ? currentX : startX);
      rect.setAttribute("y", height < 0 ? currentY : startY);
    });

    // When mouse button released
    svg.addEventListener("mouseup", () => {
      drawing = false;
      rect = null;
    });
  </script>
</body>
</html>
