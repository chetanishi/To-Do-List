#include<iostream>
using namespace std;
class demo
{
    int a,b,sum,mul,div,mod;
    public:
    void put()
    {
    cout<<"Enter the number:"<<endl;
    cin>>a;
    cout<<"Enter the second nummbr:"<<endl;
    cin>>b;
    sum=a+b;
    cout<<"The addition of two variable is:"<<sum<<endl;
    mul=a*b;
    cout<<"The multiplication of two variable is:"<<mul<<endl;
    div=a/b;
    cout<<"The division is two variable is:"<<div<<endl;
    mod=a%b;
    cout<<"The modolus of two varible is:"<<mod<<endl;
  }
};

int main()
{
    demo d;
    d.put();

}