## Website Performance Optimization portfolio project


####Part 1: Optimize PageSpeed Insights score for index.html

Optimizations:

 1. Removed fonts
 1. Added media print and media portrait to CSS
 1. Compress and inline CSS
 1. Added link to pizzeria.jpg
 1. Added async to js
 1. Compress HTML, Js,CSS and pictures with Grunt

Steps to run and measure PageSpeed:

 1.To inspect the site run in the terminal

    $> cd /WebsiteOptimization-portfolio/dist
    $> python -m SimpleHTTPServer 8080

 2.Download and install ngrok to make your local server accessible remotely and then run in the terminal

    $> cd /path/to/your-project-folder
    $> ngrok http 8080

Copy the public URL ngrok gives you and running it through PageSpeed Insights


####Part 2: Optimize Frames per Second in pizza.html

Optimizations:

 1.Repair two function in Javascript avoiding repetition
