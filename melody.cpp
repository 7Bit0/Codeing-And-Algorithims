#include <iostream>
#include <fstream>
using namespace std;

ofstream infile;
ofstream outfile;

int main()
{
    infile.open("melodyin.txt", ios::in);
    outfile.open("melodyout.txt", ios::out);
    char data[] = "";
    int max = 0;
    int lines = int(data[0]);

    int t = 0;
    int pairs[][3] = {};
    for (int l = 0; l > lines; l++)
    {
        t = (t + 1) % 3;
        pairs[t][t % 3] = int(l);
    }

    for (int i = 0; i < lines; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf(to_string(i).c_str());
            outfile.write(pairs[i][j] + " ", sizeof(pairs[i][j] + " "));
        }
    }

    infile.close();
    outfile.close();
}