module.exports = {
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    fontFamily:{
      kaushan:['Playfair Display'],
    },
    extend: {
      colors:{
        purple:{
          light:'DOBDF4',
          DEFAULT:'#845BB3',
          dark:'#494D5F'
        },
        blue:{
        light:'#AOD2EB',
        DEFAULT:'#OO49B7',
        dark:'39AOCA'
      },  
      },   
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
