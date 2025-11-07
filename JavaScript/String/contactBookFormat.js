let contacts = [ 
    { name: "Ali", phone: "12345", email: "ali@example.com" }, 
    { name: "Sara", phone: "67890", email: "sara@example.com" }, 
    { name: "John", phone: "55555", email: "john@example.com" } 
  ]; 
  
  function printContacts(contacts){
    contacts.forEach(arr=>{
      console.log(`Name: ${arr.name} | Phone: ${arr.phone} | Email: ${arr.email}`)
    })
  }
  printContacts(contacts)