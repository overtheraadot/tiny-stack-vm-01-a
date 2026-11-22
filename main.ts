import{readFileSync as r,mkdirSync as m,writeFileSync as w,readdirSync as d}from"node:fs";
import{join as j}from"node:path";
const I=process.env.MAKEFUN_INPUT_DIR||"/input",O=process.env.MAKEFUN_OUTPUT_DIR||"/output";
for(const q of d(I).sort()){
let P=r(j(I,q,"program.bin")),N=r(j(I,q,"input.bin")),T=n=>new Int32Array(n),D=T(256),C=T(64),M=T(256),s=0,c=0,p=0,t=0,u=0,o=[],e=0,n=P.length,a,b,H=(x,y)=>{if(s<x)throw 2;if(s-x+y>256)throw 3};
try{L:for(;;){
if(t++==1e6)throw 10;
if(p<0||p>=n)throw 9;
let k=P[p],y=p+1,f=k==1?1:k==2?4:k>47&&k<52?2:0;
if(p+f>=n)throw 9;
p=y+f;
let v=((P[y]|P[y+1]<<8)<<16)>>16;
switch(k){
case 0:break L;
case 1:H(0,1);D[s++]=(P[y]<<24)>>24;break;
case 2:H(0,1);D[s++]=P.readInt32LE(y);break;
case 3:H(1,0);s--;break;
case 4:H(1,2);D[s]=D[s-1];s++;break;
case 5:H(2,2);a=D[s-1];D[s-1]=D[s-2];D[s-2]=a;break;
case 6:H(2,3);D[s]=D[s-2];s++;break;
case 7:H(3,3);a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;break;
case 23:H(1,1);D[s-1]=-D[s-1];break;
case 27:H(1,1);D[s-1]=~D[s-1];break;
case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:case 26:case 28:case 29:case 30:case 32:case 33:case 34:
H(2,1);b=D[s-1];a=D[s-2];
if(k>18&&k<23&&!b)throw 4;
D[s-2]=[a+b,a-b,Math.imul(a,b),a/b,a%b,(a>>>0)/(b>>>0),(a>>>0)%(b>>>0),0,a&b,a|b,a^b,0,a<<(b&31),a>>(b&31),a>>>(b&31),0,a==b?1:0,a<b?1:0,(a>>>0)<(b>>>0)?1:0][k-16];
s--;break;
case 48:p+=v;break;
case 49:H(1,0);if(!D[--s])p+=v;break;
case 50:H(1,0);if(D[--s])p+=v;break;
case 51:if(c>63)throw 7;C[c++]=p;p=P[y]|P[y+1]<<8;break;
case 52:if(!c)throw 8;p=C[--c];break;
case 64:H(1,1);a=D[s-1];if(a<0||a>255)throw 6;D[s-1]=M[a];break;
case 65:H(2,0);a=D[s-1];b=D[s-2];if(a<0||a>255)throw 6;s-=2;M[a]=b;break;
case 80:H(1,0);a=""+D[s-1];if(o.length+a.length>65536)throw 11;s--;o.push(...Buffer.from(a));break;
case 81:H(1,0);if(o.length>65535)throw 11;o.push(D[--s]&255);break;
case 82:H(0,1);D[s++]=u<N.length?N[u++]:-1;break;
case 83:H(1,0);e=D[--s]&255;break L;
default:throw 5;
}}}catch(x){e=x}
m(j(O,q),{recursive:true});
w(j(O,q,"stdout.bin"),Buffer.from(o));
w(j(O,q,"exit.txt"),e+"\n");}
