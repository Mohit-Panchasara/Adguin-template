import React from 'react';
import {useTheme} from 'next-themes'


const CustomButton: React.FC = () => {
    const {theme, setTheme} = useTheme()
  return (
    <button className="bg-none text-white font-bold py-2 px-4 rounded" 
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <img className="w-5 h-10 inline-block mr-2" src="/theme.svg" alt="Custom Icon" /></button>
 
  );
};

export default CustomButton;