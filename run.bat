@echo off
title Exporting frames to files
mkdir frames
python exporter.py

title Importing frames to presentation
node importer.js

del frames /f /q

echo Done. Press any key to exit...
pause >nul
