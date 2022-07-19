input = open("artin.txt", "r")
output = open("artout.txt", "w")

xvals = []
yvals = []

holes = int(input.readline())
for i in range(0,holes):
    hole = input.readline().split(' ')
    yvals.append(int(hole[0]))
    xvals.append(int(hole[1]))

output.write(str(
    (max(yvals) - min(yvals)) * (max(xvals) - min(xvals))
))

output.close()
input.close()