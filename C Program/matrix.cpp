#include<iostream>
using namespace std;
class matrix
{
   private:
   int a[5][5],b[5][5],c[5][5],d[5][5],e[5][5],f[5][5];
   int i,j,p,q,n,m;
   public:
   void get()
   {
      cout<<"Enter the row in first matrix:"<<endl;
      cin>>p;
      cout<<"Enter the column in first matrix:"<<endl;
      cin>>q;
      cout<<"Enter the element in first matrix:";
      for(i=0;i<p;i++)
      {
         for(j=0;j<q;j++)
         {
            cin>>a[i][j];
         }
           cout<<endl;
      }

      cout<<"Enter the row in seconde matrix:"<<endl;
      cin>>m;
      cout<<"Enter the column in second matrix:"<<endl;
      cin>>n;
      cout<<"Enter a element in second matrix:";
      for(i=0;i<m;i++)
      {
         for(j=0;j<n;j++)
         {
            cin>>b[i][j];
         }
         cout<<endl;
      }
   }

     void addition()
     {
         cout<<"The addition of two matrix is:"<<endl;
        for(i=0;i<p;i++)
        {
         for(j=0;j<q;j++)
         {
            c[i][j]=a[i][j]+b[i][j];
            
            cout<<c[i][j]<<" ";
         }
           cout<<endl;
        }
     }

     void trans()
     {
      cout<<"The transformation of column into row:"<<endl;
      for(i=0;i<n;i++)
      {
         for(j=0;j<m;j++)
         {
            d[i][j]=a[j][i];
            cout<<d[i][j]<<" ";
         }
         cout<<endl;
      }
    }

    void substraction()
    {
      cout<<"The substraction of two matrix is:"<<endl;
      for(i=0;i<p;i++)
      {
         for(j=0;j<q;j++)
         {
            e[i][j]=a[i][j]-b[i][j];
            cout<<e[i][j]<<" ";
         }
         cout<<endl;
      }
    }

    void mul()
    {
      cout<<"The multiplication of two matrix is:"<<endl;
      if(q==n)
      {
         for(i=0;i<p;i++)
         {
            for(j=0;j<n;j++)
            {
               f[i][j]=0;
               for(int k=0;k<n;k++)
               {
                  f[i][j]=f[i][j]+a[i][k]*b[k][j];
               }
               cout<<f[i][j]<<" ";
            }
            cout<<endl;
         }
      }

         else
         cout<<"The multiplication not possible";
    }      
      
    
};


int main()
{
   matrix m;
   m.get();
   int ch;
   cout<<" 1.Addition, 2.Trans, 3.Substraction, 4.Multiplication, 5.Exit:"<<endl;
   while(ch!=5)
   {
      cout<<"Enter a choice:"<<endl;
      cin>>ch;
      switch(ch)
      {
         case 1: m.addition();
                  break;

         case 2:m.trans();
                  break;

         case 3:m.substraction();
                  break;

         case 4:m.mul();
                  break;

         case 5: exit(0);
                  break;
      }
   }
   
   return 0;
}