//REMOVE DUPLICATE
			function removeDuplicate(arr){
        var exists = [],
        outArr = [], 
        elm;

        for(var i =0; i<arr.length; i++){
          elm = arr[i];
          console.log("i is " + i + " exists[" + i + "] is " + exists[i]);
          if(!exists[elm]){
            outArr.push(elm);
            exists[elm] = true;
          }
        }
        console.log("exists is " + exists);
        return outArr.join(" ");

      }

      document.write("remove duplicate 1,3,3,3,1,5,6,7,8,1:   " + removeDuplicate([1,3,3,3,1,5,6,7,8,1]) + "<br/><br/>");
      //= [1, 3, 5, 6, 7, 8]
