@echo off
title Exporting frames to files
mkdir frames
python exporter.py

title Importing frames to presentation
node importer.js

echo Done. Press any key to exit...
pause >nul