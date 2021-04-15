import cv2
import config

vidcap = cv2.VideoCapture(config.videoPath)
success,image = vidcap.read()
count = 0
success = True

while success:
  success,image = vidcap.read()

  if not success:
    break

  cv2.imwrite("frames/%d.png" % count, image)
  cv2.waitKey(1)
  print('%d. frame exported.' % count)
  count += 1

print('Frames exported to files successfully.')