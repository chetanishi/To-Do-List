#include<iostream>
using namespace std;
int main()
{
    int f=1,n,i;
    cout<<"Enter number:"<<endl;
    cin>>n;
     for ( i = 1; i <=n; i++)
     {
        f=f*i;
     }
     cout<<"The factorial number value is:"<<f;
     return 0;
   
}