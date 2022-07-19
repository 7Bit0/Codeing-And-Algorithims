input = open("robotin.txt", "r")
output = open("robotout.txt", "w")

# X, Y
poz = (0,0)
inPathLen = int(input.readline())
inPath = input.readline()

for i in inPath:
    if i == "N":
        poz = (poz[0], poz[1]+1)
    elif i == "S":
        poz = (poz[0], poz[1]-1)
    elif i == "E":
        poz = (poz[0]-1, poz[1])
    elif i == "W":
        poz = (poz[0]+1, poz[1])
    else:
        print("Error")
        break

output.write(str(abs(poz[0]) + abs(poz[1])))
output.close()
input.close()