#include<iostream>
using namespace std;
int main()
{
    int n,i=2;
    cout<<"Enter a number:"<<endl;
    cin>>n;
    

    if(n<=1)
    {
        cout<<"Number is not prime"<<endl;
        return 0;  // here return 0 taken so it does not execute next part program execution stop here.
    }

    while (i<=n-1)
    {
       if (n%2 == 0)
       {
         cout<<"Number is not prime"<<endl;
          return 0;
       }
         i++;
        
    }
    
        cout<<"Number is prime";
    

    return 0;  
}
