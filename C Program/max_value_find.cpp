#include<iostream>
using namespace std;

int main()
{
  int a,b;
  cout<<"Enter two number:";
  cin>>a>>b;
  if(a>b)
  {
    cout<<"A variable value is greater:"<<a<<endl;
  }
 

  else if(a==b)
  {
    cout<<"Both variable value same:"<<a<<" "<<b<<endl;
  }

  else
  {
    cout<<"B variable is greater:"<<b<<endl;
  }
  
  return 0;
}