from punctuator import Punctuator

p = Punctuator('model.pcl')

text = open('33EpuPv4ULw-transcript.txt')
punctuated = p.punctuate(text.read());

f = open("transcript-punctuated.txt", "w")
f.write(punctuated)
f.close()