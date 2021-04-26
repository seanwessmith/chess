from punctuator import Punctuator
from pathlib import Path

p = Punctuator('model.pcl')

pathlist = Path('transcripts').glob('*.txt')
for path in pathlist:
     # because path is object not string
     path_in_str = str(path)
     # print(path_in_str)
     text = open(path_in_str)
     punctuated = p.punctuate(text.read());
     f = open('punctuated/' + path_in_str, "w")
     f.write(punctuated)
     f.close()
