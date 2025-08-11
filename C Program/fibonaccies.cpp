#include<iostream>
using namespace std;
int main()
{
    int a=0,b=1,c,n,i;
    cout<<"Enter number:";
    cin>>n;
    cout<<"The fibonaccies series is"<<endl;
    cout<<a<<endl;
    cout<<b<<endl;
    for(i=1;i<=n;i++)
    {
        c=a+b;
        cout<<c<<endl;
        a=b;
        b=c;
    }
    return 0;
}