import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    console.log(response)
    // inspect the response and see that it has data field
    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const {data:products} = response;

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)

    products.forEach(item => {
      console.log(item.name)
    });

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    mappedProducts= products.filter((item)=>item.name.includes("Şal")).map(item=>({image:item.image,name:item.name}))
    console.log(mappedProducts)
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop

        // as a table
          /* t = document.createElement('table');
          mappedProducts.forEach(entry => {
            const [key, value] = [entry.image, entry.name];
            console.log(key + " " + value);
            var c, r;
            r = t.insertRow(0); 
            c = r.insertCell(0);
            var img = document.createElement('img');
            img.src = key;
            c.appendChild(img);
            c = r.insertCell(1);
            c.innerHTML = value;
            document.getElementById("addtable").appendChild(t);
          }) */

          mappedProducts.forEach(entry => {
            var t = document.createElement('div');
            t.className='createddiv';
            const [key, value] = [entry.image, entry.name];
            console.log(key + " " + value);
            var img = document.createElement('img');
            img.src = key;
            t.appendChild(img);
            var c = document.createElement('span');
            c.innerText = value;
            t.appendChild(c);
            document.getElementById("addtable").appendChild(t);
          })
          
          //iterate through columns
          //columns would be accessed using the "col" variable assigned in the for loop
      }
    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish

    
  );
