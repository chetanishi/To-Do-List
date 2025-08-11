#include<iostream>
#include<process.h>
using namespace std;

class demo
{
    int n,i,a[10],p,q,k,item;
   
    public:
     void get()
    {
         cout<<"Enter the size of element:";
         cin>>n;
         cout<<"Enter a element in array:";
         for(i=0;i<n;i++)
        {
            cin>>a[i];
        }
    }

    void insert()
    {
        cout<<"Enter the position of element:";
        cin>>p;
        cout<<"Enter a element:";
        cin>>item;
        k=n;
        while(k>p)
        {
            a[k+1]=a[k];
            k--;
        }
        a[k]=item;
        n++;
    }

    void del()
    {
        cout<<"Enter the position of element:";
        cin>>p;
        q=p;
        while(q<=n-1)
        {
            a[q]=a[q+1];
            q++;

        }
        n--;
    }

    void dis()
    {
        cout<<"\n The element in array is:\n";
        for(i=0;i<n;i++)
        {
            cout<<a[i]<<" ";
        }
    }
};

int main()
{

    demo d;
    d.get();
    int ch;
    cout<<"\n 1.insert 2.dis 3.del 4.exit\n";
    while(ch!=4)
    {
        cout<<"Enter a choice:"<<endl;
        cin>>ch;
        switch(ch)
        {
            case 1: d.insert();
                    break;
            case 2: d.dis();
                    break;
            case 3: d.del();
                    break;
            case 4: exit(0);
                    break;
        }
    }
    return 0;
}