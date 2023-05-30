#include<iostream>
using namespace std;

char matA[3][3];
int index1,index2;

void check(int i,int j){
    char a =  matA[i][j];
    if (i==0 && j==0)
    {
        if (((a==matA[0][1]) && (a==matA[0][2])) || ((a==matA[1][0]) && (a==matA[2][0])) || ((a==matA[1][1]) && (a==matA[2][2])))
        {
            cout<<endl<<a<<" WINS!!\n";
            exit(0);
        }
        
    }
    
    if (i==0 && j==1)
    {
        if (((a==matA[0][0]) && (a==matA[0][2])) || ((a==matA[1][1]) && (a==matA[2][1])))
        {
            cout<<endl<<a<<" WINS!!\n";
            exit(0);
        }
        
    }
    
    if (i==0 && j==2)
    {
        if (((a==matA[0][1]) && (a==matA[0][0])) || ((a==matA[1][2]) && (a==matA[2][2])) || ((a==matA[1][1]) && (a==matA[2][0])))
        {
            cout<<endl<<a<<" WINS!!\n";
            exit(0);
        }
        
    }
    if (i==1 && j==0)
    {
        if (((a==matA[0][0]) && (a==matA[2][0])) || ((a==matA[1][1]) && (a==matA[1][2])))
        {
            cout<<endl<<a<<" WINS!!\n";
            exit(0);
        }
        
    }
    if (i==1 && j==1)
    {
        if (((a==matA[0][1]) && (a==matA[2][1])) || ((a==matA[1][0]) && (a==matA[1][2])) || ((a==matA[0][0]) && (a==matA[2][2])) || ((a==matA[2][0]) && (a==matA[0][2])))
        {
            cout<<endl<<a<<" WINS!!\n";
            exit(0);
        }
        
    }
    if (i==1 && j==2)
    {
        if (((a==matA[0][2]) && (a==matA[2][2])) || ((a==matA[1][0]) && (a==matA[1][1])))
        {
            cout<<endl<<a<<" WINS!!\n";
            exit(0);
        }
        
    }
    if (i==2 && j==0)
    {
        if ((a==matA[0][0] && a==matA[1][0]) || ((a==matA[2][1]) && (a==matA[2][2])) || ((a==matA[1][1]) && (a==matA[0][2])))
        {
            cout<<endl<<a<<" WINS!!\n";
            exit(0);
        }
        
    }
    if (i==2 && j==1)
    {
        if (((a==matA[0][1]) && (a==matA[1][1])) || ((a==matA[2][0]) && (a==matA[2][2])))
        {
            cout<<endl<<a<<" WINS!!\n";
            exit(0);
        }
        
    }
    if (i==2 && j==2)
    {
        if (((a==matA[0][2]) && (a==matA[1][2])) || ((a==matA[2][1]) && (a==matA[2][0])) || ((a==matA[1][1]) && (a==matA[0][0])))
        {
            cout<<endl<<a<<" WINS!!\n";
            exit(0);
        }
        
    }
    
    
}

void checkError(){
    while(matA[index1][index2]=='x' or matA[index1][index2]=='o'){
        cout<<"\nIndex already filled\n"<<"Please Try Again...\n";
        cin>>index1>>index2;
        if (matA[index1][index2]!='x' and matA[index1][index2]!='o')
        {
            break;
        }
    }
    while((index1!=0 and index1!=1 and index1!=2) or (index2!=0 and index2!=1 and index2!=2))
    {
        cout<<"Invalid index!!!\n"<<"Please Try Again...\n";
        cin>>index1>>index2;
        if ((index1==0 || index1==1 || index1==2) && (index2==0 || index2==1 || index2==2))
        {
            break;
        }
    }
    return;
}

void display(){
    for (int i = 0; i < 3; i++)
    {
        cout<<endl;
        for (int j = 0; j < 3; j++)
        {
            cout<<matA[i][j]<<"\t";            
        }
        
    }
    return;
}

void input1(){
    cout<<"\nPlayer1 to play:\n";
    cin>>index1>>index2;
    checkError();
    matA[index1][index2]='x';
}

void input2(){
    cout<<"\nPlayer2 to play:\n";
    cin>>index1>>index2;
    checkError();
    matA[index1][index2]='o';
}

int main(){
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            matA[i][j]='-';
        }
        
    }
    
    display();
    cout<<"\nplayer1:x\t"<<"player2:o\n";\
    for (int i = 0; i < 9; i++)
    {
        if (i%2==0)
        {
            input1();
            display();
            check(index1,index2);
        }
        else{
            input2();
            display();
            check(index1,index2);
        }
        if(i==8){
            cout<<"\nDRAW MATCH!";
        }
    }
     
    return 0;
}