const isNone = ( value ) => (value == 0 || value == null || value == undefined);
const factor = {
  'c': {
    'c': (x) => Number(x),
    'f': (x) => Number(x * 9/5 + 32),
    'k': (x) => Number(x + 273.15),
  },
  'f': {
    'c': (x) => Number((x - 32) * 5/9),
    'f': (x) => Number(x),
    'k': (x) => Number((x - 32) * 5/9 + 273.15),
  },
  'k': {
    'c': (x) => Number(x - 273.15),
    'f': (x) => Number((x - 273.15) * 9/5 + 32),
    'k': (x) => Number(x),
  }
};

export const convertFactor = (value, from, to) => !isNone(value) && factor[from][to](value).toFixed(2);

/**
It's funny how this file can be expresed just like
export const convertFactor=(V,F,T)=>!(V==0||V==null||V==undefined)&&{'c':{'c':(x)=>x,'f':(x)=>Number(x*9/5+32),'k':(x)=>Number(x+273.15)},'f':{'c':(x)=>Number((x-32)*5/9),'f':(x)=>x,'k':(x)=>Number((x-32)*5/9+273.15)},'k':{'c':(x)=>Number(x-273.15),'f':(x)=>Number((x-273.15)*9/5+32),'k':(x)=>x}}[F][T](V).toFixed(2);

But it's too dark
*/
