//ZADATAK 7: How many MB of additional memory we have if we buy a 4GB USB stick? How many news articles each in size 98KB can fit in it?

      var KilB =1;
      var MB = 1000 * KilB;
      var GB = 1000 * MB;

      var USB = 4 * GB;
      var articles = 98 * KilB;

      console.log(USB);
      console.log(USB/articles);*

  // Bolji način:
      let mbInGB = 1000;
      let kbInGB = 1000000;

      console.log(4*mbInGB);

      let articleSize = 98;
      let articalsFitUSB = 4*kbInGB / articleSize;

      console.log(Math.floor(articalsFitUSB));



