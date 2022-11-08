import math

n = 1
f = 0

while n != 100:
    if (n % 2 == 0):
        f += math.pow(n,2)
    else:
        f -= math.pow(n,2)
    n+=1

print(f)