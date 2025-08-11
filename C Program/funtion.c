#include<stdio.h>
int add(int,int);  // funtion declaration
int mul(int,int);
int div(int,int);
int sub(int,int);
int mod(int,int);
int main()
{
   int a,b;
   int sum=add(a=2,b=6);
   int m=mul(a=4,b=4);
   int d=div(a=20,b=4);
   int s=sub(a=20,2);
   int m1=mod(a=4,2);
   printf("\nThe addition of two number:%d",sum);
   printf("\nThe multiplication is:%d",m);
   printf("\n The division of two variable is:%d",d);
   printf("\n The substraction of two number is:%d",s);
   printf("\n The modulous of two number is:%d",m1);
   return 0;
}

int add(int a,int b)            // funtion call
{
    return a+b;
}

int mul(int a,int b)
{
    return a*b;
}

int div(int a,int b)
{
    return a/b;
}

int sub(int a,int b)
{
    return a-b;
}

int mod(int a,int b)
{
    return a%b;
}