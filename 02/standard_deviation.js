
var sd = mu = n = a = b =0;
var x=[];

n = Number(prompt("enter N value"));

x.length=n

for (var i = 0; i <x.length; i++) {
    x[i]=Number(prompt("enter element value"));
    mu+=x[i];

}

mu=mu/n;

for (var i = 0; i < x.length; i++) {
   a+=Math.pow(x[i]-mu,2);
}

b=a/n;

sd=Math.sqrt(b);


console.log(sd);


