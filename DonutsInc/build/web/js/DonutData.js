/*
 * @Object( DonutData )
 */
var DonutData = function() {

   this.donutArray0 = [
		     [ "Downtown",         8, 43, 4.5,  12 ],
		     [ "Capitol Hill",     4, 37, 2.0,   8 ],
		     [ "South Lake Union", 9, 23, 6.33, 12 ],
                     [ "Wedgewood",        2, 28, 1.25,  6 ],
		     [ "Ballard", 	   8, 58, 3.75, 24 ]
                    ];
                    
   this.donutArray  = [
		     [ ["Downtown",         "500 5th Avenue",    "Seattle", "WA", "91100" ], 8, 43, 4.5,  12 ],
		     [ ["Capitol Hill",     "1500 Broadway",     "Seattle", "WA", "91200" ], 4, 37, 2.0,   8 ],
		     [ ["South Lake Union", "150 Terry Street",  "Seattle", "WA", "91300" ], 9, 23, 6.33, 12 ],
                     [ ["Greenlake",        "45th Street",       "Seattle", "WA", "91400" ], 2, 28, 1.25,  6 ],
		     [ ["Ballard",          "2500 Market Street","Seattle", "WA", "91500" ], 8, 58, 3.75, 24 ]
                    ];
                    
    this.donutArray2 = [
        
                       ];

   this.getData = function() {
      return this.donutArray;
   }

   this.getLength = function() {
      return donutArray.length;
   }

};
