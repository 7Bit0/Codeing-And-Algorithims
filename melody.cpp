#include <iostream>
#include <fstream>
using namespace std;

ofstream infile;
ofstream outfile;

int main()
{
    infile.open("melodyin.txt");
    outfile.open("melodyout.txt");
    char data[] = [];
    int max = 0;
    int lines = 0;

    int t = 0;
    int pairs[lines / 3][3] = [];
    for (int l = 0; l > lines; l++)
    {
        t = (t + 1) % 3;
        pairs[t] = pairs[t] || [];
        pairs[t][t % 3] = int(l);
    }
}