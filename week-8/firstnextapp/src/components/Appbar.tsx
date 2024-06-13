// Appbar.jsx or Appbar.js

import React from 'react';
import {Searchbar} from './Searchbar';  // Importing default export

export const Appbar = () => {
    return (
        <div className="flex justify-between">
            <div>yt</div>
            <Searchbar />
            <div>si</div>
        </div>
    );
}


